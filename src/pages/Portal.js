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
      <Element src="assets/blits-logo-full.png" w="200" h="112" :y.transition="{value: 80 - $yOffset, duration: 400}" x="60" />
      <Element :x.transition="$offset" mountY="0.5" y="540" h="500">
        <PortalItem :for="(item, index) in $items" :x.transition="{value: $xOffset + $index * 560, delay: 50 * ($index%4), duration: 300}" title="$item.title" description="$item.description" index="$index" :ref="'portal'+$index"  key="$item.id" />
      </Element>
    </Element>`,
  state() {
    return {
      focused: null,
      offset: 60,
      xOffset: 240,
      yOffset: 50,
      items: [
        { title: 'Positioning', id: 'positioning', description: 'Element positioning in a UI' },
        {
          title: 'Transitions',
          id: 'transitions',
          description: 'Smooth transitions and animations between UI elements',
        },
        {
          title: 'Gradients',
          id: 'gradients',
          description: 'Usage of gradients for stylish visual effects',
        },
        {
          title: 'Components',
          id: 'components',
          description: 'Building blocks of the UI, reusable and customizable',
        },
        { title: 'Key input', id: 'keyinput', description: 'Handling keyboard inputs and events' },
        { title: 'Colors', id: 'colors', description: 'Exploring color schemes' },
        {
          title: 'For Loop',
          id: 'forloop',
          description: 'Iterating over elements using for loops',
        },
        {
          title: 'Scaling',
          id: 'scaling',
          description: 'Resizing and scaling elements within the UI',
        },
        {
          title: 'Effects',
          id: 'effects',
          description: 'Applying visual effects to enhance user experience',
        },
        {
          title: 'Alpha',
          id: 'alpha',
          description: 'Adjusting the transparency or opacity of elements',
        },
        {
          title: 'Show If',
          id: 'showif',
          description: 'Conditionally showing or hiding elements based on certain criteria',
        },
        {
          title: 'Images',
          id: 'images',
          description: 'Incorporating images and graphics into the UI',
        },
        { title: 'Rotation', id: 'rotation', description: 'Rotating elements for dynamic display' },
        { title: 'Events', id: 'events', description: 'Handling various user and system events' },
        {
          title: 'Focus Handling',
          id: 'focushandling',
          description: 'Managing focus and user interaction within the UI',
        },
        {
          title: 'Sprites',
          id: 'sprites',
          description: 'Using sprites for 2D graphics and animations',
        },
        { title: 'Texts', id: 'texts', description: 'Displaying and formatting text in the UI' },
        {
          title: 'Theming',
          id: 'theming',
          description: 'Customizing the visual theme and style of the UI',
        },
        {
          title: 'Slots',
          id: 'slots',
          description: 'Creating flexible content slots for dynamic content insertion',
        },
        {
          title: 'Intro',
          id: 'intro',
          description: 'A sample of a splash screen with animations for technical demonstration',
        },
        {
          title: 'TMDB',
          id: 'tmdb',
          description: 'Integration with The Movie Database (TMDB) for movie-related data',
        },
      ],
    }
  },
  hooks: {
    focus() {
      this.focused = 0
      this.xOffset = 0
      this.yOffset = 0
    },
  },
  watch: {
    focused(value) {
      const focusItem = this.select(`portal${value}`)
      if (focusItem && focusItem.focus) {
        focusItem.focus()
        if (value < 1) {
          this.offset = 60
        } else if (value > this.items.length - 2) {
          this.offset = 60 - (this.items.length - 2) * 560 + 560
        } else {
          this.offset = 60 - value * 560 + 560
        }
      }
    },
  },
  input: {
    left() {
      this.focused = this.focused === 0 ? this.items.length - 1 : this.focused - 1
    },
    right() {
      this.focused = this.focused === this.items.length - 1 ? 0 : this.focused + 1
    },
    enter() {
      this.$router.to(`/${this.items[this.focused].id}`)
    },
  },
})
