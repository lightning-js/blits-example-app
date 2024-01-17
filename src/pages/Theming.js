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

import darkmode from '../themes/darkmode.js'
import lightmode from '../themes/lightmode.js'

export default Blits.Component('Theming', {
  components: {
    Bar,
    Toggle,
  },
  template: `
    <Element w="1920" h="1080" :color.transition="$colors.bg">

      <Text y="1020" x="1160" size="28" :color="$colors.color4">Use "up", "down", "left" and "right" to change the appearance</Text>

      <Element :x.transition="(1920 - $width) / 2" :y.transition="(1080 - $height) / 2">
        <Element x="-250" y="-100" src="assets/shadow.png" w="1000" h="900" alpha="0.5" />

        <!-- Header -->
        <Element :w.transition="$width" :h.transition="$height" :color="$colors.color1" :effects="[$shader('radius', {radius: $radius})]">
          <Element :w.transition="$width" h="100" :color="$colors.color2" :effects="[$shader('radius', {radius: $radius})]" />
          <Element :w.transition="$width" h="80" y="20" :color="$colors.color2" />

          <Text :content="$text" :color="$colors.color3" size="28" x="20" y="14" />
          <Toggle :x.transition="$width - 120" :on="$mode === 'dark'" :bgColor="$colors.color1" primaryColor="#22c55e" />

        </Element>

        <!-- Blocks -->
        <Element w="200" :h.transition="$block1.height" x="25" y="140" :color="$colors.color2" :effects="[$shader('radius', {radius: $radius / 2})]" />
        <Element :w.transition="$block2.w" :h="$block2.h" x="270" :y.transition="$block2.y" :color="$colors.color2" :effects="[$shader('radius', {radius: $radius / 2})]" />

        <!-- Graph -->
        <Element :x.transition="$graph.x" :y.transition="$graph.y" :w="$graph.w" :h="$graph.h" color="transparent">
          <Element :x.transition="$graph.offset" :y.transition="$graph.offset">
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="100" index="0" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="140" index="1" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="170" index="2" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="150" index="3" />
            <Bar :bgColor="$colors.color2" :primaryColor="$colors.color4" :size="$graph.size" height="90" index="4" />
          </Element>
        </Element>

      </Element>
    </Element>
  `,
  state() {
    return {
      mode: 'dark',
      radius: 20,
      width: 500,
      height: 600,
    }
  },
  computed: {
    colors() {
      return this.mode === 'dark' ? darkmode : lightmode
    },
    text() {
      return this.mode === 'dark' ? 'Dark mode' : 'Light mode'
    },
    block1() {
      return {
        height: this.height === 600 ? 180 : 720,
      }
    },
    block2() {
      return {
        y: this.height === 600 ? 140 : 560,
        h: this.height === 600 ? 180 : 300,
        w: this.height === 600 ? 200 : 890,
      }
    },
    graph() {
      return {
        x: this.height === 600 ? 32 : 270,
        y: this.height === 600 ? 370 : 140,
        w: this.height === 600 ? 0 : 890,
        h: this.height === 600 ? 0 : 400,
        offset: this.height === 600 ? 0 : 110,
        size: this.height === 600 ? 'small' : 'large',
      }
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
      this.width = 1200
      this.height = 900
    },
    down() {
      this.width = 500
      this.height = 600
    },
  },
})
