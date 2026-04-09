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

// Demonstrates mouse hover + click support integrated with focus navigation.

import Blits from '@lightningjs/blits'

const Block = Blits.Component('MouseBlock', {
  template: `
    <Element
      w="280"
      h="120"
      rounded="12"
      :color.transition="{ value: $$isHovered || $$hasFocus ? $focusColor : $color, duration: 200 }"
      :alpha.transition="{ value: $$isHovered || $$hasFocus ? 1 : 0.5, duration: 200 }"
    >
      <Text x="140" y="60" mount="0.5" :content="'Clicks: ' + $clicks" size="28" color="#fff" />
    </Element>
  `,
  props: {
    color: '',
    focusColor: '',
    blockIndex: 0,
  },
  state() {
    return {
      clicks: 0,
    }
  },
  hooks: {
    focus() {
      if (this.blockIndex != null) {
        this.$emit('blockFocused', this.blockIndex)
      }
    },
  },
  input: {
    enter() {
      this.clicks += 1
    },
  },
})

export default Blits.Component('Mouse', {
  components: {
    Block,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Text
        x="960"
        y="120"
        mount="0.5"
        content="Mouse Hover and Focus Navigation Demo"
        font="raleway"
        size="36"
        color="#94a3b8"
      />
      <Element x="320" y="380" ref="row">
        <Block
          :for="(block, index) in $blocks"
          color="$block.color"
          focusColor="$block.focusColor"
          :x="$index * 320"
          rounded="12"
          :ref="'block' + ($index + 1)"
          :blockIndex="$index + 1"
          :z="$focused === ($index + 1) ? 1 : 0"
        />
      </Element>
      <Element x="320" y="620" w="1280">
        <Text content="Instructions" size="28" color="#94a3b8" />
        <Element y="44">
          <Element w="6" h="6" y="9" color="#64748b" rounded="3" />
          <Text x="16" content="Hover over the blocks to highlight them" size="24" color="#64748b" />
        </Element>
        <Element y="80">
          <Element w="6" h="6" y="9" color="#64748b" rounded="3" />
          <Text x="16" content="Click a block to focus it and increment the click count" size="24" color="#64748b" />
        </Element>
        <Element y="116">
          <Element w="6" h="6" y="9" color="#64748b" rounded="3" />
          <Text x="16" content="Use Left and Right arrow keys to move focus between blocks" size="24" color="#64748b" />
        </Element>
        <Element y="152">
          <Element w="6" h="6" y="9" color="#64748b" rounded="3" />
          <Text x="16" content="Press Enter on the focused block to count a click" size="24" color="#64748b" />
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      focused: 1,
      blocks: [
        { color: '#3C5A96', focusColor: '#3b82f6' },
        { color: '#047857', focusColor: '#10b981' },
        { color: '#7D633F', focusColor: '#f59e0b' },
      ],
    }
  },
  hooks: {
    ready() {
      const focused = this.$select('block1')
      if (focused && focused.$focus) focused.$focus()
      this.$listen('blockFocused', (index) => {
        this.focused = index
      })
    },
  },
  watch: {
    focused(value) {
      const focused = this.$select(`block${value}`)
      if (focused && focused.$focus) focused.$focus()
    },
  },
  input: {
    left() {
      const count = this.blocks.length
      this.focused = this.focused === 1 ? count : this.focused - 1
    },
    right() {
      const count = this.blocks.length
      this.focused = this.focused === count ? 1 : this.focused + 1
    },
  },
})
