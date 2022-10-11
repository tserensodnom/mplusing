<template>
  <div class="w-full grid grid-cols-12 overflow-hidden">
    <!-- top section -->
    <div
      class="
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-4 2xl:col-span-6
        flex flex-col
      "
    >
      <div class="w-full flex flex-wrap justify-left overflow-scroll mt-4">
        <div class="w-full px-3 flex flex-row font-medium text-lg">
          <p>
            Аудио ном
            <span class="text-brand">{{ tsenegAudioBook.length }}</span>
          </p>
        </div>
        <div
          class="w-1/3 xm:w-1/4 md:w-1/5 lg:w-1/6 p-3"
          v-for="item in tsenegAudioBook"
          :key="item.id"
        >
          <a
            :href="
              $route.query['mode'] == 'app'
                ? item.deep_link
                : item.web_link
            "
            class="block rounded shadow-lg overflow-hidden relative w-full"
            style="padding-top: 100%"
            :style="
              'background-color: #' +
              item.cover.split('_')[parseInt(item.cover.split('_').length) - 2]
            "
          >
            <img
              :src="item.cover.replace('/images', '/r_sm_h/images')"
              :alt="item.cover"
              loading="lazy"
              class="absolute inset-0"
            />
          </a>

          
        </div>
        <div class="w-full px-3 mt-3 flex flex-row font-medium text-lg">
          <p>
            Цахим ном
            <span class="text-brand">{{ tsenegEBook.length }}</span>
          </p>
        </div>
        <div
          class="w-1/3 xm:w-1/4 md:w-1/5 lg:w-1/6 p-3"
          v-for="item in tsenegEBook"
          :key="item.id"
        >
          <a :href="
              $route.query['mode'] == 'app'
                ? item.deep_link
                : item.web_link
            ">
            <img
            :src="item.cover.replace('/images', '/r_sm_h/images')"
            :alt="item.cover"
            loading="lazy"
            class="w-full h-auto rounded shadow-lg"
            :style="
              'background-color: #' +
              item.cover.split('_')[parseInt(item.cover.split('_').length) - 2]
            "
          />
          </a>
        </div>
      </div>
    </div>
    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-40" />
    <!-- CTA contact -->
    <div
      class="
        flex
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-4 2xl:col-span-6
        flex-col
        justify-center
      "
    >
      <a
        class="
          block
          w-3/5
          sm:w-1/2
          xl:w-1/4
          rounded-full
          py-4
          bg-brand
          mx-auto
          text-center text-white
          font-medium
        "
        href="https://www.facebook.com/mplus.mongolia"
        >Бидэнтэй холбогдох</a
      >
    </div>

    <!-- empty space -->
    <div class="flex col-span-12 h-28" />
    <!-- moto -->
    <div
      class="
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-4 2xl:col-span-6
        flex flex-col
        items-center
        text-center
        mt-4
        text-sm
        lg:text-lg
        font-medium
        leading-6
      "
    >
      <vector-woman-reading />
      <p class="mt-7">Алхахдаа чихэвчээ зүү…</p>
      <p>Автобусанд суувал утсаа нээ…</p>
      <p>Машиндаа яваа бол хөгжмөө чангал…</p>
      <p>Амьдралынхаа хором мөч бүхэнд</p>
      <p class="text-brand">“Илүү унш, Илүү сонс”</p>
    </div>
  </div>
</template>

<script>
import VectorWomanCat from '~/components/illustrations/VectorWomanCat.vue'
import VectorWomanScooter from '~/components/illustrations/VectorWomanScooter.vue'
import VectorWomanReading from '~/components/illustrations/VectorWomanReading.vue'
import VectorWomanQuestion from '~/components/illustrations/VectorWomanQuestion.vue'
import VectorManMplus from '~/components/illustrations/VectorManMplus.vue'
import VectorTseneg from '~/components/illustrations/VectorTseneg.vue'
import VectorOchluur from '~/components/illustrations/VectorOchluur.vue'
import VectorHuchdel from '~/components/illustrations/VectorHuchdel.vue'
import VectorBookStack from '~/components/illustrations/VectorBookStack.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import lottie from 'vue-lottie/src/lottie.vue'
import * as huchdel from '@/assets/lottie/huchdel.json'
import * as ochluur from '@/assets/lottie/ochluur.json'
import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'
import IconPlus from '~/components/icons/IconPlus.vue'
import ProductSlider from '~/components/feeds/components/ProductSlider.vue'
import BookSingleSlide from '~/components/products/BookSingleSlide.vue'
import VectorGivingGift from '~/components/illustrations/VectorGivingGift.vue'
import VectorPeople from '~/components/illustrations/VectorPeople.vue'
import Invision from '~/components/logo/Invision.vue'
import Amazon from '~/components/logo/Amazon.vue'
import Zapos from '~/components/logo/Zapos.vue'
import Unread from '~/components/logo/Unread.vue'
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import IconArrowLeftBrand from '~/components/icons/IconArrowLeftBrand.vue'
import IconClose from '~/components/icons/IconClose.vue'

Vue.use(VueObserveVisibility)

export default {
  components: {
    VectorWomanCat,
    VectorWomanScooter,
    VectorWomanReading,
    VectorWomanQuestion,
    VectorManMplus,
    VectorTseneg,
    VectorBookStack,
    Swiper,
    SwiperSlide,
    lottie,
    VectorOchluur,
    VectorHuchdel,
    IconPlus,
    ProductSlider,
    BookSingleSlide,
    VectorPeople,
    VectorGivingGift,
    Zapos,
    Amazon,
    Invision,
    IconArrowLeft,
    Unread,
    IconArrowLeftBrand,
    IconClose,
  },
  data() {
    return {
      showTsenegBooks: false,
      refLink: [
        {
          name: 'Дэлгэрэнгүй танилцуулга',
          url: '#more',
        },
        {
          name: 'Заавар',
          url: 'http://help.mplus.mn/tseneg/',
        },
        {
          name: 'Цэнэг үйлчилгээний нөхцөл',
          url: 'http://help.mplus.mn/tos/',
        },
      ],

      tsenegAudioBook: [],
      tsenegEBook: [],
    }
  },
  async fetch() {
    let data = await this.$api.getTsenegBooks()
    this.tsenegAudioBook = data.audio_book
    this.tsenegEBook = data.ebook
  },
  methods: {
    huchdelInitAnim(anim) {
      this.huchdelAnim = anim
    },
    ochluurInitAnim(anim) {
      this.ochluurAnim = anim
    },
    playHuchdel() {
      this.huchdelAnim.play()
    },
    playOchluur() {
      this.ochluurAnim.play()
    },
    getJSONLength(json) {
      return Object.keys(json).length
    },
  },
  head() {
    return {
      title: 'Цэнэг үйлчилгээ',
    }
  },
}
</script>

<style></style>
