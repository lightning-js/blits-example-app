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

import App from './App.js'

const settings = {
  w: 1920,
  h: 1080,
  multithreaded: false,
  debugLevel: 1,
  fonts: [
    {family: 'lato', type: 'msdf', png: '/fonts/Lato-Regular.msdf.png', json: '/fonts/Lato-Regular.msdf.json'},
    {family: 'raleway', type: 'msdf', png: '/fonts/Raleway-ExtraBold.msdf.png', json: '/fonts/Raleway-ExtraBold.msdf.json'},
    {family: 'opensans', type: 'web', file: '/fonts/OpenSans-Medium.ttf'}
  ],
}

Blits.Launch(App, 'app', settings)
