<template>
  <div class="flex flex-col space-y-7">
    <div class="flex flex-wrap">
      <div
        v-for="(item, index) in 4"
        :key="index"
        class="w-1/2 lg:w-1/4 pb-4 lg:pb-0 pr-4"
      >
        <div
          class="h-20 rounded-2xl text-left flex flex-col justify-center p-5 bg-blueGray-100 animate-pulse"
        ></div>
      </div>
    </div>
    <div>
      <p class="pb-4 border-b border-blueGray-100 font-bold text-black">
        Өдрийн мэнд
      </p>
      <book-slider-skeleton></book-slider-skeleton>

      <invoice-skeleton></invoice-skeleton>

      <podcast-slider-skeleton></podcast-slider-skeleton>

      <book-slider-skeleton></book-slider-skeleton>
    </div>
  </div>
</template>

<script>
import BookSliderSkeleton from './BookSliderSkeleton.vue'
import PodcastSliderSkeleton from './PodcastSliderSkeleton.vue'
import InvoiceSkeleton from './InvoiceSkeleton.vue'
export default {
  components: {
    BookSliderSkeleton,
    InvoiceSkeleton,
    PodcastSliderSkeleton,
  },
}
</script>

<style></style>
