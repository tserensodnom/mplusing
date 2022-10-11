<template>
  <div
    v-if="item.userEventStatus != 'deleted'"
    class="
      w-full
      flex flex-row
      items-start
      p-5
      border 
      rounded-2xl
      transition duration-300
      relative
    "
    :class="{ 'opacity-60 border-blueGray-100': item.userEventStatus == 'seen', 'bg-blueGray-50' :  item.userEventStatus == 'unseen'}"
  >
    <div v-if="item.userEventStatus == 'unseen'" class="absolute -left-1 -top-1 rounded-full h-4 w-4 bg-red-400"></div>
    <img
      :src="item.image_url"
      :alt="item.name"
      class="w-16 rounded-xl overflow-hidden shadow flex-shrink-0"
    />
    <div class="flex flex-col sm:flex-row flex-grow justify-start sm:justify-between ml-5">
      <div class="flex flex-col justify-start">
        <p class="font-bold text-sm sm:text-base">{{ item.title }}</p>
        <p class="font-regular text-xs sm:text-sm leading-none">
          {{ item.body }}
        </p>
      </div>
      <div
        class="
          flex flex-row
          sm:flex-col
          flex-shrink-0
          h-full
          justify-end
          sm:justify-evenly
        "
      >
        <a
          v-if="item.userEventStatus != 'seen'"
          @click="notifStatus(item.id, 'seen')"
          class="
            w-7
            h-7
            m-2
            rounded-full
            bg-green-200
            text-green-600
            cursor-pointer
            flex
            items-center
            justify-center
          "
        >
          <icon-success></icon-success>
        </a>
        <a
          @click="notifStatus(item.id, 'deleted')"
          class="
            w-7
            h-7
            m-2
            rounded-full
            bg-red-200
            text-red-600
            cursor-pointer
            flex
            items-center
            justify-center
          "
        >
          <icon-trash></icon-trash>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import IconSuccess from '~/components/icons/IconSuccess.vue'
import IconTrash from '~/components/icons/IconTrash.vue'

export default {
  components: {
    IconSuccess,
    IconTrash,
  },
  props: {
    item: {
      required: true,
    },
  },
  methods: {
    notifStatus(id, type) {
      this.$axios
        .post(
          this.$config.accountApiUrl +
            '/api/notification/notifications/events',
          {
           
            status: type,
            notification_id: id,
          },
          { withCredentials: true }
        )
        .then((res) => {
          this.$emit('changed', res.data.data)
        })
    },
  },
}
</script>

<style></style>
