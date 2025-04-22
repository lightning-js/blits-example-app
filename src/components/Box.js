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

export default Blits.Component('Box', {
  template: `
    <Element
      w="430"
      h="180"
      :effects="[{type: 'radius', props: {radius: 20}}, {type: 'border', props: {width: 1, color: '#e2e8f0'}}]"
      color="{top: '#667a97', bottom: '#475569'}"
    >
      <Text x="25" y="20" :content="$header" w="280" color="black" contain="width" />
      <Text x="25" y="90" :content="$text" size="45" w="350" contain="width" align="center" />
    </Element>
  `,
  props: ['header', 'text'],
})
