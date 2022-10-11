<template>
  <div class="flex flex-col">
    <div
      class="w-full flex flex-col xs:flex-row xs:justify-between md:border-b border-blueGray-100 items-start xs:items-center"
    >
      <p class="pb-4 hidden md:inline font-bold text-black text-2xl">
        Тусламжийн хүсэлт
      </p>
      <NuxtLink
        to="support/ticket/issue"
        class="mb-2 rounded-2xl bg-brand px-5 py-4 w-full md:w-44 font-semibold text-white flex flex-row text-xs"
      >
        <p class="flex-grow text-left">Шинэ хүсэлт</p>
        <icon-pen></icon-pen>
      </NuxtLink>
    </div>
    <p class="text-xs text-blueGray-400 mt-3 font-light">
      Доорх бусад холбоо барих хувилбаруудаас сонгож болно
    </p>
    <div class="text-xs font-light flex flex-wrap mt-3 text-brand underline">
      <a class="pr-5 pb-2 lg:pb-0" href="http://help.mplus.mn/">Тулсламж</a>
      <a class="pr-5 pb-2 lg:pb-0" href="https://m.me/mplus.mongolia"
        >Сошиал чат</a
      >
      <a class="pr-5 pb-2 lg:pb-0" href="mailto:support@mplus.mn"
        >И-мэйл илгээх</a
      >
      <a class="pr-5 pb-2 lg:pb-0" href="#help">Холбоо барих</a>
    </div>

    <div v-if="!loading && commonTitles" class="flex flex-wrap mt-6">
      <a
        v-for="(item, index) in commonTitles.data"
        :key="index"
        @click="createTicket(item.name)"
        class="text-xs px-4 py-2 mr-3 mb-3 rounded-full border border-blueGray-200"
      >
        {{ item.name }}
      </a>
    </div>
    <tags-skeleton v-else></tags-skeleton>

    <div
      v-if="!loading && tickets && tickets.data.length == 0"
      class="mt-3 text-gray-400 text-lg"
    >
      Тусламжийн хүсэлт олдсонгүй
    </div>
    <show-support-tickets
      v-if="!loading && tickets"
      :tickets="tickets.data"
    ></show-support-tickets>
    <support-tickets-skeleton v-else></support-tickets-skeleton>
  </div>
</template>

<script>
import SupportTicketsSkeleton from '../../../components/skeleton/SupportTicketsSkeleton.vue'
import TagsSkeleton from '../../../components/skeleton/TagsSkeleton.vue'
import ButtonRounded from '~/components/feeds/components/ButtonRounded.vue'
import ShowSupportTickets from '~/components/feeds/components/ShowSupportTickets.vue'
import IconPen from '~/components/icons/IconPen.vue'

export default {
  components: {
    ButtonRounded,
    IconPen,
    ShowSupportTickets,
    TagsSkeleton,
    SupportTicketsSkeleton,
  },
  data() {
    return {
      tickets: null,
      commonTitles: null,
      loading: true,
    }
  },
  mounted() {
    // this.$api.getUserTickets().then((data) => (this.tickets = data))
    this.$axios
      .get(this.$config.accountApiUrl + '/account/api/support/tickets')
      .then((res) => (this.tickets = res.data))
      .then(
        setTimeout(() => {
          this.loading = false
        }, 1000)
      )
    this.$axios
      .get(this.$config.accountApiUrl + '/api/support/tickets/categories')
      .then((res) => (this.commonTitles = res.data))
  },
  methods: {
    createTicket(name) {
      this.$router.push({
        name: 'account-support-ticket-issue',
        params: { title: name },
      })
    },
  },
  transition: 'account-page',
}
</script>

<style></style>
