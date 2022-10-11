const axios = require('axios')

export default {
  server: {
    host: '0.0.0.0',
    port: 3000,
  },

  loading: {
    color: '#0061ff',
    failedColor: '#0061ff',
    height: '2px',
    continuous: true,
  },

  head: {
    title: 'Аудио ном | Цахим ном | Үнэгүй подкаст | Mplus.mn',

    htmlAttrs: {
      lang: 'mn',
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', 
      hid: 'description', 
      content: 'Цахим ном унших, аудио ном болон подкаст сонсох цогц платформ Mplus. Та дэлхийн өнцөг булан бүрээс Монгол хэл дээр Монголын болон дэлхийн бэстсэллэрүүдийг цаасан хэвлэлээс нь хямд үнээр худалдан авч, цахим номоо цаг алдалгүй уншин, сонсдог номоо сонсон цагаа хэмнээрэй. M+' },
      { name: 'keywords', 
      hid: 'keywords', 
      content: 'Mplus, M+, М нэмэх, Цахим, Ebook, Book, унших, сонсох, ном, подкаст, цэнэг, podcast, ном татах, book download, audiobook, audiobooks, mongolian books, mongolian audiobooks, ном сонсох, сонсдог ном, аудио ном, подкаст сонсох, шинэ, шинэ ном, бестселлер ном, бэстсэллэр ном, download books, ном түрээслэх, шилдэг ном'},
      
      { name: 'og:title', hid: 'ogtitle', content: 'Аудио ном | Цахим ном | Үнэгүй подкаст | Mplus.mn' },
      { name: 'og:image', hid: 'ogimage', content: 'https://assets.mplus.mn/mplus.png' },
      { name: 'fb:app_id', hid: 'fbapp_id', content: '2022668451355127' },
      { name: 'og:type', hid: 'ogtype', content: 'book' },
      { name: 'og:description', hid: 'ogdescription', content: 'Цахим ном унших, аудио ном болон подкаст сонсох цогц платформ Mplus. Та дэлхийн өнцөг булан бүрээс Монгол хэл дээр Монголын болон дэлхийн бэстсэллэрүүдийг цаасан хэвлэлээс нь хямд үнээр худалдан авч, цахим номоо цаг алдалгүй уншин, сонсдог номоо сонсон цагаа хэмнээрэй. M+' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.3.1/swiper-bundle.css',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/tailwind.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/auth.js' },
    { src: '~/plugins/serverUser.js', mode: 'server' },
    { src: '~/plugins/api.js' },
    { src: '~/plugins/GoogleAnalytics.js', mode: 'client' },
    { src: '~/plugins/clientUserData', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/postcss8', '@nuxt/image'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-K2M9GQ3',
  },
  sitemap: {
    hostname: 'https://www.mplus.mn',

    gzip: true,
    exclude: ['/loginSuccess', '/account/**', '/login', '/tseneg'],
    routes: async () => {
      const search = await axios.get(
        'https://api.mplus.mn/api/search/book?page[number]=1'
      )
      let slugs = search.data.data

      for (let i = 2; i <= search.data.meta.last_page; i++) {
        const { data } = await axios.get(
          'https://api.mplus.mn/api/search/book?page[number]=' + i
        )
        slugs = [...slugs, ...data.data]
      }

      return [
        '/book',
        '/audio',
        '/podcast',
        ...slugs.map((content) => `/${content.slug}`),
      ]
    },
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  publicRuntimeConfig: {
    buyUrl: process.env.BUY_URL || 'http://buy.mplus.test',
    apiUrl: process.env.API_URL || 'http://api.mplus.test',
    baseUrl: process.env.BASE_URL || 'http://www.mplus.test',
    imageBaseUrl: process.env.IMAGE_BASE_URL || 'http://mplus.test',
    accountApiUrl: process.env.ACCOUNT_API || 'http://api.mplus.test',
    authBaseUrl: process.env.AUTH_BASE_URL || 'http://mplus.test',

    axios: {
      browserBaseURL: process.env.API_URL || 'http://api.mplus.test',
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL || 'http://api.mplus.test',
    },
  },
}
