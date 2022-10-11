<template>
  <div v-if="!isPodcast" class="flex flex-col space-y-5 sm:space-y-0 w-full">
    <book-single-descriptive
      v-for="item in books"
      :key="item.id"
      :item="item"
      :showDescription="showDescription"
    />
  </div>
  <div v-else class="flex flex-col space-y-5 sm:space-y-0 w-full">
    <podcast-single-descriptive
      v-for="item in books"
      :key="item.id"
      :item="item"
      :showDescription="showDescription"
      :mainPodcastId="mainPodcastId"
    />
  </div>
</template>

<script>
import BookSingleDescriptive from './BookSingleDescriptive.vue'
import PodcastSingleDescriptive from './PodcastSingleDescriptive.vue'
export default {
  components: {
    BookSingleDescriptive,
    PodcastSingleDescriptive,
  },

  props: {
    books: {
      required: true,
    },

    showDescription: {
      type: Boolean,
      default: false,
    },

    isPodcast: {
      default: false,
    },

    mainPodcastId: {},
  },
}
</script>
