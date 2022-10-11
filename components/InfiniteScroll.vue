<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  data() {
    return {
      lastScrollTop: 0,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },

  methods: {
    currentScrollPercentage() {
      return (
        ((document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight)) *
        100
      )
    },

    handleScroll: debounce(function (e) {
      if (this.currentScrollPercentage() > 60) {
        let st = window.pageYOffset || document.documentElement.scrollTop

        if (st > this.lastScrollTop) {
          this.$emit('more')
        }

        this.lastScrollTop = st <= 0 ? 0 : st
      }
    }, 300),
  },
}
</script>
