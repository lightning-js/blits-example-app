import Bolt from '@lightningjs/bolt'
import Menu from '../components/Menu.js'
import Button from '../components/Button.js'

export default Bolt.Component('FocusHandling', {
  components: {
    Menu,
    Button,
  },
  template: `
    <Element>
      <Element x="300" y="150">
        <Button color="#ef4444" x="0" id="button1" />
        <Button color="#f97316" x="320" id="button2" />
        <Button color="#84cc16" x="640" id="button3" />
        <Button color="#10b981" x="0" y="100" id="button4" />
        <Button color="#06b6d4" y="100" x="320" id="button5" />
        <Button color="#3b82f6" y="100" x="640" id="button6" />
        <Button color="#8b5cf6" y="200" x="0" id="button7" />
        <Button color="#d946ef" y="200" x="320" id="button8" />
        <Button color="#f43f5e" y="200" x="640" id="button9" />
      </Element>
      <Menu id="menu" />
    </Element>`,
  state() {
    return {
      focused: 1,
    }
  },
  hooks: {
    focus() {
      this.select(`button${this.focused}`).focus()
    },
  },
  input: {
    right(event) {
      const focused = this.focused + 1
      if (focused === 10) {
        this.parent.focus(event)
      } else {
        this.focused = Math.min(this.focused + 1, 9)
        this.select(`button${this.focused}`).focus()
      }
    },
    left() {
      const v = this.focused - 1

      if (v === 0) {
        this.select('menu').focus()
      } else {
        this.focused = Math.max(v, 1)
        this.select(`button${this.focused}`).focus()
      }
    },
    a() {
      this.select('menu').focus()
    },
  },
})
