<template>
  <div
    class="w-full bg-blueGray-100 rounded-xl overflow-hidden animate-pulse mt-5"
  >
    <div
      class="w-full p-5 h-full border-l-4 border-blueGray-200 flex flex-col text-sm space-y-3"
    >
      <div class="flex flex-row justify-between">
        <div class="bg-blueGray-200 w-20 rounded-full h-3"></div>
        <div
          class="bg-blueGray-200 w-20 rounded-full h-3 hidden md:inline"
        ></div>
        <div class="bg-blueGray-200 w-20 rounded-full h-3 md:hidden"></div>
      </div>
      <div class="pt-3 pb-2 flex flex-row justify-between items-center">
        <div class="bg-blueGray-200 w-20 rounded-full h-3"></div>
        <div
          class="bg-blueGray-200 w-20 rounded-full h-3 font-bold text-lg"
        ></div>
      </div>
      <div
        v-if="pending"
        class="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center pt-3"
      >
        <div class="bg-blueGray-200 w-32 rounded-full h-3 text-amber-500"></div>
        <div class="mt-3 lg:mt-0 flex flex-row space-x-3">
          <div
            class="bg-blueGray-200 h-12 w-28 sm:w-32 md:w-40 rounded-2xl"
          ></div>
          <div
            class="bg-blueGray-200 h-12 w-28 sm:w-32 md:w-40 rounded-2xl"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pending: {
      default: true,
    },
  },
}
</script>

<style></style>
