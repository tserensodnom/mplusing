<template>
  <infinite-scroll v-if="podcastData" @more="loadMore">
    <div v-if="podcastData" class="w-full grid grid-cols-12 relative">
      <blurred-bar :data="podcastData.data" type="podcastSingle" />
      <div
        class="
          z-10
          col-start-4 col-span-6
          sm:col-start-2 sm:col-span-3
          lg:col-start-3
          xl:col-start-4
          lg:col-span-2
        "
      >
        <div class="mx-auto sm:mx-0 -mt-24 sm:-mt-20 mb-4 w-11/12 relative">
          <div
            class="
              -z-10
              absolute
              w-full
              h-full
              top-0
              left-0
              bookCoverBlur
              transform
              scale-95
            "
            :style="`backgroundImage: url(${
              podcastData.data.cover_url
            }); backgroundColor: ${color(podcastData.data.cover_url)}`"
          ></div>
          <image-resize
            :isBig="true"
            :src="podcastData.data.cover_url"
            size="md"
            :alt="podcastData.data.title"
            fix="width"
          />
        </div>

        <div
          class="
            mt-10
            w-full
            sm:w-11/12
            flex flex-row
            items-center
            justify-center
            space-x-3
          "
        >
          <a
            class="
              rounded-full
              h-12
              w-12
              xl:w-32
              2xl:h-14 2xl:w-40
              bg-brand
              text-white
              flex
              items-center
              px-2
              2xl:px-4
              space-x-2
              text-xs
              2xl:text-sm
            "
            @click="togglePlay"
          >
            <icon-play
              v-if="
                !$store.state.audioPlayer.isPlaying ||
                $store.state.audioPlayer.publication.id != podcastData.data.id
              "
              :resizeMultiply="1.3"
            />
            <icon-pause v-else :resizeMultiply="1.3" />
            <p class="hidden xl:inline">
              <span
                v-if="
                  !$store.state.audioPlayer.isPlaying ||
                  $store.state.audioPlayer.publication.id != podcastData.data.id
                "
                >Тоглуулах</span
              >
              <span v-else class="ml-2">Зогсоох</span>
            </p>
          </a>

          <like-button
            model-type="channel"
            :model-id="podcastData.data.id"
            :initial-count="podcastData.data.likes_count"
            :noNumber="true"
            tag="div"
          >
            <template slot-scope="{ liked }">
              <button
                class="
                  rounded-full
                  text-white
                  transition
                  duration-300
                  h-12
                  w-12
                  2xl:h-14 2xl:w-14
                  pl-2
                "
                :class="liked ? 'bg-pink-500' : 'bg-brand'"
              >
                <icon-heart :liked="liked" />
              </button>
            </template>
          </like-button>
        </div>
      </div>

      <div
        class="
          mx-5
          sm:ml-3 sm:mr-5
          z-0
          mt-4
          sm:mt-5
          mb-4
          col-span-12
          sm:col-start-5 sm:col-span-7
          lg:col-start-5 lg:col-span-6
          xl:col-start-6 xl:col-span-4
          flex flex-col
        "
      >
        <div class="mx-5 sm:ml-3 sm:mr-5 relative">
          <h1
            class="
              text-2xl
              md:text-3xl
              font-bold
              text-center
              sm:text-left
              mx-auto
              sm:mx-0
            "
          >
            {{ podcastData.data.title }}
          </h1>
          <collapsing-description :data="podcastData.data.description" />
        </div>
        <div
          class="
            mx-5
            sm:ml-3 sm:mr-5
            mt-4
            mb-4
            flex flex-col
            xs:flex-row xs:space-x-3
            sm:space-x-14
            text-sm
          "
        >
          <div class="flex flex-col space-y-1 mb-1 xs:mb-0">
            <div>
              <p class="inline-block font-bold mr-2">Ангилал:</p>
              <p class="inline-block">
                {{
                  podcastData.data.categories.length
                    ? podcastData.data.categories[0].name
                    : ''
                }}
              </p>
            </div>
            <div>
              <p class="inline-block font-bold mr-2">Хугацаа:</p>
              <p class="inline-block" v-if="podcastData.data.audio">
                {{ toMinutes(podcastData.data.audio.duration) }} минут
              </p>
            </div>
          </div>
          <div class="flex flex-col space-y-1">
            <div>
              <p class="inline-block font-bold mr-2">Нийтлэгдсэн:</p>
              <p class="inline-block">
                {{ podcastData.data.formatted_release_date.split(' ')[0] }}
              </p>
            </div>
            <div>
              <p class="inline-block font-bold mr-2">Суваг:</p>
              <p class="inline-block">
                {{ podcastData.data.series.name }}
              </p>
            </div>
          </div>
        </div>
        <div
          v-if="podcastData.data.tags.length"
          class="mt-4 mb-4 mx-5 sm:ml-3 sm:mr-5"
        >
          <div class="flex flex-col">
            <p class="text-xs text-blueGray-400">Хамаарагдах таг</p>
            <tags :data="podcastData.data.tags" />
          </div>
        </div>
        <div
          class="
            sm:mx-3
            mt-6
            mb-4
            w-full
            border-b border-blueGray-100
            text-base
            space-x-9
            text-blueGray-400
            flex flex-row
          "
        >
          <a
            class="flex items-center w-max h-max pb-1"
            :class="currentTab == 'publishings' ? 'activeTab' : ''"
            @click="currentTab = 'publishings'"
          >
            <p class="font-medium">Сүүлийн дугаарууд</p>
          </a>
          <a
            class="flex items-center w-max h-max pb-1"
            :class="currentTab == 'comments' ? 'activeTab' : ''"
            @click="currentTab = 'comments'"
          >
            <p class="font-medium flex items-center">
              Сэтгэгдэлүүд
              <span class="text-sm ml-2">{{ commentCount }}</span>
            </p>
          </a>
        </div>
        <publishings
          v-if="channelPublishings"
          v-show="channelPublishings && currentTab == 'publishings'"
          :books="channelPublishings.data"
          :showDescription="true"
          :isPodcast="true"
          :mainPodcastId="podcastData.data.id"
        />

        <client-only>
          <comment-section
            ref="commentSection"
            v-show="currentTab == 'comments'"
            model-type="publications"
            :model-id="podcastData.data.id"
            :infinite-scroll="false"
            @loaded="commentLoadComplete"
          />
        </client-only>

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
import IconPlay from '~/components/icons/IconPlay.vue'
import IconPause from '~/components/icons/IconPause.vue'
import CommentSection from '~/components/comments/CommentSection.vue'
import IconHeart from '@/components/icons/IconHeart'

export default {
  components: {
    BlurredBar,
    SubscribeButton,
    Publishings,
    CollapsingDescription,
    ImageResize,
    Loader,
    InfiniteScroll,
    IconPlay,
    IconPause,
    CommentSection,
    IconHeart,
  },

  data() {
    return {
      podcastData: null,
      channelPublishings: null,
      loading: false,
      page: 2,
      currentTab: 'publishings',
      commentCount: null,
    }
  },
  async fetch() {
    this.podcastData = await this.$api.getPodcastDetail(this.$route.params.slug)
  },
  mounted() {
    if (this.podcastData) {
      this.$axios
        .get(
          `/api/publications?include=series,publisher&filter[series_id]=${this.podcastData.data.series.id}&page[number]=1`
        )
        .then((res) => {
          this.channelPublishings = res.data
        })
    }
  },
  watch: {
    podcastData() {
      this.$axios
        .get(
          `/api/publications?include=series,publisher&filter[series_id]=${this.podcastData.data.series.id}&page[number]=1`
        )
        .then((res) => {
          this.channelPublishings = res.data
        })
    },
  },
  methods: {
    commentLoadComplete(val) {
      this.commentCount = val
    },
    color(src) {
      const pathArray = src.split('_')
      return '#' + pathArray[parseInt(pathArray.length) - 2]
    },
    toMinutes(time) {
      return Math.round(time / 60)
    },
    loadMore() {
      this.loading = true
      if (this.currentTab == 'publishings') {
        this.$axios
          .get(
            `/api/publications?include=series,publisher&filter[series_id]=${this.podcastData.data.series.id}&page[number]=` +
              this.page++
          )
          .then((res) => {
            this.loading = false
            res.data.data.forEach((b) => this.channelPublishings.data.push(b))
          })
      }

      if (this.currentTab == 'comments') {
        this.$refs.commentSection.loadMore()
        this.loading = false
      }
    },

    togglePlay() {
      if (this.$store.state.audioPlayer.isHidden) {
        this.$store.commit('audioPlayer/TOGGLE_VISIBILITY')
      }
      this.$store.dispatch('audioPlayer/togglePlayer', {
        publication: this.podcastData.data,
        audio: this.podcastData.data.audio,
        user_id: this.$store.state.auth.loggedIn ? this.$store.state.auth.user.id : null,
        api_url: this.$config.apiUrl
      })
    },
  },
  head() {
    return {
      title: this.podcastData && this.podcastData.data.title + ' - Подкаст сонсох - Мplus.mn',
      meta: [
        { 
          name: 'description', 
          property: 'description', 
          content: this.podcastData && this.podcastData.data.description,
        },
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: this.podcastData && this.podcastData.data.title + ' - Подкаст сонсох - Мplus.mn',
        },
        {
          hid: 'ogdescription',
          property: 'og:description',
          content: this.podcastData && this.podcastData.data.description,
        },
        // {
        //   hid: 'ogbio',
        //   property: 'og:bio',
        //   content: this.podcastData && this.podcastData.data.description,
        // },
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.podcastData && this.podcastData.data.cover_url,
        },
      ],
    }
  },
}
</script>
