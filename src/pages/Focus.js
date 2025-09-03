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

const Outside = Blits.Component('Block', {
  template: `
    <Element w="250" h="250" :color="$color"> </Element>`,
  state() {
    return {
      color: 'purple',
    }
  },
  hooks: {
    focus() {
      console.log('focus on outside', this.componentId)
      this.color = 'green'
    },
    unfocus() {
      this.color = 'purple'
    },
  },
})

const Block = Blits.Component('Block', {
  template: `
    <Element w="50" h="50" :color="$color"> </Element>`,
  state() {
    return {
      color: 'white',
    }
  },
  hooks: {
    focus() {
      console.log('focus on block', this.componentId)
      this.color = 'yellow'
    },
    unfocus() {
      this.color = 'white'
    },
  },
})

const Tile = Blits.Component('Tile', {
  components: {
    Block,
  },
  template: `
    <Element w="200" h="200" color="gray">
      <Text :content="'Tile' + $index" :color="$color" placement="{x: 'center', y: 'middle'}" />
      <Block x="130" y="130" ref="block" />
      <Element w="30" h="30" x="100" y="0" :color="$hasFocus ? 'pink' : 'blue'" />
    </Element>`,
  props: ['index'],
  state() {
    return {
      color: 'white',
      color2: 'blue',
    }
  },
  hooks: {
    focus() {
      console.log('focus on tile', this.componentId)
      this.color = 'red'
      this.$select('block').$focus()
    },
    unfocus() {
      this.color = 'blue'
    },
  },
})

export default Blits.Component('Focus', {
  components: {
    Tile,
    Outside,
  },
  template: `
    <Element :color="$color" w="1920" h="1080">
      <Element x="100" y="100">
        <Layout gap="50">
          <Tile index="1" ref="tile1" h="200" w="200" />
          <Tile index="2" ref="tile2" h="200" w="200" />
          <Tile index="3" ref="tile3" h="200" w="200" />
        </Layout>

        <Outside x="1000" y="600" ref="outside1" />

        <Outside x="1400" y="600" ref="outside2" />
      </Element>
    </Element>
  `,
  state() {
    return {
      index: 1,
      color: 'white',
    }
  },
  hooks: {
    ready() {
      this.$trigger('index')
      this.$setInterval(() => {
        this.$select('outside2').$focus()
      }, 2000)
    },
    focus() {
      console.log('focus', 'Focus page')
      this.color = 'white'
    },
    unfocus() {
      console.log('unfocus', 'Focus page')
      this.color = 'blue'
    },
  },
  watch: {
    index(v) {
      const selected = this.$select('tile' + v)
      if (selected) selected.$focus()
      else console.log('no tile found for ' + v)
    },
  },
  input: {
    left() {
      this.index = Math.max(1, this.index - 1)
    },
    right() {
      this.index = Math.min(3, this.index + 1)
      // this.parent.$focus(e)
    },
    enter() {
      this.$select('outside1').$focus()
    },
  },
})
