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
      <Element y="1080" mount="{y:1}" w="1920" h="150" color="$containerColor" :alpha="$containerVisibility">
        <Element
          x="110"
          y="50"
          w="$seekBar.w"
          h="$seekBar.h"
          color="$seekBar.color.background"
          :effects="[$shader('radius', {radius:8})]"
        >
          <Element
            h="$seekBar.h"
            :w.transition="{value: $seekBar.progress, d:100, f: 'ease-in-out'}"
            :effects="[$shader('radius', {radius:8})]"
            color="$seekBar.color.progress"
          />
        </Element>
        <Element x="1720" y="40">
          <Text :content="$video.currentTime" size="25" color="$video.currentTimeColor" />
          <Text x="70" size="25" content="/" color="$video.currentTimeColor" />
          <Text x="85" size="25" :content="$video.duration" color="$video.durationColor" />
        </Element>
        <Element
          y="35"
          x="50"
          w="$controls.background.w"
          h="$controls.background.h"
          color="0x0087CEEB"
          :effects="[$shader('radius', {radius:8})]"
        >
          <Element y="6" x="7">
            <Element w="$controls.w" h="$controls.h" src="assets/player/pause.png" :alpha="$controls.playing" />
            <Element w="$controls.w" h="$controls.h" src="assets/player/play.png" :alpha="!$controls.playing" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      containerColor: '0x001E293B',
      containerVisibility: '1',
      seekBar: {
        w: 1600,
        h: 15,
        color: {
          background: 'white',
          progress: '0x0087CEEB',
        },
        progressChunkSize: 0,
        progress: 0,
      },
      video: {
        currentTime: '00:00',
        duration: '00:00',
        currentTimeColor: 'white',
        durationColor: 'white',
      },
      controls: {
        w: 35,
        h: 35,
        playing: true,
        background: {
          w: 50,
          h: 50,
        },
      },
    }
  },
  hooks: {
    async init() {
      await PlayerManager.init()
    },
    async ready() {
      await PlayerManager.load({
        streamUrl: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
      })
      const secondsToMmSs = (seconds) => new Date(seconds * 1000).toISOString().substr(14, 5)
      const duration = PlayerManager.getVideoDuration()
      if (duration) {
        this.video.duration = secondsToMmSs(duration)
        this.seekBar.progressChunkSize = Math.round((this.seekBar.w / duration) * 100) / 100
      }
      this.$setInterval(() => {
        const currentTime = PlayerManager.getCurrentTime()
        this.video.currentTime = secondsToMmSs(currentTime)
        this.seekBar.progress = Math.round(currentTime * this.seekBar.progressChunkSize)
      }, 1000)
    },
    async destroy() {
      await PlayerManager.destroy()
    },
  },
  input: {
    async space() {
      if (PlayerManager.state.playingState == true) {
        PlayerManager.pause()
        this.controls.playing = false
      } else {
        PlayerManager.play()
        this.controls.playing = true
      }
    },
    any() {
      this.containerVisibility === 0
        ? (this.containerVisibility = 1)
        : (this.containerVisibility = 0)
    },
  },
})
