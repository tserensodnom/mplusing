<template>
  <a
    @click="$emit('clicked')"
    class="transition duration-200 h-12 w-28 sm:w-32 md:w-40 rounded-2xl flex flex-row justify-between items-center"
    :class="{
      'bg-brand text-white': type == 'primary',
      'bg-blueGray-200 text-black': type == 'secondary',
    }"
  >
    <p class="text-center flex-grow text-xs md:text-sm">{{ name }}</p>
    <svg
      v-if="type == 'primary'"
      class="hidden sm:block w-4 md:w-7 mr-1"
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 0 24 24"
      width="24"
    >
      <path
        class="fill-current"
        d="M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    type: {
      default: 'primary',
    },
    name: {
      required: true,
    },
  },
}
</script>

<style></style>
