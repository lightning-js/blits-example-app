import Bolt from '@lightningjs/bolt'

export default Bolt.Component('Positioning', {
  template: `
    <Element>
      <!-- regular positioning -->
      <Element w="100" h="100" x="20" y="20" color="#ecfeff" />
      <Element w="100" h="100" x="140" y="20" color="#a5f3fc" />
      <Element w="100" h="100" x="260" y="20" color="#22d3ee" />
      <Element w="100" h="100" x="380" y="20" color="#0891b2" />

      <!-- positioning with dynamic values -->
      <Element w="100" h="100" x="$x1" y="$y" color="#fdf4ff" />
      <Element w="100" h="100" x="$x2" y="$y" color="#f5d0fe" />
      <Element w="100" h="100" x="$x3" y="$y" color="#e879f9" />
      <Element w="100" h="100" x="$x4" y="$y" color="#c026d3" />

      <!-- positioning with reactive values -->
      <Element w="100" h="100" :x="$xA" y="260" color="#fff7ed" />
      <Element w="100" h="100" :x="$xB" y="260" color="#fed7aa" />
      <Element w="100" h="100" :x="$xC" y="260" color="#fb923c" />
      <Element w="100" h="100" :x="$xD" y="260" color="#ea580c" />

      <!--- positioning of nested elements -->
      <Element w="800" h="800" y="20" x="800" color="#ecfdf5">
        <Element w="600" h="600" y="20" x="20" color="#a7f3d0">
          <Element w="400" h="400" y="100" x="20" color="#34d399">
            <Element w="200" h="100" :y="(400-100)/2" :x="(400-200)/2" color="#059669">
              <Element w="50" h="50" :y.transition="$yNested" :x.transition="$xNested" color="#065f46" />
            </Element>
          </Element>
        </Element>
      </Element>

      <!-- positioning after a set of nested elements -->
      <Element w="100" h="100" y="500" x="20" color="#e11d48" />

    </Element>`,
  state() {
    return {
      x1: 20,
      x2: 140,
      x3: 20 + 140 + 100,
      x4: 380,
      y: 140,
      xA: 20,
      xB: 140,
      xC: 260,
      xD: 380,
      yNested: 0,
      xNested: 0,
    }
  },
  hooks: {
    ready() {
      this.$setTimeout(() => {
        this.xD = this.xD + 200
        this.xC = this.xC + 100
        this.xB = this.xB + 50
        this.xA = this.xA + 25
      }, 4000)

      this.$setInterval(() => {
        this.yNested = this.yNested === 0 ? 50 : 0
      }, 2000)

      this.$setInterval(() => {
        this.xNested = this.xNested === 0 ? 150 : 0
      }, 1000)
    },
  },
})
