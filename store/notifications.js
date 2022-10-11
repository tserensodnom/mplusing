export default {
  state() {
    return {
      notifs: {
        data: null,
      },
    }
  },

  mutations: {
    UPDATE_NOTIFICATIONS(state, notifs) {
      state.notifs.data = notifs.data.filter(
        (i) => i.userEventStatus != 'deleted'
      )
    },
  },
}
