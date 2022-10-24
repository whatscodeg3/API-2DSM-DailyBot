import React from 'react';
import { useForm } from "react-hook-form";

import robo from '../../assets/img/robo.svg';
import api from "../../services/api"
import { DivLogin, DivImage, DivGeral } from './styles'
import { GlobalStyle } from './globalStyles'




function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const userDatabaseData = await api.get('/associados', {
      email: data.email,
    });

    if (data.email !== userDatabaseData.data[0].email || data.senha !== userDatabaseData.data[0].senha) console.log('Email ou senha não válidos');
    else { console.log('bem-vindo') };

    console.log(userDatabaseData);
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
        <label htmlFor="email" ><b style={{ color: 'white' }}>E-mail</b></label>
        <input type="text" name="email" placeholder="Digite seu email" {...register("email", { required: true })} />
        <label htmlFor="password"><b style={{ color: 'white' }}>Senha</b></label>
        <input type="password" name="password" placeholder="Digite sua senha" {...register("senha", { required: true })} />
        <button type="submit" id="botaoLogin">Login</button>
      </DivLogin>
    </DivGeral>
  )
}

export default Login