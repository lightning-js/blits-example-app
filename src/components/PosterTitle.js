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

export default Blits.Component('PosterTitle', {
  template: `
    <Element
      w="185"
      h="278"
      x="$x"
      :src="$item.poster"
      :scale.transition="{value: $scale, duration: 200, easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
      :_effects="[{type: 'radius', props: {radius: 8}}]"
    >
      <Element
        x="10"
        :y.transition="{value: $y, duration: 300, easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
        :alpha.transition="{value: $alpha, duration: 300, easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
      >
        <Text :content="$item.title" font="raleway" size="22" maxwidth="185" maxlines="2" lineheight="28" />
      </Element>
    </Element>
  `,
  // color transitions have some issues, so I'll leave it out for now
  // :colorBottom.transition="{v: $colorBottom, d: 200, f: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"!
  props: ['src', 'index', 'item', 'width'],
  state() {
    return {
      scale: 1,
      alpha: 0,
      y: 278,
      // color: '#333',
    }
  },
  computed: {
    x() {
      return this.index * this.width
    },
  },
  hooks: {
    focus() {
      // this.color = '#fff'
      this.scale = 1.1
      this.alpha = 1
      this.y = 288
    },
    unfocus() {
      // this.color = '#333'
      this.scale = 1
      this.alpha = 0
      this.y = 278
    },
  },
})
