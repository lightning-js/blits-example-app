import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Transitions', {
  template: /*html*/ `
    <Element>
      <!-- simple, default transition -->
      <Element w="200" h="200" x="50" :y.transition="$y" color="#c4b5fd" />
      <!-- simple, default transition with object syntax -->
      <Element w="200" h="200" x="300" :y.transition="{v: $y}" color="#a78bfa" />
      <!-- transition with custom duration -->
      <Element w="200" h="200" x="550" :y.transition="{v: $y, d: 1000}" color="#8b5cf6" />
      <!-- transition with custom duration and wait -->
      <Element w="200" h="200" x="800" :y.transition="{v: $y, d: 500, w: 1000}" color="#7c3aed" />
      <!-- transition with built-in easing function -->
      <Element w="200" h="200" x="1050" :y.transition="{v: $y, f: 'ease-in-out'}" color="#6d28d9" />
      <!-- transition with custom duration and a built-in easing function -->
      <Element w="200" h="200" x="1300" :y.transition="{v: $y, d: 2000, f: 'ease-in-out-back'}" color="#5b21b6" />
      <!-- transition with custom duration and a custum bezier function -->
      <Element w="200" h="200" x="1550" :y.transition="{v: $y, d: 800, f: 'cubic-bezier(1,-0.64,.39,1.44)'}" color="#4c1d95" />
    </Element>`,
  state() {
    return {
      y: 50,
    }
  },
  hooks: {
    render() {
      this.$setTimeout(() => {
        this.y = 1080 - 50 - 200
      }, 2000)
    },
  },
})
