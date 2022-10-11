<template>
  <div
    v-if="book.ebook && book.audio_book"
    class="
      mx-5
      sm:ml-3 sm:mr-5
      mt-5
      mb-4
      flex flex-col
      xs:flex-row xs:space-x-3
      space-y-3
      xs:space-y-0
      md:space-x-9
      purchase
    "
  >
    <div
      class="
        w-full
        sm:w-6/12
        h-max
        rounded-xl
        flex flex-col
        text-base
        font-medium
      "
    >
      <div class="ctaButton">
        <div
          v-if="book.ebook.original_price == 0"
          class="
            transition
            duration-200
            h-16
            w-full
            rounded-2xl
            border-2
            px-4
            border-dashed border-blueGray-200
            flex
            items-center
            justify-center
          "
        >
          <icon-phone class="text-blueGray-400 mr-4 flex-shrink-0"></icon-phone>
          <p class="text-xs text-brand flex-grow">
            <span class="font-bold">Mplus</span> апп дээрээс үнэгүй унших
            боломжтой.
          </p>
        </div>
        <a
          v-else
          :href="`${purchaseUrlPrefix}/${book.id}/ebook`"
          class="
            transition
            duration-200
            h-16
            w-full
            rounded-2xl
            bg-brand
            text-white
            flex flex-row
            justify-between
            px-5
            items-center
            relative
            shadow-bluesm
          "
          ><div
            v-if="book.ebook.applied_discount"
            class="
              absolute
              right-5
              -top-3
              rounded-full
              py-1
              px-3
              bg-red-500
              text-xs
              shadow-md
            "
          >
            {{ book.ebook.applied_discount.label }}
          </div>

          <p class="text-xs md:text-sm 2xl:text-lg">Унших</p>
          <div class="text-lg 2xl:text-xl font-bold relative">
            <span
              v-if="book.ebook.applied_discount"
              class="absolute right-0 -bottom-3 text-xs line-through font-light"
              >{{ priceFormat(book.ebook.original_price) }}</span
            >
            {{
              `${
                book.ebook.original_price == 0
                  ? 'Үнэгүй'
                  : priceFormat(book.ebook.price) + ' ₮'
              }`
            }}
          </div>
        </a>
      </div>
    </div>
    <div
      class="
        w-full
        sm:w-6/12
        h-max
        rounded-xl
        flex flex-col
        text-base
        font-medium
      "
    >
      <div class="ctaButton">
        <div
          v-if="book.audio_book.original_price == 0"
          class="
            transition
            duration-200
            h-16
            w-full
            rounded-2xl
            border-2
            px-4
            border-dashed border-blueGray-200
            flex
            items-center
            justify-center
          "
        >
          <icon-phone class="text-blueGray-400 mr-4 flex-shrink-0"></icon-phone>
          <p class="text-xs text-brand flex-grow">
            <span class="font-bold">Mplus</span> апп дээрээс үнэгүй сонсох
            боломжтой.
          </p>
        </div>
        <a
          v-else
          :href="`${purchaseUrlPrefix}/${book.id}/audio_book`"
          class="
            transition
            duration-200
            h-16
            w-full
            rounded-2xl
            bg-brand
            text-white
            flex flex-row
            justify-between
            px-5
            items-center
            relative
            shadow-bluesm
          "
          ><div
            v-if="book.audio_book.applied_discount"
            class="
              absolute
              right-5
              -top-3
              rounded-full
              py-1
              px-3
              bg-red-500
              text-xs
              shadow-md
            "
          >
            {{ book.audio_book.applied_discount.label }}
          </div>

          <p class="text-xs md:text-sm 2xl:text-lg">Сонсох</p>
          <div class="text-lg 2xl:text-xl font-bold relative">
            <span
              v-if="book.audio_book.applied_discount"
              class="absolute right-0 -bottom-3 text-xs line-through font-light"
              >{{ priceFormat(book.audio_book.original_price) }}</span
            >
            {{
              `${
                book.audio_book.original_price == 0
                  ? 'Үнэгүй'
                  : priceFormat(book.audio_book.price) + ' ₮'
              }`
            }}
          </div>
        </a>
      </div>
    </div>
    <alert
      :isAlerted="isAlerted"
      alertMessage="Зөвхөн Mplus апп дээр татах, унших боломжтой."
    />
  </div>
  <div
    v-else
    class="mx-5 sm:ml-3 sm:mr-5 mt-5 mb-4 flex justify-start purchase"
  >
    <div
      class="
        w-full
        sm:w-6/12
        h-max
        rounded-xl
        flex flex-col
        text-base
        font-medium
      "
    >
      <div class="ctaButton">
        <div v-if="book.ebook">
          <div
            v-if="book.ebook.original_price == 0"
            class="
              transition
              duration-200
              h-16
              w-full
              rounded-2xl
              border-2
              px-4
              border-dashed border-blueGray-200
              flex
              items-center
              justify-center
            "
          >
            <icon-phone
              class="text-blueGray-400 mr-4 flex-shrink-0"
            ></icon-phone>
            <p class="text-xs text-brand flex-grow">
              <span class="font-bold">Mplus</span> апп дээрээс үнэгүй унших
              боломжтой.
            </p>
          </div>
          <a
            v-else
            :href="`${purchaseUrlPrefix}/${book.id}/ebook`"
            class="
              transition
              duration-200
              h-16
              w-full
              rounded-2xl
              bg-brand
              text-white
              flex flex-row
              justify-between
              px-5
              items-center
              relative
              shadow-bluesm
            "
            ><div
              v-if="book.ebook.applied_discount"
              class="
                absolute
                right-5
                -top-3
                rounded-full
                py-1
                px-3
                bg-red-500
                text-xs
                shadow-md
              "
            >
              {{ book.ebook.applied_discount.label }}
            </div>

            <p class="text-xs md:text-sm 2xl:text-lg">Унших</p>
            <div class="text-lg 2xl:text-xl font-bold relative">
              <span
                v-if="book.ebook.applied_discount"
                class="
                  absolute
                  right-0
                  -bottom-3
                  text-xs
                  line-through
                  font-light
                "
                >{{ priceFormat(book.ebook.original_price) }}</span
              >
              {{
                `${
                  book.ebook.original_price == 0
                    ? 'Үнэгүй'
                    : priceFormat(book.ebook.price) + ' ₮'
                }`
              }}
            </div>
          </a>
        </div>
        <div v-else>
          <div
            v-if="book.audio_book.original_price == 0"
            class="
              transition
              duration-200
              h-16
              w-full
              rounded-2xl
              border-2
              px-4
              border-dashed border-blueGray-200
              flex
              items-center
              justify-center
            "
          >
            <icon-phone
              class="text-blueGray-400 mr-4 flex-shrink-0"
            ></icon-phone>
            <p class="text-xs text-brand flex-grow">
              <span class="font-bold">Mplus</span> апп дээрээс үнэгүй сонсох
              боломжтой.
            </p>
          </div>
          <a
            v-else
            :href="`${purchaseUrlPrefix}/${book.id}/audio_book`"
            class="
              transition
              duration-200
              h-16
              w-full
              rounded-2xl
              bg-brand
              text-white
              flex flex-row
              justify-between
              px-5
              items-center
              relative
              shadow-bluesm
            "
            ><div
              v-if="book.audio_book.applied_discount"
              class="
                absolute
                right-5
                -top-3
                rounded-full
                py-1
                px-3
                bg-red-500
                text-xs
                shadow-md
              "
            >
              {{ book.audio_book.applied_discount.label }}
            </div>

            <p class="text-xs md:text-sm 2xl:text-lg">Сонсох</p>
            <div class="text-lg 2xl:text-xl font-bold relative">
              <span
                v-if="book.audio_book.applied_discount"
                class="
                  absolute
                  right-0
                  -bottom-3
                  text-xs
                  line-through
                  font-light
                "
                >{{ priceFormat(book.audio_book.original_price) }}</span
              >
              {{
                `${
                  book.audio_book.original_price == 0
                    ? 'Үнэгүй'
                    : priceFormat(book.audio_book.price) + ' ₮'
                }`
              }}
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- <alert
      :isAlerted="isAlerted"
      alertMessage="Зөвхөн Mplus апп дээр татах, унших боломжтой."
    /> -->
    <!-- <div
      class="z-50 fixed overflow-x-hidden transform transition ease-in-out duration-300 inset-0 md:rounded-2xl md:inset-10 xl:inset-x-1/4 mt-10 rounded-t-2xl bg-white shadow-top flex flex-col"
      :class="isAlerted ? 'translate-y-0' : 'translate-y-beyond'"
    ></div> -->
  </div>
</template>

<script>
import Alert from '@/components/Alert'
import IconPhone from '@/components/icons/IconPhone.vue'

export default {
  props: ['book'],
  components: {
    Alert,
    IconPhone,
  },
  data() {
    return {
      isAlerted: false,
    }
  },
  computed: {
    purchaseUrlPrefix() {
      return this.$config.buyUrl + '/book/purchase'
    },
  },
  methods: {
    priceFormat(value) {
      return parseInt(value).toLocaleString()
    },
    discoundPercent(original, price) {
      return parseInt((price * 100) / original)
    },
    alertShow() {
      this.isAlerted = !this.isAlerted

      setTimeout(() => {
        this.isAlerted = !this.isAlerted
      }, 1500)
    },
  },
}
</script>
10,000
