import React from "react"

import { Menu, ScrollStyle, Icon, Subtitulo, Li } from './style'

function Scroll() {

    return (
        <>
            <Menu>
                <ScrollStyle>
                    <Li><Icon><ion-icon name="person"></ion-icon></Icon>
                        <Subtitulo href="#cad-rem">Cadastrar ou remover</Subtitulo></Li>

                    <Li><Icon><ion-icon name="search"></ion-icon></Icon>
                        <Subtitulo href="#pesquisa">Pesquisar associado</Subtitulo></Li>
                </ScrollStyle>
                
            </Menu>
        </>
    )

}

export default Scroll;