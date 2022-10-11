<template>
  <div
    class="z-40 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="w-80 p-5 rounded-xl bg-white flex flex-col text-center">
      <div @click="$emit('clickClose')" class="flex flex-row justify-end">
        <icon-close :styling="'cursor-pointer w-5 fill-current'"></icon-close>
      </div>

      <icon-phone
        v-if="type == 'phone'"
        class="mx-auto text-brand"
        :resizeMultiply="1.7"
      ></icon-phone>
      <icon-mail
        v-if="type == 'mail'"
        class="mx-auto text-brand"
        :resizeMultiply="1.7"
      ></icon-mail>
      <p class="mt-3 font-light text-sm">
        Таны <span class="font-semibold">{{ email }} </span> хаягт очсон
        баталгаажуулах кодыг оруулна уу?
      </p>
      <form class="flex flex-row justify-between mt-5">
        <input
          class="text-center w-12 py-3 px-1 rounded-xl border-2 uppercase"
          type="text"
          name="code1"
          id="code1"
          placeholder="0"
          maxLength="1"
          required
          @paste="(e) => pasteCode(e)"
          @input="focus('code2')"
        />
        <input
          class="text-center w-12 py-3 px-1 rounded-xl border-2 uppercase"
          type="text"
          name="code2"
          id="code2"
          placeholder="0"
          autofocus
          maxLength="1"
          required
          @paste="(e) => pasteCode(e)"
          @input="focus('code3')"
        />
        <input
          class="text-center w-12 py-3 px-1 rounded-xl border-2 uppercase"
          type="text"
          name="code3"
          id="code3"
          placeholder="0"
          maxLength="1"
          required
          @paste="(e) => pasteCode(e)"
          @input="focus('code4')"
        />
        <input
          class="text-center w-12 py-3 px-1 rounded-xl border-2 uppercase"
          type="text"
          name="code4"
          id="code4"
          placeholder="0"
          maxLength="1"
          required
          @paste="(e) => pasteCode(e)"
          @input="checkCode()"
        />
      </form>
      <div
        @click="checkCode()"
        class="cursor-pointer mt-5 rounded-xl bg-brand py-5 text-sm text-center text-white flex items-center justify-center"
      >
        <icon-load
          v-if="loading"
          :resizeMultiply="0.8"
          class="animate-spin"
        ></icon-load>
        <p v-else>Баталгаажуулах</p>
      </div>
    </div>
  </div>
</template>

<script>
import IconLoad from './icons/IconLoad.vue'
import IconMail from './icons/IconMail.vue'
import IconClose from './icons/IconClose.vue'
import IconPhone from './icons/IconPhone.vue'
import eventBus from '~/plugins/eventBus'
export default {
  components: { IconPhone, IconClose, IconMail, IconLoad },
  props: {
    type: {
      required: true,
    },
    email: {
      required: true,
    },
  },
  data() {
    return {
      loading: false,
    }
  },
  mounted() {
    this.focus('code1')
  },
  methods: {
    // checkCode(code) {
    //   this.loading = true
    //   var formData = new FormData()
    //   if (type == 'phone') {
    //     if (!!code) {
    //       formData.append('new_phone', '123123')
    //       formData.append('new_phone_verification_code', code)
    //     } else {
    //       const code =
    //         document.querySelector('#code1').value +
    //         document.querySelector('#code2').value +
    //         document.querySelector('#code3').value +
    //         document.querySelector('#code4').value
    //       formData.append('new_phone', '123123')
    //       formData.append('new_phone_verification_code', code)
    //     }
    //     this.$axios
    //       .put('/v4/account/phone', formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       })
    //       .catch((error) => {
    //         console.log(error.response)
    //       })
    //   } else {
    //     if (!!code) {
    //       formData.append('new_email', '123123')
    //       formData.append('new_email_verification_code', code)
    //     } else {
    //       const code =
    //         document.querySelector('#code1').value +
    //         document.querySelector('#code2').value +
    //         document.querySelector('#code3').value +
    //         document.querySelector('#code4').value
    //       formData.append('new_email', '123123')
    //       formData.append('new_email_verification_code', code)
    //     }
    //     this.$axios
    //       .put('/v4/account/email', formData, {
    //         headers: {
    //           'Content-Type': 'multipart/form-data',
    //         },
    //       })
    //       .catch((error) => {
    //         console.log(error.response)
    //       })
    //   }
    // },
    checkCode(verificationCode) {
      this.loading = true
      var formData = new FormData()
      if (!!verificationCode) {
        console.log(verificationCode)

        this.$axios
          .put(this.$config.accountApiUrl + '/v4/account/email', {
            new_email: this.email,
            new_email_verification_code: verificationCode,
          })
          .then(() => {
            this.loading = false
            eventBus.$emit('toastSuccess', 'И-мэйл амжилттай баталгаажлаа')
            this.$emit('updateSuccess', this.email)
            this.$emit('clickClose')
          })
          .catch((error) => {
            this.loading = false
            eventBus.$emit('toastFailure', 'Код буруу байна')
          })
      } else {
        const code =
          document.querySelector('#code1').value +
          document.querySelector('#code2').value +
          document.querySelector('#code3').value +
          document.querySelector('#code4').value
        console.log(code)
        this.$axios
          .put(this.$config.accountApiUrl + '/v4/account/email', {
            new_email: this.email,
            new_email_verification_code: code,
          })
          .then(() => {
            this.loading = false
            eventBus.$emit('toastSuccess', 'И-мэйл амжилттай баталгаажлаа')
            this.$emit('updateSuccess', this.email)
            setTimeout(() => {
              this.$emit('clickClose')
            }, 2000)
          })
          .catch((error) => {
            this.loading = false
            eventBus.$emit('toastFailure', 'Код буруу байна')
          })
      }
    },
    pasteCode(e) {
      e.target.value = ''
      let text = e.clipboardData.getData('text')
      document.querySelector('#code1').value = text[0]
      document.querySelector('#code2').value = text[1]
      document.querySelector('#code3').value = text[2]
      document.querySelector('#code4').value = text[3]
      this.checkCode(text)
    },
    focus(input) {
      document.querySelector('#' + input).focus()
    },
  },
}
</script>

<style></style>
