export default function ({ $config }, inject) {
  const login = function () {
    window.location =
      $config.authBaseUrl + '/login?prev=' + window.location.href
  }

  inject('auth', { login })
}
