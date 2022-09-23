import json
import re
from os import listdir
from PyPDF2 import PdfFileReader

nomes_pdfs=[]
def listandoFiles(diretorio):
    for i in listdir(diretorio):
        nomes_pdfs.append(i)
        
listandoFiles('PDFs/')

dicio={}
lista=[]
for nome in nomes_pdfs:
    pdf_para_leitura = PdfFileReader('PDFs/'+nome)
    page_object = pdf_para_leitura.getPage(0)
    texto_do_pdf = page_object.extract_text()
    blocos_de_texto = texto_do_pdf.split('\n')
    for i in blocos_de_texto:
        nome=nome.replace('.pdf','')
        if re.search(nome, i, re.IGNORECASE):
            bloco_relacionado_associado = i
            # print(bloco_relacionado_associado)
            dicio['nome']=nome
            dicio['trecho']=bloco_relacionado_associado
            lista.append(dicio)
           

json_object = json.dumps(lista) 
with open("lista.json", "w") as outfile: 
    outfile.write(json_object) 