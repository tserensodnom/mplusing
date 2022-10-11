<template>
  <input
    autoComplete="off"
    class="h-full w-full focus:outline-none font-medium bg-blueGray-100 transition duration-300"
    :class="
      mobile
        ? 'text-gray-900 col-span-10 ml-5 xm:ml-7 sm:col-start-2 sm:col-span-9 sm:mx-0 sm:my-auto'
        : 'pl-3 rounded-lg text-xs hover:shadow-bluexs focus:shadow-bluexs'
    "
    type="search"
    placeholder="Хайх..."
    @input="handleInput"
  />
</template>

<script>
import debounce from 'lodash.debounce'

export default {
  props: ['mobile'],

  methods: {
    handleInput: debounce(function (e) {
      this.$router.push(`/search?q=${e.target.value}`)
    }, 300),
  },
}
</script>
