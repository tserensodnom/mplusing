<template>
  <transition-group name="list-complete" class="w-full flex flex-col mt-3">
    <unlocked-book
      v-for="item in data"
      :key="item.id"
      :book="item"
      class="list-complete-item"
    ></unlocked-book>
  </transition-group>
</template>

<script>
import UnlockedBook from './UnlockedBook.vue'
export default {
  components: { UnlockedBook },
  props: {
    data: {
      required: true,
    },
  },
}
</script>

<style></style>
