import React, { useState, useEffect, createContext } from 'react';

import { useNavigate } from 'react-router-dom'
import { api, createSession } from '../services/api'


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) setUser(JSON.parse(recoveredUser));

    setLoading(false);
  }, [])

  const login = async (email, senha) => {
    const response = await createSession(email, senha);
    console.log(response.data);


    const loggedUser = response.data;
    const token = response.data.token;

    delete loggedUser.token;

    console.log(loggedUser);
    console.log(JSON.stringify(loggedUser))

    api.defaults.headers.Authorization = `Bearer ${token}`


    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    setUser(loggedUser);
    const adminVerification = 'admin' || 'administrador' || 'adm';
    if (loggedUser.nome.toLowerCase() === adminVerification) {
      navigate("/");
    }
    else {
      navigate(`${loggedUser.id}`);
    }
  };

  const logout = () => {

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = null;
    setUser(null);
    navigate('/login');
  };
  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, loading, login, logout }}>
      {children}
    </ AuthContext.Provider>
  )
}