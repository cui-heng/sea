import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import index from '@/pages/index'
import archive from '@/pages/archive'
import apply from '@/pages/apply'
import login from '@/pages/login/index'
import lanhu_denglux2fzhuce from '@/pages/lanhu_denglux2fzhuce/index'
import lanhu_shouyezixun1 from '@/pages/lanhu_shouyezixun1/index'

import mobileRoutes from './mobile';

// ======================= delete import ================================
// 期贷一对一服务     => /service
// import about from '@/pages/about'
// 期贷保证金        => /article/:id
// import aboutbzj from '@/pages/aboutbzj'
// 期贷手续费        => /commission
// import about2 from '@/pages/about2'
// 资讯详情         => /earnest
// import article from '@/pages/article'
// 顾问详情         => /adviser/:id
// import ydy from '@/pages/ydy'
// 问答详情         => /answer/:id
// import wendaxiangqing from '@/pages/wendaxiangqing'

// ======================= delete import ================================


// ======================= next import ================================
import service from '@/pages/service/index.vue'
import answerList from '@/pages/answer/list.vue';
import answerInfo from '@/pages/answer/info.vue';
import answerArticle from '@/pages/answer/article.vue';
import adviserInfo from '@/pages/adviser/info.vue';
import commission from '@/pages/commission/index.vue';
import earnest from '@/pages/earnest/index.vue';

// ======================= next import ================================


// ======================= delete routes ================================
// const deleteOldRoutes = [
//   {
//     path: '/about',
//     name: 'about',
//     component: about
//   },
//   {
//     path: '/about1',
//     name: 'about1',
//     component: aboutbzj
//   },
//   {
//     path: '/about2',
//     name: 'about2',
//     component: about2
//   },
//   {
//     path: '/article/:id/:userid',
//     name: 'article',
//     meta: { title: '文章详情' },
//     props: true,
//     component: article
//   },
//   {
//     path: '/ydy/:id',
//     name: 'ydy',
//     meta: { title: '一对一' },
//     props: true,
//     component: ydy
//   },
//   {
//     path: '/archive',
//     name: 'archive',
//     component: archive
//   },
//   {
//     path: '/wendaxiangqing/:id',
//     name: 'wendaxiangqing',
//     meta: { title: '文章详情' },
//     props: true,
//     component: wendaxiangqing
//   },
// ]

// ======================= delete old routes ================================


// ======================= nuxt routes ================================
const routes = [
  {
    path: '/service',
    component: service,
  },
  {
    path: '/answer',
    component: answerList,
  },
  {
    path: '/answer/:id',
    component: answerInfo,
  },
  {
    path: '/article/:id',
    component: answerArticle
  },
  {
    path: '/adviser/:id',
    component: adviserInfo
  },
  {
    path: '/commission',
    component: commission
  },
  {
    path: '/earnest',
    component: earnest
  },
];

// ======================= nuxt routes ==============================

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/login',
    name:'login',
    component: login,
    hidden: true
  },
  {
    path: '/lanhu_denglux2fzhuce',
    name:'lanhu_denglux2fzhuce',
    component: lanhu_denglux2fzhuce,
    hidden: true
  },
  {
    path: '/lanhu_denglux2fzhucePhone',
    name:'lanhu_denglux2fzhucePhone',
    component: lanhu_denglux2fzhuce,
    hidden: true
  },
  {
    path: '/lanhu_shouyezixun1',
    name: 'lanhu_shouyezixun1',
    component:  lanhu_shouyezixun1
  },
  {
    path: '/home',
    name: 'home',
    component: index
  },
  {
    path: '/tag/:name',
    name: 'tag',
    component: archive
  },
  {
    path: '/apply',
    name: 'apply',
    component: apply
  },
]



export const createRouter = (ssrContext, createDefaultRouter, routerOptions, config, store) => {
  return new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes, ...routes, ...mobileRoutes]
  });
}
