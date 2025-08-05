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
import Player from './pages/Player'
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
import ForLoopAdvanced from './pages/ForLoopAdvanced'
import Shaders from './pages/Shaders.js'
import ShadersCustom from './pages/ShadersCustom.js'
import ShowIf from './pages/ShowIf'
import Events from './pages/Events'
import Slots from './pages/Slots'
import MemoryGame from './pages/MemoryGame'
import Exponential from './pages/Exponential'
import Viewport from './pages/Viewport'
import { RouterHookRoutes } from './pages/RouterHooks.js'
import Resize from './pages/Resize'
import LanguagePlugin from './pages/LanguagePlugin.js'
import KeyCodes from './pages/KeyCodes.js'
import SourceInfo from './components/SourceInfo.js'
import SpecialCharacters from './pages/SpecialCharacters.js'
import Layout from './pages/Layout.js'
import { FireBoltRoutes } from './pages/Firebolt.js'
import Announcer from './pages/Announcer.js'

const queryString = new URLSearchParams(window.location.search)
const showSource = !!queryString.get('source')
const showFPS = !!queryString.get('fps')

export default Blits.Application({
  components: {
    SourceInfo,
  },
  template: `
    <Element w="1920" h="1080" :color="$backgroundColor">
      <RouterView w="100%" h="100%" />
      <!-- <FPScounter x="1610" :show="$showFPS" /> -->
      <SourceInfo ref="info" :show="$showInfo" />
    </Element>
  `,
  state() {
    return {
      backgroundColor: '#1e293b',
      showFPS: showFPS,
      showInfo: false,
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
    { path: '/demos/player', component: Player },
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
    { path: '/examples/forloop-advanced', component: ForLoopAdvanced },
    { path: '/examples/shaders', component: Shaders },
    { path: '/examples/shaders-custom', component: ShadersCustom },
    { path: '/examples/showif', component: ShowIf },
    { path: '/examples/events', component: Events },
    { path: '/examples/slots', component: Slots },
    { path: '/examples/viewport', component: Viewport },
    ...RouterHookRoutes,
    { path: '/examples/resize', component: Resize },
    { path: '/examples/languageplugin', component: LanguagePlugin },
    { path: '/examples/keycodes', component: KeyCodes },
    { path: '/examples/translations', component: LanguagePlugin },
    { path: '/examples/special-characters', component: SpecialCharacters },
    { path: '/examples/layout', component: Layout },
    {
      path: '/examples/announcer',
      component: Announcer,
      announce: 'Welcome to the announcement example page',
    },
    // Benchmarks and stress tests
    { path: '/benchmarks/exponential', component: Exponential },
    ...FireBoltRoutes,
  ],
  hooks: {
    ready() {
      if (process.env.NODE_ENV === 'testing') {
        this.showFPS = false
      }

      if (showSource === true) this.showInfo = true
      this.$listen('changeBackground', (color) => {
        this.backgroundColor = color ? color + 80 : '#1e293b'
      })
      this.$listen('clearBackground', () => {
        this.backgroundColor = 'transparent'
      })
    },
  },
  input: {
    // intercept key presses
    async intercept(e) {
      if (e.key === 'x') {
        this.$log.info(`Intercepting key press (${e.key}) in App Component`)

        return new Promise((resolve) => {
          this.$log.info('Executing an async operation')
          setTimeout(() => {
            this.$log.info('Finished an async operation')
            // resolve the input if you want to propagate the key press to the currently focused Component
            resolve(e)
          }, 2000)
        })
      }

      // return the input event to propagate the key press to the currently focused Component
      return e
    },
    escape() {
      this.quit()
    },
    back() {
      this.$router.to('/')
    },
    sourceCode() {
      this.showInfo = false
      const sourcePath = getSourcePath(this.$router.currentRoute.path)
      if (sourcePath) {
        window.open(
          `https://github.com/lightning-js/blits-example-app/tree/master/${sourcePath}`,
          '_blank'
        )
      }
    },
  },
})

const getSourcePath = (routerPath) => {
  const sourceMap = {
    '/': 'src/pages/Portal',
    '/demos/loading': 'src/pages/Loading',
    '/demos/intro': 'src/pages/Intro',
    '/demos/theming': 'src/pages/Theming',
    '/demos/tmdb': 'src/pages/Tmdb',
    '/demos/sprites': 'src/pages/Sprites',
    '/demos/focushandling': 'src/pages/FocusHandling',
    '/demos/memory-game': 'src/pages/MemoryGame',
    '/demos/player': 'src/pages/Player',
    '/examples/positioning': 'src/pages/Positioning',
    '/examples/colors': 'src/pages/Colors',
    '/examples/gradients': 'src/pages/Gradients',
    '/examples/transitions': 'src/pages/Transitions',
    '/examples/components': 'src/pages/Components',
    '/examples/alpha': 'src/pages/Alpha',
    '/examples/scaling': 'src/pages/Scaling',
    '/examples/rotation': 'src/pages/Rotation',
    '/examples/keyinput': 'src/pages/KeyInput',
    '/examples/forloop': 'src/pages/ForLoop',
    '/examples/forloop-advanced': 'src/pages/ForLoopAdvanced',
    '/examples/shaders': 'src/pages/Shaders',
    '/examples/shaders-custom': 'src/pages/ShadersCustom',
    '/examples/showif': 'src/pages/ShowIf',
    '/examples/events': 'src/pages/Events',
    '/examples/images': 'src/pages/Images',
    '/examples/texts': 'src/pages/Texts',
    '/examples/slots': 'src/pages/Slots',
    '/examples/viewport': 'src/pages/Viewport',
    '/examples/router-hooks': 'src/pages/RouterHooks',
    '/examples/resize': 'src/pages/Resize',
    '/examples/translations': 'src/pages/LanguagePlugin',
    '/examples/firebolt': 'src/pages/Firebolt',
    '/examples/keycodes': 'src/pages/KeyCodes',
    '/examples/special-characters': 'src/pages/SpecialCharacters',
    '/examples/layout': 'src/pages/Layout',
    '/benchmarks/exponential': 'src/pages/Exponential',
  }

  return sourceMap['/' + routerPath] + '.js'
}
