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
import MenuSprite from './Sprites/menu.js'

const sprites = ['menu']

export default Blits.Component('Sprites', {
  components: {
    MenuSprite,
  },
  template: `
    <Element>
      <MenuSprite :show="$currentSprite === 'menu'"/>
    </Element>
    `,
  state() {
    return {
      currentSprite: 'menu',
    }
  },
  input: {
    down() {
      const index = sprites.indexOf(this.currentSprite)
      if (index < sprites.length - 1) {
        this.currentSprite = sprites[index + 1]
      } else {
        this.currentSprite = sprites[0]
      }
    },
  },
})
