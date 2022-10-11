<template>
  <p class="font-bold text-2xl">
    <span class="text-brand"
      >{{ formattedRemainingTime.d }} өдөр
      <span class="hidden xs:inline-block w-40"
        >{{ formattedRemainingTime.h }}:{{ formattedRemainingTime.m }}:{{
          formattedRemainingTime.s
        }}</span
      ></span
    >
  </p>
</template>

<script>
export default {
  mounted() {
    setInterval(() => {
      this.formatToDate(this.getDateDiff())
    }, 1000)
  },
  data() {
    return {
      formattedRemainingTime: {
        d: null,
        h: null,
        m: null,
        s: null,
      },
    }
  },
  methods: {
    getDateDiff() {
      let curr = new Date(),
        end = new Date(2022, 1, 1)
      return end.getTime() - curr.getTime()
    },
    formatToDate(miliseconds) {
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
