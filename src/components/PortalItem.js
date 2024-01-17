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

export default Blits.Component('PortalItem', {
  template: `
    <Element w="370" h="320" :scale.transition="$scale" :color="$backgroundColor" :effects="[$shader('radius', {radius: 6})]">
      <Text x="30" y="30" :content="$number" size="84" :color="$fontColor" />
      <Text x="30" y="140" :content="$title" size="42" font="raleway" :color="$fontColor" letterspacing="2" />
      <Text x="30" y="200" :content="$description" wordwrap="300" size="28" :color="$fontColor" lineheight="32" />
    </Element>
  `,
  props: ['title', 'description', 'index', 'id'],
  state() {
    return {
      backgroundColor: '#44037a',
      scale: 1,
      fontColor: '#e8d7f9',
      number: this.index < 9 ? `0${this.index + 1}` : this.index + 1,
    }
  },
  hooks: {
    focus() {
      this.backgroundColor = '#fafafa'
      this.fontColor = '#000'
      this.scale = 1.1
    },
    unfocus() {
      if (!this.$router.navigating) {
        this.backgroundColor = '#44037a'
        this.fontColor = '#e8d7f9'
        this.scale = 1
      }
    },
  },
  input: {
    enter() {
      this.$router.to(`/${this.id}`)
    },
    back() {
      // intercept
    },
  },
})
