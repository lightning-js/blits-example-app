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
import MemoryCard from '../components/MemoryCard.js'

const cards = [
  {
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb',
    description: 'House',
  },
  {
    image:
      'https://images.pexels.com/photos/2902440/pexels-photo-2902440.jpeg?auto=compress&cs=tinysrgb',
    description: 'Tree',
  },
  {
    image:
      'https://images.pexels.com/photos/686094/pexels-photo-686094.jpeg?auto=compress&cs=tinysrgb',
    description: 'Dog',
  },
  {
    image:
      'https://images.pexels.com/photos/1302290/pexels-photo-1302290.jpeg?auto=compress&cs=tinysrgb',
    description: 'Cat',
  },
  {
    image:
      'https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb',
    description: 'Car',
  },
  {
    image:
      'https://images.pexels.com/photos/1616566/pexels-photo-1616566.jpeg?auto=compress&cs=tinysrgb',
    description: 'Bicycle',
  },
]

export default Blits.Component('Announcer', {
  components: {
    MemoryCard,
  },
  template: `
    <Element>
      <Text font="raleway" size="80" color="white" content="Let's play memory!" x="580" y="60" />
      <Text font="kalam" size="40" color="#b91c1c" content="the Accessible edition :)" x="1200" y="170" rotation="-6" />

      <Element x="260" y="260">
        <MemoryCard
          :for="(card, index) in $cards"
          :col="$index % 4"
          :row="Math.floor($index / 4) % 3"
          :key="$card.image"
          image="$card.image"
          description="$card.description"
          :ref="'card' + $index"
          :index="$index"
        />
      </Element>
    </Element>`,
  state() {
    return {
      cards: cards.concat(cards),
      focusedRow: -1,
      focusedCol: -1,
      openCards: [],
      pairs: 0,
    }
  },
  hooks: {
    init() {
      this.shuffle()
      this.$listen('selectMemoryCard', (index) => {
        if (this.openCards.length < 2) {
          this.openCards.push(index)
        }

        if (this.openCards.length === 2) {
          if (
            this.cards[this.openCards[0]].description === this.cards[this.openCards[1]].description
          ) {
            this.$emit('deactivateMemoryCard', this.openCards[0])
            this.$emit('deactivateMemoryCard', this.openCards[1])
            this.pairs++
            this.$setTimeout(() => {
              this.$announcer.speak(
                this.pairs === this.cards.length / 2
                  ? 'Congratulations, you found all pairs!'
                  : `You found a pair! ${this.cards.length / 2 - this.pairs} more to go.`
              )
            }, 1500)
          } else {
            this.$emit('closeMemoryCard', this.openCards[0])
            this.$emit('closeMemoryCard', this.openCards[1])
            this.$setTimeout(() => {
              this.$announcer.speak('No match. Try again')
            }, 1500)
          }
          this.openCards.length = 0
        }
      })
    },
    destroy() {
      this.$announcer.speak('Thanks for playing Memory')
    },
  },
  watch: {
    focusedCol(v) {
      if (this.focusedRow === -1) {
        this.focusedRow = 0
        return
      }
      v = v + this.focusedRow * 4
      this.select('card' + v).focus()
    },
    focusedRow(v) {
      if (this.focusedCol === -1) {
        this.focusedCol = 0
        return
      }
      v = this.focusedCol + v * 4
      this.select('card' + v).focus()
    },
  },
  methods: {
    shuffle() {
      this.cards.sort(() => 0.5 - Math.random())
    },
  },
  input: {
    left() {
      if (this.focusedCol === 0) {
        if (this.focusedRow === 0) {
          this.$announcer.speak('You are already at the first card')
        } else {
          this.focusedCol = 3
          this.focusedRow--
        }
      } else {
        this.focusedCol = Math.max(0, this.focusedCol - 1)
      }
    },
    right() {
      if (this.focusedCol === 3) {
        if (this.focusedRow === 2) {
          this.$announcer.speak('You are already at the last card')
        } else {
          this.focusedCol = 0
          this.focusedRow++
        }
      } else {
        this.focusedCol = Math.min(3, this.focusedCol + 1)
      }
    },
    up() {
      if (this.focusedCol === 0) {
        this.$announcer.speak('You are already at the first card')
      }
      this.focusedRow = Math.max(0, this.focusedRow - 1)
    },
    down() {
      if (this.focusedRow === 2) {
        this.$announcer.speak('You are already at the last card')
      }
      this.focusedRow = Math.min(2, this.focusedRow + 1)
    },
  },
})
