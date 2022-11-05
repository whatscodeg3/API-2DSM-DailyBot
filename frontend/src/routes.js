import React from "react";
import { Route, BrowserRouter } from "react-router-dom";


import Home from './pages/Home'
import Historico from './pages/Historico/historico'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Remocao from "./pages/Remocao";


const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Historico} path="/historico" />
      <Route component={Login} path="/login" />
      <Route component={Login} path="/login" />
      <Route component={Cadastro} path="/cadastro" />
      <Route component={Remocao} path="/remocao" />
    </BrowserRouter>
  )
}

export default Routes;