import Blits from '@lightningjs/blits'

const MenuItem = Blits.Component('MenuItem', {
  template: `
    <Element
      x="20"
      y="$y"
      w="360"
      h="60"
      :color.transition="{value: $color, duration: 500}"
      :effects="[{type: 'radius', props: 8}]"
      :alpha.transition="{value: $alpha, duration:1200}"
    >
      <Text :content="$title" x="20" y="15" size="28" color="#fff" />
    </Element>
  `,
  props: ['title', 'y'],
  state() {
    return {
      color: '#374151',
      alpha: 0,
    }
  },
  hooks: {
    ready() {
      this.alpha = 1
    },
    focus() {
      this.color = '#4299e1'
    },
    unfocus() {
      this.color = '#374151'
    },
  },
  input: {
    enter() {
      this.$appState.focusMenu = false
      if (this.title === 'Movies') {
        this.$router.to('/examples/router/movies')
      } else {
        this.$router.to('/examples/router/tv')
      }
    },
  },
})

export default Blits.Component('Menu', {
  components: {
    MenuItem,
  },
  template: `
    <Element :x.transition="{value: $x, duration: 400, easing: 'ease-out'}" y="0" w="400" h="1080" :color="$color">
      <Text content="Router Examples" x="20" y="40" size="36" font="raleway" color="#fff" />
      <MenuItem title="Movies" y="120" ref="menu1" />
      <MenuItem title="TV Shows" y="200" ref="menu2" />
    </Element>
  `,
  state() {
    return {
      focused: 1,
      color: '#2d3748',
      x: -400,
    }
  },
  watch: {
    focused() {
      const menu = this.$select(`menu${this.focused}`)
      if (menu && menu.$focus) menu.$focus()
    },
  },
  hooks: {
    focus() {
      this.$trigger('focused')
    },
    unfocus() {
      this.$appState.focusMenu = false
    },
    ready() {
      this.x = 0
    },
  },
  input: {
    down() {
      this.focused = Math.min(this.focused + 1, 2)
    },
    up() {
      this.focused = Math.max(this.focused - 1, 1)
    },
    right() {
      const targetView = this.$appState.activeView
      this.$appState.focusMenu = false
      if (targetView !== null) {
        targetView.$focus()
      }
    },
    back() {
      this.$router.back()
    },
  },
})
