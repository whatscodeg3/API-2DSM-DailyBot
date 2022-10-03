import json
import re
import requests
from os import listdir
from PyPDF2 import PdfFileReader



nomes_pdfs=[]
def listandoFiles(diretorio):
    for i in listdir(diretorio):
        nomes_pdfs.append(i)
        
listandoFiles('PDFs/')



url_processos = 'http://localhost:7071/processos/'
r=requests.get(url_processos)
lista_processos = json.loads(r.text)

for associado in lista_processos:
    id_processo = associado['id']
    data_processo = associado['dataProcesso']
    link_processo = associado['link']
    associado_id = associado['associadoId']    
    for nome in nomes_pdfs:
        pdf_para_leitura = PdfFileReader('PDFs/'+nome)
        page_object = pdf_para_leitura.getPage(0)
        texto_do_pdf = page_object.extract_text()
        blocos_de_texto = texto_do_pdf.split('\n')
        for i in blocos_de_texto:
            nome=nome.replace('.pdf','')
            if re.search(nome, i, re.IGNORECASE):
                bloco_relacionado_associado = i
                ##enviar para o banco

