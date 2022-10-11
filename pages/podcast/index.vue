<template>
  <div class="w-full grid grid-cols-12">
    <!-- <app-download :appAdBox="true" /> -->
    <feed-podcast
      v-for="(feed, index) in feeds"
      :key="index"
      :feed="feed"
    ></feed-podcast>
  </div>
</template>

<script>
import FeedPodcast from '~/components/feeds/FeedPodcast.vue'
import IconClose from '~/components/icons/IconClose.vue'
import Mplus from '~/components/logo/Mplus.vue'
import AppDownload from '~/components/feeds/components/AppDownload.vue'

export default {
  components: {
    FeedPodcast,
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
    let feeds = await $api.getNewsfeedFor('podcast')

    return { feeds }
  },

  head() {
    return {
      title: 'Подкаст | Mplus.mn',
      meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'Ангилал бүрийн мянга мянган подкастыг Мplus-аас үнэгүй сонсоорой. Та жолооны ард суусан ч бай, фитнессээр хичээллэж байхдаа ч, эсвэл Интернэтгүй байсан ч M+ таныг гайхшруулсаар байх болно.',
        },
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: 'Подкаст | Mplus.mn',
        },
        {
          hid: 'ogdescription',
          property: 'og:description',
          content: 'Ангилал бүрийн мянга мянган подкастыг Мplus-аас үнэгүй сонсоорой. Та жолооны ард суусан ч бай, фитнессээр хичээллэж байхдаа ч, эсвэл Интернэтгүй байсан ч M+ таныг гайхшруулсаар байх болно.',
        },
      ],
    }
  },
}
</script>
