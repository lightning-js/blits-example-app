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
import Ball from '../components/Ball.js'

const randomIntBetween = (from, to) => Math.floor(Math.random() * (to - from + 1) + from)

export default Blits.Component('Viewport', {
  components: {
    Ball,
  },
  template: `
    <Element>
      <Text size="32" x="960" y="540" mount="0.5" :content="$status.join('\n')" lineheight="52" maxwidth="500" />
      <Ball
        :x.transition="{value: $x, duration: 1250}"
        :y.transition="{value: $y, duration: 1250}"
        :rotation.transition="{value: $rotation, duration: 1400, easing: 'ease-in-out'}"
        w="100"
        h="100"
      />
    </Element>
  `,
  state() {
    return {
      x: -400,
      y: -400,
      rotation: 0,
      status: [],
      count: 1,
    }
  },
  hooks: {
    ready() {
      this.$listen('ballUpdate', (status) => {
        this.status.unshift(`${this.count++} -  ${status}`)
        this.status.length = Math.min(this.status.length, 8)
      })

      this.rotation = randomIntBetween(-90, 90)
      this.x = (1920 - 100) / 2
      this.y = (1080 - 100) / 2
      this.$setInterval(() => {
        this.x = randomIntBetween(-300, 2220)
        this.y = randomIntBetween(-300, 1380)
        this.rotation = randomIntBetween(-90, 90)
      }, 2500)
    },
  },
})
