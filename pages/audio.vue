<template>
  <div class="w-full grid grid-cols-12">
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

export default {
  head: {
    title: 'Аудио ном | Сонсдог ном | Mplus.mn',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content: 'Бэстсэллэр, сонгодог, хувь хүний хөгжил, уран зохиол гэх мэт бүх ангиллын бүтээлүүдийг монгол хэлээр аудио хэлбэрээр хаана ч хэзээ ц сонсох боломжтой. Сонсдог номыг Мplus-аас',
      },
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: 'Аудио ном | Сонсдог ном | Mplus.mn',
      },
      {
        hid: 'ogdescription',
        property: 'og:description',
        content: 'Бэстсэллэр, сонгодог, хувь хүний хөгжил, уран зохиол гэх мэт бүх ангиллын бүтээлүүдийг монгол хэлээр аудио хэлбэрээр хаана ч хэзээ ц сонсох боломжтой. Сонсдог номыг Мplus-аас',
      },
    ],
  },
  components: {
    FeedDynamicComponent,
    IconClose,
    Mplus,
    AppDownload,
  },

  data() {
    return {
      feeds: [],
    }
  },

  async asyncData({ $api }) {
    let feeds = await $api.getNewsfeedFor('audio_book')

    return { feeds }
  },
}
</script>
