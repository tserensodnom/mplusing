<template>
  <div class="w-full flex flex-row mt-4 text-xs font-light">
    <div
      class="w-full md:w-1/2 border border-blueGray-100 rounded-xl overflow-hidden relative md:mr-3"
    >
      <input
        type="text"
        name="searchUnlocked"
        id="searchUnlocked"
        class="w-full p-3 font-light"
        placeholder="Миний сангаас хайх..."
        @input="search"
      />
      <div class="absolute top-1/4 right-3">
        <icon-search></icon-search>
      </div>
    </div>
    <div class="hidden md:flex md:w-1/2 flex flex-row space-x-3">
      <select
        name="searchType"
        id="searchType"
        class="w-full rounded-xl p-3 flex items-center text-left justify-between border border-blueGray-100 text-blueGray-400 font-light"
        @change="search"
      >
        <option class="text-brand" value="all">Бүгд</option>
        <option class="text-brand" value="ebook">Цахим ном</option>
        <option class="text-brand" value="audio_book">Аудио ном</option>
      </select>
      <!-- <icon-arrow-left
          class="transform -rotate-90 transition duration-300"
          :overrideColorByFont="true"
        />
        <div
          v-if="selectType"
          class="absolute inset-x-0 top-0 rounded-xl bg-white border border-blueGray-100 flex flex-col py-3"
        >
          <button
            class="w-full px-5 py-2 text-center hover:bg-blueGray-100 transition duration-300"
            @click.stop="setType('all')"
            :class="{ 'text-brand': type == 'all' }"
          >
            Бүгд</button
          ><button
            class="w-full px-5 py-2 text-center hover:bg-blueGray-100 transition duration-300"
            @click.stop="setType('ebook')"
            :class="{ 'text-brand': type == 'ebook' }"
          >
            Цахим ном</button
          ><button
            class="w-full px-5 py-2 text-center hover:bg-blueGray-100 transition duration-300"
            @click.stop="setType('audio_book')"
            :class="{ 'text-brand': type == 'audio_book' }"
          >
            Аудио ном
          </button>
        </div> -->

      <select
        class="w-full rounded-xl p-3 flex items-center text-left justify-between border border-blueGray-100 text-blueGray-400 font-light"
      >
        <option v-if="type == ''">Төрөл</option>
        <option class="text-brand" v-else-if="type == 'all'">Бүгд</option>
        <option class="text-brand" v-else-if="type == 'ebook'">
          Цахим ном
        </option>
        <option class="text-brand" v-else-if="type == 'audio_book'">
          Аудио ном
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import IconArrowLeft from '~/components/icons/IconArrowLeft.vue'
import IconSearch from '~/components/icons/IconSearch.vue'
import debounce from 'lodash.debounce'

export default {
  components: { IconSearch, IconArrowLeft },
  data() {
    return {
      type: 'all',
      sortBy: '',
    }
  },
  methods: {
    // handleInput: debounce(function (e) {
    //   this.$emit('searchValueChange', e.target.value.trim())
    // }, 100),
    search(e) {
      let searchData = {
        input: document
          .querySelector('#searchUnlocked')
          .value.trim()
          .toLowerCase(),
        filter: document.querySelector('#searchType').value,
      }
      this.$emit('search', searchData)
    },
  },
}
</script>

<style></style>
