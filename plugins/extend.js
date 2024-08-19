import Vue from 'vue'
import '@/filters'

export default (context, inject) => {
  /**
   * Vue prototype
   */
  Vue.config.productionTip = false;
  Vue.prototype.baseUrlImg = context.$config.baseURL;

  /**
   * context prototype
   */
  context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent;
  context.isMobile = context.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);

  console.log(!!context.isMobile)
  inject('isMobile', !!context.isMobile);
}
