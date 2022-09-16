import React, { Component } from 'react'

import BotaoAbrirModal from '../botaoAbrirModal/abrir'

import { CabecalhoHistorico } from './styles'
import { SubtituloCabecalho } from './styles'

class Cabeçalho extends Component{
    render(){
        return(
            <>
                <CabecalhoHistorico>
                    <p id="nome">Nome: <SubtituloCabecalho>Teste Teste Teste</SubtituloCabecalho></p>
                    <p id="tel">Tel: <SubtituloCabecalho>(xx) xxxxx-xxxx</SubtituloCabecalho></p>
                    <p id="email">E-mail: <SubtituloCabecalho>xxxx@gmail.com</SubtituloCabecalho></p>
                    <BotaoAbrirModal />
                </CabecalhoHistorico>
            </>
        )
    }
}


export default Cabeçalho;