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

export default Blits.Component('Letter', {
  template: `
    <Element>
      <Element w="$w" :h.transition="{value: 410+$offset, duration: $duration, delay: $wait, function: $timingFunction}" color="#E6E6E6" />
      <Element w="$w" h="280" :src="$image" :y.transition="{value: 400+$offset, duration: $duration, delay: $wait, function: $timingFunction}" />
      <Element w="$w" color="#E6E6E6"
        :h.transition="{value: 500-$offset, duration: $duration, delay: $wait, function: $timingFunction}"
        :y.transition="{value: 660+$offset, duration: $duration, delay: $wait, function: $timingFunction}"
      />
    </Element>`,
  props: ['w', 'letter', 'direction', 'delay'],
  computed: {
    image() {
      return `assets/${this.letter}.png`
    },
  },
  state() {
    return {
      offset: this.direction === 'up' ? -680 : 680,
      duration: 1000,
      wait: 0,
      timingFunction: 'cubic-bezier(1,-0.64,.39,1.44)',
    }
  },
  hooks: {
    ready() {
      this.animate()
    },
  },
  methods: {
    animate() {
      this.$setTimeout(() => {
        this.offset = 0
      }, 1000)

      this.$setTimeout(() => {
        this.wait = this.delay + 150
        this.duration = 1000
        this.offset = 1080
      }, 2800)

      this.$setTimeout(() => {
        this.wait = this.delay / 3
        this.timingFunction = 'ease-in-out'
        this.duration = 1500
        this.offset = 0
      }, 5000)
    },
  },
})
