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
          <book-single-slide :book="item" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import BookSingleSlide from '~/components/products/BookSingleSlide.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BookSingleSlide,
  },

  props: {
    data: {
      required: true,
    },
  },
}
</script>
