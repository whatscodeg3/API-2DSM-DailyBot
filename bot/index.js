const robo = require('./self_modules/dailybot')
const api = require('./self_modules/api')
const  agenda  =  require ( 'node-schedule' );

async function getPdfs() {
    try {
        const responseAssociados = await api.get('/associados');
        const associados = responseAssociados.data
        console.log(responseAssociados)
        for(const associado of associados){
            const objetoAssociado = await robo(associado.nome, Number(associado.id));
            for(const processoAssociado of objetoAssociado.processos){
                const responseProcessos = await api.get(`/processos/users/${objetoAssociado.idAssociado}`)
                const linksPorAssociado = responseProcessos ///*************************** */
                 await api.post('/processos', {
                     idUsuario: objetoAssociado.idAssociado,                     
                     dataProcesso: objetoAssociado.dataProcesso,
                     conteudo: processoAssociado,
                 });
            }
        }

    } catch (error) {
        console.log(error);
    }   

}
//chamandoa  afunção getPdfs()
getPdfs();


// agenda.scheduleJob ( '*/2 * * * * ',  function ( ) {
//     getPdfs();
// } ) ;

// const  job  =  agenda.scheduleJob ( '8 10 * * *' ,  function ( ) {
//     getPdfs();
// } ) ;


/*

*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)

*/

