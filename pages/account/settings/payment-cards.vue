<template>
  <div class="flex flex-col">
    <!-- classes for bank color -->
    <div
      v-if="false"
      class="bg-bank-khanbank bg-bank-golomt bg-bank-statebank bg-bank-xacbank bg-bank-tdb"
    ></div>
    <div
      class="w-full flex flex-row justify-start md:justify-between md:border-b border-blueGray-100 items-center"
    >
      <p class="hidden md:inline pb-4 font-bold text-black text-2xl">
        Банкны карт холбох
      </p>
      <icon-hi-pay class="h-6 w-12" />
    </div>
    <p class="text-xs text-blueGray-400 mt-3 font-light">
      Монголын аль ч банкны дурын дебит болон кредит картыг холбож болно
    </p>

    <swiper
      v-if="cards && cards.length > 0"
      class="w-full mt-5"
      :options="{ spaceBetween: 10, slidesPerView: 'auto' }"
    >
      <swiper-slide
        v-for="card in cards"
        :key="card.id"
        class="w-72 h-40 rounded-2xl mt-3 relative overflow-hidden"
        :class="`bg-bank-` + card.bank"
      >
        <div
          class="z-20 cursor-pointer absolute top-3 right-3 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black transition duration-300"
          @click="showConfirmation(card)"
        >
          <icon-add class="text-white transform rotate-45" />
        </div>

        <div class="z-0 w-full h-full flex flex-col">
          <div
            class="z-20 absolute top-3 left-3 w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
          >
            <img
              :src="require(`~/assets/img/${card.bank}.jpg`)"
              :alt="card.bank"
            />
          </div>
          <div
            class="w-full z-10 bg-black h-10 mt-7 flex items-center text-gray-200 bg-opacity-5"
          ></div>

          <div
            class="z-10 flex flex-row items-center justify-between text-white px-4 mt-2"
          >
            <p>**** **** **** {{ card.last_four_digits }}</p>
            <p>{{ card.expiry_month }} / {{ card.expiry_year }}</p>
          </div>

          <div class="z-10 flex flex-row justify-start text-white px-4 mt-3">
            <p>{{ card.holder }}</p>
          </div>
          <!-- <div
            class="z-0 absolute h-96 w-96 -right-full top-0 bg-black opacity-5 transform rotate-12"
          ></div>
          <div
            class="z-0 absolute h-96 w-96 -right-60 top-12 bg-black opacity-5 transform rotate-45"
          ></div> -->
          <div
            class="z-0 absolute h-100 w-100 rounded-full -right-48 top-0 bg-black opacity-5"
          ></div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- v-if="cards && cards.length == 0" -->
    <swiper
      v-else
      class="w-full mt-5"
      :options="{ spaceBetween: 10, slidesPerView: 'auto' }"
    >
      <!-- Хэрэглэгч ямар ч банкны карт холбоогүй үед ингэж харагдана -->
      <swiper-slide class="w-72 h-40 bg-blueGray-200 rounded-2xl mt-3 relative">
        <a
          :href="`${this.$config.apiUrl}/api/billing/cards/add?return_url=${currentUrl}`"
          class="w-full h-full flex flex-col justify-between"
          @click="processing = true"
        >
          <div
            class="w-full bg-black h-10 mt-7 flex items-center text-gray-200 bg-opacity-5 px-5 text-white"
          >
            XXXX XXXX XXXX XXXX
          </div>

          <div class="flex">
            <div
              class="w-full m-5 bg-brand rounded-lg py-3 flex flex-row justify-between items-center text-white text-xs font-bold px-5"
            >
              <p>Карт холбох</p>
              <icon-add />
            </div>
          </div>
        </a>
      </swiper-slide>
    </swiper>

    <a
      v-if="cards && cards.length > 0"
      :href="`${this.$config.apiUrl}/api/billing/cards/add?return_url=${currentUrl}`"
      class="flex flex-row mt-3 rounded-full border-2 p-2 w-max border-blueGray-100 text-sm items-center"
      @click="
        () => {
          this.loading = true
          setTimeout(() => {
            this.loading = false
          }, 4000)
        }
      "
    >
      <div>
        <icon-add :resizeMultiply="0.8" />
      </div>

      <p class="ml-2 pr-2">Карт нэмэх</p>
    </a>
    <p class="font-light text-red-400 mt-5">Санамж:</p>
    <p class="text-xs text-blueGray-400 font-light w-full md:w-1/2">
      Нэг хэрэглэгч 3 хүртлэх төхөөрөмж ашиглэх эрхтэй. Бусад хүнд login
      худалдах, өгөх боломжгүй.
    </p>

    <div
      v-if="showRemoveCardModal"
      class="z-50 fixed inset-0 flex flex-row items-center justify-center bg-black bg-opacity-50"
    >
      <div
        class="rounded-xl bg-white w-80 lg:w-96 flex flex-col justify-between p-3 pb-5 text-center relative"
      >
        <div class="w-full flex flex-row justify-end text-blueGray-200">
          <a @click="showRemoveCardModal = false"
            ><icon-add :resizeMultiply="1.7" class="transform rotate-45"
          /></a>
        </div>
        <div class="w-full px-3 flex-grow flex-col mt-3">
          <div
            class="w-full h-14 rounded-lg flex flex-row justify-between items-center p-2 text-white text-sm sm:text-base"
            :class="`bg-bank-` + selectedCard.bank"
          >
            <img
              :src="require(`~/assets/img/${selectedCard.bank}.jpg`)"
              class="rounded-md overflow-hidden h-10 w-10"
            />
            <p>**** **** **** {{ selectedCard.last_four_digits }}</p>
            <p class="mr-2">
              {{ selectedCard.expiry_month }} / {{ selectedCard.expiry_year }}
            </p>
          </div>
        </div>
        <div class="w-full p-10 text-center flex items-center justify-center">
          Та энэ картыг хасахдаа итгэлтэй байна уу?
        </div>
        <div class="w-full px-3 flex flex-row space-x-3">
          <div
            class="cursor-pointer w-1/2 p-4 text-sm bg-blueGray-100 rounded-2xl"
            @click="showRemoveCardModal = false"
          >
            Цуцлах
          </div>
          <div
            class="cursor-pointer w-1/2 p-4 text-sm bg-brand rounded-2xl text-white flex items-center justify-center"
            @click="deleteCard(selectedCard)"
          >
            <icon-load
              v-if="processing"
              class="animate-spin"
              :resizeMultiply="0.8"
            ></icon-load>
            <p v-else>Тийм</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconLoad from '../../../components/icons/IconLoad.vue'
// import { apiUrl } from "@/config/api";
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import RemovePaymentCard from '~/components/feeds/components/RemovePaymentCard.vue'
import IconHiPay from '~/components/icons/IconHiPay.vue'
import IconAdd from '~/components/icons/IconAdd.vue'
import eventBus from '~/plugins/eventBus'
export default {
  components: {
    Swiper,
    SwiperSlide,
    RemovePaymentCard,
    IconHiPay,
    IconAdd,
    IconLoad,
  },

  data() {
    return {
      loading: false,
      processing: false,
      cards: null,
      currentUrl: null,
      selectedCard: null,
      showRemoveCardModal: false,
    }
  },

  mounted() {
    this.currentUrl = window.location.href
    this.$axios
      .get(this.$config.accountApiUrl + '/api/billing/cards')
      .then((result) => {
        this.cards = result.data.data
      })
      .catch((err) => {})
  },

  methods: {
    showConfirmation(card) {
      this.selectedCard = card
      this.showRemoveCardModal = true
    },
    deleteCard(card) {
      this.processing = true

      this.$axios
        .delete(this.$config.accountApiUrl + '/api/billing/cards/' + card.id, {
          withCredentials: true,
        })
        .then(() => {
          eventBus.$emit('toastSuccess', 'Карт амжилттай устгагдлаа')
          this.processing = false
          this.showRemoveCardModal = false
          setTimeout(() => {
            location.reload()
          }, 1500)
        })
        .catch(() => {
          eventBus.$emit('toastFailure', 'Карт устгахад алдаа гарлаа')
        })
    },
  },
  transition: 'account-page',
}
</script>
