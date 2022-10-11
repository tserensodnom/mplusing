<template>
  <div
    class="text-black col-span-12 sm:col-start-2 sm:col-span-10 xl:col-start-3 xl:col-span-8 overflow-hidden"
  >
    <div class="w-full mt-5 mb-4">
      <h2 class="ml-5 sm:px-0 sm:mx-0 text-lg sm:text-xl font-bold">
        {{ title }}
      </h2>

      <swiper
        class="mt-3 px-5 sm:px-0"
        :options="{ spaceBetween: 15, slidesPerView: 'auto' }"
      >
        <swiper-slide v-for="(item, index) in data" :key="index" class="w-max">
          <podcast-single-slide-with-progress
            :book="item"
          ></podcast-single-slide-with-progress>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import PodcastSingleSlideWithProgress from '../../products/PodcastSingleSlideWithProgress.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import BookSingleSlide from '~/components/products/BookSingleSlide.vue'
import IconClose from '~/components/icons/IconClose.vue'
import IconAlert from '~/components/icons/IconAlert.vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BookSingleSlide,
    IconClose,
    IconAlert,
    PodcastSingleSlideWithProgress,
  },

  props: {
    data: {
      required: true,
    },
    title: {
      required: true,
    },
  },

  data() {
    return {
      showRemaining: true,
    }
  },
}
</script>
