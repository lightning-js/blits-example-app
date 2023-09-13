import Bolt from '@lightningjs/bolt'

export default Bolt.Component('MenuSprite', {
  template: `
    <Element>
      <Element>
        <Element src="assets/menusprite.png" x="748" y="120" w="425" h="340" />
        <Element y="680" x="560">
          <Sprite image="assets/menusprite.png" x="0" w="140" h="140" map="$map" :frame="$icon1" />
          <Sprite image="assets/menusprite.png" x="220" w="140" h="140" map="$map" frame="icon2" />
          <Sprite image="assets/menusprite.png" x="440" w="140" h="140" map="$map" frame="icon3" />
          <Sprite image="assets/menusprite.png" x="660" w="140" h="140" map="$map" frame="icon4_unfocus" />
        <Element>
      </Element>
    </Element>
    `,
  state() {
    return {
      icon1: 'icon1_unfocus',
      map: {
        defaults: {
          w: 160,
          h: 160,
        },
        frames: {
          icon1_focus: { x: 0, y: 0 },
          icon1_unfocus: { x: 170, y: 340 },
          icon2: { x: 170, y: 0 },
          icon3: { x: 350, y: 0 },
          icon4_unfocus: { x: 680, y: 170 },
        },
      },
    }
  },
  hooks: {
    ready() {
      this.$setInterval(() => {
        this.icon1 = this.icon1 === 'icon1_unfocus' ? 'icon1_focus' : 'icon1_unfocus'
      }, 2000)
    },
  },
})
