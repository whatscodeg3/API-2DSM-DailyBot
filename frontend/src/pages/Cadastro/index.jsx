import  React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import './listaEscola.css'

import api from "../../services/api"
import { GlobalStyle } from "./globalStyles"
import { DivContainer, CamposEscola, DivListaEscolas, BotaoSubmit, InputButton, BotaoCadastrar, DivNomeAssociado, DivCpfRg, DivDataNascEstadoCivil, DivEscolaEndereco, DivEmailTelefone, DivCpf, DivDataNasc, DivEscolas, DivEmail, DivRegras, DivSenha, DivInputButton, Trash } from "./styles"
import NavBarHome from "../../components/navBar/navBarHome/index.navBarHome";



function Cadastro() {
  const [escolas, setEscolas] = useState([])
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

  function adicionaEscola() {
    let escola = document.getElementById('escolaInput').value
    if(escola.length != 0){escolas.push({id: escolas.length, value: escola})}
    document.getElementById('escolaInput').value = ''
  }

  function deletaEscola(index) {
    const escolasCopy = Array.from(escolas)
    escolasCopy.splice(index, 1)
    setEscolas(escolasCopy);
  }

  //mostrar/esconder lista
  let condicao ='esconder'
  if(escolas.length > 0){
    condicao = 'mostrar'
  }

  return (
    <>
      < GlobalStyle />
      <NavBarHome />
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
        </DivCpfRg>

        <DivDataNascEstadoCivil>
          < DivDataNasc>
            <label htmlFor="dataNascimento"><b style={{ color: 'white' }}>Data de Nascimento: </b></label>
            <input type="date" name="dataNascimento" placeholder="aaaa-mm-dd" {...register("dataNascimento", { required: true })} />
          </DivDataNasc>
        </DivDataNascEstadoCivil>

        <DivEscolaEndereco>
          <DivEscolas>
            <label htmlFor="escola"><b style={{ color: 'white' }}>Instituição de Ensino: </b></label>
          </DivEscolas>

          <CamposEscola>
            <DivInputButton>
              <input type="text" name="escola" id="escolaInput" placeholder="Digite aqui..." {...register("escola", { required: true })}/>
              <BotaoSubmit className="botaoSubmit" onClick={adicionaEscola}><ion-icon name="arrow-down-outline"></ion-icon></BotaoSubmit>
            </DivInputButton>
            <DivListaEscolas className={condicao}>
                <ul style={{ listStyle: 'none' }}>
                  {escolas.map(({id,value}, index) => (
                    <li id="escola" style={{ display: 'flex', justifyContent: 'space-between' }} key={id}>
                      {value}
                      <Trash style={{ cursor: 'pointer' }} onClick={() => {deletaEscola(index)}}><ion-icon name="trash-outline"></ion-icon></Trash>
                    </li>
                  ))}
                </ul>
            </DivListaEscolas>
          </CamposEscola>
        </DivEscolaEndereco>

        <DivEmailTelefone>
          <DivEmail>
            <label htmlFor="email"><b style={{ color: 'white' }}>Email: </b></label>
            <input type="email" name="email" placeholder="Digite seu email" {...register("email", { required: true })} />
          </DivEmail>
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