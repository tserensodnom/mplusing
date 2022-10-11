<template>
  <a
    :href="book.model.web_link"
    class="w-full flex flex-row items-center space-x-10 justify-start py-5 border-b border-blueGray-100"
  >
    <div class="flex flex-row items-center space-x-3">
      <div class="flex flex-col">
        <image-resize
          :src="book.model.cover"
          :alt="book.model.title"
          class="w-20 rounded-xl overflow-hidden shadow"
          size="sm"
          :width="5"
        ></image-resize>
        <div
          v-if="
            book.model[book.model_type][
              book.model_type == 'audio_book'
                ? 'listening_progress'
                : 'reading_progress'
            ].percent > 0
          "
          class="mt-3 h-1 rounded-full bg-blueGray-100 xm:hidden"
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
      </div>
      <div class="flex flex-col">
        <p
          class="font-semibold text-sm md:text-lg w-32 md:w-40 leading-none line-clamp-2"
        >
          {{ book.model.title }}
        </p>
        <!-- <p class="text-xs font-light mt-1 text-blueGray-400">
          {{ book.publisher.name }}
        </p> -->
      </div>
    </div>
    <div class="flex flex-row flex-grow justify-between">
      <div class="xm:hidden"></div>
      <div
        v-if="
          book.model[book.model_type][
            book.model_type == 'audio_book'
              ? 'listening_progress'
              : 'reading_progress'
          ].percent > 0
        "
        class="hidden xm:flex flex-col justify-center space-y-3"
      >
        <p class="font-semibold text-lg text-green-400">
          {{
            book.model[book.model_type][
              book.model_type == 'audio_book'
                ? 'listening_progress'
                : 'reading_progress'
            ].percent
          }}%
        </p>
        <div class="mt-3 h-1 w-20 rounded-full bg-blueGray-100">
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
      </div>

      <div v-else></div>
      <div
        class="flex flex-col text-right justify-center font-light text-xs md:text-sm text-blueGray-400"
      >
        <p v-if="book.model_type == 'audio_book'">Аудио ном</p>
        <p v-else>Цахим ном</p>
        <div v-if="book.plan">
          <p>{{ book.plan.name }}</p>
          <p class="text-red-500 text-xs">
            {{ book.plan.remaining_day }} өдөр үлдэв
          </p>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import ImageResize from '../../tools/ImageResize.vue'
export default {
  components: { ImageResize },
  props: {
    book: {
      required: true,
    },
  },
  computed: {
    width() {
      const pathArray = this.book.model.cover.split('_')
      return 10 * pathArray[parseInt(pathArray.length) - 1].slice(0, -4)
    },
  },
}
</script>

<style></style>
