//importação de bibliotecas
const puppeteer = require('puppeteer');  //precisa ser instalada > npm install puppeteer
const readlineSync = require('readline-sync'); //precisa ser instalada > npm install readlin-sync
const download = require('download-pdf'); 

// coleta do nome a buscar
const nomeAssociado = readlineSync.question('Informe um nome para procurar:');
const nomeAssociadoMais = nomeAssociado.replace(/ /g,'+'); //insere simbolos + no lugar dos espaços
const nomeAssociadoPorcento2 = nomeAssociadoMais.replace(/ '+' /g, '%2b'); //insere %2b no lugar dos +


// função assincrona robo()
async function robo() {
  //abrindo navegador
  const browser = await puppeteer.launch({ headless: true}); 
  const page = await browser.newPage();

  //coletando a data final que o site oferece para consulta
  await page.goto('http://www.diariooficial.sp.gov.br/DO/BuscaDO2001_11_2.aspx#');
  const dataDia = await page.evaluate(() => {
    return document.querySelector("#txtDataFim").value;
  });
  const dataPonto = dataDia.replace(/\//g, '.')

  //acessando link modificado com as informações para busca
  await page.goto(`http://www.diariooficial.sp.gov.br/DO/BuscaDO2001Resultado_11_3.aspx?filtropalavraschave="${nomeAssociadoMais}"&f=xhitlist&xhitlist_vpc=first&xhitlist_x=Advanced&xhitlist_q=%5bfield+%27dc%3adatapubl%27%3a%3e%3d${dataPonto}%3c%3d${dataPonto}%5d("${nomeAssociadoPorcento2}")&filtrogrupos=Cidade+de+SP%2c+Executivo+&`); 

  //coleta do link do resultado da busca 
  //TODO criar o for para buscar todos os links que resultarem da busca.
  const link = await page.evaluate(() => {
  return document.querySelector("#form > div.container > div > div.col > div:nth-child(4) > div.card-body > p > a").href;
  });

  //modificando link para download
  const pdf = link.replace('BuscaDO2001Documento_11_4.aspx', 'GatewayPDF.aspx') 
  
  //relizando download
  const options = {
    directory: `./backend/src/bot/pdf/${nomeAssociado}`,//caminho onde será salvo
    filename: `${nomeAssociado}.${dataPonto}.pdf` //nome do arquivo com nome do associado e data
  }
  download(pdf, options, function(err){
    if(err) throw err
    console.log('baixado')
  })

  //fechando navegador
  await browser.close();


} // fim da função robo()

//chamando a função robo()
robo();  
