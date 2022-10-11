<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="7.151 * resizeMultiply"
    :height="12.302 * resizeMultiply"
    viewBox="0 0 7.151 12.302"
  >
    <path
      id="Path_43"
      data-name="Path 43"
      :class="{ 'stroke-current': overrideColorByFont }"
      d="M2860.961,633.923l-4.737,4.737,4.737,4.737"
      transform="translate(-2855.225 -632.509)"
      fill="none"
      stroke="#ffffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
</template>

<script>
export default {
  props: {
    resizeMultiply: {
      default: 1,
    },
    overrideColorByFont: {
      default: false,
    },
  },
}
</script>

<style></style>
