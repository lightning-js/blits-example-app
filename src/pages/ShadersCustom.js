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

const images = [
  'https://images.unsplash.com/photo-1690360994204-3d10cc73a08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
  'https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
]

export default Blits.Component('ShadersCustom', {
  template: `
    <Element>
      <!-- regular image -->
      <Element src="$image1" w="250" h="250" x="90" y="90" />
      <!-- shader applied with a green color burn as that is the default color -->
      <Element src="$image1" w="250" h="250" x="490" y="90" shader="colorBurn" />
      <!-- shader applied with a red color burn as we specified in the shader attribute -->
      <Element src="$image1" w="250" h="250" x="880" y="90" shader="{type: 'colorBurn', color: 'red'}" />
      <!-- shader applied with a red color burn as we specified in the shader attribute -->
      <Element src="$image1" w="250" h="250" x="1260" y="90" :shader="{type: $shType, color: 'yellow', amount: 20,}" />

      <!-- regular old green node -->
      <Element color="green" w="250" h="250" x="90" y="400" />
      <!-- shader applied so now the node has a rhombus shape -->
      <Element color="green" w="250" h="250" x="490" y="400" shader="rhombus" />
      <!-- shader applied with different height -->
      <Element color="green" w="250" h="250" x="880" y="400" shader="{type: 'rhombus', height: 30}" />

      <Element src="$image2" w="250" h="250" x="90" y="710" />
      <!-- shader applied with a blur but default amount is 0 -->
      <Element src="$image2" w="250" h="250" x="490" y="710" shader="blur" />
      <!-- shader applied with a blur with a horizontal displacement of 20 but default specified in the shader attribute -->
      <Element src="$image2" w="250" h="250" x="880" y="710" shader="{type: 'blur', amount: 20}" />

      <!-- shader applied with a  blur with a horizontal displacement of 20 in the shader attribute. with rtt on. -->
      <Element rtt="true" w="250" h="250" x="1260" y="710" shader="{type: 'blur', amount: 20}">
        <!-- shader applied with a vertical blur with a displacement of 3 as we specified in the shader attribute -->
        <Element src="$image2" w="250" h="250" shader="{type: 'blur', amount: 3, direction: 1}" />
      </Element>
    </Element>
  `,
  state() {
    return {
      image1: images[0],
      image2: images[1],
      shType: 'colorBurn',
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        if (this.shType === 'colorBurn') {
          this.shType = 'blur'
        } else {
          this.shType = 'colorBurn'
          // this.shader = {
          //   type: 'colorBurn',
          //   color: 'yellow',
          // }
        }
      }, 5000)
    },
  },
})
