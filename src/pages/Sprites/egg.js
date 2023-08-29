import Bolt from '@lightningjs/bolt'

export default Bolt.Component('EggSprite', {
  template: /*html*/ `
    <Element>
      <Element>
        <Sprite image="assets/eggsprite.png" x="660" y="200" w="600" h="400" map="$map" :frame="$frame" color="#00000000" />
        <Element y="850" x="420">
          <Element w="160" h="120" color="#cbd5e120":x.transition="{v: $x, d: 50}" :effects="[$shader('rounded', {radius: 10})]" />
          <Image src="assets/eggsprite.png" y="10" w="1050" h="100" />
        </Element>
      </Element>
    </Element>
    `,
  state() {
    return {
      frame: 0,
      x: 0,
      map: {
        defaults: {
          w: 300,
          h: 200,
          y: 0,
        },
        frames: [
          { x: 0 },
          { x: 300 },
          { x: 600 },
          { x: 900 },
          { x: 1200 },
          { x: 1500 },
          { x: 1800 },
        ],
      },
    }
  },
  hooks: {
    render() {
      this.$setInterval(() => {
        const frame = this.frame + 1
        this.frame = frame > this.map.frames.length - 1 ? 0 : frame
        this.x = this.frame * 150
      }, 200)
    },
  },
})
