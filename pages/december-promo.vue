<template>
  <div
    v-if="promoStatHour && promoStatCount && promoStatPurchase"
    class="w-full grid grid-cols-12 overflow-hidden"
  >
    <div
      class="
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-4 2xl:col-span-6
        flex flex-col
        px-5
        sm:px-0
      "
    >
      <div
        class="
          h-100
          lg:h-103
          xl:h-103
          pb-10
          sm:pb-0
          relative
          lg:pt-20
          px-5
          sm:px-0
        "
      >
        <div class="flex flex-col sm:flex-row">
          <div
            class="
              flex flex-col
              w-full
              sm:w-1/2
              font-light
              text-sm
              z-50
              text-white
            "
          >
            <vector-xmas-title
              :customStyle="'w-60 xs:w-96 lg:w-101 mt-10'"
            ></vector-xmas-title>
            <p class="mt-10 font-bold text-lg">12 сарын 1-31 дуустал</p>
            <p class="mt-3">
              Энэ жилийн унших зорилгоо гүйцээж, ирэх жилийнхээ хүслийн
              жагсаалтыг төлөвлөн, уншмаар сонсмоор байгаа номуудаа Mplus-аас
              шилж сонгон цуглуулахын сацуу бэлэгтэй уралдаандаа дурлан
              оролцоорой. Таны өөртөө хийж буй хамгийн чухал хөрөнгө оруулалтыг
              Mplus нь дэмжин урамшуулья. Амжилт 🙂
            </p>
          </div>
        </div>
        <!-- <div class="flex flex-row flex-wrap xs:flex-nowrap mt-14 sm:mt-9 2xl:mt-12 xs:space-x-5">
          <a
            class="block w-full xs:w-1/2 text-xs sm:text-base sm:w-60 pt-4 pb-3.5 bg-red-500 rounded-full text-center text-white font-bold relative overflow-hidden"
          >
            <p>Эхлэх</p>
            <vector-snow class="absolute inset-x-0 -bottom-9" :resizeMultiply="2"></vector-snow>
          </a>
        </div> -->
      </div>
      <div
        class="absolute inset-x-0 h-100 lg:h-103 xl:h-103 -z-20 overflow-hidden"
        :style="{
          'background-image':
            'url(' + require('../assets/img/xmas/xmasback.jpg') + ')',
          'background-repeat': 'no-repeat',
          'background-size': 'cover',
          'background-position': 'center',
        }"
      >
        <img
          src="~/assets/img/xmas/xmasgirl.png"
          alt="yellowgirl"
          class="
            absolute
            hidden
            sm:block
            bottom-0
            right-0
            sm:-right-20
            md:right-10
            xl:right-40
            2xl:right-80
            -z-10
            w-60
            sm:w-100
            lg:w-103
          "
        />
      </div>
      <div
        class="mt-3 sm:mt-10 genres w-full flex flex-wrap justify-start text-xs"
      >
        <a
          v-for="(item, index) in [
            'Хэрхэн оролцох вэ?',
            'Урамшууллын хугацаа:',
            'Дүрэм:',
            'Шалгаруулалт:',
            'Шагнал гардуулах:',
          ]"
          :key="index + 231"
          class="
            mr-3
            mb-3
            px-4
            pt-2
            h-8
            transition
            duration-200
            ring-opacity-50
            bg-white
            rounded-full
            shadow-bluexs
            text-xs
          "
          :class="`ring-${color()}`"
          :href="'#QA' + (index + 1)"
        >
          <p class="line-clamp-1 overflow-ellipsis">
            <span class="font-bold" :class="`text-${color()}`">#</span>
            {{ item }}
          </p>
        </a>
      </div>
      <div
        class="
          flex flex-col-reverse
          lg:flex-row
          items-center
          lg:justify-between lg:px-20
          w-full
          text-sm
          bg-blueGray-100
          rounded-lg
          h-auto
          py-5
          mt-12
          relative
        "
      >
        <div class="flex flex-row justify-center font-bold">
          <div class="flex flex-col items-center relative">
            <count-down-date />
            <p>Үлдсэн хугацаа</p>
          </div>
        </div>

        <vector-xmas-lights
          class="hidden lg:block absolute top-0 -left-2"
        ></vector-xmas-lights>

        <div
          class="
            w-full
            lg:w-1/2
            h-14
            lg:border-l
            border-white
            relative
            flex flex-col
            lg:flex-row
            items-center
            justify-between
            lg:justify-end
            pl-10
          "
        >
          <p class="text-2xl font-bold hidden lg:block lg:mr-10">Шагнал</p>
          <div class="w-1/3 lg:hidden"></div>
          <div
            class="
              absolute
              lg:static
              inset-x-0
              -top-14
              lg:w-60 lg:inset-y-0 lg:right-0
              flex
              items-center
              justify-center
            "
          >
            <img class="w-40 lg:w-60" src="~/assets/img/xmas/xmaswinner.png" />
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col mt-20">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div class="flex flex-col text-left">
            <p class="font-bold text-2xl">
              <span class="text-brand">Top 50</span>
              <span class="hidden sm:inline"> - Оролцогч</span>
            </p>
            <p class="text-sm font-light text-blueGray-400">Уралдааны явц</p>
          </div>
          <div
            class="
              mt-5
              sm:mt-0
              flex flex-row
              bg-blueGray-200
              rounded-2xl
              p-2
              text-xs text-blueGray-500
              font-bold
              space-x-2
            "
          >
            <div
              @click="activeTab = 'totalbuy'"
              class="cursor-pointer p-4 rounded-2xl transition duration-300"
              :class="{
                'text-brand bg-white shadow-sm': activeTab == 'totalbuy',
              }"
            >
              Худалдан авалт
            </div>
            <div
              @click="activeTab = 'totallisten'"
              class="cursor-pointer p-4 rounded-2xl transition duration-300"
              :class="{
                'text-brand bg-white shadow-sm': activeTab == 'totallisten',
              }"
            >
              Сонссон цаг
            </div>
            <div
              @click="activeTab = 'totalown'"
              class="cursor-pointer p-4 rounded-2xl transition duration-300"
              :class="{
                'text-brand bg-white shadow-sm': activeTab == 'totalown',
              }"
            >
              Номын тоо
            </div>
          </div>
        </div>
        <div
          class="
            mt-4
            border-t border-blueGray-100
            px-2
            xs:px-5
            pt-2
            w-full
            grid grid-cols-12
            text-left text-sm
            font-light
            text-blueGray-400
          "
        >
          <div class="col-span-2 sm:col-span-1 ml-3">№</div>
          <div class="col-span-2 sm:col-span-1">Зураг</div>
          <div class="hidden xs:block col-span-2">Дугаар</div>
          <div class="col-span-3">Нэр</div>
          <div class="hidden sm:block col-span-2">И-мэйл</div>
          <div class="col-span-2"></div>
          <div class="col-span-3 xs:col-span-1 line-clamp-1 overflow-ellipsis">
            <span v-if="activeTab == 'totalbuy'">Төгрөг</span>
            <span v-if="activeTab == 'totallisten'">Минут</span>
            <span v-if="activeTab == 'totalown'">Ширхэг</span>
          </div>
        </div>
        <div
          v-if="activeTab == 'totalbuy'"
          class="w-full max-h-103 flex-nowrap overflow-y-scroll"
        >
          <div
            v-for="user in promoStatPurchase.data.top_buyers"
            :key="user.user_id"
            class="px-2 xs:px-5 py-2 my-1 w-full grid grid-cols-12 text-xs"
            :class="
              user.rank == 1
                ? 'bg-blueGray-100 rounded-md'
                : 'border-b border-blueGray-100'
            "
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="user.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <p v-else class="ml-2 mx-auto text-center">{{ user.rank }}</p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  user.user_image
                    ? user.user_image.replace('/images', '/r_xs_h/images')
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ user.user_id }}
            </div>
            <div class="col-span-3 sm:flex items-center overflow-ellipsis">
              {{ user.user_name[0] + '***' }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ user.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div
              class="col-span-3 xs:col-span-1 flex items-center"
              :class="{ 'text-lg font-bold text-brand': user.rank == 1 }"
            >
              {{ user.total }}
            </div>
          </div>
        </div>
        <div
          v-if="promoStatPurchase.data.me && activeTab == 'totalbuy'"
          class="w-full mt-7"
        >
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
            class="
              px-2
              xs:px-5
              py-4
              my-2
              w-full
              grid grid-cols-12
              text-xs
              rounded-md
              border border-brand
            "
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="promoStatPurchase.data.me.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <p v-else class="ml-4 mx-auto text-center">
                {{ promoStatPurchase.data.me.rank }}
              </p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  promoStatPurchase.data.me.user_image
                    ? promoStatPurchase.data.me.user_image
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ promoStatPurchase.data.me.user_id }}
            </div>
            <div
              class="
                col-span-3
                flex
                items-center
                line-clamp-1
                overflow-ellipsis
              "
            >
              {{ promoStatPurchase.data.me.user_name }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ promoStatPurchase.data.me.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div
              class="
                col-span-3
                xs:col-span-1
                flex
                items-center
                font-bold
                text-lg
              "
            >
              {{ promoStatPurchase.data.me.total }}
            </div>
          </div>
        </div>
        <div
          v-if="activeTab == 'totallisten'"
          class="w-full max-h-103 flex-nowrap overflow-y-scroll"
        >
          <div
            v-for="user in promoStatHour.data.top_buyers"
            :key="user.user_id"
            class="px-2 xs:px-5 py-2 my-1 w-full grid grid-cols-12 text-xs"
            :class="
              user.rank == 1
                ? 'bg-blueGray-100 rounded-md'
                : 'border-b border-blueGray-100'
            "
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="user.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <p v-else class="ml-2 mx-auto text-center">{{ user.rank }}</p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  user.user_image
                    ? user.user_image.replace('/images', '/r_xs_h/images')
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ user.user_id }}
            </div>
            <div class="col-span-3 sm:flex items-center overflow-ellipsis">
              {{ user.user_name[0] + '***' }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ user.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div
              class="col-span-3 xs:col-span-1 flex items-center"
              :class="{ 'text-lg font-bold text-brand': user.rank == 1 }"
            >
              {{ user.total }}
            </div>
          </div>
        </div>
        <div
          v-if="promoStatHour.data.me && activeTab == 'totallisten'"
          class="w-full mt-7"
        >
          <div class="ml-10 flex flex-col space-y-2">
            <div
              v-for="index in 3"
              :key="index"
              class="bg-blueGray-200 h-1.5 w-1.5 rounded-full"
            ></div>
          </div>
          <p class="font-bold text-2xl mt-7">
            <span class="text-brand">Таны </span>Сонсолт
          </p>
          <div
            class="
              px-2
              xs:px-5
              py-4
              my-2
              w-full
              grid grid-cols-12
              text-xs
              rounded-md
              border border-brand
            "
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="promoStatHour.data.me.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <p v-else class="ml-4 mx-auto text-center">
                {{ promoStatHour.data.me.rank }}
              </p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  promoStatHour.data.me.user_image
                    ? promoStatHour.data.me.user_image
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ promoStatHour.data.me.user_id }}
            </div>
            <div
              class="
                col-span-3
                flex
                items-center
                line-clamp-1
                overflow-ellipsis
              "
            >
              {{ promoStatHour.data.me.user_name }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ promoStatHour.data.me.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div
              class="
                col-span-3
                xs:col-span-1
                flex
                items-center
                font-bold
                text-lg
              "
            >
              {{ promoStatHour.data.me.total }}
            </div>
          </div>
        </div>
        <div
          v-if="activeTab == 'totalown'"
          class="w-full max-h-103 flex-nowrap overflow-y-scroll"
        >
          <div
            v-for="user in promoStatCount.data.top_buyers"
            :key="user.user_id"
            class="px-2 xs:px-5 py-2 my-1 w-full grid grid-cols-12 text-xs"
            :class="
              user.rank == 1
                ? 'bg-blueGray-100 rounded-md'
                : 'border-b border-blueGray-100'
            "
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="user.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <p v-else class="ml-2 mx-auto text-center">{{ user.rank }}</p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  user.user_image
                    ? user.user_image.replace('/images', '/r_xs_h/images')
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ user.user_id }}
            </div>
            <div class="col-span-3 sm:flex items-center overflow-ellipsis">
              {{ user.user_name[0] + '***' }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ user.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div
              class="col-span-3 xs:col-span-1 flex items-center"
              :class="{ 'text-lg font-bold text-brand': user.rank == 1 }"
            >
              {{ user.total }}
            </div>
          </div>
        </div>
        <div
          v-if="promoStatCount.data.me && activeTab == 'totalown'"
          class="w-full mt-7"
        >
          <div class="ml-10 flex flex-col space-y-2">
            <div
              v-for="index in 3"
              :key="index"
              class="bg-blueGray-200 h-1.5 w-1.5 rounded-full"
            ></div>
          </div>
          <p class="font-bold text-2xl mt-7">
            <span class="text-brand">Таны </span>Номын тоо
          </p>
          <div
            class="
              px-2
              xs:px-5
              py-4
              my-2
              w-full
              grid grid-cols-12
              text-xs
              rounded-md
              border border-brand
            "
          >
            <div class="col-span-2 sm:col-span-1 flex items-center text-base">
              <img
                v-if="promoStatCount.data.me.rank == 1"
                class="w-7 h-auto"
                src="~/assets/img/rank1.png"
              />
              <p v-else class="ml-4 mx-auto text-center">
                {{ promoStatCount.data.me.rank }}
              </p>
            </div>
            <div class="col-span-2 sm:col-span-1 flex items-center">
              <img
                class="w-7 h-7 rounded-md overflow-hidden"
                :src="
                  promoStatCount.data.me.user_image
                    ? promoStatCount.data.me.user_image
                    : 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
                "
              />
            </div>
            <div class="hidden col-span-2 xs:flex items-center">
              {{ promoStatCount.data.me.user_id }}
            </div>
            <div
              class="
                col-span-3
                flex
                items-center
                line-clamp-1
                overflow-ellipsis
              "
            >
              {{ promoStatCount.data.me.user_name }}
            </div>
            <div class="hidden col-span-2 sm:flex items-center">
              {{ promoStatCount.data.me.user_email }}
            </div>
            <div class="col-span-2 flex items-center"></div>
            <div
              class="
                col-span-3
                xs:col-span-1
                flex
                items-center
                font-bold
                text-lg
              "
            >
              {{ promoStatCount.data.me.total }}
            </div>
          </div>
        </div>
        <!-- <div
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
        </div> -->
        <div class="w-full mt-20 flex flex-col sm:flex-row font-light text-sm">
          <div class="flex flex-col w-full sm:w-1/2 pr-0 sm:pr-14">
            <p id="QA1" class="leading-none font-bold mt-7 text-base">
              Хэрхэн оролцох вэ?
            </p>
            <p class="mt-3">Уралдааны хугацаанд:</p>
            <ul class="mt-3 space-y-3 list-disc">
              <li>
                Хамгийн <span class="font-bold">олон цаг</span> аудио ном
                сонссон <span class="font-bold">1 хэрэглэгч</span>;
              </li>
              <li>
                Энэ жилийн ном унших төлөвлөгөөгөө гүйцээж, ирэх жилийнхээ
                хүслийн жагсаалтыг эхлүүлэн хамгийн олон
                <span class="font-bold">ширхэг</span> ном авсан
                <span class="font-bold">1 хэрэглэгч</span>;
              </li>
              <li>
                Хамгийн <span class="font-bold">өндөр дүнгээр</span> худалдан
                авалт хийсэн <span class="font-bold">1 хэрэглэгч</span> тус бүр
                “iPad Air”-ийн эзэн болно. “iPad Air: Wi-Fi 64GB”-ийн загварыг
                дараах холбоосоор харна уу.
                <a class="text-brand" href="https://www.apple.com/ipad-air/"
                  >https://www.apple.com/ipad-air/</a
                >
              </li>
            </ul>
            <p id="QA2" class="leading-none font-bold mt-7 text-base">
              Урамшууллын хугацаа:
            </p>
            <p class="mt-3">
              2021 оны 12 дугаар сарын 1-ний 00:00 цагаас 2022 оны 1 дүгээр
              сарын 1-ний 00:00 (GMT+8, Улаанбаатар) цаг хүртэл үргэлжилнэ.
            </p>
            <p id="QA3" class="leading-none font-bold mt-7 text-base">Дүрэм:</p>
            <ul class="mt-3 space-y-3 list-disc">
              <li>
                Mplus апп болон веб хуудсаар дамжуулан худалдан авсан байх
              </li>
              <li>Цэнэг үйлчилгээний худалдан авалтын үнийн дүнг тооцох</li>
              <li>
                Хямдралтай номын худалдан авалтын үнийн дүн төлсөн төлбөрөөр
                тооцогдох
              </li>
            </ul>
            <div
              class="
                w-full
                rounded-2xl
                bg-blueGray-100
                p-5
                mt-5
                font-semibold
                text-xs
              "
            >
              <p>
                Шалгуур болгон дээр нэг хэрэглэгч ялагч болно. (Нэг хүн нэг л
                шалгуураар ялагч болох боломжтой.)
              </p>
            </div>
          </div>
          <div class="flex flex-col w-full sm:w-1/2 pr-0 sm:pr-5">
            <p id="QA4" class="leading-none font-bold mt-7 text-base">
              Шалгаруулалт:
            </p>
            <ul class="mt-3 space-y-3">
              <li>
                Марафоны явцын талаар цаг тухайд нь ил тодоор
                Facebook/mplus.mongolia пэйж болон www.mplus.mn вэб сайт, Mplus
                апп-аас харах боломжтой.
              </li>
              <li>
                Урамшуулалт хугацаанд дээрх 3 шалгууруудыг хангасан эхний 15
                хэрэглэгчийн ID харагдах бөгөөд өөрийгөө уралдааны хэддэх
                байранд явж байгаа эсэхийг харах боломжтой.
              </li>
              <li>
                2022 оны 1 сарын 1-ний өдрийн 00:00 цагт уралдааныг хааж,
                хугацааг зогсооно.
              </li>
              <li>
                Уралдаан дууссан, техникийн болон бусад асуудал гарсан эсэхийг
                шалгаад 1-р сарын 4-нд уралдааны дүнг танилцуулж, номд хайртай 3
                ялагчдыг тодруулан зарлах болно.
              </li>
            </ul>
            <p id="QA5" class="leading-none font-bold mt-7 text-base">
              Шагнал гардуулах:
            </p>
            <ul class="mt-3 space-y-3">
              <li>
                2022 оны 1 сарын 7-ны 12:00 цагаас ялагчдыг Mplus-ийн оффис
                дээрээ хүлээн авч, шагналыг гардуулна.
              </li>
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
import VectorXmasLights from '../components/illustrations/VectorXmasLights.vue'
import VectorSantaReindeer from '../components/illustrations/VectorSantaReindeer.vue'
import VectorXmasTitle from '../components/illustrations/VectorXmasTitle.vue'
import VectorSnow from '../components/illustrations/VectorSnow.vue'

export default {
  head: {
    title: '12-р сарын урамшуулал',
  },
  components: {
    VectorCurverArrow,
    Tags,
    CountDownDate,
    VectorXmasLights,
    VectorSantaReindeer,
    VectorXmasTitle,
    VectorSnow,
  },
  data() {
    return {
      activeTab: 'totalbuy',
      promoStatHour: null,
      promoStatPurchase: null,
      promoStatCount: null,
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
      .get('/api/promo/total/promo-progress?promo_id=2&type=purchase')
      .then((res) => (this.promoStatPurchase = res.data))
    this.$axios
      .get('/api/promo/total/promo-progress?promo_id=2&type=count')
      .then((res) => (this.promoStatCount = res.data))
    this.$axios
      .get('/api/promo/total/promo-progress?promo_id=2&type=hour')
      .then((res) => (this.promoStatHour = res.data))
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
