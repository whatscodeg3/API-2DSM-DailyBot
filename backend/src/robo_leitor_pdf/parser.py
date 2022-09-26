import json
import re
from os import listdir
from PyPDF2 import PdfFileReader

nomes_pdfs=[]
def listandoFiles(diretorio):
    for i in listdir(diretorio):
        nomes_pdfs.append(i)
        
listandoFiles('PDFs/')


lista=[]
for nome in nomes_pdfs:
    pdf_para_leitura = PdfFileReader('PDFs/'+nome)
    page_object = pdf_para_leitura.getPage(0)
    texto_do_pdf = page_object.extract_text()
    blocos_de_texto = texto_do_pdf.split('\n')
    dicio={}
    for i in blocos_de_texto:
        nome=nome.replace('.pdf','')
        if re.search(nome, i, re.IGNORECASE):
            bloco_relacionado_associado = i
            dicio['nome']=nome
            dicio['trecho']=bloco_relacionado_associado
            lista.append(dicio)
            
            
             
with open("lista.json", "w", encoding="utf-8") as jsonfile: 
    json.dump(lista, jsonfile, ensure_ascii=False) 