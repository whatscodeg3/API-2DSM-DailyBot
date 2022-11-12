import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
        margin: 0%;
        padding: 0%;
        box-sizing: border-box;
        overflow-x: hidden;
    }
    
    body {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Roboto', sans-serif;
    }

    html {
        width: 100%;
        height: 100%;
        background-color: #A92364;
    }
    `