<template>
  <div class="flex flex-col">
    <p
      class="pb-4 hidden md:inline md:border-b border-blueGray-100 font-bold text-black text-2xl"
    >
      Нэхэмжлэх
    </p>
    <div
      v-if="!loading && invoices && invoices.data.length == 0"
      class="mt-3 text-gray-400 text-lg"
    >
      Нэхэмжлэл олдсонгүй
    </div>
    <show-invoices
      v-if="!loading && invoices"
      :data="invoices.data"
      @deleted="reload"
    ></show-invoices>
    <invoices-page-skeleton v-else></invoices-page-skeleton>
  </div>
</template>

<script>
import InvoicesPageSkeleton from '../../components/skeleton/InvoicesPageSkeleton.vue'
import ShowInvoices from '~/components/feeds/components/ShowInvoices.vue'

export default {
  components: { ShowInvoices, InvoicesPageSkeleton },
  data() {
    return {
      invoices: null,
      loading: true,
    }
  },
  mounted() {
    // this.$api.getUserInvoices().then((res) => (this.invoices = res.data))
    this.$axios
      .get(this.$config.accountApiUrl + '/v4/account/invoices')
      .then((res) => (this.invoices = res.data))
      .then(
        setTimeout(() => {
          this.loading = false
        }, 1000)
      )
  },
  methods: {
    reload() {
      this.$axios
        .get(this.$config.accountApiUrl + '/v4/account/invoices')
        .then((res) => (this.invoices = res.data))
    },
  },
  transition: 'account-page',
}
</script>

<style></style>
