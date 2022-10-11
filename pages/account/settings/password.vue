<template>
  <div class="flex flex-col">
    <p
      class="pb-4 hidden md:inline md:border-b border-blueGray-100 font-bold text-black text-2xl"
    >
      Нууц үг солих
    </p>
    <form class="mt-5 text-sm text-blueGray-400 font-light">
      <label for="current_password">Хуучин нууц үг</label>
      <div class="relative mt-2">
        <input
          :type="seeOldPassword ? 'text' : 'password'"
          name="current_password"
          id="current_password"
          class="w-full rounded-xl border p-3 text-black transition duration-300"
          :class="oldPasswordWrong ? 'border-red-400' : 'border-blueGray-200'"
          placeholder="-"
        />
        <a
          v-if="!seeOldPassword"
          @click="seeOldPassword = !seeOldPassword"
          class="absolute right-5 top-4"
        >
          <icon-eye-see></icon-eye-see>
        </a>
        <a
          v-else
          @click="seeOldPassword = !seeOldPassword"
          class="absolute right-5 top-4"
        >
          <icon-eye-no-see></icon-eye-no-see>
        </a>
      </div>
      <label class="block mt-5" for="new_password">Шинэ нууц үг</label>
      <div class="relative mt-2">
        <input
          :type="seeNewPassword ? 'text' : 'password'"
          name="new_password"
          id="new_password"
          class="w-full rounded-xl border p-3 text-black transition duration-300"
          :class="
            passwordNotMatching ? 'border-red-400' : 'border-blueGray-200'
          "
          placeholder="******"
        />
        <a
          v-if="!seeNewPassword"
          @click="seeNewPassword = !seeNewPassword"
          class="absolute right-5 top-4"
        >
          <icon-eye-see></icon-eye-see>
        </a>
        <a
          v-else
          @click="seeNewPassword = !seeNewPassword"
          class="absolute right-5 top-4"
        >
          <icon-eye-no-see></icon-eye-no-see>
        </a>
      </div>
      <label class="block mt-5" for="new_password_confirmation"
        >Нууц үг баталгаажуулалт</label
      >
      <div class="relative mt-2">
        <input
          :type="seeNewPasswordRepeat ? 'text' : 'password'"
          name="new_password_confirmation"
          id="new_password_confirmation"
          class="w-full rounded-xl border p-3 text-black transition duration-300"
          :class="
            passwordNotMatching ? 'border-red-400' : 'border-blueGray-200'
          "
          placeholder="******"
        />
        <a
          v-if="!seeNewPasswordRepeat"
          @click="seeNewPasswordRepeat = !seeNewPasswordRepeat"
          class="absolute right-5 top-4"
        >
          <icon-eye-see></icon-eye-see>
        </a>
        <a
          v-else
          @click="seeNewPasswordRepeat = !seeNewPasswordRepeat"
          class="absolute right-5 top-4"
        >
          <icon-eye-no-see></icon-eye-no-see>
        </a>
      </div>
      <p class="text-xs font-light mt-2">
        Багадаа 6-н тэмдэгтийн урттай байна.
      </p>
    </form>
    <div class="w-full flex flex-row justify-end space-x-3 mt-5">
      <div
        @click="clearForm()"
        class="p-4 rounded-2xl bg-blueGray-200 w-40 text-center text-sm cursor-pointer"
      >
        Цуцлах
      </div>
      <div
        @click="changePassword()"
        class="p-4 rounded-2xl bg-brand text-white w-40 text-center text-sm cursor-pointer"
      >
        Хадгалах
      </div>
    </div>
  </div>
</template>

<script>
import IconEyeNoSee from '~/components/icons/IconEyeNoSee.vue'
import IconEyeSee from '~/components/icons/IconEyeSee.vue'
import eventBus from '~/plugins/eventBus'

export default {
  components: { IconEyeSee, IconEyeNoSee },
  data() {
    return {
      seeOldPassword: false,
      seeNewPassword: false,
      seeNewPasswordRepeat: false,
      passwordNotMatching: false,
      oldPasswordWrong: false,
    }
  },
  methods: {
    clearForm() {
      document.querySelector('#current_password').value = ''
      document.querySelector('#new_password').value = ''
      document.querySelector('#new_password_confirmation').value = ''
    },
    changePassword() {
      let newPass = document.querySelector('#new_password').value
      let newPassConf = document.querySelector('#new_password_confirmation')
        .value
      let oldPass = document.querySelector('#current_password').value

      if (newPass != newPassConf) {
        this.oldPasswordWrong = false
        this.passwordNotMatching = true
        eventBus.$emit('toastFailure', 'Шинэ нууц үгүүд тохирохгүй байна')
        return false
      } else {
        this.$axios
          .put(this.$config.accountApiUrl + '/v4/account/password', {
            current_password: oldPass,
            new_password: newPass,
            new_password_confirmation: newPassConf,
          })
          .then((result) => {
            this.passwordNotMatching = false
            this.oldPasswordWrong = false
            this.clearForm()
            eventBus.$emit('toastSuccess', 'Нууц үг амжилттай солигдлоо')
          })
          .catch((err) => {
            this.passwordNotMatching = false
            this.oldPasswordWrong = true
            eventBus.$emit('toastFailure', 'Хуучин нууц үг буруу')
          })
      }
    },
  },
  transition: 'account-page',
}
</script>

<style></style>
