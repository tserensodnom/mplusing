<template>
  <div
    :class="
      isAlerted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    "
    class="z-50 transition duration-300 fixed right-0 sm:right-5 transform top-20 py-5 pl-8 pr-10 bg-white shadow-lg rounded flex items-center justify-center text-sm font-medium text-brand-dark space-x-2"
  >
    <span> <icon-alert /></span>
    <p>{{ alertMessage }}</p>
  </div>
</template>

<script>
import IconAlert from '@/components/icons/IconAlert.vue'
export default {
  components: {
    IconAlert,
  },
  props: {
    isAlerted: {
      require: true,
    },
    alertMessage: {
      require: true,
    },
  },
}
</script>

<style></style>
