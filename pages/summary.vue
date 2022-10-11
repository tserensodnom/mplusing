<template>
    
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
        huchdelAnim: null,
        ochluurAnim: null,
        ochluurOptions: {
          animationData: ochluur.default,
          loop: true,
          speed: 2,
          autoplay: true,
        },
        huchdelOptions: {
          animationData: huchdel.default,
          loop: true,
          speed: 2,
          autoplay: true,
        },
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
            name: 'Түрээс үйлчилгээний нөхцөл',
            url: 'http://help.mplus.mn/tos/',
          },
        ],
       
      
        tsenegAudioBook: [],
        tsenegEBook: [],
      }
    },

  
    head() {
      return {
        title: 'Түрээс | Цахим ном түрээслэх | Mplus.mn',
        meta: [
        {
          hid: 'description',
          property: 'description',
          content: 'Монголын хамгийн анхны, цахим болон сонсдог номыг багтаасан “Түрээс” гишүүнчлэлийн үйлчилгээ Танд хүрч байна. Уран зохиол, хувь хүний хөгжлийн шилдэг бүтээлүүдээс сонгон, хэмнэлттэйгээр илүү унших хэмнэлд нэгдээрэй.',
        },
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: 'Түрээс | Цахим ном түрээслэх | Mplus.mn',
        },
        {
          hid: 'ogdescription',
          property: 'og:description',
          content: 'Монголын хамгийн анхны, цахим болон сонсдог номыг багтаасан “Түрээс” гишүүнчлэлийн үйлчилгээ Танд хүрч байна. Уран зохиол, хувь хүний хөгжлийн шилдэг бүтээлүүдээс сонгон, хэмнэлттэйгээр илүү унших хэмнэлд нэгдээрэй.',
        },
      ],
      }
    },
  }
  </script>
  
  <style></style>
  