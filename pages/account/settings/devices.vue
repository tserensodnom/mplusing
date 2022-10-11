<template>
  <div class="flex flex-col">
    <p
      class="pb-4 hidden md:inline md:border-b border-blueGray-100 font-bold text-black text-2xl"
    >
      Төхөөрөмж
    </p>
    <div
      v-if="devices && devices.data.length > 2"
      class="w-full mt-3 p-4 rounded-xl bg-red-400 flex flex-row items-center justify-between space-x-3 text-xs text-white font-base"
    >
      <icon-alert :resizeMultiply="0.9"></icon-alert>
      <p class="flex-grow">Таны бүртгэлтэй төхөөрөмж дүүрсэн байна</p>
    </div>
    <div
      v-if="devices && devices.data.length == 0"
      class="mt-3 text-gray-400 text-lg"
    >
      Холбогдсон төхөөрөмж олдсонгүй
    </div>
    <show-devices-list v-if="devices" :data="devices.data"></show-devices-list>
    <p class="font-light text-red-400 mt-5">Санамж:</p>
    <p class="text-xs text-blueGray-400 font-light w-full md:w-1/2">
      Нэг хэрэглэгч 3 хүртлэх төхөөрөмж ашиглэх эрхтэй. Бусад хүнд login
      худалдах, өгөх боломжгүй.
    </p>
  </div>
</template>

<script>
import ButtonRounded from '~/components/feeds/components/ButtonRounded.vue'
import ShowDevicesList from '~/components/feeds/components/ShowDevicesList.vue'
import IconAlert from '~/components/icons/IconAlert.vue'
import IconPen from '~/components/icons/IconPen.vue'

export default {
  components: {
    ButtonRounded,
    IconPen,
    ShowDevicesList,
    IconAlert,
  },
  data() {
    return {
      devices: null,
    }
  },
  mounted() {
    // this.$api.getUserInvoices().then((res) => (this.invoices = res.data))
    this.$axios
      .get(this.$config.accountApiUrl + '/account/api/devices')
      .then((res) => (this.devices = res.data))
  },
  transition: 'account-page',
}
</script>

<style></style>
,
