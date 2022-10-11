<template>
  <infinite-scroll
    @more="loadMoreComment"
    v-if="maindata"
    class="flex flex-col"
  >
    <NuxtLink
      to="/account/support"
      class="hidden md:flex flex-row space-x-3 text-sm items-center cursor-pointer text-brand"
    >
      <icon-arrow-left :overrideColorByFont="true"></icon-arrow-left>
      <p>Тусламжийн хүсэлт</p>
    </NuxtLink>
    <div
      class="w-max mt-7 text-white py-1 px-3 rounded-lg text-xs font-semibold"
      :class="maindata[0].status == 'open' ? 'bg-blue-400' : 'bg-green-400'"
    >
      <p v-if="maindata[0].status == 'open'">Нээлттэй</p>
      <p v-else>Шийдвэрлэгдсэн</p>
    </div>
    <p class="mt-3 font-bold text-2xl flex flex-row w-2/3 leading-none">
      {{ maindata[0].title }}
    </p>
    <p class="text-sm font-light text-blueGray-400">
      ID: {{ this.$route.params.ticketnumber }}
    </p>
    <!-- <div
      class="w-full flex flex-row justify-between mt-3 font-semibold text-sm"
    >
      <p class="text-orange-500">Нээлттэй</p>
      <p>ID:561651</p>
    </div> -->
    <div v-if="ticketConversation" class="space-y-5 mt-5">
      <div class="flex flex-col space-y-3">
        <textarea
          id="issuebody"
          class="w-full rounded-xl p-3 border border-blueGray-100 relative text-sm h-20 font-light"
          placeholder="Ямар тусламж авмаар байгаагаа бичнэ үү? /Доод тал нь 3 тэмдэгт оруулна уу/"
        ></textarea>
        <div class="w-full flex flex-row justify-end space-x-3">
          <button-rounded
            :name="'+ Файл нэмэх'"
            :type="'secondary'"
            @clicked="uploadFile"
          ></button-rounded>
          <input type="file" class="hidden" id="fileupload" />
          <button-rounded
            @clicked="validate()"
            :name="'Илгээх'"
          ></button-rounded>
        </div>
      </div>
      <div class="relative pt-7">
        <hr class="border-gray-100" />
        <div
          class="absolute inset-0 flex items-center justify-center text-xs font-light text-blueGray-200"
        >
          <p class="mt-7 bg-white px-3">Харилцан яриа</p>
        </div>
      </div>

      <transition-group name="list-complete" class="flex flex-col">
        <support-message-block
          v-for="item in ticketConversation.data"
          :key="item.id"
          :messageDetails="item"
          :ticketId="maindata[0].id"
          class="mt-5 list-complete-item"
        ></support-message-block>
      </transition-group>
      <div v-if="loading" class="space-y-5">
        <ticket-conversation-skeleton
          v-for="item in 5"
          :key="item"
        ></ticket-conversation-skeleton>
      </div>
    </div>
  </infinite-scroll>
</template>

<script>
import TicketConversationSkeleton from '../../../../components/skeleton/TicketConversationSkeleton.vue'
import InfiniteScroll from '../../../../components/InfiniteScroll.vue'
import ButtonRounded from '../../../../components/feeds/components/ButtonRounded.vue'
import SupportMessageBlock from '../../../../components/feeds/components/SupportMessageBlock.vue'
import IconSendMessage from '../../../../components/icons/IconSendMessage.vue'
import IconArrowLeft from '../../../../components/icons/IconArrowLeft.vue'
import eventBus from '~/plugins/eventBus'

export default {
  components: {
    IconArrowLeft,
    IconSendMessage,
    SupportMessageBlock,
    ButtonRounded,
    InfiniteScroll,
    TicketConversationSkeleton,
  },
  data() {
    return {
      ticketConversation: null,
      maindata: null,
      page: 2,
      loading: false,
    }
  },
  mounted() {
    this.$axios
      .get(
        this.$config.accountApiUrl +
          `/api/support/tickets/${this.$route.params.ticketnumber}/replies`
      )
      .then((res) => (this.ticketConversation = res.data))
    this.$axios
      .get(this.$config.accountApiUrl + '/account/api/support/tickets')
      .then(
        (res) =>
          (this.maindata = res.data.data.filter(
            (ticket) => ticket.id == this.$route.params.ticketnumber
          ))
      )
  },
  methods: {
    loadMoreComment() {
      if (this.page <= this.ticketConversation.meta.last_page) {
        if (this.loading) {
          return
        }

        this.loading = true

        this.$axios
          .get(
            this.$config.accountApiUrl +
              `/api/support/tickets/${this.$route.params.ticketnumber}/replies?` +
              'page[number]=' +
              this.page++
          )
          .then((res) => {
            setTimeout(() => {
              this.loading = false
              res.data.data.forEach((b) => this.ticketConversation.data.push(b))
            }, 500)
          })
      }
    },
    uploadFile() {
      document.querySelector('#fileupload').click()
    },
    submitForm() {
      var formData = new FormData()
      var imagefile = document.querySelector('#fileupload')
      var body = document.querySelector('#issuebody')

      formData.append('image', imagefile.files[0])
      formData.append('body', body.value)

      this.$axios
        .post(
          this.$config.accountApiUrl +
            '/api/support/tickets/' +
            this.$route.params.ticketnumber +
            '/replies',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then((result) => {
          eventBus.$emit('toastSuccess', 'Хүсэлт амжилттай илгээгдлээ')
        })
        .then(() => {
          this.$axios
            .get(
              this.$config.accountApiUrl +
                `/api/support/tickets/${this.$route.params.ticketnumber}/replies`
            )
            .then((res) => (this.ticketConversation = res.data))
        })
        .catch((err) => {
          eventBus.$emit('toastFailure', 'Хүсэлт илгээхэд алдаа гарлаа')
        })
    },

    validate() {
      let message = document.querySelector('#issuebody')

      if (!!message.value) {
        this.submitForm()
        message.value = ''

        return true
      } else {
        return false
      }
    },
  },
}
</script>

<style></style>
