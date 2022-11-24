import { createGlobalStyle } from "styled-components";

const GlobalStyleHistorico = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html { 
        width: 100%;
        min-height: 100%;
        background: linear-gradient(142.3deg, #EA7A67 39.14%, #F5B769 91.7%);
        /* background: url(./fundo.svg) no-repeat center center fixed; 
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover; */
        padding: 0;
        margin: 0;
        padding-right:50px;
        @media (max-width:768px) {
            padding-right: 0;
        }
    }

    body {
        width: 100%;
        min-height: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    h1 {
        font-size: max(2.2vw , min(40px));
        color: #fff;
        font-family: 'Roboto';
        padding-top: 2%;
        padding-left: 5%;
        
    }

    hr {
        background-color: #A92364;
        height: 0.2%;
        padding: 0.1%;
        border: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }   
`;

export default GlobalStyleHistorico;