import React from 'react';
import { useForm } from "react-hook-form";

import robo from '../../assets/img/robo.svg';
import midall from '../../assets/img/whiteLogo.svg';
import api from "../../services/api"
import { DivLogin, DivImage, DivGeral, DivSubmit, DivParagrafoLogin, DivGeralLogin, Hr, DivHr, DivLabel } from './styles'
import { GlobalStyle } from './globalStyles'
import { useNavigate } from 'react-router-dom';


function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async data => {
    console.log(data.email);
    const userDatabaseData = await api.get(`/associados/findByEmail/${data.email}`);
    console.log(userDatabaseData.data);
    if (data.email !== userDatabaseData.data.email || data.senha !== userDatabaseData.data.senha || !userDatabaseData) {
      alert('Email ou senha não válidos');
    } else {
      navigate('/home');
    };
  }
  
  return (
    <>
      <GlobalStyle />
      <DivGeral>
        <DivHr>
          <Hr />
        </DivHr>

        
        <DivGeralLogin>
          <DivImage>
            <img src={robo} alt="robo" />
            <h1>Olá, eu sou<br/> Dailybot...</h1>
          </DivImage>
          <DivLogin onSubmit={handleSubmit(onSubmit)}>
            <DivParagrafoLogin>
              <a href="https://www.midall.com.br" style={{cursor: "pointer"}}><img src={midall} alt="midall_icon" /></a>
              <h1>Login</h1>
            </DivParagrafoLogin>
            <DivLabel>
              <label htmlFor="email" ><b style={{ color: 'white' }}>E-mail</b></label>
            </DivLabel>
            <input type="text" name="email" placeholder="Digite seu email" {...register("email", { required: true })} />
            <DivLabel>
              <label htmlFor="password"><b style={{ color: 'white' }}>Senha</b></label>
            </DivLabel>
            <input type="password" name="password" placeholder="Digite sua senha" {...register("senha", { required: true })} />
            <DivSubmit>
              <button type="submit" id="botaoLogin">Login</button>
            </DivSubmit>
          </DivLogin>
        </DivGeralLogin>
      </DivGeral>
    </>
  )
}

export default Login