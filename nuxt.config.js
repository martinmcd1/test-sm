const pkg = require('./package');
const axios = require('axios');

let axiosConfig = {
  // See https://github.com/nuxt-community/axios-module#options
  baseURL: 'http://screenmedia-backend.azurewebsites.net//'
  //debug: true
};
module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {


    title: "Mobile App Development and Web Design Glasgow | Digital Design Glasgow | Screenmedia",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Screenmedia is a BAFTA-award winning digital design practice working on the leading edge of multi-platform design and development.' },
    ],
    script: [{ src: 'https://cdn.polyfill.io/v2/polyfill.min.js' }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/axios.js', ssr: true },
    { src: '@/plugins/components.js', ssr: true },
    { src: '@/plugins/ksvuescrollmagic', ssr: false },
    { src: '@/plugins/vuecarousel', ssr: false },
    { src: '@/plugins/picturefill.js', ssr: false },
    { src: '@/plugins/enquire.js', ssr: false }
    // {src: '@/plugins/pluginname', ssr: true/false}
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // provide path to the file with resources
    '@nuxtjs/axios',
    [
      'nuxt-sass-resources-loader',
      ['@/scss/references/_mixins.scss', '@/scss/references/_variables.scss']
    ]
  ],
  axios: axiosConfig,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Generate configuration
   */
  generate: {
    routes(callback) {
      let routes = [];

      let a = axios.create(axiosConfig);
      a.get('routes/')
        .then(resp => {
          resp.data.routes.forEach(route => {
            routes.push(route);
          });

          callback(null, routes);
        })
        .catch(callback);
    }
  },

  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  }
};
