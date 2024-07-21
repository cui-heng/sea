const axios = require('axios');

const AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})

AxiosInstance.interceptors.response.use(
  response => {
    const res = response.data;
    return res;
  },
  error => {
    return Promise.reject(error)
  }
)

module.exports = AxiosInstance;