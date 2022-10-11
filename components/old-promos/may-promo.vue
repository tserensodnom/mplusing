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
      promoStats: null,
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
  mounted() {
    this.$axios
      .get('/api/promo/may-2021')
      .then((res) => (this.promoStats = res.data))
    // this.$api.getMayPromoStats().then((data) => (this.promoStats = data))
  },
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
