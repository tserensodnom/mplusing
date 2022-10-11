<template>
  <lottie
    :width="275.229 * resizeMultiply"
    :height="140.363 * resizeMultiply"
    :options="play ? womanCatPlay : womanCatStop"
    v-on:animCreated="womanCatInitAnim"
    class="lottieElm"
  />
</template>

<script>
import * as womancat from '@/assets/lottie/womancat.json'

import lottie from 'vue-lottie/src/lottie.vue'
export default {
  components: { lottie },
  props: {
    resizeMultiply: {
      default: 1,
    },
    play: {
      default: true,
    },
  },
  data() {
    return {
      womanCatAnim: null,
      womanCatPlay: {
        animationData: womancat.default,
        loop: true,
        speed: 1,
        autoplay: true,
      },
      womanCatStop: {
        animationData: womancat.default,
        loop: false,
        speed: 1,
        autoplay: false,
      },
    }
  },
  methods: {
    womanCatInitAnim(anim) {
      this.womanCatAnim = anim
    },
  },
}
</script>

<style></style>
