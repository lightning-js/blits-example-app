/*
 * Copyright 2025 Comcast Cable Communications Management, LLC
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

const smallPoster = Blits.Component('SmallPoster', {
  template: `
    <Element w="200" h="140" color="#eee"> </Element>`,
  hooks: {
    init() {
      console.log('init small poster', this.componentId)
    },
    destroy() {
      console.log('destroy small poster', this.componentId)
    },
  },
})

const largePoster = Blits.Component('LargePoster', {
  template: `
    <Element w="400" h="300" color="#333"> </Element>`,
  hooks: {
    init() {
      console.log('init large poster', this.componentId)
    },
    destroy() {
      console.log('destroy large poster', this.componentId)
    },
  },
})

export default Blits.Component('ReactiveIsDirective', {
  components: {
    smallPoster,
    largePoster,
  },
  template: `
    <Element x="50" y="50">
      <Text>Reactive :is-directive</Text>
      <Component :is="$compType" x="100" y="200" />
    </Element>
  `,
  state() {
    return {
      counter: 0,
      compType: smallPoster,
    }
  },
  input: {
    space() {
      this.counter = (this.counter + 1) % 3
      if (this.counter === 0) {
        this.$log.info('Setting component to smallPoster')
        this.compType = smallPoster
      }

      if (this.counter === 1) {
        this.$log.info('Setting component to largePoster')
        this.compType = largePoster
      }

      if (this.counter === 2) {
        this.$log.info('Setting component to false')
        this.compType = false
      }
    },
  },
})
