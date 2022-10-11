<template>
  <button
    class="z-10 absolute top-3 right-3 w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-black transition duration-300"
    @click="confirm"
  >
    <icon-add class="text-white transform rotate-45" />
  </button>
</template>

<script>
import IconAdd from '../../icons/IconAdd.vue'
// import { apiUrl } from './../config/api'

export default {
  components: { IconAdd },
  props: {
    cardLastFourDigits: {
      required: true,
    },
    cardId: {
      required: true,
    },
  },

  data() {
    return {
      processing: false,
    }
  },

  methods: {
    confirm() {
      Swal.fire({
        icon: 'warning',
        title: 'Карт хасах',
        text: `Та **** ${this.cardLastFourDigits} дугаартай картыг хасахдаа итгэлтэй байна уу?`,
        confirmButtonText: 'Карт хасах',
        showDenyButton: true,
        denyButtonText: 'Цуцлах',
      }).then((result) => {
        if (result.isConfirmed) {
          this.removeCard()
        }
      })
    },

    removeCard() {
      this.processing = true

      axios
        .delete(`${apiUrl}/api/billing/cards/${this.cardId}`, {
          withCredentials: true,
        })
        .then(this.onSuccess)
        .catch(this.onError)
    },

    onSuccess(res) {
      this.processing = false

      Swal.fire({
        icon: 'success',
        title: 'Амжилттай',
        text: `**** ${this.cardLastFourDigits} дугаартай карт амжилттай хасагдлаа.`,
        confirmButtonText: 'Хаах',
      })

      this.$emit('removed')
    },
  },
}
</script>
