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

export default Blits.Component('Gradients', {
  template: `
    <Element>
      <Element :w="1920/4" h="1080" color="{top: '#0891b2', bottom: '#a5f3fc'}" />
      <Element :w="1920/4" h="1080" :x="1920/4" color="{left: '#dc2626',  right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 2" color="{top: '#0891b2', right: '#f87171'}" />
      <Element :w="1920/4" h="1080" :x="1920/4 * 3" color="{right: 'green', bottom: 'gold'}" />
    </Element>`,
})
