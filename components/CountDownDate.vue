<template>
  <p v-if="ended" class="font-bold text-2xl text-brand">Уралдаан дууссан</p>
  <p v-else class="font-bold text-4xl">
    <span v-if="formattedRemainingTime.d > 0" class="text-brand"
      >{{ formattedRemainingTime.d }} өдөр
      <span class="hidden xs:inline-block"
        >{{ formattedRemainingTime.h }}:{{ formattedRemainingTime.m }}:{{
          formattedRemainingTime.s
        }}</span
      ></span
    >
    <span v-else class="text-brand">
      {{ formattedRemainingTime.h }}:{{ formattedRemainingTime.m }}:{{
        formattedRemainingTime.s
      }}</span
    >
  </p>
</template>

<script>
export default {
  mounted() {
    if (!this.ended) {
      setInterval(() => {
        this.formatToDate(this.getDateDiff())
      }, 1000)
    }
  },
  data() {
    return {
      formattedRemainingTime: {
        d: null,
        h: null,
        m: null,
        s: null,
      },
      ended: false,
    }
  },
  methods: {
    getDateDiff() {
      let curr = new Date(),
        end = new Date(2021, 12, 1)
      return end.getTime() - curr.getTime()
    },
    formatToDate(miliseconds) {
      if (miliseconds < 0) {
        this.ended = true
        return
      }
      var days,
        hours,
        minutes,
        seconds,
        total_hours,
        total_minutes,
        total_seconds

      total_seconds = parseInt(Math.floor(miliseconds / 1000))
      total_minutes = parseInt(Math.floor(total_seconds / 60))
      total_hours = parseInt(Math.floor(total_minutes / 60))
      days = parseInt(Math.floor(total_hours / 24))

      seconds = parseInt(total_seconds % 60)
      minutes = parseInt(total_minutes % 60)
      hours = parseInt(total_hours % 24)

      this.formattedRemainingTime.d = days < 10 ? '0' + days : days
      this.formattedRemainingTime.h = hours < 10 ? '0' + hours : hours
      this.formattedRemainingTime.m = minutes < 10 ? '0' + minutes : minutes
      this.formattedRemainingTime.s = seconds < 10 ? '0' + seconds : seconds

      return true
    },
  },
}
</script>

<style></style>
