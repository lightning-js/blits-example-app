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
import PortalRow from '../components/PortalRow.js'

import p from '../../package.json'

export default Blits.Component('Portal', {
  components: {
    PortalRow,
  },
  template: `
    <Element w="1920" h="1080" color="{top: '#44037a', bottom: '#240244'}">
      <PortalRow mount="{y: 0.5}" h="500" :y.transition="-$rowFocused * 420 + 550" title="Demos" items="$demo" ref="row0" />
      <PortalRow mount="{y: 0.5}" h="500" :y.transition="-$rowFocused * 420 + 1100" title="Examples and tests" items="$example" ref="row1" />
      <PortalRow mount="{y: 0.5}" h="500" :y.transition="-$rowFocused * 420 + 1650" title="Benchmarks and stress tests" items="$benchmark" ref="row2" />
      <Element w="1920" h="200" color="#44037a">
        <Element w="1920" h="70" y="200" color="{top: '#44037a'}"/>
        <Element :y.transition="{value: 80 - $logoOffset, duration: 400}">
          <Element src="assets/blits-logo-full.png" w="200" h="112" x="60" />
          <Element w="2" h="120" y="-10" color="#ffffff80" x="300" />
          <Element x="320" y="16">
            <Text y="0" size="36">Example App</Text>
            <Text y="50" size="24">v{{$version}}</Text>
          </Element>
        </Element>
      </Element>
    </Element>`,
  state() {
    return {
      version: p.version,
      offset: 60,
      rowFocused: 0,
      rows: ['demo', 'example', 'benchmark'],
      logoOffset: 50,
      demo: [
        {
          title: 'Loader',
          id: 'demos/loading',
          description: 'A basic loading screen',
        },
        {
          title: 'Intro',
          id: 'demos/intro',
          description: 'A splash screen with custom animations',
        },
        {
          title: 'Theming',
          id: 'demos/theming',
          description: 'Dynamically changing the styling of a component with themes',
        },
        {
          title: 'TMDB',
          id: 'demos/tmdb',
          description: 'The Movie Database (TMDB) example using data from a remote API',
        },
        {
          title: 'Sprites',
          id: 'demos/sprites',
          description: 'Display multiple images while keeping low memory footprint',
        },
        {
          title: 'Focus',
          id: 'demos/focushandling',
          description: 'Managing focus between components in a simple layout',
        },
        {
          title: 'Memory Game',
          id: 'demos/memory-game',
          description: 'Memory game with speech assistence (for accessibility)',
        },
      ],
      example: [
        {
          title: 'Positioning',
          id: 'examples/positioning',
          description: 'Positioning Elements and Components',
        },
        {
          title: 'Colors',
          id: 'examples/colors',
          description: 'Using different formats and notations for defining colors',
        },
        {
          title: 'Gradients',
          id: 'examples/gradients',
          description: 'Example of Basic gradients',
        },
        {
          title: 'Transitions',
          id: 'examples/transitions',
          description: 'Comparing different transition easing functions',
        },
        {
          title: 'Components',
          id: 'examples/components',
          description: 'Reusable Components',
        },
        {
          title: 'Alpha',
          id: 'examples/alpha',
          description: 'Applying transparency to Elements, Images and Components',
        },
        {
          title: 'Scaling',
          id: 'examples/scaling',
          description: 'Resizing and scaling Elements and Components',
        },
        {
          title: 'Rotation',
          id: 'examples/rotation',
          description: 'Rotating Elements',
        },
        {
          title: 'Key input',
          id: 'examples/keyinput',
          description: 'Handling user input events',
        },
        {
          title: 'For Loop',
          id: 'examples/forloop',
          description: 'Iterating over Elements and Components using for loops',
        },

        {
          title: 'Effects',
          id: 'examples/effects',
          description: 'Applying one or multiple effects (aka shaders)',
        },

        {
          title: 'Show',
          id: 'examples/showif',
          description: 'Conditionally show or hide Elements and Components',
        },
        {
          title: 'Events',
          id: 'examples/events',
          description: 'Communication between components by emitting and listening for events',
        },
        {
          title: 'Images',
          id: 'examples/images',
          description: '1 image says more than 1000 words ;)',
        },
        {
          title: 'Texts',
          id: 'examples/texts',
          description: 'Displaying and formatting text',
        },
        {
          title: 'Slots',
          id: 'examples/slots',
          description: 'Insert dynamic content from a parent into a child using slots',
        },
      ],
      benchmark: [
        {
          title: 'Exponential',
          id: 'benchmarks/exponential',
          description: 'Spawn a large number of components at an exponential rate',
        },
      ],
    }
  },
  hooks: {
    ready() {
      this.logoOffset = 0
      this.$trigger('rowFocused')
    },
  },
  watch: {
    rowFocused(v) {
      const row = this.select(`row${v}`)
      if (row && row.focus) row.focus()
    },
  },
  input: {
    up() {
      this.rowFocused = (this.rowFocused - 1 + this.rows.length) % this.rows.length
    },
    down() {
      this.rowFocused = (this.rowFocused + 1) % this.rows.length
    },
  },
})
