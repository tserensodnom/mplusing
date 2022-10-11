export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
    '@nuxtjs/sitemap',
    'cookie-universal-nuxt',
    '@nuxtjs/gtm',
  ],
  gtm: {
    id: 'GTM-K2M9GQ3',
  },
  sitemap: {
    hostname: 'https://mplus.mn',
    gzip: true,
    routes: ['/book', '/audio', '/podcast'],
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
    buyUrl: process.env.BUY_URL || 'https://buy.mplusdev.xyz',
    apiUrl: process.env.API_URL || 'https://api.mplusdev.xyz',
    baseUrl: process.env.BASE_URL || 'https://www.mplusdev.xyz',
    accountApiUrl: 'https://api.mplusdev.xyz',
    authBaseUrl: process.env.AUTH_BASE_URL || 'https://mplusdev.xyz',

    axios: {
      browserBaseURL: process.env.API_URL || 'https://api.mplusdev.xyz',
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_URL || 'https://api.mplusdev.xyz',
    },
  },
}
