<template>
  <component
    :is="infiniteScroll ? 'infinite-scroll' : 'div'"
    v-if="comments"
    @more="loadMore"
  >
    <div class="mt-4 mb-4 mx-5 sm:ml-3 sm:mr-5">
      <h2
        v-if="modelType != 'publications'"
        class="text-lg sm:text-xl font-bold flex flex-row justify-between items-center"
      >
        <span>Сэтгэгдэл</span>
        <span class="text-gray-400 font-normal text-sm">
          {{ comments.meta.total }}
        </span>
      </h2>

      <div
        class="mt-3 w-full border-blueGray-100"
        :class="{ 'border-t': modelType != 'publications' }"
      >
        <compose-comment
          :model-type="modelType"
          :model-id="modelId"
          @posted="add"
        />

        <div class="h-1"></div>

        <div v-for="(comment, index) in comments.data" :key="index">
          <user-comment :comment="comment" />
        </div>

        <div
          v-if="comments.data.length == 0"
          class="text-xs text-blueGray-400 text-center mt-3"
        >
          Ямар ч сэтгэгдэл олдсонгүй. Та сэтгэгдэл үлдээж хамгийн анхдагч нь
          болоорой!
        </div>
        <div class="w-full flex justify-center">
          <loader v-if="loading" />
        </div>
      </div>
    </div>
  </component>
</template>

<script>
import InfiniteScroll from '@/components/InfiniteScroll'
import ComposeComment from './ComposeComment.vue'
import UserComment from './UserComment.vue'
import Loader from '../Loader.vue'

export default {
  components: { InfiniteScroll, ComposeComment, UserComment, Loader },

  props: {
    modelType: {
      type: String,
      required: true,
    },

    modelId: {
      required: true,
    },

    infiniteScroll: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      loading: false,
      comments: null,
    }
  },

  mounted() {
    this.load()
  },

  methods: {
    load(page = 1) {
      this.loading = true

      this.$axios
        .get('/api/reviews', {
          params: {
            reviewable_type: this.modelType,
            reviewable_id: this.modelId,
            'page[number]': page,
          },
        })
        .then(this.whenLoaded)
    },

    loadMore() {
      if (!this.hasMore()) {
        return
      }

      this.comments.meta.current_page++

      this.load(this.comments.meta.current_page)
    },

    hasMore() {
      return this.comments.meta.current_page < this.comments.meta.last_page
    },

    whenLoaded({ data }) {
      this.loading = false

      this.$emit('loaded', data.meta.total)

      if (this.comments == null) {
        this.comments = data
        return
      }

      data.data.forEach((e) => {
        this.comments.data.push(e)
      })

      this.comments.meta = data.meta
    },

    add(comment) {
      comment.latest_five_replies = []

      this.comments.meta.total++

      this.comments.data.unshift(comment)
    },
  },
}
</script>
