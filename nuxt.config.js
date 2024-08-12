import i18nMessages from './i18n/i18n';

export default {
  target: 'server',

  head: {
    title: '海洋财经',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: "keywords", content: "期货,期货开户,期货手续费,期货公司,期货账户,期货保证金" },
      {  name: "description", content: "海洋财经，股票期货、保险基金理财前找专业顾问提前问一问，避免踩雷入坑。理财问理财规划和配置，专业顾问为您提供一对一服务。海洋财经更值得信任" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: '/flexible.js' },
    ]
  },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    'normalize.css/normalize.css',
    '@/common.css',
    '@/styles/index.scss',
    '@/styles/element-variables.scss',
  ],

  plugins: [
    '@/plugins/cookie',
    '@/plugins/element-ui',
    '@/plugins/extend',
    '@/plugins/axios',
    '@/plugins/adviser-modal.client.js'
  ],

  middleware: ['auth'],

  serverMiddleware: [
    { path: '/api', handler: '~/api' }
  ],

  components: true,

  buildModules: [
    '@nuxtjs/router',
  ],

  routerModule: {
    path: './router',
    fileName: 'index.js',
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxtjs/svg-sprite',
  ],

  router: {
    middleware: 'auth'
  },

  axios: {
    proxy: true,
  },

  proxy: {
    '/website': {
      target: process.env.BASE_URL
    },
    '/article/v1': process.env.FSOU_BASE_URL,
  },

  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: i18nMessages,
    }
  },

  svgSprite: {
    input: '~/assets/icons/'
  },

  build: {
    transpile: [/^element-ui/],
    postcss: {
      postcssOptions: {
        plugins: {
          autoprefixer: {}
        }
      }
    }
  },

  env: {
    FSOU_BASE_URL: process.env.FSOU_BASE_URL
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  }
}
