import React, { Component } from "react";
import Header from "../../components/header";
import Scroll from "../../components/scroll";
import OnOff from "../../components/onoff";
import CadRem from "../../components/cadrem";
import SearchBar from "../../components/searchbar";

import GlobalStyle from './globalStyles'
import { Principal } from './defaultStyles'

class Home extends Component{
    render(){
        return(
            <>
                <GlobalStyle />


                <Header />

                <Principal>
                    <Scroll />
                    <OnOff />
                    {/* <CadRem />     // codigo para cadastro para segunda sprint */}
                    <SearchBar />
                </Principal>
            </>
        )
    }
}

export default Home;