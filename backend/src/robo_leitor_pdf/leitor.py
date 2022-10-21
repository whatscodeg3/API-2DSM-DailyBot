import re
import wget
import os
from PyPDF2 import PdfFileReader
import smtplib, ssl
from email.message import EmailMessage

import mysql.connector

def email(nome, conteudo):
    msg = EmailMessage()
    msg['From'] = "whatscode.g3@outlook.com"
    msg['To'] = "romribkevin@gmail.com"
    msg['Subject'] = "Assunto"
    msg.set_content("")
    context=ssl.create_default_context()

    with smtplib.SMTP('SMTP.office365.com', port=587) as smtp:
        smtp.starttls(context=context)
        smtp.login(msg['From'], "whatscode2022")
        smtp.send_message(msg)


def leitor():
    db_connection = mysql.connector.connect(host="localhost", user="root", passwd="root", database="apimidall")
    cursor = db_connection.cursor(buffered=True)


    def select(sql):
        cursor.execute(sql)
        listaDaConsultaDosProcessos = []
        for (idAssociado, nome, id_processo, conteudo, link ) in cursor:
            listaDaConsultaDosProcessos.append([idAssociado, nome, id_processo, conteudo, link])
        return listaDaConsultaDosProcessos

    def update(sql, valor, valor2):
        valor = valor
        valor2 = valor2
        return cursor.execute(sql,(valor,valor2))
            
    consulta = select("select a.id, a.nome, p.id, p.conteudo, p.link  from associados a, processos p where a.id = p.associadoId;")
    for consultaPosicao in consulta:
        if consultaPosicao[3] == None:
            wget.download(consultaPosicao[4], f'PDFs/{consultaPosicao[1]}.pdf')
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
                    update(sql, bloco_relacionado_associado, consultaPosicao[2])

                    email(nome=consultaPosicao[1], conteudo=consultaPosicao[3])

                    os.remove(f'PDFs/{consultaPosicao[1]}.pdf')

    cursor.close()
    db_connection.commit()
    db_connection.close()
    os.remove('monitorando/arquivo_monitoramento.txt')
