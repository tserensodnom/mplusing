<template>
  <div class="w-full flex flex-col">
    <div
      class="grid grid-cols-12 justify-between px-5 mt-5 text-xs text-blueGray-400 font-light"
    >
      <p class="hidden sm:block xm:col-span-2">Үйлдвэрлэгч</p>
      <p class="col-span-7 xm:col-span-4">Загвар</p>
      <p class="hidden xm:block col-span-3">Бүртгүүлсэн огноо</p>
      <div
        class="col-span-5 sm:col-span-3 flex flex-row justify-between text-left"
      >
        <p>Сүүлд ашигласан</p>
      </div>
    </div>
    <div class="space-y-5 mt-3">
      <device-info-single
        v-for="(item, index) in data"
        :key="index"
        :device="item"
      ></device-info-single>
    </div>
  </div>
</template>

<script>
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import DeviceInfoSingle from './DeviceInfoSingle.vue'
export default {
  props: {
    data: {
      required: true,
    },
  },
  components: { DeviceInfoSingle, IconArrowLeft },
}
</script>

<style></style>
