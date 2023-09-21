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

export default Blits.Component('Events', {
  template: `
    <Element x="400" y="360">

      <Element w="280" h="280" color="#e5e7eb" :x="$x" y="-5" />

      <Element w="250" h="250" x="10" y="10" color="$colors[0]" />
      <Element w="250" h="250" x="290" y="10" color="$colors[1]" />
      <Element w="250" h="250" x="570" y="10" color="$colors[2]" />
      <Element w="250" h="250" x="850" y="10" color="$colors[3]" />
    </Element>`,
  state() {
    return {
      count: 0,
      colors: ['#fbbf24', '#a3e635', '#22d3ee', '#f472b6'],
    }
  },
  computed: {
    x() {
      return this.count * 280 - 5
    },
  },
  hooks: {
    unfocus() {
      this.$emit('changeBackground')
    },
  },
  input: {
    left(e) {
      const count = this.count - 1
      if (count === -1) {
        this.parent.focus(e)
      } else {
        this.count = Math.max(count, 0)
      }
    },
    right(e) {
      const count = this.count + 1
      if (count === 4) {
        this.parent.focus(e)
      } else {
        this.count = Math.min(count, 3)
      }
    },
    enter() {
      this.$emit('changeBackground', this.colors[this.count])
    },
  },
})
