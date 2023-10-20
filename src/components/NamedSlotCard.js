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

export default Blits.Component('NamedSlotCard', {
  template: `
    <Element
      w="700" h="300"
      :effects="[$shader('radius', {radius: 20}), $shader('border', {width: 6, color: '#e2e8f0'})]" color="{top: '#94a3b8', bottom: '#475569'}"
    >
      <Element x="20" y="20">
        <Text content="First slot" />
        <Slot y="40" ref="first" />
      </Element>

      <Element x="200" y="20">
        <Text content="Second slot"/>
        <Slot y="40" ref="second" />
      </Element>


      <Element x="480" y="20">
        <Text content="Third slot"/>
        <Slot y="40" ref="third"/>
      </Element>

    </Element>
  `,
})
