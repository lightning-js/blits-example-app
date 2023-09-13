import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Bar', {
  template: `
    <Element :w="{value: $w, duration: $duration}" :h="{value: $h, duration: $duration}" :color="$bgColor" :x="$index * ($w + ($w / 4))" :effects="[$shader('radius', {radius:10})]">
      <Element :w="$w" :y.transition="{value: $h-$innerH, duration: $duration}" :h.transition="{value: $innerH, duration: $duration}" :color="$primaryColor" :effects="[$shader('radius', {radius:10})]" />
    </Element>
  `,
  props: ['bgColor', 'primaryColor', 'height', 'index', 'size'],
  state() {
    return {
      h: 200,
      innerH: 0,
      duration: 400,
    }
  },
  hooks: {
    ready() {
      this.innerH = this.height
    },
  },
  computed: {
    w() {
      return this.size === 'large' ? 110 : 72
    },
  },
  watch: {
    bgColor() {
      this.duration = 0.000001
      this.innerH = 0
      this.$setTimeout(() => {
        this.duration = 400
        this.innerH = this.height
      }, 200)
    },
    size() {
      this.duration = 0.000001
      this.innerH = 0
      this.$setTimeout(() => {
        this.duration = 400
        this.innerH = this.height
      }, 100)
    },
  },
})
