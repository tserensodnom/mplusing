<template>
  <div
    @click="openTicket()"
    class="cursor-pointer w-full rounded-2xl border border-blueGray-200 p-5 flex flex-col text-sm"
  >
    <div
      class="flex flex-row justify-between border-b border-blueGrat-100 pb-5"
    >
      <p class="w-24 xm:w-auto">{{ ticket.title }}</p>
      <div class="w-36 xm:w-60 flex flex-row justify-between">
        <p>ID:{{ ticket.id }}</p>
        <p>{{ splitOnlyDate(ticket.created_at) }}</p>
      </div>
    </div>
    <div
      class="flex flex-row justify-between mt-5 text-xs text-blueGray-400 font-light"
    >
      <p>Төлөв</p>
      <p class="w-36 xm:w-60 text-right xm:text-left">Хариу</p>
    </div>
    <div class="flex flex-row justify-between">
      <p v-if="ticket.status == 'open'" class="text-blue-400">Нээлттэй</p>
      <p v-else-if="ticket.status == 'closed'" class="text-green-500">
        Шийдвэрлэгдсэн
      </p>
      <!-- Шийдвэрлэгдэв -->
      <div
        class="w-36 xm:w-60 flex flex-row items-center justify-end xm:justify-start"
      >
        <p
          v-if="ticket.latest_reply.user_type == 'officer'"
          class="xm:flex-grow flex flex-row-reverse xm:flex-row items-center"
        >
          Ирсэн
          <span
            class="mr-2 xm:mr-0 xm:ml-2 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center bg-red-500 font-light"
            >1</span
          >
        </p>
        <p v-else class="flex-grow flex items-center">Хүлээгдэж байгаа</p>
        <icon-arrow-left
          :overrideColorByFont="true"
          class="transform rotate-180 hidden xm:block"
        ></icon-arrow-left>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
export default {
  props: {
    ticket: {
      required: true,
    },
  },
  components: { IconArrowLeft },
  data() {
    return {
      status: 'resolved',
    }
  },
  methods: {
    splitOnlyDate(time) {
      let tmp = time.split(' ')[0]
      return tmp
    },
    openTicket() {
      this.$router.push('/account/support/ticket/' + this.ticket.id)
    },
  },
}
</script>

<style></style>
