<template>
  <div
    v-if="audio && publication"
    class="z-50 fixed inset-x-0 transition duration-300 transform bottom-0 h-16 bg-white shadow-top grid grid-cols-12"
    :class="
      $store.state.audioPlayer.isHidden ? 'translate-y-80' : 'translate-y-0'
    "
  >
    <div
      class="col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 px-5 lg:p-0 flex flex-row items-center relative"
    >
      <input
        type="range"
        step="1"
        min="0"
        :max="audio ? audio.duration : 0"
        v-model.number="value"
        class="absolute inset-x-0 -top-1"
      />
      <audio
        class="hidden"
        ref="audioEl"
        @timeupdate="onTimeUpdate"
        @pause="$store.commit('audioPlayer/PAUSE_PLAYER')"
        @play="$store.commit('audioPlayer/PLAY_PLAYER')"
      >
        <source :src="audio.stream_url" type="audio/mpeg" />
      </audio>
      <div
        class="rounded h-11 w-11 overflow-hidden relative bg-cover"
        :style="`backgroundImage: url(${publication.square_cover.sm}); `"
      >
        <a
          class="sm:hidden absolute inset-0 bg-brand opacity-75 flex items-center"
          @click="togglePlayer"
        >
          <icon-play
            v-if="!isStreaming"
            class="mx-auto text-white"
            :resizeMultiply="1.25"
          />
          <icon-pause
            v-else
            class="mx-auto text-white"
            :resizeMultiply="1.25"
          />
        </a>
      </div>
      <div
        class="ml-3 h-11 w-2/5 flex flex-col overflow-hidden justify-center flex-grow"
      >
        <div class="flex flex-row text-blueGray-400 text-xs w-full">
          <dynamic-link :url="publication.series.web_link">
            <p class="line-clamp-1">
              {{ publication.series.name }}
            </p>
          </dynamic-link>
          <p class="line-clamp-1 ml-1">
            {{ progression | time }}
          </p>
          <p class="line-clamp-1 hidden sm:inline">
            {{ `/${audio.formatted_duration}` }}
          </p>
        </div>
        <dynamic-link :url="publication.web_link">
          <p class="font-medium text-sm w-full line-clamp-1">
            {{ publication.title }}
          </p>
        </dynamic-link>
      </div>
      <div
        class="flex flex-row justify-evenly items-center space-x-4 sm:space-x-10"
      >
        <div class="flex flex-row items-center space-x-4">
          <a
            class="transform hover:scale-105"
            @click="$store.commit('audioPlayer/BACKWARD_PLAYER', 10)"
            ><icon-backward-sec :resizeMultiply="0.35"
          /></a>
          <a
            class="hidden w-10 h-10 bg-brand sm:flex items-center text-white rounded-full"
            @click="togglePlayer"
          >
            <icon-play
              v-if="!isStreaming"
              class="mx-auto transform hover:scale-105"
              :resizeMultiply="1.2"
            />
            <icon-pause
              v-else
              class="mx-auto transform hover:scale-105"
              :resizeMultiply="1.2"
            />
          </a>
          <a
            class="transform hover:scale-105"
            @click="$store.commit('audioPlayer/FORWARD_PLAYER', 30)"
            ><icon-forward-sec :resizeMultiply="0.35"
          /></a>
        </div>
        <div class="p-2.5 rounded-full bg-blueGray-100">
          <a @click="$store.commit('audioPlayer/CLOSE_PLAYER')"
            ><icon-close styling="w-4 h-4"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconForwardSec from '~/components/icons/IconForwardSec.vue'
import IconBackwardSec from '~/components/icons/IconBackwardSec.vue'
import IconClose from '~/components/icons/IconClose.vue'
import IconPlay from '~/components/icons/IconPlay.vue'
import IconPause from '~/components/icons/IconPause.vue'

import _ from 'lodash'
import { mapState } from 'vuex'
import DynamicLink from '~/components/tools/DynamicLink.vue'

export default {
  filters: {
    time(seconds) {
      let date = new Date(null)
      date.setSeconds(seconds)
      return date.toISOString().substr(11, 8)
    },
  },
  components: {
    IconForwardSec,
    IconBackwardSec,
    IconClose,
    IconPlay,
    IconPause,
    DynamicLink,
  },
  data() {
    return {
      value: 0,
      formattedProgress: '00:00:00',
      hidePlayer: true,
    }
  },
  created() {
    this.value = this.progress
  },
  computed: {
    isStreaming() {
      return (
        this.audio &&
        this.$store.state.audioPlayer.isPlaying &&
        this.$store.state.audioPlayer.audio.id === this.audio.id
      )
    },
    progression() {
      return this.audio &&
        this.$store.state.audioPlayer.audio &&
        this.$store.state.audioPlayer.audio.id === this.audio.id
        ? this.$store.state.audioPlayer.progress
        : 0
    },
    ...mapState({
      publication: (state) => state.audioPlayer.publication,
      audio: (state) => state.audioPlayer.audio,
      isPlaying: (state) => state.audioPlayer.isPlaying,
      progress: (state) => state.audioPlayer.progress,
    }),
    to() {
      return {
        name: 'podcast_episode_show',
        params: {
          series: this.publication.series.id,
          publication: this.publication.id,
          publicationData: this.publication,
        },
      }
    },
  },
  watch: {
    value(value) {
      if (this.ignoreOnce) {
        return (this.ignoreOnce = false)
      }
      this.updateProgress(value)
    },
    isPlaying() {
      this.$nextTick(() => {
        if (this.$refs.audioEl) {
          this.isPlaying
            ? this.$refs.audioEl.play()
            : this.$refs.audioEl.pause()
        }
      })
    },
    audio(audio) {
      this.$nextTick(() => {
        this.$refs.audioEl.load()
        if (this.isPlaying) {
          this.$refs.audioEl.play()
        }
      })
    },
    progress(progress) {
      if (this.ignoreOnce) {
        return (this.ignoreOnce = false)
      }

      if (this.$refs.audioEl) {
        this.$refs.audioEl.currentTime = progress
      }
    },
    progression(progress) {
      this.value = progress
      this.ignoreOnce = true
    },
  },
  methods: {
    togglePlayer() {
      this.$store.dispatch('audioPlayer/togglePlayer', {
        publication: this.publication,
        audio: this.audio,
      })
    },
    onTimeUpdate: _.throttle(function () {
      this.$store.commit(
        'audioPlayer/UPDATE_PLAYER_PROGRESS',
        this.$refs.audioEl.currentTime
      )
      this.ignoreOnce = true
    }, 500),
    updateProgress: _.debounce(function (value) {
      this.$store.commit('audioPlayer/UPDATE_PLAYER_PROGRESS', value)
    }, 300),
  },
}
</script>
<style>
input[type='range'] {
  margin: auto;
  -webkit-appearance: none;
  position: absolute;
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 0; /* iOS */
  background: transparent;
}
input[type='range']:focus {
  outline: none;
}
::-webkit-slider-runnable-track {
  background: #f2f6fc;
}
/*
 * 1. Set to 0 width and remove border for a slider without a thumb
 */
::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0; /* 1 */
  height: 5px;
  background: #0061ff;
  box-shadow: -100vw 0 0 100vw #0061ff;
  border: none; /* 2px solid #999; */
}

::-moz-range-track {
  height: 5px;
  background: #f2f6fc;
}
::-moz-range-progress {
  background: #0061ff;
  height: 5px;
}
::-moz-range-thumb {
  background: #0061ff;
  height: 5px;
  width: 5px; /* 20px; */
  border: none; /* 3px solid #999; */
  border-radius: 0 !important;
  box-sizing: border-box;
}
::-ms-fill-lower {
  background: #0061ff;
}
::-ms-thumb {
  background: #f2f6fc;
  border: 2px solid #f2f6fc;
  height: 5px;
  width: 5px;
  box-sizing: border-box;
}
::-ms-ticks-after {
  display: none;
}
::-ms-ticks-before {
  display: none;
}
::-ms-track {
  background: #f2f6fc;
  color: transparent;
  height: 5px;
  border: none;
}
::-ms-tooltip {
  display: none;
}
</style>
