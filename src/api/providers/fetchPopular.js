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

import api, { getImageUrl } from '../'

export default function (type) {
  return api.get(`/${type}/popular`).then((popular) => {
    let filteredItems = popular.results.filter((r) => !r.adult)
    return filteredItems.map((item) => {
      return {
        poster: getImageUrl(item.poster_path || item.profile_path),
        background: getImageUrl(item.backdrop_path, 'w1280'),
        identifier: item.id,
        title: item.title,
        overview: item.overview,
      }
    })
  })
}
