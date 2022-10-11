export default function ({ $axios }, inject) {
  const axios = $axios

  $axios.onRequest((config) => {
    config.withCredentials = true
  })

  // const getMayPromoStats = async () => {
  //   const { data } = await axios.get(`/api/promo/may-2021`)
  //   return data
  // }
  // Fetch newsfeeds for the given newsfeed type.
  const getNewsfeedFor = async (type) => {
    let { data } = await axios.get(`/api/newsfeed/tabs/${type}?platform=web`)
    return data.data
  }
  const getTsenegBooks = async () => {
    let { data } = await axios.get(
      `/api/web/subscription/rentables?filter[group_id]=1`
    )
    return data.data
  }
  const getRetailBooks = async () => {
    console.log("get Retails");
    let { data } = await axios.get(
      `/api/web/subscription/rentables?filter[group_id]=2`
    )
    return data.data
  }
  // Fetch all book categories.
  const getBookCategories = async () => {
    let { data } = await axios.get(`/api/categories`)
    return data
  }

  // Search from all resources.
  const search = async (params, type = 'book') => {
    if (type === 'podcast') {
      let { data } = await axios.get(
        `/api/search/v3/podcast?include=likes_count&append=short_description&type=podcast`,
        {
          params,
        }
      )
      return data
    }
    let { data } = await axios.get(
      `/api/search/book?include=likes_count&append=short_description`,
      {
        params,
      }
    )
    return data


  }

  const getAuthorDetail = async (id) => {
    const { data } = await axios
      .get(`/api/book/authors/${id}?include=likes_count`)
      .catch((e) => {
        $nuxt.error(e)
      })
    return data
  }

  const getAuthorPublishings = async (id) => {
    const { data } = await axios.get(
      `/api/book/authors/${id}/books?include=likes_count&append=short_description`
    )
    return data
  }
  const getRelatedBooks = async (bookId) => {
    const { data } = await axios.get(
      `/api/books/${bookId}/related?include=likesCount`
    )
    return data
  }

  const getBookDetail = async (bookId) => {
    const { data } = await axios.get(`/v4/books/` + bookId).catch((e) => {
      $nuxt.error(e)
    })
    return data
  }
  const getAudioSample = async (bookId) => {
    const { data } = await axios.get(`/api/books/v3/${bookId}/playlist`)
    return data
  }
  const getCommentsForBook = async (bookId) => {
    const { data } = await axios.get(
      `/api/reviews?reviewable_type=book&reviewable_id=${bookId}&include=latestFiveReplies`
    )
    return data
  }
  const getCommonTags = async () => {
    const { data } = await axios.get(`/api/book/tags?take=10`)
    return data
  }
  const getTopSearches = async () => {
    const { data } = await axios.get(
      `/api/search/queries?sort=-results_count&take=3`
    )
    return data
  }
  const getChannelDetail = async (channelName) => {
    const { data } = await axios
      .get(`/api/podcast_series/v3/${channelName}`)
      .catch((e) => {
        $nuxt.error(e)
      })
    return data
  }
  const getPodcastDetail = async (podcastName) => {
    const { data } = await axios
      .get(`/api/publications/` + podcastName)
      .catch((e) => {
        $nuxt.error(e)
      })
    return data
  }
  const getChannelPublishings = async (series_id) => {
    const { data } = await axios.get(
      `/api/publications?include=series&filter[series_id]=${series_id}&page[size]=10`
    )
    return data
  }

  // USER DATA
  const getUserInvoices = async () => {
    const { data } = await axios.get('/account/api/invoices')
    return data
  }
  const getUserDevices = async () => {
    const { data } = await axios.get('/account/api/devices')
    return data
  }
  const getUserTickets = async () => {
    const { data } = await axios.get('/account/api/tickets')
    return data
  }
  const getUserUnlocks = async () => {
    const { data } = await axios.get('/account/api/unlocks')
    return data
  }

  const getTicketDetails = async (ticket_number) => {
    const { data } = await axios.get(
      `/api/support/tickets/${ticket_number}/replies`
    )
    return data
  }

  inject('api', {
    axios,
    getUserInvoices,
    getTicketDetails,
    getUserUnlocks,
    getUserDevices,
    getUserTickets,
    getRelatedBooks,
    getCommentsForBook,
    getBookDetail,
    getNewsfeedFor,
    getBookCategories,
    search,
    getCommonTags,
    getAuthorPublishings,
    getAuthorDetail,
    getTopSearches,
    getChannelDetail,
    getChannelPublishings,
    getPodcastDetail,
    getTsenegBooks,
    // getMayPromoStats,
    getAudioSample,
  })
}
