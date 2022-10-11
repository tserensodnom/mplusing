<template>
  <div class="w-full flex flex-col">
    <div
      class="flex flex-row justify-between px-5 mt-5 text-xs text-blueGray-400 font-light"
    >
      <p>Гарчиг</p>
      <div class="w-36 xm:w-60 flex flex-row justify-between">
        <p>ID</p>
        <p>Огноо</p>
      </div>
    </div>
    <div class="space-y-10 mt-3">
      <support-ticket
        v-for="(item, index) in tickets"
        :key="index"
        :ticket="item"
      ></support-ticket>
    </div>
  </div>
</template>

<script>
import SupportTicket from './SupportTicket.vue'
export default {
  props: {
    tickets: {
      required: true,
    },
  },
  components: { SupportTicket },
}
</script>

<style></style>
