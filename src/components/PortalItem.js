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

// @ts-ignore
export default Blits.Component('PortalItem', {
  template: `
    <Element w="470" h="500" :scale.transition="$scale" :color="$backgroundColor" :effects="[$shader('radius', {radius: 12})]">
      <Text x="60" y="60" :content="$number" size="84" :color="$fontColor" />
      <Element x="60" y="170" w="360" h="1" :color="$fontColor" />
      <Text x="60" y="200" :content="$title" size="42" font="raleway" :color="$fontColor" letterspacing="2" />
      <Text x="60" y="260" :content="$description" w="320" size="28" :color="$fontColor" />
    </Element>
  `,
  props: ['title', 'description', 'index'],
  state() {
    return {
      scale: 1,
      backgroundColor: '#44037a',
      fontColor: '#e8d7f9',
      number: this.index < 10 ? `0${this.index + 1}` : this.index + 1,
    }
  },
  hooks: {
    focus() {
      this.backgroundColor = '#fafafa'
      this.fontColor = '#000'
      this.scale = 1.1
    },
    unfocus() {
      this.backgroundColor = '#44037a'
      this.fontColor = '#e8d7f9'
      this.scale = 1
    },
  },
})
