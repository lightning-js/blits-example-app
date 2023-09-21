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

export default Blits.Component('Colors', {
  template: `
    <Element w="1920" h="1080" :color.transition="$bg">
      <!-- hex colors -->
      <Element x="20" y="20">
        <Element w="100" h="100" x="0" color="#ecfeff" />
        <Element w="100" h="100" x="120" color="#a5f3fc" />
        <Element w="100" h="100" x="240" color="#22d3ee" />
        <Element w="100" h="100" x="360" color="#0891b2" />
      </Element>

      <!-- hex colors without #-->
      <Element x="20" y="140">
        <Element w="100" h="100" x="0" color="ecfeff" />
        <Element w="100" h="100" x="120" color="a5f3fc" />
        <Element w="100" h="100" x="240" color="22d3ee" />
        <Element w="100" h="100" x="360" color="0891b2" />
      </Element>

      <!-- hex colors with alpha-->
      <Element x="20" y="260">
        <Element w="100" h="100" x="0" color="#ecfeffaa" />
        <Element w="100" h="100" x="120" color="#a5f3fc33" />
        <Element w="100" h="100" x="240" color="#22d3ee20" />
        <Element w="100" h="100" x="360" color="#0891b2ff" />
      </Element>

      <!-- rgb() colors-->
      <Element x="20" y="380">
        <Element w="100" h="100" x="0" color="rgb(236,254,255)" />
        <Element w="100" h="100" x="120" color="rgb(165,243,252)" />
        <Element w="100" h="100" x="240" color="rgb(34,211,238)" />
        <Element w="100" h="100" x="360" color="rgb(8,145,178)" />
      </Element>

      <!-- rgba() colors-->
      <Element x="20" y="500">
        <Element w="100" h="100" x="0" color="rgba(236,254,255,0.67)" />
        <Element w="100" h="100" x="120" color="rgba(165,243,252,0.2)" />
        <Element w="100" h="100" x="240" color="rgba(34,211,238, 0.13)" />
        <Element w="100" h="100" x="360" color="rgba(8,145,178,1)" />
      </Element>

      <!-- 3 char hex colors -->
      <Element x="20" y="620">
        <Element w="100" h="100" x="0" color="#000" />
        <Element w="100" h="100" x="120" color="#ccc" />
        <Element w="100" h="100" x="240" color="#890" />
        <Element w="100" h="100" x="360" color="#0f0" />
      </Element>

      <!-- 3 char hex colors without #-->
      <Element x="20" y="740">
        <Element w="100" h="100" x="0" color="000" />
        <Element w="100" h="100" x="120" color="ccc" />
        <Element w="100" h="100" x="240" color="890" />
        <Element w="100" h="100" x="360" color="0f0" />
      </Element>

      <Element x="620" y="20">
        <Element w="300" h="200" x="0" :color.transition="$color1" />
        <Element w="300" h="200" x="0" y="250" :color.transition="$color2" />
        <Element w="300" h="200" x="100" y="400" :color.transition="$color3"/>
        <Element w="300" h="200" x="0" y="650" :color.transition="{value: $color4, d: 1000, f: 'ease-in-out'}" />
      </Element>
    </Element>`,
  state() {
    return {
      bg: '#fff',
      color1: '#22d3ee',
      color2: '#dc2626',
      color3: 'rgba(251, 191, 36)',
      color4: '#bfdbfe',
    }
  },
  input: {
    enter() {
      this.color1 = this.color1 === '#0891b2' ? '#22d3ee' : '#0891b2'
      this.color2 = this.color2 === '#dc2626' ? '#0f0' : '#dc2626'
      this.color3 =
        this.color3 === 'rgba(251, 191, 36)' ? 'rgba(30, 64, 175, 0.5)' : 'rgba(251, 191, 36)'
      this.color4 = this.color4 === '#1e3a8a' ? '#bfdbfe' : '#1e3a8a'
    },
  },
  hooks: {
    ready() {
      let i = 0
      const bgColors = ['#fff', '#333', '#c0ff33', '#546aaa', '#000', 'tomato']
      this.$setInterval(() => {
        i = i + 1
        if (i === bgColors.length - 1) i = 0
        this.bg = bgColors[i]
      }, 2000)
    },
  },
})
