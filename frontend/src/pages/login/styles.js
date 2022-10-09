import styled from "styled-components"








export const RootStyles = styled.body`
background: #A92364;
height: 100%;
width: 100%;
`

export const DivLogin = styled.div`
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  margin-right: 12.5%;
  margin-top: 12.5%;
  padding: 5em;
  gap: 2em;
  font: white;
  input {
    padding: 1.2em;
    border-radius: 16px;
    border: 1px;
    background-color: #FFCCC3;
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
  border: 1px solid blue;
  flex-direction: column;
  margin-left: 5%;
  margin-top: 5.5%;
  padding: 5em;
  gap: 2em;
 
`

