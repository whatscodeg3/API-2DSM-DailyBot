import React, { Component } from "react";

import './styleAbrirFecharModal.css'
import { BotaoModal } from './style.js'

function BotaoAbrirModal() {


    // abrir
    function abrir() {
        document.querySelector('.modal').classList.add('show')
    }

    return (
        <>
            <BotaoModal type="button" value="Ver mais" onClick={abrir} style={{ fontFamily: 'Roboto' }}></BotaoModal>
        </>
    )

}

export default BotaoAbrirModal;