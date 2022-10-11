<template>
  <div class="w-full">
    <card-list-skeleton
      v-if="loading"
      :expand="true"
      :count="quantity"
    ></card-list-skeleton>

    <div v-else class="w-full">
      <div class="py-4">
        Та энэхүү номыг бэлгийн карт хэлбэрээр {{ result.cards.length }} ширхэгийг худалдан авсан байна.
      </div>

      <card-pack-list-item
        v-for="item in result.cards"
        :key="item.id"
        :card="item"
      ></card-pack-list-item>
    </div>
  </div>
</template>

<script>
import CardListSkeleton from '~/components/skeleton/CardListSkeleton.vue'
import CardPackListItem from '~/components/feeds/components/CardPackListItem.vue'
export default {
  components: { CardListSkeleton, CardPackListItem },
  props: {
    card_id: {
      required: true,
    },
    quantity: {
      required: true,
    },
  },
  data() {
    return {
      result: null,
      loading: true,
      expand: false,
    }
  },
  mounted() {
    this.$axios
      .get(this.$config.accountApiUrl + '/v4/gift/packed-gifts/' + this.card_id)
      .then((res) => (this.result = res.data.data))
      .then(
        setTimeout(() => {
          this.loading = false
        }, 1000)
      )
  },
  transition: 'account-page',
}
</script>
