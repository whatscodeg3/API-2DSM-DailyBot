const fs = require ('fs')
const pdfparser = require ('pdf-parse')

let pdffile = fs.readFileSync('backend/src/robo_leitor_pdf/PDFs/pg_0085.pdf') //{nome.do.pdf}


pdfparser(pdffile)
    .then((data => {
        let texto_do_pdf = data.text; // salvando o texto do pdf (data.text) na variavel texto_do_pdf
        texto_do_pdf = texto_do_pdf.replace(/\n/g, ' '); // tirando a quebra de linha q vem do PDF
        texto_do_pdf = texto_do_pdf.replace(/  +/g, ' '); // tirando os double space do texto


        const splitString = (stringToSplit, separator) => {
            let stringInArray = stringToSplit.split(separator);  // splitando o texto_do_pdf e botando na stringInArray

            let indexPrimeiroNome = stringInArray.indexOf('DANIEL')// {nome.inicial}
            let indexSobrenome = stringInArray.indexOf('FELICIANO') // {nome.sobrenome}

            if(indexPrimeiroNome+1 == indexSobrenome){ // se p index do primeiro nome for seguido do index do sobrenome, qr dizer q realmente achamos a pessoa no meio do PDF
                let trecho = stringInArray.slice(indexPrimeiroNome-30, indexSobrenome+30); // cortando a parte q precisamos da array
                trecho = trecho.join() // transformando o trecho da array em string


                trecho = trecho.replace(/\,\,/g,'*'); // transformando 2 virgulas em outro simbolo para tratar o texto
                trecho = trecho.replace(/\,/g, " "); // transformando 1 virgula em espaço para tratar o texto
                trecho = trecho.replace(/\*/g, ','); // transformando o simbolo em virgula para tratar o texto

                trecho = ('...'+trecho+'...');
                // enviar trecho para o banco
                console.log(trecho)
            } else {
                console.log('n achou o nome')
            }
           
    
        }

        splitString(texto_do_pdf, ' ') // definindo a string para ser splitada e o 'separator' q no caso é um space
        

        
    }))
    .catch((err) => {
        console.log('ERROR')
    });
