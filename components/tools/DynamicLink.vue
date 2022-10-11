<template>
  <component
    v-if="url"
    :is="isBaseUrlSame ? 'NuxtLink' : 'a'"
    :to="isBaseUrlSame ? linkTo : null"
    :href="isBaseUrlSame ? null : linkTo"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    url: {
      required: true,
    },
  },
  data() {
    return {
      isBaseUrlSame: false,
    }
  },
  computed: {
    linkTo() {
      if (this.url.includes(this.$config.baseUrl)) {
        this.isBaseUrlSame = true
        return this.url.split(this.$config.baseUrl)[1]
      }
      this.isBaseUrlSame = false
      return this.url
    },
  },
}
</script>

<style></style>
