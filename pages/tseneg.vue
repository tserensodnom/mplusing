<template>
  <div class="w-full grid grid-cols-12 overflow-hidden">
    <!-- top section -->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col"
    >
      <div class="relative mt-4 lg:mt-28 pl-5 sm:pl-0">
        <div class="flex flex-col w-10/12 lg:w-3/5 font-medium text-2xl">
          <vector-tseneg class="mt-2 lg:hidden -z-10" :resizeMultiply="0.7" />
          <vector-tseneg class="mt-7 hidden lg:block" :resizeMultiply="1.5" />
          <p class="z-10 mt-7 lg:text-6xl font-bold uppercase">
            Шилдэг номын сангаар өөрийгөө цэнэглэ
          </p>
          <p class="hidden lg:inline mt-4 text-blueGray-400">
            Бестселлер, сонсдог номууд багтсан
          </p>
        </div>
        <div class="hidden lg:flex flex-row mt-14 space-x-6">
          <a
            class="block w-60 pt-4 pb-3.5 bg-brand rounded-full text-center text-white font-bold"
            href="#plans"
            >Эхлэх</a
          >
          <a
            class="block w-60 py-3.5 border-2 border-gray-400 rounded-full text-center"
            href="https://buy.mplus.mn/coupon"
            >Кодоор идэвхижүүлэх</a
          >
        </div>
        <vector-woman-cat
          class="absolute top-14 right-0 hidden sm:block lg:hidden"
          :resizeMultiply="0.7"
        />
        <vector-woman-cat
          class="absolute top-14 right-0 sm:hidden"
          :resizeMultiply="0.7"
          :play="false"
        />
        <vector-woman-cat
          class="absolute -top-16 -right-80 xl:-top-10 xl:-right-100 hidden lg:block"
          :resizeMultiply="3.1"
        />
        <div
          class="hidden xl:block absolute -top-40 subtle-back-color rounded-full -z-10"
          style="width: 1300px; height: 500px; right: -1000px"
        ></div>
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
          <!-- <p class="font-bold text-xl leading-5">
            Хамгийн багадаа
            <span class="text-brand">90% хэмнэх</span> боломжтой
            хувилбарууд
          </p> -->
          <p class="font-bold text-lg leading-5">
            Танд аль <span class="text-brand">хувилбар</span> нь тохирох вэ?
          </p>
        </div>
        <!-- <vector-woman-question
          class="absolute -top-3 -right-3 xs:right-5 md:-top-8"
        /> -->
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
        <swiper-slide
          class="swiper h-auto w-64 rounded-xl shadow-bluexs bg-white overflow-hidden"
        >
          <a
            :href="
              this.$route.query['mode'] == 'app'
                ? 'mplus://q?view=ott&url=' +
                  $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/subscription/plans/1?mode=app&purchase=1'
                : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/subscription/plans/1?purchase=1'
            "
            class="w-full relative overflow-hidden text-xs flex flex-col justify-between"
          >
            <div class="z-10 w-full flex flex-col pl-3 py-3 pb-4">
              <div class="flex flex-row justify-start items-center space-x-2">
                <lottie
                  :width="50"
                  :height="50"
                  :options="ochluurOptions"
                  v-on:animCreated="ochluurInitAnim"
                  class="lottieElm"
                />
                <vector-ochluur />
              </div>
              <p
                class="font-light text-xs flex flex-row items-end h-28 leading-none mt-1"
              >
                <span>{{ plans[0].days }} хоногт</span>
              </p>
              <div class="flex flex-row font-bold leading-none mt-1">
                <div class="flex flex-col">
                  <p class="text-base leading-4">
                    {{ plans[0].ebook_count }} Цахим
                  </p>
                  <p class="text-base leading-4">
                    {{ plans[0].audio_book_count }} Аудио ном
                  </p>
                </div>
              </div>
            </div>
            <div
              class="z-10 w-full bg-brand h-14 text-white text-center flex flex-row items-center justify-between px-3"
            >
              <p class="text-lg font-bold">
                {{ plans[0].price }}
              </p>
              <div class="flex flex-row items-center space-x-2">
                <p class="text-xs font-light">
                  {{ plans[0].discount }} хэмнэлт
                </p>
                <icon-arrow-left class="transform rotate-180" />
              </div>
            </div>
            <img
              src="@/assets/img/PlanOchluur.jpg"
              class="absolute top-5 right-0 z-0 w-64"
            />
          </a>
        </swiper-slide>
        <swiper-slide
          class="swiper h-auto w-64 rounded-xl shadow-bluexs bg-white overflow-hidden"
        >
          <a
            :href="
              this.$route.query['mode'] == 'app'
                ? 'mplus://q?view=ott&url=' +
                  $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/subscription/plans/2?mode=app&purchase=1'
                : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                  '/book/subscription/plans/2?purchase=1'
            "
            class="w-full relative overflow-hidden text-xs flex flex-col justify-between"
          >
            <div class="z-10 w-full flex flex-col pl-3 py-3 pb-4">
              <div class="flex flex-row justify-start items-center space-x-2">
                <lottie
                  :width="50"
                  :height="50"
                  :options="huchdelOptions"
                  v-on:animCreated="huchdelInitAnim"
                  class="lottieElm"
                />
                <vector-huchdel />
              </div>
              <p
                class="font-light text-xs flex flex-row items-end h-28 leading-none mt-1"
              >
                <span>{{ plans[1].days }} хоногт</span>
              </p>
              <div class="flex flex-row font-bold leading-none mt-1">
                <div class="flex flex-col">
                  <p class="text-base leading-4">
                    {{ plans[1].ebook_count }} Цахим
                  </p>
                  <p class="text-base leading-4">
                    {{ plans[1].audio_book_count }} Аудио ном
                  </p>
                </div>
              </div>
            </div>
            <div
              class="z-10 w-full bg-brand h-14 text-white text-center flex flex-row items-center justify-between px-3"
            >
              <p class="text-lg font-bold">
                {{ plans[1].price }}
              </p>
              <div class="flex flex-row items-center space-x-2">
                <p class="text-xs font-light">
                  {{ plans[1].discount }} хэмнэлт
                </p>
                <icon-arrow-left class="transform rotate-180" />
              </div>
            </div>
            <img
              src="@/assets/img/PlanHuchdel.jpg"
              class="absolute top-5 right-0 z-0 w-64"
            />
          </a>
        </swiper-slide>
        <!-- <swiper-slide class="h-auto w-64 rounded-md shadow-bluexs bg-white">
          <a
            :href="
              this.$route.query['mode'] == 'app'
                ? 'mplus://q?view=ott&url=https://buy.mplusdev.xyz/book/subscription/plans/2'
                : 'https://buy.mplus.mn/book/subscription/plans/2'
            "
            class="block w-full relative overflow-hidden pl-4 pt-4 pb-7 text-xs"
          >
            <div class="w-3/4 flex flex-col">
              <div class="flex flex-row justify-start items-center space-x-2">
                <lottie
                  :width="50"
                  :height="50"
                  :options="plans[1].options"
                  v-on:animCreated="huchdelInitAnim"
                  class="lottieElm"
                />
                <vector-huchdel />
              </div>
              <p class="font-medium leading-none mt-4">
                {{ plans[1].days }} хоногт
              </p>
              <p class="font-medium leading-none mt-1">
                {{ plans[1].description }}
              </p>
              <p class="text-blueGray-400 mt-2">
                {{ plans[1].discount }} хэмнэлт
              </p>
              <div class="flex flex-row font-bold leading-none mt-3">
                <div class="flex flex-col">
                  <p class="text-6xl">{{ plans[1].ebook_count }}</p>
                  <p>Цахим</p>
                  <p>ном</p>
                </div>
                <div class="text-brand">
                  <icon-plus class="mt-6" />
                </div>
                <div class="flex flex-col">
                  <p class="text-6xl">{{ plans[1].audio_book_count }}</p>
                  <p>Аудио</p>
                  <p>ном</p>
                </div>
              </div>
            </div>
            <nuxt-img
              :src="plans[1].img_url"
              class="absolute top-14 -right-20"
            />
          </a>
          <div class="w-full h-10 -mb-5">
            <div
              class="mx-auto h-10 w-3/5 bg-brand rounded-full -mb-5 text-white text-xs font-bold text-center py-2.5"
            >
              {{ plans[1].price }}
            </div>
          </div>
        </swiper-slide> -->
      </swiper>
    </div>
    <!-- empty space -->
    <div class="col-span-12 h-28 lg:h-96" />
    <!-- paragraphs 1 -->
    <div
      id="more"
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col xm:flex-row justify-start mt-4 relative"
    >
      <vector-man-mplus class="mx-auto xm:hidden" :resizeMultiply="0.6" />
      <div
        class="w-full mt-7 xm:mt-0 text-center xm:text-left xm:w-2/3 lg:w-2/5 flex flex-col px-5 sm:px-0 text-sm"
      >
        <p class="font-bold text-xl lg:text-5xl leading-5">
          Зөвхөн <span class="text-brand">Mplus</span> хэрэглэгчдэд
        </p>
        <p class="mt-3 lg:mt-7 text-center xm:text-left">
          Монголын хамгийн анхны, цахим болон сонсдог номыг багтаасан “Цэнэг”
          гишүүнчлэлийн үйлчилгээ Танд хүрч байна. Уран зохиол, хувь хүний
          хөгжлийн шилдэг бүтээлүүдээс сонгон, хэмнэлттэйгээр илүү унших хэмнэлд
          нэгдээрэй.
        </p>
      </div>
      <vector-man-mplus
        class="absolute -top-7 -right-20 xm:-right-10 xm:-top-16 md:-top-20 hidden xm:block lg:hidden"
      />
      <vector-man-mplus
        class="absolute -top-48 -right-10 hidden lg:block"
        :resizeMultiply="2"
      />
    </div>
    <!-- empty space -->
    <div class="col-span-12 h-28 lg:h-80" />
    <!-- paragraphs 2-->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col xm:flex-row justify-end mt-4 relative"
    >
      <vector-woman-scooter class="mx-auto xm:hidden" :resizeMultiply="0.6" />
      <div
        class="mt-7 xm:mt-0 text-center xm:text-right xm:w-2/3 lg:w-1/2 flex flex-col px-5 text-sm"
      >
        <vector-woman-scooter
          class="absolute top-16 -left-48 xs:top-0 xm:-left-32 hidden xm:block lg:hidden"
        />
        <vector-woman-scooter
          class="absolute -top-20 -left-48 hidden lg:block"
          :resizeMultiply="2"
        />
        <p class="font-bold text-xl lg:text-5xl leading-5">
          Хүссэн газраа хүссэн цагтаа
        </p>
        <p class="font-bold text-xl lg:text-5xl leading-5 text-brand">
          унш, сонс
        </p>
        <p class="mt-3 lg:mt-7">
          Алхахдаа эсвэл автобусанд суугаад чихэвчээ зүү, хэн нэгнийг хүлээх
          зуураа номоо нээ… машиндаа, гэртээ байхдаа хөгжмөө чангал… Таны гар
          утсанд номын сан байрлах тул татаж аваад интернетгүй орчинд ч
          үргэлжлүүлсээр байх болно.
        </p>
      </div>
    </div>
    <!-- empty space -->
    <div class="col-span-12 h-28 lg:h-40" />
    <!-- bestsellers -->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col items-center text-center mt-4 relative"
    >
      <p class="font-bold text-xl lg:text-3xl leading-5 text-brand mt-7">
        Бестселлерүүд
      </p>
      <p class="font-bold text-xl lg:text-3xl leading-5">
        албан ёсны эрхтэйгээр
      </p>
      <p class="mt-3 text-sm">Сар бүр шинэ бүтээлүүд нэмэгдэнэ</p>

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
    </div>
    <product-slider :data="bestBooks" class="lg:hidden z-0" />
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6"
    >
      <a
        @click="showTsenegBooks = true"
        class="block mt-3 lg:mt-7 w-3/5 xm:w-2/5 lg:w-1/5 h-10 rounded-full mx-auto border border-gray-400 text-xs font-bold text-center py-2.5"
        >Бүгдийг харах</a
      >
    </div>
    <!-- tseneg pop up -->
    <div
      class="inset-0 z-40 bg-black bg-opacity-0"
      :class="showTsenegBooks ? 'bg-opacity-60 fixed' : 'hidden'"
    ></div>
    <div
      class="fixed overflow-x-hidden transform transition ease-in-out duration-300 inset-0 md:rounded-2xl md:inset-10 xl:inset-x-1/4 mt-10 rounded-t-2xl bg-white shadow-top z-50 flex flex-col"
      :class="showTsenegBooks ? 'translate-y-0' : 'translate-y-beyond'"
    >
      <a
        class="flex flex-row w-full p-2 justify-end"
        @click="showTsenegBooks = false"
      >
        <icon-close styling="w-8 h-8 p-2 bg-gray-100 rounded-full" />
      </a>
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
        <div class="lg:hidden w-full my-4">
          <a
            @click="showTsenegBooks = false"
            href="#mobilePlans"
            class="mx-2 sm:mx-20 flex flex-row items-center justify-center rounded-full relative py-4 bg-brand text-white font-bold text-xs uppercase"
            >Цэнэг үйлчилгээ
            <icon-arrow-left
              class="absolute top-1/3 right-5 transform rotate-180"
          /></a>
        </div>
        <div class="hidden lg:block w-full my-4">
          <a
            @click="showTsenegBooks = false"
            href="#plans"
            class="mx-2 sm:mx-20 flex flex-row items-center justify-center rounded-full relative py-4 bg-brand text-white font-bold text-xs uppercase"
            >Цэнэг үйлчилгээ
            <icon-arrow-left
              class="absolute top-1/3 right-5 transform rotate-180"
          /></a>
        </div>
      </div>
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
        <span class="text-brand">90% хэмнэх</span> боломжтой
      </p>
      <p class="font-bold text-xl lg:text-3xl leading-5">хувилбарууд</p>
      <div
        class="mt-7 pt-4 pb-6 pl-6 pr-5 sm:px-1 w-full flex flex-row justify-between"
      >
        <!-- ochluur plan -->
        <a
          :href="
            this.$route.query['mode'] == 'app'
              ? 'mplus://q?view=ott&url=' +
                $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                '/book/subscription/plans/1?mode=app&purchase=1'
              : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                '/book/subscription/plans/1?purchase=1'
          "
          class="text-left plansHover flex flex-col justify-between h-auto w-4/12 rounded-2xl shadow-bluexs bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-bluelg overflow-hidden relative"
        >
          <div class="z-10 w-full flex flex-col pl-5 py-3 pb-4">
            <div class="flex flex-row justify-start items-center space-x-2">
              <lottie
                :width="50"
                :height="50"
                :options="ochluurOptions"
                v-on:animCreated="ochluurInitAnim"
                class="lottieElm"
              />
              <vector-ochluur />
            </div>
            <p
              class="font-base text-md text-blueGray-400 flex flex-row items-end h-32 leading-none mt-1"
            >
              <span>{{ plans[0].days }} хоногт</span>
            </p>
            <div class="flex flex-row font-bold leading-none mt-1">
              <div class="flex flex-col">
                <p class="text-2xl leading-6">
                  {{ plans[0].ebook_count }} Цахим
                </p>
                <p class="text-2xl leading-6">
                  {{ plans[0].audio_book_count }} Аудио ном
                </p>
              </div>
            </div>
          </div>
          <div
            class="z-10 w-full bg-brand h-16 text-white text-center flex flex-row items-center justify-between px-5"
          >
            <p class="text-2xl font-bold">
              {{ plans[0].price }}
            </p>
            <div class="flex flex-row items-center space-x-2">
              <p class="text-xs font-light">{{ plans[0].discount }} хэмнэлт</p>
              <icon-arrow-left class="transform rotate-180" />
            </div>
          </div>
          <img
            src="@/assets/img/PlanOchluur.jpg"
            class="absolute top-5 right-0 z-0 w-72"
          />
        </a>
        <!-- middle illustration w/words  -->
        <div
          class="w-1/3 h-60 flex flex-col justify-center items-center text-center relative"
        >
          <p class="w-1/3 leading-4 font-medium">
            Танд аль хувилбар нь тохирох вэ?
          </p>
          <vector-woman-question
            class="absolute -bottom-64"
            :resizeMultiply="4"
          />
        </div>
        <!-- huchdel plan -->
        <a
          :href="
            this.$route.query['mode'] == 'app'
              ? 'mplus://q?view=ott&url=' +
                $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                '/book/subscription/plans/2?mode=app&purchase=1'
              : $config.baseUrl.replace('www.mplus', 'buy.mplus') +
                '/book/subscription/plans/2?purchase=1'
          "
          class="text-left plansHover flex flex-col justify-between h-auto w-4/12 rounded-2xl shadow-bluexs bg-white transition duration-300 transform hover:-translate-y-2 hover:shadow-bluelg overflow-hidden relative"
        >
          <div class="z-10 w-full flex flex-col pl-5 py-3 pb-4">
            <div class="flex flex-row justify-start items-center space-x-2">
              <lottie
                :width="50"
                :height="50"
                :options="huchdelOptions"
                v-on:animCreated="huchdelInitAnim"
                class="lottieElm"
              />
              <vector-huchdel />
            </div>
            <p
              class="font-base text-md text-blueGray-400 flex flex-row items-end h-32 leading-none mt-1"
            >
              <span>{{ plans[1].days }} хоногт</span>
            </p>
            <div class="flex flex-row font-bold leading-none mt-1">
              <div class="flex flex-col">
                <p class="text-2xl leading-6">
                  {{ plans[1].ebook_count }} Цахим
                </p>
                <p class="text-2xl leading-6">
                  {{ plans[1].audio_book_count }} Аудио ном
                </p>
              </div>
            </div>
          </div>
          <div
            class="z-10 w-full bg-brand h-16 text-white text-center flex flex-row items-center justify-between px-5"
          >
            <p class="text-2xl font-bold">
              {{ plans[1].price }}
            </p>
            <div class="flex flex-row items-center space-x-2">
              <p class="text-xs font-light">{{ plans[1].discount }} хэмнэлт</p>
              <icon-arrow-left class="transform rotate-180" />
            </div>
          </div>
          <img
            src="@/assets/img/PlanHuchdel.jpg"
            class="absolute top-5 -right-5 z-0 w-72"
          />
        </a>
      </div>
    </div>
    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-96" />
    <!-- unread comments -->
    <div
      class="col-span-12 grid grid-cols-12"
      style="background-color: #ecf3ff"
    >
      <!-- mobile -->
      <div class="col-span-12">
        <swiper
          class="lg:hidden py-10 w-full h-auto"
          :options="{
            slidesPerView: '1.3',
            breakpoints: {
              750: {
                slidesPerView: '2.3',
              },
            },
          }"
        >
          <swiper-slide
            class="flex flex-col px-5 sm:px-10 w-80 h-auto font-medium"
          >
            <unread />
            <div
              class="bg-white mt-8 h-36 mx-auto rounded-2xl relative font-medium text-sm text-center flex flex-col justify-center px-5 items-center"
            >
              <div
                class="-z-10 absolute transform rotate-45 -top-1 left-1/4 h-10 w-10 rounded bg-white"
              />
              <p>
                “Mplus-ийн Цэнэг үйлчилгээ нь ёстой аймар гоё юм байна. Бүх
                асуудлыг шийдсэн байна.”
              </p>
            </div>
          </swiper-slide>

          <swiper-slide
            class="flex flex-col px-5 sm:px-10 w-80 h-auto font-medium"
          >
            <div class="flex flex-row items-center space-x-3 -mt-2">
              <img
                src="@/assets/img/people/01.jpg"
                class="w-10 h-10 rounded-full overflow-hidden"
              />
              <p>Булган</p>
            </div>
            <div
              class="bg-white w-full mt-7 h-36 mx-auto rounded-2xl relative font-medium text-sm text-center flex flex-col justify-center px-5 items-center"
            >
              <div
                class="-z-10 absolute transform rotate-45 -top-1 left-1/4 h-10 w-10 rounded bg-white"
              />
              <p>“Нэг аяга кофений үнээр”</p>
            </div>
          </swiper-slide>
          <swiper-slide
            class="flex flex-col px-5 sm:px-10 w-80 h-auto font-medium"
          >
            <div class="flex flex-row items-center space-x-3 -mt-2">
              <img
                src="@/assets/img/people/02.jpg"
                class="w-10 h-10 rounded-full overflow-hidden"
              />
              <p>Отгонбаяр</p>
            </div>
            <div
              class="bg-white w-full mt-7 h-36 mx-auto rounded-2xl relative font-medium text-sm text-center flex flex-col justify-center px-5 items-center"
            >
              <div
                class="-z-10 absolute transform rotate-45 -top-1 left-1/4 h-10 w-10 rounded bg-white"
              />
              <p>
                "Номын дуу сонсъё гээд Мплас ортол Цэнэг гээд сет гаргачиж.
                Хоолоор яривал гуляш цуйван банштай цай 3-ыг хуушуурны үнээр ав
                гэнэ. Цадталаа сонсоод авъя."
              </p>
            </div>
          </swiper-slide>
          <swiper-slide
            class="flex flex-col px-5 sm:px-10 w-80 h-auto font-medium"
          >
            <div class="flex flex-row items-center space-x-3 -mt-2">
              <img
                src="@/assets/img/people/03.jpg"
                class="w-10 h-10 rounded-full overflow-hidden"
              />
              <p>Анаржин</p>
            </div>
            <div
              class="bg-white w-full mt-7 h-36 mx-auto rounded-2xl relative font-medium text-sm text-center flex flex-col justify-center px-5 items-center"
            >
              <div
                class="-z-10 absolute transform rotate-45 -top-1 left-1/4 h-10 w-10 rounded bg-white"
              />
              <p>
                “Яаж ч бодсон ашигтай юм байна. Хүчдэлийг нь аваад бүх аудио
                номыг нь дуусгацан.”
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div
        class="mt-14 hidden lg:flex col-start-2 col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex-col relative"
      >
        <unread class="mx-auto" />
        <div
          class="bg-white w-3/4 mt-14 h-32 mx-auto rounded-2xl relative font-medium text-center flex flex-col justify-center px-5 items-center"
        >
          <div
            class="z-0 absolute transform rotate-45 -top-1 left-1/3 ml-24 h-10 w-10 rounded bg-white"
          />
          <p>“Mplus-ийн Цэнэг үйлчилгээ нь ёстой аймар гоё юм байна.</p>
          <p>Бүх асуудлыг шийдсэн байна.”</p>
        </div>
        <div class="w-full flex flex-row justify-between my-14 font-bold">
          <div class="w-72">
            <div class="flex flex-row items-center space-x-3">
              <img
                src="@/assets/img/people/01.jpg"
                class="w-14 h-14 rounded-full overflow-hidden"
              />
              <p>Булган</p>
            </div>
            <div
              class="w-full text-sm mt-8 bg-white h-32 rounded-xl relative font-medium text-center flex flex-col justify-center items-center px-5 italic"
            >
              <div
                class="z-10 absolute transform rotate-45 -top-1 left-7 h-7 w-7 bg-white"
              />
              <p>“Нэг аяга кофений үнээр”</p>
            </div>
          </div>
          <div class="w-72">
            <div class="flex flex-row items-center space-x-3">
              <img
                src="@/assets/img/people/02.jpg"
                class="w-14 h-14 rounded-full overflow-hidden"
              />
              <p>Отгонбаяр</p>
            </div>
            <div
              class="w-full text-sm mt-8 bg-white h-40 rounded-xl relative font-medium text-center flex flex-col justify-center items-center px-5 italic"
            >
              <div
                class="z-0 absolute transform rotate-45 -top-1 left-7 h-7 w-7 bg-white"
              />
              <p class="z-10">
                "Номын дуу сонсъё гээд Мплас ортол Цэнэг гээд сет гаргачиж.
                Хоолоор яривал гуляш цуйван банштай цай 3-ыг хуушуурны үнээр ав
                гэнэ. Цадталаа сонсоод авъя."
              </p>
            </div>
          </div>
          <div class="w-72">
            <div class="flex flex-row items-center space-x-3">
              <img
                src="@/assets/img/people/03.jpg"
                class="w-14 h-14 rounded-full overflow-hidden"
              />
              <p>Анаржин</p>
            </div>
            <div
              class="w-full text-sm mt-8 bg-white h-32 rounded-xl relative font-medium text-center flex flex-col justify-center items-center px-5 italic"
            >
              <div
                class="z-10 absolute transform rotate-45 -top-1 left-7 h-7 w-7 bg-white"
              />
              <p>
                “Яаж ч бодсон ашигтай юм байна. Хүчдэлийг нь аваад бүх аудио
                номыг нь дуусгацан.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-96" />
    <!-- paragraphs 1 -->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col xm:flex-row justify-start mt-4 relative"
    >
      <vector-people class="mx-auto xm:hidden" :resizeMultiply="0.3" />
      <div
        class="w-full mt-7 xm:mt-0 text-center xm:text-left xm:w-2/3 lg:w-2/5 flex flex-col px-5 sm:px-0 text-sm"
      >
        <p class="font-bold text-xl lg:text-5xl leading-5">
          Хамт олноо <span class="text-brand">хөгжүүлэхэд</span> ашиглаарай
        </p>
        <p class="mt-3 lg:mt-7">
          Дэлхийн тэргүүлэх компаниуд ажилчдынхаа дунд номын клуб байгуулах
          замаар ажилчдынхаа хувийн болон мэргэжлийн ур чадварыг хөгжүүлээд
          зогсохгүй байгууллагын соёлоо төлөвшүүлэхэд хүчтэй хувь нэмэр
          оруулдаг. Үүнийг амжилттай нэвтрүүлэхэд Цэнэг үйлчилгээ хамгийн
          тохиромжтой.
        </p>
        <p class="mt-14 text-sm sm:text-base font-medium">
          Амжилттай нэвтрүүлсэн компаниуд:
        </p>
        <div class="flex flex-row -ml-4 justify-center xm:justify-start">
          <invision />
          <amazon />
          <zapos />
        </div>
      </div>
      <vector-people
        :resizeMultiply="0.6"
        class="absolute -top-7 -right-20 xm:-right-32 xm:-top-16 md:-top-20 hidden xm:block lg:hidden"
      />
      <vector-people
        class="absolute -top-48 -right-10 hidden lg:block"
        :resizeMultiply="1"
      />
      <div
        class="hidden xl:block absolute -top-0 subtle-back-color rounded-full -z-10"
        style="width: 1300px; height: 400px; right: -800px"
      ></div>
    </div>

    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-80" />
    <!-- paragraphs 2-->
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col xm:flex-row justify-end mt-4 relative"
    >
      <vector-giving-gift class="mx-auto xm:hidden" :resizeMultiply="0.3" />
      <div
        class="mt-7 xm:mt-0 text-center xm:text-right xm:w-2/3 lg:w-1/2 flex flex-col px-5 text-sm"
      >
        <vector-giving-gift
          :resizeMultiply="0.6"
          class="absolute top-16 -left-48 xs:top-0 xm:-left-28 xm:-top-10 hidden xm:block lg:hidden"
        />
        <vector-giving-gift
          class="absolute -top-20 -left-48 hidden lg:block"
          :resizeMultiply="1"
        />
        <p class="font-bold text-xl lg:text-5xl leading-5">
          Бусдыг <span class="text-brand">баярлуулж</span> бэлэглээрэй
        </p>
        <p class="mt-3 lg:mt-7">
          Цэнэг үйлчилгээ ашиглах эрхийг харилцагч байгууллага, хамтрагч,
          хайртай нэгэндээ бэлэглэхэд үнэ цэнтэй бэлэг болж чадна.
        </p>
        <p class="mt-14 text-sm sm:text-base font-medium">
          Харилцагчиддаа бэлэглэсэн байгууллагууд:
        </p>
      </div>
    </div>

    <!-- placing it outside because it cant fit in there -->
    <div
      class="flex col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex-wrap justify-center xm:justify-end sm:flex-row sm:justify-end"
    >
      <img src="~/assets/img/logoCallPro.png" />
      <img src="~/assets/img/logoMig.png" />
      <img src="~/assets/img/logoSangiinYam.png" />
    </div>
    <!-- empty space -->
    <div class="flex col-span-12 h-28 lg:h-40" />
    <!-- CTA contact -->
    <div
      class="flex col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex-col justify-center"
    >
      <a
        class="block w-3/5 sm:w-1/2 xl:w-1/4 rounded-full py-4 bg-brand mx-auto text-center text-white font-medium"
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
          name: 'Цэнэг үйлчилгээний нөхцөл',
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
      title: 'Цэнэг | Цахим ном түрээслэх | Mplus.mn',
      meta: [
      {
        hid: 'description',
        property: 'description',
        content: 'Монголын хамгийн анхны, цахим болон сонсдог номыг багтаасан “Цэнэг” гишүүнчлэлийн үйлчилгээ Танд хүрч байна. Уран зохиол, хувь хүний хөгжлийн шилдэг бүтээлүүдээс сонгон, хэмнэлттэйгээр илүү унших хэмнэлд нэгдээрэй.',
      },
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: 'Цэнэг | Цахим ном түрээслэх | Mplus.mn',
      },
      {
        hid: 'ogdescription',
        property: 'og:description',
        content: 'Монголын хамгийн анхны, цахим болон сонсдог номыг багтаасан “Цэнэг” гишүүнчлэлийн үйлчилгээ Танд хүрч байна. Уран зохиол, хувь хүний хөгжлийн шилдэг бүтээлүүдээс сонгон, хэмнэлттэйгээр илүү унших хэмнэлд нэгдээрэй.',
      },
    ],
    }
  },
}
</script>

<style></style>
