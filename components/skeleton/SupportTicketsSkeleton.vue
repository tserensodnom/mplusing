<template>
  <div class="w-full flex flex-col animate-pulse">
    <div class="flex flex-row justify-between px-5 mt-5">
      <div class="w-10 rounded-full h-3 bg-blueGray-100"></div>
      <div class="w-60 flex flex-row justify-between">
        <div class="w-10 rounded-full h-3 bg-blueGray-100"></div>
        <div class="w-10 rounded-full h-3 bg-blueGray-100"></div>
      </div>
    </div>
    <div class="space-y-10 mt-3">
      <div
        v-for="(item, index) in 7"
        :key="index"
        class="w-full rounded-2xl border border-blueGray-200 bg-blueGray-100 p-5 flex flex-col"
      >
        <div
          class="flex flex-row justify-between border-b border-blueGrat-100 pb-5"
        >
          <div class="w-24 h-3 rounded-full bg-blueGray-200"></div>
          <div class="w-60 flex flex-row justify-between">
            <div class="w-16 h-3 rounded-full bg-blueGray-200"></div>
            <div class="w-16 h-3 rounded-full bg-blueGray-200"></div>
          </div>
        </div>
        <div
          class="flex flex-row justify-between mt-5 text-xs text-blueGray-400 font-light"
        >
          <div class="w-10 h-2 rounded-full bg-blueGray-200"></div>
          <div class="w-60 flex flex-row justify-start">
            <div class="w-10 h-2 rounded-full bg-blueGray-200"></div>
          </div>
        </div>
        <div class="mt-2 flex flex-row justify-between">
          <div class="w-16 h-3 rounded-full bg-blueGray-200"></div>

          <!-- Шийдвэрлэгдэв -->
          <div class="w-60 flex flex-row items-center">
            <div class="w-16 h-3 rounded-full bg-blueGray-200"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
