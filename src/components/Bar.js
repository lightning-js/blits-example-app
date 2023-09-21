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

export default Blits.Component('Bar', {
  template: `
    <Element :w="{value: $w, duration: $duration}" :h="{value: $h, duration: $duration}" :color="$bgColor" :x="$index * ($w + ($w / 4))" :effects="[$shader('radius', {radius:10})]">
      <Element :w="$w" :y.transition="{value: $h-$innerH, duration: $duration}" :h.transition="{value: $innerH, duration: $duration}" :color="$primaryColor" :effects="[$shader('radius', {radius:10})]" />
    </Element>
  `,
  props: ['bgColor', 'primaryColor', 'height', 'index', 'size'],
  state() {
    return {
      h: 200,
      innerH: 0,
      duration: 400,
    }
  },
  hooks: {
    ready() {
      this.innerH = this.height
    },
  },
  computed: {
    w() {
      return this.size === 'large' ? 110 : 72
    },
  },
  watch: {
    bgColor() {
      this.duration = 0.000001
      this.innerH = 0
      this.$setTimeout(() => {
        this.duration = 400
        this.innerH = this.height
      }, 200)
    },
    size() {
      this.duration = 0.000001
      this.innerH = 0
      this.$setTimeout(() => {
        this.duration = 400
        this.innerH = this.height
      }, 100)
    },
  },
})
