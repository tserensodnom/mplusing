<template>
  <div>
    <div
      v-if="
        !loading &&
        homeData.booksStats &&
        homeData.podcastStats &&
        homeData.unlocks &&
        homeData.tseneg &&
        homeData.podcast &&
        homeData.invoice 
      "
      class="flex flex-col space-y-7"
    >
      <div class="flex flex-wrap">
        <div class="w-1/2 lg:w-1/4 pb-4 lg:pb-0 pr-4">
          <div
            class="h-20 rounded-2xl text-left flex flex-col justify-center p-5 bg-blueGray-100"
          >
            <p class="font-bold text-lg">
              {{ homeData.booksStats.data.ebooks }}
            </p>
            <p class="text-blueGray-400 text-xs">Цахим ном</p>
          </div>
        </div>
        <div class="w-1/2 lg:w-1/4 pb-4 lg:pb-0 lg:pr-4">
          <div
            class="h-20 rounded-2xl text-left flex flex-col justify-center p-5 bg-blueGray-100"
          >
            <p class="font-bold text-lg">
              {{ homeData.booksStats.data.audio_books }}
            </p>
            <p class="text-blueGray-400 text-xs">Аудио ном</p>
          </div>
        </div>
        <div class="w-1/2 lg:w-1/4 pb-4 lg:pb-0 pr-4">
          <div
            class="h-20 rounded-2xl text-left flex flex-col justify-center p-5 bg-blueGray-100"
          >
            <p class="font-bold text-lg">
              {{ homeData.podcastStats.data.listens }}
            </p>
            <p class="text-blueGray-400 text-xs">Подкаст</p>
          </div>
        </div>
        <div class="w-1/2 lg:w-1/4 pb-4 lg:pb-0 lg:pr-4">
          <div
            class="h-20 rounded-2xl text-left flex flex-col justify-center p-5 bg-blueGray-100"
          >
            <p class="font-bold text-lg">
              {{ homeData.podcastStats.data.subscriptions }}
            </p>
            <p class="text-blueGray-400 text-xs">Дагасан</p>
          </div>
        </div>
      </div>
      <div>
        <p class="pb-4 border-b border-blueGray-100 font-bold text-black">
          Өдрийн мэнд
        </p>
        <div
          v-if="
            !loading &&
            homeData.unlocks.data.length == 0 &&
            homeData.tseneg.data.length == 0 &&
            homeData.podcast.data.length == 0 &&
            filteredInvoices() == (null||undefined||false)
          "
          class="mt-3 ml-3 text-gray-400 text-lg"
        >
          Миний сан хоосон байна
        </div>
        <product-slider
          v-if="!!homeData.unlocks.data.length"
          :data="homeData.unlocks.data"
          :title="'Миний сан'"
          class="-ml-5 sm:ml-0"
        ></product-slider>
        <transition-group
          name="list-complete"
          v-if="homeData.invoice && !invoiceDeleted"
        >
          <invoice
            v-for="item in filteredInvoices()"
            :key="item.id"
            class="my-10 list-complete-item"
            :invoice="item"
            @deleted="invoiceDeleted = true"
          ></invoice>
        </transition-group>
        <podcast-slider-with-progress
          v-if="!!homeData.podcast.data.length"
          :data="homeData.podcast.data"
          :title="'Сонсож байгаа дугаарууд'"
        ></podcast-slider-with-progress>

        <tseneg-book-slider
          v-for="item in homeData.tseneg.data"
          :key="item.id"
          :data="item"
        ></tseneg-book-slider>
      </div>
    </div>
    <account-page-skeleton v-else></account-page-skeleton>
  </div>
</template>

<script>
import AccountPageSkeleton from '../../components/skeleton/AccountPageSkeleton.vue'
import PodcastSliderWithProgress from '../../components/feeds/components/PodcastSliderWithProgress.vue'
import TsenegBookSlider from '../../components/feeds/components/TsenegBookSlider.vue'
import Invoice from '~/components/feeds/components/Invoice.vue'
import ProductSlider from '~/components/feeds/components/ProductSlider.vue'

export default {
  components: {
    ProductSlider,
    Invoice,
    TsenegBookSlider,
    PodcastSliderWithProgress,
    AccountPageSkeleton,
  },
  data() {
    return {
      homeData: {
        unlocks: null,
        booksStats: null,
        podcastStats: null,
        tseneg: null,
        podcast: null,
        invoice: null,
      },
      invoiceDeleted: false,
      loading: true,
    }
  },
  mounted() {
    let unlocks = this.$axios.get(
      this.$config.accountApiUrl + '/v4/account/books/unlocks'
    )
    let booksAnalytics = this.$axios.get(
      this.$config.accountApiUrl + '/v4/account/books/overview'
    )
    let podcastAnalytics = this.$axios.get(
      this.$config.accountApiUrl + '/v4/account/podcast/overview'
    )

    let plan = this.$axios.get(
      this.$config.accountApiUrl + '/v4/account/books/rentals'
    )
    let podcastprogress = this.$axios.get(
      this.$config.accountApiUrl + '/v4/account/podcast/listening-progress'
    )
    let invoice = this.$axios.get(
      this.$config.accountApiUrl + '/v4/account/invoices'
    )

    // this.$api.getUserInvoices().then((e) => console.log(e))
    Promise.all([
      unlocks,
      booksAnalytics,
      podcastAnalytics,
      plan,
      podcastprogress,
      invoice,
    ])
      .then((res) => {
        this.homeData.unlocks = res[0].data
        this.homeData.booksStats = res[1].data
        this.homeData.podcastStats = res[2].data
        this.homeData.tseneg = res[3].data
        this.homeData.podcast = res[4].data
        this.homeData.invoice = res[5].data
      })
      .then(
        setTimeout(() => {
          this.loading = false
        }, 1500)
      )
  },
  methods: {
    filteredInvoices() {
      return this.homeData.invoice.data
        .filter((item) => item.status == 'pending')
        .slice(0, 1)
    },
  },
  transition: 'account-page',
}
</script>

<style></style>