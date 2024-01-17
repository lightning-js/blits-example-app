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
import Button from './Button'

export default Blits.Component('Menu', {
  components: {
    Button,
  },
  template: `
    <Element :x.transition="$x" w="400" h="1080" color="{right: '#64748baa', left: '#475569aa'}">
      <Element x="50" y="40">
        <Button color="#e4e4e7" ref="menu1" />
        <Button color="#e4e4e7" y="100" ref="menu2" />
        <Button color="#e4e4e7" y="200" ref="menu3" />
        <Button color="#e4e4e7" y="300" ref="menu4" />
      </Element>
    </Element>`,
  state() {
    return {
      x: -360,
      focused: null,
    }
  },
  hooks: {
    focus() {
      this.focused = 1
      this.$trigger('focused')
      this.x = 0
    },
    unfocus() {
      this.x = -360
    },
  },
  watch: {
    focused() {
      const item = this.select(`menu${this.focused}`)
      item && item.focus && item.focus()
    },
  },
  input: {
    right() {
      this.parent.focus()
    },
    down() {
      this.focused = Math.min(this.focused + 1, 4)
    },
    up() {
      this.focused = Math.max(this.focused - 1, 1)
    },
  },
})
