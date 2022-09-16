import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:7071"
})

export default api;