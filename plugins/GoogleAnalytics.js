import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: {
    id: 'UA-115015316-1',
    params: {
      send_page_view: true,
    },
  },
  appName: 'mplus.mn',
})
Vue.use(VueGtag, {
  config: {
    id: 'AW-347153349',
    params: {
      send_page_view: true,
    },
  },
})
