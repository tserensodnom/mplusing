<template>
  <div class="w-full mt-5 flex flex-col">
    <div
      class="flex flex-row items-center justify-between text-xs text-blueGray-400 font-light"
    >
      <p class="text-left">Нэхэмжлэхийн дугаар, Бүтээл</p>
      <p class="text-right">Огноо,Үнэ (MNT)</p>
    </div>
    <transition-group name="list-complete" class="space-y-7 mt-3">
      <invoice
        v-for="item in data"
        :key="item.id"
        :invoice="item"
        class="list-complete-item"
        @deleted="$emit('deleted')"
      ></invoice>
    </transition-group>
  </div>
</template>

<script>
import Invoice from './Invoice.vue'
export default {
  props: {
    data: {
      required: true,
    },
  },
  components: {
    Invoice,
  },
}
</script>

<style></style>
