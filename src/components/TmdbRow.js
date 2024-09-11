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

import Hero from './Hero.js'
import Poster from './Poster.js'
import PosterTitle from './PosterTitle.js'

export default Blits.Component('TmdbRow', {
  components: {
    Hero,
    Poster,
    PosterTitle,
  },
  template: `
    <Element>
      <Element :x.transition="{value: $x, duration: 300, easing: 'ease-in-out'}" y="80">
        <Component
          is="$type"
          :for="(item, index) in $items"
          index="$index"
          item="$item"
          ref="poster"
          width="$width"
          key="$item.identifier"
        />
      </Element>
    </Element>
  `,
  props: ['title', 'type', 'items', 'width'],
  state() {
    return {
      focused: 0,
      offset: 0,
    }
  },
  hooks: {
    focus() {
      this.$trigger('focused')
    },
  },
  computed: {
    x() {
      return 150 - Math.min(this.focused, this.items.length - 1720 / this.width) * this.width
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.$select('poster' + value)
      if (focusItem && focusItem.$focus) {
        focusItem.$focus()
        this.$emit('posterSelect', this.items[value])
      }
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
})
