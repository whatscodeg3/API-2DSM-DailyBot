import React, { useContext } from "react";

import { AuthContext } from "../../../context/auth";

import whiteLogo from "../../../assets/img/whiteLogo.svg";
import { Bar, Icon, DivButton, IconExit, IconAtalho } from "../styles.navBar";

function NavBarHome() {
    const { logout } = useContext(AuthContext);


    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <Bar>
                <header>
                    <DivButton href="/home">
                        <Icon><ion-icon name="home"></ion-icon></Icon>
                    </DivButton>
                    <DivButton href="/cadastro">
                        <Icon><ion-icon name="person-add"></ion-icon></Icon>
                    </DivButton>
                    <DivButton href="/remocao">
                        <Icon><ion-icon name="person-remove"></ion-icon></Icon>
                    </DivButton>
                    <DivButton href="https://b24-rbv154.bitrix24.com.br/calendar/">
                        <IconAtalho><ion-icon name="reader" ></ion-icon></IconAtalho>
                    </DivButton>
                    <DivButton href="/">
                        <IconExit><ion-icon name="log-out-sharp"></ion-icon></IconExit>
                    </DivButton>
                    <DivButton onClick={handleLogout}>
                        <IconExit><ion-icon name="log-out-sharp"></ion-icon></IconExit>
                    </DivButton>

                </header>
                <footer>
                    <img src={whiteLogo} alt="whiteLogo"></img>
                </footer>
            </Bar>
        </>
    )
}


export default NavBarHome;