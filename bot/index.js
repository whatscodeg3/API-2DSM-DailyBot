const robo = require('./self_modules/dailybot')
const api = require('./self_modules/api')
const  agenda  = require ( 'node-schedule' );

async function getPdfs() {
    try {
        const responseAssociados = await api.get('/associados');
        const associados = responseAssociados.data
        for(const associado of associados){
            const responseProcessos = await api.get(`/processos/users/${associado.id}`)
            const processos = responseProcessos.data
            let linksBD;
            if(processos === 'null'){
                linksBD = []
            }
            else{
                linksBD = (processos.map(item => item.link))
            }
            const objetoAssociado = await robo(associado.nome, Number(associado.id), linksBD);
            if(objetoAssociado.links != []){
                for(const processoAssociado of objetoAssociado.links){
                        await api.post('/processos', {
                            idUsuario: objetoAssociado.idAssociado,
                            link: processoAssociado,                     
                            dataProcesso: objetoAssociado.dataProcesso,
                            conteudo: `trecho pdf de {}`,
                        });
                }
            }

        }     
    }
    catch (error) {
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

