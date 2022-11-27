import React, { useContext } from "react";
import { Route, Routes, Router, Navigate } from "react-router-dom";


import { AuthProvider, AuthContext } from './context/auth'
import Home from './pages/Home'
import Historico from './pages/Historico/historico'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Remocao from "./pages/Remocao";


const Rotas = () => {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);
    const isPageInLoading = loading;

    if (isPageInLoading) {
      return <div className="loading"> Carregando...</div>
    }

    return authenticated
      ? children
      : <Navigate to='/login' />
  }



  return (
    <div>
      <AuthProvider>
        <Routes >
          <Route exact path="/" element={<Private><Home /></Private>} />
          <Route exact path="/historico" element={<Private><Historico /></Private>} />
          <Route exact path=":userId" element={<Private><Historico /></Private>} component={Historico} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/cadastro" element={<Private><Cadastro /></Private>} />
          <Route exact path="/remocao" element={<Private><Remocao /></Private>} />
        </ Routes>
      </AuthProvider >
    </ div >


  )
};

export default Rotas;