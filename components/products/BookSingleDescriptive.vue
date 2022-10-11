<template>
  <div class="w-full">
    <dynamic-link :url="item.web_link">
      <div
        class="sm:p-3 rounded-lg bookHover transition duration-300 flex flex-row"
      >
        <div class="w-32 max-h-max">
          <image-resize
            :src="item.cover_url ? item.cover_url : item.cover"
            size="sm"
            :alt="item.name"
            fix="width"
          />
        </div>

        <div class="ml-4 h-max w-full flex flex-col">
          <div class="flex flex-col flex-grow">
            <div class="my-auto">
              <p class="text-lg font-medium leading-none">
                {{ item.title }}
              </p>

              <p
                v-if="showDescription"
                class="text-sm text-blueGray-400 mt-2 line-clamp-2 leading-none sm:leading-normal"
              >
                {{ item.short_description }}
              </p>
            </div>
          </div>
          <div
            class="mt-1 flex flex-row space-x-4 items-center text-blueGray-400 text-xs"
            :class="showDescription ? 'justify-between' : 'justify-start'"
          >
            <!-- prices
          <AuthorBookPrice book="{item}"></AuthorBookPrice>
          <div class="flex flex-row items-center">
            <p class="text-sm">{item.publisher.first_name}</p>
          </div>
           -->
            <div class="flex flex-row items-center">
              <svg class="w-5" viewBox="0 0 24 24">
                <path
                  class="fill-current"
                  d="M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z"
                />
              </svg>
              <p class="ml-1 text-sm">{{ item.likes_count }}</p>
            </div>
          </div>
        </div>
      </div>
    </dynamic-link>

    <div class="w-full mx-3 flex my-2 border-b border-blueGray-100"></div>
  </div>
</template>

<script>
import DynamicLink from '../tools/DynamicLink.vue'
import ImageResize from '../tools/ImageResize.vue'

export default {
  components: {
    ImageResize,
    DynamicLink,
  },

  props: ['item', 'showDescription'],
}
</script>
