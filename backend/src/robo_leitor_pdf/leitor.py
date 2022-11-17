import re
import wget
import os
from PyPDF2 import PdfFileReader
import smtplib, ssl
from email.message import EmailMessage

import mysql.connector

def email(nome,link,trecho, email, data, caderno):
    msg = EmailMessage()
    msg['From'] = "exempleEmail@outlook.com"
    msg['To'] = str(email)
    msg['Subject'] = "DailyBot - Há uma nova menção no Diário Oficial "
    msg.set_content(f"""
    NOME: {nome}

    DATA: {data}

    CADERNO: {caderno}

    LINK: {link}

    TRECHO: {trecho}

    """)
    context=ssl.create_default_context()

    with smtplib.SMTP('SMTP.office365.com', port=587) as smtp:
        smtp.starttls(context=context)
        smtp.login(msg['From'], "exemplePassword")
        smtp.send_message(msg)


def leitor():
    db_connection = mysql.connector.connect(host="localhost", user="root", passwd="root", database="testandoprojeto")
    cursor = db_connection.cursor(buffered=True)


    def select(sql):
        cursor.execute(sql)
        listaDaConsultaDosProcessos = []
        for (idAssociado, nome, email, id_processo, conteudo, link, dataProcesso, caderno ) in cursor:
            listaDaConsultaDosProcessos.append([idAssociado, nome, email, id_processo, conteudo, link, dataProcesso, caderno])
        return listaDaConsultaDosProcessos

    def update(sql, valor, valor2):
        valor = valor
        valor2 = valor2
        return cursor.execute(sql,(valor,valor2))
            
    consulta = select("select a.id, a.nome, a.email, p.id, p.conteudo, p.link, p.dataProcesso, p.caderno  from associados a, processos p where a.id = p.associadoId;")
    for consultaPosicao in consulta:
        if consultaPosicao[4] == None:
            wget.download(consultaPosicao[5], f'PDFs/{consultaPosicao[1]}.pdf')
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
                    update(sql, bloco_relacionado_associado, consultaPosicao[3])

                    email(nome=consultaPosicao[1], link=consultaPosicao[5], trecho=bloco_relacionado_associado, email=consultaPosicao[2], data=consultaPosicao[6], caderno=consultaPosicao[7])
                    os.remove(f'PDFs/{consultaPosicao[1]}.pdf')

    cursor.close()
    db_connection.commit()
    db_connection.close()
    os.remove('monitorando/arquivo_monitoramento.txt')






