import React from "react";
import whiteLogo from "../../../assets/img/whiteLogo.svg"
import { Bar, Icon } from "../styles.navBar"
import { Link } from 'react-router-dom'

function NavBarHistorico() {
    return (
        <>
            <Bar>
                <header>
                    <Link to={"/"}>
                        <div style={{ display: "flex" }}>
                            <Icon><ion-icon name="home"></ion-icon></Icon>
                        </div>
                    </Link>
                </header>
                <footer>
                    <img src={whiteLogo} alt="whiteLogo"></img>
                </footer>
            </Bar>
        </>
    )

}

export default NavBarHistorico;