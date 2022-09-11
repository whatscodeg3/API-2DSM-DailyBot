// dataDia = '02/02/2022'
// const dataPonto = dataDia.replace(/\//g, '.')
// console.log(dataPonto) GatewayPDF.aspx

var link  = 'http://www.diariooficial.sp.gov.br/DO/BuscaDO2001Documento_11_4.aspx?link=%2f2022%2fexecutivo+secao+i%2fsetembro%2f10%2fpag_0050_1168983ef2310f3c984022a979550724.pdf&pagina=50&data=10/09/2022&caderno=Executivo%20I&paginaordenacao=100050'

var link2 = link.replace('BuscaDO2001Documento_11_4.aspx', 'GatewayPDF.aspx')

console.log(link2)