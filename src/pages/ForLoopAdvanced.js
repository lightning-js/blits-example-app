/*
 * Copyright 2023 Comcast Cable Communications Management, LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable laew or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import Blits from '@lightningjs/blits'
import Square from '../components/Square'

const A = [
  'pretty',
  'large',
  'big',
  'small',
  'tall',
  'short',
  'long',
  'handsome',
  'plain',
  'quaint',
  'clean',
  'elegant',
  'easy',
  'angry',
  'crazy',
  'helpful',
  'mushy',
  'odd',
  'unsightly',
  'adorable',
  'important',
  'inexpensive',
  'cheap',
  'expensive',
  'fancy',
]
const C = [
  'red',
  'yellow',
  'blue',
  'green',
  'pink',
  'brown',
  'purple',
  'brown',
  'white',
  'black',
  'orange',
]
const N = [
  'table',
  'chair',
  'house',
  'bbq',
  'desk',
  'car',
  'pony',
  'cookie',
  'sandwich',
  'burger',
  'pizza',
  'mouse',
  'keyboard',
]

const random = (max) => Math.round(Math.random() * 1000) % max
let count = 0
const makeItem = () => ({
  id: count++,
  text: `${A[random(A.length)]} ${C[random(C.length)]} ${N[random(N.length)]}`,
})

const LegendItem = Blits.Component('LegendItem', {
  template: `
    <Element>
      <Circle color="#fb923c" size="60" />
      <Text color="#e5e5e5" size="32" y="10" wordwrap="57" align="center">{{$id}}</Text>
      <Text color="#e5e5e5" x="80" y="14" size="28">{{$text}}</Text>
    </Element>
  `,
  props: ['id', 'text'],
})

const Row = Blits.Component('Row', {
  template: `
    <Element w="500" h="60" :y="$index * 80" color="#fff7ed">
      <Element w="10" h="60" color="#06b6d4" />
      <Text content="$text" x="30" y="10" font="opensans" color="#1e293b" />
    </Element>
  `,
  props: ['index', 'text'],
})

export default Blits.Component('ForLoop', {
  components: {
    Square,
    LegendItem,
    Row,
  },
  template: `
    <Element>
      <Text x="100" y="60" size="48">Array operations test</Text>
      <Element y="170" x="140">
        <Text color="#e5e5e5" size="32">Key legend:</Text>

        <Element y="20">
          <Element x="-10" w="500" h="80" color="#64748b" :y.transition="$y" :alpha.transition="!!!$hide" />
          <LegendItem y="70" id="1" text="Fill array by assignment"/>
          <LegendItem y="160" id="2" text="Push new item to array"/>
          <LegendItem y="240" id="3" text="Pop item from array"/>
          <LegendItem y="330" id="4" text="Shift item from array"/>
          <LegendItem y="420" id="5" text="Splice 2 items from array"/>
          <LegendItem y="510" id="6" text="Unshift 2 items into array"/>
          <LegendItem y="600" id="7" text="Empty array by assignment"/>
        </Element>

      </Element>
      <Element x="800" y="20">
        <Text>For loop on Element</Text>
        <Element :for="(item, index) in $data" key="$item.id + 'key'" w="500" h="60" :y="$index * 80 + 50" color="#fff7ed">
          <Element w="10" h="60" color="#fb923c" />
          <Text content="$item.text" x="30" y="10" font="opensans" color="#1e293b" />
        </Element>
      </Element>

      <Element x="1340" y="20">
      <Text>For loop on Component</Text>

        <Row :for="(item, index) in $data" key="$item.id + 'key2'" :index="$index" text="$item.text" y="50" />
      </Element>

      <!-- temporary animated pixel hack to trigger render cycles -->
      <Element w="1" h="1" y="800" :x="$x" color="red" />

    </Element>
  `,
  state() {
    return {
      count: 0,
      data: [],
      x: 0,
      y: 0,
      timeout: null,
      hide: true,
    }
  },
  computed: {
    show() {
      return this.hide > 0
    },
    data2() {
      return this.data
    },
  },
  watch: {
    y() {
      this.hide = false
      this.$clearTimeout(this.timeout)
      this.timeout = this.$setTimeout(() => {
        this.hide = true
      }, 600)
    },
  },
  hooks: {
    ready() {
      // temporary animated pixel hack to trigger render cycles
      this.$setInterval(() => (this.x = this.x + 0.00001), 100)
    },
  },
  input: {
    1() {
      this.y = 60
      this.$trigger('y')
      const data = []
      for (let i = 0; i < 10; i++) {
        data.push(makeItem())
      }
      this.data = data
    },
    2() {
      this.y = 150
      this.$trigger('y')
      this.data.push(makeItem())
    },
    3() {
      this.y = 230
      this.$trigger('y')
      this.data.pop()
    },
    4() {
      this.y = 320
      this.$trigger('y')
      this.data.shift()
    },
    5() {
      this.y = 410
      this.$trigger('y')
      this.data.splice(2, 4)
    },
    6() {
      this.y = 500
      this.$trigger('y')
      this.data.unshift(makeItem(), makeItem())
    },
    7() {
      this.y = 590
      this.$trigger('y')
      this.data = []
    },

    // h() {
    //   this.data = this.data.sort((a, b) => {
    //     const textA = a.text.toLowerCase()
    //     const textB = b.text.toLowerCase()

    //     return textA < textB ? -1 : textA > textB ? 1 : 0
    //   })
    // },

    // g() {
    //   this.data = this.data.filter((item) => item.id % 2)
    // },
    // h() {
    //   // const reversedData = this.data.slice().reverse()
    //   // this.data.length = 0
    //   // this.data = reversedData
    //   this.data = this.data.toReversed()
    //   // after 5 times, it's reaaaaly slow ...
    //   // this.data =
    //   // this.data = this.data.slice().reverse()
    //   // this.data.forEach((i) => console.log(i.text))
    // },

    // // this.data[0].text = 'John doe 2' // doesn't work
    // this.data[0] = {
    //   id: 1,
    //   text: 'John doe 2',
    // }
  },
})
