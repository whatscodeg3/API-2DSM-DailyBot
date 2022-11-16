import React from "react";
import {
  Route,
  Routes
} from 'react-router-dom'

import Conteudo from "./components/conteudoHistorico/conteudoHistorico";

import Home from './pages/Home'
import Historico from './pages/Historico/historico'
import Login from './pages/login'
import Cadastro from './pages/Cadastro'
import Remocao from "./pages/Remocao";
//import Routes from "./routes"



function App() {
  return (
    <div>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/historico" element={<Historico />} />
        <Route path=":userId" element={<Historico />} component={Historico} />
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/remocao" element={<Remocao />} />
      </Routes>
    </div>

  );
}


export default App;