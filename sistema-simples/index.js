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
app.use(express.static('services'))

app.get("/", function (requisicao, resposta) {
    resposta.sendFile(__dirname + "/html/home.html")

})

app.get("/dailybot", async function (req, resp) {
    try {
        const response = await api.get('/associados');
        const users = response.data;
        users.forEach((user) => {
            robo(user.nome, Number(user.id)).then(async objetoUsuario => {
                objetoUsuario.processos.forEach(async (processoUsuario) => {
                    await api.post('/processos', {
                        idUsuario: Number(objetoUsuario.idUsuario),
                        conteudo: processoUsuario
                    });
                })

            })
        })

        resp.redirect("/")

    } catch (error) {
        console.log(error);
    }

})


