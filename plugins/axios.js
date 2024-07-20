import { Message } from 'element-ui'

export default (context) => {
  /**
   * axios prototype
   */
  context.$axios.onRequest(config => {
    console.log(context.$cookies['TOKEN']);
    console.log('Making request to ' + config.url);
    context.$axios.setToken(context.$cookies['TOKEN']);
  });

  context.$axios.onResponse(response => {
    const result = response.data;
    console.log('Making response ', result);

    if (result.code === 1) {
      return result;
    }
  });

  context.$axios.onError(error => {
    if (process.client) {
      Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
      });
    }
  });
}