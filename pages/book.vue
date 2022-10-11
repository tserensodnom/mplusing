<template>
  <div v-if="feeds" class="w-full grid grid-cols-12">
    <!-- <app-download :appAdBox="true" /> -->
    <feed-dynamic-component
      v-for="(feed, index) in feeds"
      :key="index"
      :feed="feed"
    ></feed-dynamic-component>
  </div>
</template>

<script>
import FeedDynamicComponent from '../components/feeds/FeedDynamicComponent.vue'
import IconClose from '~/components/icons/IconClose.vue'
import Mplus from '~/components/logo/Mplus.vue'
import AppDownload from '~/components/feeds/components/AppDownload.vue'
import BannerFull from '~/components/feeds/components/BannerFull.vue'

export default {
  head: {
    title: 'Цахим ном | Илүү Унш | Mplus.mn',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content: 'Та дэлхийн өнцөг булан бүрээс Монгол хэл дээр Монголын болон дэлхийн бэстсэллэрүүдийг /bestseller/ цаасан хэвлэлээс нь хямд үнээр худалдан авч цахим хэлбэрээр номоо уншаарай.',
      },
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: 'Цахим ном | Илүү Унш | Mplus.mn',
      },
      {
        hid: 'ogdescription',
        property: 'og:description',
        content: 'Та дэлхийн өнцөг булан бүрээс Монгол хэл дээр Монголын болон дэлхийн бэстсэллэрүүдийг /bestseller/ цаасан хэвлэлээс нь хямд үнээр худалдан авч цахим хэлбэрээр номоо уншаарай.',
      },
    ],
  },
  components: {
    FeedDynamicComponent,
    IconClose,
    Mplus,
    AppDownload,
    BannerFull,
  },

  data() {
    return {
      feeds: null,
    }
  },

  async asyncData({ $api }) {
    let feeds = await $api.getNewsfeedFor('book')

    return { feeds }
  },
}
</script>
