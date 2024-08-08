import aboutPhone from '@/pages/aboutPhone'
import aboutPhoneMargin from '@/pages/aboutPhoneMargin'
import lanhu_shouye from '@/pages/lanhu_shouye/index'
import wanghaiPhone from '@/pages/wanghaiPhone'
import wlhd from '@/pages/wlhd'
import lanhu_shouyezixun from '@/pages/lanhu_shouyezixun/index'
import lanhu_youwenbida from '@/pages/lanhu_youwenbida/index'
import wendaxiangqingphone from '@/pages/wendaxiangqingphone'
import lanhu_qihuobaozhengjin from '@/pages/lanhu_qihuobaozhengjin/index'

const routes = [
  {
    path: '/lanhu_shouye',
    name: 'lanhu_shouye',
    component:  lanhu_shouye
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
    path: '/lanhu_wanghaijingli/:id',
    name: 'lanhu_wanghaijingli',
    component:  wanghaiPhone
  },
  {
    path: '/wlhd',
    name: 'wlhd',
    meta: { title: '文章详情' },
    props: true,
    component:  wlhd
  },
  {
    path: '/lanhu_shouyezixun/:id/:userid',
    name: 'lanhu_shouyezixun',
    component:  lanhu_shouyezixun
  },
  {
    path: '/lanhu_youwenbida',
    name: 'lanhu_youwenbida',
    component:  lanhu_youwenbida
  },
  
  {
    path: '/wendaxiangqingphone/:id',
    name: 'wendaxiangqingphone',
    meta: { title: '文章详情' },
    props: true,
    component:  wendaxiangqingphone
  },
  
  {
    path: '/lanhu_qihuobaozhengjin',
    name: 'lanhu_qihuobaozhengjin',
    component:  lanhu_qihuobaozhengjin
  },
];

export default routes;
