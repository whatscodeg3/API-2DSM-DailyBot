import React, { Component } from "react";

// Style Global
import GlobalStyleHistorico from './globalStylesHistorico'

//Style Default
import { Principal } from "./defaultStylesHistorico";

import { useParams } from "react-router-dom";

// Componentes
import Cabeçalho from "../../components/cabeçalho/cabeçalho";
import Conteudo from "../../components/conteudoHistorico/conteudoHistorico";
import PaginaModal from "../../components/botaoAbrirModal/paginaModal";

function Historico() {


    return (
        <>
            <GlobalStyleHistorico />

            <h1>Histórico:</h1>
            <Principal>
                <Cabeçalho />
                <hr />
                <PaginaModal />
                <Conteudo />
            </Principal>
        </>
    )

}

export default Historico
