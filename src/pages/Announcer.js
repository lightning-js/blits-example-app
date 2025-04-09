/*
 * Copyright 2025 Comcast Cable Communications Management, LLC
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

const Item = Blits.Component('Item', {
  template: `
    <Element :color="$hasFocus ? '#e0f2fe' : '#fef9c3'" w="200" h="200" :effects="[{type: 'radius', props: {radius: 12}}]">
      <Text :content="$name" :size="$hasFocus ? 38 : 32" :color="$hasFocus ? '#1e3a8a' : '#2563eb'" placement="{x: 'center', y: 'middle'}" />
    </Element>
  `,
  props: ['name'],
  state() {
    return {
      message: null,
    }
  },
  hooks: {
    focus() {
      this.message = this.$announcer.speak(this.name)
    },
    unfocus() {
      this.message && this.message.cancel()
    },
  },
})

const Row = Blits.Component('Row', {
  components: {
    Item,
  },
  template: `
    <Element>
      <Text :content="$title" size="40" />
        <Item :for="(item, index) in $items" name="$item" y="100" x="$index * 250 + 100" ref="item" />
    </Element>
  `,
  props: ['title', 'items'],
  state() {
    return {
      focusIndex: -1,
      message: null,
    }
  },
  hooks: {
    focus() {
      this.message = this.$announcer.speak('Row with different ' + this.title)
      this.focusIndex = 0
      this.$trigger('focusIndex')
    },
    unfocus() {
      this.message.cancel()
    },
  },
  watch: {
    focusIndex(v) {
      this.$select('item' + v).$focus()
    },
  },
  input: {
    right() {
      this.focusIndex = Math.min(this.focusIndex + 1, this.items.length - 1)
    },
    left() {
      this.focusIndex = Math.max(this.focusIndex - 1, 0)
    },
  },
})

export default Blits.Component('Announcer', {
  components: {
    Row,
  },
  template: `
    <Element width="100%" y="50">
      <Text placement="{x: 'center'}" size="50">Food</Text>
      <Row title="Fruits" x="200" y="150" :items="['Banana', 'Strawberry', 'Kiwi', 'Mango', 'Grape']" ref="row1" />
      <Row title="Snacks" x="200" y="600" :items="['Pizza', 'Burger', 'Fries', 'Popcorn', 'Chocolate']" ref="row2" />
    </Element>
  `,
  state() {
    return {
      focusIndex: 1,
    }
  },
  watch: {
    focusIndex(v) {
      this.$select('row' + v).$focus()
    },
  },
  hooks: {
    focus() {
      this.$announcer.speak('The topic is Food')

      this.$select('row1').$focus()
      this.$trigger('focusIndex')
    },
  },
  input: {
    up() {
      this.focusIndex = Math.max(this.focusIndex - 1, 1)
    },
    down() {
      this.focusIndex = Math.min(this.focusIndex + 1, 2)
    },
  },
})
