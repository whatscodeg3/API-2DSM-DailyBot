import React, { Component } from "react";

import './styleAbrirFecharModal.css'

function BotaoAbrirModal() {


    // abrir
    function abrir() {
        document.querySelector('.modal').classList.add('show')
    }

    return (
        <>
            <input type="button" value="Ver mais" className="botao-modal" onClick={abrir}></input>
        </>
    )

}

export default BotaoAbrirModal;