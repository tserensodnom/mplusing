<template>
 
    <div class="w-full grid grid-cols-12 overflow-hidden">
      <!-- top section -->
      <div
      
        class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col"
      >
      <div class="w-full col-start-1 col-end-7">

<img class="rounded-b-lg" src="@/assets/img/background1.png"/>
</div>
        <div class="relative mt-4 lg:mt-28 pl-5 sm:pl-0">
          <div class="flex flex-col w-10/12 lg:w-3/5 font-medium text-2xl">

            <p class="z-10 mt-7 lg:text-6xl font-bold uppercase">
              Шилдэг номын <span class="text-purple-400" >Түрээс</span> үйлчилгээ
            </p>
            <p class="hidden lg:inline mt-4 text-blueGray-400">
              Бестселлер, сонсдог номууд багтсан
            </p>
          </div>
          <div class="hidden lg:flex flex-row mt-14 space-x-6">
            <a
              class="block w-60 pt-4 pb-3.5 bg-purple-400 rounded-full text-center text-white font-bold"
              href="#plans"
              >Эхлэх</a
            >
            <a
              class="block w-60 py-3.5 border-2 border-gray-400 rounded-full text-center"
              href="https://buy.mplus.mn/coupon"
              >Кодоор идэвхижүүлэх</a
            >
          </div>
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
      <!-- plans section -->
      <div
        class="lg:hidden col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col mt-4"
      >
        <div class="relative mt-4 pl-5 sm:pl-0">
          <div class="flex flex-col w-2/3 mx-auto text-center font-light text-xs">
            <p class="font-bold text-lg leading-5">
              Танд аль <span class="text-purple-400">хувилбар</span> нь тохирох вэ?
            </p>
          </div>
        </div>
        <swiper
          class="mt-4 pt-4 pb-6 pl-6 pr-5 sm:px-1 w-full"
          :options="{
            spaceBetween: 15,
            slidesPerView: 'auto',
            breakpoints: {
              768: {
                slidesPerView: 2,
              },
            },
          }"
        >
        <!-- <mobile 1 day mobile> -->
          <swiper-slide
            class="swiper h-auto w-64 rounded-xl shadow-bluexs bg-white overflow-hidden"
          >
            <a
              :href="
                this.$route.query['mode'] == 'app'
                  ? 'mplus://q?view=ott&url=' +
                    $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                    '/book/rental/plans/9?mode=app&purchase=1'
                  : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                    '/book/rental/plans/9?purchase='
              "
              class="w-full relative overflow-hidden text-xs flex flex-col justify-between"
            >
              <div class="z-10 w-full flex flex-col pl-3 py-3 pb-4">
                
                <p
                  class="font-light text-xs flex flex-row items-end h-52 leading-none mt-1"
                >
                  <span class="flex flex-row font-bold text-base leading-4 mt-1">{{ plans[0].days }} хоногт</span>
                </p>
                
              </div>
              <div
                class="z-20  w-full bg-purple-400 h-14 text-white text-center flex flex-row items-center justify-between px-3"
              >
                <p class="text-lg font-bold">
                  {{ plans[0].price }}
                </p>
                <div class="flex flex-row items-center space-x-2">
                 
                  <icon-arrow-left class="transform rotate-180" />
                </div>
              </div>
              <img
                src="@/assets/img/PlanHuchdel.jpg"
                class="absolute top-5 right-0 z-0 w-64"
              />
            </a>
          </swiper-slide>
          <!-- <mobile 7 day mobile> -->
          <swiper-slide
            class="swiper h-auto w-64 rounded-xl shadow-bluexs bg-white overflow-hidden"
          >
            <a
              :href="
                this.$route.query['mode'] == 'app'
                  ? 'mplus://q?view=ott&url=' +
                    $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                    '/book/rental/plans/9?mode=app&purchase=1'
                  : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                    '/book/rental/plans/9?purchase=1'
              "
              class="w-full relative overflow-hidden text-xs flex flex-col justify-between"
            >
              <div class="z-10 w-full flex flex-col pl-3 py-3 pb-4">
                <div class="flex flex-row justify-start items-center space-x-2">
                </div>
                <p
                  class="font-light text-xs flex flex-row items-end h-52 leading-none mt-1"
                >
                  <span class="flex flex-row font-bold text-base leading-4 mt-1">{{ plans[1].days }} хоногт</span>
                </p>
              </div>
              <div
                class="z-10 w-full bg-purple-400 h-14 text-white text-center flex flex-row items-center justify-between px-3"
              >
                <p class="text-lg font-bold">
                  {{ plans[1].price }}
                </p>
                <div class="flex flex-row items-center space-x-2">
                  <icon-arrow-left class="transform rotate-180" />
                </div>
              </div>
              <img
                src="@/assets/img/PlanHuchdel.jpg"
                class="absolute top-5 right-0 z-0 w-64"
              />
            </a>
          </swiper-slide>
          <!-- <mobile 30 day mobile> -->
          <swiper-slide
            class="swiper h-auto w-64 rounded-xl shadow-bluexs bg-white overflow-hidden"
          >
            <a
              :href="
                this.$route.query['mode'] == 'app'
                  ? 'mplus://q?view=ott&url=' +
                    $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                    '/book/rental/plans/9?mode=app&purchase=1'
                  : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                    '/book/rental/plans/9?purchase=1'
              "
              class="w-full relative overflow-hidden text-xs flex flex-col justify-between"
            >
              <div class="z-10 w-full flex flex-col pl-3 py-3 pb-4">
                <div class="flex flex-row justify-start items-center space-x-2">
                </div>
                <p
                  class="font-light text-xs flex flex-row items-end h-52 leading-none mt-1"
                >
                  <span class="flex flex-row font-bold text-base leading-4 mt-1">{{ plans[2].days }} хоногт</span>
                </p>
              </div>
              <div
                class="z-10 w-full bg-purple-400 h-14 text-white text-center flex flex-row items-center justify-between px-3"
              >
                <p class="text-lg font-bold">
                  {{ plans[2].price }}
                </p>
                <div class="flex flex-row items-center space-x-2">
                  <icon-arrow-left class="transform rotate-180" />
                </div>
              </div>
              <img
                src="@/assets/img/PlanHuchdel.jpg"
                class="absolute top-5 right-0 z-0 w-64"
              />
            </a>
          </swiper-slide>
        </swiper>
      </div>
      <!-- empty space -->
      <div class="hidden lg:flex col-span-12 h-28 lg:h-40" />
      <!-- plans -->
      <div
        class="hidden lg:flex col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex-col items-center text-center mt-4 relative"
        id="plans"
      >
        <p class="font-bold text-xl lg:text-3xl leading-5 mt-7">
          Хамгийн багадаа
        </p>
        <p class="font-bold text-xl lg:text-3xl leading-5">
          <span class="text-purple-400">90% хэмнэх</span> боломжтой
        </p>
        <p class="font-bold text-xl lg:text-3xl leading-5">хувилбарууд</p>
        <div
          class="mt-7 pt-4 pb-6 pl-6 pr-5 sm:px-1 w-full flex flex-row justify-between"
        >
          <!-- 1 day desktop -->
          <a
            :href="
              this.$route.query['mode'] == 'app'
                ? 'mplus://q?view=ott&url=' +
                  $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/rental/plans/9?mode=app&purchase=1'
                : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/rental/plans/9?purchase=1'
            "
            class="text-left plansHover flex flex-col justify-between h-auto w-2/6  mr-6 rounded-2xl shadow-bluexs bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-bluelg overflow-hidden relative"
          >
            <div class="z-10 w-full  flex flex-col pl-5 py-3 pb-4 ">
              <p
                class="font-base text-md text-blueGray-400 flex flex-row items-end h-32 leading-none mt-1"
              >
                <span></span>
              </p>
              <div class="flex flex-row font-bold leading-none mt-1">
                <div class="flex flex-col">
                  <p class="text-2xl leading-6">
                    {{ plans[0].days }} хоногт
                  </p>   
                </div>
              </div>
            </div>
            <div
              class="z-10 w-full  bg-purple-400 h-16 text-white text-center flex flex-row items-center justify-between px-5"
            >
              <p class="text-2xl font-bold">
                {{ plans[0].price }}
              </p>
            </div>
            
          </a>
          <!-- 7 day desktop -->
          <a
            :href="
              this.$route.query['mode'] == 'app'
                ? 'mplus://q?view=ott&url=' +
                  $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/rental/plans/9?mode=app&purchase=1'
                : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/rental/plans/9?purchase=1'
            "
            class="text-left plansHover flex flex-col justify-between h-auto w-2/6 mr-6 rounded-2xl shadow-bluexs bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-bluelg overflow-hidden relative"
          >
            <div class="z-10 w-full flex flex-col pl-5 py-3 pb-4">
              <p
                class="font-base text-md text-blueGray-400 flex flex-row items-end h-32 leading-none mt-1"
              >
                <span></span>
              </p>
              <div class="flex flex-row font-bold leading-none mt-1">
                <div class="flex flex-col">
                  <p class="text-2xl leading-6">
                    {{ plans[1].days }} хоногт
                  </p>
                </div>
              </div>
            </div>
            <div
              class="z-10 w-full bg-purple-400 h-16 text-white text-center flex flex-row items-center justify-between px-5"
            >
              <p class="text-2xl font-bold">
                {{ plans[1].price }}
              </p>
            </div>
           
          </a>
          <!-- 30 day desktop -->
          <a
            :href="
              this.$route.query['mode'] == 'app'
                ? 'mplus://q?view=ott&url=' +
                  $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/rental/plans/10?mode=app&purchase=1'
                : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/rental/plans/10?purchase=1'
            "
            class="text-left plansHover flex flex-col justify-between h-auto w-2/6 rounded-2xl shadow-bluexs bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-bluelg overflow-hidden relative"
          >
            <div class="z-10 w-full flex flex-col pl-5 py-3 pb-4">
              <p
                class="font-base text-md text-blueGray-400 flex flex-row items-end h-32 leading-none mt-1"
              >
                <span></span>
              </p>
              <div class="flex flex-row font-bold leading-none mt-1">
                <div class="flex flex-col">
                  <p class="text-2xl leading-6">
                    {{ plans[2].days }} хоног
                  </p>
                </div>
              </div>
            </div>
            <div
              class="z-10 w-full bg-purple-400 h-16 text-white text-center flex flex-row items-center justify-between px-5"
            >
              <p class="text-2xl font-bold">
                {{ plans[2].price }}
              </p>
            </div>
            
          </a>
        </div>
      </div>
      <!-- empty space -->
      <div class="col-span-6 lg:h-70" />
      
      <!-- bestsellers -->
      <div
        class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col items-center text-center mt-4 relative"
      >
        <p class="font-bold text-xl lg:text-3xl leading-5 text-purple-400 mt-7">
          Бестселлерүүд
        </p>
        <p class="font-bold text-xl lg:text-3xl leading-5">
          албан ёсны эрхтэйгээр
        </p>
      </div>
      <!-- all rent books -->
      <div class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col w-full col-start-1 col-end-7  md:rounded-2xl mt-10 rounded-t-2xl bg-white shadow-top z-50 flex flex-col">
        
            <div class="w-full px-3 mt-3 flex flex-row font-medium text-lg">
              <p>
                Аудио ном
                <span class="text-brand">{{ tsenegAudioBook.length }}</span>
              </p>
            </div>
            <div
                  class="hidden lg:flex flex-row justify-center text-left space-x-5 mt-14"
                       >
                      <book-single-slide
                     v-for="(item, index) in bestBooks.items"
                     :key="index"
                     :book="item"
                      class="text-start"
                            />
            </div>
            <div
            class="w-1/3 xm:w-1/4 md:w-1/5 lg:w-1/6 p-3"
            v-for="item in tsenegAudioBook"
            :key="item.id"
            >
            
              <div
                class="rounded shadow-lg overflow-hidden relative w-full"
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
              </div>
           </div>
      
       </div>
            <div class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col w-full col-start-1 col-end-7  md:rounded-2xl mt-10 rounded-t-2xl bg-white shadow-top z-50 flex flex-col">
              
            <div class="w-full px-3 mt-3 flex flex-row font-medium text-lg">
              <p>
                Цахим ном
                <span class="text-brand">{{ tsenegEBook.length }}</span>
              </p>
            </div>
            <div
        class="hidden lg:flex flex-row justify-center text-left space-x-5 mt-14"
      >
        <book-single-slide
          v-for="(item, index) in bestBooks.items"
          :key="index"
          :book="item"
          class="text-start"
        />
      </div>
            <div
              class="w-1/3 xm:w-1/4 md:w-1/5 lg:w-1/6 p-3"
              v-for="item in tsenegEBook"
              :key="item.id"
            >
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
            </div>
          </div>      
      
      <!-- empty space -->
      <div class="flex col-span-12 h-28 lg:h-40" />
      <!-- CTA contact -->
      <div
        class="flex col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex-col justify-center"
      >
        <a
          class="block w-3/5 sm:w-1/2 xl:w-1/4 rounded-full py-4 bg-purple-400 mx-auto text-center text-white font-medium"
          href="https://www.facebook.com/mplus.mongolia"
          >Бидэнтэй холбогдох</a
        >
      </div>
  
      <!-- empty space -->
      <div class="flex col-span-12 h-28" />
      <!-- moto -->
      <div
        class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col items-center text-center mt-4 text-sm lg:text-lg font-medium leading-6"
      >
        <vector-woman-reading />
        <p class="mt-7">Алхахдаа чихэвчээ зүү…</p>
        <p>Автобусанд суувал утсаа нээ…</p>
        <p>Машиндаа яваа бол хөгжмөө чангал…</p>
        <p>Амьдралынхаа хором мөч бүхэнд</p>
        <p class="text-purple-400">“Илүү унш, Илүү сонс”</p>
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
      VectorGivingGift,
      Invision,
      IconArrowLeft,
      IconArrowLeftBrand,
      IconClose,
    },
    data() {
      return {
        showTsenegBooks: true,
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
            days: '1',
            description: 'Оюундаа оч бадраах уу?',
            discount: '90%',
            ebook_count: '2',
            audio_book_count: '1',
            price: "1'900₮",
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
            days: '7',
            description: 'Хязгааргүй хүч нэмэх үү?',
            discount: '94%',
            ebook_count: '9',
            audio_book_count: '4',
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
            days: '30',
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
              id: '14',
              ability: 'read',
              type: 'books',
              deep_link: 'mplus://q?view=detail&type=books&id=1222',
              web_link: 'http://www.mplus.mn/zurslyn-xuc',
              title: 'Зуршлын Хүч',
              cover:
                'https://ub1.cdn.mplus.mn/images/publisher/square/60518284_cda7ac_0.707.jpg',
              publisher: {
                id: 964,
                name: 'Амар-Өргөө ХХК',
                deep_link: 'mplus://q?view=detail&type=publishers&id=964',
              },
              purchased: false,
            },
            {
              id: '53',
              ability: 'read',
              type: 'books',
              deep_link: 'mplus://q?view=detail&type=books&id=1532',
              web_link: 'http://www.mplus.mn/aguu-getsbi',
              title: 'Агуу Гэтсби',
              cover:
                'https://ub1.cdn.mplus.mn/images/publisher/square/6051875e_6c543d_0.707.jpg',
              publisher: {
                id: 1201,
                name: 'С.Нарангэрэл',
                deep_link: 'mplus://q?view=detail&type=publishers&id=1201',
              },
              purchased: false,
            },
            {
              id: '54',
              ability: 'read',
              type: 'books',
              deep_link: 'mplus://q?view=detail&type=books&id=1529',
              web_link: 'http://www.mplus.mn/ooriigoo-cholool',
              title: 'Өөрийгөө чөлөөл',
              cover:
                'https://ub1.cdn.mplus.mn/images/publisher/square/60518740_735f45_0.707.jpg',
              publisher: {
                id: 961,
                name: 'Зеролекс ХХК',
                deep_link: 'mplus://q?view=detail&type=publishers&id=961',
              },
              purchased: false,
            },
            {
              id: '50',
              ability: 'listen',
              type: 'books',
              deep_link: 'mplus://q?view=detail&type=books&id=1435',
              web_link: 'http://www.mplus.mn/Charisma',
              title: 'Харизм',
              cover:
                'https://ub1.cdn.mplus.mn/images/publisher/square/60518098_9e9782_0.707.jpg',
              publisher: {
                id: 961,
                name: 'Зеролекс ХХК',
                deep_link: 'mplus://q?view=detail&type=publishers&id=961',
              },
              purchased: false,
            },
            {
              id: '52',
              ability: 'read',
              type: 'books',
              deep_link: 'mplus://q?view=detail&type=books&id=1416',
              web_link: 'http://www.mplus.mn/Id-zalbir-hairla',
              title: 'Ид, Залбир, Хайрла',
              cover:
                'https://ub1.cdn.mplus.mn/images/publisher/square/60518606_d9d5db_0.707.jpg',
              publisher: {
                id: 961,
                name: 'Зеролекс ХХК',
                deep_link: 'mplus://q?view=detail&type=publishers&id=961',
              },
              purchased: false,
            },
            {
              id: '20',
              ability: 'read',
              type: 'books',
              deep_link: 'mplus://q?view=detail&type=books&id=1328',
              web_link: 'http://www.mplus.mn/setgel-hudluliin-chadamj',
              title: 'Сэтгэл хөдлөлийн чадамж',
              cover:
                'https://ub1.cdn.mplus.mn/images/publisher/square/605185a2_79496e_0.707.jpg',
              publisher: {
                id: 961,
                name: 'Зеролекс ХХК',
                deep_link: 'mplus://q?view=detail&type=publishers&id=961',
              },
              purchased: false,
            },
            {
              id: '18',
              ability: 'read',
              type: 'books',
              deep_link: 'mplus://q?view=detail&type=books&id=1230',
              web_link: 'http://www.mplus.mn/puuzend-durlagc',
              title: 'Пүүзэнд дурлагч',
              cover:
                'https://ub1.cdn.mplus.mn/images/publisher/square/605187dc_543c2d_0.707.jpg',
              publisher: {
                id: 778,
                name: 'Юнайтед Бизнес Ривюү',
                deep_link: 'mplus://q?view=detail&type=publishers&id=778',
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
      let data = await this.$api.getRetailBooks()
      console.log(data, "<<<<<<<");
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
  