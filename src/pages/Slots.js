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
import SlotCard from '../components/SlotCard.js'
import NamedSlotCard from '../components/NamedSlotCard.js'
import Square from '../components/Square.js'
import Card from '../components/Card.js'

const colors = ['#fff7ed', '#fdba74', '#f97316', '#ea580c', '#9a3412', '#431407']

export default Blits.Component('Components', {
  components: {
    SlotCard,
    NamedSlotCard,
    Card,
    Square,
  },
  template: `
    <Element>
      <SlotCard x="400" y="100" label="Element">
        <Element :color="$color" w="100" h="100"/>
      </SlotCard>

      <SlotCard x="800" y="100" label="Component">
        <Square size="200" y="50"  />
      </SlotCard>

      <SlotCard x="1200" y="100" label="Element & Component">
        <Element :color="$color" w="100" h="100" />
        <Square size="200" y="150" />
      </SlotCard>

      <Card x="400" y="700" size="small">
        <Element :color="$color" w="100" h="100" />
      </Card>

      <NamedSlotCard x="800" y="700">
        <Element color="#0891b2" x="10" y="140" w="80" h="60" slot="second" />
        <Element :color="$color" w="100" h="100" slot="third" />
        <Square size="100" slot="first" />
        <Element color="#4d7c0f" x="40" y="40" w="40" h="60" slot="second" />
      </NamedSlotCard>

    </Element>`,
  state() {
    return {
      color: colors[0],
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        const index = colors.indexOf(this.color) + 1
        this.color = index <= colors.length ? colors[index] : colors[0]
      }, 600)
    },
  },
})
