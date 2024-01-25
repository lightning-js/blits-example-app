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
import shaka from 'shaka-player'

let player
let videoElement

const state = {
  playingState : true
}

/**
 * Initialises the player.
 * @param {HTMLElement} [videoElement]. - The video element used to initiate playback in.
 * @returns {Promise<void>}
 */
const init = async (element) => {
	shaka.polyfill.installAll() // polyfilling for devices that need it.

  videoElement = element

  if (!videoElement) {
    videoElement = document.createElement('video')
    // videoElement.setAttribute('controls', true)
    
    const cssString = 'position: absolute; top: 0; left: 0; zIndex: 0'

    // Assign the CSS string to the cssText property
    videoElement.style.cssText = cssString

    videoElement.width='1920'
    videoElement.height='1080'
    
    player = new shaka.Player()
    await player.attach(videoElement)

    videoElement.autoplay = true

     // Listen for error events.
    player.addEventListener('error', (err) => {
      console.error(err)
    })
    document.body.insertBefore(videoElement, document.getElementById('app'))
  }
 
}


/**
 * Loads the player.
 * @param {Object} config - The player configuration.
 * @returns {Promise<void>}
 */
const load = async (config) => {
  if (!player || !videoElement) {
    throw 'Player not initialised yet'
  }

  await player.load(config.streamUrl)
}


const play = () => {
  state.playingState = true
  return videoElement?.play()
}

const pause = () => {
  state.playingState=false
  return videoElement?.pause()
}


const destroy = async () => {
  await player.destroy()

  player = null
  videoElement.remove()
  videoElement = null
}
export default {
  init,
  load,
  play,
  pause,
  state,
  destroy
}