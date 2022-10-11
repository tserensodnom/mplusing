<template>
  <div class="flex flex-col">
    <p
      class="pb-4 hidden md:inline md:border-b border-blueGray-100 font-bold text-black text-2xl"
    >
      Бүтээлүүд
    </p>
    <search-bar-with-filter @search="search"></search-bar-with-filter>
    <div
      v-if="!loading && searchResult && searchResult.length == 0"
      class="mt-3 ml-3 text-gray-400 text-lg"
    >
      Ном олдсонгүй
    </div>
    <unlocked-book-list
      v-if="!loading && searchResult"
      :data="searchResult"
    ></unlocked-book-list>
    <unlocked-book-skeleton v-else></unlocked-book-skeleton>
  </div>
</template>

<script>
import UnlockedBookSkeleton from '../../components/skeleton/UnlockedBookSkeleton.vue'
import UnlockedBookList from '~/components/feeds/components/UnlockedBookList.vue'
import SearchBarWithFilter from '~/components/search/SearchBarWithFilter.vue'

export default {
  components: { SearchBarWithFilter, UnlockedBookList, UnlockedBookSkeleton },
  data() {
    return {
      searchResult: null,
      loading: true,
      ebook: null,
    }
  },
  mounted() {
    this.$axios
      .get(this.$config.accountApiUrl + '/v4/account/books/unlocks')
      .then((res) => (this.ebook = this.searchResult = res.data.data))
      .then(
        setTimeout(() => {
          this.loading = false
        }, 1000)
      )
  },
  methods: {
    search(data) {
      console.log(data, this.ebook)
      if (data.filter == 'audio_book') {
        this.searchResult = this.ebook.filter(
          (item) =>
            item.model.title.toLowerCase().includes(data.input) &&
            !!item.model.audio_book
        )
      } else if (data.filter == 'ebook') {
        this.searchResult = this.ebook.filter(
          (item) =>
            item.model.title.toLowerCase().includes(data.input) &&
            !!item.model.ebook
        )
      } else {
        this.searchResult = this.ebook.filter((item) =>
          item.model.title.toLowerCase().includes(data.input)
        )
      }
    },
  },
  transition: 'account-page',
}
</script>
