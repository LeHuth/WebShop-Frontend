// nuxt.config.ts


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: true,
    plugins: [

    ],
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/apollo'
    ],
    apollo: {
        clients: {
            default: {
                httpEndpoint: 'http://127.0.0.1:8000/graphql'
            }
            },
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
    vue: {
        config: {
            productionTip: false,
            devtools: true
        }
    }
})
