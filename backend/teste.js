
const fs = require ('fs')

fs.writeFile('./src/robo_leitor_pdf/monitorando/arquivo_monitoramento.txt', 'Terminei minha busca!', (err) => {
    if (err) throw err;
});
