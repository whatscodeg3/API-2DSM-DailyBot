import styled from "styled-components"







export const DivGeral = styled.form`
display: flex;
border: 1px solid black;
flex-direction: row;
justify-content: space-between;
height: 100vh;
width: 100vw;
padding: 5em;
`

export const DivLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 50vh;
  width: 50vw;
  gap: 1.5em;
  border: 1px solid red;
  flex-direction: column;
  font: white;
  input {
    padding: 1.2em;
    border-radius: 16px;
    border: 1px;
    background-color: #FFCCC3;
    width: 20vw;
  }
  button {
    appearance: button;
    backface-visibility: hidden;
    background-color: #A92364;
    border-radius: 6px;
    border-width: 0.5px;
    border-color: white;
    box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
    font-size: 100%;
    height: 44px;
    line-height: 1.15;
    margin: 12px 0 0;
    outline: none;
    overflow: hidden;
    padding: 0 25px;
    text-transform: none;
    transform: translateZ(0);
    transition: all .2s,box-shadow .08s ease-in;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 15vw;
    box-shadow: rgba(50, 50, 93, .1);
    
    
    
  }
  button:hover {
    cursor: pointer;
  }

`

export const DivImage = styled.div`
  display: flex;
  border: 1px solid black;
  margin-right: 20em; 
  flex-direction: column;
  width: 40vw;
  height: 75vh;
  gap: 3em;
  align-items: center;
  text-align: center;
  justify-content: center;
  h1 {
    font-size: 3.5em;
  }
  img {
    height: 50%;
    margin-top: 2em;
    margin-bottom: 5em;
  }
`

export const DivLoginText = styled.div`
  display: flex;
  color: white;

`

