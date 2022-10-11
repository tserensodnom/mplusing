export default function ({ req, store }, inject) {
  if (req.headers.user) {
    let user = JSON.parse(req.headers.user)
    store.commit('auth/SET_USER', user)
  }
}
