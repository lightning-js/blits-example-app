import Blits from '@lightningjs/blits'
import Eye from './Eye'
import Sphere from './Sphere'

export default Blits.Component('Aura', {
  components: { Eye, Sphere },
  template: `
    <Element
      w="240"
      h="240"
      mount="0.5"
      :rotation.transition="{value: $rotation, function: $timing, duration: $duration}"
      :x.transition="{value: $x + $offset.x, function: $timing, duration: $duration}"
      :y.transition="{value: $y + $offset.y, function: 'cubic-bezier(.57,.21,.69,1.25)', duration: $duration}"
      :alpha.transition="{value: $alpha, function: $timing, duration: $duration}"
      ref="circle"
    >
      <Sphere :glowColor="$glowColor" :topColor="$topColor" :bottomColor="$bottomColor" />
      <Element ref="eyes">
        <Eye x="90" y="120" :topColor="$topColor" :bottomColor="$bottomColor" ref="left" />
        <Eye x="150" y="120" :topColor="$topColor" :bottomColor="$bottomColor" ref="right" />
      </Element>
    </Element>
  `,
  props: ['x', 'y', 'glowColor', 'topColor', 'bottomColor'],
  state() {
    return {
      timing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      duration: 300,
      offset: {
        x: 0,
        y: 0,
      },
      alpha: 0.01,
      rotation: 0,
    }
  },
  hooks: {
    init() {
      this.$setTimeout(() => {
        this.alpha = 1
      }, 300)

      this.$listen(
        'animate',
        ({ animation, duration = 300, timing = 'cubic-bezier(0.20, 1.00, 0.80, 1.00)' }) => {
          this.duration = duration
          this.timing = timing
          if (this.ref && animation.includes(`-${this.ref}`)) {
            if (this[animation.replace(`-${this.ref}`, '')])
              this[animation.replace(`-${this.ref}`, '')]()
          } else if (this[animation]) {
            this[animation]()
          } else {
            this.duration = 300
            this.reset()
          }
        }
      )
    },
  },
  methods: {
    lookLeft() {
      this.rotation = 3
      this.offset = { x: -20, y: 0 }
    },
    lookRight() {
      this.rotation = -3
      this.offset = { x: 20, y: 0 }
    },
    lookUp() {
      this.rotation = 0
      this.offset = { x: 0, y: -20 }
    },
    lookDown() {
      this.rotation = 0
      this.offset = { x: 0, y: 20 }
    },
    reset() {
      this.rotation = 0
      this.offset = { x: 0, y: 0 }
    },
  },
})
