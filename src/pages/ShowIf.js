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
import Square from './../components/Square.js'

export default Blits.Component('ShowIf', {
  components: {
    Square,
  },
  template: `
    <Element>
      <!-- hardcoded show values -->
      <Element y="40">
        <!-- should show -->
        <Element x="50" w="200" h="300" color="#bef264" show="true" />
        <!-- should not show -->
        <Element x="350" w="200" h="300" color="red" show="false" />

        <!-- should show -->
        <Element x="650" w="200" h="300" color="#84cc16" show="1" />
        <!-- should not show -->
        <Element x="950" w="200" h="300" color="red" show="0" />
      </Element>

      <!-- dynamic show values -->
      <Element y="380">
        <!-- should show -->
        <Element x="50" w="200" h="300" color="#fde047" show="$showNr" />
        <!-- should not show -->
        <Element x="350" w="200" h="300" color="blue" show="$hideNr" />

        <!-- should show -->
        <Element x="650" w="200" h="300" color="#84cc16" show="$showBool" />
        <!-- should not show -->
        <Element x="950" w="200" h="300" color="red" show="$hideBool" />
      </Element>

      <!-- dynamic show value -->
      <Element y="720">
        <!-- should show / hide every 2 seconds -->
        <Element x="50" w="200" h="300" color="#5eead4" :show="$showHideToggle" />
      </Element>

      <!-- show on components! -->
      <Element y="40" x="1000">
        <!-- should show -->
        <Square show="true" />
        <!-- should not show -->
        <Square y="100" show="false" />
        <!-- should show / hide every 2 seconds -->
        <Square y="200" :show="$showHideToggle" />
      </Element>

      <!-- show with alpha! -->
      <Element y="40" x="1400">
        <!-- should show -->
        <Element w="80" h="80" show="true" alpha="0.8" color="#ff00e4" />
        <!-- should not show -->
        <Element y="100" w="80" h="80" show="false" alpha="0.8" color="#ff00e4" />
        <!-- should show / hide every 2 seconds -->
        <Element y="200" w="80" h="80" :show="$showHideToggle" alpha="0.8" color="#ff00e4" />
      </Element>

      <Layout x="1000" y="380" direction="horizontal" gap="20" padding="20" color="#fff">
        <Element w="40" h="40" :show="$showHideToggle" color="#bfdbfe" />
        <Element w="40" h="40" color="#60a5fa" />
        <Element w="40" h="40" color="#2563eb" />
      </Layout>
    </Element>
  `,
  state() {
    return {
      showNr: 1,
      hideNr: 0,
      showBool: true,
      hideBool: false,
      showHideToggle: true,
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        // backstopjs
        console.log('backstopjs:ready')
        this.showHideToggle = !!!this.showHideToggle
      }, 2000)

      this.$setTimeout(() => {
        // this should not make a difference since no reactive bound is made
        this.showNr = 0
        this.hideNr = 1
        this.showBool = false
        this.hideBool = true
      }, 4000)
    },
  },
})
