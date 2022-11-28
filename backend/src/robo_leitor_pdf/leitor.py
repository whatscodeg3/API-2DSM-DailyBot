import re
import wget
import os
from PyPDF2 import PdfFileReader
import smtplib, ssl
from email.message import EmailMessage

import mysql.connector

def email(nome,link,trecho, email, data, caderno):
    msg = EmailMessage()
    msg['From'] = "ExampleEmail@outlook.com"
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
        smtp.login(msg['From'], "ExamplePassword")
        smtp.send_message(msg)


def leitor():

    db_connection = mysql.connector.connect(host="localhost", user="root", passwd="@root", database="apimidall")
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

    # executa aqui quando clica no botão de tentar reenviar email para cada associado.
    with open("monitorando/arquivo_monitoramento.txt", 'r') as arquivo:
        falhaEmail = arquivo.read()
        if falhaEmail == 'falha no envio do email':
            consulta = select("select a.id, a.nome, a.email, p.id, p.conteudo, p.link, p.dataProcesso, p.caderno  from associados a, processos p where a.id = p.associadoId and p.emailEnviado=0;")

            for processo in consulta:
                try:
                    email(nome=processo[1], link=processo[5], trecho=processo[4], email=processo[2], data=processo[6], caderno=processo[7])                                    
                except smtplib.SMTPAuthenticationError:
                    print(f'\n*** Erro ao enviar email de {processo[1]} ***\n')
                else:
                    print(f'\n*** Email de {processo[1]} enviado com sucesso ***\n') 
                    sql3 = ("update processos set emailEnviado = %s where id= %s;")
                    update(sql3, 1, processo[3] )

            cursor.close()
            db_connection.commit()
            db_connection.close()
            arquivo.close()
            os.remove('monitorando/arquivo_monitoramento.txt')
            return print('\n*** Processo de tentativa de reenvio de email concluído ***\n') 
            
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
                if (consultaPosicao[1] != 'adm'):
                    if re.search(nome, i, re.IGNORECASE):
                        bloco_relacionado_associado = i
                        bloco_texto_associado_list = bloco_relacionado_associado.split(",")

                        c=0
                        for z in bloco_texto_associado_list:
                            if re.search(nome, z, re.IGNORECASE):
                                t1 = bloco_texto_associado_list[c-2:c]
                                t2 = bloco_texto_associado_list[c:c+10]
                                t3 = t1+t2
                                t3_string=''.join(t3)

                                trecho_cortado='...'+t3_string+'...'

                                sql = ("update processos set conteudo = %s"
                                "where id= %s")
                                update(sql, trecho_cortado, consultaPosicao[3])
                                

                                try:
                                    email(nome=consultaPosicao[1], link=consultaPosicao[5], trecho=trecho_cortado, email=consultaPosicao[2], data=consultaPosicao[6], caderno=consultaPosicao[7])                                    
                                except smtplib.SMTPAuthenticationError:
                                    print('\n*** Erro ao enviar email ***\n')
                                    sql2 = ("update processos set emailEnviado = %s where id= %s;")
                                    update(sql2, 0, consultaPosicao[3] )
                                else:
                                    print('\n*** Email enviado com sucesso ***\n')
                                    sql3 = ("update processos set emailEnviado = %s where id= %s;")
                                    update(sql3, 1, consultaPosicao[3] )
                                    
                                os.remove(f'PDFs/{consultaPosicao[1]}.pdf')
                            
                            c=c+1  

    
    
    
    cursor.close()
    db_connection.commit()
    db_connection.close()
    os.remove('monitorando/arquivo_monitoramento.txt')






