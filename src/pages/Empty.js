import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Empty', {
  template: /*html*/ `
    <Element x="880" y="500">
      <Circle size="40" color="#94a3b8" :alpha.transition="{v: $alpha, w: 200}" />
      <Circle size="40" color="#94a3b8" x="60" :alpha.transition="{v: $alpha, w: 300}" />
      <Circle size="40" color="#94a3b8" x="120" :alpha.transition="{v: $alpha, w: 400}" />
    </Element>
  `,
  state() {
    return {
      alpha: 0,
      count: 1,
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.alpha = this.count % 2 ? 0 : 1
        this.count++
      }, 800)
    },
  },
})
