export default {
  state() {
    return {
      showFooter: true,
    }
  },

  mutations: {
    HIDE_FOOTER(state) {
      state.showFooter = false
    },
    SHOW_FOOTER(state) {
      state.showFooter = true
    },
  },

  actions: {
    toggleFooter({ commit, state }) {
      if (state.showFooter) {
        commit('HIDE_FOOTER')
      } else {
        commit('SHOW_FOOTER')
      }
    },
    hideFooter({ commit, state }) {
      commit('HIDE_FOOTER')
    },
    reshowFooter({ commit, state }) {
      commit('SHOW_FOOTER')
    },
  },
}
