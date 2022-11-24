import { createGlobalStyle } from 'styled-components'
import fundo from '../../assets/img/fundo.svg';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }
  
  html {
    background: url(${fundo}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
`