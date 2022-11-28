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
                    <DivButton>
                        <a href="/"><Icon><ion-icon name="home"></ion-icon></Icon></a>
                    </DivButton>
                    <DivButton >
                        <a href="/cadastro"><Icon><ion-icon name="person-add"></ion-icon></Icon></a>
                    </DivButton>
                    <DivButton >
                        <a href="/remocao"><Icon><ion-icon name="person-remove"></ion-icon></Icon></a>
                    </DivButton>
                    <DivButton >
                        <a href="https://b24-rbv154.bitrix24.com.br/calendar/"><IconAtalho><ion-icon name="reader" ></ion-icon></IconAtalho></a>
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