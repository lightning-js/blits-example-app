import Blits from '@lightningjs/blits'

export const TvDetails = Blits.Component('TvDetails', {
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text content="TV Show Details" x="40" y="80" size="42" font="raleway" color="#fff" />
        
        <Element x="40" y="160" w="1200" h="600" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Text content="TV Show Information" x="40" y="40" size="28" color="#fff" />
          <Text :content="'Show ID: ' + $showId" x="40" y="140" size="20" color="#e2e8f0" />
          <Text content="Title: Amazing TV Series" x="40" y="180" size="20" color="#e2e8f0" />
          
          <Element x="40" y="360" w="500" h="150" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
            <Text content="Controls:" x="20" y="20" size="16" color="#a0aec0" />
            <Text content="⏎ ENTER → View Seasons" x="20" y="50" size="14" color="#e2e8f0" />
            <Text content="⬅ BACK → Return to TV Shows" x="20" y="75" size="14" color="#e2e8f0" />
            <Text content="Ready to browse seasons" x="20" y="110" size="12" color="#718096" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      showId: 'N/A'
    }
  },
  hooks: {
    ready() {
      this.showId = String(this.$router.currentRoute.params.id || 'No ID')
      // Show menu and focus TV Shows
      this.$appState.showMenu = true
      this.$appState.focusedItem = 1
    }
  },
  input: {
    enter() {
      const showId = this.showId || '1'
      this.$router.to(`/router-example/tv/${showId}/season/1`)
    },

    back() {
      this.$router.to('/router-example/tv')
    }
  }
})
