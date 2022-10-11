<template>
  <div class="font-rubik noscrollbar app-container overflow-x-hidden">
    <app-header></app-header>

    <div class="main ">
      <Nuxt keep-alive />
    </div>

    <div
      v-if="
        this.$route.query['mode'] != 'app' &&
        this.$store.state.globalVariables.showFooter
      "
      class="w-full mt-32 sm:mt-60 border-t border-blueGray-100"
    ></div>

    <client-only>
      <audio-player />
    </client-only>
    <app-footer></app-footer>

    <div
      class="
        fixed
        z-50
        inset-x-0
        bottom-5
        flex
        items-center
        justify-center
        transition
        ease-in-out
        duration-300
        transform
      "
      :class="showSuccessToast ? 'translate-y-0' : 'translate-y-96'"
    >
      <div
        class="
          rounded-2xl
          p-3
          pr-6
          max-w-7xl
          bg-blueGray-50
          border border-green-200
          shadow-lg
          flex flex-row
          space-x-3
          items-center
        "
      >
        <div class="rounded-full overflow-visible bg-green-200">
          <icon-success class="text-green-500"></icon-success>
        </div>
        <p class="text-sm">{{ successMessage }}</p>
      </div>
    </div>
    <div
      class="
        fixed
        z-50
        inset-x-0
        bottom-5
        flex
        items-center
        justify-center
        transition
        ease-in-out
        duration-300
        transform
      "
      :class="showFailureToast ? 'translate-y-0' : 'translate-y-96'"
    >
      <div
        class="
          rounded-2xl
          p-3
          pr-6
          max-w-7xl
          bg-blueGray-50
          border border-red-200
          shadow-lg
          flex flex-row
          space-x-3
          items-center
        "
      >
        <div class="rounded-full overflow-visible bg-red-200">
          <icon-failure class="text-red-500"></icon-failure>
        </div>
        <p class="text-sm">{{ failureMessage }}</p>
      </div>
    </div>

    <div v-if="isChatActive">
      <!-- Messenger Chat plugin Code -->
      <div id="fb-root"></div>
      <!-- Your Chat plugin code -->
      <div id="fb-customer-chat" class="fb-customerchat"></div>
    </div>

    <noscript v-if="isChatActive">
      <img
        height="1"
        width="1"
        style="display: none"
        src="https://www.facebook.com/tr?id=1682936681900744&ev=PageView&noscript=1"
      />
    </noscript>
  </div>
</template>
<script>
import IconFailure from '../components/icons/IconFailure.vue'
import IconSuccess from '../components/icons/IconSuccess.vue'
import AppFooter from '../components/partials/footer/AppFooter.vue'
import AppHeader from '../components/partials/header/AppHeader.vue'
import AudioPlayer from '../components/partials/footer/AudioPlayer.vue'
import eventBus from '~/plugins/eventBus'
import lottie from 'vue-lottie/src/lottie.vue'
import * as santa from '@/assets/lottie/santa.json'

export default {
  props: ['error'],
  components: {
    AppHeader,
    AppFooter,
    AudioPlayer,
    IconSuccess,
    IconFailure,
    lottie,
  },
  data() {
    return {
      showSuccessToast: false,
      successMessage: null,
      showFailureToast: false,
      failureMessage: null,
      santaAnim: null,
      santaPlay: {
        animationData: santa.default,
        loop: true,
        speed: 1,
        autoplay: true,
      },
      santaGo: false,
    }
  },
  computed: {
    isChatActive() {
      return (
        ['tseneg', 'tseneg3x', 'gift'].indexOf(this.$route.name) == -1 &&
        this.$route.query['mode'] != 'app' &&
        this.$store.state.audioPlayer.isHidden &&
        this.$nuxt.$config.apiUrl.includes('mplus.mn')
      )
    },
  },
  beforeMount() {
    eventBus.$on('toastSuccess', (message) => {
      this.showSuccess(message)
    })
    eventBus.$on('toastFailure', (message) => {
      this.showFailure(message)
    })
  },
  methods: {
    santaInitAnim(anim) {
      this.santaAnim = anim
    },
    showSuccess(message) {
      this.successMessage = message
      this.showSuccessToast = true
      setTimeout(() => {
        this.showSuccessToast = false
      }, 2500)
    },
    showFailure(message) {
      this.failureMessage = message
      this.showFailureToast = true
      setTimeout(() => {
        this.showFailureToast = false
      }, 2500)
    },
    fetchNotifs(){
      if (this.$store.state.auth.loggedIn) {
        this.$axios
          .get(
            this.$config.accountApiUrl +
              '/api/notification/notifications?device=ios',
            { withCredentials: true }
          )
          .then((res) =>{
            this.$store.commit('notifications/UPDATE_NOTIFICATIONS', res.data)
          }
          )
      }
    }
  },
  mounted() {
    if (document.getElementById('fb-customer-chat')) {
      var chatbox = document.getElementById('fb-customer-chat')
      chatbox.setAttribute('page_id', '572675136243286')
      chatbox.setAttribute('attribution', 'biz_inbox')
      window.fbAsyncInit = function () {
        FB.init({
          xfbml: true,
          version: 'v11.0',
        })
      }
      ;(function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) return
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
    this.fetchNotifs()
  },
  watch: {
    $route() {
      this.fetchNotifs()  
    },
  },
}
</script>
<!-- End Facebook Pixel Code -->
