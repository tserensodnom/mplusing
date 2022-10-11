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
      "
    >
      Мэдэгдэл
    </p>
    <div
      v-if="
        notifs.data &&
        notifs.data.length
      "
      class="flex flex-col space-y-5 mt-5"
    >
      <notification-single
        v-for="item in notifs.data"
        :key="item.id"
        :item="item"
        @changed="updateNotifs"
      ></notification-single>
    </div>
    <div v-else class="font-regular text-blueGray-400 py-5">
      Танд шинэ мэдэгдэл ирээгүй байна
    </div>
  </div>
</template>
<script>
import NotificationSingle from '~/components/feeds/components/NotificationSingle.vue'
import SavedBooks from '~/components/feeds/components/SavedBooks.vue'

export default {
  components: { SavedBooks, NotificationSingle },
  data() {
    return {
      notifs: this.$store.state.notifications.notifs,
    }
  },
  methods: {
    updateNotifs(data) {
      let tmp = { data: null }
      tmp.data = this.$store.state.notifications.notifs.data.map((i) => {
        if (i.id == data.notification_id) {
          return { ...i, userEventStatus: data.status }
        } else {
          return i
        }
      })
      this.$store.commit('notifications/UPDATE_NOTIFICATIONS', tmp)
      this.notifs = this.$store.state.notifications.notifs
    },
  },
  transition: 'account-page',
}
</script>
