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

export default Blits.Component('Background', {
  template: `
    <Element>
      <Element
        :src="$bg1" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha1, duration: 400, function: 'ease-in'}"
      />
      <Element
        :src="$bg2" w="1920" h="1080" color="{top: '#fff', bottom: '#000'}" :alpha.transition="{value: $alpha2, duration: 400, function: 'ease-in'}"
      />
      <Element w="1920" h="1080" src="assets/gradient.png" color="#8866dd" alpha="0.8" />
    </Element>`,
  props: ['src'],
  state() {
    return {
      counter: 0,
      alpha1: 0,
      alpha2: 0,
      bg1: false,
      bg2: false,
    }
  },
  watch: {
    src(v) {
      this.counter = (this.counter + 1) % 2
      if (this.counter === 0) {
        this.bg1 = v
        this.alpha1 = 0.8
        this.alpha2 = 0
      } else {
        this.bg2 = v
        this.alpha1 = 0
        this.alpha2 = 0.8
      }
    },
  },
})
