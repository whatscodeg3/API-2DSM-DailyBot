import { createGlobalStyle } from "styled-components";

const GlobalStyleHistorico = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        width: 100%;
        height: 100%;
        background: linear-gradient(142.3deg, #EA7A67 39.14%, #F5B769 91.7%);
        /* background: url(./fundo.svg) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover; */
        padding: 0;
        margin: 0;
    }

    body {
        width: 100%;
        height: 100%;
        position: relative;
        overflow-y: hidden;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
    }

    p{
        content: '';
    }

    section {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 10%;
        left: 5%;
    }

    h1 {
        font-size: 3rem;
        color: #fff;
        font-family: 'IBM Plex Sans';
        padding-top: 2%;
        padding-left: 5%;
    }

    hr {
        background-color: #A92364;
        height: 0.2%;
        border: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }   
`;

export default GlobalStyleHistorico;