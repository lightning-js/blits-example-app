import api, { getImageUrl } from '../'

export default function (type) {
  return api.get(`/${type}/popular`).then((popular) => {
    let filteredItems = popular.results.filter((r) => !r.adult)
    return filteredItems.map((item) => {
      return {
        poster: getImageUrl(item.poster_path || item.profile_path),
        background: getImageUrl(item.backdrop_path, 'w1280'),
        identifier: item.id,
      }
    })
  })
}
