<template>
  <div
    class="col-span-12 sm:col-start-2 sm:col-span-10 xl:col-start-3 xl:col-span-8 animate-pulse overflow-hidden"
  >
    <div class="w-full mt-5 mb-4">
      <div
        class="ml-5 sm:px-0 sm:mx-0 rounded-full bg-blueGray-100 h-4 w-1/4"
      ></div>

      <div
        class="ml-5 mt-2 sm:px-0 sm:mx-0 rounded-full bg-blueGray-100 h-2 w-2/4"
      ></div>
      <swiper
        class="mt-3 px-5 sm:px-0"
        :options="{ spaceBetween: 0, slidesPerView: 'auto' }"
      >
        <swiper-slide
          v-for="(item, index) in 7"
          :key="index"
          class="w-max pr-4"
        >
          <div class="h-40 w-40 relative bg-blueGray-100 rounded-lg"></div>
          <div class="mt-2 rounded-full bg-blueGray-100 h-2 w-2/4"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style></style>
