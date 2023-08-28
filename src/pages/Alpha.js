import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Alpha', {
  template: /*html*/ `
    <Element>
      <Element y="100">
        <!-- hardcoded alpha values -->
        <Element w="200" h="200" x="100" color="#fff" alpha="0.2" />
        <Element w="200" h="200" x="320" color="#fff" alpha="0.4" />
        <Element w="200" h="200" x="540" color="#fff" alpha="0.6" />
        <Element w="200" h="200" x="760" color="#fff" alpha="0.8" />
        <Element w="200" h="200" x="980" color="#fff" alpha="1" />
      </Element>

      <!-- dynamic (but not reactive) alpha value -->
      <Element w="200" h="200" x="100" y="320" color="#fff" alpha="$alpha" />

      <!-- reactive alpha value -->
      <Element w="200" h="200" x="100" y="540" color="#fff" :alpha="$alpha" />

      <!-- reactive alpha value (with transition) -->
      <Element w="200" h="200" x="100" y="760" color="#fff" :alpha.transition="{v: $alpha, d: 1000, f: 'ease-in-out-circ'}" />

      <Element w="428" h="234" x="1200" y="100" :imageSource="$image" alpha="1" />
      <Element w="428" h="234" x="1200" :y="100 + 234 + 20" :imageSource="$image" alpha=".6" />
      <Element w="428" h="234" x="1200" :y="100 + (234 * 2) + (20 * 2)" :imageSource="$image" alpha=".3" />

    </Element>`,

  state() {
    return {
      alpha: 0.5,
      direction: 'up',
      image: `${window.location.protocol}//${window.location.host}/assets/lightningbolt.jpg`,
    }
  },
  hooks: {
    render() {
      this.$setInterval(() => {
        const alpha = this.direction === 'up' ? this.alpha + 0.2 : this.alpha - 0.2
        this.alpha = Math.max(Math.min(alpha, 1), 0.1)
        if (this.alpha === 1) {
          this.direction = 'down'
        }
        if (this.alpha === 0.1) {
          this.direction = 'up'
        }
      }, 1400)
    },
  },
})
