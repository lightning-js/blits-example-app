import Blits from '@lightningjs/blits'

export default Blits.Component('Message', {
  template: `
    <Element
      :w="$w"
      :h="$h"
      color="$backgroundColor"
      :effects="[$shader('radius', {radius: $type !== 'user' ? [12,12,12,40] : [12,12,40,12]})]">
      <Text content="$content" x="40" y="22" color="$fontColor" />
      <Element :show="$content === ''" x="40" y="34">
        <Element
          w="12"
          h="12"
          color="$fontColor"
          :alpha.transition="{value: $alpha1, duration: 150}"
          :effects="[$shader('radius', {radius: 6})]"/>
        <Element
          w="12"
          h="12"
          x="20"
          color="$fontColor"
          :alpha.transition="{value: $alpha2, duration: 150}"
          :effects="[$shader('radius', {radius: 6})]"/>
        <Element
          w="12"
          h="12"
          x="40"
          color="$fontColor"
          :alpha.transition="{value: $alpha3, duration: 150}"
          :effects="[$shader('radius', {radius: 6})]"/>
      </Element>
    </Element>
  `,
  props: ['content', 'type'],
  state() {
    return {
      interval: null,
      h: 80,
      w: 840,
      alpha1: 1,
      alpha2: 0,
      alpha3: 0,
    }
  },
  computed: {
    backgroundColor() {
      return this.type === 'user' ? '#462aff' : '#ffffff'
    },
    fontColor() {
      return this.type === 'user' ? '#ffffff' : '#462aff'
    },
  },
  hooks: {
    ready() {
      this.loading()
    },
  },
  methods: {
    loading() {
      const alphas = [
        [1, 0, 0],
        [1, 1, 0],
        [1, 1, 1],
      ]
      let i = 0

      this.$setInterval(() => {
        ;[this.alpha1, this.alpha2, this.alpha3] = alphas[i]
        i = (i + 1) % alphas.length
      }, 400)
    },
  },
})
