<template>
  <svg
    class="inline-block pr-0 xs:pr-2 w-4 ss:w-5 xs:w-7"
    width="22.186"
    height="22.187"
    viewBox="0 0 22.186 22.187"
  >
    <path
      class="navOuterColor fill-current"
      :class="active && 'text-brand'"
      d="M34.993,23.9H27.258V16.164a1.679,1.679,0,1,0-3.358,0V23.9H16.164a1.679,1.679,0,0,0,0,3.358H23.9v7.735a1.679,1.679,0,1,0,3.358,0V27.257h7.736a1.679,1.679,0,0,0,0-3.358Z"
      transform="translate(-14.486 -14.485)"
      fill="#9da5b7"
    />
  </svg>
</template>

<script>
export default { props: ['active'] }
</script>

<style></style>
