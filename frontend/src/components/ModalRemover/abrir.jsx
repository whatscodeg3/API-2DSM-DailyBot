import React, { Component } from "react";

import './removestyleAbrirFecharModal.css'
import { BotaoModal } from './styles'

function BotaoAbrirModal() {


    // abrir
    function abrir(id) {
        document.querySelector('.modal').classList.add('show')
    }

    return (
        <>
            <BotaoModal type="button" value="Excluir" onClick={abrir} style={{ fontFamily: 'Roboto' }}></BotaoModal>
        </>
    )

}

export default BotaoAbrirModal;