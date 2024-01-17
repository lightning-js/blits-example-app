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
import Square from '../components/Square'

const colors = ['#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d']

export default Blits.Component('ForLoop', {
  components: {
    Square,
  },
  template: `
    <Element>
      <Element y="20">
        <Element :for="item in $collection1" w="80" h="80" x="$item" color="#4d7c0f" />
      </Element>

      <Element y="120">
        <!-- looping over an array with objects -->
        <Element :for="item in $collection2" w="80" h="80" :x="$item.x * $index" color="$item.color" key="$item.id" />
      </Element>

      <Element y="220">
        <!-- looping over an array empty array, adding items over time -->
        <Element :for="item in $collection3" w="80" h="80" :x="$item.x" color="$item.color" />
      </Element>

      <Element y="320">
        <Square :for="(item, index) in $collection2" :x="$item.x * $index" :ref="'square'+$index" :alpha="$alpha" />
      </Element>

      <Element y="420">
        <!-- looping over an array of components, adding items over time -->
        <Square :for="item in $collection3" :x="$item.x" key="$item.color" :alpha="$alpha" />

      </Element>

      <Element y="520">
        <!-- looping over an array and using a component state variable -->
        <Element :for="item in $collection1" w="80" h="80" :x="$item" color="#eab308" :alpha="$alpha" />
      </Element>

      <Element y="620">
        <!-- looping over an array and using a component state variable and passing a key -->
        <Element :for="item in $collection2" w="80" h="80" :x="$item.x" color="$item.color" :alpha="$alpha" key="$item.id" />
      </Element>

      <Element y="720">
        <!-- looping over an array and replacing that array with new items _with_ a key attribute-->
        <Element :for="item in $collection4" w="80" h="80" :x="$item.x" color="#06b6d4" key="$item.id" />
      </Element>

      <Element y="720" x="700">
        <!-- looping over an array and replacing that array with new items _without_ a key attribute-->
        <Element :for="item in $collection4" w="80" h="80" :x="$item.x" color="#8b5cf6" />
      </Element>


      <Element y="920">
        <!-- looping over an array and replacing that array with new items _with_ a key attribute-->
        <Square :for="item in $collection4" w="80" h="80" :x="$item.x" key="$item.id" />
      </Element>

      <Element y="920" x="700">
        <!-- looping over an array and replacing that array with new items _without_ a key attribute-->
        <Square :for="item in $collection4" w="80" h="80" :x="$item.x" />
      </Element>

    </Element>
  `,
  state() {
    return {
      collection1: [0, 100, 200, 300, 400, 500],
      collection2: [
        {
          id: 'block1',
          x: 0,
          color: colors[0],
        },
        {
          id: 'block2',
          x: 100,
          color: colors[1],
        },
        {
          id: 'block3',
          x: 200,
          color: colors[2],
        },
        {
          id: 'block4',
          x: 300,
          color: colors[3],
        },
        {
          id: 'block5',
          x: 400,
          color: colors[4],
        },
        {
          id: 'block6',
          x: 500,
          color: colors[5],
        },
      ],
      collection3: [],
      collection4: [
        { x: 0, id: 'one' },
        { x: 200, id: 'two' },
        { x: 400, id: 'three' },
      ],
      alpha: 0.5,
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

      this.$setTimeout(() => {
        this.alpha = this.alpha === 0.5 ? 1 : 0.5
      }, 800)

      this.$setTimeout(() => {
        this.collection4 = [
          { x: 100, id: 'four' },
          { x: 500, id: 'five' },
        ]
      }, 2000)
    },
  },
})
