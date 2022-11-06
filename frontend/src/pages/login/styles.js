import styled from "styled-components"

export const DivGeral = styled.form`
display: flex;
h1{
  color: white;
  text-align:center;
}
`

export const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  padding-left:10%;
  width: 40vw;
  gap: 1.0em;
  flex-direction: column;
  color:white;
  input {
    padding: 1.2em;
    border-radius: 16px;
    border: 1px;
    background-color: #FFCCC3;
    color: #A92364;
    font-size:2.5vh;
    font-weight: bold;
    width: 30vw;
  }
  button {
    appearance: button;
    backface-visibility: hidden;
    background-color: #A92364;
    border-radius: 6px;
    border-width: 0.5px;
    border-color: white;
    box-shadow: black;
    box-sizing: border-box;
    color: #FFCCC3;
    font-weight: bold;
    
    font-size: 100%;
    height: 45px;
    
  
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 10vw;
    box-shadow: rgba(50, 50, 93, .1);
  }

`

export const DivImage = styled.div`
  display: flex; 
  flex-direction: column;
  width: 40vw;
  height: 75vh;
  gap: 3em;
  align-items: center;
  justify-content: center;
  margin: 0px;
  h1 {
    font-size: 2.4em;
    color:white
  }
  img {
    height: 50%;
  }
`
