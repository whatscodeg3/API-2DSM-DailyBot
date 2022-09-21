import re
from PyPDF2 import PdfFileReader

pdf_para_leitura = PdfFileReader('PDFS/pg_0085.pdf')
page_object = pdf_para_leitura.getPage(0)

texto_do_pdf = page_object.extract_text()

blocos_de_texto = texto_do_pdf.split('\n')


for i in blocos_de_texto:
    if re.search('daniel FELICIANO', i, re.IGNORECASE):
        bloco_relacionado_associado = i


print(bloco_relacionado_associado)
