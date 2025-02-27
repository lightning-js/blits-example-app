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

export default Blits.Component('SourceInfo', {
  template: `
    <Element
      x="1860"
      :y.transition="{value: 1060 + $offsetY, delay: 1000, duration: 300, easing: 'ease-out'}"
      :alpha.transition="{value: $alpha, delay: 1000, duration: 300, easing: 'ease-out'}"
      w="480"
      h="100"
      mount="1"
      color="{top: '#000000dd', bottom: '#000'}"
      :effects="[{type: 'radius', props: {radius: 10}}]"
    >
      <Text y="18" x="20" size="26" maxwidth="440" align="center" lineheight="32">
        Press "U" to check out the source code of this example on GitHub</Text
      >
    </Element>
  `,
  state() {
    return {
      offsetY: 15,
      alpha: 0,
    }
  },
  hooks: {
    ready() {
      this.offsetY = 0
      this.alpha = 1
    },
  },
})
