<template>
  <div
    class="nav flex col-start-3 col-span-8 sm:col-start-3 sm:col-span-8 xl:col-start-4 xl:col-span-5 flex-row mx-auto xl:mx-0 space-x-10 sm:space-x-14 lg:space-x-9 items-center"
  >
    <nuxt-link
      class="headerMenu text-xs font-medium flex flex-row items-center"
      :class="isBookPage ? 'text-brand' : 'text-blueGray-400'"
      to="/book"
    >
      <brand-ebook :active="isBookPage" />
      <span class="hidden md:inline-block">Цахим ном</span>
    </nuxt-link>

    <nuxt-link
      class="headerMenu text-xs font-medium flex flex-row items-center"
      :class="isAudioPage ? 'text-brand' : 'text-blueGray-400'"
      to="/audio"
    >
      <brand-audio :active="isAudioPage" />
      <span class="hidden md:inline-block">Аудио ном</span>
    </nuxt-link>

    <nuxt-link
      class="headerMenu text-xs font-medium flex flex-row items-center"
      :class="isPodcastPage ? 'text-brand' : 'text-blueGray-400'"
      to="/podcast"
    >
      <brand-podcast :active="isPodcastPage" />
      <span class="hidden md:inline-block">Подкаст</span>
    </nuxt-link>
    <nuxt-link
      class="headerMenu text-xs font-medium flex flex-row items-center"
      :class="isPlusPage ? 'text-brand' : 'text-blueGray-400'"
      to="/plus"
    >
      <brand-plus :active="isPlusPage" />
      <!-- $route.path.startsWith -->
      <span class="hidden md:inline-block">Нэмэх</span>
    </nuxt-link>
    <!-- <nuxt-link
      class="text-xs font-medium flex flex-row items-center justify-center rounded-full bg-brand p-2 text-white"
      to="https:/buy.mplus.mn/coupon"
    >
      <brand-promo />
      <span class="hidden md:inline-block">Промо</span>
    </nuxt-link> -->
  </div>
</template>

<script>
import BrandAudio from '~/components/icons/BrandAudio.vue'
import BrandEbook from '~/components/icons/BrandEbook.vue'
import BrandPlus from '~/components/icons/BrandPlus.vue'
import BrandPodcast from '~/components/icons/BrandPodcast.vue'
import BrandPromo from '~/components/icons/BrandPromo.vue'

export default {
  components: {
    BrandEbook,
    BrandAudio,
    BrandPodcast,
    BrandPlus,
    BrandPromo,
  },
  computed: {
    isBookPage() {
      return this.$route.name == 'book'
    },
    isAudioPage() {
      return this.$route.name == 'audio'
    },
    isPodcastPage() {
      return this.$route.name == 'podcast'
    },
    isPlusPage() {
      return ['plus', 'tseneg', 'rent', 'tseneg3x'].indexOf(this.$route.name) >= 0
    },
  },
}
</script>
