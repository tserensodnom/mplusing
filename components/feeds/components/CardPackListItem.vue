<template>
  <div>
    <div
      @click.stop
      class="
        border-t border-blueGray-100
        mt-5
        pt-5
        grid grid-cols-12
        justify-between
        text-xs text-black
        font-semibold
        items-center
        cursor-default
        space-y-3
        xm:space-y-0
      "
    >
      <div
        class="
          col-span-12
          xm:col-span-6
          flex flex-row
          items-center
          justify-center
          xm:justify-start
          space-x-5
        "
      >
        <!-- <a class="hidden sm:block" :href="card.image_url">
          <img :src="card.image_url" class="h-14 w-auto rounded-2xl" />
        </a> -->
        <p
          class="
            flex
            items-center
            justify-center
            p-4
            px-5
            sm:px-10
            rounded-2xl
            bg-blueGray-100
            text-black
            font-bold
            select-all
          "
        >
          {{ card.promo_code }}
        </p>

        <p v-if="card.activated_at" class="text-green-500">Идэвхжүүлсэн</p>

        <p v-else class="text-gray-400">Идэвхжүүлээгүй</p>
      </div>

      <div
        class="
          col-span-12
          xm:col-span-6
          flex flex-row
          items-center
          justify-center
          xm:justify-end
          space-x-5
          text-blueGray-400
        "
      >
      <div class="flex flex-col items-center justify-center">
          <a
            :href="card.web_url"
            target="_blank"
            class="
              cursor-pointer
              rounded-full
              bg-blueGray-200
              hover:bg-blueGray-300
              transition
              duration-300
              w-12
              h-12
              flex
              items-center
              justify-center
              text
              white
            "
          >
            <icon-eye></icon-eye>
          </a>
          <p class="text-xs text-blueGray-400">Үзэх</p>
        </div>
        <div class="flex flex-col items-center justify-center">
          <a
            v-if="this.$route.query['mode'] == 'app'"
            :href="`mplus://q?type=share&url=${
              card.web_url
            }&desc=${encodeURIComponent(
              'Myagmarsuren\'s - Танд бэлэг илгээв'
            )}`"
            class="
              cursor-pointer
              rounded-full
              bg-blueGray-200
              hover:bg-blueGray-300
              transition
              duration-300
              w-12
              h-12
              flex
              items-center
              justify-center
              text
              white
            "
          >
            <icon-mail-send></icon-mail-send>
          </a>
          <a
            v-else
            @click.stop="shareGiftCard()"
            class="
              cursor-pointer
              rounded-full
              bg-blueGray-200
              hover:bg-blueGray-300
              transition
              duration-300
              w-12
              h-12
              flex
              items-center
              justify-center
              text
              white
            "
          >
            <icon-mail-send></icon-mail-send>
          </a>
          <p class="text-xs text-blueGray-400">Илгээх</p>
        </div>
        <div class="flex flex-col justify-center items-center">
          <a
            v-if="this.$route.query['mode'] == 'app'"
            :href="`mplus://q?type=copy&url=${card.web_url}`"
            class="
              cursor-pointer
              rounded-full
              bg-blueGray-200
              hover:bg-blueGray-300
              transition
              duration-300
              w-12
              h-12
              flex
              items-center
              justify-center
              text
              white
            "
          >
            <icon-link></icon-link>
          </a>

          <div
            v-else
            @click.stop="copyCode(card.web_url)"
            class="
              cursor-pointer
              rounded-full
              bg-blueGray-200
              hover:bg-blueGray-300
              transition
              duration-300
              w-12
              h-12
              flex
              items-center
              justify-center
              text
              white
            "
          >
            <icon-link></icon-link>
          </div>
          <p class="text-xs text-blueGray-400">Хуулах</p>
        </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from '~/plugins/eventBus'
import IconDownload from '~/components/icons/IconDownload.vue'
import IconLink from '~/components/icons/IconLink.vue'
import IconEye from '~/components/icons/IconEye.vue'
import IconMailSend from '~/components/icons/IconMailSend.vue'

export default {
  components: { IconDownload, IconLink, IconEye, IconMailSend },

  props: {
    card: {
      required: true,
    },
  },

  methods: {
    copyCode(text) {
      navigator.clipboard.writeText(text)
      eventBus.$emit('toastSuccess', 'Картын холбоос амжилттай хуулагдлаа')
    },

    shareGiftCard() {
      if (!navigator.share) {
        alert('Share feature is off')
        return
      }

      navigator
        .share({
          title: `${this.card.giver_name} - Танд бэлэг илгээлээ`,
          text: this.card.message,
          url: this.card.web_url,
        })
        .then(() => alert('Share success'))
        .catch((error) => {
          alert('share error')
          console.log('Error sharing', error)
        })
    },
  },
}
</script>
