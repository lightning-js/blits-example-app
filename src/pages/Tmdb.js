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

import Blits from '@lightningjs/blits'

import { fetchPopular, fetchGenreMovies } from '../api/providers/'
import TmdbRow from '../components/TmdbRow.js'
import Background from '../components/Background.js'

export default Blits.Component('TMdb', {
  components: {
    Background,
    TmdbRow,
  },
  template: `
    <Element w="1920" h="1080" color="black">
      <Background :src="$src" />
      <Element>
        <Element
          :y.transition="{value: $contentY, duration: $duration}"
          :alpha.transition="{value: $alpha, duration: $duration}"
        >
          <Element src="assets/logo.png" x="140" y="90" w="243" h="52" />
          <Text
            :content="$title"
            font="raleway"
            size="80"
            x="140"
            y="300"
            wordwrap="1000"
            @loaded="$positionText"
            maxlines="1"
          />
          <Text :content="$overview" wordwrap="880" x="140" y="430" lineheight="40" maxlines="3" />
        </Element>
        <Element :y.transition="{value: $y, duration: 300, easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
          <TmdbRow
            :for="(row, index) in $rows"
            key="$row.title"
            title="$row.title"
            :items="$row.items"
            :type="$row.type"
            :width="$row.width"
            y="$row.y"
            ref="row"
          />
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      rows: [],
      items: [],
      src: '',
      focused: null,
      alpha: 1,
      y: 550,
      contentY: 0,
      scale: 1,
      title: '',
      overview: '',
      type: 'Poster',
      duration: 300,
    }
  },
  watch: {
    focused(value) {
      const focusItem = this.$select('row' + value)
      if (focusItem && focusItem.$focus) focusItem.$focus()
    },
  },
  hooks: {
    async ready() {
      this.$listen('posterSelect', (item) => {
        if (this.focused === 0) {
          this.src = item.background
          this.title = item.title
          this.overview = item.overview
        }
      })

      this.rows.push({
        title: 'Popular Movies',
        items: await fetchPopular('movie'),
        type: 'Poster',
        width: 215,
        y: 0,
      })

      this.rows.push({
        title: 'Best Western movies',
        items: await fetchGenreMovies(['Western']),
        type: 'Hero',
        width: 1370,
        y: 358,
      })

      this.rows.push({
        title: 'Best Comedy movies',
        items: await fetchGenreMovies(['Comedy']),
        type: 'PosterTitle',
        width: 215,
        y: 1158,
      })

      this.rows.push({
        title: 'Popular TV shows',
        items: await fetchPopular('tv'),
        type: 'PosterTitle',
        width: 215,
        y: 1536,
      })

      this.rows.push({
        title: 'Best Adventure and Action movies',
        items: await fetchGenreMovies(['adventure', 'action']),
        type: 'Hero',
        width: 1370,
        y: 1914,
      })

      this.rows.push({
        title: 'Best Documentaries',
        items: await fetchGenreMovies('Documentary'),
        type: 'PosterTitle',
        width: 215,
        y: 2714,
      })

      this.rows.push({
        title: 'Best Western movies 2',
        items: await fetchGenreMovies('Western'),
        type: 'PosterTitle',
        width: 215,
        y: 3092,
      })

      this.focused = 0
    },
    focus() {
      this.$trigger('focused')
    },
  },
  input: {
    up() {
      this.contentY = 0
      this.duration = 300
      this.focused = Math.max(this.focused - 1, 0)
      this.y = (this.focused === 0 ? 550 : 90) - this.rows[this.focused].y
      this.alpha = this.focused === 0 ? 1 : 0
    },
    down() {
      this.contentY = -60
      this.duration = 200
      this.focused = Math.min(this.focused + 1, this.rows.length - 1)
      this.y = (this.focused === 0 ? 550 : 90) - this.rows[this.focused].y
      this.alpha = this.focused === 0 ? 1 : 0
    },
  },
})
