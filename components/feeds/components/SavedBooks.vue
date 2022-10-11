<template>
  <div class="w-full flex flex-col mt-3">
    <book-with-price-button
      v-for="(item, index) in data.items"
      :key="index"
      :book="item"
    ></book-with-price-button>
  </div>
</template>

<script>
import BookWithPriceButton from './BookWithPriceButton.vue'
export default {
  components: { BookWithPriceButton },
  props: {
    data: {
      required: true,
    },
  },
}
</script>

<style></style>
