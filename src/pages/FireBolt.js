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

import { Lifecycle, Account, Device, Localization } from '@firebolt-js/sdk'

export default Blits.Component('Firebolt', {
  template: `
    <Element>
      <Element :for="(fireboltApi, index) in $firebolt" x="$index * 250">
        <Text
          content="$fireboltApi"
          x="80"
          y="150"
          wordwrap="180"
          size="40"
          align="center"
          :color="$index === $activeIndex ?'#fff' : '#aaa'"
        />
      </Element>
      <Text x="960" y="540" mount="0.5" :content="$data" size="80" />
    </Element>
  `,
  state() {
    return {
      activeIndex: -1,
      size: 10,
      myText: 'This is my test yeah',
      data: 'Default Text',
      firebolt: ['Lifecycle', 'distributor', 'make', 'model', 'latlong'],
    }
  },
  watch: {
    activeIndex(v) {
      if (v === 0) {
        this.getLifeCycle()
      } else if (v === 1) {
        this.getAudio()
      } else if (v === 2) {
        this.getDeviceMake()
      } else if (v === 3) {
        this.getAccountId()
      } else if (v === 4) {
        this.getLatLon()
      }
    },
  },
  methods: {
    getLifeCycle() {
      this.data = Lifecycle.state()
    },
    getAudio() {
      Device.audio().then((supportedAudioProfiles) => {
        this.data = 'DolbyAtmos ' + supportedAudioProfiles.dolbyAtmos
      })
    },
    getDeviceMake() {
      Device.make().then((make) => {
        this.data = make
      })
    },
    getLatLon() {
      Localization.latlon().then((val) => {
        this.data = `${val[0]}` + `, ${val[1]}`
      })
    },
    getAccountId() {
      Account.id().then((id) => {
        this.data = id
      })
    },
  },
  input: {
    right() {
      this.activeIndex = Math.min(this.activeIndex + 1, this.firebolt.length - 1)
    },
    left() {
      this.activeIndex = Math.max(this.activeIndex - 1, 0)
    },
  },
})
