<template>
  <div class="w-full flex flex-col mt-3">
    <div
      v-for="(item, index) in 7"
      :key="index"
      class="w-full flex flex-row items-center space-x-10 justify-start py-5 border-b border-blueGray-100 animate-pulse"
    >
      <div class="flex flex-row items-center space-x-3">
        <div class="w-20 h-32 rounded-xl bg-blueGray-100 overflow-hidden"></div>
        <div class="flex flex-col">
          <div class="h-4 bg-blueGray-100 rounded-full w-20 md:w-32"></div>
          <div class="mt-2 h-4 bg-blueGray-100 rounded-full w-10 md:w-20"></div>
        </div>
      </div>
      <div class="flex flex-row flex-grow justify-between">
        <div></div>
        <div
          class="flex flex-col text-right justify-center font-light text-xs md:text-sm text-blueGray-400"
        >
          <div class="w-10 h-2 rounded-full bg-blueGray-100"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
