<template>
  <div class="w-full grid grid-cols-12 overflow-hidden">
    <div
      class="
        col-span-12
        sm:col-start-2 sm:col-span-10
        lg:col-start-2 lg:col-span-10
        xl:col-start-3 xl:col-span-8
        2xl:col-start-4 2xl:col-span-6
        flex flex-col
        px-5
        sm:px-0
      "
    >
      <div
        v-for="(row, index) in books"
        :key="row"
        class="
          mt-10
          w-full
          border border-opacity-20
          hover:border-opacity-100
          transition
          duration-300
          rounded-md
          px-3
          pb-5
          pt-7
          sm:p-5
          flex flex-row flex-wrap
          relative
        "
        :class="{
          'border-green-400': index == 0,
          'border-brand': index == 1,
          'border-red-400': index == 2,
        }"
      >
        <div class="absolute -top-5 inset-x-0 flex items-center justify-center">
          <div
            class="rounded-full py-1 px-4 text-white text-2xl font-bold"
            :class="{
              'bg-green-400': index == 0,
              'bg-brand': index == 1,
              'bg-red-400': index == 2,
            }"
          >
            <span v-if="row.ebook">{{ row.ebook[0].book_group.price }}₮</span>
          </div>
        </div>
        <!-- books  -->
        <div
          v-for="item in row.ebook"
          :key="item"
          class="
            px-3
            py-2
            w-1/3
            xm:w-1/4
            md:w-1/5
            lg:w-1/6
            flex-col
            space-y-2
            transition
            duration-300
            transform
            hover:-translate-y-2 hover:text-brand
            cursor-pointer
            group
          "
          @click="redirect(item.book.web_link, item.book.deep_link)"
        >
          <div
            v-if="!item.book"
            class="rounded-md w-full bg-blueGray-100"
          ></div>
          <img
            v-else
            :src="resizeImg(item.book.cover)"
            class="rounded-md shadow-md w-full h-auto"
          />
          <div
            v-if="item.book"
            class="
              w-full
              transition
              duration-150
              line-clamp-2
              text-sm
              font-bold
            "
          >
            {{ item.book.title }}
          </div>
        </div>
        <div
          v-for="item in row.audiobook"
          :key="item"
          class="
            px-3
            py-2
            w-1/3
            xm:w-1/4
            md:w-1/5
            lg:w-1/6
            flex-col
            space-y-2
            transition
            duration-300
            transform
            hover:-translate-y-2 hover:text-brand
            cursor-pointer
            group
          "
          @click="redirect(item.book.web_link, item.book.deep_link)"
        >
          <div class="rounded-md shadow-md bg-blueGray-50 w-full relative">
            <div
              class="
                absolute
                -right-2
                -top-2
                p-1
                w-max
                rounded-full
                text-white
                bg-brand
              "
            >
              <icon-headphone></icon-headphone>
            </div>
            <div
              v-if="!item.book"
              class="rounded-md w-full bg-blueGray-100"
            ></div>
            <img
              v-else
              :src="resizeImg(item.book.cover)"
              class="w-full rounded-md h-auto"
              alt=""
            />
          </div>
          <div
            v-if="item.book"
            class="
              w-full
              transition
              duration-150
              line-clamp-2
              text-sm
              font-bold
            "
          >
            {{ item.book.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconHeadphone from '../components/icons/IconHeadphone.vue'
export default {
  components: { IconHeadphone },
  data() {
    return {
      books: [
        {
          audiobook: null,
          ebook: null,
        },
        {
          audiobook: null,
          ebook: null,
        },
        {
          audiobook: null,
          ebook: null,
        },
      ],
    }
  },
  mounted() {
    this.$axios
      .get('/api/book-groups/v3/items', {
        params: {
          group_id: '1',
          model_type: 'audio_book',
        },
      })
      .then((res) => (this.books[0].audiobook = res.data))
    this.$axios
      .get('/api/book-groups/v3/items', {
        params: {
          group_id: '1',
          model_type: 'ebook',
        },
      })
      .then((res) => (this.books[0].ebook = res.data))
    this.$axios
      .get('/api/book-groups/v3/items', {
        params: {
          group_id: '2',
          model_type: 'audio_book',
        },
      })
      .then((res) => (this.books[1].audiobook = res.data))
    this.$axios
      .get('/api/book-groups/v3/items', {
        params: {
          group_id: '2',
          model_type: 'ebook',
        },
      })
      .then((res) => (this.books[1].ebook = res.data))
    this.$axios
      .get('/api/book-groups/v3/items', {
        params: {
          group_id: '3',
          model_type: 'audio_book',
        },
      })
      .then((res) => (this.books[2].audiobook = res.data))
    this.$axios
      .get('/api/book-groups/v3/items', {
        params: {
          group_id: '3',
          model_type: 'ebook',
        },
      })
      .then((res) => (this.books[2].ebook = res.data))
  },
  methods: {
    redirect(web_link, deep_link) {
      if (this.$route.query['mode'] == 'app') {
        window.location.href = deep_link
      } else {
        window.location.href = web_link
      }
    },
    resizeImg(url) {
      return url.replace('/images', '/r_sm_h/images')
    },
  },
}
</script>

<style></style>
