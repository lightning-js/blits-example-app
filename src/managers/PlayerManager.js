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
import shaka from 'shaka-player'

let player
let videoElement

/**
 * Initialises the player.
 * @param {HTMLElement} [videoElement]. - The video element used to initiate playback in.
 * @returns {Promise<void>}
 */
const init = async (element) => {
	console.log("Inside Shaka Player")
  shaka.polyfill.installAll() // polyfilling for devices that need it.

  videoElement = element

  if (!videoElement) {
    videoElement = document.createElement('video')

    // Position our video element in the background.
    Object.assign(videoElement.style, { position: 'absolute', left: 0, top: 0, zIndex: 0 })
    videoElement.id = 'video-player'
    videoElement.width = 1920
    videoElement.height = 1080
    videoElement.autoplay = true

    // Position our app on top of the video element.
    // Object.assign(document.getElementById('app').style,{ position: 'absolute', left: 0, top: 0, zIndex: 1 })
    document.body.insertBefore(videoElement, document.getElementById('app'))
  }

  player = new shaka.Player()
  await player.attach(videoElement)
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

const getCurrentTime = () => {
  return videoElement?.currentTime
}

const play = () => {
  return videoElement?.play()
}

const pause = () => {
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
  getCurrentTime,
  play,
  pause,
  destroy
}
