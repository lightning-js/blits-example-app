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

import Input from '../components/Input.js'

export default Blits.Component('Login', {
  components: {
    Input,
  },
  template: `
    <Element w="1920" h="1080" color="#e2e8f0">
      <Element :y.transition="{value: $y, duration: 800, delay: 500, easing: 'ease-in-out-back'}">
        <Element :x="1920/2" :y="1080/2" src="assets/shadow.png" w="800" h="600" alpha="0.9" mount="{x: 0.5, y: 0.47}" />
        <Element
          w="480"
          h="480"
          :x="1920/2"
          :y="1080/2"
          mount="0.5"
          color="#fff"
          :effects="[{type: 'radius', props:{radius: 6}}]"
        >
          <Element x="40" y="40">
            <Text color="#333" size="32">Sign In</Text>
            <Element y="50" w="400" h="1" color="#ccc" />
            <Element y="100">
              <Text color="#333" size="20">Username</Text>
              <Input y="32" ref="username" />
            </Element>
    
            <Element y="220">
              <Text color="#333" size="20">Password</Text>
              <Input y="32" ref="password" mask="true" />
            </Element>
    
            <Element y="340">
              <Element
                w="160"
                h="48"
                x="200"
                color="#075985"
                mount="{x: 0.5}"
                :effects="[{type: 'radius', props: {radius: 6}}]"
              >
                <Text color="#fff" y="14" size="20" wordwrap="160" align="center">Send</Text>
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      y: -1000
    }
  },
  hooks: {
    ready() {
      this.select('username').focus()
      this.y = 0
    }
  },
  input: {
    down() {
      this.select('password').focus()
    },
    up() {
      this.select('username').focus()
    }
  }
})
