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

export default Blits.Component('MemoryCard', {
  template: `
    <Element w="320" h="200" x="$col * 360" y="$row * 250" :scale.transition="$scale" :rotation.transition="$disabled ? -2 : 0">
      <Element :h.transition="$h" w="320" y="125" mount="{y: 0.5}" :color.transition="$disabled ? '#ccc' : '#fff'"  :src="$image + '&w=320&h=200'" :effects="[$shader('radius', {radius: 6})]" :show="$open" />
      <Element :h.transition="$h" w="320" y="125" mount="{y: 0.5}" :color="$open ? 'transparent' : {top: '#efefef', bottom: '#aaa'}" :effects="[$shader('radius', {radius: 6})]" />
    </Element>`,
  props: ['row', 'col', 'image', 'description', 'index'],
  state() {
    return {
      disabled: false,
      open: false,
      h: 200,
      scale: 1,
    }
  },
  hooks: {
    init() {
      this.$listen('closeMemoryCard', (index) => {
        if (index === this.index) {
          this.$setTimeout(() => this.flip(), 1000)
        }
      })

      this.$listen('deactivateMemoryCard', (index) => {
        if (index === this.index) {
          this.$setTimeout(() => {
            this.scale = 1.16
          }, 500)
          this.$setTimeout(() => {
            this.disabled = true
            this.scale = 1
          }, 800)
        }
      })
    },
    focus(e) {
      this.scale = 1.08
      const message = 'Card ' + (this.index + 1) + (this.disabled ? ' (disabled)' : '')
      this.$announcer.speak(message)
    },
    unfocus() {
      this.scale = 1
    },
  },
  input: {
    enter() {
      if (this.disabled) return
      if (this.open) {
        this.$announcer.speak('Card already open. Choose another')
        return
      }
      this.flip()
      this.$announcer.speak(`Image of a ${this.description}`)
      this.$emit('selectMemoryCard', this.index)
    },
  },
  methods: {
    flip() {
      this.h = 0
      this.$setTimeout(() => {
        this.open = !!!this.open
        this.h = 200
      }, 250)
    },
  },
})
