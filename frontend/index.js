const express = require('express')
const app = express()
const robo = require('./static/scripts/dailybot.js')
const api = require('./services/api.js')



app.listen(3000, function (erro) {
    if (erro) {
        console.log('Ocorreu um erro')
    }
    else {
        console.log('Servidor iniciado com sucesso')
    }
})

app.use(express.static('static'))

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/html/home.html")
})

app.get("/dailybot", async function (req, res) {
    try {
        const response = await api.get('/associados');
        const associados = response.data
        for(const associado of associados){
            const objetoAssociado = await robo(associado.nome, Number(associado.id));
            for(const processoAssociado of objetoAssociado.processos){
                 await api.post('/processos', {
                     idUsuario: Number(objetoAssociado.idAssociado),
                     conteudo: processoAssociado
                 });
            }
        }

       //*****************TODO analizar e apagar para sprint 2
        // const users = response.data;
        // users.forEach((user) => {
        //     robo(user.nome, Number(user.id)).then(async objetoUsuario => {
        //         objetoUsuario.processos.forEach(async (processoUsuario) => {
        //             await api.post('/processos', {
        //                 idUsuario: Number(objetoUsuario.idUsuario),
        //                 conteudo: processoUsuario
        //             });
        //         })

        //     })
        // })

        //*******************************************

        res.redirect("/")

    } catch (error) {
        console.log(error);
    }

})


app.get("/historico/:id", async function (req, res) {
    try {
        const id = req.params.id
        const response = await api.get(`/associados/${id}`);
        const user = response.data
        res.sendFile(__dirname + "/html/historico.html");

    } catch (error) {
        console.log(error);
    }

})
