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
import Poster from '../components/Poster.js'
import Background from '../components/Background.js'

export default Blits.Component('TMdb', {
  components: {
    Poster,
    Background,
  },
  template: `
    <Element w="1920" h="1080" color="black">
      <Background :src="$src" />
      <Element :alpha.transition="{value: $alphaIn, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
        <Element src="assets/logo.png" x="130" :y.transition="{value: $logoY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}" w="243" h="52" />
        <Text :content="$title" font="raleway" size="80" x="130" y="200" wordwrap="1000" @loaded="$positionText" />
        <Text :content="$overview" wordwrap="800" x="130" :y="$offset + 330" lineheight="40" maxlines="6" />
        <Element :x.transition="{value: $x, duration: 300, function: 'ease-in-out'}"  :y.transition="{value: $listY, duration: 300, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}">
          <Poster :for="(item, index) in $items" index="$index" src="$item.poster" ref="$item.identifier" :key="$item.identifier" />
        </Element>
      </Element>
    </Element>`,
  state() {
    return {
      items: [],
      src: '',
      focused: null,
      alphaIn: 0.001,
      logoY: 30,
      listY: 750,
      offset: 0,
    }
  },
  computed: {
    x() {
      if (this.focused <= 1) return 150
      return 150 - Math.min(this.focused - 1, this.items.length - 8) * 215
    },
    title() {
      return this.items[this.focused] && this.items[this.focused].title
    },
    overview() {
      return this.items[this.focused] && this.items[this.focused].overview
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.select(this.items[value] && this.items[value].identifier)
      if (focusItem && focusItem.focus) focusItem.focus()
    },
  },
  hooks: {
    ready() {
      this.alphaIn = 1
      this.listY = 700
      this.logoY = 80

      fetchPopular('movie').then((items) => {
        this.items = items
        this.focused = 0
        this.background = items[this.focused].background
      })

      this.$listen('posterSelect', (index) => {
        this.src = this.items[index].background
      })
    },
    focus() {
      this.$trigger('focused')
    },
  },
  input: {
    left() {
      this.focused = Math.max(this.focused - 1, 0)
    },
    right() {
      this.focused = Math.min(this.focused + 1, this.items.length - 1)
    },
  },
  methods: {
    positionText(dimensions) {
      this.offset = dimensions.h - 100
    },
  },
})
