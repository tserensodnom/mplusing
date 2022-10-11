<template>
  <div class="w-full mt-3 flex flex-col space-y-5">
    <div
      v-for="(item, index) in data"
      :key="index"
      class="w-full rounded-xl border border-blueGray-100 p-3 flex flex-row justify-between font-bold text-sm space-x-5 items-center"
    >
      <component
        v-if="
          ['social-facebook', 'social-google', 'social-apple'].includes(
            item.name
          )
        "
        :is="item.name"
      ></component>
      <p v-if="item.user_is_integrated" class="flex-grow text-left">
        {{ item.user }}
      </p>
      <a v-if="item.user_is_integrated" class="text-red-500">Салгах</a>
      <a
        v-else
        :href="$config.accountApiUrl + '/v4/account/oauth/social/facebook'"
        >Холбох</a
      >
    </div>
  </div>
</template>

<script>
import SocialFacebook from '~/components/icons/SocialFacebook.vue'
import SocialGoogle from '~/components/icons/SocialGoogle.vue'
import SocialApple from '~/components/icons/SocialApple.vue'

export default {
  components: { SocialFacebook, SocialGoogle, SocialApple },
  props: {
    data: {
      required: true,
    },
  },
}
</script>

<style></style>
