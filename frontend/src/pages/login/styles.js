import styled from "styled-components"

export const DivGeral = styled.main`
  width: 100vw;
  height: 100vh;
  gap: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DivLogin = styled.form`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: 90%;
    outline: 0;
  }
  button {
    appearance: button;
    backface-visibility: hidden;
    background-color: #A92364;
    border-radius: 6px;
    box-sizing: border-box;
    color: #FFCCC3;
    font-weight: bold;
    border: 3px solid #FF74B7;
    box-shadow: 2px 2px 0px 2px rgba(0, 0, 0, 0.25);
    font-size: 100%;
    height: 45px;
    width: 15vw;
    cursor: pointer;
  }

  @media (max-width:800px) {
    width: 80vw;
    button {
      width: 25vw;
      height: 55px;
    }
  }
`

export const DivLabel = styled.div`
  display: flex;
  width: 90%;
`;

export const DivImage = styled.div`
  height: 100%;
  display: flex; 
  flex-direction: column;
  align-items: center;
  gap: 4vh;
  justify-content: center;
  h1 {
    font-size: 55px;
    color:white
  }
  img {
    height: 400px;
  }
  @media (max-width:800px) {
    display: none;
  }
`

export const DivSubmit = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export const DivParagrafoLogin = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  img {
    width: 50px;
    height: 50px;
  }
  h1{
    color: white;
  }
`;

export const DivGeralLogin = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20%;
`;

export const Hr = styled.hr`
  width: 3px;
  height: 570px;
  border: none;
  background-color: white;
`;

export const DivHr = styled.div`
  display: flex;
  @media (max-width:800px) {
    display: none;
  }
`;