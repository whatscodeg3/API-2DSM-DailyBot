const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:7071'
})

module.exports = (api);