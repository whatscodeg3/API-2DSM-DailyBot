import React from "react";
import { Route, BrowserRouter } from "react-router-dom";


import Home from './pages/Home'
import Historico from './pages/Historico/historico'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Historico} path="/historico" />
      <Route component={Login} path="/login" />
      <Route component={Login} path="/login" />
      <Route component={Cadastro} path="/cadastro" />
    </BrowserRouter>
  )
}

export default Routes;