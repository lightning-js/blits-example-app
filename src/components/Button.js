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

export default Blits.Component('Button', {
  template: `
    <Element w="300" h="80" color="$color"
      :effects="[$shader('rounded', {radius: 20})]"
      :alpha.transition="$alpha"
      :scale.transition="$scale"
      :z="$zIndex"
      :rotation="$rotate">
    </Element>`,
  props: ['color'],
  state() {
    return {
      alpha: 0.4,
      scale: 1,
      zIndex: 1,
      rotate: 0,
    }
  },
  hooks: {
    focus() {
      this.$log.info(`Button with color ${this.color} received focus`)
      this.alpha = 1
      this.scale = this.scale === 1 ? 1.2 : 1
      this.zIndex = 100
    },
    unfocus() {
      this.$log.info(`Button with color ${this.color} lost focus`)
      this.alpha = 0.4
      this.scale = 1
      this.zIndex = 1
      this.rotate = 0
    },
  },
  input: {
    enter() {
      this.rotate = this.rotate === 0 ? -4 : 0
      this.scale = this.scale === 1.2 ? 1.3 : 1.2
    },
  },
})
