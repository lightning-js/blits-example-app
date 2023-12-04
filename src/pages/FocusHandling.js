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
import Menu from '../components/Menu.js'
import Button from '../components/Button.js'

export default Blits.Component('FocusHandling', {
  components: {
    Menu,
    Button,
  },
  template: `
    <Element>
      <Element x="300" y="150">
        <Button color="#ef4444" x="0" ref="button1" />
        <Button color="#f97316" x="320" ref="button2" />
        <Button color="#84cc16" x="640" ref="button3" />
        <Button color="#10b981" x="0" y="100" ref="button4" />
        <Button color="#06b6d4" y="100" x="320" ref="button5" />
        <Button color="#3b82f6" y="100" x="640" ref="button6" />
        <Button color="#8b5cf6" y="200" x="0" ref="button7" />
        <Button color="#d946ef" y="200" x="320" ref="button8" />
        <Button color="#f43f5e" y="200" x="640" ref="button9" />
      </Element>
      <Menu ref="menu" />
    </Element>`,
  state() {
    return {
      focused: null,
    }
  },
  hooks: {
    focus() {
      this.focused = 1
      this.$trigger('focused')
    },
  },
  watch: {
    focused(value) {
      const focused = this.select(`button${value}`)
      if (focused && focused.focus) focused.focus()
    },
  },
  input: {
    right() {
      this.focused = Math.min(this.focused + 1, 9)
    },
    left() {
      const v = this.focused - 1
      if (v === 0) {
        const menu = this.select('menu')
        if (menu && menu.focus) menu.focus()
      } else {
        this.focused = Math.max(v, 1)
      }
    },
    a() {
      const menu = this.select('menu')
      if (menu && menu.focus) menu.focus()
    },
  },
})
