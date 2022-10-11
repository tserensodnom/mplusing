<template>
  <div class="flex flex-wrap mt-6 animate-pulse">
    <div
      v-for="(item, index) in 4"
      :key="index"
      class="w-24 h-8 mr-3 mb-3 rounded-full border border-blueGray-200 bg-blueGray-100"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
