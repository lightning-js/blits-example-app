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

export default Blits.Component('Loading', {
  template: `
    <Text content="BLITS EXAMPLE APP" x="100" y="100" size="30" />
    <Text content="use the left / right arrow keys to cycle through the examples" color="#6d7e9c" y="40" size="20" />
    <Element x="780" y="500">
      <Circle size="40" color="#94a3b8" :alpha.transition="{value: $alpha, delay: 200}" />
      <Circle size="40" color="#94a3b8" x="60" :alpha.transition="{value: $alpha, delay: 300}" />
      <Circle size="40" color="#94a3b8" x="120" :alpha.transition="{value: $alpha, delay: 400}" />
    </Element>
  `,
  state() {
    return {
      alpha: 0,
    }
  },
  hooks: {
    ready() {
      let count = 0
      this.$setInterval(() => {
        this.alpha = count % 2 ? 0 : 1
        count++
      }, 800)
    },
  },
})
