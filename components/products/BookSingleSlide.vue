<template>
  <div>
    <dynamic-link
      :url="this.$route.query['mode'] == 'app' ? book.deep_link : book.web_link"
    >
      <div>
        <div class="h-40 relative">
          <image-resize
            :src="book.cover ? book.cover : book.model.cover"
            size="sm"
            :alt="book.name"
            :width="width"
          />
          <div v-if="book.badge" class="absolute right-0 top-4 flex flex-row">
            <nuxt-link
              v-if="book.badge.type == 'plan'"
              class="bg-brand w-5 h-5 shadow-md rounded-md pl-0.5 mr-2 flex items-center justify-center ring-0 ring-blue-400 hover:ring-2 transition duration-300"
              to="/tseneg"
            >
              <vector-tseneg-star :resizeMultiply="0.3" />
            </nuxt-link>
            <div
              v-if="book.badge.type == 'discount'"
              class="bg-red-500 px-1 h-5 shadow-md text-white text-xs font-thin flex flex-col items-center justify-center rounded-l-md"
            >
              <p>
                <span class="font-bold">{{ book.badge.label }}</span>
              </p>
              <!-- <p>ХЯМДРАЛ</p> -->
            </div>
          </div>
          <!-- <div
            class="absolute -top-10 left-2.5 bg-white shadow-md text-xs w-10"
          >
            <p>Цэнэг үйлчилгээнд багтсан</p>
          </div> -->
        </div>

        <p
          v-if="book.name"
          class="mt-2 text-sm font-medium line-clamp-1"
          :style="'max-width:' + width + 'rem'"
        >
          {{ book.name }}
        </p>
        <p
          v-else-if="book.title"
          class="mt-2 text-sm font-medium line-clamp-1"
          :style="'max-width:' + width + 'rem'"
        >
          {{ book.title }}
        </p>
        <p
          v-else
          class="mt-2 text-sm font-medium line-clamp-1"
          :style="'max-width:' + width + 'rem'"
        >
          {{ book.model.title }}
        </p>
      </div>
    </dynamic-link>

    <dynamic-link
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
    </dynamic-link>
    <!-- progress bar -->
    <!-- <div
      v-if="
        book.model[book.model_type][
          book.model_type == 'audio_book'
            ? 'listening_progress'
            : 'reading_progress'
        ]
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
      if (this.book.cover) {
        if (this.book.cover.includes('square-cover')) {
          return 10
        }
        const pathArray = this.book.cover.split('_')
        return 10 * pathArray[parseInt(pathArray.length) - 1].slice(0, -4)
      }
      if (this.book.model.cover.includes('square-cover')) {
        return 10
      }
      const pathArray = this.book.model.cover.split('_')
      return 10 * pathArray[parseInt(pathArray.length) - 1].slice(0, -4)
    },
  },
}
</script>
