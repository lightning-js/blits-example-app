import Blits from '@lightningjs/blits'

export default Blits.Component('Eye', {
  template: `
    <Element>
      <Element
      mount="0.5"
      :w.transition="{value: $w, function: $timing, duration: $duration}"
      :h.transition="{value: $h, function: $timing, duration: $duration}"
      :x.transition="{value: $offset.x + $x, function: $timing, duration: $duration}"
      :y.transition="{value: $offset.y + $y, function: $timing, duration: $duration}"
      :color="{top: $topColor, bottom: $bottomColor}"
      :effects="[$shader('radius', {radius: $radius})]"/>
    </Element>
  `,
  props: ['x', 'y', 'topColor', 'bottomColor'],
  state() {
    return {
      duration: 300,
      timing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)',
      offset: {
        x: 0,
        y: 0,
      },
      letterX: 140,
      letterY: 0,
      w: 20,
      h: 60,
      radius: 6,
      animation: '',
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
    },
  },
  methods: {
    lookLeft() {
      this.offset = { x: -20, y: 0 }
    },
    lookRight() {
      this.offset = { x: 20, y: 0 }
    },
    lookUp() {
      this.offset = { x: 0, y: -20 }
    },
    lookDown() {
      this.offset = { x: 0, y: 20 }
    },
    blink() {
      this.duration = this.duration / 2
      this.h = 10
      this.w = 30
      this.$setTimeout(() => {
        this.offset = { x: 0, y: 0 }
        this.h = 60
        this.w = 20
      }, this.duration)
    },
    squeeze() {
      this.h = 16
      this.w = 34
      let i = 0
      const interval = this.$setInterval(() => {
        this.h = i % 2 === 0 ? 18 : 12
        this.w = i % 2 === 0 ? 36 : 30
        i++
        if (i === 5) {
          clearInterval(interval)
        }
      }, this.duration / 5)
      this.$setTimeout(() => {
        this.offset = { x: 0, y: 0 }
        this.h = 60
        this.w = 20
      }, this.duration)
    },
    sleep() {
      this.h = 16
      this.w = 34
      this.offset = { x: 0, y: 24 }
      this.$setTimeout(() => {
        this.offset = { x: 0, y: 0 }
      }, this.duration / 2)
    },
    reset() {
      this.offset = { x: 0, y: 0 }
      this.h = 60
      this.w = 20
    },
    listen() {
      this.listening = true
    },
    stopListen() {
      this.listening = false
    },
    // twitch() {
    //   this.offset = { x: 0, y: 0 }
    //   let i = 0
    //   const interval = setInterval(() => {
    //     this.w = i % 2 === 0 ? 30 : 34
    //     this.h = i % 2 === 0 ? 70 : 74
    //     i++
    //     if (i === 11) {
    //       clearInterval(interval)
    //       this.idle()
    //     }
    //   }, 100)
    //   this.$setTimeout(() => {
    //     this.h = 60
    //     this.w = 20
    //   }, 900)
    // },
  },
})
