const { uuid: uuid } = require('vue-uuid')

export default function ({ $axios, store }, inject) {
  if (!window.sessionStorage.getItem('session')) {
    window.sessionStorage.setItem('session', uuid.v4())
  }
  if (!window.localStorage.getItem('device_uuid')) {
    window.localStorage.setItem('device_uuid', uuid.v4())
  }
  if (store.state.auth.loggedIn) {
    $axios
      .get('/api/user?include=likes', { withCredentials: true })
      .then((res) => {
        store.commit('auth/SET_USER', res.data.data)
      })
  }
}
