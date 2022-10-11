<template>
  <div class="flex flex-col">
    <p
      class="pb-4 hidden md:inline md:border-b border-blueGray-100 font-bold text-black text-2xl"
    >
      Хадгалсан
    </p>
    <saved-books :data="ebook"></saved-books>
  </div>
</template>
<script>
import SavedBooks from '~/components/feeds/components/SavedBooks.vue'

export default {
  components: { SavedBooks },
  data() {
    return {
      ebook: {
        id: '377',
        title: 'Худалдан авсан',
        type: '',
        column: 1.4,
        sub_title: 'Цахим, аудио бүтээлүүд',
        date: '2021-03-30 11:11:15',
        deep_link: '',
        web_link: '',
        description: '',
        description_format: 'plain',
        has_more: true,
        format: '',
        publisher: {
          id: '',
          type: '',
          name: '',
          deep_link: '',
          cover: '',
        },
        cover: '',
        items: [
          {
            price: '8,000.0',
            id: '76493',
            slug: null,
            name: 'Өгөх авах ухаан',
            publisher: {
              id: '431',
              type: 'author',
              name: 'Биплас Монголиа ХХК',
              slug: '',
              deep_link: 'mplus://q?view=detail&type=authors&id=431',
              cover:
                'https://d3tfpmmm736cqr.cloudfront.net/https://d3tfpmmm736cqr.cloudfront.net/images/publisher/square/602f29ec_c1c2c1_1.jpg',
            },
            ebook: null,
            audio_book: {
              id: 123,
            },
            progress: 33,
            description: '',
            deep_link: 'mplus://q?view=detail&type=books&id=1115',
            web_link: 'https://www.mplus.mn/ogox-avax-uxaan',
            badge: {},
            cover:
              'https://d3tfpmmm736cqr.cloudfront.net/images/publication/covers/52784/5f155b22_588893_0.715.jpg',
          },
          {
            price: '8,000.0',
            id: '76494',
            slug: null,
            name: 'Бүтээлч, INC.',
            publisher: {
              id: '466',
              type: 'author',
              name: 'Юнайтед Бизнес Ривюү',
              slug: '',
              deep_link: 'mplus://q?view=detail&type=authors&id=466',
              cover:
                'https://d3tfpmmm736cqr.cloudfront.net/https://d3tfpmmm736cqr.cloudfront.net/images/publisher/square/602f43ef_d7d9d7_1.jpg',
            },
            ebook: null,
            audio_book: {
              id: 123,
            },
            progress: 95,
            description: '',
            deep_link: 'mplus://q?view=detail&type=books&id=1137',
            web_link: 'https://www.mplus.mn/buteelc-inc',
            badge: {},
            cover:
              'https://d3tfpmmm736cqr.cloudfront.net/images/publisher/square/60518148_a33132_0.707.jpg',
          },
          {
            price: '8,000.0',
            id: '76495',
            slug: null,
            name: 'Ичимхий зан минь баяртай',
            publisher: {
              id: '149',
              type: 'author',
              name: 'О. Чинзориг',
              slug: '',
              deep_link: 'mplus://q?view=detail&type=authors&id=149',
              cover:
                'https://d3tfpmmm736cqr.cloudfront.net/https://d3tfpmmm736cqr.cloudfront.net/images/author/square/5f59ec34_9e9793_1.jpg',
            },
            ebook: null,
            audio_book: {
              id: 123,
            },
            plan: {
              name: '"Цэнэг" Очлуур багц',
              remaining_day: 12,
            },
            progress: 13,
            description: '',
            deep_link: 'mplus://q?view=detail&type=books&id=1203',
            web_link: 'https://www.mplus.mn/icimxii-zan-min-bayartai',
            badge: {},
            cover:
              'https://d3tfpmmm736cqr.cloudfront.net/images/publisher/square/60518208_d8c7c6_0.707.jpg',
          },
          {
            price: '8,000.0',
            id: '76496',
            slug: null,
            name: 'Тархи угаах урлаг',
            publisher: {
              id: '149',
              type: 'author',
              name: 'О. Чинзориг',
              slug: '',
              deep_link: 'mplus://q?view=detail&type=authors&id=149',
              cover:
                'https://d3tfpmmm736cqr.cloudfront.net/https://d3tfpmmm736cqr.cloudfront.net/images/author/square/5f59ec34_9e9793_1.jpg',
            },
            ebook: {
              id: 123,
            },
            audio_book: null,
            progress: 82,
            description: '',
            deep_link: 'mplus://q?view=detail&type=books&id=1212',
            web_link: 'https://www.mplus.mn/tarxi-ugaax-urlag',
            badge: {},
            cover:
              'https://d3tfpmmm736cqr.cloudfront.net/images/publisher/square/60518238_7a4d54_0.707.jpg',
          },
        ],
      },
    }
  },
  validate({ redirect }) {
    redirect({ name: 'account' })
  },
  transition: 'account-page',
}
</script>
