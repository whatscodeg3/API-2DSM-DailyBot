import React from "react";
import Header from "../../components/header";
import Scroll from "../../components/scroll";
import OnOff from "../../components/onoff";
import CadRem from "../../components/cadrem";
import SearchBar from "../../components/searchbar";
import GlobalStyle from './globalStyles';
import NavBarHome from "../../components/navBar/navBarHome/index.navBarHome";
import { Principal } from './defaultStyles'


function Home() {

    return (
        <>
            <GlobalStyle/>

            <NavBarHome/>
            <Header/>
            
            <Principal id="menu">
                <Scroll />
                <OnOff />
                <CadRem />
                <SearchBar />
            </Principal>
            
        </>
    )

}

export default Home;