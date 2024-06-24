import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import componentsRouter from './modules/components'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'
import about from '@/pages/about'
import aboutbzj from '@/pages/aboutbzj'
import aboutPhone from '@/pages/aboutPhone'
import aboutPhoneMargin from '@/pages/aboutPhoneMargin'
import about2 from '@/pages/about2'
import article from '@/pages/article'
import archive from '@/pages/archive'
import apply from '@/pages/apply'
import wendaxiangqing from '@/pages/wendaxiangqing'
import ydy from '@/pages/ydy'
// import admin from '@/views/admin'
import index from '@/pages/index'

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
    component: () => import('@/views/lanhu_denglux2fzhuce_1/index'),
    hidden: true
  },
  {
    path: '/lanhu_denglux2fzhuce',
    name:'lanhu_denglux2fzhuce',
    component: () => import('@/views/lanhu_denglux2fzhuce/index'),
    hidden: true
  },
  {
    path: '/lanhu_denglux2fzhucePhone',
    name:'lanhu_denglux2fzhucePhone',
    component: () => import('@/pages/lanhu_denglux2fzhuce/index'),
    hidden: true
  },
  {
    path: '/lanhu_shouye',
    name: 'lanhu_shouye',
    component:  () => import('@/pages/lanhu_shouye/index')
  },
  {
    path: '/lanhu_shouyezixun/:id/:userid',
    name: 'lanhu_shouyezixun',
    component:  () => import('@/pages/lanhu_shouyezixun/index')
  },
  {
    path: '/lanhu_shouyezixun1',
    name: 'lanhu_shouyezixun1',
    component:  () => import('@/pages/lanhu_shouyezixun1/index')
  },
  {
    path: '/lanhu_youwenbida',
    name: 'lanhu_youwenbida',
    component:  () => import('@/pages/lanhu_youwenbida/index')
  },
  {
    path: '/lanhu_qihuobaozhengjin',
    name: 'lanhu_qihuobaozhengjin',
    component:  () => import('@/pages/lanhu_qihuobaozhengjin/index')
  },
  {
    path: '/lanhu_wanghaijingli/:id',
    name: 'lanhu_wanghaijingli',
    component:  () => import('@/pages/wanghaiPhone')
  },
  {
    path: '/home',
    name: 'home',
    component: index
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/aboutPhone',
    name: 'aboutPhone',
    component: aboutPhone
  },
  {
    path: '/aboutPhoneMargin',
    name: 'aboutPhoneMargin',
    component: aboutPhoneMargin
  },
  {
    path: '/about1',
    name: 'about1',
    component: aboutbzj
  },
  {
    path: '/about2',
    name: 'about2',
    component: about2
  },
  {
    path: '/archive',
    name: 'archive',
    component: archive
  },
  {
    path: '/tag/:name',
    name: 'tag',
    component: archive
  },
  {
    path: '/article/:id/:userid',
    name: 'article',
    meta: { title: '文章详情' },
    props: true,
    component: article
  },
  {
    path: '/wendaxiangqing/:id',
    name: 'wendaxiangqing',
    meta: { title: '文章详情' },
    props: true,
    component: wendaxiangqing
  },
  {
    path: '/wendaxiangqingphone/:id',
    name: 'wendaxiangqingphone',
    meta: { title: '文章详情' },
    props: true,
    component:  () => import('@/pages/wendaxiangqingphone')
  },
  {
    path: '/wlhd',
    name: 'wlhd',
    meta: { title: '文章详情' },
    props: true,
    component:  () => import('@/pages/wlhd')
  },
  {
    path: '/ydy/:id',
    name: 'ydy',
    meta: { title: '一对一' },
    props: true,
    component: ydy
  },
  {
    path: '/apply',
    name: 'apply',
    component: apply
  },
  {
    path: '/admin/',
    name: 'admin',
    component: () => import('@/views/admin')
  },

]

const createRouter = () => new VueRouter({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title ? to.meta.title : '加载中'
  }
  next()
  const userToken = window.sessionStorage.getItem('token')
  if (to.path === '/admin/login') return next()
  if (!userToken && to.path.startsWith('/admin')) {
    next('/admin/login')
  } else {
    next()
  }
})

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
