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

const InteractiveCard = Blits.Component('InteractiveCard', {
  template: `
    <Element w="360" h="200" rounded="16" :color.transition="{ value: $$isHovered ? $hoverColor : $color, duration: 200 }">
      <Text x="24" y="20" :content="$label" size="26" color="#fff" />
      <Text x="24" y="60" :content="'Hover: ' + ($$isHovered ? 'yes' : 'no')" size="22" color="#e2e8f0" />
      <Text x="24" y="96" :content="'Clicks: ' + $clicks" size="22" color="#e2e8f0" />
    </Element>
  `,
  props: {
    color: '',
    hoverColor: '',
    label: '',
  },
  state() {
    return {
      clicks: 0,
    }
  },
  hooks: {
    hover() {
      this.$log.info(`[${this.label}] hover`)
    },
    unhover() {
      this.$log.info(`[${this.label}] unhover`)
    },
  },
  input: {
    enter() {
      this.clicks += 1
    },
  },
})

/** No hover / unhover hooks and no $isHovered reference anywhere below,
* so this Component's holder element stays non-interactive and mouse
  events fall through to whatever is rendered underneath it.
*/
const PassthroughOverlay = Blits.Component('PassthroughOverlay', {

  template: `
    <Element w="$w" h="48" rounded="8" color="#0f172a99">
      <Text x="$w/2" y="12" mount="{x: 0.5}" :content="$text" size="20" color="#fbbf24" />
    </Element>
  `,
  props: {
    text: '',
    w: 140
  },
})

export default Blits.Component('Mouse', {
  components: {
    Block,
    InteractiveCard,
    PassthroughOverlay,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Text
        x="960"
        y="80"
        mount="0.5"
        content="Mouse Hover and Focus Navigation Demo"
        font="raleway"
        size="36"
        color="#94a3b8"
      />
      <Element x="320" y="150" ref="row">
        <Block
          :for="(block, index) in $blocks"
          color="$block.color"
          focusColor="$block.focusColor"
          :x="$index * 320 + 200"
          rounded="12"
          :ref="'block' + ($index + 1)"
          :blockIndex="$index + 1"
          :z="$focused === ($index + 1) ? 1 : 0"
        />
      </Element>
      <Element x="520" y="300" w="1280">
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
    
      <Text
        x="100"
        y="560"
        content="Overlay Pass-through Demo (static template)"
        font="raleway"
        size="30"
        color="#94a3b8"
      />
      <Text
        x="100"
        y="600"
        content="The 'OVERLAY' badge has no hover/unhover hooks, so \n hovering/clicking it affects the card underneath"
        size="20"
        color="#64748b"
      />
      <Element x="100" y="720">
        <InteractiveCard color="#334155" hoverColor="#475569" label="Underlying card" />
        <PassthroughOverlay x="110" y="-20" z="1" text="OVERLAY" />
      </Element>
    
      <Text
        x="1820"
        y="560"
        mount="{x:1}"
        content="Overlay Pass-through Demo (dynamic :is components)"
        font="raleway"
        size="30"
        color="#94a3b8"
      />
      <Text
        x="1690"
        y="600"
        mount="{x:1}"
        content="Both the underlying card and the badge overlay are  resolved at runtime via \n Component :is, nested inside a wrapper component"
        size="20"
        color="#64748b"
      />
      <Text
        x="960"
        y="960"
        mount="0.5"
        :content="'Resolved underlying: ' + $dynamicUnderlying + '   |   Resolved overlay: ' + $dynamicOverlay"
        size="20"
        color="#64748b"
      />
      <Element x="1030" y="700">
        <Component is="$underlyingComponent" color="#334155" hoverColor="#475569" label="Underlying Dynamic Card" />
        <Component :is="$overlayComponent" w="200" x="100" y="-20" z="1" text="Reactive Overlay" />
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
      underlyingComponent: InteractiveCard,
      overlayComponent: PassthroughOverlay
    }
  },
  hooks: {
    ready() {
      const focused = this.$select('block1')
      if (focused && focused.$focus) focused.$focus()
      this.$listen('blockFocused', (index) => {
        this.focused = index
      })
      // Periodically swap which concrete components are resolved via `:is`
      // for both the underlying card and the overlay badge.
      // this.$setInterval(() => {
      //   const uIndex = this.underlyingOptions.indexOf(this.dynamicUnderlying)
      //   const oIndex = this.overlayOptions.indexOf(this.dynamicOverlay)
      //   this.dynamicUnderlying =
      //     this.underlyingOptions[(uIndex + 1) % this.underlyingOptions.length]
      //   this.dynamicOverlay = this.overlayOptions[(oIndex + 1) % this.overlayOptions.length]
      // }, 4000)
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
