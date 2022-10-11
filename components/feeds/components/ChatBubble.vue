<template>
  <div class="flex flex-col">
    <div
      class="p-3 mt-3 w-max max-w-xs rounded-xl"
      :class="
        messageDetails.user_type == 'customer'
          ? 'bg-brand text-white place-self-end rounded-br-none'
          : 'bg-blueGray-100 rounded-bl-none'
      "
    >
      {{ messageDetails.body }}
    </div>
    <div
      class="text-xs text-blueGray-300"
      :class="{ 'text-right': messageDetails.user_type }"
    >
      {{ messageDetails.created_at.split(' ')[0] }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageDetails: {
      required: true,
    },
  },
}
</script>

<style></style>
