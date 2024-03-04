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

const colors = ['#64748b', '#ef4444', '#f97316', '#84cc16', '#14b8a6', '#3b82f6']

const characters = [
  'Iron Man',
  'Captain America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Hawkeye',
  'Scarlet Witch',
  'Vision',
  'Black Panther',
  'Doctor Strange',
  'Spider-Man',
  'Ant-Man',
  'Wasp',
  'Captain Marvel',
  'Falcon',
  'Winter Soldier',
  'War Machine',
  'Quicksilver',
  'Star-Lord',
  'Gamora',
]

export default Blits.Component('Texts', {
  template: `
    <Element x="100" y="100">

      <Text content="Default text" @loaded="$textLoaded" />
      <Text content="123456" x="400" />

      <Text content="Text with a different fontsize" :size="$size" y="120" font="raleway" />
      <Text content="Text with a different color" size="50" :color="$color" y="250" />

      <!-- does the font have a bold and italic? -->
      <!--Text content="Bold and Italic text" size="50" color="#0369a1" y="350" style="italic" weight="bold" /-->

      <Text content="Letterspacing" size="50" color="#38bdf8" y="450" letterspacing="40" />

      <Element w="800" h="100" y="550" color="#94a3b8">
        <Text content="Text align center" size="50" y="15" color="#bae6fd" align="center" wordwrap="800" />
      </Element>

      <Element w="800" h="200" x="900" y="550" color="#94a3b8">
        <Text content="$longText" size="40" color="#bae6fd" wordwrap="800" maxlines="5" textoverflow="!!!" />
      </Element>

      <Element w="800" h="120" x="900" y="800" color="#94a3b8">
        <Text content="$longText" size="40" color="#bae6fd" wordwrap="800" maxlines="2" lineheight="60" textoverflow="false" />
      </Element>

      <Text :content="$character" size="50" :color="$color" y="750" font="opensans" />
    </Element>`,
  state() {
    return {
      color: colors[0],
      size: 10,
      character: characters[0],
      myText: 'This is my test yeah',
      longText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ante non mauris commodo tristique. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut quis mattis mi. Aliquam ultricies mi vel lobortis luctus. Ut non feugiat urna. Duis sed blandit dui. Donec venenatis, mauris at blandit malesuada, elit nibh scelerisque lacus, non tempus arcu mi at justo.',
    }
  },
  hooks: {
    ready() {
      let count = 0
      this.$setInterval(() => {
        count++
        if (count > colors.length - 1) count = 0
        this.color = colors[count]
        this.size = 10 * (count * 2 + 1)
      }, 1000)

      let count2 = 0
      this.$setInterval(() => {
        count2++
        if (count2 > characters.length - 1) count2 = 0
        this.character = characters[count2]
      }, 1400)
    },
  },
  methods: {
    textLoaded(dimensions) {
      this.$log.info(`Image loaded with w: ${dimensions.w} and h: ${dimensions.h}`)
    },
  },
})
