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
import Flags from '../components/Flags'

export default Blits.Component('LanguagePlugin', {
  components: {
    Flags,
  },
  template: `
    <Element>
      <Flags languages="$languages" ref="flags" x="500" y="150" />
      <Text x="960" y="540" mount="0.5" :content="$$language.translate('hello')" size="80" />
      <Text x="960" y="640" mount="0.5" :content="$$language.translate('bye')" size="50" />
      <Text
        x="960"
        y="720"
        mount="0.5"
        :content="$$language.translate('replacement', {first: 'John', last: 'Doe', age: 18})"
        size="36"
      />
      <Text
        size="32"
        x="960"
        y="940"
        mount="0.5"
        align="center"
        :content="'Current language: ' + $$language.language + '\n Language file: ' + ($loaded === true ? 'Loaded' : 'loading ...')"
      />
    </Element>
    `,
  state() {
    return {
      loaded: false,
      languages: [
        {
          flag: '/assets/flags/united-states.png',
          code: 'en-US',
          name: 'English',
        },
        {
          flag: '/assets/flags/netherlands.png',
          code: 'nl-NL',
          name: 'Dutch',
        },
        {
          flag: '/assets/flags/france.png',
          code: 'fr-FR',
          name: 'French',
        },
        {
          flag: '/assets/flags/germany.png',
          code: 'de-DE',
          name: 'German',
        },
      ],
    }
  },
  hooks: {
    init() {
      // Set the language
      this.$language.set('en-US')
      // artificial delay when loading translation file
      setTimeout(() => {
        this.$language.load('/assets/translations.json').then(() => {
          this.loaded = true
        })
      }, 2000)
      // It's also possible to specify translations manually
      // this.$language.translations({
      //   'NL-nl': {
      //     hello: 'Hallo, alles goed?',
      //     bye: 'Doei!',
      //     replacement: 'Mijn naam is {first} {last}, ik ben {age} jaar',
      //   },
      //   'EN-us': {
      //     hello: 'Hello, how are you doing?',
      //     bye: 'Goodbye!',
      //     replacement: "My name is {first} {last}, I'm {age} years old",
      //   },
      //   'FR-fr': {
      //     hello: 'Bonjour, ça va?',
      //     bye: 'Au revoir!',
      //     replacement: "Je m'appelle {first} {last}, j'ai {age} ans",
      //   },
      //   'DE-de': {
      //     hello: "Gutentag, wie geht's?",
      //     bye: 'Tschüss!',
      //     replacement: 'Mein Name ist {first} {last}, ich bin {age} Jahre alt',
      //   },
      // })
    },
    focus() {
      this.$select('flags').$focus()
    },
  },
})
