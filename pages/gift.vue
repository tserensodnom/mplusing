<template>
  <div class="w-full grid grid-cols-12 overflow-hidden">
    <div
      class="
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-4 2xl:col-span-6
        grid grid-cols-3
        pt-10
        p-5
        lg:p-0 lg:pt-10
      "
    >
      <!-- <div class="hidden md:flex col-span-3 mb-5 overflow-scroll flex-nowrap">
        <img
          src="https://assets.mplus.mn/steps.svg"
          alt="steps"
          class="w-full"
        />
      </div> -->
      <div class="flex flex-row col-span-3">
        <div class="flex-grow flex flex-col overflow-hidden lg:pr-10">
          <!-- <div v-if="raffle" class="w-full bg-brand py-2 px-3 rounded-md mb-5 flex items-center text-xs text-white font-bold">
            <div class="bg-white rounded-full w-2 h-2 mr-3 animate-pulse flex-shrink-0"></div>

            <p>Танд урамшуулалд оролцох эрх үүссэн байна</p>
          </div> -->
          <div class="flex flex-col w-full">
            <p class="text-sm text-blueGray-400">
              <NuxtLink to="/plus" class="hover:text-brand">Нэмэх</NuxtLink> /
              <span class="text-brand">Бэлэг Плас</span>
            </p>

            <img
              class="mt-5 w-3/4"
              src="https://assets.mplus.mn/belegplusgiraffe.svg"
            />
            <p class="font-semibold text-brand-dark text-lg mt-10 leading-none">
              Хүссэн номоо сонгоод <br />
              дотны хүндээ илгээгээрэй
            </p>
            <p class="text-sm text-blueGray-400 mt-5">
              Бэлэг Plus бол хайртай дотны хүмүүстээ цахим болон сонсдог ном
              бэлэглэн баяр хөөрөөр бялхуулдаг үйлчилгээ юм. Та Бэлэг Plus-ийг
              ашиглан Mplus дахь бүтээлүүдээс хүссэн номоо сонгон авч, чин
              сэтгэлийн үгээ зурвас болгон бичээд ганцхан минутын дотор дэлхийн
              хаашаа ч илгээж чадах ид шидийн хүчийг гартаа атгах болно.
            </p>
          </div>
          <!-- <p class="mt-10 text-sm text-brand-dark font-semibold">
            Дараах зургуудаас аль нь таалагдаж байна
          </p>
          <div class="mt-3 flex flex-row flex-wrap">
            <a
              v-for="index in ['santa', 'gift', 'heart', 'reading', 'deer']"
              :key="index"
              @click="gift.type = index"
              class="w-1/3 p-3 sm:w-32 h-20 rounded-2xl transition duration-300"
            >
              <div
                class="w-full h-full rounded-2xl items-center flex"
                :class="gift.type == index ? 'bg-brand' : 'bg-blueGray-200'"
              >
                <img
                  :src="`https://assets.mplus.mn/stickers/sticker-${index}.svg`"
                  class="w-10 sm:w-14 mx-auto -mt-2 transition duration-300"
                />
              </div>
            </a>
          </div> -->
          <p class="mt-10 text-blueGray-400 text-sm">
            <span class="text-brand-dark font-semibold"
              >Бэлэглэх номоо сонгоцгооё</span
            >
            <br />
            Зөвхөн нэг л ном сонгох боломжтой шүү
          </p>
          <!-- new select search component -->
          <div
            class="mt-3 h-12 w-full rounded-xl text-xs justify-between relative"
          >
            <div
              v-if="showSearch && result"
              class="
                absolute
                inset-x-0
                top-10
                border border-blueGray-200
                rounded-b-2xl
                bg-white
                h-max
                max-h-80
                z-0
                overflow-y-scroll
              "
            >
              <div
                v-for="item in result.data"
                :key="item.id"
                @click="selectBook(item)"
                class="
                  cursor-pointer
                  w-full
                  h-max
                  flex flex-row
                  items-center
                  justify-between
                  p-5
                  hover:bg-blueGray-100
                  transition
                  duration-300
                "
              >
                <img
                  :src="toSmallImg(item.cover)"
                  alt=""
                  class="w-14 h-auto rounded-lg shadow-md mr-5 flex-shrink-0"
                />
                <div class="flex flex-col flex-grow text-left">
                  <p class="font-bold w-2/3">{{ item.title }}</p>
                </div>
                <div
                  class="
                    text-blueGray-400
                    flex flex-col
                    space-y-5
                    text-xs
                    w-40
                    items-end
                  "
                >
                  <p v-if="item.plan">
                    Үнэ:
                    <span>{{ item.price }}₮</span>
                  </p>
                  <p v-if="item.audio_book">
                    Аудио:
                    <span
                      v-if="item.audio_book.is_free || !item.audio_book.price"
                      >Үнэгүй</span
                    ><span v-else>{{ item.audio_book.price }}₮</span>
                  </p>
                  <p v-if="item.ebook">
                    Цахим:
                    <span v-if="item.ebook.is_free || !item.ebook.price"
                      >Үнэгүй</span
                    ><span v-else>{{ item.ebook.price }}₮</span>
                  </p>
                </div>
              </div>
            </div>
            <input
              autoComplete="off"
              class="
                h-full
                w-full
                focus:outline-none
                font-medium
                borde
                transition
                duration-300
                pl-3
                rounded-xl
                text-xs
                z-20
              "
              :class="error ? 'border-red-400' : 'border-blueGray-200'"
              type="search"
              placeholder="Ном хайх..."
              @input="handleInput"
              @focus="showSearch = true"
              v-model="query"
            />
            <button
              type="submit"
              class="absolute inset-y-0 right-3 flex items-center z-30"
            >
              <icon-search />
            </button>
          </div>
          <div
            v-if="gift.book"
            class="
              w-full
              h-max
              flex flex-row
              items-center
              justify-between
              p-5
              border border-brand
              rounded-2xl
              transition
              duration-300
              mt-10
            "
          >
            <img
              :src="toSmallImg(gift.book.cover)"
              alt=""
              class="w-14 h-auto rounded-lg shadow-md mr-5 flex-shrink-0"
            />
            <div class="flex flex-col flex-grow text-left">
              <p class="font-bold w-2/3 text-xs">{{ gift.book.title }}</p>
            </div>
            <div
              class="
                text-blueGray-400
                flex flex-col
                space-y-5
                text-xs
                items-end
              "
            >
              <p v-if="gift.book.plan">
                Үнэ:
                <span>{{ gift.book.price }}₮</span>
              </p>
              <p v-if="gift.book.audio_book">
                Аудио:
                <span
                  v-if="
                    gift.book.audio_book.is_free || !gift.book.audio_book.price
                  "
                  >Үнэгүй</span
                ><span v-else>{{ gift.book.audio_book.price }}₮</span>
              </p>
              <p v-if="gift.book.ebook">
                Цахим:
                <span v-if="gift.book.ebook.is_free || !gift.book.ebook.price"
                  >Үнэгүй</span
                ><span v-else>{{ gift.book.ebook.price }}₮</span>
              </p>
            </div>
          </div>
          <p
            v-if="gift.book && !gift.book.plan"
            class="mt-10 text-blueGray-400 text-sm"
          >
            Таны сонгосон ном дараах хувилбартай байна. Зарим ном сонсох болон
            унших гэсэн хоёр сонголттой байдаг тул тэр тохиолдолд та аль нэгийг
            нь сонгоно уу.
          </p>
          <div
            v-if="gift.book && !gift.book.plan"
            class="mt-3 flex flex-row items-center space-x-5"
          >
            <div
              v-if="gift.book.audio_book && !gift.book.audio_book.is_free"
              @click="gift.product_type = 'audio_book'"
              class="cursor-pointer flex flex-row items-center space-x-2"
            >
              <div
                :class="
                  gift.product_type == 'audio_book'
                    ? 'border-brand'
                    : 'border-blueGray-200'
                "
                class="rounded-full h-6 w-6 border p-1 transition duration-300"
              >
                <div
                  :class="gift.product_type == 'audio_book' ? 'bg-brand' : ''"
                  class="w-full h-full rounded-full transition duration-300"
                ></div>
              </div>
              <p>Аудио ном</p>
            </div>
            <div
              v-if="gift.book.ebook && !gift.book.ebook.is_free"
              @click="gift.product_type = 'ebook'"
              class="cursor-pointer flex flex-row items-center space-x-2"
            >
              <div
                :class="
                  gift.product_type == 'ebook'
                    ? 'border-brand'
                    : 'border-blueGray-200'
                "
                class="rounded-full h-6 w-6 border p-1 transition duration-300"
              >
                <div
                  :class="gift.product_type == 'ebook' ? 'bg-brand' : ''"
                  class="w-full h-full rounded-full transition duration-300"
                ></div>
              </div>
              <p>Цахим ном</p>
            </div>
          </div>
          <p class="mt-10 text-sm text-brand-dark font-semibold">
            Бэлгийн картын өнгөө сонгоно уу?
          </p>
          <div class="flex flex-row items-center space-x-5 mt-3">
            <div
              @click="gift.bg_color = 'default'"
              :class="
                gift.bg_color == 'default'
                  ? 'border-opacity-100 border-brand'
                  : 'border-opacity-0'
              "
              class="
                cursor-pointer
                p-1
                rounded-2xl
                transition
                duration-300
                border-2
              "
            >
              <div
                class="h-10 w-10 bg-blueGray-200 rounded-xl cursor-pointer"
              ></div>
            </div>
            <div
              @click="gift.bg_color = 'pink'"
              :class="
                gift.bg_color == 'pink'
                  ? 'border-opacity-100 border-brand'
                  : 'border-opacity-0'
              "
              class="
                cursor-pointer
                p-1
                rounded-2xl
                transition
                duration-300
                border-2
              "
            >
              <div
                class="
                  h-10
                  w-10
                  bg-gradient-to-tl
                  from-pink-500
                  to-blueGray-50
                  rounded-xl
                  cursor-pointer
                "
              ></div>
            </div>
            <div
              @click="gift.bg_color = 'brand'"
              :class="
                gift.bg_color == 'brand'
                  ? 'border-opacity-100 border-brand'
                  : 'border-opacity-0'
              "
              class="
                cursor-pointer
                p-1
                rounded-2xl
                transition
                duration-300
                border-2
              "
            >
              <div class="h-10 w-10 bg-brand rounded-xl cursor-pointer"></div>
            </div>
            <div
              @click="gift.bg_color = 'orange'"
              :class="
                gift.bg_color == 'orange'
                  ? 'border-opacity-100 border-brand'
                  : 'border-opacity-0'
              "
              class="
                cursor-pointer
                p-1
                rounded-2xl
                transition
                duration-300
                border-2
              "
            >
              <div
                class="
                  h-10
                  w-10
                  bg-gradient-to-tl
                  from-orange-500
                  to-blueGray-50
                  rounded-xl
                  cursor-pointer
                "
              ></div>
            </div>
            <div
              @click="gift.bg_color = 'green'"
              :class="
                gift.bg_color == 'green'
                  ? 'border-opacity-100 border-brand'
                  : 'border-opacity-0'
              "
              class="
                cursor-pointer
                p-1
                rounded-2xl
                transition
                duration-300
                border-2
              "
            >
              <div
                class="
                  h-10
                  w-10
                  bg-gradient-to-tl
                  from-green-500
                  to-blueGray-50
                  rounded-xl
                  cursor-pointer
                "
              ></div>
            </div>
            <div
              @click="gift.bg_color = 'blue'"
              :class="
                gift.bg_color == 'blue'
                  ? 'border-opacity-100 border-brand'
                  : 'border-opacity-0'
              "
              class="
                cursor-pointer
                p-1
                rounded-2xl
                transition
                duration-300
                border-2
              "
            >
              <div
                class="
                  h-10
                  w-10
                  bg-gradient-to-tl
                  from-purple-500
                  to-blueGray-50
                  rounded-xl
                  cursor-pointer
                "
              ></div>
            </div>
          </div>
          <p class="mt-10 text-sm text-brand-dark font-semibold">
            Илгээгчийн нэр
          </p>

          <textarea
            type="text"
            name="name"
            id=""
            cols="30"
            rows="1"
            maxlength="25"
            class="
              mt-3
              p-3
              border border-blueGray-200
              rounded-xl
              overflow-hidden
              text-sm
            "
            placeholder="Хэнээс илгээж байгааг энд бичээрэй"
            v-model="gift.giver_name"
          ></textarea>
          <div class="place-self-end text-sm text-blueGray-400">
            {{ gift.giver_name ? gift.giver_name.length : '0' }}/25 тэмдэгт
          </div>
          <p class="mt-5 text-sm text-brand-dark font-semibold">
            Мэндчилгээ эсвэл дайхыг хүссэн үгээ энд оруулаарай
          </p>

          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            maxlength="120"
            class="
              mt-3
              p-3
              border border-blueGray-200
              rounded-xl
              overflow-hidden
              text-sm
            "
            placeholder="'Баярын мэнд', 'Амжилт хүсье' гэх мэт..."
            v-model="gift.message"
          ></textarea>
          <div class="place-self-end text-sm text-blueGray-400">
            {{ gift.message ? gift.message.length : '0' }}/120 тэмдэгт
          </div>
          <div class="w-full mt-10 lg:hidden">
            <div
              class="
                w-full
                mt-5
                rounded-2xl
                border border-blueGray-200
                overflow-hidden
                flex flex-col
                text-sm
              "
            >
              <div class="flex flex-col space-y-5 p-5">
                <div class="flex flex-row justify-between items-center">
                  <p class="flex-shrink-0">Бэлэглэх тоо ширхэг:</p>
                  <div
                    class="
                      flex flex-row
                      items-center
                      justify-evenly
                      space-x-3
                      font-bold
                    "
                  >
                    <a
                      @click="minusCount()"
                      class="
                        rounded-full
                        w-7
                        h-7
                        border border-blueGray-200
                        p-1
                        text-center
                      "
                    >
                      -
                    </a>
                    <p>{{ gift.count }}</p>
                    <a
                      @click="addCount()"
                      class="
                        rounded-full
                        w-7
                        h-7
                        border border-blueGray-200
                        p-1
                        text-center
                      "
                    >
                      +
                    </a>
                  </div>
                </div>
                <a
                  @click="
                    () => {
                      gift.buyForMe = !gift.buyForMe
                    }
                  "
                  class="flex flex-row justify-between items-center"
                >
                  <p class="flex-shrink-0">Өөртөө ч бас авах</p>
                  <div
                    :class="
                      gift.buyForMe ? 'border-brand' : 'border-blueGray-200'
                    "
                    class="
                      rounded-full
                      h-7
                      w-7
                      border
                      p-1
                      transition
                      duration-300
                    "
                  >
                    <div
                      :class="gift.buyForMe ? 'bg-brand' : ''"
                      class="w-full h-full rounded-full transition duration-300"
                    ></div>
                  </div>
                </a>
                <div
                  class="
                    flex flex-row
                    justify-between
                    items-center
                    pt-5
                    border-t-2 border-blueGray-100 border-dashed
                  "
                >
                  <p class="flex-shrink-0">Нийт дүн:</p>
                  <p class="font-bold text-xl">
                    {{ getFinalPrice() }}
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full text-xs text-center text-blueGray-400 mt-4 px-5">
              Хайртай дотны хүнээ бэлэг плас ашиглаж баярлуулсан хүн бүрт очлуур
              үйлчилгээг бэлэглэнэ
            </div>
            <a
              class="
                bg-brand
                rounded-2xl
                mt-5
                text-center
                p-4
                text-white
                font-semibold
                hover:bg-brand-dark
                transition
                duration-300
                flex
                items-center
                justify-center
              "
              @click="createInvoice()"
            >
              <icon-load
                v-if="creatingInvoice"
                class="text-white animate-spin"
              ></icon-load>
              <p v-else>Төлбөр төлөх</p>
            </a>
            <NuxtLink
              :to="
                '/account/cards' +
                (this.$route.query['mode'] == 'app' ? '?mode=app' : '')
              "
              class="
                text-sm text-blueGray-400
                hover:text-brand
                transition
                duration-300
                flex
                items-center
                space-x-3
                border-2
                rounded-2xl
                border-blueGray-100
                hover:border-brand
                group
                p-4
                justify-center
                w-full
                mt-2
              "
              ><icon-gift></icon-gift>
              <p>Миний бэлгүүд</p>
              <icon-arrow-left
                :overrideColorByFont="true"
                class="
                  transform
                  rotate-180
                  transition
                  duration-300
                  group-hover:translate-x-1
                "
              ></icon-arrow-left
            ></NuxtLink>
          </div>
          <p class="mt-10 text-red-400 text-sm">Санамж:</p>
          <ul class="text-blueGray-400 text-sm space-y-2">
            <li>
              - Төлбөр амжилттай төлөгдсөний дараа Танд идэвхжүүлэх код бүхий
              бэлгийн карт худалдан авсан тоогоор үүсэх болно.
            </li>
            <li>
              - Идэвхижүүлэх код нь нэг удаа ашиглах боломжтой, дахин
              давтагдашгүй байх бөгөөд бэлгийн карт бүр өөр өөр кодтой байна.
            </li>
            <li>
              - Та бэлгийн картыг татаж аваад мессенжер, и-мэйл хаяг гэх мэт
              ямар ч хэлбэрээр явуулах боломжтой.
            </li>

            <li>
              - Мөн "Илгээх" буюу хуваалцах холбоосыг ашиглан хялбархан дамжуулж
              болно.
            </li>

            <li>
              - Та өөрийн худалдаж авсан бэлгийн картын мэдээллийг "Миний сан" /
              "Бэлэг Plus" цэснээс хараарай. Энэхүү бэлэг нь хүлээн авагч
              идэвхжүүлтэл хүчинтэй байх болно. Идэвхжүүлээгүй бол өөр хэн
              нэгэнд дахин илгээж болно.
            </li>
            <li>
              - Хэрэв та 5-аас илүү тоогоор бэлгийн карт авахыг хүсвэл 8002 6363
              дугаарт, эсвэл манай Facebook хуудсаар холбогдож захиалаарай.
            </li>
          </ul>
        </div>
        <div class="flex-shrink lg:flex flex-col hidden">
          <p class="w-full text-center text-sm text-blueGray-400">
            Таны илгээх бэлэг ингэж харагдана
          </p>
          <div
            class="
              w-full
              mt-5
              rounded-2xl
              border border-blueGray-200
              overflow-hidden
              flex flex-col
              text-sm
            "
          >
            <iframe
              v-if="this.$route.query['mode'] != 'app' && showIframe"
              :src="`${$config.baseUrl}/gift/cards/preview?type=${
                gift.type
              }&product_type=${gift.product_type}&giver_name=${
                gift.giver_name ? gift.giver_name : ''
              }&message=${gift.message ? gift.message : ''}&bg_color=${
                gift.bg_color
              }&product_name=${
                gift.book ? gift.book.title : ''
              }&product_image=${gift.book ? gift.book.cover : ''}`"
              title="Card"
              style="width: 420px; height: 890px; overflow: hidden"
              class="overflow-hidden"
              scrolling="no"
            ></iframe>
            <div class="flex flex-col space-y-5 p-5">
              <div class="flex flex-row justify-between items-center">
                <p class="flex-shrink-0">Бэлэглэх тоо ширхэг:</p>
                <div
                  class="
                    flex flex-row
                    items-center
                    justify-evenly
                    space-x-3
                    font-bold
                  "
                >
                  <a
                    @click="minusCount()"
                    class="
                      rounded-full
                      w-7
                      h-7
                      border border-blueGray-200
                      p-1
                      text-center
                    "
                  >
                    -
                  </a>
                  <p>{{ gift.count }}</p>
                  <a
                    @click="addCount()"
                    class="
                      rounded-full
                      w-7
                      h-7
                      border border-blueGray-200
                      p-1
                      text-center
                    "
                  >
                    +
                  </a>
                </div>
              </div>
              <a
                @click="
                  () => {
                    gift.buyForMe = !gift.buyForMe
                  }
                "
                class="flex flex-row justify-between items-center"
              >
                <p class="flex-shrink-0">Өөртөө ч бас авах</p>
                <div
                  :class="
                    gift.buyForMe ? 'border-brand' : 'border-blueGray-200'
                  "
                  class="
                    rounded-full
                    h-7
                    w-7
                    border
                    p-1
                    transition
                    duration-300
                  "
                >
                  <div
                    :class="gift.buyForMe ? 'bg-brand' : ''"
                    class="w-full h-full rounded-full transition duration-300"
                  ></div>
                </div>
              </a>
              <div
                class="
                  flex flex-row
                  justify-between
                  items-center
                  pt-5
                  border-t-2 border-blueGray-100 border-dashed
                "
              >
                <p class="flex-shrink-0">Нийт дүн:</p>
                <p class="font-bold text-xl">
                  {{ getFinalPrice() }}
                </p>
              </div>
            </div>
          </div>
          <div class="w-full text-xs text-center text-blueGray-400 mt-4 px-5">
            Хайртай дотны хүнээ бэлэг плас ашиглаж баярлуулсан хүн бүрт очлуур
            үйлчилгээг бэлэглэнэ
          </div>
          <a
            class="
              bg-brand
              rounded-2xl
              mt-5
              text-center
              p-4
              text-white
              font-semibold
              hover:bg-brand-dark
              transition
              duration-300
              flex
              items-center
              justify-center
            "
            @click="createInvoice()"
          >
            <icon-load
              v-if="creatingInvoice"
              class="text-white animate-spin"
            ></icon-load>
            <p v-else>Төлбөр төлөх</p>
          </a>
          <NuxtLink
            :to="
              '/account/cards' +
              (this.$route.query['mode'] == 'app' ? '?mode=app' : '')
            "
            class="
              text-sm text-blueGray-400
              hover:text-brand
              transition
              duration-300
              flex
              items-center
              space-x-3
              border-2
              rounded-2xl
              border-blueGray-100
              hover:border-brand
              group
              p-4
              justify-center
              w-full
              mt-2
            "
            ><icon-gift></icon-gift>
            <p>Миний бэлгүүд</p>
            <icon-arrow-left
              :overrideColorByFont="true"
              class="
                transform
                rotate-180
                transition
                duration-300
                group-hover:translate-x-1
              "
            ></icon-arrow-left
          ></NuxtLink>
          <!-- <p class="text-xs text-blueGray-400 mt-10">
            Алхам 1: PlayStore, AppStore-с “MPlus” аппликейшинийг татаж авах<br /><br />

            Алхам 2: +цэс/ Промо код идэвхжүүлэх талбарт идэвхжүүлэх кодыг
            бичнэ<br /><br />

            Aлхам 3: Бэлгэнд ирсэн номоо уншиж/сонсож эхлэх<br /><br />
          </p> -->
        </div>
      </div>
      <div
        class="col-span-3 flex items-center justify-center text-center mt-10"
      >
        <img src="https://assets.mplus.mn/scrolling.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SearchInput from '../components/search/SearchInput.vue'
import IconSearch from '../components/icons/IconSearch.vue'
import IconLoad from '../components/icons/IconLoad.vue'
import IconGift from '../components/icons/IconGift.vue'
import IconArrowLeft from '../components/icons/IconArrowLeft.vue'
import eventBus from '~/plugins/eventBus'
import debounce from 'lodash.debounce'

export default {
  head: {
    title: 'Ном бэлэглэе | Бэлэг плас | Мplus.mn',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content: 'Бэлэг Plus бол хайртай дотны хүмүүстээ цахим болон сонсдог ном бэлэглэн баяр хөөрөөр бялхуулдаг үйлчилгээ юм. Та Бэлэг Plus-ийг ашиглан Mplus дахь бүтээлүүдээс хүссэн номоо сонгон авч, чин сэтгэлийн үгээ зурвас болгон бичээд дэлхийн хаашаа ч илгээж чадах ид шидийн хүчийг гартаа атгах болно. ',
      },
      {
        hid: 'ogtitle',
        property: 'og:title',
        content: 'Ном бэлэглэе | Бэлэг плас | Мplus.mn',
      },
      {
        hid: 'ogdescription',
        property: 'og:description',
        content: 'Бэлэг Plus бол хайртай дотны хүмүүстээ цахим болон сонсдог ном бэлэглэн баяр хөөрөөр бялхуулдаг үйлчилгээ юм. Та Бэлэг Plus-ийг ашиглан Mplus дахь бүтээлүүдээс хүссэн номоо сонгон авч, чин сэтгэлийн үгээ зурвас болгон бичээд дэлхийн хаашаа ч илгээж чадах ид шидийн хүчийг гартаа атгах болно. ',
      },
    ],
  },
  components: { IconSearch, SearchInput, IconLoad, IconArrowLeft, IconGift },
  data() {
    return {
      gift: {
        message: null,
        bg_color: 'default',
        product_type: 'null',
        book: null,
        type: 'gift',
        buyForMe: false,
        count: 1,
        giver_name: null,
      },
      result: null,
      raffle: false,
      showSearch: false,
      query: null,
      loading: false,
      creatingInvoice: false,
      error: false,
      book_price: {
        audio_book: 0,
        ebook: 0,
      },
      showIframe: true,
      planString: 'tsenegochluurhuchdelцэнэгочлуурхүчдэл',
      planData: [
        {
          plan: true,
          id: '1',
          title: 'Очлуур багц',
          price: 4900,
          cover:
            'https://d3tfpmmm736cqr.cloudfront.net/images/publisher/square/61f4a566_d7d3c1_1.jpg',
        },
        {
          plan: true,
          id: '2',
          title: 'Хүчдэл багц',
          price: 14900,
          cover:
            'https://d3tfpmmm736cqr.cloudfront.net/images/publisher/square/61f4a55d_c9c3c5_1.jpg',
        },
      ],
      hotBooks: [
        {
          id: '1581',
          title: 'Аз жаргалын нууц',
          slug: 'az-jargaliin-nuuts',
          web_link: 'https://www.mplus.mn/az-jargaliin-nuuts',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/60879142_c8b091_0.651.jpg',
          likes_count: 0,
          ebook: {
            id: '1266',
          },
          audio_book: {
            id: '491',
          },
          short_description:
            'Зарим хүмүүс, мөн улс үндэстэн яагаад ч юм бусдаас илүү аз жаргалтай амьдарч буй мэт танд санагддаг л биз дээ. Илүү их м...',
        },
        {
          id: '1435',
          title: 'Харизм',
          slug: 'Charisma',
          web_link: 'https://www.mplus.mn/Charisma',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/60518098_9e9782_0.707.jpg',
          likes_count: 2,
          ebook: {
            id: '1156',
          },
          audio_book: {
            id: '343',
          },
          short_description:
            'Шинээр ажилд орох болон хүмүүстэй харилцаагаа сайжруулах, бусдыг манлайлахад харизм нь таны чухал хөшүүрэг болно. “Хариз...',
        },
        {
          id: '1311',
          title: 'Ногоон нүдэн лам',
          slug: 'Nogoon-nuden-lam',
          web_link: 'https://www.mplus.mn/Nogoon-nuden-lam',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/5f8d6996_563c25_1.jpg',
          likes_count: 4,
          ebook: null,
          audio_book: {
            id: '311',
          },
          short_description:
            'Зохиолч уг бүтээлээ бодит амьдралаас сэдэвлэн Монголд улс төрийн хилс хэргээр хэлмэгдэж байсан хохирогчид, тэдгээрийн ар...',
        },
        {
          id: '1417',
          title: 'Тэмдэглэлийн дэвтэр',
          slug: 'Temdegleliin-devter',
          web_link: 'https://www.mplus.mn/Temdegleliin-devter',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/5fe2ae25_a3a9a7_0.663.jpg',
          likes_count: 1,
          ebook: {
            id: '1139',
          },
          audio_book: {
            id: '346',
          },
          short_description:
            'Залуу сайхан эр Ной болон баян айлын бяцхан охин Элли нарын санамсаргүй учрал нэгэн зуны үерхлээр өндөрлөсөн боловч олон...',
        },
        {
          id: '1715',
          title: 'Санаанаас сая долларын стартап',
          slug: 'sanaanaas-say-dollariin-start-up',
          web_link: 'https://www.mplus.mn/sanaanaas-say-dollariin-start-up',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/612cab6e_96928e_1.jpg',
          likes_count: 0,
          ebook: null,
          audio_book: {
            id: '453',
          },
          short_description:
            'Сая долларын стартап бүтээхэд тулгардаг саад бэрхшээл, тэднийг шийдэх арга болон бусад мэдэх ёстой олон ойлголтыг багтаа...',
        },
        {
          id: '1790',
          title: 'Теломерийн нөлөө',
          slug: 'telomeriin-noloo',
          web_link: 'https://www.mplus.mn/telomeriin-noloo',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/618b72d9_a49b78_0.681.jpg',
          likes_count: 0,
          ebook: {
            id: '1427',
          },
          audio_book: null,
          short_description:
            '“Эрч хүчтэй, эрүүл, урт удаан” амьдралд хүргэх шинэ арга замыг нээн Нобелийн шагнал хүртсэн эрүүл мэндийн судалгааг х...',
        },
        {
          id: '1709',
          title: 'Тогтуун байх нь гол түлхүүр',
          slug: 'togtuun-baih-ni-gol-tulhuur',
          web_link: 'https://www.mplus.mn/togtuun-baih-ni-gol-tulhuur',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/615d42bb_ab8b5a_0.705.jpg',
          likes_count: 0,
          ebook: {
            id: '1366',
          },
          audio_book: {
            id: '466',
          },
          short_description:
            '#1 Нью-Йорк Таймсын бестселлер\nТогтуун байх.\nСтойкуудаас Буддистууд, Күнзүүдээс Христ хүртэлх эртний бүхий л  философид...',
        },
        {
          id: '1734',
          title: 'F*ck you money',
          slug: 'fuck-you-money',
          web_link: 'https://www.mplus.mn/fuck-you-money',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/614d1309_484844_0.732.jpg',
          likes_count: 0,
          ebook: {
            id: '1385',
          },
          audio_book: null,
          short_description:
            'Хэрхэн санхүүгийн эрх чөлөөнд хүрэх вэ? Цалингаа хуримтлуулж, түүгээрээ хөрөнгө оруулалт хийх талаар хүн бүрт ойлгомжтой...',
        },
        {
          id: '1660',
          title: 'No Filter: Инстаграмын бодит түүх',
          slug: 'no-filter',
          web_link: 'https://www.mplus.mn/no-filter',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/6115dffd_b84a76_0.705.jpg',
          likes_count: 0,
          ebook: {
            id: '1325',
          },
          audio_book: {
            id: '441',
          },
          short_description:
            '2020 оны Financial Times болон McKinsey Business Book-ын ялагч\nFortune, The Financial Times, The Economics, Inc. Magazin...',
        },
        {
          id: '1196',
          title: 'Бар ээж',
          slug: 'bar-eez',
          web_link: 'https://www.mplus.mn/bar-eez',
          cover:
            'https://ub1.cdn.mplus.mn/images/publication/covers/54175/5f16af86_e1372e_0.65.jpg',
          likes_count: 44,
          ebook: {
            id: '973',
          },
          audio_book: {
            id: '299',
          },
          short_description:
            'Эми Чуа (Amy Chua) хэмээх Хятад бүсгүй өдгөө хүүхэд хүмүүжүүлэх арга барилаараа олонд танигджээ. Тэрээр Америкийн “Иел”...',
        },
        {
          id: '1817',
          title: 'Гринч зул сарыг хулгайлсан нь',
          slug: 'grinch-zul-sariig-hulgailsan',
          web_link: 'https://www.mplus.mn/grinch-zul-sariig-hulgailsan',
          cover:
            'https://ub1.cdn.mplus.mn/images/publisher/square/61b59ef2_aca56c_0.75.jpg',
          likes_count: 0,
          ebook: {
            id: '1447',
          },
          audio_book: {
            id: '504',
          },
          short_description:
            '“Гринч зул сарыг хулгайлсан нь” номыг бид дэлгэцийн бүтээлээр нь сайн мэддэг. Ааш муутай Гринч Хэн хотынхноос зул сарын...',
        },
      ],
    }
  },
  async fetch() {
    if (this.$route.query['book_id']) {
      let data = await this.$api.getBookDetail(this.$route.query['book_id'])
      if (data.data.ebook) {
        this.gift.product_type = 'ebook'
      }
      if (data.data.audio_book) {
        this.gift.product_type = 'audio_book'
      }
      this.gift.book = data.data
    }
  },
  mounted() {
    if (this.checkScreen()) {
      this.showIframe = false
    }

    this.$axios
      .get('/api/promo/promos/5?type=giftRaffle', {
        withCredentials: true,
      })
      .then((res) => {
        this.raffle = res.data.is_permitted
      })
  },
  methods: {
    getBookDetail(id) {
      this.$api.getBookDetail(id).then((res) => {
        if (res.data.ebook) {
          this.gift.product_type = 'ebook'
        }
        if (res.data.audio_book) {
          this.gift.product_type = 'audio_book'
        }
        this.gift.book = res.data
      })
    },
    checkScreen() {
      /* Storing user's device details in a variable*/
      // let details = navigator.userAgent

      /* Creating a regular expression
        containing some mobile devices keywords
        to search it in details string*/
      // let regexp = /android|iphone|kindle|ipad/i

      /* Using test() method to search regexp in details
        it returns boolean value*/
      // let isMobileDevice = regexp.test(details)

      if (window.innerWidth <= '720') {
        return true
      }
    },
    handleInput: debounce(function (e) {
      this.loading = true
      this.$axios
        .get(
          '/api/search/book?q=' + this.query + '&append=short_description,price'
        )
        .then((res) => {
          this.result = res.data
          if (this.planString.includes(this.query.trim().toLowerCase())) {
            for (const item of this.planData) {
              this.result.data.unshift(item)
            }
          }
        })
        .then(() => {
          this.loading = false
        })
    }, 300),
    minusCount() {
      if (this.gift.count > 1) {
        this.gift.count--
      }
    },
    addCount() {
      if (this.gift.count < 50) {
        this.gift.count++
      }
    },
    selectBook(item) {
      if (!this.$store.state.auth.loggedIn) {
        eventBus.$emit('toastFailure', 'Ном сонгохын тулд нэвтэрнэ үү?')
        return
      }
      if (item.plan) {
        this.gift.book = item
        this.gift.product_type = 'renting_plan'
        this.closeSearch()
        return
      }
      if (item.ebook && item.audio_book) {
        if (
          (item.audio_book.is_free && item.ebook.is_free) ||
          (!item.audio_book.price && !item.ebook.price)
        ) {
          eventBus.$emit(
            'toastFailure',
            'Үнэгүй ном бэлэглэх боломжгүйг анхаарна уу!'
          )
          return
        }
        this.gift.book = item
        this.gift.product_type = 'ebook'
        this.closeSearch()
        return
      }
      if (item.ebook) {
        if (item.ebook.is_free || !item.ebook.price) {
          eventBus.$emit(
            'toastFailure',
            'Үнэгүй ном бэлэглэх боломжгүйг анхаарна уу!'
          )
          return
        }
        this.gift.book = item
        this.gift.product_type = 'ebook'
        this.closeSearch()
        return
      }
      if (item.audio_book.is_free || !item.audio_book.price) {
        console.log('orjiinaa')
        eventBus.$emit(
          'toastFailure',
          'Үнэгүй ном бэлэглэх боломжгүйг анхаарна уу!'
        )
        return
      }
      this.gift.book = item
      this.gift.product_type = 'audio_book'
      this.closeSearch()
      return
    },
    getFinalPrice() {
      if (this.gift.book) {
        if (this.gift.book.plan) {
          return this.priceFormat(
            this.gift.book.price * (this.gift.count + this.gift.buyForMe)
          )
        }
        if (this.gift.product_type == 'ebook') {
          return this.priceFormat(
            this.gift.book.ebook.price * (this.gift.count + this.gift.buyForMe)
          )
        }
        return this.priceFormat(
          this.gift.book.audio_book.price *
            (this.gift.count + this.gift.buyForMe)
        )
      }
      return '0'
    },
    closeSearch(e) {
      if (this.showSearch) {
        this.showSearch = false
      }
    },
    createInvoice() {
      if (!this.$store.state.auth.loggedIn) {
        eventBus.$emit('toastFailure', 'Ном сонгохын тулд нэвтэрнэ үү?')
        return
      }
      if (!this.gift.book || !this.gift.message || !this.gift.giver_name) {
        this.error = true
        eventBus.$emit(
          'toastFailure',
          'Та шаардлагатай талбаруудыг бөглөнө үү?'
        )
        return
      }

      this.creatingInvoice = true

      this.$axios
        .post(
          this.$config.accountApiUrl + '/v4/gift/pack',
          {
            book_id: this.gift.book.id,
            format: this.gift.product_type,
            quantity: this.gift.count,
            message: this.gift.message,
            type: this.gift.type,
            bg_color: this.gift.bg_color,
            self_unlock: this.gift.buyForMe,
            giver_name: this.gift.giver_name,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          this.creatingInvoice = false
          window.location.href =
            this.$config.buyUrl +
            `/invoices/${res.data.data.invoice_id}/payment`
        })
        .catch((err) => {
          if (err.response.data.message) {
            eventBus.$emit('toastFailure', err.response.data.message)
          } else {
            eventBus.$emit('toastFailure', 'Нэхэмжлэл үүсгэхэд алдаа гарлаа!')
          }
          this.creatingInvoice = false
        })
    },
    // calculatePrice() {
    //   if(this.gift.product_type == 'ebook'){
    //     if (this.gift.buyForMe) {
    //     this.totalPrice = this.priceFormat(this.book_price.ebook * (this.gift.count + 1))
    //     return
    //   }
    //   this.totalPrice = this.priceFormat(this.book_price.ebook * this.gift.count)
    //   return
    //   }
    //   if (this.gift.buyForMe) {
    //     this.totalPrice = this.priceFormat(this.book_price.audio_book * (this.gift.count + 1))
    //     return
    //   }
    //   this.totalPrice =  this.priceFormat(this.book_price.audio_book * this.gift.count)
    //   return
    // },
    priceFormat(value) {
      return parseInt(value).toLocaleString() + '₮'
    },
    // getBookPrice() {
    //   this.$axios
    //     .get(this.$config.accountApiUrl + '/v4/books/' + this.gift.book.id)
    //     .then((res) => {
    //       this.book_price.ebook = res.data.data.ebook.price
    //       this.book_price.audio_book = res.data.data.audio_book.price
    //       this.calculatePrice()
    //     })
    // },
    toSmallImg(url) {
      return url.replace('/images', '/r_sm_h/images')
    },
  },
}
</script>

<style SearchInput></style>
