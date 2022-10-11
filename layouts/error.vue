<template>
  <div class="col-span-12 flex flex-col items-center mt-24">
    <vector-not-found />
    <div class="flex flex-row text-xl md:text-3xl lg:text-4xl mt-5 mb-4">
      Өө, энэ хуудас
      <div class="ml-2 font-bold relative w-max">
        <p>олдсонгүй!</p>
        <vector-under-line styling="absolute left-0 -bottom-2" />
      </div>
    </div>
    <NuxtLink
      class="flex flex-row items-center space-x-2 text-brand mt-5"
      to="/book"
    >
      <icon-arrow-left />
      <span>Нүүр хуудас руу буцах</span>
    </NuxtLink>
    <div
      class="hidden text-red-400 text-yellow-400 text-green-400 text-indigo-400 text-pink-400 ring-red-400 ring-yellow-400 ring-green-400 ring-indigo-400 ring-pink-400"
    ></div>
  </div>
</template>

<script>
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import VectorNotFound from '~/components/illustrations/VectorNotFound.vue'
import VectorUnderLine from '~/components/illustrations/VectorUnderLine.vue'
export default {
  components: { IconArrowLeft, VectorNotFound, VectorUnderLine },
  props: ['error'],
}
</script>

<style></style>
