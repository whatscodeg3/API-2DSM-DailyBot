import React from "react";

// Style Global
import GlobalStyleHistorico from './globalStylesHistorico'

//Style Default
import { Principal } from "./defaultStylesHistorico";


// Componentes
import Cabeçalho from "../../components/cabeçalho/cabeçalho";
import Conteudo from "../../components/conteudoHistorico/conteudoHistorico";
import PaginaModal from "../../components/botaoAbrirModal/paginaModal";
import NavBarHistorico from "../../components/navBar/navBarHistorico/index.navBarHistorico";

function Historico() {


    return (
        <>
            <GlobalStyleHistorico />
            <NavBarHistorico />
            <h1>Histórico</h1>
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
