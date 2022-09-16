import React, { Component } from 'react';
import roboImg from '../../assets/img/robo.svg'

import Botao from '../botao';

import { Tudo } from './styles'
import { ConteudoSecundario } from './styles'
import { ConteudoSecundarioTitulo } from './styles'
import { ConteudoSecundarioSubtitulo } from './styles'
import { TituloInstrucoes } from './styles'
import { Linha } from './styles'
import { Imagem } from './styles'
import { SegundoConteudoSecundario } from './styles'
import { SegundoConteudoSecundarioTitulo } from './styles'


class OnOff extends Component{
    render(){
        return(
            <>  
                <Tudo>
                    <ConteudoSecundario id='keyframe4'>
                        <ConteudoSecundarioTitulo>Algumas <ConteudoSecundarioSubtitulo>instruções</ConteudoSecundarioSubtitulo> <br /> de uso:</ConteudoSecundarioTitulo>
                        <TituloInstrucoes className="titulo-instrucoes">Ao ativa-lo, terá a opção de busca <br /> disponível para acessar 
                            informações <br /> de associado. O robô foi programado <br /> para buscar 
                            informações novas duas <br /> vezes ao dia!  </TituloInstrucoes>
                    </ConteudoSecundario>
                                    
                    <Linha className="linha1" />
                                
                    <Imagem src={roboImg} alt="robo" />
                        
                    <SegundoConteudoSecundario id='keyframe3'>
                        <SegundoConteudoSecundarioTitulo>Ative o <ConteudoSecundarioSubtitulo>robô</ConteudoSecundarioSubtitulo> <br /> aqui!</SegundoConteudoSecundarioTitulo>
                        <Botao />
                    </SegundoConteudoSecundario>
                </Tudo>
            </>
        )
    }
}

export default OnOff;