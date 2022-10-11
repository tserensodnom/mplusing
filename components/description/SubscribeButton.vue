<template>
  <like-button :model-type="modelType" :model-id="modelId" tag="div">
    <template slot-scope="{ liked }">
      <button
        class="transition duration-200 h-14 w-40 rounded-lg text-white flex items-center"
        :class="liked ? 'bg-green-500' : 'bg-brand'"
      >
        <icon-checked v-if="liked" />
        <icon-plus v-else />

        <p class="font-medium flex flex-grow mr-3">
          {{ liked ? 'Дагасан' : 'Дагах' }}
        </p>
      </button>
    </template>
  </like-button>
</template>

<script>
import IconChecked from '../icons/IconChecked.vue'
import IconPlus from '../icons/IconPlus.vue'
import LikeButton from '../LikeButton.vue'

export default {
  components: { IconChecked, IconPlus, LikeButton },

  props: {
    modelType: {
      type: String,
      required: true,
    },

    modelId: {
      required: true,
    },
  },
}
</script>
