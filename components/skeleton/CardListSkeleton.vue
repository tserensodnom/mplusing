<template>
  <div class="w-full">
    <div
      v-for="index in count"
      @click.stop
      class="
        border-t border-blueGray-100
        mt-5
        pt-5
        grid grid-cols-12
        justify-between
        text-xs text-black
        font-semibold
        items-center
        cursor-default
        animate-pulse
      "
      :key="index"
    >
      <div
        class="col-span-6 flex flex-row items-center justify-start sm:space-x-5"
      >
        <div class="hidden sm:block rounded-2xl bg-blueGray-100 h-14 w-14"></div>
        <div
          class="
            flex
            items-center
            justify-center
            p-4
            px-5
            sm:px-10
            rounded-2xl
            bg-blueGray-100
            text-black
            font-bold
            select-all
            h-12
            w-28 sm:w-36
          "
        ></div>
        <div class="hidden sm:block w-20 h-5 rounded-full bg-blueGray-100"></div>
      </div>
      <div
        class="
          col-span-6
          flex flex-row
          items-center
          justify-end
          space-x-5
          text-blueGray-400
        "
      >
        <div
          class="
            cursor-pointer
            rounded-full
            bg-blueGray-100
            transition
            duration-300
            w-12
            h-12
            flex
            items-center
            justify-center
            text
            white
          "
        ></div>
        <div
          class="
            cursor-pointer
            rounded-full
            bg-blueGray-100
            transition
            duration-300
            w-12
            h-12
            flex
            items-center
            justify-center
            text
            white
          "
        ></div>
        <!-- <div class="cursor-pointer rounded-full bg-blueGray-200 hover:bg-blueGray-300 transition duration-300 w-12 h-12 flex items-center justify-center text white"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      default: 1,
      required: true,
    },
  },
}
</script>

<style></style>
