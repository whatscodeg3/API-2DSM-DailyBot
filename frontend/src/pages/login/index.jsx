import React from 'react';

import Container from '../../components/container'
import robo from '../../assets/img/robo.svg';

import { DivLogin, DivImage } from './styles'
import { GlobalStyle } from './globalStyles'




function Login() {
  return (

    <Container color="#A92364
    ">
      <DivImage>
        <img src={robo} alt="robo" />
        <h1 style={{ color: 'white' }}>Olá, eu sou Dailybot...</h1>
      </DivImage>
      <DivLogin>
        <label htmlFor="email" ><b style={{ color: 'white' }}>E-mail</b></label>
        <input type="text" name="email" placeholder="Digite seu email" required />
        <label htmlFor="password"><b style={{ color: 'white' }}>Senha</b></label>
        <input type="password" name="password" placeholder="Digite sua senha" required />
        <button type="submit" id="botaoLogin">Login</button>
      </DivLogin>
    </Container>
  )
}

export default Login;

/* <ButtonLogin>
          Entrar
        </ButtonLogin> */