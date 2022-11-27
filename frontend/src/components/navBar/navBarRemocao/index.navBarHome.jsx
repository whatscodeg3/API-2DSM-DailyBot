import React from "react";
import whiteLogo from "../../../assets/img/whiteLogo.svg"
import { Bar2, Icon, DivButton2, IconExit, IconAtalho } from "../styles.navBar"

function NavBarRemocao(){

    return(
        <>
            <Bar2>
                <header>
                    <DivButton2 href="/home">
                        <Icon><ion-icon name="home"></ion-icon></Icon>
                    </DivButton2>
                    <DivButton2 href="/cadastro">
                        <Icon><ion-icon name="person-add"></ion-icon></Icon>
                    </DivButton2>
                    <DivButton2 href="/remocao">
                        <Icon><ion-icon name="person-remove"></ion-icon></Icon>
                    </DivButton2>
                    <DivButton2 href="https://b24-rbv154.bitrix24.com.br/calendar/">
                        <IconAtalho><ion-icon name="reader" ></ion-icon></IconAtalho>
                    </DivButton2>
                    <DivButton2 href="/">
                        <IconExit><ion-icon name="log-out-sharp"></ion-icon></IconExit>
                    </DivButton2>
                </header>
                <footer>
                    <img src={whiteLogo} alt="whiteLogo"></img>
                </footer>
            </Bar2>
        </>
    )
}


export default  NavBarRemocao;