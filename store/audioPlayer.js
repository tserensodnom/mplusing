import _ from 'lodash'
import axios from 'axios'

export default {
  state() {
    return {
      publication: null,
      audio: null,
      progress: null,
      isPlaying: false,
      isHidden: true,
      analyticInterval: null,
      analyticsData: [],
      user_id: null,
      base_url: 'https://api.mplus.mn',
    }
  },

  mutations: {
    SET_USER(state, user_id) {
      state.user_id = user_id
    },
    SET_BASE_URL(state, api_url) {
      state.base_url = api_url
    },
    SET_PLAYER_AUDIO(state, { publication, audio }) {
      state.progress = 0
      state.publication = publication
      state.audio = audio
    },
    UPDATE_PLAYER_PROGRESS(state, progress) {
      state.progress = progress
    },
    PLAY_PLAYER(state) {
      state.isPlaying = true

      if (state.publication.type == 'podcasts' && !state.analyticInterval) {
        state.analyticInterval = setInterval(() => {
          state.analyticsData.push(
            JSON.stringify({
              id: state.publication.id,
              s: window.sessionStorage.getItem('session'),
              d: window.localStorage.getItem('device_uuid'),
              did: '',
              u: state.user_id,
              progress: state.progress,
              t: parseInt(new Date().getTime() / 1000),
              e: 'podcast_episode.progress',
            }) + '\r\n'
          )
          if (state.analyticsData.length > 4) {
            let data = state.analyticsData.join('')
            var formData = new FormData()

            var blob = new Blob([data], {
              type: 'text/plain',
              endings: 'native',
            })
            formData.append('file', blob, 'text')
            axios
              .post(state.base_url + '/api/analytics/events', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              })
              .then(() => {
                state.analyticsData = []
              })
          }
        }, 60000)
      }
    },
    PAUSE_PLAYER(state) {
      state.isPlaying = false
      if (state.analyticInterval) {
        clearInterval(state.analyticInterval)
        state.analyticInterval = null
      }
    },
    FORWARD_PLAYER(state, duration) {
      state.progress += duration
    },
    BACKWARD_PLAYER(state, duration) {
      state.progress -= duration
    },
    TOGGLE_VISIBILITY(state) {
      state.isHidden = !state.isHidden
    },
    CLOSE_PLAYER(state) {
      state.isPlaying = false
      state.isHidden = true
      if (state.analyticsData.length) {
        clearInterval(state.analyticInterval)
        state.analyticInterval = null
        let data = state.analyticsData.join('')
        var formData = new FormData()
        var blob = new Blob([data], {
          type: 'text/plain',
          endings: 'native',
        })
        formData.append('file', blob, 'text')

        axios.post(state.base_url + '/api/analytics/events', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
      }
    },
  },

  actions: {
    togglePlayer({ commit, state }, { publication, audio, user_id, api_url }) {
      commit('SET_BASE_URL', api_url)
      if (state.audio == null || state.audio.id != audio.id) {
        commit('SET_PLAYER_AUDIO', { publication, audio })
        commit('UPDATE_PLAYER_PROGRESS', 0)
        commit('PLAY_PLAYER')
      } else {
        commit(state.isPlaying ? 'PAUSE_PLAYER' : 'PLAY_PLAYER')
      }
      if (user_id) {
        commit('SET_USER', user_id)
      }
    },
  },
}
