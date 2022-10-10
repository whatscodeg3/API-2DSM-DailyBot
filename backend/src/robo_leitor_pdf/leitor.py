import re
import wget
import os
from PyPDF2 import PdfFileReader

import mysql.connector

def leitor():
    db_connection = mysql.connector.connect(host="localhost", user="root", passwd="root", database="apimidall")
    cursor = db_connection.cursor(buffered=True)


    def select(sql):
        cursor.execute(sql)
        listaDaConsultaDosProcessos = []
        for (idAssociado, nome, id_processo, link ) in cursor:
            listaDaConsultaDosProcessos.append([idAssociado, nome, id_processo, link])
        return listaDaConsultaDosProcessos

    def update(sql, valor, valor2):
        valor = valor
        valor2 = valor2
        return cursor.execute(sql,(valor,valor2))
            
    consulta = select("select a.id, a.nome, p.id, p.link  from associados a, processos p where a.id = p.associadoId;")
    for consultaPosicao in consulta:
        wget.download(consultaPosicao[3], f'PDFs/{consultaPosicao[1]}.pdf')
        pdf_para_leitura = PdfFileReader(f'PDFs/{consultaPosicao[1]}.pdf')
        page_object = pdf_para_leitura.getPage(0)
        texto_do_pdf = page_object.extract_text()
        print(page_object)
        blocos_de_texto = texto_do_pdf.split('\n')
        for i in blocos_de_texto:
            nome= consultaPosicao[1]
            if re.search(nome, i, re.IGNORECASE):
                bloco_relacionado_associado = i
                bloco_relacionado_associado = '...'+bloco_relacionado_associado+'...'
                sql = ("update processos set conteudo = %s"
                        "where id= %s")
                up = update(sql, bloco_relacionado_associado, consultaPosicao[2])
                os.remove(f'PDFs/{consultaPosicao[1]}.pdf')

    cursor.close()
    db_connection.commit()
    db_connection.close()
    os.remove('monitorando/arquivo_monitoramento.txt')
