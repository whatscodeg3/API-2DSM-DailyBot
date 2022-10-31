const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

/*------- inicio da função robo --------*/
  async function robo(nomeAssociado, idAssociado, linksBD) {

  objetoAssociado = {
    links: []
  }
  
  const nomeAssociadoMais = nomeAssociado.replace(/ /g, '+'); //insere simbolos + no lugar dos espaços
  const nomeAssociadoPorcento2 = nomeAssociadoMais.replace(/ '+' /g, '%2b'); //insere %2b no lugar dos +

  //abrindo navegador
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  //coletando a data final que o site oferece para consulta
  await page.goto('http://www.diariooficial.sp.gov.br/DO/BuscaDO2001_11_2.aspx#',  {waitUntil: 'load', timeout:0});
  const dataDia = await page.evaluate(() => {
    return document.querySelector("#txtDataFim").value;
  });
  
  const dataQualquer = '17/09/2022'
  const dataPonto = dataQualquer.replace(/\//g, '.')
  const dataSeparadaInvertida = dataPonto.split('.').reverse()

  const linkBusca = `http://www.diariooficial.sp.gov.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave=%22${nomeAssociadoMais}%22&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d${dataPonto}%3c%3d${dataPonto}%5d(${nomeAssociadoPorcento2})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar=${dataSeparadaInvertida.join('')}&filtroperiodo=${dataSeparadaInvertida[2]}%2f${dataSeparadaInvertida[1]}%2f${dataSeparadaInvertida[0]}+a+${dataSeparadaInvertida[2]}%2f${dataSeparadaInvertida[1]}%2f${dataSeparadaInvertida[0]}&filtrodatainiciosalvar=${dataSeparadaInvertida.join('')}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl`

  //acessando link modificado com as informações para busca
  await page.goto(linkBusca, {waitUntil: 'load', timeout: 0});
  const linkResultado = page.url();
  switch (linkResultado.includes('ResultadoNegativo')) {
    case true:
      console.log('Não há resultado na busca')
      break;
    case false:
      const html = await page.content()
      const $ = cheerio.load(html);
      const seletor = '#form > div.container > div > div.col > div.card.shadow-sm.resultadoBuscaItem > div.card-body > p > a.bg-light.text-dark';

      $(seletor).each(function () {
        let linkPdf = this.attribs.href;
        linkPdf = linkPdf.replace(/ /g, '%20')
        linkPdf = 'http://www.diariooficial.sp.gov.br' + linkPdf
        linkPdf = linkPdf.replace('BuscaDO2001Documento_11_4.aspx', 'GatewayPDF.aspx')  
        
        cadernoInicio = linkPdf.search('caderno=') + 8
        cadernoFim = linkPdf.search('&paginao')
        caderno = linkPdf.slice(cadernoInicio,cadernoFim).replace( /%20/g, ' ')

        paginaInicio = linkPdf.search('pagina=') + 7
        paginaFim = linkPdf.search('&data=') 
        pagina = linkPdf.slice(paginaInicio,paginaFim)

        linkPdf = linkPdf.slice(0, (linkPdf.search('.pdf'))+4)

        objetoAssociado.caderno = caderno
        objetoAssociado.pagina = pagina

        switch(linksBD.includes(linkPdf)){
          case true:
            console.log('Já salvei este link')
            break;
          case false:
            objetoAssociado.links.push(linkPdf);
        }
      });

  }
  objetoAssociado.dataProcesso = dataDia
  objetoAssociado.idAssociado = Number(idAssociado);

  //fechando navegador
  await browser.close()
  return objetoAssociado
}
/*------- fim da função robo()--------*/

module.exports = (robo) //exportando modulo

