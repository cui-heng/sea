import Vue from 'vue';
import Element from 'element-ui';
import locale from 'element-ui/lib/locale';
import localeEN from 'element-ui/lib/locale/lang/en';

export default (context) => {
  /**
   * TODO 
   * size 
   */
  Vue.use(Element, { locale: localeEN });


  /**
   * element 实现i18n
   */
  locale.i18n((key, value) => context.i18n.t(key, value));
}
