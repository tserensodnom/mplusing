<template>
  <div class="mt-5 mb-4 sm:mt-10 col-span-12">
    <swiper
      class="px-5"
      :options="{
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        autoPlay: { delay: 3500 },
      }"
    >
      <swiper-slide
        v-for="(item, index) in data.items"
        :key="index"
        class="opacity-50 mx-2 sm:mx-3 h-40 ss:h-44 xs:h-52 sm:h-64 w-auto swiper-ad transition duration-200 ease-in-out pb-4"
      >
        <a :href="item.web_link">
          <img
            :src="imgResize(item.cover)"
            :alt="item.name"
            class="h-full shadow-lg rounded"
          />
        </a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    imgResize(url) {
      return url.toString().replace('/images', '/r_sm_h/images')
    },
  },
}
</script>
