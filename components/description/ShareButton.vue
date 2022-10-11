<template>
  <a @click="shareClicked = true" class="relative">
    <icon-share />
    <div
      class="transition duration-200 -bottom-24 -left-20 absolute p-5 bg-white shadow-md rounded flex flex-row justify-center space-x-5"
      :class="shareClicked ? 'opacity-100' : 'opacity-0'"
      @mouseleave="shareClicked = false"
    >
      <span @click="shareTo('facebook')"> <social-facebook /></span>
      <span @click="shareTo('twitter')"> <social-twitter /></span>
    </div>
  </a>
</template>

<script>
import IconShare from '../icons/IconShare.vue'
import SocialFacebook from '../icons/SocialFacebook.vue'
import SocialInstagram from '../icons/SocialInstagram.vue'
import SocialTwitter from '../icons/SocialTwitter.vue'
import SocialShare from '@/plugins/SocialShare.js'

export default {
  components: { IconShare, SocialFacebook, SocialInstagram, SocialTwitter },
  data() {
    return {
      shareClicked: false,
    }
  },
  methods: {
    shareTo(social, title = '') {
      SocialShare(social, document.location.href, title)
    },
  },
}
</script>

<style></style>
