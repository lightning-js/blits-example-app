/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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

export default Blits.Component('Input', {
  template: `
    <Element
      w="400"
      h="48"
      color="#ffffff"
      :effects="[{type: 'radius', props: {radius: 6}}, {type: 'border', props:{width: 1, color: '#ccc'}}]"
    >
      <Text
        :content="$text ? $text : $placeholder"
        :color="$text ? '#333' : '#888'"
        lineheight="48"
        size="22"
        x="13"
        @loaded="$textLoaded"
      ></Text>
      <Element w="2" h="22" y="12" :x="$x" :alpha="$alpha" color="#333" />
    </Element>
  `,
  props: ['placeholder', 'mask'],
  state() {
    return {
      x: 10,
      alpha: 0,
      blink: null,
      hide: null,
      text: '',
    }
  },
  hooks: {
    focus() {
      this.blink = this.$setInterval(() => {
        this.alpha = this.alpha === 1 ? 0 : 1;
      }, 400)
    },
    unfocus() {
      this.$clearInterval(this.blink)
      this.alpha = 0
    },
  },
  methods: {
    textLoaded(dimensions) {
      this.x = this.text && this.text.length > 0 ? dimensions.w + 14 : 12
    },
  },
  input: {
    back() {
      if (this.text.length > 1) {
        this.text = this.text.slice(0, -1);
      }
    },
    up(e) {
      this.parent.focus(e)
    },
    down(e) {
      this.parent.focus(e)
    },
    any(e) {
      // filter only characters that can be printed
      if(e.key.match(/^[\w\s\.,;!@#$%^&*()_+\-=\[\]{}|\\:'"<>,.?/~`]$/)) {
        if(this.mask) {
          if(this.hide) {
            this.$clearTimeout(this.hide)
            this.text = '*'.repeat(this.text.length)
          }

          this.hide = this.$setTimeout(() => {
            this.text = '*'.repeat(this.text.length)
          }, 200)
        }

        this.text += e.key
      }
    },
  }
})
