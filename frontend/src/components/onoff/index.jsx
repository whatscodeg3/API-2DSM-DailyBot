import React, { Component } from 'react';
import roboImg from '../../assets/img/robo.svg'

import Botao from '../botaoRobo';

import { Tudo } from './styles'
import { ConteudoSecundario } from './styles'
import { ConteudoSecundarioTitulo } from './styles'
import { ConteudoSecundarioSubtitulo } from './styles'
import { TituloInstrucoes } from './styles'
import { Linha } from './styles'
import { Imagem } from './styles'
import { SegundoConteudoSecundario } from './styles'
import { SegundoConteudoSecundarioTitulo } from './styles'


function OnOff() {

    return (
        <>
            <Tudo>
                <ConteudoSecundario id='keyframe4'>
                    <ConteudoSecundarioTitulo>Algumas <ConteudoSecundarioSubtitulo>instruções</ConteudoSecundarioSubtitulo> <br /> de uso</ConteudoSecundarioTitulo>
                    <TituloInstrucoes className="titulo-instrucoes">Todos os dias às <span>20h</span>, as informações <br />dos associados serão automaticamente <br />atualizadas e disponibilizadas para<br /> posterior consulta.
                    </TituloInstrucoes>
                </ConteudoSecundario>

                <Linha className="linha1" />

                <Imagem src={roboImg} alt="robo" />

                {/* <SegundoConteudoSecundario id='keyframe3'>
                    <SegundoConteudoSecundarioTitulo>Ative o <ConteudoSecundarioSubtitulo>robô</ConteudoSecundarioSubtitulo> <br /> aqui!</SegundoConteudoSecundarioTitulo>
                    <Botao />
                </SegundoConteudoSecundario> */}
            </Tudo>
        </>
    )

}

export default OnOff;