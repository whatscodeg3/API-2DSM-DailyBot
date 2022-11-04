import React, { Component } from "react";

import './removestyleAbrirFecharModal.css'

function BotaoAbrirModal() {


    // abrir
    function abrir(id) {
        document.querySelector('.modal').classList.add('show')
    }

    return (
        <>
            <input type="button" value="Excluir" className="botao-modal" onClick={abrir}></input>
        </>
    )

}

export default BotaoAbrirModal;