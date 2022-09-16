import React, { Component } from 'react';
import logo from '../../assets/img/logo.png'

import { DivFundo } from './styles'
import { Titulo } from './styles'
import { Diario } from './styles'

class Header extends Component {
    render(){
        return(
            <>
                <DivFundo>
                    <img src={logo} alt="logo" />
                    <Titulo className="titulo">Dailybot é um robô<br /> programado para estar<br /> constantemente de<br /> olho no <Diario
                        href="http://www.imprensaoficial.com.br/" className="diario"><u>Diário Oficial</u></Diario>
                    </Titulo>
                </DivFundo>
            </>
        )
    }
};

export default Header;