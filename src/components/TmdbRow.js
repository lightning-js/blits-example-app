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

import Poster from './Poster.js'

export default Blits.Component('TmdbRow', {
  components: {
    Poster,
  },
  template: `
    <Element :alpha.transition="$alpha">
      <Text :content="$title" lineheight="40" x="130" size="36" />
      <Element :x.transition="{value: $x, duration: 300, function: 'ease-in-out'}" y="80">
        <Poster :for="(item, index) in $items" index="$index" src="$item.poster" ref="poster" :key="$item.identifier" />
      </Element>
    </Element>
  `,
  props: ['title', 'items'],
  state() {
    return {
      focused: 0,
      offset: 0,
      alpha: 0,
    }
  },
  hooks: {
    focus() {
      this.$trigger('focused')
      this.alpha = 1
    },
    unfocus() {
      this.alpha = 0
    },
  },
  computed: {
    x() {
      if (this.focused <= 1) return 150
      return 150 - Math.min(this.focused - 1, this.items.length - 8) * 215
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.select('poster' + value)
      if (focusItem && focusItem.focus) focusItem.focus()
      this.$emit('posterSelect', this.items[value])
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
