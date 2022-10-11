<template>
  <div class="w-max h-max relative">
    <div class="w-max h-max cursor-pointer" @click="isOpen = !isOpen">
      <slot name="toggle"></slot>
    </div>
    <div
      v-outside="handleClick"
      class="
        w-max
        h-max
        absolute
        z-50
        transition
        duration-150
        transform
        right-0
        pt-2
      "
      v-if="isOpen"
      :class="isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'"
    >
      <slot name="panel"></slot>
    </div>
  </div>
</template>

<script>
const instances = new Map()

export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    handleClick(event, el) {
      if (!el.parentElement.firstChild.contains(event.target)) {
        this.closePanel()
      }
    },
    closePanel() {
      this.isOpen = false
    },
    openPanel() {
      this.isOpen = true
    },
  },
  directives: {
    outside: {
      bind: function (el, { value: handler }) {
        const eventHandler = function (event) {
          const isClickOutside =
            event.target !== el && !el.contains(event.target)
          return isClickOutside ? handler(event, el) : null
        }
        document.addEventListener('click', eventHandler)
        instances.set(el, eventHandler)
      },
      unbind: function (el) {
        const eventHandler = instances.get(el)
        document.removeEventListener('click', eventHandler)
        instances.delete(el)
      },
    },
  },
}
</script>

<style></style>
