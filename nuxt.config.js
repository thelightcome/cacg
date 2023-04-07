export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  proxy: {
    '/api/*': {
      target: 'http://localhost:5000/',
    },
  },
  ssr: true,
  target: 'server',
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
  head: {
    title: 'CACG',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', href: '/favicon.png' },
    ],
    script: [
      { hid: 'stripe', src: 'https://maps.api.2gis.ru/2.0/loader.js?pkg=full', defer: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/static/css/default.css',
    '~/static/css/fonts.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/translater.js',
    '~/plugins/v-mask.js',
    { src: '~/plugins/vue-slick-carousel.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
