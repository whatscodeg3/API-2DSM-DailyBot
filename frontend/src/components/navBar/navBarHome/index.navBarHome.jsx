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
                    <DivButton href="#menu">
                        <Icon><ion-icon name="home"></ion-icon></Icon>
                    </DivButton>
                    <DivButton href="#cad-rem">
                        <Icon><ion-icon name="person"></ion-icon></Icon>
                    </DivButton>
                    <DivButton href="#pesquisa">
                        <Icon><ion-icon name="search"></ion-icon></Icon>
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