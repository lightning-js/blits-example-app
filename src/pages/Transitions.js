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

export default Blits.Component('Transitions', {
  template: `
    <Element>
      <!-- simple, default transition -->
      <Element w="200" h="200" x="50" :y.transition="$y" color="#c4b5fd" />
      <!-- simple, default transition with object syntax -->
      <Element w="200" h="200" x="300" :y.transition="{value: $y}" color="#a78bfa" />
      <!-- transition with custom duration -->
      <Element
        w="200" h="200" x="550"
        :y.transition="{value: $y, duration: 1000, start: $start, end: $doneTransition3}" color="#8b5cf6"
        ref="bla"
      />
      <!-- transition with custom duration and wait -->
      <Element
        w="200" h="200" x="800"
        :y.transition="{value: $y, duration: 500, delay: 1000, start: $start, end: $finished}" color="#7c3aed"
      />
      <!-- transition with built-in easing function -->
      <Element w="200" h="200" x="1050" :y.transition="{value: $y, function: 'ease-in-out', end: $finished}" color="#6d28d9" />
      <!-- transition with custom duration and a built-in easing function -->
      <Element
        w="200" h="200" x="1300"
        :y.transition="{value: $y, duration: 3000, function: 'ease-in-out-back', end: $finished}" color="#5b21b6" />
      <!-- transition with custom duration and a custum bezier function -->
      <Element w="200" h="200" x="1550" :y.transition="{value: $y, duration: 800, function: 'cubic-bezier(1,-0.64,.39,1.44)'}" color="#4c1d95" />
    </Element>`,
  state() {
    return {
      y: 50,
    }
  },
  hooks: {
    ready() {
      this.$setTimeout(() => {
        this.y = 1080 - 50 - 200
      }, 2000)
    },
  },
  methods: {
    doneTransition3() {
      this.$log.info('Transition 3 is done!')
    },
    start(el, prop, val) {
      this.$log.info('Start transition', el.nodeId, prop, val)
    },
    finished(el, prop, val) {
      this.$log.info('Finished transition', el.nodeId, prop, val)
    },
  },
})
