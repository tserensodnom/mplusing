<template>
  <div
    class="w-full p-5 flex flex-col transition duration-150 rounded-2xl"
    :class="{ 'bg-blueGray-50 ': expanded }"
  >
    <a
      @click="expanded = !expanded"
      class="text-xl font-bold flex flex-row items-center justify-between font-merriweather"
    >
      <p>
        {{ question }}
      </p>
      <icon-arrow-left
        class="transform transition duration-150"
        :class="expanded ? 'rotate-90' : '-rotate-90 '"
        :overrideColorByFont="true"
      ></icon-arrow-left>
    </a>
    <p v-if="expanded" class="text-sm text-blueGray-600 mt-3">
      {{ answer }}
    </p>
  </div>
</template>

<script>
import IconArrowLeft from '../../icons/IconArrowLeft.vue'
export default {
  components: { IconArrowLeft },
  props: {
    question: {
      required: true,
    },
    answer: {
      required: true,
    },
  },
  data() {
    return {
      expanded: false,
    }
  },
}
</script>

<style></style>
