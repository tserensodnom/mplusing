<template>
  <div class="flex flex-col">
    <NuxtLink
      to="/account/support"
      class="hidden md:flex flex-row space-x-3 text-sm items-center cursor-pointer text-brand"
    >
      <icon-arrow-left :overrideColorByFont="true"></icon-arrow-left>
      <p>Тусламжийн хүсэлт</p>
    </NuxtLink>

    <div class="flex flex-col mt-7 space-y-3 font-light">
      <!-- <div
        @click="selectCategory = true"
        class="cursor-pointer w-full rounded-xl p-3 flex items-center text-left justify-between border border-blueGray-100 relative text-sm"
      >
        <p class="flex-grow">
          <span v-if="category == ''">Төрөл</span>
          <span v-else-if="category == 'all'">Бүгд</span>
          <span v-else-if="category == 'ebook'">Цахим ном</span>
          <span v-else-if="category == 'audio_book'">Аудио ном</span>
        </p>
        <icon-arrow-left
          class="transform -rotate-90 transition duration-300"
          :overrideColorByFont="true"
        />
        <div
          v-if="selectCategory"
          class="absolute z-50 inset-x-0 top-0 rounded-xl bg-white border border-blueGray-100 flex flex-col py-3"
        >
          <div
            class="cursor-pointer w-full px-5 py-2 hover:bg-blueGray-100 transition duration-300"
            @click.stop="setCategory('all')"
          >
            Бүгд
          </div>
          <div
            class="cursor-pointer w-full px-5 py-2 hover:bg-blueGray-100 transition duration-300"
            @click.stop="setCategory('ebook')"
          >
            Цахим ном
          </div>
          <div
            class="cursor-pointer w-full px-5 py-2 hover:bg-blueGray-100 transition duration-300"
            @click.stop="setCategory('audio_book')"
          >
            Аудио ном
          </div>
        </div>
      </div> -->
      <select
        v-if="commonTitles"
        name="issuetitle"
        id="issuetitle"
        class="w-full rounded-xl p-3 flex items-center text-left justify-between border border-blueGray-100 relative text-sm"
      >
        <option
          v-for="item in commonTitles.data"
          :key="item.name"
          :value="item.name"
          :selected="$route.params.title == item.name"
        >
          {{ item.name }}
        </option>
        <option
          v-if="!this.$route.params.title"
          value=""
          selected
          disabled
          hidden
        >
          Төрөл сонгоно уу?
        </option>
      </select>
      <!-- <div
        @click="selectDevice = true"
        class="cursor-pointer w-full rounded-xl p-3 flex items-center text-left justify-between border border-blueGray-100 relative text-sm"
      >
        <p class="flex-grow">
          <span v-if="device == ''">Төрөл</span>
          <span v-else-if="device == 'all'">Бүгд</span>
          <span v-else-if="device == 'ebook'">Цахим ном</span>
          <span v-else-if="device == 'audio_book'">Аудио ном</span>
        </p>
        <icon-arrow-left
          class="transform -rotate-90 transition duration-300"
          :overrideColorByFont="true"
        />
        <div
          v-if="selectDevice"
          class="absolute z-40 inset-x-0 top-0 rounded-xl bg-white border border-blueGray-100 flex flex-col py-3"
        >
          <div
            class="cursor-pointer w-full px-5 py-2 hover:bg-blueGray-100 transition duration-300"
            @click.stop="setDevice('all')"
          >
            Бүгд
          </div>
          <div
            class="cursor-pointer w-full px-5 py-2 hover:bg-blueGray-100 transition duration-300"
            @click.stop="setDevice('ebook')"
          >
            Цахим ном
          </div>
          <div
            class="cursor-pointer w-full px-5 py-2 hover:bg-blueGray-100 transition duration-300"
            @click.stop="setDevice('audio_book')"
          >
            Аудио ном
          </div>
        </div>
      </div> -->
      <textarea
        id="issuebody"
        class="rounded-xl p-3 border border-blueGray-100 relative text-sm h-40 font-light"
        placeholder="Ямар тусламж авмаар байгаагаа бичнэ үү? /Доод тал нь 3 тэмдэгт оруулна уу/"
        :value="
          this.$route.params.device
            ? `
            Дараах төхөөрөмжийг миний бүртгэлээс хасаж өгнө үү.
            Төхөөрөмжийн дугаар: ${this.$route.params.device.id},
            Загвар: ${this.$route.params.device.model},`
            : null
        "
      ></textarea>
      <div class="w-full flex flex-row justify-end space-x-3">
        <button-rounded
          :name="'+ Файл нэмэх'"
          :type="'secondary'"
          @clicked="uploadFile"
        ></button-rounded>
        <input type="file" class="hidden" id="fileupload" />
        <button-rounded @clicked="submitForm" :name="'Илгээх'"></button-rounded>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonRounded from '../../../../components/feeds/components/ButtonRounded.vue'
import IconArrowLeft from '../../../../components/icons/IconArrowLeft.vue'
import eventBus from '~/plugins/eventBus'

export default {
  components: { IconArrowLeft, ButtonRounded },
  data() {
    return {
      selectCategory: false,
      category: '',
      selectDevice: false,
      device: '',
      commonTitles: null,
    }
  },
  mounted() {
    this.$axios
      .get(this.$config.accountApiUrl + '/api/support/tickets/categories')
      .then((res) => (this.commonTitles = res.data))
  },
  methods: {
    setCategory(category) {
      this.category = category
      this.selectCategory = false
      this.selectDevice = false
    },
    setDevice(category) {
      this.device = category
      this.selectDevice = false
      this.selectCategory = false
    },
    uploadFile() {
      document.querySelector('#fileupload').click()
    },
    submitForm() {
      var formData = new FormData()
      var imagefile = document.querySelector('#fileupload')
      var body = document.querySelector('#issuebody')
      var title = document.querySelector('#issuetitle')

      formData.append('image', imagefile.files[0])
      formData.append('title', title.value)
      formData.append('body', body.value)

      this.$axios
        .post(this.$config.accountApiUrl + '/api/support/tickets', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((result) => {
          eventBus.$emit('toastSuccess', 'Хүсэлт амжилттай илгээгдлээ')
          setTimeout(() => {
            this.$router.replace(
              '/account/support/ticket/' + result.data.data.id
            )
          }, 1500)
        })
        .catch((err) => {
          eventBus.$emit('toastFailure', 'Хүсэлт илгээхэд алдаа гарлаа')
        })
    },
  },
}
</script>

<style></style>
