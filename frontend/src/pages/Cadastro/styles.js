import styled from "styled-components"

export const DivContainer = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: center;
  justify-content: center; 
  gap: 10px;
  font: white;
  input {
    padding: 1em;
    border-radius: 16px;
    border: 1px;
    width: 5vw;
    background-color: #FFCCC3;
  } 
  overflow-y: hidden;
`

export const BotaoCadastrar = styled.button`
  margin: auto;
  appearance: button;
  backface-visibility: hidden;
  background-color: #EA7A67;
  border-radius: 15px;
  color: white;
  font-family: 'Roboto';
  font-size: 100%;
  height: 44px;
  width: 15vw;
  border: 2px solid white;
  cursor: pointer;
`;

export const BotaoSubmit = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #EA7A67;
  border-radius: 15px;
  color: white;
  font-family: 'Roboto';
  font-size: 100%;
  height: 44px;
  width: 5vw;
  border: 2px solid white;
`;


export const DivNomeAssociado = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: flex-start;
  width: 100%;
  input {
    width: 100%;
    border: 2px solid #F3F3F3;
  }
`
export const DivCpfRg = styled.div` 

display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

export const DivDataNascEstadoCivil = styled.div` 
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`

export const DivEscolaEndereco = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;`

export const DivEmailTelefone = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`;



export const DivCpf = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
input {
  width: 100%;
  border: 2px solid #F3F3F3;
}

`

export const DivRg = styled.div`
display: flex;
flex-direction: column;

align-items: flex-start;
width: 15em;
input {
  width: 100%;
  border: 2px solid #F3F3F3;
}
`



export const DivDataNasc = styled.div`
display: flex;
flex-direction: column;

align-items: flex-start;
width: 100%;
input {
  width: 100%;
  border: 2px solid #F3F3F3;
}
`

export const DivEstadoCivil = styled.div`
display: flex;
flex-direction: column;

align-items: flex-start;
width: 15em;
select {
  width: 100%;
  border: 2px solid #F3F3F3;
  padding: 1.15em;
  border-radius: 16px;
  background-color: #FFCCC3;
}
`

export const DivEscolas = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 15em;
`

export const DivEndereco = styled.div`
display: flex;
flex-direction: column;

align-items: flex-start;
width: 100%;
input {
  width: 100%;
  border: 2px solid #F3F3F3;
}`


export const DivEmail = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
input {
  width: 100%;
  border: 2px solid #F3F3F3;
}`

export const DivSenha = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width: 100%;
input {
  width: 100%;
  border: 2px solid #F3F3F3;
}`


export const DivTel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 15em;
  input {
    width: 100%;
    border: 2px solid #F3F3F3;
}`

export const DivRegras = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  label {
    color: #F3F3F3;
  }
`
export const InputButton = styled.input`
  padding: 0px;
  margin: 0px;
`;

export const DivListaEscolas = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 16px;
    padding: 1em;
    background-color: #FFCCC3;
`;

export const CamposEscola = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  input{
    width: 85%;
    border: 2px solid #F3F3F3;
  }
  button{
    width: 10%;
  }
`;

export const DivInputButton = styled.div`
  display: flex;
  gap: 5%;
`;

export const Trash = styled.div`
  color: red;
`;