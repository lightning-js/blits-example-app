import Blits from '@lightningjs/blits'

const SHAPE_1 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEjSURBVHgBnZO9TgJBFIXvbEllQqsJNrTaSmVhqdHKViyplCewsTXhDcAnkBcwUkm52tqwJrYmVLTDOXAWJsPfhJN8e/fuzD2TmblrFsl7fw66YOSXyvWtZpuEwQPw5nfrKaxzZTFCDrjCBLyDIfjXvDo4Aw3lPefcfWjQRWiq4CUojEWjFqiANkw6jntG8qGVn7cUlzqVyRgcZ3jcaWCYUEx9gR/AbTczOVKflq5c8SQ0+LN0lXNrWfCxYnuIBoXeDy1d5dxvGrwqaVi6LhQHNOgpYaPUE4qvQBUU6IN+hkeBpK3Blow26RZc6n3ZiRQaqoPwoJT3zKviafNwj2Rc1fisC1fsYfIY/YWxRurchdwaE3bYDbi2ebexZX9BH6sO4vlTUbSnqsTgwTgAAAAASUVORK5CYII='
const SHAPE_2 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgB7ZKhDQAgDAQfwiA4loEhUKzFZoxSqKtAtFUILmnST/7cByJaADJs9OiQmJxEGAqhnmv8RDj54lOiHEBV9MtNbDDAYod9r3MDaHkHotN0PbEAAAAASUVORK5CYII='
const SHAPE_3 =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFcSURBVHgBrVQtTwNBEJ1tMKCa8AOoqj6LK6BJjl8AFleCwsE/AEGQdx5RgYXUYTnbmjsSJKQ1xW7f5N4m28u2d/14ybuZ2515O9PerEgNrLVtMAf7sgtA6MqWmMguwOocerINVMAuYijbAAIJhb7AGf22bAIkdrzK7sB3+ver8gwCYtgIPOJah3R+Br6AXfCW6wXp/G/66R4eCbiqjQ/aMdmtHOqj0Ap1Y+gFpExU/AWSDsB98BA8k7I7xZMxpt/Co8DLidfCORNCYop/7kWe2I2KqWNcFP89bT9m0iv4uaTCaylbn1IsdZst52BxCl7AfWDSpYRxSrFCO/PFFgQ9ZLRjCcOtawFZdTMk2KMd0eqPry0e8/2HNmr0ket48QN+Bt+8CVH88iMfNZptXlUOvlBSuSRmTaYmdBnkrgoe9mjXuSz0RAZOlp3OGc9dXJ1gDA44PXWxevEOqutzNZRW6qN+HjoAAAAASUVORK5CYII='

const SHAPES = [SHAPE_1, SHAPE_2, SHAPE_3]
const COLORS = ['#3C91EF', '#847EFF', '#00A75E', '#F1604B', '#C4DEFA']

const POOL_SIZE = 160
const BURST_COUNT = 30
const Y_START = -40
const Y_END = 1600

const Particle = Blits.Component('Particle', {
  template: `
    <Element
      :w="$w"
      :h="$h"
      :color="$color"
      :src="$src"
      :x.transition="{ value: $x, duration: $durationMs, easing: 'cubic-bezier(0,0,0.4,1)' }"
      :y.transition="{ value: $y, duration: $durationMs, easing: 'linear', end: $onFallEnd }"
      :rotation.transition="{ value: $rotation, duration: $durationMs, easing: 'linear' }"
      :alpha.transition="{ value: $alpha, delay: $fadeDelayMs, duration: $fadeDurationMs }"
      :scale.transition="{ value: $scale, delay: $fadeDelayMs, duration: $fadeDurationMs }"
      mount="0.5"
    />
  `,

  props: {
    isBurst: false,
    side: null,
    startY: Y_START,
    launchDelay: 0,
  },

  state() {
    return {
      x: -200,
      y: Y_END + 100,
      w: 1,
      h: 1,
      scale: 0,
      alpha: 0,
      rotation: 0,
      durationMs: 1,
      fadeDelayMs: 0,
      fadeDurationMs: 1,
      color: '#000000',
      src: '',
      launched: false,
      falling: false,
      targetX: 0,
      targetRot: 0,
      targetDurationMs: 1,
    }
  },

  hooks: {
    ready() {
      this.$setTimeout(
        () => this.launch(this.isBurst, this.side, this.startY),
        this.launchDelay || 0
      )
    },
  },

  methods: {
    onFallEnd(element, prop, finalValue) {
      if (!this.launched) return
      if (this.falling) {
        this.launch(false, null, Y_START)
      } else {
        this.x = this.targetX
        this.y = Y_END
        this.rotation = this.targetRot
        this.alpha = 0
        this.scale = 0.2
        this.durationMs = this.targetDurationMs
        this.fadeDelayMs = Math.round(this.targetDurationMs * 0.6)
        this.fadeDurationMs = Math.round(this.targetDurationMs * 0.4)
        this.falling = true
      }
    },

    launch(isBurst = false, side = 'right', startY = Y_START) {
      const size = 11 + Math.random() * 25
      const ratio = size / 36
      const baseDurationMs = Math.round(
        (isBurst ? 2.2 + Math.random() * 1.5 : 4.5 + Math.random()) * 1000
      )
      const durationMs = Math.round((baseDurationMs * (Y_END - startY)) / (Y_END - Y_START))
      const startX = isBurst ? (side === 'left' ? -40 : 1960) : Math.random() * 1920
      const endX =
        startX +
        (isBurst
          ? (3 + Math.random() * 35) * ratio * 28 * (side === 'left' ? 1 : -1)
          : (Math.random() - 0.5) * 40)
      const startRot = Math.random() * 360
      const endRot = startRot + (Math.random() < 0.5 ? -1 : 1) * (360 + Math.random() * 720)

      this.targetX = endX
      this.targetRot = endRot
      this.targetDurationMs = durationMs

      this.w = size
      this.h = size
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      if (this.src.length === 0) {
        this.src = SHAPES[Math.floor(Math.random() * SHAPES.length)]
      }

      this.x = startX
      this.y = startY
      this.scale = 1.2
      this.alpha = 1
      this.rotation = startRot
      this.durationMs = 1
      this.fadeDelayMs = 0
      this.fadeDurationMs = 1
      this.falling = false
      this.launched = true
    },
  },
})

export default Blits.Component('Confetti', {
  components: {
    Particle,
  },

  template: `
    <Element w="1920" h="1920">
      <Particle
        :for="p in $particles"
        :key="$p.id"
        :isBurst="$p.isBurst"
        :side="$p.side"
        :startY="$p.startY"
        :launchDelay="$p.launchDelay"
      />
    </Element>
  `,

  state() {
    const particles = []

    for (let i = 0; i < BURST_COUNT; i++) {
      particles.push({
        id: i,
        isBurst: true,
        side: i % 2 === 0 ? 'left' : 'right',
        startY: -40,
        launchDelay: i * 15,
      })
    }

    for (let i = BURST_COUNT; i < POOL_SIZE; i++) {
      particles.push({
        id: i,
        isBurst: false,
        side: null,
        startY: Math.floor(Math.random() * 1100),
        launchDelay: (i - BURST_COUNT) * 3,
      })
    }

    return { particles }
  },
})
