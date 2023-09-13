import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Events', {
  template: `
    <Element x="400" y="360">

      <Element w="280" h="280" color="#e5e7eb" :x="$x" y="-5" />

      <Element w="250" h="250" x="10" y="10" color="$colors[0]" />
      <Element w="250" h="250" x="290" y="10" color="$colors[1]" />
      <Element w="250" h="250" x="570" y="10" color="$colors[2]" />
      <Element w="250" h="250" x="850" y="10" color="$colors[3]" />
    </Element>`,
  state() {
    return {
      count: 0,
      colors: ['#fbbf24', '#a3e635', '#22d3ee', '#f472b6'],
    }
  },
  computed: {
    x() {
      return this.count * 280 - 5
    },
  },
  hooks: {
    unfocus() {
      this.$emit('changeBackground')
    },
  },
  input: {
    left(e) {
      const count = this.count - 1
      if (count === -1) {
        this.parent.focus(e)
      } else {
        this.count = Math.max(count, 0)
      }
    },
    right(e) {
      const count = this.count + 1
      if (count === 4) {
        this.parent.focus(e)
      } else {
        this.count = Math.min(count, 3)
      }
    },
    enter() {
      this.$emit('changeBackground', this.colors[this.count])
    },
  },
})
