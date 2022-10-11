<template>
  <div
    class="col-span-12 sm:col-start-2 sm:col-span-10 xl:col-start-3 xl:col-span-8 overflow-hidden"
  >
    <div class="w-full mt-5 mb-4">
      <h2 class="ml-5 sm:px-0 sm:mx-0 text-lg sm:text-xl font-bold">
        {{ data.title }}
      </h2>

      <p class="ml-5 sm:px-0 sm:mx-0 text-xs sm:text-sm text-gray-400">
        {{ data.sub_title }}
      </p>

      <swiper
        class="mt-3 px-5 sm:px-0"
        :options="{ spaceBetween: 15, slidesPerView: 'auto' }"
      >
        <swiper-slide
          v-for="(item, index) in data.items"
          :key="index"
          class="w-max"
        >
          <dynamic-link v-if="item.web_link" :url="item.web_link">
            <div class="h-40">
              <image-resize
                :src="item.cover"
                size="sm"
                :alt="item.name"
                :width="width(item.cover)"
              />
            </div>

            <p
              class="mt-2 text-sm font-medium line-clamp-1"
              :style="'max-width:' + '8' + 'rem'"
            >
              {{ item.name ? item.name : item.title }}
            </p>
            <!-- progress bar -->
            <div
              v-if="item.progress"
              class="mt-3 h-1 rounded-full bg-blueGray-100"
              :style="'width:' + '8' + 'rem'"
            >
              <div
                class="h-full rounded-full bg-green-500"
                :style="'width: ' + item.progress + '%'"
              ></div>
            </div>
          </dynamic-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import BookSingleSlide from '~/components/products/BookSingleSlide.vue'
import ImageResize from '~/components/tools/ImageResize'
import DynamicLink from '~/components/tools/DynamicLink.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BookSingleSlide,
    ImageResize,
    DynamicLink,
  },

  props: {
    data: {
      required: true,
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
