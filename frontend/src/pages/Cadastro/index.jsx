import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import api from "../../services/api"
import { GlobalStyle } from "./globalStyles"
import { DivContainer, CamposEscola, DivListaEscolas, BotaoSubmit, InputButton, BotaoCadastrar, DivNomeAssociado, DivCpfRg, DivDataNascEstadoCivil, DivEscolaEndereco, DivEmailTelefone, DivCpf, DivDataNasc, DivEscolas, DivEmail, DivRegras, DivSenha, DivInputButton, Trash } from "./styles"

function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async data => {
    console.log(data);
    await api.post('/associados', {
      nome: data.name,
      cpf: data.cpf,
      escola: data.escola,
      email: data.email,
      senha: data.senha,
      dataNascimento: new Date(data.dataNascimento),

    });

    navigate('/home');
  };


  // // Função escolas

  // const arrayEscolas = []

  // const escola = document.getElementById('escolaTxt')

  // function submit() {
  //   arrayEscolas.add(0, escola.value)
  //   console.log(arrayEscolas)
  // }

  // Lista Escolas

  var arrayEscolas = []

  function submitEscola() {
    let escola = document.getElementsByName('escola').value
    arrayEscolas.push(escola)
  }

  const todasEscolas = arrayEscolas.map((esc) => (
    <li style={{ display: 'flex', justifyContent: 'space-between' }}>
      {esc}
      <Trash style={{ cursor: 'pointer' }}><ion-icon name="trash-outline"></ion-icon></Trash>
    </li>
  ))

  return (
    <>
      < GlobalStyle />
      <DivContainer onSubmit={handleSubmit(onSubmit)}>
        <DivNomeAssociado>
          <label htmlFor="name" ><b style={{ color: 'white' }}>Nome do associado(a): </b></label>
          <input type="text" name="name" placeholder="Digite seu nome"   {...register("name", { required: true })} />
        </DivNomeAssociado>


        <DivCpfRg>
          <DivCpf>
            <label htmlFor="cpf"><b style={{ color: 'white' }}>CPF: </b></label>
            <input type="text" name="cpf" placeholder="Digite seu CPF" {...register("cpf", { required: true })} />
          </ DivCpf>
          {/* < DivRg>
            <label htmlFor="rg"><b style={{ color: 'white' }}>RG: </b></label>
            <input type="text" name="rg" placeholder="Digite seu RG" {...register("rg", { required: true })} />
          </ DivRg> */}
        </DivCpfRg>

        <DivDataNascEstadoCivil>
          < DivDataNasc>
            <label htmlFor="dataNascimento"><b style={{ color: 'white' }}>Data de Nascimento: </b></label>
            <input type="date" name="dataNascimento" placeholder="aaaa-mm-dd" {...register("dataNascimento", { required: true })} />
          </DivDataNasc>
          {/* <DivEstadoCivil>
            <label htmlFor="estadoCivil"><b style={{ color: '#F3F3F3' }}>Estado Civil: </b></label>
            <select id="estadoCivil"  {...register("estadoCivvil", { required: true })}>
              <option value=""></option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="separado">Separado</option>
              <option value="divocriado">Divorciado</option>
              <option value="viuvo">Viúvo</option>
            </select>
          </DivEstadoCivil> */}
        </DivDataNascEstadoCivil>

        <DivEscolaEndereco>
          <DivEscolas>
            <label htmlFor="escola"><b style={{ color: 'white' }}>Instituição de Ensino: </b></label>
          </DivEscolas>

          <CamposEscola>
            <DivInputButton>
              <input type="text" name="escola" id="escolaTxt" placeholder="Digite aqui..." {...register("escola", { required: true })} />
              <BotaoSubmit className="botaoSubmit" onClick={submitEscola}><ion-icon name="arrow-down-outline"></ion-icon></BotaoSubmit>
            </DivInputButton>
            <DivListaEscolas>
                <ul style={{ listStyle: 'none' }}>
                    {todasEscolas}
                </ul>
            </DivListaEscolas>
          </CamposEscola>
          

          {/* <DivEndereco>
            <label htmlFor="endereco"><b style={{ color: 'white' }}>Endereço: </b></label>
            <input type="text" name="endereco" placeholder="Digite seu endereco" {...register("endereco", { required: true })} />
          </DivEndereco> */}
        </DivEscolaEndereco>

        <DivEmailTelefone>
          <DivEmail>
            <label htmlFor="email"><b style={{ color: 'white' }}>Email: </b></label>
            <input type="email" name="email" placeholder="Digite seu email" {...register("email", { required: true })} />
          </DivEmail>

          {/* <DivTel>
            <label htmlFor="telefone"><b style={{ color: 'white' }}>Telefone: </b></label>
            <input type="tel" name="telefone" placeholder="(99) 9999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" {...register("telefone", { required: true })} />
          </DivTel> */}

        </DivEmailTelefone>

        <DivSenha>
          <label htmlFor="password"><b style={{ color: 'white' }}>Senha: </b></label>
          <input type="password" name="password" placeholder="Digite sua senha" {...register("senha", { required: true })} />
        </DivSenha>

        <DivRegras>
          <InputButton type="checkbox" id="regra" name="regra" value="regra" />
          <label htmlFor="regra" required> Eu autorizo o armazenamento destes dados no sistema *</label>
        </DivRegras>

        <BotaoCadastrar type="submit" id="botaoCadastro">Cadastrar</BotaoCadastrar>

      </DivContainer>

    </>

  )

}

export default Cadastro;