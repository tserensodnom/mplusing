<template>
  <div class="mt-4 flex flex-row space-x-3 2xl:space-x-1">
    <div class="w-1/12 h-auto">
      <image-resize
        width="2.5"
        size="xs"
        :src="comment.user.profile_picture.sm"
        fix="width"
      />
    </div>

    <div class="w-11/12">
      <p class="font-medium">{{ comment.user.name }}</p>
      <pre class="text-sm mt-1">{{ comment.comment }}</pre>

      <div
        class="mt-4 border-b border-blueGray-100 pb-3 flex flex-row justify-between text-blueGray-400 text-xs"
      >
        <p class="opacity-50">{{ comment.formatted_created_at.replace('хоногн', 'хоногийн') }}</p>
        <div class="flex flex-row justify-end space-x-9">
          <like-button
            model-type="review"
            :model-id="comment.id"
            :initial-count="comment.likes_count"
          >
            <template slot-scope="{ liked, count }">
              <icon-heart :liked="liked" />

              <p class="inline-block align-middle">
                {{ count }}
              </p>
            </template>
          </like-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconHeart from '@/components/icons/IconHeart.vue'
import ImageResize from '~/components/tools/ImageResize.vue'

export default {
  components: { IconHeart, ImageResize },

  props: {
    comment: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isLiked: false,
    }
  },
}
</script>
