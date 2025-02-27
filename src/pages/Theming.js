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

import Toggle from '../components/Toggle.js'
import Bar from '../components/Bar.js'

export default Blits.Component('Theming', {
  components: {
    Bar,
    Toggle,
  },
  template: `
    <Element w="1920" h="1080" :color.transition="$$colors.get('bg')">
      <Text y="1020" x="1160" size="28" :color="$$colors.get('color4')"
        >Use "up", "down", "left" and "right" to change the appearance</Text
      >
        
      <Element :x.transition="(1920 - $$sizes.get('w')) / 2" :y.transition="(1080 - $$sizes.get('h')) / 2">
        <Element x="-250" y="-100" src="assets/shadow.png" w="1000" h="900" alpha="0.5" />
        
        <!-- Header -->
        <Element
          :w.transition="$$sizes.get('w')"
          :h.transition="$$sizes.get('h')"
          :color="$$colors.get('color1')"
          :effects="[{type: 'radius', props: {radius: $radius}}]"
        >
          <Element
            :w.transition="$$sizes.get('w')"
            h="100"
            :color="$$colors.get('color2')"
            :effects="[{type: 'radius', props: {radius: $radius}}]"
          />
          <Element :w.transition="$$sizes.get('w')" h="80" y="20" :color="$$colors.get('color2')" />
        
          <Text :content="$text" :color="$$colors.get('color3')" size="28" x="20" y="14" />
          <Toggle
            :x.transition="$$sizes.get('w') - 120"
            :on="$mode === 'dark'"
            :bgColor="$$colors.get('color1')"
            primaryColor="#22c55e"
          />
        </Element>
        
        <!-- Blocks -->
        <Element
          w="200"
          :h.transition="$$sizes.get('block1.h')"
          x="25"
          y="140"
          :color="$$colors.get('color2')"
          :effects="[{type: 'radius', props: {radius: $radius / 2}}]"
        />
        <Element
          :w.transition="$$sizes.get('block2.w')"
          :h="$$sizes.get('block2.h')"
          x="270"
          :y.transition="$$sizes.get('block2.y')"
          :color="$$colors.get('color2')"
          :effects="[{type: 'radius', props: {radius: $radius / 2}}]"
        />
        
        <!-- Graph -->
        <Element
          :x.transition="$$sizes.get('graph.x')"
          :y.transition="$$sizes.get('graph.y')"
          :w="$$sizes.get('graph.w')"
          :h="$$sizes.get('graph.h')"
          color="transparent"
        >
          <Element :x.transition="$$sizes.get('graph.offset')" :y.transition="$$sizes.get('graph.offset')">
            <Bar
              :bgColor="$$colors.get('color2')"
              :primaryColor="$$colors.get('color4')"
              :size="$$sizes.get('graph.size')"
              height="100"
              index="0"
            />
            <Bar
              :bgColor="$$colors.get('color2')"
              :primaryColor="$$colors.get('color4')"
              :size="$$sizes.get('graph.size')"
              height="140"
              index="1"
            />
            <Bar
              :bgColor="$$colors.get('color2')"
              :primaryColor="$$colors.get('color4')"
              :size="$$sizes.get('graph.size')"
              height="170"
              index="2"
            />
            <Bar
              :bgColor="$$colors.get('color2')"
              :primaryColor="$$colors.get('color4')"
              :size="$$sizes.get('graph.size')"
              height="150"
              index="3"
            />
            <Bar
              :bgColor="$$colors.get('color2')"
              :primaryColor="$$colors.get('color4')"
              :size="$$sizes.get('graph.size')"
              height="90"
              index="4"
            />
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      mode: 'dark',
      sizes: 'small',
      radius: 20,
    }
  },
  watch: {
    mode(val) {
      this.$colors.set(val)
    },
    sizes(val) {
      this.$sizes.set(val)
    },
  },
  computed: {
    text() {
      return this.mode === 'dark' ? 'Dark mode' : 'Light mode'
    },
  },
  input: {
    right() {
      this.toggleX = 0
      this.$setTimeout(() => {
        this.mode = 'light'
      }, 150)
    },
    left() {
      this.toggleX = 48
      this.$setTimeout(() => {
        this.mode = 'dark'
      }, 150)
    },
    up() {
      this.sizes = 'large'
    },
    down() {
      this.sizes = 'small'
    },
  },
})
