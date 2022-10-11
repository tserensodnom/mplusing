<template>
  <infinite-scroll @more="loadMore">
    <div
      v-if="channelData && channelPublishings"
      class="w-full grid grid-cols-12 relative"
    >
      <blurred-bar :data="channelData.data" type="podcast" />
      <div
        class="z-30 col-start-4 col-span-6 sm:col-start-2 sm:col-span-3 lg:col-start-3 xl:col-start-4 lg:col-span-2"
      >
        <div class="mx-auto sm:mx-0 -mt-24 sm:-mt-20 mb-4 w-11/12 relative">
          <div
            class="-z-10 absolute w-full h-full top-0 left-0 bookCoverBlur transform scale-95"
            :style="`backgroundImage: url(${channelData.data.cover})`"
          ></div>
          <image-resize
            :isBig="true"
            :src="channelData.data.cover"
            size="md"
            fix="width"
          />
        </div>

        <div class="w-11/12 hidden sm:block">
          <div class="text-center">
            <p class="font-bold text-2xl">
              {{ channelData.data.title }}
            </p>
          </div>

          <div class="text-sm">
            <collapsing-description
              :isBio="true"
              :data="channelData.data.description"
            />
          </div>

          <div class="ctaButton flex justify-center w-full">
            <client-only>
              <subscribe-button
                model-type="author"
                :model-id="channelData.data.id"
              />
            </client-only>
          </div>
        </div>
      </div>

      <div
        class="sm:hidden col-span-12 px-5 sm:px-0 sm:col-start-2 sm:col-span-3 lg:col-start-3 xl:col-start-4 lg:col-span-2 flex flex-col items-center sm:items-start"
      >
        <div class="w-full text-sm sm:w-11/12 relative mt-4">
          <div class="text-center">
            <p class="font-bold text-2xl">
              {{ channelData.data.title }}
            </p>
          </div>
          <collapsing-description :data="channelData.data.description" />
        </div>

        <div class="ctaButton w-11/12 h-auto flex justify-center">
          <subscribe-button
            model-type="author"
            :model-id="channelData.data.id"
          />
        </div>
      </div>

      <div
        class="mx-5 sm:ml-3 sm:mr-5 z-0 mt-1 sm:mt-5 mb-4 col-span-12 sm:col-start-5 sm:col-span-7 lg:col-start-5 lg:col-span-6 xl:col-start-6 xl:col-span-4 flex flex-col"
      >
        <div
          class="sm:mx-3 mt-6 mb-4 w-full border-b border-blueGray-100 text-base space-x-9 text-blueGray-400 flex flex-row"
        >
          <div class="flex items-center w-max h-max pb-1 activeTab">
            <p class="font-medium">Сүүлийн дугаарууд</p>
          </div>
        </div>
        <publishings
          :books="channelPublishings.data"
          :showDescription="true"
          :isPodcast="true"
        />
        <loader v-if="loading" />
      </div>
    </div>
  </infinite-scroll>
</template>

<script>
import BlurredBar from '~/components/description/BlurredBar.vue'
import CollapsingDescription from '~/components/description/CollapsingDescription.vue'
import SubscribeButton from '~/components/description/SubscribeButton.vue'
import Publishings from '~/components/products/Publishings.vue'
import ImageResize from '~/components/tools/ImageResize.vue'
import Loader from '~/components/Loader.vue'
import InfiniteScroll from '@/components/InfiniteScroll'

export default {
  components: {
    BlurredBar,
    SubscribeButton,
    Publishings,
    CollapsingDescription,
    ImageResize,
    Loader,
    InfiniteScroll,
  },

  data() {
    return {
      channelData: null,
      channelPublishings: null,
      loading: false,
      page: 2,
    }
  },

  async fetch() {
    this.channelData = await this.$api.getChannelDetail(
      this.$route.params.channel
    )
    // this.channelPublishings = await this.$api.getChannelPublishings(
    //   this.channelData.id
    // )
  },

  mounted() {
    if (this.channelData) {
      this.$axios
        .get(
          `/api/publications?include=series,publisher&filter[series_id]=${this.channelData.data.id}&page[number]=1`
        )
        .then((res) => {
          this.channelPublishings = res.data
        })
    }
  },

  watch: {
    channelData() {
      this.$axios
        .get(
          `/api/publications?include=series,publisher&filter[series_id]=${this.channelData.data.id}&page[number]=1`
        )
        .then((res) => {
          this.channelPublishings = res.data
        })
    },
  },

  methods: {
    loadMore() {
      if (this.loading) {
        return
      }

      this.loading = true

      this.$axios
        .get(
          `/api/publications?include=series,publisher&filter[series_id]=${this.channelData.data.id}&page[number]=` +
            this.page++
        )
        .then((res) => {
          this.loading = false
          res.data.data.forEach((b) => this.channelPublishings.data.push(b))
        })
    },
  },
  head() {
    return {
      title: this.channelData && this.channelData.data.title + ' - Подкаст сонсох - Mplus.mn',
      meta: [
        {
        hid: 'description',
        property: 'description',
        content: this.channelData && this.channelData.data.description,
        },
        {
        hid: 'ogtitle',
        property: 'og:title',
        content: this.channelData && this.channelData.data.title + ' - Подкаст сонсох - Mplus.mn',
        },
        {
        hid: 'ogdescription',
        property: 'og:description',
        content: this.channelData && this.channelData.data.description, 
        },
        // {
        //   hid: 'ogauthor',
        //   property: 'og:author',
        //   content: this.channelData && this.channelData.data.name,
        // },
        // {
        //   hid: 'ogbio',
        //   property: 'og:bio',
        //   content: this.channelData && this.channelData.data.description,
        // },
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.channelData && this.channelData.data.cover,
        },
      ],
    }
  },
}
</script>
