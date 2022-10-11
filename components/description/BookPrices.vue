<template>
  <div v-if="book.ebook && book.audio_book" class="flex flex-row space-x-4">
    <p>
      Цахим:
      <span class="text-black font-medium ml-2 text-sm">
        ₮{{ book.ebook.price }}
      </span>
    </p>
    <p>
      Аудио:
      <span class="text-black font-medium ml-2 text-sm">
        ₮{{ book.audio_book.price }}
      </span>
    </p>
  </div>
  <div v-else>
    <p v-if="book.ebook">
      Цахим:
      <span class="text-black font-medium ml-2 text-sm">
        ₮{{ book.ebook.price }}
      </span>
    </p>
    <p v-else>
      Аудио:
      <span class="text-black font-medium ml-2 text-sm">
        ₮{{ book.audio_book.price }}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['book'],
}
</script>

<style></style>
