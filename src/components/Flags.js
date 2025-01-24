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

export default Blits.Component('Flags', {
  template: `
    <Element>
      <Element :for="(language, index) in $languages" x="$index * 250">
        <Element src="$language.flag" w="150" h="150" :alpha="$index === $activeIndex ? 1 : 0.6" />
        <Text
          content="$language.name"
          y="150"
          maxwidth="150"
          align="center"
          :color="$index === $activeIndex ? '#fff' : '#aaa'"
        />
      </Element>
    </Element>
  `,
  props: ['languages'],
  state() {
    return {
      activeIndex: 0,
    }
  },
  watch: {
    activeIndex(v) {
      const language = this.languages[v]
      if (language && language.code) {
        this.$language.set(language.code)
      }
    },
  },
  input: {
    right() {
      this.activeIndex = Math.min(this.activeIndex + 1, this.languages.length - 1)
    },
    left() {
      this.activeIndex = Math.max(this.activeIndex - 1, 0)
    },
  },
})
