import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Button', {
  template: /*html*/ `
    <Element w="300" h="80" color="$color"
      :effects="[$shader('rounded', {radius: 20})]"
      :alpha.transition="$alpha"
      :scale.transition="$scale"
      :zIndex="$zIndex"
      :rotation="$rotate">
    </Element>`,
  props: ['color'],
  state() {
    return {
      alpha: 0.4,
      scale: 1,
      zIndex: 1,
      rotate: 0,
    }
  },
  hooks: {
    focus() {
      console.log(`Button with color ${this.color} received focus`)
      this.alpha = 1
      this.scale = this.scale === 1 ? 1.2 : 1
      this.zIndex = 100
    },
    unfocus() {
      console.log(`Button with color ${this.color} lost focus`)
      this.alpha = 0.4
      this.scale = 1
      this.zIndex = 1
      this.rotate = 0
    },
  },
  input: {
    enter() {
      this.rotate = this.rotate === 0 ? -4 : 0
      this.scale = this.scale === 1.2 ? 1.3 : 1.2
    },
  },
})
