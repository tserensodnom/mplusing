<template>
  <div v-if="authorData" class="w-full grid grid-cols-12 relative">
    <blurred-bar :data="authorData.data" type="author" />
    <div
      class="z-30 col-start-4 col-span-6 sm:col-start-2 sm:col-span-3 lg:col-start-3 xl:col-start-4 lg:col-span-2"
    >
      <div class="mx-auto sm:mx-0 -mt-24 sm:-mt-20 mb-4 w-11/12 relative">
        <div
          class="-z-10 absolute w-full h-full top-0 left-0 bookCoverBlur transform scale-95"
          :style="`backgroundImage: url(${
            authorData.data.image
          }); backgroundColor: ${color(authorData.data.image)}`"
        ></div>
        <image-resize
          :isBig="true"
          :src="authorData.data.image"
          size="sm"
          fix="width"
        />
      </div>

      <div class="w-11/12 hidden sm:block">
        <div class="text-center">
          <p class="text-md leading-none">
            {{ authorData.data.profile && authorData.data.profile.last_name }}
          </p>
          <p class="font-bold text-2xl">
            {{ authorData.data.profile && authorData.data.profile.first_name }}
          </p>
        </div>

        <div class="text-sm">
          <collapsing-description
            :isBio="true"
            :data="authorData.data.profile && authorData.data.profile.bio"
          />
        </div>

        <div class="ctaButton flex justify-center w-full">
          <client-only>
            <subscribe-button
              model-type="author"
              :model-id="authorData.data.id"
            />
          </client-only>
        </div>
      </div>
    </div>

    <div
      class="sm:hidden col-span-12 px-5 sm:px-0 sm:col-start-2 sm:col-span-3 lg:col-start-3 xl:col-start-4 lg:col-span-2 flex flex-col items-center sm:items-start"
    >
      <div class="w-full text-sm sm:w-11/12 relative mt-4">
        <div class="text-center">
          <p class="text-md leading-none">
            {{ authorData.data.profile && authorData.data.profile.last_name }}
          </p>
          <p class="font-bold text-2xl">
            {{ authorData.data.profile && authorData.data.profile.first_name }}
          </p>
        </div>
        <collapsing-description
          :data="authorData.data.profile && authorData.data.profile.bio"
        />
      </div>

      <div class="ctaButton w-11/12 h-auto flex justify-center">
        <subscribe-button model-type="author" :model-id="authorData.data.id" />
      </div>
    </div>

    <div
      class="mx-5 sm:ml-3 sm:mr-5 z-0 mt-1 sm:mt-5 mb-4 col-span-12 sm:col-start-5 sm:col-span-7 lg:col-start-5 lg:col-span-6 xl:col-start-6 xl:col-span-4 flex flex-col"
    >
      <div
        class="sm:mx-3 mt-6 mb-4 w-full border-b border-blueGray-100 text-base space-x-9 text-blueGray-400 flex flex-row"
      >
        <div class="flex items-center w-max h-max pb-1 activeTab">
          <p class="font-medium">Бүтээлүүд</p>
        </div>
      </div>

      <publishings
        v-if="authorPublishings"
        :books="authorPublishings.data"
        :showDescription="true"
      />
    </div>
  </div>
</template>

<script>
import BlurredBar from '~/components/description/BlurredBar.vue'
import CollapsingDescription from '~/components/description/CollapsingDescription.vue'
import SubscribeButton from '~/components/description/SubscribeButton.vue'
import Publishings from '~/components/products/Publishings.vue'
import ImageResize from '~/components/tools/ImageResize.vue'

export default {
  components: {
    BlurredBar,
    SubscribeButton,
    Publishings,
    CollapsingDescription,
    ImageResize,
  },

  data() {
    return {
      authorData: null,
      authorPublishings: null,
    }
  },

  async fetch() {
    this.authorData = await this.$api.getAuthorDetail(this.$route.params.slug)
    this.authorPublishings = await this.$api.getAuthorPublishings(
      this.$route.params.slug
    )
  },
  methods: {
    color(src) {
      const pathArray = src.split('_')
      return '#' + pathArray[parseInt(pathArray.length) - 2]
    },
  },
  head() {
    return {
      title: this.authorData && this.authorData.data.name,
      meta: [
        {
          hid: 'ogdescription',
          property: 'og:description',
          content: this.authorData && this.authorData.data.name,
        },
        // {
        //   hid: 'ogbio',
        //   property: 'og:bio',
        //   content: this.authorData && this.authorData.data.profile.bio,
        // },
        {
          hid: 'ogimage',
          property: 'og:image',
          content: this.authorData && this.authorData.data.image,
        },
        {
          hid: 'ogtype',
          property: 'og:type',
          content: 'bio',
        },
      ],
    }
  },
}
</script>
