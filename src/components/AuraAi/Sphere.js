import Blits from '@lightningjs/blits'

export default Blits.Component('Sphere', {
  template: `
    <Element>
      <Element src="./assets/sphere-glow.png" w="1024" h="1024" x="120" y="120" mount="0.5"
      :alpha.transition="{value: $alpha, function: $timing, duration: $duration}"
      :color="$glowColor"/>
      <Element src="./assets/sphere.png" h="240" alpha="0.25" mount="0.5" x="120" y="120"
      :w.transition="{value: $w, function: $timing, duration: $duration}"
      :h.transition="{value: $h, function: $timing, duration: $duration}"
      :scale.transition="{value: $scale, function: $timing, duration: $duration*2}"
      :rotation.transition="{value: $rotation, function: $timing, duration: $duration}"
      :color="{top: $topColor, bottom: $bottomColor}"/>
    </Element>
  `,
  props: ['topColor', 'bottomColor', 'glowColor'],
  state() {
    return {
      duration: 300,
      timing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      w: 240,
      h: 240,
      rotation: 0,
      alpha: 1,
      scale: 1,
      listening: false,
    }
  },
  hooks: {
    init() {
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
      this.$listen('startListening', () => {
        console.log('startListening')
        this.listen()
      })
      this.$listen('stopListening', () => {
        console.log('stopListening')
        this.stopListen()
      })
      this.$listen('recordingAudio', (level) => {
        const scale = level / 90
        this.scale = scale
      })
    },
  },
  methods: {
    lookLeft() {
      this.rotation = 20
    },
    lookRight() {
      this.rotation = -20
    },
    lookUp() {
      this.rotation = 0
    },
    lookDown() {
      this.rotation = 0
    },
    blink() {
      this.duration = this.duration / 2
      this.alpha = 0.75
      this.w = 244
      this.h = 244
      this.$setTimeout(() => {
        this.alpha = 1
        this.w = 240
        this.h = 240
      }, this.duration / 2)
    },
    squeeze() {
      this.alpha = 0.75
      let i = 0
      const interval = this.$setInterval(() => {
        this.w = i % 2 === 0 ? 240 : 230
        this.h = i % 2 === 0 ? 240 : 230
        i++
        if (i === 5) {
          clearInterval(interval)
        }
      }, this.duration / 5)
      this.$setTimeout(() => {
        this.alpha = 1
        this.w = 240
        this.h = 240
      }, this.duration)
    },
    sleep() {
      this.w = 240
      this.h = 240
      this.$setTimeout(() => {
        this.w = 250
        this.h = 250
      }, this.duration / 2)
    },
    reset() {
      this.alpha = 1
      this.w = 240
      this.h = 240
      this.rotation = 0
      this.scale = Math.random() * 0.2 + 0.95
    },
    listen() {
      this.listening = true
      this.alpha = 1
      this.w = 240
      this.h = 240
      this.rotation = 0
      this.scale = 1.1
    },
    stopListen() {
      this.listening = false
      this.scale = 1
    },
  },
})
