/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

const API_KEY_V4 = import.meta.env.VITE_TMDB_KEY
const API_BASE = import.meta.env.VITE_TMDB_BASE_URL

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
    baseImageUrl = data.images.secure_base_url
    return data
  })
}

export default {
  get,
  loadConfig,
}
