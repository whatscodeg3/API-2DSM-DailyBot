//importação de bibliotecas
const puppeteer = require('puppeteer');  //precisa ser instalada > npm install puppeteer
const readlineSync = require('readline-sync');

// coleta do nome a buscar
console.log('Bem vindo ao Bot Buscador do Diário do Estado de São Paulo 🤖');
const nomeAssociado = readlineSync.question('Informe um nome para procurar:'); //captura do nome

async function robo() { //inicio da funcão assincrona
  const browser = await puppeteer.launch({ headless: false }); //inicia o navegador e o mantem aberto 
  const page = await browser.newPage(); //abre nova guia e insere na varia page
  
  await page.goto('http://www.diariooficial.sp.gov.br/DO/BuscaDO2001_11_2.aspx#'); //adiciona o link em page e nevega
  await page.type('#txtPalavrasChave', `"${nomeAssociado}"`);

  const coletaDataHoje = await page.evaluate(() => {
    return document.querySelector("#txtDataFim").value;
  }); //coleta a data de hoje do campo data final
    
  await page.click('#content_content_content_chkGrupos_4'); //clica no grupo executivo
  await page.click('#content_content_content_chkGrupos_1'); //clica no grupo cidade de são paulo
  const inserirDataHoje = await page.$('#txtDataInicio'); //seleciona o campo data inicial
  await inserirDataHoje.click({ clickCount: 3 }); //clica 3 vezes neste campo
  await inserirDataHoje.type(coletaDataHoje); //insere a data coletada na variavel coletaDataHoje
  await page.click('#content_content_content_btnBuscar'); //clica no botão buscar
  
  const botao = await page.waitForSelector('body > div:nth-child(5) > div > a.joyride-close-tip', { visible: true }); //aguarda modal aparecer e encontra botão fechar e insere na variavel botao
  await botao.click(); //clica no botao fechar do modal

  
  
  const coletaLink = await page.evaluate(() => {
    return document.querySelectorAll('a.bg-light.text-dark').href;
  }); //coleta o primeiro link

  console.log(coletaLink) //mostra link no navegador

//await browser.close();   //fechar navegador

}

robo();  //executa o robô