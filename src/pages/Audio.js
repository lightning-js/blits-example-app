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

const Tile = Blits.Component('Tile', {
  template: `
    <Element width="250" height="250" :color="$backgroundColor" :effects="[$shader('radius', {radius: 6})]">
      <Text x="50" y="100" textAlign="center" font="raleway" size="24" :color="$fontColor" :content="$label" />
    </Element>
  `,
  props: ['label', 'id'],
  state() {
    return {
      backgroundColor: '#4CAF50',
      fontColor: '#e8d7f9',
    }
  },
  hooks: {
    focus() {
      this.backgroundColor = '#fafafa'
      this.fontColor = '#000'
    },
    unfocus() {
      if (!this.$router.navigating) {
        this.backgroundColor = '#4CAF50'
        this.fontColor = '#e8d7f9'
      }
    },
  },
})

export default Blits.Component('AudioTestPage', {
  components: {
    Tile,
  },
  template: `
    <Element>
      <Text font="raleway" size="80" color="white" content="Audio Test Page" x="680" y="60" />
      <Element x="550" y="200">
        <Tile
          :for="(track, index) in $tracks"
          x="$index * 300"
          y="0"
          width="250"
          height="250"
          label="$track.label"
          id="$track.id"
          :ref="'tile'+$index"
        />
      </Element>
      <Text font="raleway" size="80" color="white" :content="'Now playing: ' +$currentTrack" x="580" y="700" />
      <Text
        font="raleway"
        size="24"
        color="white"
        content="Royalty free music from https://www.FesliyanStudios.com"
        x="1200"
        y="1040"
      />
    </Element>
  `,
  state() {
    return {
      tracks: [
        { id: 'track1', label: 'Menu' },
        { id: 'track2', label: 'Boss time' },
        { id: 'track3', label: 'Adventure' },
      ],
      focusedTile: 0,
      currentTrack: '',
    }
  },
  hooks: {
    init() {
      this.$audio.preload({
        track1: '/assets/audio/Menu.mp3',
        track2: '/assets/audio/Boss_Time.mp3',
        track3: '/assets/audio/Adventure.mp3',
      })
    },
    ready() {
      // Initial focus on the first tile
      this.$select('tile0').$focus()
    },
    destroy() {
      this.$audio.stop()
    },
  },
  watch: {
    focusedTile(v) {
      this.$select('tile' + v).$focus()
    },
  },
  input: {
    left() {
      if (this.focusedTile > 0) {
        this.focusedTile--
      }
    },
    right() {
      if (this.focusedTile < this.tracks.length - 1) {
        this.focusedTile++
      }
    },
    enter() {
      for (const trackKey of Object.keys(this.$audio.activeTracks)) {
        const track = this.$audio.activeTracks[trackKey]
        if (track) {
          track.stop()
        }
      }

      this.$audio.playTrack(this.tracks[this.focusedTile].id)
      this.currentTrack = this.tracks[this.focusedTile].label
    },
  },
})
