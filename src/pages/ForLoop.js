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

import Bolt from '@lightningjs/bolt'
import Square from '../components/Square'

const colors = ['#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d']

export default Bolt.Component('ForLoop', {
  components: {
    Square,
  },
  template: `
      <Element>
        <!-- looping over a simple array with x values -->
        <Element y="20">
          <Element :for="item in $collection1" w="80" h="80" x="$item" color="#4d7c0f" />
        </Element>

        <Element y="120">
          <!-- looping over an array with objects -->
          <Element :for="item in $collection2" w="80" h="80" :x="$item.x * $index" color="$item.color" />
        </Element>

        <Element y="220">
          <!-- looping over an array empty array, adding items over time -->
          <Element :for="item in $collection3" w="80" h="80" :x="$item.x" color="$item.color" />
        </Element>

        <Element y="320">
          <!-- looping over an array of components -->
          <Square :for="(item, index) in $collection2" x="$item.x" :id="'square'+$index" />
        </Element>

        <Element y="420">
          <!-- looping over an array of components, adding items over time -->
          <Square :for="item in $collection3" :x="$item.x" />

        </Element>

      </Element>`,
  state() {
    return {
      collection1: [0, 100, 200, 300, 400, 500],
      collection2: [
        {
          x: 0,
          color: colors[0],
        },
        {
          x: 100,
          color: colors[1],
        },
        {
          x: 200,
          color: colors[2],
        },
        {
          x: 300,
          color: colors[3],
        },
        {
          x: 400,
          color: colors[4],
        },
        {
          x: 500,
          color: colors[5],
        },
      ],
      collection3: [],
    }
  },
  hooks: {
    ready() {
      this.$setTimeout(() => {
        this.collection2[0].color = colors[5]
        this.collection2[1].color = colors[4]
        this.collection2[2].color = colors[3]
        this.collection2[3].color = colors[2]
        this.collection2[4].color = colors[1]
        this.collection2[5].color = colors[0]
      }, 4000)

      let count = 0
      const interval = this.$setInterval(() => {
        this.collection3.push({
          x: count * 100,
          color: colors[count],
        })
        count++
        if (count === colors.length) clearInterval(interval)
      }, 1000)
    },
  },
})
