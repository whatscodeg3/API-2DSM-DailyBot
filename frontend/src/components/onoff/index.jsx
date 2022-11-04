import React, { Component } from 'react';
import roboImg from '../../assets/img/robo.svg'

import { Tudo, ConteudoSecundario, ConteudoSecundarioTitulo, ConteudoSecundarioSubtitulo, TituloInstrucoes, Linha, Imagem, SegundoConteudoSecundario, SegundoConteudoSecundarioTitulo } from './styles'

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
            </Tudo>
        </>
    )

}

export default OnOff;