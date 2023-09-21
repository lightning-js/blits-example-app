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

export default Blits.Component('Rotation', {
  template: `
    <Element>

      <!-- hardcoded rotation value -->
      <Element y="70">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="0"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="10"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="20"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="30"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="40"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="50"/>
      </Element>

      <Element y="70" x="300">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="60"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="70"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="80"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="90"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="100"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="100"/>
      </Element>

      <Element y="70" x="600">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="110"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="120"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="130"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="140"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="150"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="160"/>
      </Element>

      <Element y="70" x="900">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="170"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="180"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="190"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="200"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="210"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="220"/>
      </Element>

      <Element y="70" x="1200">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="230"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="240"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="250"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="260"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="270"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="280"/>
      </Element>

      <Element y="70" x="1500">
        <Element x="100" y="0" w="200" h="100" color="#fee2e2" rotation="290"/>
        <Element x="100" y="150" w="200" h="100" color="#fecaca" rotation="300"/>
        <Element x="100" y="300" w="200" h="100" color="#fca5a5" rotation="310"/>
        <Element x="100" y="450" w="200" h="100" color="#f87171" rotation="320"/>
        <Element x="100" y="610" w="200" h="100" color="#ef4444" rotation="330"/>
        <Element x="100" y="800" w="200" h="100" color="#dc2626" rotation="340"/>
      </Element>

      <!-- dynamic rotation value -->
      <Element x="200" y="200" w="400" h="400" color="#0891b2" rotation="$rotation1" />

      <!-- reactive rotation value -->
      <Element x="800" y="200" w="400" h="400" color="#0891b2" :rotation="$rotation2" />

      <!-- reactive rotation value animated -->
      <Element x="1400" y="200" w="400" h="400" color="#0891b2" :rotation.transition="$rotation3" />

    </Element>`,
  state() {
    return {
      rotation1: 38,
      rotation2: 0,
      rotation3: 0,
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        const rotation = this.rotation2 + 10
        this.rotation2 = rotation <= 360 ? rotation : 0
      }, 800)

      this.$setInterval(() => {
        this.rotation3 = Math.max(10, Math.min(720, this.rotation3 * 2))
        if (this.rotation3 === 720) {
          this.rotation3 = 0
        }
      }, 2000)
    },
  },
})
