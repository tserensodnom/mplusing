<template>
  <div
    class="text-black col-span-12 sm:col-start-2 sm:col-span-10 xl:col-start-3 xl:col-span-8 overflow-hidden"
  >
    <div class="w-full mt-5 mb-4">
      <h2 class="ml-5 sm:px-0 sm:mx-0 text-lg sm:text-xl font-bold">
        {{ data.title ? data.title : title }}
      </h2>

      <p class="ml-5 sm:px-0 sm:mx-0 text-xs sm:text-sm text-gray-400">
        {{ data.sub_title }}
      </p>
      <div
        v-if="data.plan && showRemaining"
        class="w-full mt-3 p-3 rounded-2xl bg-red-400 flex flex-row items-center justify-between space-x-3 text-xs text-white font-light"
      >
        <icon-alert :resizeMultiply="0.9"></icon-alert>
        <p class="flex-grow">
          Таны идэвхжүүлсэн багц дуусахад
          <span class="font-semibold">{{ data.plan.remaining_day }} өдөр</span>
          үлдлээ
        </p>
        <a @click="showRemaining = false">
          <icon-close styling="w-3" color="#fff"></icon-close>
        </a>
      </div>
      <swiper
        v-if="data.items"
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
      <swiper
        v-else
        class="mt-3 px-5 sm:px-0"
        :options="{ spaceBetween: 15, slidesPerView: 'auto' }"
      >
        <swiper-slide v-for="(item, index) in data" :key="index" class="w-max">
          <book-single-slide-unlocked
            v-if="item.model"
            :book="item"
          ></book-single-slide-unlocked>
          <book-single-slide v-else :book="item" />
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
