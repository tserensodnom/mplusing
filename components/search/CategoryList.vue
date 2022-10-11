<template>
  <ul class="space-y-3 w-10/12">
    <li v-for="(item, index) in data" :key="index">
      <NuxtLink :to="`/search?filter[category]=${item.id}`">
        <p :class="isActive(item.id) ? 'text-brand' : 'text-blueGray-400'">
          {{ item.name }}
        </p>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    isActive(id) {
      if (id == this.$route.query['filter[category]']) {
        return true
      }
      return false
    },
  },
}
</script>

<style></style>
