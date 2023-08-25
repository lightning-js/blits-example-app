import Bolt from '@lightningjs/bolt'
import Button from './Button'

export default Bolt.Component('Menu', {
  components: {
    Button,
  },
  template: /*html*/ `
    <Element :x.transition="$x" w="400" h="1080" colorRight="#64748baa" colorLeft="#475569aa">
      <Element x="50" y="40">
        <Button color="#e4e4e7" id="menu1" />
        <Button color="#e4e4e7" y="100" id="menu2" />
        <Button color="#e4e4e7" y="200" id="menu3" />
        <Button color="#e4e4e7" y="300" id="menu4" />
      </Element>
    </Element>`,
  state() {
    return {
      x: -360,
      focused: 1,
    }
  },
  hooks: {
    focus() {
      this.select(`menu${this.focused}`).focus()
      this.x = 0
    },
    unfocus() {
      this.x = -360
    },
  },
  input: {
    right() {
      this.parent.focus()
    },
    left(e) {
      this.parent.parent.focus(e)
    },
    down() {
      this.focused = Math.min(this.focused + 1, 4)
      this.select(`menu${this.focused}`).focus()
    },
    up() {
      this.focused = Math.max(this.focused - 1, 1)
      this.select(`menu${this.focused}`).focus()
    },
  },
})
