<template>
  <div class="w-full border border-blueGray-100 rounded-xl overflow-hidden">
    <div
      class="w-full p-5 h-full border-l-4 flex flex-col text-sm space-y-3"
      :class="
        invoice.status == 'paid' ? 'border-green-400' : 'border-amber-500'
      "
    >
      <div class="flex flex-row justify-between text-xs sm:text-base">
        <p>
          {{ invoice.number }}
        </p>
        <p class="hidden md:inline">
          {{ invoice.created_at }}
        </p>
        <p class="md:hidden">
          {{ invoice.created_at.split(' ')[0] }}
        </p>
      </div>
      <div class="flex flex-row justify-between items-center">
        <p class="w-1/2">
          {{ invoice.items[0].title }}
        </p>
        <p class="font-bold sm:text-lg">
          {{ invoice.formatted_total }} {{ invoice.currency_code }}
        </p>
      </div>
      <div
        v-if="invoice.status == 'pending'"
        class="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center pt-3"
      >
        <p class="text-amber-500 text-xs sm:text-base">Хүлээгдэж буй...</p>
        <div class="mt-3 lg:mt-0 flex flex-row space-x-3">
          <button-rounded
            :name="'Цуцлах'"
            :type="'secondary'"
            @clicked="cancelInvoice(invoice.id)"
          ></button-rounded>

          <a
            :href="this.$config.buyUrl + '/invoices/' + invoice.id + '/payment'"
          >
            <button-rounded
              :name="'Төлбөр төлөх'"
              :type="'primary'"
            ></button-rounded>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRounded from './ButtonRounded.vue'
import eventBus from '~/plugins/eventBus'
export default {
  components: {
    ButtonRounded,
  },
  props: {
    invoice: {
      required: true,
    },
  },
  methods: {
    cancelInvoice(id) {
      this.$axios
        .delete(this.$config.accountApiUrl + '/v4/account/invoices/' + id)
        .then((result) => {
          this.$emit('deleted')
          eventBus.$emit('toastSuccess', 'Нэхэмжлэл амжилттай устгагдлаа')
          this.$emit('deleted')
        })
        .catch((err) => {
          eventBus.$emit('toastFailure', 'Нэхэмжлэл устгахад алдаа гарлаа')
          this.$emit('deleteFailed')
        })
    },
  },
}
</script>

<style></style>
