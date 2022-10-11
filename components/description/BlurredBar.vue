<template>
  <div class="col-span-12">
    <div class="h-28 w-full bg-black bg-opacity-50 grid grid-cols-12 relative">
      <div class="z-0 absolute top-0 left-0 overflow-hidden w-full h-full">
        <div
          v-if="type == 'podcast' || type == 'podcastSingle'"
          class="bookCoverBlur mobileStart h-full w-full"
          :style="`backgroundImage: url(${
            data.cover_url ? data.cover_url : data.cover
          })`"
        ></div>
        <div
          v-else
          class="bookCoverBlur mobileStart h-full w-full"
          :style="`backgroundImage: url(${
            type == 'book' ? data.cover : data.image
          })`"
        ></div>
      </div>
      <div
        class="absolute top-0 left-0 w-full h-full bg-black opacity-20"
      ></div>
      <div
        class="mx-8 xs:mx-10 xm:mx-14 sm:mx-3 z-10 col-span-12 sm:col-start-5 sm:col-span-7 lg:col-start-5 lg:col-span-6 xl:col-start-6 xl:col-span-4 flex flex-row items-center text-white"
        :class="
          type == 'book' || type == 'podcastSingle'
            ? 'justify-between'
            : 'justify-end'
        "
      >
        <NuxtLink
          v-if="type == 'book' || type == 'podcastSingle'"
          :to="
            type == 'book'
              ? `/authors/${data.author.id}`
              : `/podcast/${data.series.id}`
          "
        >
          <div class="hidden sm:flex flex-row items-center">
            <div
              class="h-8 w-8 xs:h-12 xs:w-12 xl:h-14 xl:w-14 rounded-md overflow-hidden"
            >
              <image-resize
                size="xs"
                :src="
                  type == 'book' ? data.author.image : data.series.cover_url
                "
                :alt="type == 'book' ? data.author.name : data.series.name"
              />
            </div>
            <p class="ml-1 xs:ml-2 text-sm font-medium">
              {{ type == 'book' ? data.author.name : data.series.name }}
            </p>
          </div>
        </NuxtLink>

        <div
          class="text-sm font-medium flex flex-row w-full justify-between sm:w-auto sm:justify-start space-x-1 xs:space-x-3 md:space-x-9"
        >
          <!-- <div class="flex flex-col w-max sm:w-auto sm:flex-row items-center">
            <icon-heart liked="true" />
            <span class="mr-2">{{ data.likes_count }}</span>
          </div> -->

          <div class="hidden sm:flex flex-row items-center" href="">
            <share-button />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageResize from '@/components/tools/ImageResize.vue'
import ShareButton from './ShareButton.vue'
import IconHeart from '@/components/icons/IconHeart'

export default {
  components: { ImageResize, ShareButton, IconHeart },
  props: ['data', 'type'],
}
</script>
