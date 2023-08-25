import API_KEY_V4 from './key'
const API_BASE = 'https://api.themoviedb.org/3'
let tmdbConfig
let baseImageUrl
const basePosterSize = 'w185'

const defaultFetchParams = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + API_KEY_V4,
  },
}

export function getImageUrl(path, posterSize = basePosterSize) {
  return baseImageUrl + posterSize + path
}

function get(...args) {
  if (tmdbConfig) {
    return _get(...args)
  } else {
    return loadConfig().then(() => _get(...args))
  }
}

function _get(path, params = {}) {
  return fetch(API_BASE + path, {
    ...defaultFetchParams,
    ...params,
  }).then((r) => r.json())
}

function loadConfig() {
  return _get('/configuration').then((data) => {
    tmdbConfig = data
    baseImageUrl = data.images.base_url
    return data
  })
}

export default {
  get,
  loadConfig,
}
