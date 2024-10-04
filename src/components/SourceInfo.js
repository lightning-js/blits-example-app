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

export default Blits.Component('SourceInfo', {
  template: `
    <Element x="580" y="260" w="600" h="400" color="#FFEB3B">
      <Text x="30" y="30" color="#000" size="36" wordwrap="540" align="center"> Tip: Access Page Source </Text>
      <Text x="30" y="120" color="#000" size="30" wordwrap="540" align="center">
        Press "U" on the keyboard to open the source file of the current page in a new tab on GitHub.
      </Text>
      <Text x="30" y="320" color="#555" size="28" wordwrap="540" align="center"> Press "Enter" to close this info </Text>
    </Element>
  `,
})
