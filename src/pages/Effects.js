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

export default Blits.Component('Effects', {
  template: `
    <Element>
      <!-- rounded corner effect -->
      <Element
        w="160" h="160" x="40" y="40" color="#fb923c"
        :effects="[$shader('radius', {radius: 44})]"
      />

      <Element
        w="160" h="160" x="240" y="40" color="#d97706"
        :effects="[$shader('radius', {radius: 25})]"
      />

      <Element
        w="160" h="160" x="440" y="40" color="#b45309"
        :effects="[$shader('radius', {radius: 80})]"
      />

      <Element
        w="160" h="160" x="640" y="40" color="#78350f"
        :effects="[$shader('radius', {radius: 10})]"
      />

      <!-- reactive rounded corner effect -->
      <Element
        w="160" h="160" x="40" y="240" color="#65a30d"
        :effects="[$shader('radius', {radius: $radius})]"
      />

      <!-- nested rounded corner effects -->
      <Element
        w="300" h="300" x="40" y="440" color="#0c4a6e"
        :effects="[$shader('radius', {radius: 30})]"
      >
        <Element
          w="200" h="200" x="50" y="50" color="#0284c7"
          :effects="[$shader('radius', {radius: 40})]"
        >
          <Element
            w="100" h="100" x="50" y="50" color="#38bdf8"
            :effects="[$shader('radius', {radius: 50})]"
          >
            <Element
              w="40" h="40" x="30" y="30" color="#bae6fd"
              :effects="[$shader('radius', {radius: 20})]"
            >
            </Element>
          </Element>
        </Element>
      </Element>

      <Element
        w="160" h="160" x="840" y="40" color="#3b82f6"
        :effects="[$shader('radius', {radius: 10}), $shader('border', {width: 20, color: '#60a5fa'})]"
      />

      <Element
        w="160" h="160" x="1040" y="40" color="#500724"
        :effects="$effects"
      />
    </Element>`,

  state() {
    return {
      direction: 'up',
      radius: 0,
      effects: [
        this.shader('borderTop', { width: 20, color: '#be123c' }),
        this.shader('borderBottom', { width: 20, color: '#f43f5e' }),
      ],
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        const radius = this.direction === 'up' ? this.radius + 10 : this.radius - 10
        this.radius = Math.max(Math.min(radius, 80), 0)
        if (this.radius === 80) {
          this.direction = 'down'
        }
        if (this.radius === 0) {
          this.direction = 'up'
        }
      }, 500)

      let count = 0
      this.$setInterval(() => {
        count++
        if (count % 2) {
          this.effects = [
            this.shader('borderLeft', { width: 20, color: '#be123c' }),
            this.shader('borderRight', { width: 20, color: '#f43f5e' }),
          ]
        } else {
          this.effects = [
            this.shader('borderTop', { width: 20, color: '#be123c' }),
            this.shader('borderBottom', { width: 20, color: '#f43f5e' }),
          ]
        }
      }, 2000)
    },
  },
})
