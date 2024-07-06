const env = require('./env');

module.exports = {
    alias: {
        "@": "/",
    },
    env: {
        baseUrl: env[process.env.NODE_ENV].BASE_URL,
        apiPrefix: env[process.env.NODE_ENV].URL_PREFIX
    },

    css: [
        // '@/assets/css/main.scss',
    ],
    plugins: [
        {
            src: '~plugins/extend',
            ssr: true
        }
    ],
    // modules: [
    //     '@nuxtjs/axios',
    //     '@nuxtjs/proxy',
    //     '@nuxtjs/style-resources'
    // ],
    axios: {
        proxy: true,
        credentials: true,
    },

    proxy: {
        '/api/front': {
            target: env[process.env.NODE_ENV].BASE_URL,
        },
        '/file': {
            target: env[process.env.NODE_ENV].BASE_URL,
        },
        '/files': {
            target: env[process.env.NODE_ENV].BASE_URL,
        },
    },

    head: {
        link: [{
            rel: 'stylesheet',
            // href: '//at.alicdn.com/t/font_2040977_ozb90g6ebjp.css'
        }, ],
        script: [{
            // src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js'
        }],
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
            },
            {
                name: "keywords",
                content:
                    "期货,期货开户,期货手续费,期货公司,期货账户,期货保证金",
                hid: "keywords",
            },
            {
                name: "description",
                content:
                    "描述",
                hid: "description",
            }
        ]
    },

    build: {
        extend(config, {
            isDev,
            isClient
        }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        postcss: {
            plugins: {},
            preset: {
                autoprefixer: true
            },
        },
    }
}