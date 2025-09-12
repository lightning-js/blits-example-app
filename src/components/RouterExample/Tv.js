import Blits from '@lightningjs/blits'

export default Blits.Component('Tv', {
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text content="TV Shows" x="40" y="80" size="42" font="raleway" color="#fff" />

        <Element x="40" y="160" w="1200" h="400" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Element w="1200" h="5" :color="$color" />
          <Text content="TV Shows Main Page" x="40" y="40" size="28" color="#fff" />

          <Element x="40" y="160" w="500" h="150" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
            <Text content="Controls:" x="20" y="20" size="16" color="#a0aec0" />
            <Text content="⏎ ENTER → TV Show Details" x="20" y="50" size="14" color="#e2e8f0" />
            <Text content="⬅ BACK → Return to Sidebar" x="20" y="75" size="14" color="#e2e8f0" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      color: '#374151',
    }
  },
  hooks: {
    focus() {
      this.color = '#fbbf24'
    },
    unfocus() {
      this.color = '#374151'
    },
  },
  input: {
    left() {
      // Focus menu
      this.$appState.activeView = this
      this.$appState.focusMenu = true
    },

    // up() {
    //   if (this.$appState.menuFocused && this.$appState.focusedItem > 0) {
    //     this.$appState.focusedItem--
    //   }
    // },

    // down() {
    //   if (this.$appState.menuFocused && this.$appState.focusedItem < 1) {
    //     this.$appState.focusedItem++
    //   }
    // },

    // enter() {
    //   if (this.$appState.menuFocused) {
    //     // Navigate to focused menu item
    //     const path =
    //       this.$appState.focusedItem === 0 ? '/router-example/movies' : '/router-example/tv'

    //     this.$router.to(path)
    //     this.$appState.menuFocused = false
    //   } else {
    //     // Navigate to TV details
    //     this.$router.to('/router-example/tv/1')
    //   }
    // },

    // back() {
    //   if (this.$appState.menuFocused) {
    //     // Only navigate to home when sidebar is focused
    //     this.$appState.menuFocused = false
    //     this.$appState.showMenu = false
    //     this.$router.to('/')
    //   }
    // },
  },
})
