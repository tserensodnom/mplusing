<template>
  <div class="w-full grid grid-cols-12 overflow-hidden">
    <!-- top section -->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col"
    >
      <div class="relative mt-4 lg:mt-28 pl-5 sm:pl-0">
        <vector-three-women class="mx-auto xm:hidden" :resizeMultiply="0.6" />
        <div class="flex flex-col w-10/12 lg:w-3/5 font-medium text-2xl">
          <vector-plus-box-logo class="mt-2 lg:hidden -z-10" :resizeMultiply="1.5" />
          <vector-plus-box-logo class="mt-7 hidden lg:block" :resizeMultiply="2" />
          
          <p class="z-10 mt-7 lg:text-6xl font-bold uppercase">
            Хэвлэмэл ном аваад <span class="text-orange-500">Цахим ном</span> бэлгэнд авах боломж
          </p>
          <p class="hidden lg:inline mt-4 text-blueGray-400">
            Зуны амралт дуусаж хичээл, бизнесийн сар эхлэж буйтай холбогдсон мэргэжилтнүүд, бизнес эрхлэгчид, оюунтан залууст зориулсан
          </p>
        </div>
        <vector-three-women
          class="absolute -top-7 -right-20 xm:-right-10 xm:-top-16 md:-top-20 hidden xm:block lg:hidden"
        />
        <vector-three-women
          class="absolute -top-48 -right-10 hidden lg:block"
          style="top: 5rem; right: -20rem;"
          :resizeMultiply="2"
        />
      </div>
      <swiper
        id="mobilePlans"
        class="mt-4 sm:mt-9 py-4 -ml-1 pl-6 pr-5 sm:pl-1 mx-0"
        :options="{
          spaceBetween: 15,
          slidesPerView: 'auto',
          breakpoints: {
            1024: {
              allowTouchMove: false,
            },
          },
        }"
      >
        <swiper-slide
          class="max-w-max rounded-full shadow-bluexs px-4 py-1.5 bg-white text-xs font-medium text-blueGray-400"
          v-for="(item, index) in refLink"
          :key="index"
        >
          <a class="w-full h-full" :href="item.url">{{ item.name }}</a>
        </swiper-slide>
      </swiper>
    </div>
    <!-- empty space -->
    <div class="col-span-12 h-28 lg:h-80" />
    <!-- paragraphs 1 -->
    <div
      id="more"
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col xm:flex-row justify-start mt-4 relative"
    >
      <vector-plus-box class="mx-auto xm:hidden" :resizeMultiply="0.6" />
      <div
        class="w-full mt-7 xm:mt-0 text-center xm:text-left xm:w-2/3 lg:w-2/5 flex flex-col px-5 sm:px-0 text-sm"
      >
        <p class="font-bold text-xl lg:text-5xl leading-5">
          <span class="text-orange-500">Plus Box</span><br/>гэж юу вэ?
        </p>
        <p class="mt-3 lg:mt-7 text-center xm:text-left">
          Хамгийн шилдэг 9 номын худалдан авалт бүрт тухайн номын цахим ном (ebook) -ыг Mplus бэлэглэнэ.
        </p>
      </div>
      <vector-plus-box
        class="absolute -top-7 -right-20 xm:-right-10 xm:-top-16 md:-top-20 hidden xm:block lg:hidden"
      />
      <vector-plus-box
        class="absolute -top-48 -right-10 hidden lg:block"
        style="right: -20rem;"
        :resizeMultiply="2"
      />
    </div>
    <!-- empty space -->
    <div class="col-span-12 h-28 lg:h-40" />
    <!-- paragraphs 2-->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col xm:flex-row justify-start mt-4 relative"
    >
      <vector-plus-box-100 class="mx-auto xm:hidden" :resizeMultiply="0.6" />
      <div
        class="w-full mt-7 xm:mt-0 text-center xm:text-left xm:w-2/3 lg:w-2/5 flex flex-col px-5 sm:px-0 text-sm"
      >
        <p class="font-bold text-xl lg:text-5xl leading-5">
          Санамж
        </p>
        <ul class="mt-3 space-y-3 list-disc">
          <li>
            Таны худалдан авсан номын хамт бэлэг идэвхижүүлэх<br/>промо код, ашиглах зааврын хамт дагалдан очно.
          </li>
          <li>Ном тус бүрээс зөвхөн 100 ширхэг "Plus Box"-оор зарагдана.</li>
          <li>
            Промо код нь 2022/12/31 хүртэл хүчинтэй байна.
          </li>
          <li>Промо код ашигласан бүртгэлээрээ 3 хүртэл<br/>төхөөрөмж (гар утас, таблет) дээр ашиглах боломжтой</li>
          <li>Хэвлэмэл номоо мартсан бол гар утсаа нээгээд хүссэн<br/>газраа үргэлжлүүлэн унших боломжтой бөгөөд<br/>интернэтгүй үед ч унших боломжтой.</li>
        </ul>
      </div>
      <vector-plus-box-100
        class="absolute -top-7 -right-20 xm:-right-10 xm:-top-16 md:-top-20 hidden xm:block lg:hidden"
      />
      <vector-plus-box-100
        class="absolute -top-48 -right-10 hidden lg:block"
        style="right: -20rem; top: -8rem;"
        :resizeMultiply="2"
      />
    </div>
    <!-- empty space -->
    <div class="col-span-12 h-28 lg:h-40" />
    <!-- paragraphs 3-->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col xm:flex-row justify-end mt-4 relative"
    >
      <vector-man-books class="mx-auto xm:hidden" :resizeMultiply="0.6" />
      <div
        class="mt-7 xm:mt-0 text-center xm:text-right xm:w-2/3 lg:w-1/2 flex flex-col px-5 text-sm"
      >
        <vector-man-books
          class="absolute top-16 -left-48 xs:top-0 xm:-left-32 hidden xm:block lg:hidden"
        />
        <vector-man-books
          class="absolute -top-20 -left-48 hidden lg:block"
          :resizeMultiply="2"
        />
        <p class="font-bold text-xl lg:text-5xl leading-5">
          Хэрхэн худалдаж <span class="text-orange-500">авах</span> вэ?
        </p>
        <p class="mt-3 lg:mt-7">
          Alphabook Номын дэлгүүрийн "Blue Sky, Metro Mall" салбар дэлгүүрүүдээс очиж худалдан авах<br/><br/>

          Shoppy.mn онлайн худалдааны сайтаас захиалан хүргүүлж авах
        </p>

        <div class="hidden lg:flex flex-row mt-14 space-x-6">
          <a
            class="block w-60 py-3.5 border-2 border-gray-400 rounded-full text-center"
            href="https://www.alphabook.mn/" target="_blank"
            >Alpha book</a
          >
          <a
            class="block w-60 py-3.5 border-2 border-gray-400 rounded-full text-center"
            href="https://www.shoppy.mn/" target="_blank"
            >Shoppy.mn</a
          >
        </div>
      </div>
    </div>
    <!-- empty space -->
    <div class="col-span-12 h-28 lg:h-40" />
    <!-- bestsellers -->
    <div
      id="books"
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col items-center text-center mt-4 relative"
    >
      <p class="font-bold text-xl lg:text-5xl leading-5 mt-7 mb-5">
        Ямар <span class="text-orange-500">ном</span> багтсан бэ?
      </p>

      <div
        class="hidden lg:flex flex-row justify-center text-left grid grid-cols-5 gap-5"
      >
        <book-single-slide
          v-for="(item, index) in bestBooks.items"
          :key="index"
          :book="item"
          class="text-start"
        />
      </div>
    </div>
    <product-slider :data="bestBooks" class="lg:hidden z-0" />
    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-40" />
    <!-- paragraphs 1 -->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col items-center text-center mt-4 relative"
    >
      <div
        class="mt-7 xm:mt-0 text-center xm:text-left xm:w-2/3 lg:w-2/5 flex flex-col px-5 sm:px-0 text-sm"
      >
        <p class="font-bold text-xl lg:text-5xl leading-5 text-center">
          Хамтрагч байгууллага
        </p>
      </div>
    </div>
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col items-center text-center mt-4 relative"
    >
      <div class="flex grid grid-cols-7 gap-7 partners-logo">
        <div>
          <a href="https://www.alphabook.mn/" target="_blank">
            <img src="~/assets/img/logoAlpha.png" />
          </a>
        </div>
        <div>
          <a href="https://www.shoppy.mn/" target="_blank">
            <img src="~/assets/img/logoShoppy.png" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/unitedbusinessreview" target="_blank">
            <img src="~/assets/img/logoUnited.png" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/GrandbookPublishing" target="_blank">
            <img src="~/assets/img/logoGrandbook.png" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/nomadpublishing.mn" target="_blank">
            <img src="~/assets/img/logoNomad.png" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/ErdemtPublishing/" target="_blank">
            <img src="~/assets/img/logoErdemt.png" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/Bluenotespublishing" target="_blank">
            <img src="~/assets/img/logoBluenotes.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VectorThreeWomen from '~/components/illustrations/VectorThreeWomen.vue'
import VectorPlusBox from '~/components/illustrations/VectorPlusBox.vue'
import VectorPlusBox100 from '~/components/illustrations/VectorPlusBox100.vue'
import VectorManBooks from '~/components/illustrations/VectorManBooks.vue'
import VectorPlusBoxLogo from '~/components/illustrations/VectorPlusBoxLogo.vue'

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
    VectorThreeWomen,
    VectorPlusBox,
    VectorPlusBox100,
    VectorManBooks,
    VectorPlusBoxLogo,

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
          name: 'Номын жагсаалт',
          url: '#books',
        },
      ],
      plans: [
        {
          lottieurl: '',
          component: 'vector-ochluur',
          options: {
            animationData: ochluur.default,
            loop: true,
            speed: 2,
            autoplay: true,
          },
          title: 'Очлуур',
          days: '30',
          description: 'Оюундаа оч бадраах уу?',
          discount: '90%',
          ebook_count: '2',
          audio_book_count: '1',
          price: "4'900₮",
        },
        {
          lottieurl: '',
          component: 'vector-huchdel',
          options: {
            animationData: huchdel.default,
            loop: true,
            speed: 2,
            autoplay: true,
          },
          title: 'Хүчдэл',
          days: '90',
          description: 'Хязгааргүй хүч нэмэх үү?',
          discount: '94%',
          ebook_count: '9',
          audio_book_count: '4',
          price: "14'900₮",
        },
      ],
      bestBooks: {
        items: [
          {
            id: '1709',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1709',
            web_link: 'http://www.mplus.mn/togtuun-baih-ni-gol-tulhuur',
            title: 'Тогтуун байх нь гол түлхүүр',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/615d42bb_ab8b5a_0.705.jpg',
            publisher: {
              id: 1602,
              name: 'Бльюнөүтс ХХК',
              deep_link: 'mplus://q?view=detail&type=publishers&id=1602',
            },
            purchased: false,
          },
          {
            id: '1925',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1925',
            web_link: 'http://www.mplus.mn/essentialism',
            title: 'Essentialism: Цөөнийг үйлдэх зарчим',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/6285c475_ab727b_0.707.jpg',
            publisher: {
              id: 1602,
              name: 'Бльюнөүтс ХХК',
              deep_link: 'mplus://q?view=detail&type=publishers&id=1602',
            },
            purchased: false,
          },
          {
            id: '2039',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=2039',
            web_link: 'http://www.mplus.mn/story-brand-buteeh-ni',
            title: 'Стори брэнд бүтээх нь',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/62e8fdad_d7807f_0.705.jpg',
            publisher: {
              id: 1745,
              name: 'Номад паблишинг ХХК',
              deep_link: 'mplus://q?view=detail&type=publishers&id=1745',
            },
            purchased: false,
          },
          {
            id: '1660',
            ability: 'listen',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1660',
            web_link: 'http://www.mplus.mn/no-filter',
            title: 'No Filter: Инстаграмын бодит түүх',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/6115dffd_b84a76_0.705.jpg',
            publisher: {
              id: 778,
              name: 'Юнайтед Бизнес Ривюү',
              deep_link: 'mplus://q?view=detail&type=publishers&id=778',
            },
            purchased: false,
          },
          {
            id: '1137',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1137',
            web_link: 'http://www.mplus.mn/buteelc-inc',
            title: 'Бүтээлч, INC.',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/60518148_a33132_0.707.jpg',
            publisher: {
              id: 778,
              name: 'Юнайтед Бизнес Ривюү',
              deep_link: 'mplus://q?view=detail&type=publishers&id=778',
            },
            purchased: false,
          },
          {
            id: '1993',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1993',
            web_link: 'http://www.mplus.mn/hairlah-urlag',
            title: 'Хайрлах урлаг',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/62b26111_ca7c61_1.jpg',
            publisher: {
              id: 1641,
              name: 'Grandbook Publishing',
              deep_link: 'mplus://q?view=detail&type=publishers&id=1641',
            },
            purchased: false,
          },
          {
            id: '1919',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1919',
            web_link: 'http://www.mplus.mn/gun-uil',
            title: 'Гүн үйл',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/62e512cc_c99d32_0.707.jpg',
            publisher: {
              id: 1641,
              name: 'Grandbook Publishing',
              deep_link: 'mplus://q?view=detail&type=publishers&id=1641',
            },
            purchased: false,
          },
          {
            id: '1600',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1600',
            web_link: 'http://www.mplus.mn/siddarta',
            title: 'Сиддхарта',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/60ac9d23_488791_0.712.jpg',
            publisher: {
              id: 1099,
              name: '“Эрдэмт Паблишинг” ХХК',
              deep_link: 'mplus://q?view=detail&type=publishers&id=1099',
            },
            purchased: false,
          },
          {
            id: '1871',
            ability: 'read',
            type: 'books',
            deep_link: 'mplus://q?view=detail&type=books&id=1871',
            web_link: 'http://www.mplus.mn/digital-minimalism',
            title: 'Дижитал минимализм',
            cover:
              'https://ub1.cdn.mplus.mn/images/publisher/square/620df3fc_d4d376_0.705.jpg',
            publisher: {
              id: 1099,
              name: '“Эрдэмт Паблишинг” ХХК',
              deep_link: 'mplus://q?view=detail&type=publishers&id=1099',
            },
            purchased: false,
          },
        ],
      },
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
      title: 'Plus Box',
    }
  },
}
</script>

<style></style>
