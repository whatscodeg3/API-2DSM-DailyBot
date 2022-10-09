import React, { Component } from "react";

// Style Global
import GlobalStyleHistorico from './globalStylesHistorico'

//Style Default
import { Principal } from "./defaultStylesHistorico";

// Componentes
import Cabeçalho from "../../components/cabeçalho/cabeçalho";
import DataELink from "../../components/data-e-link/data_e_link";
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
                <DataELink />
            </Principal>
        </>
    )

}

export default Historico
