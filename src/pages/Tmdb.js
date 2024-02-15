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
import fetchPopular from '../api/providers/fetchPopular'
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
      <Element :alpha.transition="{value: $alphaIn, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
        <Element src="assets/logo.png" x="130" :y.transition="{value: $logoY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}" w="243" h="52" />
        <Text :content="$title" font="raleway" size="80" x="130" y="200" wordwrap="1000" @loaded="$positionText" maxlines="2" />
        <Text :content="$overview" wordwrap="800" x="130" :y="$offset + 330" lineheight="40" maxlines="4" />
        <Element :y.transition="{value: $y, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
         <TmdbRow :for="(row, index) in $rows" :key="$row" title="$row" :items="$items" y="$index * 450" ref="row" />
        </Element>
      </Element>
    </Element>`,
  state() {
    return {
      rows: [
        'Popular Movies',
        'Upcoming TV shows',
        'Adventure movies',
        'Horror movies',
        'Trending movies',
      ],
      items: [],
      src: '',
      focused: null,
      alphaIn: 0.001,
      logoY: 30,
      offset: 0,
      title: '',
      overview: '',
    }
  },
  computed: {
    y(v) {
      if (this.focused === 0) return 630
      return 630 - Math.min(this.focused, this.rows.length) * 450
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.select('row' + value)
      if (focusItem && focusItem.focus) focusItem.focus()
    },
  },
  hooks: {
    ready() {
      this.alphaIn = 1
      this.logoY = 80

      fetchPopular('movie').then((items) => {
        this.items = items
        this.focused = 0
        this.background = items[this.focused].background
      })

      this.$listen('posterSelect', (item) => {
        this.src = item.background
        this.title = item.title
        this.overview = item.overview
      })
    },
    focus() {
      this.$trigger('focused')
    },
  },
  input: {
    up() {
      this.focused = Math.max(this.focused - 1, 0)
    },
    down() {
      this.focused = Math.min(this.focused + 1, this.rows.length - 1)
    },
  },
  methods: {
    positionText(dimensions) {
      this.offset = dimensions.h - 100
    },
  },
})
