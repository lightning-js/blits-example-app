import Bolt from '@lightningjs/bolt'

export default Bolt.Component('MonkeySprite', {
  template: /*html*/ `
    <Element>
      <Element  x="180" y="240" >
        <Element w="200" h="200" color="#cbd5e120" :y.transition="{v: $y, d: 50}" :x.transition="{v: $x, d: 50}" :effects="[$shader('rounded', {radius: 10})]" />
        <Image src="assets/monkeysprite.png" w="630" h="630" />
      </Element>
      <Sprite image="assets/monkeysprite.png" x="1100" y="250" w="600" h="600" map="$map" :frame="$frame" color="#00000000" />
    </Element>
    `,
  state() {
    return {
      frame: 0,
      x: 5,
      y: 5,
      map: [
        { w: 200, h: 200, y: 5, x: 5 }, // 1
        { w: 200, h: 200, y: 5, x: 215 }, // 2
        { w: 200, h: 200, y: 215, x: 5 }, // 4
        { w: 200, h: 200, y: 215, x: 215 }, // 5
        { w: 200, h: 200, y: 5, x: 425 }, // 3
        { w: 200, h: 200, y: 215, x: 425 }, // 6
        { w: 200, h: 200, y: 425, x: 5 }, // 7
        { w: 200, h: 200, y: 425, x: 215 }, // 8
      ],
    }
  },
  hooks: {
    render() {
      this.$setInterval(() => {
        const frame = this.frame + 1
        this.frame = frame > this.map.length - 1 ? 0 : frame
        this.x = this.map[this.frame].x
        this.y = this.map[this.frame].y
      }, 200)
    },
  },
})
