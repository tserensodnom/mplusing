<template>
  <div v-if="promoStats" class="w-full grid grid-cols-12 overflow-hidden">
    <div
      class="col-span-12 sm:col-start-2 sm:col-span-10 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 2xl:col-start-4 2xl:col-span-6 flex flex-col px-5 sm:px-0"
    >
      <div class="flex flex-col sm:flex-row mt-8 sm:mt-20">
        <div class="flex flex-col w-full sm:w-1/2 font-light text-sm">
          <p class="leading-none text-brand">5-р сарын урамшуулал</p>
          <p class="text-7xl font-bold">
            <span class="text-brand">May</span> <br />Promo
          </p>
          <p class="leading-none font-bold">
            Аудио номтой, БҮР 3-ширхэг iPAD-тай
          </p>
          <p class="mt-3">
            “Mplus”-аас ном худалдан аваад 5-р сарыг дуустал үргэлжлэх
            урамшуулалт уралдаанд оролцоорой!
          </p>
        </div>
        <div class="mt-7 sm:mt-0 flex flex-col w-1/2 relative">
          <img
            class="z-30 absolute top-0 -left-10 sm:left-0"
            src="~/assets/img/ipad1.png"
          />
          <img
            class="z-20 pl-14 absolute top-0 left-1/3 sm:left-1/2"
            src="~/assets/img/ipad2.png"
          />
          <img
            class="z-30 sm:z-10 pl-14 absolute -top-5 sm:top-0 left-full"
            src="~/assets/img/ipad3.png"
          />
        </div>
      </div>
      <div
        class="lg:flex lg:flex-row items-center w-full text-sm bg-blueGray-100 rounded-lg h-auto py-5 lg:py-0 lg:h-40 mt-40 xs:mt-52 sm:mt-16 relative"
      >
        <img
          class="absolute top-2 xs:-top-4 lg:-top-14 -left-2 xs:left-0 h-44 xs:h-52 w-44 xs:w-52 lg:h-72 lg:w-72"
          src="~/assets/img/montegift.png"
          alt=""
        />
        <div class="w-1/2 lg:w-3/12"></div>
        <div
          class="ml-44 xs:ml-52 sm:ml-60 lg:ml-14 w-2/5 lg:w-3/12 flex flex-col"
        >
          <p class="font-bold">
            “Монте Кристо Гүн III”<br />
            Аудио ном
          </p>
          <p class="font-light">
            30.000₮-өөс дээш худалдан авалт хийсэн хэрэглэгчид Цоо шинэ аудио
            ном бэлгэнд авах болзол хангалаа.
          </p>
        </div>
        <div
          class="w-full lg:w-5/12 flex flex-row justify-center mt-8 xs:mt-16 sm:justify-start sm:ml-60 lg:ml-0 sm:mt-6 lg:mt-0 font-bold space-x-5 lg:justify-evenly"
        >
          <div class="flex flex-col items-center relative">
            <p class="text-6xl">{{ promoStats.users['30k'] }}</p>
            <p>
              <span class="text-brand">болзол </span>хангасан хэрэглэгчийн тоо
            </p>
            <vector-curver-arrow
              class="hidden lg:block absolute -bottom-14 -left-14"
            />
          </div>
        </div>
      </div>
      <div
        class="mt-12 lg:mt-24 genres w-full flex flex-wrap justify-start text-xs"
      >
        <a
          v-for="(item, index) in [
            'Яаж оролцох вэ?',
            'Урамшууллын хугацаа:',
            'Шалгаруулалт:',
            'Бяцхан дүрэм:',
            'Урамшуулал болон шагнал',
          ]"
          :key="index + 231"
          class="mr-3 mb-3 px-4 pt-2 h-8 transition duration-200 ring-opacity-50 bg-white rounded-full shadow-bluexs text-xs"
          :class="`ring-${color()}`"
          :href="'#QA' + (index + 1)"
        >
          <p class="line-clamp-1 overflow-ellipsis">
            <span class="font-bold" :class="`text-${color()}`">#</span>
            {{ item }}
          </p>
        </a>
      </div>
      <div class="w-full flex flex-col mt-10">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col text-left">
            <p class="font-bold text-2xl">
              <span class="text-brand">Top 50</span>
              <span class="hidden sm:inline"> - Худалдан авагчид</span>
            </p>
            <p class="text-sm font-light text-blueGray-400">
              Уралдааны явц / Realtime
            </p>
          </div>
          <div class="flex flex-col text-right">
            <!-- <count-down-date /> -->
            Дууссан
            <p class="text-sm font-light text-blueGray-400">Үлдсэн хугацаа</p>
          </div>
        </div>
        <div
          class="mt-4 border-t border-blueGray-100 px-2 xs:px-5 pt-2 w-full grid grid-cols-12 text-left text-sm font-light text-blueGray-400"
        >
          <div class="col-span-2 sm:col-span-1 ml-3">№</div>
          <div class="col-span-2 sm:col-span-1">Зураг</div>
          <div class="hidden xs:block col-span-2">Дугаар</div>
          <div class="col-span-3">Нэр</div>
          <div class="hidden sm:block col-span-2">И-мэйл</div>
          <div class="col-span-2"></div>
          <div class="col-span-3 xs:col-span-1 line-clamp-1 overflow-ellipsis">
            Нийт дүн
          </div>
        </div>
        <div class="w-full max-h-103 flex-nowrap overflow-y-scroll">
          <div
            v-for="(buyer, index) in promoStats.top_buyers"
            :key="index"
            class="px-2 xs:px-5 py-2 my-1 w-full grid grid-cols-12 text-xs"
            :class="
              buyer.rank < 4
                ? 'bg-blueGray-100 rounded-md'
                : 'border-b border-blueGray-100'
            "
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="buyer.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <img
                v-else-if="buyer.rank == 2"
                class="w-7 h-auto"
                src="~/assets/img/rank2.png"
              />
              <img
                v-else-if="buyer.rank == 3"
                class="w-7 h-auto"
                src="~/assets/img/rank3.png"
              />
              <p v-else class="ml-2 mx-auto text-center">{{ buyer.rank }}</p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  buyer.user_image
                    ? buyer.user_image
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ buyer.user_id }}
            </div>
            <div
              class="col-span-3 flex items-center line-clamp-1 overflow-ellipsis"
            >
              {{ buyer.user_name }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ buyer.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div class="col-span-3 xs:col-span-1 flex items-center">
              {{ priceFormat(buyer.total) }}
            </div>
          </div>
        </div>
        <div v-if="promoStats.me" class="w-full mt-7">
          <div class="ml-10 flex flex-col space-y-2">
            <div
              v-for="index in 3"
              :key="index"
              class="bg-blueGray-200 h-1.5 w-1.5 rounded-full"
            ></div>
          </div>
          <p class="font-bold text-2xl mt-7">
            <span class="text-brand">Таны </span>Худалдан авалт
          </p>
          <div
            class="px-2 xs:px-5 py-4 my-2 w-full grid grid-cols-12 text-xs rounded-md border border-brand"
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="promoStats.me.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <img
                v-else-if="promoStats.me.rank == 2"
                class="w-7 h-auto"
                src="~/assets/img/rank2.png"
              />
              <img
                v-else-if="promoStats.me.rank == 3"
                class="w-7 h-auto"
                src="~/assets/img/rank3.png"
              />
              <p v-else class="ml-4 mx-auto text-center">
                {{ promoStats.me.rank }}
              </p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  promoStats.me.user_image
                    ? promoStats.me.user_image
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ promoStats.me.user_id }}
            </div>
            <div
              class="col-span-3 flex items-center line-clamp-1 overflow-ellipsis"
            >
              {{ promoStats.me.user_name }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ promoStats.me.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div
              class="col-span-3 xs:col-span-1 flex items-center font-bold text-lg"
            >
              {{ priceFormat(promoStats.me.total) }}
            </div>
          </div>
        </div>
        <div
          class="w-full my-4 p-5 rounded-lg border border-blueGray-100 flex flex-col xm:flex-row"
        >
          <img
            class="rounded-md flex-shrink-0 w-full xm:w-52 sm:w-72 md:w-80 lg:w-96"
            src="~/assets/img/winners-prize.jpg"
            alt=""
          />
          <div
            class="flex flex-col flex-grow justify-center items-start xm:pl-5"
          >
            <p class="rounded-full text-white px-3 py-1 bg-brand text-xs mt-3">
              5 сарын 14
            </p>
            <p class="text-lg sm:text-2xl font-bold mt-1 xm:mt-3">
              Уралдааны шагнал “iPad”-ууд ирлээ 🔥
            </p>
          </div>
        </div>
        <div class="w-full flex flex-col sm:flex-row font-light text-sm">
          <div class="flex flex-col w-full sm:w-1/2 pr-0 sm:pr-14">
            <p id="QA1" class="leading-none font-bold mt-7 text-base">
              Яаж оролцох вэ?
            </p>
            <p class="mt-3">
              “Mplus”-аас 30,000₮ ба түүнээс дээш үнийн дүнгээр худалдан авалт
              хийсэн хэрэглэгч бүр “Монте Кристо III” цоо шинэ аудио номыг
              бусдаас түрүүлж авна. “Монте Кристо III” аудио номын хэсгээс
              сонсох:
              <a class="text-brand" href="https://youtu.be/-mkk68xypKM"
                >https://youtu.be/-mkk68xypKM</a
              >
            </p>
            <p class="mt-3">
              Түүгээр ч зогсохгүй, 5-р сарын 5-наас 31-ний өдрийг дуусталх
              хугацаанд хамгийн өндөр дүнгээр худалдан авалт хийсэн 3 хэрэглэгч
              тус бүр “iPad Air”-ийн эзэн болно. “iPad Air: 10.9-inch Wi-Fi
              64GB”-ийн загварыг дараах холбоосоор харна уу.
              <a class="text-brand" href="https://www.apple.com/ipad-air/"
                >https://www.apple.com/ipad-air/</a
              >
            </p>
            <p id="QA2" class="leading-none font-bold mt-7 text-base">
              Урамшууллын хугацаа:
            </p>
            <p class="mt-3">
              2021 оны 5-р сарын 5-ны 00:00 цагаас 6-р сарын 1-ний 00:00 (GMT+8,
              Улаанбаатар) цаг хүртэл үргэлжилнэ.
            </p>
            <p id="QA3" class="leading-none font-bold mt-7 text-base">
              Шалгаруулалт:
            </p>
            <ul class="mt-3 space-y-3">
              <li>
                Урамшуулал болон шалгаруулалтын явцыг Facebook/mplus.mongolia
                пэйж болон www.mplus.mn веб хуудсаар зарлана
              </li>
              <li>
                “Монте Кристо III” аудио ном урамшуулалд авах болзол хангасан
                хэрэглэгчдийн тоог зарлах бөгөөд тэдгээр хэрэглэгчдийн имэйл
                хаягруу нь мэдэгдэл явуулна.
              </li>
              <li>
                Урамшуулалт хугацаанд худалдан авалтын нийт үнийн дүнгээр
                тэргүүлж буй 50 хэрэглэгчийн ID болон нийт худалдан авалтын дүнг
                урамшууллын хугацаанд Facebook/mplus.mongolia пэйж болон
                www.mplus.mn веб хуудсаар зарлаж байх болно.
              </li>
              <li>
                Хэрэглэгчийн ID дугаарыг Та бүхэн өөрийн iOS, Android, Huawei
                аппликэйшний Профайл зураг дээр дарж хараарай.
              </li>
            </ul>
          </div>
          <div class="flex flex-col w-full sm:w-1/2 pr-0 sm:pr-5">
            <p id="QA4" class="leading-none font-bold mt-7 text-base">
              Бяцхан дүрэм:
            </p>
            <ul class="mt-3 space-y-3">
              <li>
                Mplus аппликэйшн болон веб хуудсаар дамжуулан урамшууллын
                хугацаанд худалдан авсан бүхий л ном, үйлчилгээ багтана.
              </li>
              <li>
                Хямдралтай ном болон Цэнэг үйлчилгээний худалдан авалтын дүн
                урамшуулалд төлбөр төлсөн дүнгээрээ тооцогдоно.
              </li>
              <li>
                2021 оны 5-р сарын 4-ний 23:59 цагаас өмнөх худалдан авалтын дүн
                урамшууллын дүнд тооцогдохгүй гэдгийг анхаараарай.
              </li>
              <li>
                Техникийн саатал, интернэт холболт зэргээс үүдэж худалдан
                авалтаа гүйцэтгэж чадаагүй бол заасан хугацаанд худалдан авалтын
                оролдлого эхлүүлсэн байсан ч тооцох боломжгүй гэдгийг
                анхаараарай.
              </li>
            </ul>
            <p id="QA5" class="leading-none font-bold mt-7 text-base">
              Урамшуулал болон шагнал
            </p>
            <p class="leading-none font-bold mt-7">6-р сарын 3-ны өдөр:</p>
            <ul class="mt-3 space-y-3">
              <li>
                Цоо шинээр нийтлэгдэх “Монте Кристо III” аудио номыг авах тусгай
                кодыг болзол хангасан хэрэглэгч бүрийн бүртгэлтэй имэйл хаягт
                илгээх болно.
              </li>
              <li>
                Урамшуулалт хугацаанд хамгийн өндөр үнийн дүнгээр худалдан авалт
                хийсэн 3 хэрэглэгчийн ID дугаар, бүртгэлтэй имэйл хаягийг
                зарлана.
              </li>
            </ul>
            <p class="leading-none font-bold mt-7">6-р сарын 7-ны өдөр:</p>
            <ul class="mt-3 space-y-3">
              <li>
                Mplus оффис дээр уралдаанд тэргүүлсэн 3 хэрэглэгчийг хүлээн авч
                “iPad Air” гардуулна.
              </li>
              <li>Энэ үеэр зураг авахуулж, сошиал сувгуудаар нийтлэх болно.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tags from '~/components/description/Tags.vue'
import VectorCurverArrow from '~/components/illustrations/VectorCurverArrow.vue'
import CountDownDate from '~/components/CountDownDate'

export default {
  head: {
    title: '5-р сарын урамшуулал',
  },
  components: { VectorCurverArrow, Tags, CountDownDate },
  data() {
    return {
      promoStats: {
        users: {
          '10k': 1480,
          '20k': 667,
          '30k': 388,
        },
        top_buyers: [
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/1d6ab1a2aaaecda2c717ee2b0cff705a83d4edda.jpg',
            user_id: 188212,
            user_name: 'Б. Ууганбаяр',
            user_email: '***ero@yahoo.com',
            total: 2340598,
            rank: 1,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/c296bbfae7b9ada8246ac9dd6eb84d7e1f95e59c.jpg',
            user_id: 10666,
            user_name: 'Chimgee Luvsan',
            user_email: '***ilt@yahoo.com',
            total: 2249348,
            rank: 2,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/5772baa90fe1265ea169410461676de68e3771d5.jpg',
            user_id: 10551,
            user_name: 'lhagvadulam Ulambayar',
            user_email: '***.hr@gmail.com',
            total: 2244248.5,
            rank: 3,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/a9d99d7d1e74ec9baee624e9e289eab0c10790e0.jpg',
            user_id: 104825,
            user_name: 'Sekv Sekv',
            user_email: '***ekv@yahoo.com',
            total: 1851848,
            rank: 4,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/0a2d1032bae432038b0ab6f9818631d87c2430c5.jpg',
            user_id: 141979,
            user_name: 'Давааням Алтан-Очир',
            user_email: '***ian@yahoo.com',
            total: 1663598,
            rank: 5,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/631f5ffe805f2ee12449b85ad724316a92d08b5a.jpg',
            user_id: 33713,
            user_name: 'Munkh Hishig',
            user_email: '***gee@gmail.com',
            total: 1308647,
            rank: 6,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/abf8cc1d6cdd45acb7b3c4a468151a6b74ce9c66.jpg',
            user_id: 243981,
            user_name: ' ',
            user_email: '***115@gmail.com',
            total: 671050,
            rank: 7,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/f903e901df78ad98eab40561fc134ff15ff413d8.jpg',
            user_id: 211870,
            user_name: 'Zoki',
            user_email: '***mgl@gmail.com',
            total: 506898,
            rank: 8,
          },
          {
            user_image: null,
            user_id: 247648,
            user_name: 'Хэрэглэгч1620472220',
            user_email: '***ina@hotmail.com',
            total: 373999,
            rank: 9,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/775f09051f2acfdef02c7f76b3f2dc9b65d897a6.jpg',
            user_id: 118080,
            user_name: 'Haliunaa Altangerel',
            user_email: '***a92@yahoo.com',
            total: 347700,
            rank: 10,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/d27660fa5561205a60505948bc15f67e8dae8ef4.jpg',
            user_id: 225225,
            user_name: 'Норовцэрэн',
            user_email: '***enb@gmail.com',
            total: 297200,
            rank: 11,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/ce06115b596dbf743369cd189b1b5f0933497bb3.jpg',
            user_id: 53292,
            user_name: 'О.Оюунболд',
            user_email: '***r99@gmail.com',
            total: 254749,
            rank: 12,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/a92c66bb3b04d1b34ec5619362e3d92f8a37be62.jpg',
            user_id: 248982,
            user_name: 'Dalaijargal',
            user_email: '***579@gmail.com',
            total: 201399,
            rank: 13,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/e3ffacf9fe43ba0b955d460072e306cddb2713ff.jpg',
            user_id: 93365,
            user_name: 'Б. Намуун',
            user_email: '***jin@yahoo.com',
            total: 170500,
            rank: 14,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/50fc8a446dba49c41f9adcae96ed42c39009f41d.jpg',
            user_id: 241022,
            user_name: 'Хэрэглэгч1618121873',
            user_email: '***a73@yahoo.com',
            total: 165499,
            rank: 15,
          },
          {
            user_image: null,
            user_id: 229996,
            user_name: 'Хэрэглэгч1612074828',
            user_email: '***044@gmail.com',
            total: 154949,
            rank: 16,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/530c5704ea970ee1f88d1ecf2925df7a18e221d0.jpg',
            user_id: 248594,
            user_name: 'Azuka',
            user_email: '***gii@gmail.com',
            total: 153350,
            rank: 17,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/abb8dc9f837ab65339837553dfaf7b766c95e8be.jpg',
            user_id: 92440,
            user_name: 'Zolbayar Ulaankhuu',
            user_email: '***d75@yahoo.com',
            total: 148300,
            rank: 18,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/9006289732715c565b8656be58d7561821102f71.jpg',
            user_id: 246523,
            user_name: 'Хэрэглэгч1620076237',
            user_email: '***770@gmail.com',
            total: 146150,
            rank: 19,
          },
          {
            user_image: null,
            user_id: 248209,
            user_name: 'Хэрэглэгч1620800997',
            user_email: '***ii5@gmail.com',
            total: 145850,
            rank: 20,
          },
          {
            user_image: null,
            user_id: 199086,
            user_name: 'Shur',
            user_email: '***e77@gmail.com',
            total: 138900,
            rank: 21,
          },
          {
            user_image: null,
            user_id: 247590,
            user_name: 'Батцэцэг',
            user_email: '***918@gmail.com',
            total: 134900,
            rank: 22,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/c994497b38e4c46ded27bcb8401ffd4c97c98d18.jpg',
            user_id: 193678,
            user_name: 'Хэрэглэгч1603143043',
            user_email: '***u01@gmail.com',
            total: 134400,
            rank: 23,
          },
          {
            user_image: null,
            user_id: 23184,
            user_name: 'urantsetseg',
            user_email: '***seg@gmail.com',
            total: 128400,
            rank: 24,
          },
          {
            user_image: null,
            user_id: 230193,
            user_name: 'Хэрэглэгч1612192123',
            user_email: '***r88@gmail.com',
            total: 128300,
            rank: 25,
          },
          {
            user_image: null,
            user_id: 165868,
            user_name: 'Tsevelsuren',
            user_email: '***ren@gmail.com',
            total: 114899,
            rank: 26,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/a6db49017f35c7c1e838378e08a9f33de291d9d1.jpg',
            user_id: 13178,
            user_name: 'Erdenesaikhan Mijiddorj',
            user_email: '***anm@gmail.com',
            total: 114600,
            rank: 27,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/b52688eac7d0255370e83ca5e8467559a5311c12.jpg',
            user_id: 234549,
            user_name: 'Заяа',
            user_email: '***ooe@icloud.com',
            total: 112999,
            rank: 28,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/6d26fac9d79bb90305fe7b23edbe3dd838b36f3a.jpg',
            user_id: 151560,
            user_name: 'Nyamsuren Enkhjargal',
            user_email: '***ren@gmail.com',
            total: 109900,
            rank: 29,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/3222b9e6539d0788c741f1c72b0b50823098ec4a.jpg',
            user_id: 157977,
            user_name: 'Баяр',
            user_email: '',
            total: 106400,
            rank: 30,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/61315f5714974f0f647c5df290b9fd1e04954510.jpg',
            user_id: 249243,
            user_name: 'Заяа',
            user_email: '***759@gmail.com',
            total: 104300,
            rank: 31,
          },
          {
            user_image: null,
            user_id: 248102,
            user_name: 'Хэрэглэгч1620739685',
            user_email: '***972@gmail.com',
            total: 104200,
            rank: 32,
          },
          {
            user_image: null,
            user_id: 249541,
            user_name: 'Хэрэглэгч1621747078',
            user_email: '***uwd@gmail.com',
            total: 102800,
            rank: 33,
          },
          {
            user_image: null,
            user_id: 109113,
            user_name: 'B. Undarmaa',
            user_email: '***632@gmail.com',
            total: 101800,
            rank: 34,
          },
          {
            user_image: null,
            user_id: 231994,
            user_name: 'Шүрээ',
            user_email: '***104@gmail.com',
            total: 100999,
            rank: 35,
          },
          {
            user_image: null,
            user_id: 243485,
            user_name: 'Чинхүслэн',
            user_email: '***mgl@gmail.com',
            total: 99900,
            rank: 36,
          },
          {
            user_image: null,
            user_id: 249672,
            user_name: 'Халиун',
            user_email: '***iun@gmail.com',
            total: 99900,
            rank: 37,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/83c5399d37db84ffacd90207dfde2ba55b95decb.jpg',
            user_id: 244307,
            user_name: ' ',
            user_email: '***oob@yahoo.com',
            total: 99900,
            rank: 38,
          },
          {
            user_image: null,
            user_id: 208176,
            user_name: 'Хэрэглэгч1605185077',
            user_email: '***601@gmail.com',
            total: 99900,
            rank: 39,
          },
          {
            user_image: null,
            user_id: 33316,
            user_name: 'Gerel Tseyenregzen',
            user_email: '***zen@gmail.com',
            total: 99900,
            rank: 40,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/580ba5990abc58b33affd4d5ccc746c12f35fa21.jpg',
            user_id: 180928,
            user_name: 'Davaanorov L',
            user_email: '***nrv@gmail.com',
            total: 99000,
            rank: 41,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/deb31cf99b58baf38aec0254cbcc31751549ac97.jpg',
            user_id: 118797,
            user_name: 'Ariunbold Jadamba',
            user_email: '***rik@gmail.com',
            total: 97149,
            rank: 42,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/929aa0c39caf5b1f86cb5751ee35ca11bce6f320.jpg',
            user_id: 20412,
            user_name: 'Serena Chow',
            user_email: '***san@yahoo.com',
            total: 96800,
            rank: 43,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/5a8e4cec0f12020219617ffbef9a2e90ef4b026e.jpg',
            user_id: 152198,
            user_name: 'Eegii Eegii',
            user_email: '***402@gmail.com',
            total: 95000,
            rank: 44,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/e1f0a9fc132ee4db55bc0fdd653e816c7c17a6a3.jpg',
            user_id: 72486,
            user_name: 'Биндэръяа Биндка',
            user_email: '***fer@yahoo.com',
            total: 94900,
            rank: 45,
          },
          {
            user_image: null,
            user_id: 112122,
            user_name: 'batbuyan khukhuu',
            user_email: '***ngs@gmail.com',
            total: 94899,
            rank: 46,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/a86f2ba9bf675377e8971d48b9facd4e651ff288.jpg',
            user_id: 203032,
            user_name: 'Хэрэглэгч1604313756',
            user_email: '***bl7@gmail.com',
            total: 92200,
            rank: 47,
          },
          {
            user_image: null,
            user_id: 11824,
            user_name: 'Mooggie',
            user_email: '***e.g@gmail.com',
            total: 90200,
            rank: 48,
          },
          {
            user_image: null,
            user_id: 249113,
            user_name: 'Хэрэглэгч1621474559',
            user_email: '***999@gmail.com',
            total: 89300,
            rank: 49,
          },
          {
            user_image:
              'https://ub1.cdn.mplus.mn/images/avatars/66534bd626dd1a010cb89534e5b5a34195e39e38.jpg',
            user_id: 201379,
            user_name: 'Хэрэглэгч1604006039',
            user_email: '***raa@gmail.com',
            total: 88449,
            rank: 50,
          },
        ],
        me: null,
      },
    }
  },
  methods: {
    priceFormat(value) {
      return parseInt(value).toLocaleString()
    },
    color() {
      const number = Math.floor(Math.random() * 5)
      if (number == 1) {
        return 'red-400'
      } else if (number == 2) {
        return 'yellow-400'
      } else if (number == 3) {
        return 'green-400'
      } else if (number == 4) {
        return 'indigo-400'
      } else {
        return 'pink-400'
      }
    },
  },
  // mounted() {
  //   this.$axios
  //     .get('/api/promo/may-2021')
  //     .then((res) => (this.promoStats = res.data))
  // },
}
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #ebeff8;
  display: none;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #9aa6be;
  border-radius: 15px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
