<template>
  <div v-if="book" class="w-full grid grid-cols-12 relative">
    <!-- <mobile-fixed-purchase-bar :book="book" /> -->
    <blurred-bar :data="book.data" type="book" />
    <div
      class="
        z-10
        col-start-4 col-span-6
        sm:col-start-2 sm:col-span-3
        lg:col-start-3
        xl:col-start-4
        lg:col-span-2
      "
    >
      <div class="mx-auto sm:mx-0 -mt-24 sm:-mt-20 mb-4 w-11/12 relative">
        <div
          class="
            -z-10
            absolute
            w-full
            h-full
            top-0
            left-0
            bookCoverBlur
            transform
            scale-95
          "
          :style="`backgroundImage: url(${
            book.data.cover
          }); backgroundColor: ${color(book.data.cover)}`"
        ></div>
        <image-resize
          :isBig="true"
          :src="book.data.cover"
          size="md"
          :alt="book.data.title"
          fix="width"
        />
      </div>
      <div
        v-if="audio_sample.length"
        class="mx-auto sm:mx-0 w-11/12 mt-5"
      >
        <a
          @click="toggleSampleAudio()"
          class="
            w-full
            2xl:w-60
            mx-auto
            py-3
            px-5
            rounded-3xl
            border
            transition
            duration-300
            flex flex-row
            items-center
            justify-between
            text-xs
            font-regular
            relative
            overflow-hidden
          "
          :class="
            samplePlaying
              ? 'border-brand'
              : 'border-blueGray-400 hover:border-brand'
          "
        >
          <p class="z-10"> Сонсож үзэх</p>
          <component
            class="z-10 text-brand"
            :is="samplePlaying ? 'icon-pause' : 'icon-play'"
          ></component>

          <!-- progress -->
          <div
            class="
              z-0
              absolute
              inset-y-0
              bg-brand
              opacity-20
              left-0
              transition
              duration-150
            "
            id="sampleaudioprogress"
            :style="`width: ${sampleProgress}%`"
          ></div>
        </a>
      </div>
      <div v-if="audio_sample.length" class="w-full">
        <audio
          id="sampleaudio"
          controls
          class="hidden"
          @ended="toggleSampleAudio()"
        >
          <source
            :src="audio_sample[0].stream_url"
          />
        </audio>
      </div>
    </div>
    <div
      class="
        z-0
        mt-1
        sm:mt-5
        mb-4
        col-span-12
        sm:col-start-5 sm:col-span-7
        lg:col-start-5 lg:col-span-6
        xl:col-start-6 xl:col-span-4
        flex flex-col
        text-sm
        md:text-base
      "
    >
      <div class="mx-5 sm:ml-3 sm:mr-5 relative">
        <h1
          class="
            text-2xl
            md:text-3xl
            font-bold
            sm:w-96
            text-center
            sm:text-left
            mx-auto
            sm:mx-0
          "
        >
          {{ book.data.title }}
        </h1>
        <collapsing-description :data="book.data.description" />
      </div>

      <div class="mx-5 sm:ml-3 sm:mr-5 mt-4 mb-4 flex flex-col text-sm">
        <div
          v-for="(data, index) in book.data.metadata[0].data"
          :key="index"
          class="flex flex-row w-full mb-1"
        >
          <p class="inline-block w-36 font-bold mr-2">{{ data.label }}:</p>
          <p class="inline-block">
            {{ data.value }}
          </p>
        </div>
      </div>
      <div v-if="book.data.tags.length" class="mt-4 mb-4 mx-5 sm:ml-3 sm:mr-5">
        <div class="flex flex-col">
          <p class="text-xs text-blueGray-400">Хамаарагдах таг</p>
          <tags :data="book.data.tags" />
        </div>
      </div>
      <purchase-buttons :book="book.data" />

      <div class="sm:ml-3 sm:mr-5">
        <product-slider
          v-if="related"
          :data="related.data"
          title="Ижил төстэй номнууд"
        />
      </div>

      <client-only>
        <comment-section
          v-if="book"
          model-type="book"
          :model-id="book.data.id"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import MobileFixedPurchaseBar from '~/components/description/MobileFixedPurchaseBar.vue'
import BlurredBar from '~/components/description/BlurredBar.vue'
import CommentSection from '~/components/comments/CommentSection.vue'
import ProductSlider from '~/components/feeds/components/ProductSlider.vue'
import PurchaseButtons from '~/components/description/PurchaseButtons.vue'
import ImageResize from '~/components/tools/ImageResize.vue'
import CollapsingDescription from '~/components/description/CollapsingDescription.vue'
import Tags from '~/components/description/Tags.vue'
import IconPlay from '~/components/icons/IconPlay.vue'
import IconPause from '~/components/icons/IconPause.vue'

export default {
  components: {
    BlurredBar,
    MobileFixedPurchaseBar,
    CommentSection,
    ImageResize,
    PurchaseButtons,
    ProductSlider,
    CollapsingDescription,
    Tags,
    IconPlay,
    IconPause,
  },

  data() {
    return {
      book: null,
      related: null,
      audio_sample: [],
      samplePlaying: false,
      sampleProgress: 0,
      progressInterval: null,
    }
  },

  async fetch() {
    this.book = await this.$api.getBookDetail(this.$route.params.slug)
    this.related = await this.$api.getRelatedBooks(this.book.data.id)
    const audios = await this.$api.getAudioSample(this.book.data.id)
    this.audio_sample = audios.data.filter((item) => item.is_sample == true)
  },
  methods: {
    color(src) {
      const pathArray = src.split('_')
      return '#' + pathArray[parseInt(pathArray.length) - 2]
    },
    toggleSampleAudio() {
      const sample = document.querySelector('#sampleaudio')

      if (this.samplePlaying) {
        sample.pause()
        this.samplePlaying = false
        clearInterval(this.sampleProgress)
      } else {
        sample.play()
        this.samplePlaying = true
        this.progressInterval = setInterval(() => {
          this.sampleProgress = (sample.currentTime * 100) / sample.duration
        }, 1000)
      }
    },
  },

  head() {
    return {
      title: this.book && this.book.data.title + ' - Аудио Цахим ном - Mplus.mn',
      meta: [
        { 
          name: 'description', 
          hid: 'description', 
          content: this.book && this.book.data.description,
        },
        {
          hid: 'ogtitle',
          property: 'og:title',
          content: this.book && this.book.data.title + ' - Аудио цахим ном -  Mplus.mn',
        },
        //{
        //  hid: 'ogdescription',
        //  property: 'og:description',
        //  content: this.book && this.book.data.metadata.description,
        //},
        {
          hid: 'ogdescription',
          property: 'og:description',
          content: this.book && this.book.data.description,
        },
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.book && this.book.data.cover,
        },
      ],
    }
  },
}
</script>
