<template>
  <div class="relative">
    <icon-bell></icon-bell>
    <div
      v-if="
        $store.state.notifications.notifs.data && $store.state.notifications.notifs.data.length && $store.state.notifications.notifs.data.filter(
          (i) => i.userEventStatus == 'unseen'
        ).length
      "
      class="
        absolute
        -top-1
        -left-1
        flex
        items-center
        justify-center
        bg-red-400
        rounded-full
        w-4
        h-4
        text-xs text-white
      "
    >
      {{
        $store.state.notifications.notifs.data.filter(
          (i) => i.userEventStatus == 'unseen'
        ).length
      }}
    </div>
  </div>
</template>

<script>
import IconBell from '~/components/icons/IconBell.vue'

export default {
  components: {
    IconBell,
  },
}
</script>

<style></style>
