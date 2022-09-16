import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Historico from './pages/Historico/historico'
import api from './services/api';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Historico} path="/historico" />
    </BrowserRouter>
  )
}

export default Routes;