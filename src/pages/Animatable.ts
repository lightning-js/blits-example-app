import Blits from '@lightningjs/blits'

export default Blits.Component('Animatable', {
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <Element w="200" h="200" y="100" :x="$oneX" color="pink" />
      <Element w="200" h="200" y="400" :x="$twoX" color="green" />
      <Element w="200" h="200" y="700" x="100" color="blue" ref="bluebox" />
    
      <Text :content="$counter" mount="{x: 1}" x="1880" y="100" size="72" />
    </Element>
  `,
  state() {
    return {
      oneX: 100,
      twoX: 100,
      animatable: null,
      blueboxAnimatable: null,
      manualAnimation: null,
      timer: null,
      counter: 0,
    }
  },
  hooks: {
    ready() {
      this.animatable = this.$animatable(this, {
        oneX: 100,
        duration: 1000,
      })

      this.blueboxAnimatable = this.$animatable('bluebox', {
        x: 100,
        duration: 1000,
      })

      this.timer = this.$timer({
        duration: 1000,
        loop: true,
        onLoop: () => {
          this.counter++
        }
      })
    }
  },
  input: {
    right() {
      const targetX = this.oneX + 300;
      this.animatable.oneX(targetX, 500, 'easeInOut')


      this.blueboxAnimatable.x(targetX)

      if(this.manualAnimation) {
        this.manualAnimation.cancel()
        this.manualAnimation = null
      }
      this.manualAnimation = this.$animate(this, {
        twoX: this.twoX + 300,
        duration: 1000,
      })

    },
    left() {
      const targetX = this.oneX - 300;
      this.animatable.oneX(this.oneX - 300)
      this.blueboxAnimatable.x(targetX)
      if(this.manualAnimation) {
        this.manualAnimation.cancel()
        this.manualAnimation = null
      }
      this.manualAnimation = this.$animate(this, {
        twoX: this.twoX - 300,
        duration: 1000,
      })
    },
    enter() {
      if(this.timer.paused === false) {
        this.timer.pause()
      }
      else {
        this.timer.play()
      }

    }
  }
})
