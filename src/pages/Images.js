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
  'https://images.unsplash.com/photo-1690360994204-3d10cc73a08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80',
  'https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80',
]

export default Blits.Component('Images', {
  template: `
    <Element>
      <!-- local image -->
      <Element src="assets/lightningbolt.png" w="428" h="234" x="100" y="100" />

      <!-- remote image -->
      <Element
        src="https://images.unsplash.com/photo-1611148799269-63df34f63f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
        w="428" h="234" x="100" y="400"
      />

      <Element
        :src="$image"
        w="428" h="234" x="100" y="700"
        @loaded="$imageLoaded"
      />

      <!-- local image with color -->
      <Element color="{top: 'red', bottom: 'gold'}" src="assets/lightningbolt.png" w="428" h="234" x="600" y="100"  />

      <!-- applying clipping -->
      <Element x="600" y="400" w="428" h="234" :clipping="$clipping">
        <Element src="assets/lightningbolt.png" w="856" h="468" />
      </Element>

    </Element>`,
  state() {
    return {
      image: images[0],
      clipping: true,
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.image = this.image === images[0] ? images[1] : images[0]
        this.clipping = !!!this.clipping
      }, 2000)
    },
  },
  methods: {
    imageLoaded(dimensions) {
      this.$log.info(`Image loaded with w: ${dimensions.w} and h: ${dimensions.h}`)
    },
  },
})
