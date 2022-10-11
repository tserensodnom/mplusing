export default {
  state() {
    return {
      loggedIn: false,
      user: null,
    }
  },

  mutations: {
    SET_USER(state, user) {
      state.user = user
      state.loggedIn = true
    },
  },
}
