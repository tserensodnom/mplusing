<template>
  <a
    :href="book.web_link"
    class="w-full flex flex-row items-center space-x-10 justify-between py-5 border-b border-blueGray-100"
  >
    <div class="flex flex-row items-center space-x-3">
      <img
        :src="book.cover"
        :alt="book.name"
        class="w-20 rounded-xl overflow-hidden shadow"
      />
      <div class="flex flex-col">
        <p class="font-semibold text-lg w-40 leading-none">{{ book.name }}</p>
        <p class="text-xs font-light mt-1 text-blueGray-400">
          {{ book.publisher.name }}
        </p>
      </div>
    </div>
    <button-rounded :name="book.price"></button-rounded>
  </a>
</template>

<script>
import ButtonRounded from './ButtonRounded.vue'
export default {
  components: { ButtonRounded },
  props: {
    book: {
      required: true,
    },
  },
}
</script>

<style></style>
