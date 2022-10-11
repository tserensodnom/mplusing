<template>
  <svg
    :width="24 * resizeMultiply"
    :height="24 * resizeMultiply"
    viewBox="0 0 45 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="22.5"
      cy="22.5"
      r="17.5"
      class="stroke-current opacity-50"
      stroke-width="10"
    />
    <path
      d="M34.8744 10.1256C32.5647 7.816 29.6548 6.19885 26.4738 5.45715C23.2928 4.71545 19.9678 4.8788 16.8748 5.92872C13.7818 6.97864 11.0444 8.87323 8.97232 11.3981C6.90019 13.923 5.57605 16.9774 5.14971 20.2158C4.72338 23.4542 5.21185 26.7472 6.55988 29.7224C7.90791 32.6975 10.0617 35.2361 12.7775 37.0507C15.4934 38.8654 18.6629 39.8838 21.9274 39.9906C25.192 40.0975 28.4213 39.2886 31.25 37.6554"
      class="stroke-current"
      stroke-width="10"
    />
  </svg>
</template>

<script>
export default {
  props: {
    resizeMultiply: {
      default: 1,
    },
  },
}
</script>

<style></style>
