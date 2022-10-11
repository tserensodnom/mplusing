<template>
  <div class="flex flex-col">
    <p
      class="pb-4 hidden md:inline md:border-b border-blueGray-100 font-bold text-black text-2xl"
    >
      Сошиал бүртгэл холбох
    </p>
    <p class="text-xs text-blueGray-400 mt-5 font-light">
      Та сошиал холбосон тохиолдолд дараагийн нэвтрэх үлдэл хялбар байх болно
    </p>
    <div class="w-full mt-3 flex flex-col space-y-5">
      <div
        class="w-full rounded-xl border border-blueGray-100 p-3 flex flex-row justify-between font-bold text-sm space-x-5 items-center"
      >
        <social-facebook></social-facebook>

        <p v-if="facebook" class="flex-grow text-left">
          {{ facebook.data.name ? facebook.data.name : '' }}
        </p>
        <a
          v-if="facebook"
          @click="removeSocial('facebook')"
          class="text-red-500"
          >Салгах</a
        >
        <a
          v-else
          :href="$config.accountApiUrl + '/v4/account/oauth/social/facebook'"
          >Холбох</a
        >
      </div>
      <div
        class="w-full rounded-xl border border-blueGray-100 p-3 flex flex-row justify-between font-bold text-sm space-x-5 items-center"
      >
        <social-google></social-google>
        <p v-if="google" class="flex-grow text-left">
          {{ google.data.name ? google.data.name : '' }}
        </p>
        <a v-if="google" @click="removeSocial('google')" class="text-red-500"
          >Салгах</a
        >
        <a
          v-else
          :href="$config.accountApiUrl + '/v4/account/oauth/social/google'"
          >Холбох</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import SocialFacebook from '../../../components/icons/SocialFacebook.vue'
import SocialGoogle from '../../../components/icons/SocialGoogle.vue'
import IntegrationList from '~/components/feeds/components/IntegrationList.vue'
import eventBus from '~/plugins/eventBus'

export default {
  components: { IntegrationList, SocialGoogle, SocialFacebook },
  data() {
    return {
      facebook: null,
      google: null,
    }
  },
  mounted() {
    this.$axios
      .get(
        this.$config.accountApiUrl +
          '/v4/account/social/accounts?provider=facebook'
      )
      .then((result) => {
        // eventBus.$emit('toastSuccess', 'Нэхэмжлэл амжилттай устгагдлаа')
        this.facebook = result.data
      })
      .catch((err) => {
        // eventBus.$emit('toastFailure', 'Нэхэмжлэл устгахад алдаа гарлаа')
      })
    this.$axios
      .get(
        this.$config.accountApiUrl +
          '/v4/account/social/accounts?provider=google'
      )
      .then((result) => {
        this.google = result.data
      })
      .catch((err) => {})
  },
  methods: {
    removeSocial(social) {
      this.$axios
        .delete(
          this.$config.accountApiUrl +
            '/v4/account/social/accounts?provider=' +
            social
        )
        .then((result) => {
          eventBus.$emit('toastSuccess', 'Сошиал хаяг амжилттай салгагдлаа')
          setTimeout(() => {
            location.reload()
          }, 1500)
        })
        .catch((err) => {
          eventBus.$emit('toastFailure', 'Сошиал хаяг салгахад алдаа гарлаа')
        })
    },
  },
  transition: 'account-page',
}
</script>

<style></style>
