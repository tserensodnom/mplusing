<template>
  <div class="flex flex-col">
    <div
      @click="expand = !expand"
      class="
        cursor-pointer
        w-full
        rounded-2xl
        border border-blueGray-200
        p-5
        flex flex-col
        text-sm
      "
    >
      <div
        class="
          grid grid-cols-12
          justify-between
          text-xs text-black
          font-semibold
          items-center
        "
      >
        <div
          class="
            col-span-5
            xs:col-span-6
            flex flex-row
            items-center
            justify-start
            space-x-5
          "
        >
          <div class="h-14 w-14">
            <img
              :src="pack.product_image"
              alt=""
              class="rounded-xl h-full w-auto mx-auto shadow-md"
            />
          </div>
          <p class="font-semibold hidden xs:inline">{{ pack.product_name }}</p>
        </div>
        <div
          class="
            col-span-7
            xs:col-span-6
            flex flex-row
            items-center
            justify-end
            space-x-10
            text-blueGray-400
          "
        >
          <p class="hidden sm:inline">{{ splitOnlyDate(pack.paid_at) }}</p>
          <div>
            <p
              class="
                h-10
                px-3
                flex
                justify-center
                items-center
                text-center
                font-bold
                text-brand
                rounded-lg
                bg-blueGray-100
                text-sm
              "
            >
              {{ pack.quantity }}
              <span class="ml-1"> карт</span>
            </p>
          </div>
          <!-- <div
            @click.stop=""
            class="
              w-40
              rounded-2xl
              flex flex-row
              items-center
              justify-center
              transition
              duration-300
              h-12
              bg-brand-dark
              hover:bg-brand
              text-white
              font-bold
            "
          >
            Бүгдийг татах
          </div> -->
          <icon-arrow-left
            class="transform transition duration-300 flex-shrink-0"
            :class="expand ? '-rotate-90' : 'rotate-135'"
            :overrideColorByFont="true"
          ></icon-arrow-left>
        </div>
      </div>

      <card-pack-list
        v-if="expand"
        :quantity="pack.quantity"
        :card_id="pack.id"
      ></card-pack-list>
    </div>
  </div>
</template>

<script>
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import CardPackList from '~/components/feeds/components/CardPackList.vue'

export default {
  components: { IconArrowLeft, CardPackList },
  props: {
    pack: {
      required: true,
    },
  },
  data() {
    return {
      result: null,
      loading: true,
      packs: null,
      expand: false,
    }
  },
  mounted() {
    if (this.$route.query['pack_id'] == this.pack.id) {
      this.expand = true
    }
    this.$axios
      .get(this.$config.accountApiUrl + '/v4/gift/packed-gifts')
      .then((res) => (this.packs = res.data.data))
      .then(
        setTimeout(() => {
          this.loading = false
        }, 1000)
      )
  },
  methods: {
    splitOnlyDate(time) {
      let tmp = time.split(' ')[0]
      return tmp
    },
  },
  transition: 'account-page',
}
</script>
