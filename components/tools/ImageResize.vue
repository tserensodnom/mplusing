<template>
  <img
    format="webp"
    class="shadow-md overflow-hidden"
    :class="{
      'h-auto w-full': fix == 'width',
      'w-auto h-full': fix != 'width',
      rounded: !isBig,
      'rounded-xl': isBig,
    }"
    :src="imgurl"
    :alt="alt"
    :style="style"
    loading="lazy"
    @error="onError()"
  />
  <!-- <div
    v-else
    class="w-40 h-40 shadow-md flex flex-row items-center justify-center"
  >
    <mplus-only-logo></mplus-only-logo>
  </div> -->
</template>

<script>
import MplusOnlyLogo from '../logo/MplusOnlyLogo.vue'
export default {
  components: { MplusOnlyLogo },
  props: ['src', 'size', 'alt', 'width', 'fix', 'isBig'],
  data() {
    return {
      imgurl: this.src.replace('/images', `/r_${this.size}_h/images`),
      ratio: this.width,
    }
  },
  computed: {
    pathArray() {
      return this.src.split('_')
    },

    color() {
      const pathArray = this.src.split('_')
      return '#' + pathArray[parseInt(pathArray.length) - 2]
    },

    style() {
      return `background-color: ${this.color}; ${
        this.ratio &&
        'background-blend-mode: multiply; width:' + this.ratio + 'rem;'
      }`
    },
  },
  methods: {
    onError() {
      this.imgurl =
        'https://d3tfpmmm736cqr.cloudfront.net/r_sm_h/images/publisher/square/612ded6e_e9f7f9_1.jpg'
      if (this.fix != 'width') {
        this.ratio = 10
      }
    },
  },
}
</script>
