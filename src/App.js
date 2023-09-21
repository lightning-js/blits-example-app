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

import Loading from './pages/Loading'
import Positioning from './pages/Positioning'
import Transitions from './pages/Transitions'
import Colors from './pages/Colors'
import ForLoop from './pages/ForLoop'
import Components from './pages/Components'
import Gradients from './pages/Gradients'
import KeyInput from './pages/KeyInput'
import Scaling from './pages/Scaling'
import Effects from './pages/Effects'
import Alpha from './pages/Alpha'
import Intro from './pages/Intro'
import ShowIf from './pages/ShowIf'
import Images from './pages/Images'
import Rotation from './pages/Rotation'
import Events from './pages/Events'
import FocusHandling from './pages/FocusHandling'
import Tmdb from './pages/Tmdb'
import Sprites from './pages/Sprites'
import Texts from './pages/Texts'
import Theming from './pages/Theming'

export default Blits.Application({
  components: {
    Loading,
    Positioning,
    Transitions,
    Colors,
    ForLoop,
    Components,
    Gradients,
    KeyInput,
    Scaling,
    Effects,
    Alpha,
    Intro,
    ShowIf,
    Images,
    Rotation,
    Events,
    FocusHandling,
    Tmdb,
    Sprites,
    Texts,
  },
  template: `
    <Element w="1920" h="1080" :color="$backgroundColor">
      <RouterView />
    </Element>`,
  state() {
    return {
      currentPage: 0,
      backgroundColor: '#1e293b',
    }
  },
  routes: [
    { path: '/', component: Loading },
    { path: '/intro', component: Intro },
    { path: '/positioning', component: Positioning },
    { path: '/transitions', component: Transitions },
    { path: '/gradients', component: Gradients },
    { path: '/components', component: Components },
    { path: '/keyinput', component: KeyInput },
    { path: '/colors', component: Colors },
    { path: '/forloop', component: ForLoop },
    { path: '/scaling', component: Scaling },
    { path: '/effects', component: Effects },
    { path: '/alpha', component: Alpha },
    { path: '/showif', component: ShowIf },
    { path: '/images', component: Images },
    { path: '/rotation', component: Rotation },
    { path: '/events', component: Events },
    { path: '/focushandling', component: FocusHandling },
    { path: '/sprites', component: Sprites },
    { path: '/texts', component: Texts },
    { path: '/theming', component: Theming },
    { path: '/tmdb', component: Tmdb },
  ],
  hooks: {
    init() {
      this.$listen('changeBackground', (color) => {
        this.backgroundColor = color ? color + 80 : '#1e293b'
      })
      const hash = (document.location.hash || '/').replace(/^#/, '')
      this.___routes.forEach((r, i) => {
        if (r.path === hash) this.currentPage = i
      })
    },
  },
  input: {
    a() {
      this.$router.to('/')
    },
    b() {
      this.$router.to('/transitions')
    },
    c() {
      this.$router.to('/positioning')
    },
    left() {
      this.currentPage = Math.max(this.currentPage - 1, 0)
      this.$router.to(this.___routes[this.currentPage].path)
    },
    right() {
      this.currentPage = Math.min(this.currentPage + 1, this.___routes.length - 1)
      this.$router.to(this.___routes[this.currentPage].path)
    },
  },
})
