<template>
  <div class="flex flex-col">
    <p
      class="
        pb-4
        hidden
        md:inline md:border-b
        border-blueGray-100
        font-bold
        text-black text-2xl
        mb-5
      "
    >
      Худалдан авсан бэлгийн картууд
    </p>
    <gift-cards-skeleton v-if="loading"></gift-cards-skeleton>
    <div v-else-if="!packs" class="text-sm text-blueGray-400 w-full flex flex-col items-center justify-center">
      <p class="place-self-start">Танд одоогоор худалдаж авсан бэлгийн карт байхгүй байна.</p>
      <div
        class="
          font-bold
          italic
          text-2xl
          mt-5
          p-5
          flex
          justify-center
          text-blueGray-200
          relative
          text-center
        "
      >
      Хэд ч нээсэн уйддаггүй бэлэг бол ном юм
        <icon-quote
          class="opacity-50 -left-2 sm:-left-6 top-0 absolute"
          :resizeMultiply="2"
        ></icon-quote>
      </div>
      <div class="w-full flex justify-center">
        <NuxtLink
          :to="
            '/gift' + (this.$route.query['mode'] == 'app' ? '?mode=app' : '')
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
            place-self-center
            w-full
            sm:w-60
            mt-5
          "
          ><icon-gift></icon-gift>
          <p>Бэлгийн карт авах</p>
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
    </div>
    <div v-else class="w-full space-y-5">
      <card-pack v-for="pack in packs" :pack="pack" :key="pack.id"></card-pack>
    </div>
  </div>
</template>

<script>
import CardPack from '~/components/feeds/components/CardPack.vue'
import GiftCardsSkeleton from '~/components/skeleton/GiftCardsSkeleton.vue'
import IconGift from '~/components/icons/IconGift.vue'
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import IconQuote from '~/components/icons/IconQuote.vue'

export default {
  components: {
    CardPack,
    GiftCardsSkeleton,
    IconGift,
    IconArrowLeft,
    IconQuote,
  },
  data() {
    return {
      loading: true,
      packs: null,
    }
  },
  mounted() {
    this.$axios
      .get(this.$config.accountApiUrl + '/v4/gift/packed-gifts')
      .then((res) => (this.packs = res.data.data))
      .then(
        setTimeout(() => {
          this.loading = false
        }, 1000)
      )
  },
  methods: {},
  transition: 'account-page',
}
</script>
