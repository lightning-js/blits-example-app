import Bolt from '@lightningjs/bolt'
import EggSprite from './Sprites/egg.js'
import MonkeySprite from './Sprites/monkey.js'
import MenuSprite from './Sprites/menu.js'

const sprites = ['monkey', 'egg', 'menu']

export default Bolt.Component('Sprites', {
  components: {
    EggSprite,
    MonkeySprite,
    MenuSprite,
  },
  template: /*html*/ `
    <Element>
      <EggSprite :show="$currentSprite === 'egg'"/>
      <MonkeySprite :show="$currentSprite === 'monkey'"/>
      <MenuSprite :show="$currentSprite === 'menu'"/>
    </Element>
    `,
  state() {
    return {
      currentSprite: 'monkey',
    }
  },
  input: {
    down() {
      const index = sprites.indexOf(this.currentSprite)
      if (index < sprites.length - 1) {
        this.currentSprite = sprites[index + 1]
      } else {
        this.currentSprite = sprites[0]
      }
    },
  },
})
