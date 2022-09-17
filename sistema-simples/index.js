const express = require('express')
const app =  express()
const robo = require('./static/scripts/dailybot.js')

app.listen(3000,function(erro){
    if (erro){
        console.log('Ocorreu um erro')
    } 
    else { 
        console.log('Servidor iniciado com sucesso')
    }
})

app.use(express.static('static'))

app.get("/", function(requisicao, resposta){
    resposta.sendFile(__dirname + "/html/home.html")

})

app.get("/dailybot", function(req, resp){
    let users = ['matheus', 'ensino', 'rua']
    const links = []
    users.forEach((user) => {
        robo(user).then(linksPorUsuario => {
            links.push(linksPorUsuario)
            console.log(linksPorUsuario)
        })
    })
    // setTimeout(() => {console.log(links)}, 15000)
    resp.redirect("/")
})


