<template>
  <div class="mt-4 relative">
    <textarea
      v-model="form.comment"
      class="
        w-full
        transition
        duration-300
        noscrollbar
        h-14
        rounded-lg
        bg-blueGray-100
        pl-6
        pr-10
        pt-5
        text-sm
      "
      :placeholder="
        $store.state.auth.loggedIn
          ? 'Сэтгэгдэл үлдээх ...'
          : 'Сэтгэгдэл бичихийн тулд нэвтэрнэ үү!'
      "
      :disabled="$store.state.auth.loggedIn ? false : true"
    ></textarea>

    <button
      type="button"
      class="
        absolute
        right-2
        top-2
        h-10
        w-10
        bg-brand
        flex
        justify-center
        items-center
        rounded-full
      "
      @click="handleSubmit"
      :disabled="$store.state.auth.loggedIn ? false : true"
    >
      <svg
        class="ml-1 w-5"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          class="fill-current text-white"
          d="M3.4 20.4l17.45-7.48c.81-.35.81-1.49 0-1.84L3.4 3.6c-.66-.29-1.39.2-1.39.91L2 9.12c0 .5.37.93.87.99L17 12 2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z"
        />
      </svg>
    </button>
    <alert :isAlerted="isAlerted" alertMessage="Та 5 секунд хүлээнэ үү!" />
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
export default {
  components: {
    Alert,
  },
  props: {
    modelType: {
      type: String,
      required: true,
    },

    modelId: {
      required: true,
    },

    isLoggedIn: {
      require: true,
      default: false,
    },
  },

  data() {
    return {
      form: {
        comment: this.comment,
        reviewable_type: this.modelType,
        reviewable_id: this.modelId,
        platform: 'web',
      },
      isAlerted: false,
    }
  },

  methods: {
    reset() {
      this.form.comment = ''
    },

    handleSubmit() {
      this.$axios
        .post('/api/reviews', this.form)
        .then(this.handleSuccess)
        .catch(this.handleError)
    },

    handleSuccess(res) {
      this.$emit('posted', res.data.data)
      this.reset()
    },

    handleError(err) {
      if (err.response && err.response.data.message) {
        this.alertShow()
      }
    },
    alertShow() {
      this.isAlerted = !this.isAlerted

      setTimeout(() => {
        this.isAlerted = !this.isAlerted
      }, 1500)
    },
  },
}
</script>
