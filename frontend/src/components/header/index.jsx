import React, { Component } from 'react';
import logo from '../../assets/img/logo.png'

import { DivFundo } from './styles'
import { Titulo } from './styles'
import { Diario } from './styles'

function Header() {

    return (
        <>
            <DivFundo>
                <img src={logo} alt="logo" />
                <Titulo className="titulo">Dailybot é um robô<br /> programado para estar<br /> constantemente de<br /> olho no <Diario
                    href="http://www.imprensaoficial.com.br/" className="diario"><u style={{ fontFamily: 'Roboto' }}>Diário Oficial</u></Diario>
                </Titulo>
            </DivFundo>
        </>
    )

};

export default Header;