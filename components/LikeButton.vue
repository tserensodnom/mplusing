<template>
  <component :is="tag" @click="toggle">
    <slot :liked="liked" :count="count"></slot>

    <alert :isAlerted="isAlerted" alertMessage="Та нэвтэрч орно уу!" />
  </component>
</template>

<script>
import Alert from './Alert.vue'

export default {
  components: {
    Alert,
  },

  props: {
    modelType: {
      type: String,
      required: true,
    },

    modelId: {
      required: true,
    },

    initialCount: {
      type: Number,
      default: 0,
    },

    tag: {
      type: String,
      default: 'button',
    },
  },

  data() {
    return {
      liked: this.modelLikedByCurrentUser(),
      count: this.initialCount,
      isAlerted: false,
    }
  },

  methods: {
    modelLikedByCurrentUser() {
      return (
        this.$store.state.auth.loggedIn &&
         this.$store.state.auth.user.likes &&
        this.$store.state.auth.user.likes.filter(
          (like) =>
            like.model_type == this.modelType && like.model_id == this.modelId
        ).length > 0
      )
    },

    toggle() {
      if (!this.$store.state.auth.loggedIn) {
        this.alertShow()
        return
      }

      this.liked = !this.liked

      this[this.liked ? 'like' : 'unlike']()
    },

    getData() {
      return {
        likeable_type: this.modelType,
        likeable_id: this.modelId,
      }
    },

    like() {
      this.count++
      this.$axios.post('/api/likes', this.getData())
    },

    unlike() {
      this.count--
      this.$axios.delete('/api/likes', { params: this.getData() })
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
