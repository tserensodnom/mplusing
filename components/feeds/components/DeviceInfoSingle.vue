<template>
  <div
    @click="expand = !expand"
    class="cursor-pointer w-full rounded-2xl border border-blueGray-200 p-5 flex flex-col text-sm"
  >
    <div
      class="grid grid-cols-12 justify-between text-xs text-black font-semibold"
    >
      <p class="hidden sm:block xm:col-span-2">{{ device.manufacturer }}</p>
      <p class="col-span-7 xm:col-span-4">{{ device.model }}</p>
      <p class="hidden xm:block col-span-3">
        {{ splitOnlyDate(device.created_at) }}
      </p>
      <div
        class="col-span-5 sm:col-span-3 flex flex-row justify-between text-left"
      >
        <p>{{ splitOnlyDate(device.updated_at) }}</p>
        <icon-arrow-left
          class="transform transition duration-300"
          :class="expand ? 'rotate-90' : '-rotate-90'"
          :overrideColorByFont="true"
        ></icon-arrow-left>
      </div>
    </div>
    <a
      v-if="expand"
      @click.stop="createTicket('Төхөөрөмж хасуулах')"
      class="w-full rounded-xl bg-blueGray-200 text-center p-3.5 text-sm text-blueGray-800 mt-5"
      >Төхөөрөмж хасах хүсэлт</a
    >
  </div>
</template>

<script>
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
export default {
  props: {
    device: {
      required: true,
    },
  },
  components: { IconArrowLeft },
  data() {
    return {
      expand: false,
    }
  },
  methods: {
    splitOnlyDate(time) {
      let tmp = time.split('T')[0]
      return tmp
    },
    createTicket(name) {
      this.$router.push({
        name: 'account-support-ticket-issue',
        params: { title: name, device: this.device },
      })
    },
  },
}
</script>

<style></style>
