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

import { Account, Device, Localization } from '@firebolt-js/sdk'
import fireBoltModules from '../api/fireBoltModules'

const Module = Blits.Component('Module', {
  template: `
    <Element w="$w" h="$h" :color="$bColor" :effects="[{type: 'radius', props: {radius: 8}}]">
      <Text x="$w/2" y="$h/2" mount="{x:0.5, y:0.5}" :content="$name" color="$fColor" font="raleway" />
    </Element>
  `,
  state() {
    return {
      w: 300,
      h: 250,
      bColor: "{ top: '#93C5FD', bottom: '#3B82F6' }",
      fColor: '#fff',
    }
  },
  props: ['name'],
  hooks: {
    focus() {
      this.bColor = "{ top: '#6366F1', bottom: '#4F46E5' }"
    },
    unfocus() {
      this.bColor = "{ top: '#93C5FD', bottom: '#3B82F6' }"
    },
  },
  input: {
    enter() {
      this.$router.to(`/examples/firebolt/${this.name}`)
    },
  },
})

const Method = Blits.Component('Methods', {
  template: `
    <Element>
      <Element w="$w" h="$h" :color="$nameBgColor" :effects="[{type: 'radius', props: {radius: [8,8,0,0]}}]">
        <Text :content="$name" x="$w/2" y="$h/2" mount="0.5" color="#fff" font="lato" size="50" />
      </Element>
      <Element w="$w" h="50" color="#4B5563" y="75" :effects="[{type: 'radius', props: {radius: [0,0,8,8]}}]">
        <Text :content="$about" maxwidth="$w" align="center" font="lato" maxlines="1" size="28" y="6" />
      </Element>
    </Element>
  `,
  state() {
    return {
      w: 600,
      h: 75,
      nameBgColor: "{ top: '#93C5FD', bottom: '#3B82F6' }",
    }
  },
  props: ['name', 'about'],
  hooks: {
    focus() {
      this.nameBgColor = "{ top: '#6366F1', bottom: '#4F46E5' }"
      this.$emit('execute', this.name)
    },
    unfocus() {
      this.nameBgColor = "{ top: '#93C5FD', bottom: '#3B82F6' }"
    },
  },
})

const List = Blits.Component('List', {
  components: {
    Method,
    Module,
  },
  template: `
    <Element>
      <Element :y.transition="$y">
        <Method
          :for="(item, index) in $methods"
          key="$item.name"
          name="$item.name"
          about="$item.about"
          :y="$index * 160"
          :ref="$type+$index"
        />
      </Element>
      <Element :x.transition="$x" y="325">
        <Module :for="(item, index) in $modules" key="$item.id" name="$item.name" :ref="$type+$index" x="$index * 400" />
      </Element>
    </Element>
  `,
  state() {
    return {
      x: 400,
      y: 100,
      activeIndex: 0,
    }
  },
  props: ['data', 'type'],
  computed: {
    methods() {
      return !this.isModule ? this.data : []
    },
    modules() {
      return this.isModule ? this.data : []
    },
    isModule() {
      return this.type === 'module'
    },
  },
  watch: {
    activeIndex(v) {
      const el = this.$select(`${this.type}${v}`)
      el && el.$focus && el.$focus()
    },
  },
  hooks: {
    focus() {
      this.$trigger('activeIndex')
    },
  },
  input: {
    right() {
      if (this.isModule && this.activeIndex < this.data.length - 1) this.move(1)
    },
    left() {
      if (this.isModule && this.activeIndex > 0) this.move(-1)
    },
    down() {
      if (!this.isModule && this.activeIndex < this.data.length - 1) this.move(1)
    },
    up() {
      if (!this.isModule && this.activeIndex > 0) this.move(-1)
    },
  },
  methods: {
    move(dir) {
      const next = this.activeIndex + dir
      if (this.type == 'method') {
        this.y = next > 5 ? -(next - 5) * 160 - 100 : 100
      } else if (this.type == 'module') {
        this.x = next > 3 ? -(next - 3) * 400 - 400 : 400
      }
      this.activeIndex = next
    },
  },
})

const FireBolt = Blits.Component('FireBolt', {
  components: {
    List,
  },
  template: `
    <Element>
      <Text content="FireBolt Modules" x="960" y="80" mount="{x:0.5}" size="80" font="raleway" />
      <List data="$moduleNames" type="module" ref="modules" />
    </Element>
  `,
  computed: {
    moduleNames() {
      return Object.keys(fireBoltModules).map((m) => {
        return { id: m, name: m.charAt(0).toUpperCase() + m.slice(1) }
      })
    },
  },
  hooks: {
    focus() {
      const cmp = this.$select('modules')
      cmp && cmp.$focus && cmp.$focus()
    },
  },
})

const DeviceModule = Blits.Component('DeviceModule', {
  components: { List },
  template: `
    <Element>
      <Text content="Device" x="960" mount="{x:0.5}" y="50" font="raleway" size="40" />
      <Text content="$device.about" x="960" mount="{x:0.5}" y="110" font="lato" />
      <List data="$device.methods" x="300" ref="methods" type="method" y="100" />
      <Text x="1400" y="540" :content="$response" size="100" mount="0.5" font="lato" :show="!$isNetworkRes" />
      <Element :show="$isNetworkRes">
        <Text :content="'State: ' + $networkRes.state" size="70" font="lato" x="1400" y="500" mount="0.5" />
        <Text :content="'Type: ' + $networkRes.type" size="70" font="lato" y="100" x="1400" y="580" mount="0.5" />
      </Element>
    </Element>
  `,
  state() {
    return {
      device: fireBoltModules.device,
      response: '',
      networkRes: {},
      isNetworkRes: false,
    }
  },
  hooks: {
    ready() {
      this.$listen('execute', async (api) => {
        this.$log.info(`Execute Device ${api} API`)
        this.isNetworkRes = false
        switch (api) {
          case 'make':
            this.response = await Device.make()
            break
          case 'model':
            this.response = await Device.model()
            break
          case 'name':
            this.response = await Device.name()
            break
          case 'network':
            Object.assign(this.networkRes, await Device.network())
            this.isNetworkRes = true
            break
          case 'platform':
            this.response = await Device.platform()
            break
        }
      })
    },
    focus() {
      const comp = this.$select('methods')
      comp && comp.$focus && comp.$focus()
    },
  },
})

const AccountModule = Blits.Component('AccountModule', {
  components: { List },
  template: `
    <Element>
      <Text content="Account" x="960" mount="{x:0.5}" y="50" font="raleway" size="40" />
      <Text content="$account.about" x="960" mount="{x:0.5}" y="110" font="lato" />
      <List data="$account.methods" x="300" ref="methods" y="300" type="method" />
      <Text x="1400" y="540" :content="$response" :size="$size" mount="0.5" font="lato" />
    </Element>
  `,
  state() {
    return {
      account: fireBoltModules.account,
      response: '',
      size: 100,
    }
  },
  hooks: {
    ready() {
      this.$listen('execute', async (api) => {
        this.$log.info(`Execute Account ${api} API`)
        switch (api) {
          case 'id':
            this.size = 100
            this.response = await Account.id()
            break
          case 'uid':
            this.size = 40
            this.response = await Device.uid()
            break
        }
      })
    },
    focus() {
      const comp = this.$select('methods')
      comp && comp.$focus && comp.$focus()
    },
  },
})

const LocalizationModule = Blits.Component('LocalizationModule', {
  components: { List },
  template: `
    <Element>
      <Text content="Localization" x="960" mount="{x:0.5}" y="50" font="raleway" size="40" />
      <Text content="$localization.about" x="960" mount="{x:0.5}" y="110" font="lato" />
      <List data="$localization.methods" x="300" ref="methods" y="100" type="method" />
      <Text x="1400" y="540" :content="$response" :size="$size" mount="0.5" font="lato" />
    </Element>
  `,
  state() {
    return {
      localization: fireBoltModules.localization,
      response: '',
      size: 100,
    }
  },
  hooks: {
    ready() {
      this.$listen('execute', async (api) => {
        this.$log.info(`Execute Keyboard ${api} API`)
        this.response = 'null'
        switch (api) {
          case 'countryCode':
            this.response = await Localization.countryCode()
            break
          case 'language':
            this.response = await Localization.language()
            break
          case 'latlon':
            this.response = (await Localization.latlon()).toString()
            break
          case 'locality':
            this.response = await Localization.locality()
            break
          case 'postalCode':
            this.response = await Localization.postalCode()
            break
        }
      })
    },
    focus() {
      const comp = this.$select('methods')
      comp && comp.$focus && comp.$focus()
    },
  },
})

export const FireBoltRoutes = [
  {
    path: '/examples/firebolt',
    component: FireBolt,
  },
  {
    path: '/examples/firebolt/device',
    component: DeviceModule,
  },
  {
    path: '/examples/firebolt/account',
    component: AccountModule,
  },
  {
    path: '/examples/firebolt/localization',
    component: LocalizationModule,
  },
]
