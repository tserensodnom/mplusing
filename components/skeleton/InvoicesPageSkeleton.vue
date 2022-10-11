<template>
  <div class="w-full mt-5 flex flex-col animate-pulse">
    <div class="flex flex-row items-center justify-between">
      <div class="w-16 h-3 rounded-full bg-blueGray-100"></div>
      <div class="w-16 h-3 rounded-full bg-blueGray-100"></div>
    </div>
    <div class="space-y-7 mt-3">
      <invoice-skeleton
        v-for="(item, index) in 7"
        :key="index"
        :pending="false"
      ></invoice-skeleton>
    </div>
  </div>
</template>

<script>
import InvoiceSkeleton from './InvoiceSkeleton.vue'

export default {
  components: {
    InvoiceSkeleton,
  },
}
</script>

<style></style>
