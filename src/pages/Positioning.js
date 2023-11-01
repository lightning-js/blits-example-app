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

export default Blits.Component('Positioning', {
  template: `
    <Element>
      <!-- regular positioning -->
      <Element w="100" h="100" x="20" y="20" color="#ecfeff" />
      <Element w="100" h="100" x="140" y="20" color="#a5f3fc" />
      <Element w="100" h="100" x="260" y="20" color="#22d3ee" />
      <Element w="100" h="100" x="380" y="20" color="#0891b2" />

      <!-- positioning with dynamic values -->
      <Element w="100" h="100" x="$x1" y="$y" color="#fdf4ff" />
      <Element w="100" h="100" x="$x2" y="$y" color="#f5d0fe" />
      <Element w="100" h="100" x="$x3" y="$y" color="#e879f9" />
      <Element w="100" h="100" x="$x4" y="$y" color="#c026d3" />

      <!-- positioning with reactive values -->
      <Element w="100" h="100" :x="$xA" y="260" color="#fff7ed" />
      <Element w="100" h="100" :x="$xB" y="260" color="#fed7aa" />
      <Element w="100" h="100" :x="$xC" y="260" color="#fb923c" />
      <Element w="100" h="100" :x="$xD" y="260" color="#ea580c" />

      <!--- positioning of nested elements -->
      <Element w="800" h="800" y="20" x="800" color="#ecfdf5">
        <Element w="600" h="600" y="20" x="20" color="#a7f3d0">
          <Element w="400" h="400" y="100" x="20" color="#34d399">
            <Element w="200" h="100" :y="(400-100)/2" :x="(400-200)/2" color="#059669">
              <Element w="50" h="50" :y.transition="$yNested" :x.transition="$xNested" color="#065f46" />
            </Element>
          </Element>
        </Element>
      </Element>

      <!-- positioning after a set of nested elements -->
      <Element w="100" h="100" y="500" x="20" color="#e11d48" />

      <!-- zIndex not inherited by children - currently broken and being investigated :) -->
      <Element w="200" h="200" x="300" y="600" color="#94a3b8" z="100">
        <Text content="Lightning!" x="100" y="140" />
        <Element w="300" h="100" color="#475569" />
        <Circle x="150" y="150" size="100"/>
      </Element>
      <Element w="300" h="300" x="300" y="600" color="#ef444480" />

      <Element w="400" h="100" x="800" y="900" color="#0284c7">
        <Element w="42%" h="30%" y="5%" x="1%" color="#075985" />
        <Element :w="$bar2.v" h="30%" y="35%" x="1%" color="#6b21a8" />
        <Element :w.transition="$bar3" h="30%" y="65%" x="1%" color="#9f1239" />
      </Element>

    </Element>`,
  state() {
    return {
      x1: 20,
      x2: 140,
      x3: 20 + 140 + 100,
      x4: 380,
      y: 140,
      xA: 20,
      xB: 140,
      xC: 260,
      xD: 380,
      yNested: 0,
      xNested: 0,
      bar2: {
        direction: 'up',
        v: '10%',
      },
      bar3: '10%',
    }
  },
  hooks: {
    ready() {
      this.$setTimeout(() => {
        this.xD = this.xD + 200
        this.xC = this.xC + 100
        this.xB = this.xB + 50
        this.xA = this.xA + 25
      }, 4000)

      this.$setInterval(() => {
        this.yNested = this.yNested === 0 ? 50 : 0
      }, 2000)

      this.$setInterval(() => {
        this.xNested = this.xNested === 0 ? 150 : 0
      }, 1000)

      this.$setInterval(() => {
        const v = parseFloat(this.bar2.v)
        const newV = this.bar2.direction === 'up' ? v + 10 : v - 10
        this.bar2.v = newV + '%'
        if (newV >= 90) {
          this.bar2.direction = 'down'
        }
        if (newV <= 10) {
          this.bar2.direction = 'up'
        }
      }, 400)

      this.$setInterval(() => {
        this.bar3 = Math.ceil(Math.random() * 96) + '%'
      }, 2000)
    },
  },
})
