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
      Хувийн мэдээлэл
    </p>
    <div class="w-full flex items-center justify-center mt-10">
      <div class="relative">
        <img
          :src="this.$store.state.auth.user.cover_url"
          alt=""
          class="
            object-cover
            rounded-3xl
            w-36
            h-36
            overflow-hidden
            bg-blueGray-400
          "
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            @click="uploadFile()"
            class="
              cursor-pointer
              w-14
              h-14
              bg-black
              opacity-50
              rounded-full
              backdrop-filter backdrop-blur
              flex
              items-center
              justify-center
              text-white
            "
          >
            <icon-camera></icon-camera>
          </div>
          <input
            type="file"
            accept=".jpg,.jpeg"
            class="hidden"
            id="imageupload"
            @change="changeImage()"
          />
        </div>
      </div>
    </div>

    <form class="w-full mt-5 text-sm">
      <label for="regionnumber" class="block font-light text-blueGray-400 mt-3"
        >Утас</label
      >
      <div class="mt-1 flex flex-row">
        <div class="pr-3">
          <div class="rounded-xl bg-blueGray-100 p-3.5">+976</div>
        </div>
        <div class="flex-grow relative">
          <input
            type="tel"
            name="userphonenumber"
            id="userphonenumber"
            :value="newPhone"
            class="
              rounded-xl
              border border-blueGray-200
              w-full
              p-3
              focus:border-blue-400
              transition
              duration-300
            "
            :class="{ 'bg-blueGray-100': !editPhone }"
            :disabled="editPhone ? false : true"
            maxlength="8"
            minlength="8"
          />
          <div
            class="
              absolute
              right-0
              inset-y-0
              flex
              items-center
              justify-center
              pr-2
            "
          >
            <div
              v-if="editPhone"
              @click="changePhone()"
              class="cursor-pointer bg-brand rounded-xl text-white p-2"
            >
              <icon-check :resizeMultiply="0.8"></icon-check>
            </div>
            <div
              v-else
              @click="editPhone = true"
              class="cursor-pointer bg-brand rounded-xl text-white p-2"
            >
              <icon-pen-duo :resizeMultiply="0.8"></icon-pen-duo>
            </div>
          </div>
        </div>
      </div>
      <label for="regionnumber" class="block font-light mt-3 text-blueGray-400"
        >И-мэйл</label
      >

      <div class="flex-grow relative mt-1">
        <input
          type="text"
          name="useremail"
          id="useremail"
          :value="newMail"
          class="
            rounded-xl
            border border-blueGray-200
            w-full
            p-3
            focus:border-blue-400
            transition
            duration-300
          "
          :class="{ 'bg-blueGray-100': !editMail }"
          :disabled="editMail ? false : true"
        />
        <div
          class="
            absolute
            right-0
            inset-y-0
            flex
            items-center
            justify-center
            pr-2
          "
        >
          <div
            v-if="editMail"
            @click="openModal('mail')"
            class="cursor-pointer bg-brand rounded-xl text-white p-2"
          >
            <icon-check :resizeMultiply="0.8"></icon-check>
          </div>
          <div
            v-else
            @click="editMail = true"
            class="cursor-pointer bg-brand rounded-xl text-white p-2"
          >
            <icon-pen-duo :resizeMultiply="0.8"></icon-pen-duo>
          </div>
        </div>
      </div>
      <div class="pt-7 pb-3">
        <hr class="border-blueGray-200" />
      </div>
      <label for="regionnumber" class="block font-light mt-3 text-blueGray-400"
        >Хэрэглэгчийн нэр</label
      >
      <input
        type="text"
        name="username"
        id="username"
        :value="username"
        class="
          mt-1
          rounded-xl
          border border-blueGray-200
          w-full
          p-3
          focus:border-blue-400
          transition
          duration-300
        "
      />

      <label for="birthyear" class="block font-light mt-3 text-blueGray-400"
        >Төрсөн он, сар, өдөр</label
      >
      <div class="mt-1 flex flex-row justify-start space-x-3">
        <div class="w-1/4">
          <select
            name="birthyear"
            id="birthyear"
            class="w-full rounded-xl border border-blueGray-200 p-3.5"
          >
            <option v-if="!birthdate" value="" selected>Он</option>
            <option
              v-for="(item, index) in 80"
              :key="index"
              :selected="checkBirthDate('year', 1940 + item)"
              :value="1940 + item"
            >
              {{ 1940 + item }}
            </option>
          </select>
        </div>
        <div class="w-1/4">
          <select
            name="birthmonth"
            id="birthmonth"
            class="w-full rounded-xl border border-blueGray-200 p-3.5"
          >
            <option v-if="!birthdate" value="" selected>Сар</option>
            <option
              :value="item"
              v-for="(item, index) in 12"
              :key="index"
              :selected="checkBirthDate('month', item)"
            >
              {{ item }}
            </option>
          </select>
        </div>
        <div class="w-1/4">
          <select
            name="birthday"
            id="birthday"
            class="w-full rounded-xl border border-blueGray-200 p-3.5"
          >
            <option v-if="!birthdate" value="" selected>Өдөр</option>
            <option
              v-for="(item, index) in 31"
              :key="index"
              :value="item"
              :selected="checkBirthDate('day', item)"
            >
              {{ item }}
            </option>
          </select>
        </div>
      </div>
      <label for="genderpick" class="block font-light mt-3 text-blueGray-400"
        >Хүйс</label
      >
      <div class="flex flex-row space-x-3 mt-1" id="genderpick">
        <div
          class="
            cursor-pointer
            w-1/4
            rounded-xl
            border border-blueGray-200
            p-3.5
            flex flex-row
            justify-between
            items-center
            transition
            duration-300
          "
          :class="{
            'bg-blueGray-200 text-green-400': gender == 'male',
          }"
          @click="gender = 'male'"
        >
          <p class="text-black">Эр</p>
          <icon-gender-male></icon-gender-male>
        </div>
        <div
          class="
            cursor-pointer
            w-1/4
            rounded-xl
            border border-blueGray-200
            p-3.5
            flex flex-row
            justify-between
            items-center
            transition
            duration-300
          "
          :class="{
            'bg-blueGray-200 text-green-400': gender == 'female',
          }"
          @click="gender = 'female'"
        >
          <p class="text-black">Эм</p>
          <icon-gender-female></icon-gender-female>
        </div>
      </div>
      <div
        @click="saveUserInfo()"
        class="w-full flex flex-row justify-end space-x-3 mt-7"
      >
        <div
          class="
            p-4
            rounded-2xl
            bg-brand
            text-white
            w-40
            text-center text-sm
            cursor-pointer
          "
        >
          Хадгалах
        </div>
      </div>
    </form>
    <confirm-code-modal
      :email="newEmail"
      v-if="showModal"
      :type="modalType"
      @clickClose="closeModal()"
      @updateSuccess="
        (item) => {
          this.newEmail = item
          this.editMail = false
        }
      "
    ></confirm-code-modal>
  </div>
</template>

<script>
import ConfirmCodeModal from '~/components/ConfirmCodeModal.vue'
import IconCheck from '~/components/feeds/components/IconCheck.vue'
import IconChecked from '~/components/icons/IconChecked.vue'
import IconPenDuo from '~/components/icons/IconPenDuo.vue'
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import IconGenderFemale from '~/components/icons/IconGenderFemale.vue'
import IconGenderMale from '~/components/icons/IconGenderMale.vue'
import IconCamera from '~/components/icons/IconCamera.vue'
import eventBus from '~/plugins/eventBus'

export default {
  components: {
    IconArrowLeft,
    IconGenderFemale,
    IconGenderMale,
    IconCamera,
    IconPenDuo,
    IconChecked,
    IconCheck,
    ConfirmCodeModal,
  },
  data() {
    return {
      selectCountryCode: false,
      gender: this.$store.state.auth.user.gender,
      editPhone: false,
      editMail: false,
      modalType: null,
      showModal: false,
      newPhone: this.$store.state.auth.user.phone,
      newMail: this.$store.state.auth.user.email,
      username: this.$store.state.auth.user.name,
      birthdate: this.$store.state.auth.user.birth_date,
    }
  },
  mounted() {
    this.birthdate = this.$store.state.auth.user.birth_date
  },
  methods: {
    checkBirthDate(date, option) {
      if (this.birthdate) {
        if (date == 'year' && this.birthdate.split('-')[0] == option) {
          return true
        } else if (date == 'month' && this.birthdate.split('-')[1] == option) {
          return true
        } else if (date == 'day' && this.birthdate.split('-')[2] == option) {
          return true
        }
      }
      return false
    },
    uploadFile() {
      document.querySelector('#imageupload').click()
    },
    closeModal() {
      this.showModal = false
    },
    openModal(type) {
      if (this.validateEmail(document.querySelector('#useremail').value)) {
        let mail = document.querySelector('#useremail').value
        if (mail == this.$store.state.auth.user.email) {
          this.editMail = false
          return
        }
        this.newEmail = mail
        this.$axios
          .post(this.$config.accountApiUrl + '/v4/auth/otp', {
            identifier: mail,
            identifier_usage: 'must_unused',
          })
          .then((res) => {
            this.modalType = type
            this.showModal = true
          })
          .catch((err) => {
            eventBus.$emit('toastFailure', err.response.data.message)
            return
          })
      } else {
        eventBus.$emit('toastFailure', 'И-мэйл буруу байна')
      }
    },
    validateEmail(inputText) {
      var mailformat =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      if (inputText.match(mailformat)) {
        return true
      } else {
        return false
      }
    },
    changeImage() {
      // console.log('changed')
      var formData = new FormData()
      formData.append('image', document.querySelector('#imageupload').files[0])

      this.$axios
        .post(
          this.$config.accountApiUrl + '/v4/account/profile/image',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        .then(() => {
          eventBus.$emit('toastSuccess', 'Зураг амжилттай солигдлоо')
          setTimeout(() => {
            location.reload()
          }, 1500)
        })
        .catch(() => {
          eventBus.$emit('toastFailure', 'Зураг солиход алдаа гарлаа')
        })
    },
    changePhone() {
      if (this.checkPhone()) {
        this.$axios
          .put(this.$config.accountApiUrl + '/api/user', {
            phone: this.checkPhone(),
          })
          .then(() => {
            eventBus.$emit('toastSuccess', 'Утасны дугаар амжилттай солигдлоо')
            this.newPhone = this.checkPhone()
            this.editPhone = false
          })
          .catch((err) => {})
      } else {
        eventBus.$emit('toastFailure', 'Оруулсан утасны дугаар буруу байна')
      }
    },
    checkPhone() {
      let phone = document.querySelector('#userphonenumber').value

      if (
        phone.length < 8 ||
        [8, 9].indexOf(parseInt(phone[0])) < 0 ||
        !/^\d+$/.test(phone)
      ) {
        return false
      }

      return phone
    },
    saveUserInfo() {
      let username = document.querySelector('#username').value
      let birthyear = document.querySelector('#birthyear').value
      let birthmonth = document.querySelector('#birthmonth').value
      let birthday = document.querySelector('#birthday').value
      let birthdate = birthyear + '-' + birthmonth + '-' + birthday

      this.$axios
        .put(this.$config.accountApiUrl + '/v4/account/profile', {
          name: username,
          birth_date: birthdate,
          gender: this.gender,
        })
        .then(() => {
          this.birthdate = birthdate
          this.username = username
          eventBus.$emit(
            'toastSuccess',
            'Хэрэглэгчийн мэдээлэл амжилттай хадгалагдлаа'
          )
        })
        .catch(() => {
          eventBus.$emit(
            'toastSuccess',
            'Хэрэглэгчийн мэдээлэл хадгалхад алдаа гарлаа'
          )
        })
    },
  },
  transition: 'account-page',
}
</script>

<style></style>
