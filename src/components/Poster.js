import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Poster', {
  template: /*html*/ `
    <Image w="185" h="278" x="$x"
    :src="$src"
    :colorBottom.transition="{v: $colorBottom, d: 200, f: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
    :scale.transition="{v: $scale, d: 200, f: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
    :effects="[$shader('radius', {radius: 8})]"
    />`,
  props: ['src', 'index'],
  computed: {
    x() {
      return this.index * 215
    },
    colorBottom() {
      return this.index === 0 ? '#fff' : '#000'
    },
    scale() {
      return this.index === 0 ? 1.1 : 1
    },
  },
  hooks: {
    focus() {
      this.colorBottom = '#fff'
      this.scale = 1.1
    },
    unfocus() {
      this.colorBottom = '#000'
      this.scale = 1.1
    },
  },
})
