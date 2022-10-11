<template>
  <div
    class="col-span-12 sm:col-start-2 sm:col-span-10 xl:col-start-3 xl:col-span-8 px-5 sm:px-0 mt-7"
  >
    <a :href="data.web_link" :is="data.web_link ? 'a' : 'div'">
      <img
        :src="data.cover"
        class="mx-auto w-full xl:w-2/3 h-auto rounded-md overflow-hidden"
        alt=""
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
