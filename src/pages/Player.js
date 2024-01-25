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
import PlayerManager from '../managers/PlayerManager.js'

export default Blits.Component('Player', {
  template: `
    <Element>
      <Text color="white">Player Demo</Text>
    </Element>
  `,
  input: {
     async space() {
      PlayerManager.state.playingState == true ? PlayerManager.pause() : PlayerManager.play()
     },
  },
  hooks: {
    async init () {
      await PlayerManager.init()
    },
    async ready () {
      await PlayerManager.load({
        streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'
        // streamUrl: 'https://storage.googleapis.com/shaka-demo-assets/angel-one/dash.mpd'
      })
    },
	async destroy () {
		await PlayerManager.destroy()
	}
  }
})
