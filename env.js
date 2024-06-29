module.exports = {
  dev: {
      NODE_ENV: 'dev',
      URL_PREFIX: '/website/common',
      BASE_URL: 'http://localhost:8302',
      // BASE_URL: 'http://***',
  },
  prod: {
      NODE_ENV: 'prod',
      URL_PREFIX: '/api/front',
      BASE_URL: 'http://47.115.209.54:8080',
  }
}