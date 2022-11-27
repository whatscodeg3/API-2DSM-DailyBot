import axios from "axios";


axios.defaults.headers.common = {
  "Content-Type": "application/json"
}

export const api = axios.create({
  baseURL: "http://localhost:7071"
})

export const createSession = async (email, senha) => {
  return api.post('/login', { email, senha });
}