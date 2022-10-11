<template>
  <div>
    <dynamic-link
      :url="
        this.$route.query['mode'] == 'app'
          ? book.episode.deep_link
          : book.episode.web_link
      "
    >
      <div>
        <div class="h-40 relative">
          <img
            :src="book.episode.thumb_url.replace('/images', `/r_sm_h/images`)"
            :alt="book.episode.title"
            class="h-full"
            :style="'max-width:' + width + 'rem'"
          />
        </div>
        <p
          v-if="book.episode.title"
          class="mt-2 text-sm font-medium line-clamp-1"
          :style="'max-width:' + width + 'rem'"
        >
          {{ book.episode.title }}
        </p>
      </div>
    </dynamic-link>

    <dynamic-link
      v-if="book.episode.channel.name && book.episode.channel.id"
      :url="
        this.$route.query['mode'] == 'app'
          ? book.publisher.deep_link
          : `/authors/${book.episode.channel.id}`
      "
    >
      <div>
        <p
          class="text-xs text-gray-400 line-clamp-1"
          :style="'max-width:' + width + 'rem'"
        >
          {{ book.episode.channel.name }}
        </p>
      </div>
    </dynamic-link>
    <!-- progress bar -->
    <div
      v-if="book.percent"
      class="mt-3 h-1 rounded-full bg-blueGray-100"
      :style="'max-width:' + width + 'rem'"
    >
      <div
        class="h-full rounded-full bg-green-500"
        :style="'width: ' + book.percent + '%'"
      ></div>
    </div>
  </div>
</template>

<script>
import DynamicLink from '../tools/DynamicLink.vue'
import ImageResize from '../tools/ImageResize.vue'

export default {
  props: ['book'],

  components: {
    ImageResize,
    DynamicLink,
  },

  computed: {
    width() {
      const pathArray = this.book.episode.thumb_url.split('_')
      return 10 * pathArray[parseInt(pathArray.length) - 1].slice(0, -4)
    },
  },
}
</script>
