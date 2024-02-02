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

// Demo pages
import Portal from './pages/Portal'
import Intro from './pages/Intro'
import Theming from './pages/Theming'
import Tmdb from './pages/Tmdb'
import Sprites from './pages/Sprites'
import FocusHandling from './pages/FocusHandling'

// Example & Test pages
import Positioning from './pages/Positioning'
import Colors from './pages/Colors'
import Gradients from './pages/Gradients'
import Transitions from './pages/Transitions'
import Alpha from './pages/Alpha'
import Scaling from './pages/Scaling'
import Rotation from './pages/Rotation'
import KeyInput from './pages/KeyInput'
import Texts from './pages/Texts'
import Images from './pages/Images'
import Components from './pages/Components'
import ForLoop from './pages/ForLoop'
import Effects from './pages/Effects'
import ShowIf from './pages/ShowIf'
import Events from './pages/Events'
import Slots from './pages/Slots'
import MemoryGame from './pages/MemoryGame'
import Exponential from './pages/Exponential'

export default Blits.Application({
  template: `
    <Element w="1920" h="1080" :color="$backgroundColor">
      <RouterView />
      <FPScounter x="1610" />
    </Element>`,
  state() {
    return {
      backgroundColor: '#1e293b',
    }
  },
  routes: [
    // Demo routes
    { path: '/', component: Portal, options: { keepAlive: true } },
    // Loading a route via a dynamic import
    {
      path: '/demos/loading',
      component: () => import('./pages/Loading.js'),
    },
    // Loading a route in a Promise
    {
      path: '/demos/intro',
      component: () => {
        // imagine this is an API call or some other async action
        return new Promise((resolve) => {
          resolve(Intro)
        })
      },
    },
    { path: '/demos/theming', component: Theming },
    { path: '/demos/tmdb', component: Tmdb },
    { path: '/demos/sprites', component: Sprites },
    { path: '/demos/focushandling', component: FocusHandling },
    {
      path: '/demos/memory-game',
      component: MemoryGame,
      announce: "Let's play Memory",
    },
    // Example and test routes
    { path: '/examples/positioning', component: Positioning },
    { path: '/examples/colors', component: Colors },
    { path: '/examples/gradients', component: Gradients },
    { path: '/examples/transitions', component: Transitions },
    { path: '/examples/alpha', component: Alpha },
    { path: '/examples/scaling', component: Scaling },
    { path: '/examples/rotation', component: Rotation },
    { path: '/examples/keyinput', component: KeyInput },
    { path: '/examples/texts', component: Texts },
    { path: '/examples/images', component: Images },
    { path: '/examples/components', component: Components },
    { path: '/examples/forloop', component: ForLoop },
    { path: '/examples/effects', component: Effects },
    { path: '/examples/showif', component: ShowIf },
    { path: '/examples/events', component: Events },
    { path: '/examples/slots', component: Slots },
    // Benchmarks and stress tests
    { path: '/benchmarks/exponential', component: Exponential },
  ],
  hooks: {
    ready() {
      this.$listen('changeBackground', (color) => {
        this.backgroundColor = color ? color + 80 : '#1e293b'
      })
    },
  },
  input: {
    escape() {
      this.quit()
    },
    back() {
      this.$router.to('/')
    },
  },
})
