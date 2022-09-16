import React, { Component } from "react";

import './nomes.css'

class UlNomes extends Component {
    render(){
        return(
            <>
                <ul id="lista_para_busca" className="ul_class">
                    <li><p className="titulo-pesquisa">Lucas</p></li>
                    <li><p className="titulo-pesquisa">Kevin</p></li>
                    <li><p className="titulo-pesquisa">Matheus</p></li>
                    <li><p className="titulo-pesquisa">Thiago</p></li>
                    <li><p className="titulo-pesquisa">Pedro</p></li>
                    <li><p className="titulo-pesquisa">Jonathas</p></li>
                    <li><p className="titulo-pesquisa">André</p></li>
                    <li><p className="titulo-pesquisa">Naiara</p></li>
                    <li><p className="titulo-pesquisa">Alex</p></li>
                    <li><p className="titulo-pesquisa">Reinaldo</p></li>
                    <li><p className="titulo-pesquisa">Rodrigo</p></li>
                    <li><p className="titulo-pesquisa">Léo</p></li>
                    <li><p className="titulo-pesquisa">Gabriel</p></li>
                    <li><p className="titulo-pesquisa">Rodrigo</p></li>
                    <li><p className="titulo-pesquisa">Léo Dantas</p></li>
                    <li><p className="titulo-pesquisa">Gabriel Vieira</p></li>
                    <li><p className="titulo-pesquisa">Rodrigo Massa</p></li>
                    <li><p className="titulo-pesquisa">Léo</p></li>
                    <li><p className="titulo-pesquisa">Gabriel</p></li>
                </ul>
            </>
        )
    }
}

export default UlNomes;