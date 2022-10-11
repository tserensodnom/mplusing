<template>
  <div class="w-full grid grid-cols-12 overflow-hidden">
    <div
      class="
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-4 2xl:col-span-6
        flex flex-row flex-wrap
        mt-5
        sm:mt-10
      "
    >
      <nuxt-link
        to="/gift"
        class="w-full sm:w-1/2 lg:w-1/3 h-auto p-5 sm:p-0 sm:pr-5 pb-5"
      >
        <img
          src="~/assets/img/belegplus.jpg"
          class="
            w-full
            rounded-2xl
            overflow-hidden
            shadow-lg
            transition
            duration-300
            transform
            hover:-translate-y-1
          "
          alt=""
        />
      </nuxt-link>
      <nuxt-link
        to="/tseneg"
        class="w-full sm:w-1/2 lg:w-1/3 h-auto p-5 sm:pl-0 sm:pt-0 sm:pr-5 pb-5"
      >
        <img
          src="~/assets/img/tseneg.jpg"
          class="
            w-full
            rounded-2xl
            overflow-hidden
            shadow-lg
            transition
            duration-300
            transform
            hover:-translate-y-1
          "
          alt=""
        />
      </nuxt-link>

      <nuxt-link
        to="/rent"
        class="w-full sm:w-1/2 lg:w-1/3 h-auto p-5 sm:pl-0 sm:pt-0 sm:pr-5 pb-5"
      >
        <img
          src="~/assets/img/rent.jpg"
          class="
            w-full
            rounded-2xl
            overflow-hidden
            shadow-lg
            transition
            duration-300
            transform
            hover:-translate-y-1
          "
          alt=""
        />
      </nuxt-link>

      <a
        :href="this.$config.buyUrl + '/coupon'"
        class="w-full sm:w-1/2 lg:w-1/3 h-auto p-5 sm:p-0 sm:pr-5 pb-5"
      >
        <img
          src="~/assets/img/couponbanner.jpg"
          class="
            w-full
            rounded-2xl
            overflow-hidden
            transition
            duration-300
            transform
            hover:-translate-y-1
          "
          alt=""
        />
      </a>
    </div>
  </div>
</template>

<script>
import IconGift from '~/components/icons/IconGift.vue'
export default {
  components: { IconGift },
}
</script>

<style></style>
