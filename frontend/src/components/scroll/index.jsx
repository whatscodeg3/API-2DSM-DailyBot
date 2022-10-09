import React, { Component } from "react"

import { Menu } from './style'
import { ScrollStyle } from './style'
import { Icon } from './style'
import { Subtitulo } from './style'

function Scroll() {

    return (
        <>
            <Menu>
                <ScrollStyle>
                    <li><Icon><ion-icon name="person-add"></ion-icon></Icon>
                        <Subtitulo href="#cad-rem" className="subtitulo">Cadastrar associado</Subtitulo></li>

                    <li><Icon><ion-icon name="search" className="icon"></ion-icon></Icon>
                        <Subtitulo href="#pesquisa" className="subtitulo">Pesquisar associado</Subtitulo></li>
                </ScrollStyle>
            </Menu>
        </>
    )

}

export default Scroll;