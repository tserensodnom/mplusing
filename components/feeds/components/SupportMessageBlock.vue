<template>
  <div
    class="flex flex-col w-full rounded-xl border border-blueGray-100 overflow-hidden"
  >
    <div class="flex flex-row items-center bg-blueGray-100 p-3 space-x-2">
      <img
        :src="messageDetails.user.profile_picture.sm"
        alt=""
        class="w-7 h-7 rounded-full overflow-hidden"
        :class="{
          'border-2 border-blue-400': messageDetails.user_type == 'officer',
        }"
      />
      <div class="flex flex-row flex-grow justify-between items-center">
        <p class="text-black text-sm font-semibold">
          {{ messageDetails.user.name }}
        </p>
        <p class="text-xs text-blueGray-400 font-light">
          Илгээсэн {{ messageDetails.created_at }}
        </p>
      </div>
    </div>
    <pre
      class="z-0 p-3 text-sm font-light"
    ><div v-html="replaceURLs(messageDetails.body)"></div></pre>
    <a
      :href="
        $config.imageBaseUrl +
        '/api/support/tickets/' +
        ticketId +
        '/replies/' +
        messageDetails.id +
        '/attachments/' +
        messageDetails.attachments[0]
      "
      target="_blank"
      v-if="messageDetails.attachments[0]"
      class="px-3 text-sm text-brand font-light"
      @click="
        getImage(
          $config.imageBaseUrl +
            '/api/support/tickets/' +
            ticketId +
            '/replies/' +
            messageDetails.id +
            '/attachments/' +
            messageDetails.attachments[0]
        )
      "
    >
      <img
        class="rounded-md h-10 w-auto overflow-hidden"
        :src="
          this.$config.imageBaseUrl +
          '/api/support/tickets/' +
          ticketId +
          '/replies/' +
          messageDetails.id +
          '/attachments/' +
          messageDetails.attachments[0]
        "
        :alt="messageDetails.attachments[0]"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    messageDetails: {
      required: true,
    },
    ticketId: {
      required: true,
    },
  },
  methods: {
    replaceURLs(message) {
      if (!message) return

      var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
      return message.replace(urlRegex, function (url) {
        var hyperlink = url
        if (!hyperlink.match('^https?:\/\/')) {
          hyperlink = 'http://' + hyperlink
        }
        return (
          '<a class="text-brand" href="' +
          hyperlink +
          '" target="_blank" rel="noopener noreferrer">' +
          url +
          '</a>'
        )
      })
    },
    getImage(api) {
      this.$axios
        .get(api)
        .then((res) => console.log(res.data))
        .catch((e) => console.log(e.data))
    },
  },
}
</script>

<style></style>
