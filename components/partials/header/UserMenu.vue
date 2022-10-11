<template>
  <div id="usermenu" :class="`${responsiveStyle} ${isShow && 'opacity-100'}`">
    <NuxtLink to="/account" class="flex flex-row space-x-2 items-center">
      <icon-dashboard />
      <p>Миний булан</p>
    </NuxtLink>
    <!-- <a class="flex flex-row space-x-2 items-center">
      <icon-logout />
      <p>Гарах</p></a
    > -->
    <a
      class="flex flex-row space-x-2 items-center"
      href="https://buy.mplus.mn/coupon"
    >
      <brand-promo />
      <p>Промо</p></a
    >
  </div>
</template>

<script>
import IconDashboard from '~/components/icons/IconDashboard.vue'
import IconLogout from '~/components/icons/IconLogout.vue'
import BrandPromo from '~/components/icons/BrandPromo.vue'

export default {
  components: { IconDashboard, IconLogout, BrandPromo },
  props: { isMobile: { default: false }, isShow: { default: false } },
  computed: {
    responsiveStyle() {
      return this.isMobile
        ? 'text-xs text-brand font-medium space-x-4 flex flex-row items-center'
        : 'text-sm absolute -bottom-20 right-0 px-5 pt-2 pb-3 w-max space-y-2 rounded-md bg-white shadow-md flex flex-col transition duration-200 opacity-0 items-start '
    },
  },
}
</script>

<style>
#usermenu a:hover {
  color: #0061ff;
}
</style>
