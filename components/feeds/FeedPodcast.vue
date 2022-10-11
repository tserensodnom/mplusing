<template>
  <product-slider-audio
    v-if="feed.component == 'product-slider'"
    :data="feed.data"
  />
  <list-slider v-else-if="feed.component == 'list-slider'" :data="feed.data" />
  <special-slider
    v-else-if="feed.component == 'special-slider'"
    :data="feed.data"
  />
  <banner-full v-else-if="feed.component == 'banner-full'" :data="feed.data" />
</template>

<script>
import ProductSliderAudio from './components/ProductSliderAudio.vue'
import BannerSlider from './components/BannerSlider.vue'
import ListSlider from './components/ListSlider.vue'
import SpecialSlider from './components/SpecialSlider.vue'
import BannerFull from './components/BannerFull.vue'

export default {
  components: {
    BannerSlider,
    ProductSliderAudio,
    ListSlider,
    SpecialSlider,
    BannerFull,
  },

  props: {
    feed: {
      type: Object,
      requiredD: true,
    },
  },
}
</script>
