import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    overflow-x: hidden;
    }

    html {
        background-color: #A92364;
        width: 100%;
        height: 100%;
    }
    
    body {
        width: 100%;
        height: 100%;
        overflow-y: hidden;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }
    
`;