import React from "react";
import Header from "../../components/header";
import Scroll from "../../components/scroll";
import OnOff from "../../components/onoff";
import CadRem from "../../components/cadrem";
import SearchBar from "../../components/searchbar";
import GlobalStyle from './globalStyles'
import { Principal, BackButton, DivButton, Icon } from './defaultStyles'



function Home() {

    return (
        <>
            <GlobalStyle/>

            
            <Header/>

            <Principal id="menu">
                <Scroll />
                <OnOff />
                <CadRem />
                <SearchBar />
                <DivButton href="#menu">
                        <BackButton><Icon><ion-icon name="arrow-up"></ion-icon></Icon></BackButton>
                </DivButton>
            </Principal>

        </>
    )

}

export default Home;