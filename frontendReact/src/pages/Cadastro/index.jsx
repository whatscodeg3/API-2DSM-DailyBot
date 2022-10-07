import React from "react";

import { GlobalStyle } from "./globalStyles"
import { DivContainer } from "./styles"


function Cadastro() {
  return (
    <>
      < GlobalStyle />
      <DivContainer>

        <label htmlFor="name" ><b style={{ color: 'white' }}>Nome do associado(a): </b></label>
        <input type="text" name="name" placeholder="Digite seu nome" required />
        <label htmlFor="cpf"><b style={{ color: 'white' }}>CPF: </b></label>
        <input type="text" name="cpf" placeholder="Digite seu CPF" required />
        <label htmlFor="rg"><b style={{ color: 'white' }}>RG: </b></label>
        <input type="text" name="rg" placeholder="Digite seu RG" required />
        <label htmlFor="dataNascimento"><b style={{ color: 'white' }}>Data de Nascimento: </b></label>
        <input type="text" name="dataNascimento" placeholder="Digite sua data de nascimento" required />
        <label htmlFor="estadoCivil"><b style={{ color: 'white' }}>Estado Civil: </b></label>
        <select id="estadoCivil">
          <option value="solteiro">Solteiro</option>
          <option value="casado">Casado</option>
          <option value="separado">Separado</option>
          <option value="divocriado">Divorciado</option>
          <option value="viuvo">Viúvo</option>
        </select>
        <label htmlFor="escola"><b style={{ color: 'white' }}>Instituição de Ensino: </b></label>
        <input type="text" name="escola" placeholder="Digite sua instituição de ensino" required />
        <label htmlFor="endereco"><b style={{ color: 'white' }}>Endereço: </b></label>
        <input type="text" name="endereco" placeholder="Digite seu endereco" required />
        <label htmlFor="email"><b style={{ color: 'white' }}>Email: </b></label>
        <input type="email" name="email" placeholder="Digite seu email" required />
        <label htmlFor="telefone"><b style={{ color: 'white' }}>Telefone: </b></label>
        <input type="tel" name="telefone" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" required />

        <input type="checkbox" id="regra" name="regra" value="regra" />
        <label for="regra"> Eu autorizo o armazenamento destes dados no sistema *</label>







        <button type="submit" id="botaoCadastro">Cadastrar</button>

      </DivContainer>

    </>

  )

}

export default Cadastro;