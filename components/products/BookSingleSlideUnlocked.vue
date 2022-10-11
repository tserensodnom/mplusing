<template>
  <div>
    <dynamic-link :url="book.model.web_link" class="flex flex-col">
      <div>
        <div class="h-40 relative">
          <image-resize
            :src="book.model.cover"
            size="sm"
            :alt="book.model.title"
            :width="width"
          />
        </div>

        <p
          class="mt-2 text-sm font-medium line-clamp-1"
          :style="'max-width:' + width + 'rem'"
        >
          {{ book.model.title }}
        </p>
      </div>

      <div
        v-if="
          book.model[book.model_type][
            book.model_type == 'audio_book'
              ? 'listening_progress'
              : 'reading_progress'
          ].percent > 0
        "
        class="mt-3 h-1 rounded-full bg-blueGray-100"
        :style="'max-width:' + width + 'rem'"
      >
        <div
          class="h-full rounded-full bg-green-500"
          :style="
            'width: ' +
            book.model[book.model_type][
              book.model_type == 'audio_book'
                ? 'listening_progress'
                : 'reading_progress'
            ].percent +
            '%'
          "
        ></div>
      </div>
    </dynamic-link>

    <!-- <dynamic-link
      v-if="book.publisher && book.publisher.id"
      :url="
        this.$route.query['mode'] == 'app'
          ? book.publisher.deep_link
          : `/authors/${book.publisher.id}`
      "
    >
      <div>
        <p
          class="text-xs text-gray-400 line-clamp-1"
          :style="'max-width:' + width + 'rem'"
        >
          {{ book.publisher.name }}
        </p>
      </div>
    </dynamic-link> -->
    <!-- progress bar -->
    <!-- <div
      v-if="book.progress"
      class="mt-3 h-1 rounded-full bg-blueGray-100"
      :style="'max-width:' + width + 'rem'"
    >
      <div
        class="h-full rounded-full bg-green-500"
        :style="'width: ' + book.progress + '%'"
      ></div>
    </div> -->
  </div>
</template>

<script>
import DynamicLink from '../tools/DynamicLink.vue'
import ImageResize from '../tools/ImageResize'
import VectorTsenegStar from '../illustrations/VectorTsenegStar.vue'

export default {
  props: ['book'],

  components: {
    ImageResize,
    DynamicLink,
    VectorTsenegStar,
  },

  computed: {
    width() {
      const pathArray = this.book.model.cover.split('_')
      return 10 * pathArray[parseInt(pathArray.length) - 1].slice(0, -4)
    },
  },
}
</script>
