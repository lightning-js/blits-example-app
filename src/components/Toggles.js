/*
 * Copyright 2024 Comcast Cable Communications Management, LLC
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

export default Blits.Component('Toggle', {
  template: `
    <Element>
      <Element
        w="$width"
        h="$height"
        color="#121212"
        :alpha.transition="$hasFocus ? 0 : 1"
        :effects="[{type: 'radius', props: {radius: $radius}}, {type: 'border', props:{width: 2, color: '#888'}}]"
      />
      <Element
        w="$width"
        h="$height"
        color="#121212"
        :alpha.transition="$hasFocus ? 1 : 0"
        :effects="[{type: 'radius', props: {radius: $radius}}, {type: 'border', props:{width: 4, color: '#fff'}}]"
      />
      <Element
        w="$innerWidth"
        h="$innerHeight"
        mount="0.5"
        :x.transition="$toggled ? $width - $offset : $offset"
        y="$height/2"
        :color.transition="$toggled ? '#fff' : '#888'"
        :effects="[{type: 'radius', props: {radius: $innerRadius}}]"
      />
    </Element>
  `,
  props: ['toggled'],
  state() {
    return {
      borderWidth: 2,
      height: 40,
      innerHeight: 18,
      innerRadius: 9,
      innerWidth: 18,
      radius: 20,
      width: 60,
      offset: 20,
    }
  },
})
