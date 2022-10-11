<template>
  <div
    :class="
      mobile
        ? 'grid grid-cols-12 bg-blueGray-100 w-full'
        : 'h-9 w-full rounded-lg text-xs justify-between relative'
    "
  >
    <search-input :mobile="mobile" />

    <button
      type="submit"
      :class="
        mobile
          ? 'col-start-11 col-span-2 sm:col-span-1 flex justify-center sm:justify-end items-center'
          : 'absolute top-0 right-0 mr-3 mt-2 flex items-center'
      "
    >
      <icon-search />
    </button>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue'
import IconSearch from '../icons/IconSearch.vue'

export default {
  components: {
    SearchInput,
    IconSearch,
  },

  props: ['mobile'],
}
</script>
