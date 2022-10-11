<template>
  <div
    class="fixed transition duration-300 bottom-0 z-50 w-full sm:hidden"
    :class="appAdBox ? '' : 'transform translate-y-32'"
  >
    <div
      class="h-20 bg-brand-dark flex flex-row justify-between items-center px-5 py-2 relative"
    >
      <a
        @click="appAdBox = !appAdBox"
        class="absolute -top-4 right-2 bg-white shadow-top w-7 h-7 rounded-full flex items-center"
      >
        <icon-close styling="w-3 mx-auto" />
      </a>

      <div class="bg-white rounded-md h-12 w-12 flex items-center">
        <div class="ml-2.5 w-full">
          <mplus :active="true" />
        </div>
      </div>

      <div class="text-white font-medium flex items-center ml-4 flex-grow">
        илүү УНШ, илүү СОНС
      </div>

      <div
        class="text-white text-xs flex items-center ml-4 bg-brand rounded-full px-5 py-3 shadow-md"
      >
        АПП ТАТАХ
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from '~/components/icons/IconClose.vue'
import Mplus from '~/components/logo/Mplus.vue'

export default {
  components: {
    IconClose,
    Mplus,
  },
  props: ['appAdBox'],
}
</script>

<style></style>
