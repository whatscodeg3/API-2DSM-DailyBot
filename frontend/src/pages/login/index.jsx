import React from 'react';
import { useForm } from "react-hook-form";

import robo from '../../assets/img/robo.svg';
import api from "../../services/api"
import { DivLogin, DivImage, DivGeral, DivLoginText } from './styles'
import { GlobalStyle } from './globalStyles'
import { useNavigate } from 'react-router-dom';




function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async data => {
    console.log(data.email);
    const userDatabaseData = await api.get(`/associados/${data.email}`);
    console.log(userDatabaseData.data);
    if (data.email !== userDatabaseData.data.email || data.senha !== userDatabaseData.data.senha || !userDatabaseData) {
      alert('Email ou senha não válidos');
    } else {
      navigate('/home');
    };


  }



    ;
  return (


    <DivGeral onSubmit={handleSubmit(onSubmit)}>
      <GlobalStyle />
      <DivImage>
        <img src={robo} alt="robo" />
        <h1 style={{ color: 'white' }}>Olá, eu sou Dailybot...</h1>
      </DivImage>
      <DivLogin>
        <DivLoginText>
          <h1>Login</h1>
        </DivLoginText>
        <label htmlFor="email" ><b style={{ color: 'white' }}>E-mail: </b></label>
        <input type="text" name="email" placeholder="Digite seu email" {...register("email", { required: true })} />
        <label htmlFor="password"><b style={{ color: 'white' }}>Senha: </b></label>
        <input type="password" name="password" placeholder="Digite sua senha" {...register("senha", { required: true })} />
        <button type="submit" id="botaoLogin">Login</button>
      </DivLogin>
    </DivGeral>
  )
}

export default Login