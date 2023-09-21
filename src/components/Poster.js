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

export default Blits.Component('Poster', {
  template: `
    <Element w="185" h="278" x="$x"
      :src="$src"
      :color="{top: '#fff', bottom: $colorBottom}"
      :scale.transition="{value: $scale, duration: 200, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
      :effects="[$shader('radius', {radius: 8})]"
    />`,
  // color transitions have some issues, so I'll leave it out for now
  // :colorBottom.transition="{v: $colorBottom, d: 200, f: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"!
  props: ['src', 'index'],
  state() {
    return {
      scale: 1,
      colorBottom: '#000',
    }
  },
  computed: {
    x() {
      return this.index * 215
    },
  },
  hooks: {
    focus() {
      this.colorBottom = '#fff'
      this.scale = 1.1
      this.$emit('posterSelect', this.index)
    },
    unfocus() {
      this.colorBottom = '#000'
      this.scale = 1
    },
  },
})
