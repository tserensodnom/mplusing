<template>
  <div class="mt-1 genres w-full flex flex-wrap text-xs">
    <NuxtLink
      v-for="(item, index) in data"
      :key="index"
      class="mr-3 mb-3 px-4 pt-2 h-8 transition duration-200 ring-opacity-50 bg-white rounded-full shadow-bluexs text-xs"
      :class="`ring-${color()}`"
      :to="`/search?filter[tag]=${item.name}`"
    >
      <p class="line-clamp-1">
        <span class="font-bold" :class="`text-${color()}`">#</span>
        {{ item.name }}
      </p>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      require: true,
    },
    type: {
      default: 'array',
    },
  },
  methods: {
    color() {
      const number = Math.floor(Math.random() * 5)
      if (number == 1) {
        return 'red-400'
      } else if (number == 2) {
        return 'yellow-400'
      } else if (number == 3) {
        return 'green-400'
      } else if (number == 4) {
        return 'indigo-400'
      } else {
        return 'pink-400'
      }
    },
  },
}
</script>

<style></style>
