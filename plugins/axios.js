import { Message } from 'element-ui'

export default (context) => {
  /**
   * axios prototype
   */
  context.$axios.onRequest(config => {
    console.log('Making request to ' + config.url);
    // TODO token cookies???
    if (true) {
      // config.headers['X-Token'] = getToken()
    }
  });

  context.$axios.onResponse(response => {
    const result = response.data;
    console.log('Making response ', result);

    if (result.code === 1) {
      return result;
    }

    // TODO error
  });

  context.$axios.onError(error => {
    console.log(error)
    if (process.client) {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      });
    }
    
  });
}