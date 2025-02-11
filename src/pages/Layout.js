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
import Ball from '../components/Ball'

export default Blits.Component('Layout', {
  components: {
    Ball,
  },
  template: `
    <Element w="1920" h="1080" color="#c4b5fd">
      <Element x="40" y="40">
        <Text color="#222">Static horizontal Layout</Text>
        <Layout y="50" gap="10">
          <Element w="50" h="100" color="#eff6ff" />
          <Element w="60" h="100" color="#bfdbfe" />
          <Element w="70" h="100" color="#60a5fa" />
          <Element w="80" h="100" color="#2563eb" />
          <Element w="90" h="100" color="#1e40af" />
        </Layout>
      </Element>
      <Element x="40" y="220">
        <Text color="#222">Static vertical Layout</Text>
        <Layout y="50" gap="10" direction="vertical">
          <Element w="100" h="50" color="#eff6ff" />
          <Element w="100" h="60" color="#bfdbfe" />
          <Element w="100" h="70" color="#60a5fa" />
          <Element w="100" h="80" color="#2563eb" />
          <Element w="100" h="90" color="#1e40af" />
        </Layout>
      </Element>
      <Element x="40" y="700">
        <Text color="#222">Nested Layouts</Text>
        <Layout y="50" gap="10" direction="horizontal">
          <Element w="100" h="50" color="#eff6ff" />
          <Element w="100" h="60" color="#bfdbfe" />
          <Layout direction="vertical" gap="10">
            <Element w="100" h="70" color="#60a5fa" />
            <Element w="100" h="70" color="#60a5fa" />
            <Element w="100" h="70" color="#60a5fa" />
            <Layout gap="50">
              <Element w="50" h="50" color="#2563eb" />
              <Element w="50" h="50" color="#2563eb" />
              <Element w="50" h="50" color="#2563eb" />
            </Layout>
          </Layout>
          <Element w="100" h="80" color="#2563eb" />
          <Element w="100" h="90" color="#1e40af" />
        </Layout>
      </Element>
      <Element x="800" y="40">
        <Text color="#222">Layout with Text</Text>
        <Layout y="50" gap="20">
          <Element w="3" h="32" color="#60a5fa" />
          <Text color="#1e40af">Hello</Text>
          <Element w="3" h="32" color="#60a5fa" />
          <Text content="World" color="#1e40af" />
          <Element w="3" h="32" color="#60a5fa" />
        </Layout>
      </Element>
      <Element x="800" y="210">
        <Text color="#222">Dynamic dimensions Layout</Text>
        <Layout y="50" gap="20" @updated="$dynamicLayoutUpdated">
          <Element :w="$w * 0.5" h="60" color="#eff6ff" />
          <Element :w="$w * 0.6" h="60" color="#bfdbfe" />
          <Element :w="$w * 0.7" h="60" color="#60a5fa" />
          <Element :w="$w * 0.8" h="60" color="#2563eb" />
          <Element :w="$w * 0.9" h="60" color="#1e40af" />
        </Layout>
      </Element>
      <Element x="800" y="400">
        <Text color="#222">For loop Layout</Text>
        <Layout y="50" gap="20">
          <Element w="60" h="60" :for="color in $colors" :color="$color" />
        </Layout>
      </Element>
      <Element x="800" y="600">
        <Text color="#222">Layout with transitions</Text>
        <Layout direction="horizontal" gap="20" y="60">
          <Element
            h="100"
            :w.transition="{value: $w3, duration: 800, easing: 'cubic-bezier(1,-0.64,.39,1.44)'}"
            :color="$color"
            :for="color in $colors"
          >
            <Layout gap="10" x="10" y="35">
              <Element
                h="20"
                :w.transition="{value: $w2, duration: 800, easing: 'cubic-bezier(1,-0.64,.39,1.44)'}"
                color="white"
              />
              <Element
                h="20"
                :w.transition="{value: $w2, duration: 800, easing: 'cubic-bezier(1,-0.64,.39,1.44)'}"
                color="#ccc"
              />
              <Element
                h="20"
                :w.transition="{value: $w2, duration: 800, easing: 'cubic-bezier(1,-0.64,.39,1.44)'}"
                color="#333"
              />
              <Element
                h="20"
                :w.transition="{value: $w2, duration: 800, easing: 'cubic-bezier(1,-0.64,.39,1.44)'}"
                color="black"
              />
            </Layout>
          </Element>
        </Layout>
      </Element>
      <Element x="800" y="840">
        <Text color="#222">Layout with padding</Text>
        <Layout direction="horizontal" gap="20" y="60" padding="20" color="#fff">
          <Element w="40" h="40" color="#bfdbfe" />
          <Element w="40" h="40" color="#60a5fa" />
          <Element w="40" h="40" color="#2563eb" />
        </Layout>
        <Layout direction="horizontal" gap="20" y="60" x="240" :padding="{top: 40, y: 10, left: 40, x: 10}" color="#fff">
          <Element w="40" h="40" color="#bfdbfe" />
          <Element w="40" h="40" color="#60a5fa" />
          <Element w="40" h="40" color="#2563eb" />
        </Layout>
        <Layout direction="vertical" gap="20" y="60" x="500" padding="20" color="#fff">
          <Element w="40" h="20" color="#bfdbfe" />
          <Element w="40" h="20" color="#60a5fa" />
          <Element w="40" h="20" color="#2563eb" />
        </Layout>
        <Layout direction="vertical" gap="20" y="60" x="640" :padding="{top: 40, y: 10, left: 40, x: 10}" color="#fff">
          <Element w="40" h="20" color="#bfdbfe" />
          <Element w="40" h="20" color="#60a5fa" />
          <Element w="40" h="20" color="#2563eb" />
        </Layout>
      </Element>

      <Element x="1300" y="210">
        <Text color="#222">Layout with a Component</Text>
        <Layout y="50" gap="40">
          <Element w="100" h="100" color="red" />
          <Element :w="$w" h="100" color="red" />
          <Ball y="500" w="100" />
          <Element w="100" h="100" color="red" />
        </Layout>
      </Element>
    </Element>
  `,
  state() {
    return {
      w: 50,
      colors: ['green', 'red', 'blue', 'yellow'],
      w3: 150,
      w2: 20,
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.w = this.w === 100 ? 50 : 100
        this.w2 = this.w2 === 20 ? 40 : 20
        this.w3 = this.w3 === 150 ? 250 : 150
      }, 2000)

      this.$setTimeout(() => {
        this.colors.push('purple')
      }, 4000)
    },
  },
  methods: {
    dynamicLayoutUpdated(dimensions) {
      this.$log.info('Dynamic layout updated', dimensions.w, dimensions.h)
    },
  },
})
