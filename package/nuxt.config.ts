// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,

  typescript: {
    shim: false
  },

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    server: {
      proxy: {
        '/api/wp': {
          target: 'https://www.mercatoitinerante.it',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/wp/, '/wp-json/mi_plugin/v1'),
          secure: false,
        }
      }
    }
  },

  nitro: {
    serveStatic: true,
    devProxy: {
      '/api/wp': {
        target: 'https://www.mercatoitinerante.it/wp-json/mi_plugin/v1',
        changeOrigin: true,
        prependPath: false,
      }
    }
  },

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NODE_ENV === 'production' 
        ? 'https://www.mercatoitinerante.it/wp-json/mi_plugin/v1'
        : '/api/wp'
    }
  },

  devServerHandlers: [],

  hooks: {
  },

  compatibilityDate: "2025-04-15",
})