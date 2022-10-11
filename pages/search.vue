<template>
  <infinite-scroll @more="loadMore">
    <div class="w-full grid grid-cols-12">
      <div
        class="hidden md:block col-start-2 xl:col-start-3 col-span-2 mt-16 mb-5"
      >
        <div class="font-bold text-lg">Ангилал</div>

        <div class="mt-4 font-medium text-base">
          <category-list :data="categories.data" />
        </div>

        <div class="block lg:hidden w-full mt-4 mb-4">
          <div class="font-bold text-lg">Их хайсан ...</div>

          <div class="mt-4 font-base text-sm text-blueGray-400">
            <category-list :data="categories.data" />
          </div>

          <div class="mt-4 space-y-3">
            <div class="font-bold text-lg">Тагууд ...</div>
            <tags :data="tags.data" type="obj" />
          </div>
        </div>
      </div>

      <div
        class="col-span-12 sm:col-start-2 sm:col-span-10 md:col-span-8 lg:col-span-6 xl:col-span-4 mt-16 mb-5 mx-5 sm:mx-0 md:mx-10"
      >
        <div class="font-medium text-2xl text-blueGray-400">
          {{ resultTitle }}
        </div>
        <div class="w-full">
          <div
            class="mt-6 mb-4 w-full border-b border-blueGray-100 text-sm space-x-3 text-blueGray-400 flex flex-row"
          >
            <a
              @click="
                () => {
                  if (searchType != 'book') {
                    searchType = 'book'
                    search()
                  }
                }
              "
              class="flex items-center w-max h-max pb-1"
              :class="searchType == 'book' && 'activeTab'"
            >
              <p class="font-medium">Ном</p>
            </a>
            <a
              @click="
                () => {
                  if (searchType != 'podcast') {
                    searchType = 'podcast'
                    search()
                  }
                }
              "
              class="flex items-center w-max h-max pb-1"
              :class="searchType == 'podcast' && 'activeTab'"
            >
              <p class="font-medium">Подкаст</p>
            </a>
          </div>
        </div>
        <div
          v-if="hasNoResult"
          class="col-span-12 flex items-center justify-center mt-10"
        >
          <vector-no-result />
        </div>

        <div v-if="result">
          <div v-if="result.authors" class="mt-3 mb-5 flex flex-col space-y-4">
            <div v-for="(item, index) in result.authors" :key="index">
              <dynamic-link :url="item.web_link">
                <div class="max-w-max space-x-4 flex flex-row">
                  <img
                    :src="
                      item.image != null
                        ? item.image
                        : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                    "
                    :alt="item.name"
                    class="w-20 h-20 rounded-full overflow-hidden shadow-md object-cover"
                  />
                  <div class="place-self-center font-bold">
                    {{ item.name }}
                  </div>
                </div>
              </dynamic-link>
            </div>
          </div>
          <div v-else class="mt-3 mb-5 flex flex-col space-y-4">
            <div v-for="(item, index) in result.channels" :key="index">
              <dynamic-link :url="item.web_link">
                <div class="max-w-max space-x-4 flex flex-row">
                  <div class="w-20 rounded-full overflow-hidden shadow-md">
                    <image-resize
                      :src="
                        item.cover != null
                          ? item.cover
                          : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                      "
                      size="sm"
                      :alt="item.id"
                      fix="width"
                    />
                  </div>
                  <div class="place-self-center font-bold">
                    {{ item.name }}
                  </div>
                </div>
              </dynamic-link>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div v-if="!hasNoResult" class="mt-4">
            <h2 class="font-medium text-lg">Бүтээлүүд</h2>
          </div>
          <div class="mt-3 sm:-ml-3">
            <publishings :books="result.data" :showDescription="true" />
          </div>
          <loader v-if="loading" />
        </div>
      </div>

      <div class="hidden lg:block col-span-2 mt-16 mb-4">
        <div class="font-bold text-lg">Их хайсан ...</div>
        <div class="mt-4 font-base text-sm text-blueGray-400">
          <ul class="space-y-3">
            <li v-for="(item, index) in topSearches.data" :key="index">
              <NuxtLink :to="`/search?q=${item.query}`">
                {{ item.query }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="mt-4 space-y-3">
          <div class="font-bold text-lg">Тагууд ...</div>
          <tags :data="tags.data" type="obj" />
        </div>
      </div>
    </div>
  </infinite-scroll>
</template>

<script>
import InfiniteScroll from '@/components/InfiniteScroll'
import CategoryList from '~/components/search/CategoryList.vue'
import Publishings from '~/components/products/Publishings.vue'
import ImageResize from '~/components/tools/ImageResize.vue'
import Tags from '@/components/description/Tags'
import VectorNoResult from '~/components/illustrations/VectorNoResult.vue'
import Loader from '~/components/Loader.vue'
import DynamicLink from '~/components/tools/DynamicLink.vue'

export default {
  head() {
    return {
      title:
        'Хайлт: ' +
        (this.$route.query.q ||
          this.$route.query['filter[category]'] ||
          this.$route.query['filter[tag]']),
    }
  },
  components: {
    InfiniteScroll,
    CategoryList,
    Publishings,
    ImageResize,
    Tags,
    VectorNoResult,
    Loader,
    DynamicLink,
  },

  data() {
    return {
      result: { data: [] },
      categories: { data: [] },
      tags: { data: [] },
      topSearches: { data: [] },
      loading: false,
      hasNoResult: null,
      page: 2,
      searchType: 'book',
    }
  },
  computed: {
    resultTitle() {
      if (this.result.meta) {
        if (this.$route.query.q) {
          if (this.result.data.length) {
            this.hasNoResult = false
            return (
              `"${this.$route.query.q}"` + ` ${this.result.meta.total} бүтээл`
            )
          }
          this.hasNoResult = true
          return `"${this.$route.query.q}"` + ` бүтээл олдсонгүй. `
        }
        this.hasNoResult = false
        return `Нийт ${this.result.meta.total} бүтээл`
      }
    },
  },
  async fetch() {
    this.result = await this.$api.search(this.$route.query, this.searchType)
    this.tags = await this.$api.getCommonTags()
    this.topSearches = await this.$api.getTopSearches()
  },

  mounted() {
    this.$api.getBookCategories().then((data) => (this.categories = data))
  },

  watch: {
    $route() {
      this.page = 2

      this.$api.search(this.$route.query, this.searchType).then((data) => {
        this.result = data
      })
    },
  },

  methods: {
    loadMore() {
      if (this.loading) {
        return
      }

      this.loading = true

      this.$api
        .search(
          {
            ...this.$route.query,
            'page[number]': this.page++,
          },
          this.searchType
        )
        .then(this.whenLoaded)
    },
    search() {
      this.$api.search(this.$route.query, this.searchType).then((data) => {
        this.result = data
      })
    },
    whenLoaded(data) {
      this.loading = false
      data.data.forEach((b) => this.result.data.push(b))
    },
  },
}
</script>
