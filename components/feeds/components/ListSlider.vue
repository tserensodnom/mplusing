<template>
  <div
    class="mt-5 mb-4 sm:ml-0 col-span-12 sm:col-start-2 sm:col-span-10 xl:col-start-3 xl:col-span-8 overflow-hidden"
  >
    <h2 class="ml-4 sm:ml-0 text-lg sm:text-xl font-bold">{{ data.title }}</h2>
    <p class="ml-4 sm:ml-0 text-xs sm:text-sm text-gray-400">
      {{ data.sub_title }}
    </p>

    <!-- cards -->
    <div
      class="mt-3 flex flex-nowrap overflow-auto noscrollbar swiper-container swiper-audio px-5 sm:px-0"
    >
      <swiper
        class="flex flex-row swiper-wrapper"
        :options="{ spaceBetween: 15, slidesPerView: 'auto' }"
      >
        <swiper-slide
          class="flex flex-col space-y-6 swiper-slide w-full sm:w-11/12 md:w-100"
          v-for="(items, index) in chunkSlides"
          :key="index"
        >
          <div v-for="(item, index) in items" :key="index">
            <dynamic-link v-if="item.web_link" :url="item.web_link">
              <div class="flex flex-row">
                <div class="h-28 min-w-max shadow-md">
                  <image-resize
                    :src="item.cover"
                    size="sm"
                    :alt="item.name"
                    :width="7"
                  />
                </div>
                <div class="ml-4 flex flex-col justify-center">
                  <p class="mt-1 text-xs text-gray-400 line-clamp-1">
                    {{ item.publisher.name }}
                  </p>
                  <p class="text-base font-medium leading-5 line-clamp-3 mt-1">
                    {{ item.name }}
                  </p>
                </div>
              </div>
            </dynamic-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import chunk from 'lodash.chunk'
import ImageResize from '~/components/tools/ImageResize.vue'
import DynamicLink from '~/components/tools/DynamicLink.vue'

export default {
  props: {
    data: {
      required: true,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    ImageResize,
    DynamicLink,
  },
  computed: {
    chunkSlides() {
      return chunk(this.data.items, 3)
    },
  },
  methods: {
    width(url) {
      const pathArray = url.split('_')
      return 10 * pathArray[parseInt(pathArray.length) - 1].slice(0, -4)
    },
  },
}
</script>

<style></style>
