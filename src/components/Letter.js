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
      <Element w="$w" :h="410+$offset" color="#E6E6E6" />
      <Element w="$w" h="280" :src="$image" :y="400+$offset" />
      <Element w="$w" color="#E6E6E6" :h="500-$offset" :y="660+$offset" />
    </Element>
  `,
  props: {
    w: 0,
    letter: '',
    direction: 'up',
  },
  computed: {
    image() {
      return `assets/${this.letter}.png`
    },
  },
  state() {
    return {
      offset: this.direction === 'up' ? -680 : 680,
    }
  },
  hooks: {
    ready() {
      this.$timeline()
        .add(this, { offset: 0, delay: 1000, duration: 1000 })
        .add(this, { offset: 1080, delay: 150, duration: 1000 })
        .add(this, { offset: 0, delay: 150, duration: 1500, ease: 'inOut' })
    },
  },
})
