import Vue from 'vue'
import day from 'dayjs'
import * as filters from '@/filters';
import fHeader from '@/components/f-header'
import fFooter from '@/components/f-footer'



// TODO window axios
// import './icons' // icon




/**
 * register global component
 */
Vue.component('f-header', fHeader);
Vue.component('f-footer', fFooter);

/**
 * register global utility filters
 */
Vue.filter('dateformat', function(indate, outdate) {
  return day(indate).format(outdate)
});

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
});



export default (context) => {
  /**
   * Vue prototype
   */
  Vue.config.productionTip = false;
  Vue.prototype.baseUrlImg = context.$config.baseURL;
}
