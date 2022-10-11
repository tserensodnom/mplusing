<template>
  <div
    class="text-black col-span-12 sm:col-start-2 sm:col-span-10 xl:col-start-3 xl:col-span-8"
  >
    <div class="w-full mt-5 mb-4">
      <h2 class="sm:px-0 sm:mx-0 text-lg sm:text-xl font-bold">Цэнэг</h2>
      <p class="sm:px-0 sm:mx-0 text-xs sm:text-sm text-gray-400">
        {{ data.plan ? data.plan.name : '' }}
      </p>
      <div
        v-if="showRemaining"
        class="w-full mt-3 p-3 rounded-2xl bg-red-400 flex flex-row items-center justify-between space-x-3 text-xs text-white font-light"
      >
        <icon-alert :resizeMultiply="0.9"></icon-alert>
        <p class="flex-grow">
          <!-- Таны идэвхжүүлсэн багц дуусахад
          <span class="font-semibold">{{ data.plan.remaining_day }} өдөр</span>
          үлдлээ -->
          {{ data.expiration_warning }}
        </p>
        <a @click="showRemaining = false">
          <icon-close styling="w-3" color="#fff"></icon-close>
        </a>
      </div>
      <swiper
        class="mt-3"
        :options="{ spaceBetween: 15, slidesPerView: 'auto' }"
      >
        <swiper-slide
          v-for="(item, index) in data.items"
          :key="index"
          class="w-max"
        >
          <book-single-slide-unlocked :book="item"></book-single-slide-unlocked>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import BookSingleSlideUnlocked from '../../products/BookSingleSlideUnlocked.vue'
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
    BookSingleSlideUnlocked,
  },

  props: {
    data: {
      required: true,
    },
    title: {},
  },

  data() {
    return {
      showRemaining: true,
    }
  },
}
</script>
