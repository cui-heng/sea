import cookie from 'cookie'

export default (context, inject) => {
  let cookies = {};

  if (process.client) {
    cookies = cookie.parse(document.cookie || '');
  }

  if (process.server) {
    cookies = cookie.parse(context.req.headers?.cookie || '');
  }


  inject('cookies', cookies);
}