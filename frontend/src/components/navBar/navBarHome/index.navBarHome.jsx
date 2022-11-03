import React from "react";
import whiteLogo from "../../../assets/img/whiteLogo.svg"
import { Bar, Icon, DivButton } from "../styles.navBar"

function NavBarHome(){

    return(
        <>
            <Bar>
                <header>
                    <DivButton href="#menu">
                        <Icon><ion-icon name="home"></ion-icon></Icon>
                    </DivButton>
                    <DivButton href="#cad-rem">
                        <Icon><ion-icon name="person"></ion-icon></Icon>
                    </DivButton>
                    <DivButton>
                        <Icon><ion-icon name="notifications"></ion-icon></Icon>
                    </DivButton>
                    <DivButton href="#pesquisa">
                        <Icon><ion-icon name="search"></ion-icon></Icon>
                    </DivButton>
                </header>
                <footer>
                    <img src={whiteLogo} alt="whiteLogo"></img>
                </footer>
            </Bar>
        </>
    )
}


export default  NavBarHome;