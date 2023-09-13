import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Mosaic', {
  template: `
    <Element
      :src="'assets/logo/' + $item.src"
      :x="$item.x"
      :y="$item.y"
      :w="$item.w"
      :h="$item.h"
      :color="$item.color"
      :alpha.transition="{value: $alpha, duration: 300, delay: $wait, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
    />`,
  props: ['item', 'index'],
  state() {
    return {
      alpha: 0.001,
      wait: this.index <= 15 ? 750 - this.index * 25 : this.index * 25,
    }
  },
  hooks: {
    ready() {
      this.alpha = 1
    },
  },
})
