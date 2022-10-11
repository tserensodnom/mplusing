<template>
  <div>
    <div
      class="mt-4 mb-4 w-full text-left relative overflow-hidden"
      :class="{
        'h-max': !collapsed,
        'line-clamp-8 max-h-80': !isBio && collapsed,
        'line-clamp-3 max-h-20': isBio && collapsed,
      }"
    >
      <pre class="z-0"><div v-html="replaceURLs(data)"></div></pre>

      <div
        :class="
          collapsed
            ? 'left-0 bottom-0 w-full h-10 absolute z-1 bg-gradient-to-t from-white'
            : 'hidden'
        "
      ></div>
    </div>
    <div class="nav -mt-4 h-10 flex justify-center text-blueGray-400">
      <a @click="collapsed = !collapsed">
        <svg class="w-8 -ml-1" viewBox="0 0 24 24">
          <path
            class="fill-current"
            d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      require: true,
    },
    isBio: {
      default: false,
    },
  },
  data() {
    return {
      collapsed: true,
    }
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
  },
}
</script>
