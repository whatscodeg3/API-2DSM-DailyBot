const puppeteer = require('puppeteer');
const download = require('download-pdf');
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
  await page.goto('http://www.diariooficial.sp.gov.br/DO/BuscaDO2001_11_2.aspx#',  {waitUntil: 'load'});
  const dataDia = await page.evaluate(() => {
    return document.querySelector("#txtDataFim").value;
  });
  const dataOntem = `17/09/2022` //data mock *********TODO retirar esse mock e deixar a consulta do diario mesmo e consultar mais lugares no código para remover 
  const dataPonto = dataOntem.replace(/\//g, '.')
  const dataSeparadaInvertida = dataPonto.split('.').reverse()

  const linkBusca = `http://www.diariooficial.sp.gov.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave=%22${nomeAssociadoMais}%22&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d${dataPonto}%3c%3d${dataPonto}%5d(${nomeAssociadoPorcento2})&filtrogrupos=Cidade+de+SP%2c+Executivo+&xhitlist_mh=9999&filtrodatafimsalvar=${dataSeparadaInvertida.join('')}&filtroperiodo=${dataSeparadaInvertida[2]}%2f${dataSeparadaInvertida[1]}%2f${dataSeparadaInvertida[0]}+a+${dataSeparadaInvertida[2]}%2f${dataSeparadaInvertida[1]}%2f${dataSeparadaInvertida[0]}&filtrodatainiciosalvar=${dataSeparadaInvertida.join('')}&filtrogrupossalvar=Cidade+de+SP%2c+Executivo+&xhitlist_hc=%5bXML%5d%5bKwic%2c3%5d&xhitlist_vps=15&filtrotodosgrupos=False&xhitlist_d=Cidade+de+SP%2c+Executivo+&filtrotipopalavraschavesalvar=UP&xhitlist_s=&xhitlist_sel=title%3bField%3adc%3atamanho%3bField%3adc%3adatapubl%3bField%3adc%3acaderno%3bitem-bookmark%3bhit-context&xhitlist_xsl=xhitlist.xsl`

  //acessando link modificado com as informações para busca
  await page.goto(linkBusca, {waitUntil: 'load'});
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
        linkPdf = linkPdf.slice(0, (linkPdf.search('.pdf'))+4)
        switch(linksBD.includes(linkPdf)){
          case true:
            console.log('Já baixei este pdf')
            break;
          case false:
            objetoAssociado.links.push(linkPdf);
        }
      });

      if(objetoAssociado.links != []){
        var pagina = 1;
        for (const pdf of objetoAssociado.links) {
          let options = {
            directory: `assets/pdf/${nomeAssociado}`,//caminho onde será salvo
            filename: `${idAssociado}.${nomeAssociado}.${dataPonto}.${pagina}.pdf` //nome do arquivo com nome do associado,data e id
          }
          download(pdf, options, function (err) {
            if (err) throw err
            console.log('baixado');
          });
          pagina++
        }
      }
  }
  objetoAssociado.dataProcesso = dataOntem
  objetoAssociado.idAssociado = Number(idAssociado);

  //fechando navegador
  await browser.close()
  return objetoAssociado
}
/*------- fim da função robo()--------*/

module.exports = (robo) //exportando modulo

//PARA EDITAR O LINK
/* link = 'http://www.diariooficial.sp.gov.br/DO/GatewayPDF.aspx?link=%2f2022%2fdiario+oficial+cidade+de+sao+paulo%2fsetembro%2f17%2fpag_0041_1e8242c4ef302d5e5c18fdf4a0c6ea08.pdf&pagina=41&data=17/09/2022&caderno=Diário%20Oficial%20Cidade%20de%20São%20Paulo&paginaordenacao=100041'
link = link.slice(0, (link.search('.pdf'))+4)


 console.log(link) */


