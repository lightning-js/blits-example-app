import Blits from '@lightningjs/blits'
import Aura from '../components/AuraAi/Aura'
import Message from '../components/AuraAi/Message'

export default Blits.Component('AiTools', {
  components: { Aura, Message },
  template: `
    <Element w="1920" h="1080" :color="$backgroundColor">
      <Element>
        <Message content="Hello Aura, what should I watch today?" x="100" y="580" type="user" />
        <Message content="" x="980" y="500" type="aura" />
      </Element>
      <Aura x="960" y="860" glowColor="$glowColor" topColor="$topColor" bottomColor="$bottomColor" />
    </Element>
  `,
  state() {
    return {
      index: 0,
      currentIndex: 0,
      repeat: 0,
      animations: [
        { animation: 'lookUp' },
        { animation: 'lookDown' },
        { animation: 'lookLeft' },
        { animation: 'lookRight' },
        { animation: 'blink' },
        // { animation: 'idle' },
        // { animation: 'squeeze', duration: 900 },
        // { animation: 'sleep', duration: 2400, repeat: 4 },
      ],
      backgroundColor: '#18123e',
      glowColor: '#2d2368',
      topColor: '#55ffba',
      bottomColor: '#462aff',
    }
  },
  hooks: {
    ready() {
      this.index = Math.floor(Math.random() * this.animations.length)
      let animation = this.animations[this.index]
      this.repeat = animation.repeat || 0
      this.animate()
    },
  },
  methods: {
    animate() {
      const animation = this.animations[this.index]
      const duration = animation.duration || 300

      if (this.repeat === 0) {
        this.repeat = animation.repeat || 0
      } else {
        this.repeat--
      }

      this.$emit('animate', animation)

      this.$setTimeout(() => {
        if (this.repeat === 0) {
          this.index = Math.floor(Math.random() * this.animations.length)
        }
        this.animate()
      }, duration + 1200)
    },
  },
})
