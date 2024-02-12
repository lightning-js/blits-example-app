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
      <Element y="1080" mount="{y:1}" w="1920" h="150" color="$containerColor">
        <Element x="60" y="50" w="$seekBar.w" h="$seekBar.h" color="$seekBar.color.background">
          <Element h="$seekBar.h" :w.transition="{value: $seekBar.progress, d:100, f: 'ease-in-out'}" color="$seekBar.color.progress"/>
        </Element>
        <Element x="60" y="70">
          <Text :content="$video.currentTime" color="$video.currentTimeColor"/>
          <Text x="1710" :content="$video.duration" color="$video.durationColor" />
        </Element>
        <Element y="80" x="875">
          <Element w="$controls.w" h="$controls.h" color="white" src="assets/player/pause.png" :alpha="$controls.playing" />
          <Element w="$controls.w" h="$controls.h" color="white" src="assets/player/play.png" :alpha="!$controls.playing"/>
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      containerColor: '#000',
      seekBar: {
        w: 1800,
        h: 10,
        color: {
          background: 'white',
          progress: 'red',
        },
        progressChunkSize: 0,
        progress: 0,
      },
      video: {
        currentTime: '00:00',
        duration: '00:00',
        currentTimeColor: 'red',
        durationColor: 'white',
      },
      controls: {
        w: 50,
        h: 50,
        playing: true,
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
  },
})
