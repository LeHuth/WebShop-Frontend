// nuxt.config.ts
import vuetify from 'vite-plugin-vuetify'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
// @ts-ignore
// @ts-ignore
export default defineNuxtConfig({
    ssr: true,
    plugins: [

    ],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/apollo',
        async (options, nuxt) => {
            // @ts-ignore
            nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(
                vuetify()
            ))
        }
    ],
    apollo: {
        authType: "JWT",
        authHeader: "Authorization",
        tokenStorage: "cookie",
        clients: {
            default: {
                httpEndpoint: 'http://127.0.0.1:8000/graphql',
            }
        }
    },
    components: true,
    css: ['vuetify/lib/styles/main.sass', '~/assets/fonts.css'],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        define: {
            'process.env.DEBUG': false,
        },
    },
    generate: {
        routes: [
            '/'
        ]
    },
    buildModules: [
        ['@nuxtjs/vuetify', { optionsPath: './vuetify.options.js' }],
    ],
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    }
})
