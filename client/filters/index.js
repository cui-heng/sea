import Vue from 'vue';
import text from './text';
import number from './number';
import format from './format';

Vue.filter('text', text);
Vue.filter('number', number);
Vue.filter('format', format);