import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Poster', {
  template: `
    <Element w="185" h="278" x="$x"
      :src="$src"
      :color="{top: '#fff', bottom: $colorBottom}"
      :scale.transition="{value: $scale, duration: 200, function: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
      :effects="[$shader('radius', {radius: 8})]"
    />`,
  // color transitions have some issues, so I'll leave it out for now
  // :colorBottom.transition="{v: $colorBottom, d: 200, f: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"!
  props: ['src', 'index'],
  state() {
    return {
      scale: 1,
      colorBottom: '#000',
    }
  },
  computed: {
    x() {
      return this.index * 215
    },
  },
  hooks: {
    focus() {
      this.colorBottom = '#fff'
      this.scale = 1.1
      this.$emit('posterSelect', this.index)
    },
    unfocus() {
      this.colorBottom = '#000'
      this.scale = 1
    },
  },
})
