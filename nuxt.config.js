import i18nMessages from './i18n/i18n';
console.log(process.env, '------')

export default {
  head: {
    title: 'nuxt2',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no' },
      { name: "keywords", content: "期货,期货开户,期货手续费,期货公司,期货账户,期货保证金" },
      {  name: "description", content: "描述" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/dropzone@5/dist/min/dropzone.min.css' },
    ],
    script: [
      { src: 'https://unpkg.com/dropzone@5/dist/min/dropzone.min.js' }
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
    '@/plugins/element-ui',
    '@/plugins/extend',
    '@/plugins/axios',
  ],

  middleware: ['auth'],

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
  ],

  router: {
    middleware: 'auth'
  },

  axios: {
    baseURL: process.env.BASE_URL,
    // baseURL: 'http://47.115.209.54:8080',
  },

  i18n: {
    locales: ['en', 'zh'],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
      messages: i18nMessages,
    }
  },

  build: {
    transpile: [/^element-ui/],
  },

  env: {
    FSOU_BASE_URL: process.env.FSOU_BASE_URL
  },

  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL,
  }
}
