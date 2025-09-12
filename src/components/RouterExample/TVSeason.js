import Blits from '@lightningjs/blits'

export default Blits.Component('TvSeason', {
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text :content="'Season ' + $currentSeason" x="40" y="80" size="42" font="raleway" color="#fff" />

        <Element x="40" y="160" w="1200" h="500" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Text :content="'Season ' + $currentSeason + ' Episodes'" x="40" y="40" size="28" color="#fff" />
          <Text :content="'Show ID: ' + $showId" x="40" y="100" size="18" color="#e2e8f0" />
          <Text :content="'Season ' + $currentSeason + ' of 5'" x="40" y="130" size="18" color="#e2e8f0" />

          <Text content="Episodes:" x="40" y="180" size="20" color="#fff" />
          <Text content="1. Pilot" x="40" y="220" size="16" color="#e2e8f0" />

          <Element x="40" y="380" w="500" h="100" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
            <Text content="← Previous Season | Next Season →" x="20" y="20" size="14" color="#e2e8f0" />
            <Text content="⬅ BACK to TV Details" x="20" y="45" size="14" color="#e2e8f0" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,

  state() {
    return {
      currentSeason: 1,
      showId: 'N/A',
    }
  },

  hooks: {
    ready() {
      const { params } = this.$router.currentRoute
      this.currentSeason = parseInt(String(params.season)) || 1
      this.showId = String(params.id || 'N/A')
      // Show menu and focus TV Shows
      this.$appState.showMenu = true
      this.$appState.focusedItem = 1
    },
  },

  input: {
    left() {
      const prev = this.currentSeason - 1
      if (prev >= 1) {
        this.$router.to(`/router-example/tv/${this.showId}/season/${prev}`)
      }
    },

    right() {
      const next = this.currentSeason + 1
      if (next <= 5) {
        this.$router.to(`/router-example/tv/${this.showId}/season/${next}`)
      }
    },
  },
})
