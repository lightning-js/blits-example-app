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
import Square from '../components/Square.js'
import Card from '../components/Card.js'

export default Blits.Component('Components', {
  components: {
    Square,
    Card,
  },
  template: `
    <Element>
      <!-- simple square component that takes a size (number) argument and maps it to w and h -->
      <Square x="100" y="100" size="50" />
      <Square x="100" y="200" size="100" />
      <Square x="100" y="350" size="200" />
      <!-- reactive (animated) x position for component -->
      <Square :x.transition="$x" y="600" size="50" />
      <!-- card component that takes a string size argument and also has a nested square component -->
      <Card x="500" y="100" />
      <Card x="500" y="500" size="large" />
    </Element>`,
  state() {
    return {
      x: 100,
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.x = this.x === 100 ? 250 : 100
      }, 2000)
    },
  },
})
