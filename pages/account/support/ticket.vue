<template>
  <div>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  beforeMount() {
    if (this.$route.path === '/account/support/ticket') {
      this.$router.replace('/account/support')
    }
  },
}
</script>

<style></style>
