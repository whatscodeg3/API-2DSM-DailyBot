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
            console.log(objetoAssociado)
            if(objetoAssociado.links != []){
                for(const processoAssociado of objetoAssociado.links){
                        await api.post('/processos', {
                            idUsuario: objetoAssociado.idAssociado,
                            link: processoAssociado,                     
                            dataProcesso: objetoAssociado.dataProcesso,
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

// const rule = new agenda.RecurrenceRule(); //criando regrapara agendamento na hora do start 
// rule.dayOfWeek = [new agenda.Range(1, 6)]; // passando o range de 1 a 6 (segunda a sabado)
// rule.hour = 14; //passando a hora 
// rule.minute = 0; //passando os minutos

// const job = agenda.scheduleJob(rule, function(){ //agenda recebendo regra e a função do robô(getPdfs)
//  getPdfs();
// });


/*

agenda.scheduleJob ( ' * * * * * ',  function ( ) {
    getPdfs();
} ) ;

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

