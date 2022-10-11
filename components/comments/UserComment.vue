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
        class="
          mt-4
          border-b border-blueGray-100
          pb-3
          flex flex-row
          justify-between
          text-blueGray-400 text-xs
        "
      >
        <p class="opacity-50">
          {{ comment.formatted_created_at.replace('хоногн', 'хоногийн') }}
        </p>

        <div class="flex flex-row justify-end space-x-9">
          <button @click="composeReply()">
            <svg
              class="inline-block align-middle mr-2 w-4"
              viewBox="0 0 14 10.9"
            >
              <path
                class="fill-current"
                d="M-1213.572,2209.5l3.578,3.494a1.169,1.169,0,0,0,1.652-.02,1.168,1.168,0,0,0-.02-1.652l-1.537-1.5h4.155a5.822,5.822,0,0,0,5.819-5.794v-.431a1.168,1.168,0,0,0-1.168-1.169,1.168,1.168,0,0,0-1.169,1.169v.431a3.482,3.482,0,0,1-3.482,3.457h-4.185l1.506-1.512a1.168,1.168,0,0,0,0-1.653,1.165,1.165,0,0,0-.825-.341,1.163,1.163,0,0,0-.827.344l-3.506,3.518a1.168,1.168,0,0,0-.342.833A1.17,1.17,0,0,0-1213.572,2209.5Z"
                transform="translate(1213.925 -2202.429)"
                fill="#8b969e"
              />
            </svg>
            <p class="inline-block align-middle">Хариулах</p>
          </button>

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
      <alert :isAlerted="isAlerted" alertMessage="Та нэвтэрч орно уу!" />
      <compose-comment
        v-if="isComposingReply"
        model-type="review"
        :model-id="comment.id"
        @posted="add"
      />

      <div v-for="(comment, index) in comment.latest_five_replies" :key="index">
        <user-comment-reply :comment="comment" />
      </div>
    </div>
  </div>
</template>

<script>
import ComposeComment from './ComposeComment.vue'
import UserCommentReply from './UserCommentReply'
import ImageResize from '@/components/tools/ImageResize'
import IconHeart from '@/components/icons/IconHeart'
import LikeButton from '@/components/LikeButton'
import Alert from '../Alert.vue'

export default {
  components: {
    ComposeComment,
    UserCommentReply,
    ImageResize,
    IconHeart,
    LikeButton,
    Alert,
  },

  props: {
    comment: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isComposingReply: false,
      isAlerted: false,
    }
  },

  methods: {
    add(comment) {
      this.comment.latest_five_replies.push(comment)
    },
    composeReply() {
      if (!this.$store.state.auth.loggedIn) {
        this.alertShow()
        return
      }
      this.isComposingReply = !this.isComposingReply
    },
    alertShow() {
      this.isAlerted = !this.isAlerted

      setTimeout(() => {
        this.isAlerted = !this.isAlerted
      }, 1500)
    },
  },
}
</script>
