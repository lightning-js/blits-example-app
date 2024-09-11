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

const makeItems = (num = 1) => {
  const result = []
  for (let i = 0; i < num; i++) {
    result.push(makeItem())
  }
  return result
}

const LegendItem = Blits.Component('LegendItem', {
  template: `
    <Element>
      <Circle color="#fb923c" size="60" />
      <Text color="#e5e5e5" size="32" y="10" wordwrap="57" align="center">{{ $id }}</Text>
      <Text color="#e5e5e5" x="80" y="14" size="28">{{ $text }}</Text>
    </Element>
  `,
  props: ['id', 'text'],
})

const Row = Blits.Component('Row', {
  template: `
    <Element w="500" h="60" :y="$index * 80" color="#fff7ed">
      <Element w="10" h="60" color="#06b6d4" />
      <Text :content="$text" x="30" y="10" font="opensans" :color="$activeRow == $index ? '#06b6d4' : '#1e293b'" />
    </Element>
  `,
  props: ['index', 'text', 'activeRow'],
})

const Rows = Blits.Component('Row', {
  components: {
    Row,
  },
  template: `
    <Row :for="(item, index) in $data" key="$item.id + 'key2'" :i="$index" text="$item.text" y="50" />
  `,
  props: ['data'],
})

export default Blits.Component('ForLoop', {
  components: {
    Square,
    LegendItem,
    Row,
    Rows,
  },

  template: `
    <Element>
      <Text x="100" y="60" size="48">Array operations test</Text>
      <Element y="170" x="140">
        <Element x="-10" w="500" h="80" color="#64748b" :y.transition="$y" :alpha.transition="!!!$hide" />
        <LegendItem y="0" id="a" text="Fill array by assignment" />
        <LegendItem y="90" id="b" text="Push new item to array" />
        <LegendItem y="180" id="c" text="Pop item from array" />
        <LegendItem y="270" id="d" text="Shift item from array" />
        <LegendItem y="360" id="e" text="Splice 2 items from array" />
        <LegendItem y="450" id="f" text="Unshift 2 items into array" />
        <LegendItem y="540" id="g" text="Empty array by assignment" />
        <LegendItem y="630" id="h" text="Concat an array with items" />
        <LegendItem y="720" id="i" text="Sort array alphabetically" />
    
        <Element y="840">
          <Text size="26" y="10">Array length:</Text>
          <Text :content="$data.length" size="40" x="180" color="#fb923c" />
        </Element>
      </Element>
      <Element x="740" y="100">
        <Text>For loop on Element</Text>
        <Element :for="(item, index) in $data" key="$item.id + 'key'" w="500" h="60" :y="$index * 80 + 50" color="#fff7ed">
          <Element w="10" h="60" color="#fb923c" />
          <Text
            :content="$item.text"
            x="30"
            y="10"
            font="opensans"
            :color="$activeRowIndex === $index ? '#06b6d4' : '#1e293b'"
          />
        </Element>
      </Element>
    
      <Element x="1280" y="100">
        <Text>For loop on Component</Text>
        <Row
          :for="(item, index) in $data"
          key="$item.id + 'key2'"
          :activeRow="$count > 0 ? $activeRowIndex : $activeRowIndex"
          :index="$index"
          :text="$item.text"
          y="50"
        />
        <!--         <Rows :data="$data" /> -->
      </Element>
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
      sortDirection: 1,
      activeRowIndex: 0,
    }
  },
  computed: {
    show() {
      return this.hide === true
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
  input: {
    a() {
      this.y = -10
      this.$trigger('y')
      const data = []
      for (let i = 0; i < 6; i++) {
        data.push(makeItem())
      }
      this.data = data
    },
    b() {
      this.y = 80
      this.$trigger('y')
      this.data.push(makeItem())
    },
    c() {
      this.y = 170
      this.$trigger('y')
      this.data.pop()
    },
    d() {
      this.y = 260
      this.$trigger('y')
      this.data.shift()
    },
    e() {
      this.y = 350
      this.$trigger('y')
      this.data.splice(2, 4)
    },
    f() {
      this.y = 440
      this.data.unshift(makeItem(), makeItem())
    },
    g() {
      this.y = 530
      this.$trigger('y')
      this.data = []
    },
    h() {
      this.y = 620
      this.$trigger('y')
      this.data = this.data.concat(makeItems(3))
    },
    i() {
      this.y = 710
      this.$trigger('y')
      this.sortDirection = this.sortDirection === 1 ? 0 : 1
      this.data = this.data.sort((a, b) => {
        const textA = a.text.toLowerCase()
        const textB = b.text.toLowerCase()
        return this.sortDirection === 1
          ? textA < textB
            ? -1
            : textA > textB
            ? 1
            : 0
          : textA > textB
          ? -1
          : textA < textB
          ? 1
          : 0
      })
    },
    up() {
      if (this.activeRowIndex > 0) {
        this.activeRowIndex -= 1
      }
    },
    down() {
      if (this.activeRowIndex < this.data.length - 1) {
        this.activeRowIndex += 1
      }
    },
  },
})
