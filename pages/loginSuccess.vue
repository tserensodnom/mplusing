<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    this.$router.push(window.localStorage.getItem('prevUrl'))
  },
}
</script>
