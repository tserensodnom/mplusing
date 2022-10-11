<template>
  <component
    v-if="
      [
        'banner-slider',
        'product-slider',
        'category-card',
        'banner-full',
      ].includes(feed.component)
    "
    :is="feed.component"
    :data="feed.data"
  ></component>
</template>

<script>
import ProductSlider from './components/ProductSlider.vue'
import BannerSlider from './components/BannerSlider.vue'
import CategoryCard from './components/CategoryCard.vue'
import BannerFull from './components/BannerFull.vue'

export default {
  components: { BannerSlider, ProductSlider, CategoryCard, BannerFull },
  data() {
    return {
      rowCount: 0,
    }
  },
  props: {
    feed: {
      type: Object,
      requiredD: true,
    },
  },
}
</script>
