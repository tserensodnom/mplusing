import $ from 'jquery'
export default (social, shareable, title = '') => {
  let url
  if (social === 'facebook') {
    url = 'https://www.facebook.com/sharer/sharer.php?u=' + shareable
  }
  if (social === 'twitter') {
    url =
      'https://twitter.com/intent/tweet?text=' +
      encodeURI(title) +
      'url=' +
      shareable
  }
  window.open(
    url,
    'M+ Share',
    'height=450, width=550, top=' +
      ($(window).height() / 2 - 275) +
      ', left=' +
      ($(window).width() / 2 - 225) +
      ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
  )
}
