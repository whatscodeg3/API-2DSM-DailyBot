import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

import api from "../../services/api"
import { GlobalStyle } from "./globalStyles"
import { DivContainer, BotaoSubmit, BotaoCadastrar, DivNomeAssociado, DivCpfRg, DivDataNascEstadoCivil, DivEscolaEndereco, DivEmailTelefone, DivCpf, DivRg, DivDataNasc, DivEstadoCivil, DivEscolas, DivEndereco, DivEmail, DivTel, DivRegras, DivSenha } from "./styles"

function Cadastro() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async data => {
    await api.post('/associados', {
      nome: data.name,
      cpf: data.cpf,
      escola: data.escola,
      email: data.email,
      senha: data.senha,
      dataNascimento: new Date(data.dataNascimento),
    });
    navigate('/');
  };


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
            <input type="text" name="dataNascimento" placeholder="aaaa-mm-dd" {...register("dataNascimento", { required: true })} />
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
            <input type="text" name="escola" placeholder="Digite sua instituição de ensino" {...register("escola", { required: true })} />
          </DivEscolas>
          
          <BotaoSubmit className="botaoSubmit"><ion-icon name="arrow-forward-outline"></ion-icon></BotaoSubmit>

          <div>

          </div>

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
          <input type="checkbox" id="regra" name="regra" value="regra" />
          <label htmlFor="regra" required> Eu autorizo o armazenamento destes dados no sistema *</label>
        </DivRegras>
        <BotaoCadastrar type="submit" id="botaoCadastro">Cadastrar</BotaoCadastrar>
      </DivContainer>

    </>

  )

}

export default Cadastro;