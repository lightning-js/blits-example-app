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
import PortalItem from '../components/PortalItem.js'

// @ts-ignore
export default Blits.Component('Portal', {
  components: {
    PortalItem,
  },
  template: `
    <Element w="1920" h="1080" color="{top: '#44037a', bottom: '#240244'}">
      <Element :x.transition="$rowOffset.example" mountY="0.5" :y.transition="-$rowFocused * 500 + 540" h="500">
        <PortalItem :for="(item, index) in $example" :x.transition="{value: $itemOffset + $index * 430, delay: 50 * ($index%4), duration: 300}" title="$item.title" description="$item.description" index="$index" :ref="'example'+$index" key="$item.id" label="$rows[0]" />
      </Element>
      <Element :x.transition="$rowOffset.demo" mountY="0.5" :y.transition="-$rowFocused * 500 + 540" h="500">
        <PortalItem :for="(item, index) in $demo" :x.transition="{value: $itemOffset + $index * 430, delay: 50 * ($index%4), duration: 300}" title="$item.title" description="$item.description" index="$index" :ref="'demo'+$index" key="$item.id" y="500" label="$rows[1]" />
      </Element>
      <Element w="1920" h="200" color="#44037a" >
        <Element w="1920" h="70" y="200" color="{top: '#44037a'}" />
        <Element src="assets/blits-logo-full.png" w="200" h="112" :y.transition="{value: 80 - $logoOffset, duration: 400}" x="60" />
      </Element>
    </Element>`,
  state() {
    return {
      focused: null,
      offset: 60,
      xOffset: 240,
      yOffset: 50,
      rows: ['example', 'demo'],
      rowFocused: 0,
      rowOffset: {
        example: 60,
        demo: 60,
      },
      itemOffset: 240,
      logoOffset: 50,
      example: [
        {
          title: 'Positioning',
          color: '#44037a',
          id: 'positioning',
          description: 'Element positioning in a UI',
        },
        {
          title: 'Transitions',
          color: '#44037a',
          id: 'transitions',
          description: 'Smooth transitions and animations between UI elements',
        },
        {
          title: 'Gradients',
          color: '#44037a',
          id: 'gradients',
          description: 'Usage of gradients for stylish visual effects',
        },
        {
          title: 'Components',
          color: '#44037a',
          id: 'components',
          description: 'Building blocks of the UI, reusable and customizable',
        },
        {
          title: 'Key input',
          color: '#44037a',
          id: 'keyinput',
          description: 'Handling keyboard inputs and events',
        },
        { title: 'Colors', color: '#44037a', id: 'colors', description: 'Exploring color schemes' },
        {
          title: 'For Loop',
          color: '#44037a',
          id: 'forloop',
          description: 'Iterating over elements using for loops',
        },
        {
          title: 'Scaling',
          color: '#44037a',
          id: 'scaling',
          description: 'Resizing and scaling elements within the UI',
        },
        {
          title: 'Effects',
          color: '#44037a',
          id: 'effects',
          description: 'Applying visual effects to enhance user experience',
        },
        {
          title: 'Alpha',
          color: '#44037a',
          id: 'alpha',
          description: 'Adjusting the transparency or opacity of elements',
        },
        {
          title: 'Show If',
          color: '#44037a',
          id: 'showif',
          description: 'Conditionally showing or hiding elements based on certain criteria',
        },
        {
          title: 'Images',
          color: '#44037a',
          id: 'images',
          description: 'Incorporating images and graphics into the UI',
        },
        {
          title: 'Rotation',
          color: '#44037a',
          id: 'rotation',
          description: 'Rotating elements for dynamic display',
        },
        {
          title: 'Events',
          color: '#44037a',
          id: 'events',
          description: 'Handling various user and system events',
        },
        {
          title: 'Focus',
          color: '#44037a',
          id: 'focushandling',
          description: 'Managing focus and user interaction within the UI',
        },
        {
          title: 'Sprites',
          color: '#44037a',
          id: 'sprites',
          description: 'Using sprites for 2D graphics and animations',
        },
        {
          title: 'Texts',
          color: '#44037a',
          id: 'texts',
          description: 'Displaying and formatting text in the UI',
        },
        {
          title: 'Slots',
          color: '#44037a',
          id: 'slots',
          description: 'Creating flexible content slots for dynamic content insertion',
        },
      ],
      demo: [
        {
          title: 'Theming',
          color: '#f54e48',
          id: 'theming',
          description: 'Customizing the visual theme and style of the UI',
        },
        {
          title: 'Intro',
          color: '#f54e48',
          id: 'intro',
          description: 'A sample of a splash screen with animations',
        },
        {
          title: 'TMDB',
          color: '#f54e48',
          id: 'tmdb',
          description: 'Integration with The Movie Database (TMDB) API',
        },
      ],
    }
  },
  hooks: {
    focus() {
      this.focused = 0
      this.itemOffset = 0
      this.logoOffset = 0
    },
  },
  watch: {
    focused(value) {
      const focusedRow = this.rows[this.rowFocused]
      const focusItem = this.select(`${focusedRow}${value}`)
      if (focusItem && focusItem.focus) {
        focusItem.focus()
        if (value < 1) {
          this.rowOffset[focusedRow] = 60
        } else if (value > this[focusedRow].length - 2) {
          this.rowOffset[focusedRow] = 60 - (this[focusedRow].length - 2) * 430 + 430
        } else {
          this.rowOffset[focusedRow] = 60 - value * 430 + 430
        }
      }
    },
    rowFocused(value) {
      const focusedRow = this.rows[value]
      const focusItem = this.select(`${focusedRow}${this.focused}`)
      if (focusItem && focusItem.focus) {
        focusItem.focus()
      }
    },
  },
  input: {
    up() {
      if (this.rowFocused > 0) {
        this.focused = 0
        this.rowFocused--
      } else {
        this.focused = 0
        this.rowFocused = this.rows.length - 1
      }
    },
    down() {
      if (this.rowFocused < this.rows.length - 1) {
        this.focused = 0
        this.rowFocused++
      } else {
        this.focused = 0
        this.rowFocused = 0
      }
    },
    left() {
      if (this.focused > 0) {
        this.focused--
      } else {
        this.focused = this[this.rows[this.rowFocused]].length - 1
      }
    },
    right() {
      if (this.focused < this[this.rows[this.rowFocused]].length - 1) {
        this.focused++
      } else {
        this.focused = 0
      }
    },
    enter() {
      this.$router.to(`/${this[this.rows[this.rowFocused]][this.focused].id}`)
    },
  },
})
