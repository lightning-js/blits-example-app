import Blits from '@lightningjs/blits'

export default Blits.Component('TvSeason', {
  template: `
    <Element w="1920" h="1080" color="#1e293b" focusable="true">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text :content="($tvShow ? $tvShow.title : 'TV Show') + ' - Season ' + $currentSeason" x="40" y="80" size="36" font="raleway" color="#fff" />

        <Element x="40" y="160" w="1400" h="600" color="#374151" :effects="[{type: 'radius', props: 12}]">
          
          <Element x="40" y="100" w="1200" h="400">
            <Text content="Episodes:" x="0" y="0" size="20" color="#e2e8f0" />
            
            <!-- Episode list with focus -->
            <Element
              :for="(episode, index) in $episodes"
              key="$episode.number"
              x="0"
              :y="40 + ($index * 30)"
              w="200"
              h="40"
              :color="($focusedEpisodeIndex === $index && $isFocused) ? '#fbbf24' : 'transparent'"
              :effects="[{type: 'radius', props: 4}]"
            >
              <Text
                :content="$episode.number + '. ' + $episode.title"
                x="10"
                y="10"
                size="16"
                :color="($focusedEpisodeIndex === $index && $isFocused) ? '#000' : '#cbd5e1'"
              />
            </Element>
          </Element>

          <Element x="40" y="520" w="600" h="60" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
            <Text content="Controls:" x="20" y="10" size="16" color="#a0aec0" />
            <Text content="↑↓ Navigate Episodes | ← Sidebar | → Details | ⬅ BACK" x="20" y="30" size="14" color="#e2e8f0" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,

  state() {
    return {
      currentSeason: 1,
      showId: 'N/A',
      tvShow: null,
      episodes: [],
      focusedEpisodeIndex: 0,
      isFocused: false,
    }
  },

 

  watch: {
    tvShow() {
      // Regenerate episodes when TV show data changes
      this.generateEpisodes()
    },
    currentSeason() {
      // Regenerate episodes when season changes
      this.generateEpisodes()
      // Reset episode focus when season changes
      this.focusedEpisodeIndex = 0
    },
    focusedEpisodeIndex() {
      if (this.focusedEpisodeIndex >= this.episodes.length) {
        this.focusedEpisodeIndex = Math.max(0, this.episodes.length - 1)
      }
    },
  },

  hooks: {
    ready() {
      const { params } = this.$router.currentRoute
      this.currentSeason = parseInt(String(params.season)) || 1
      this.showId = String(params.id || 'N/A')
      
      // Show menu and focus TV Shows
      if (this.$appState) {
        this.$appState.showMenu = true
        this.$appState.focusMenu = false
      }
      
      // Load TV show data
      this.loadTvShowData()
    },
    focus() {
      // Set component as focused
      this.isFocused = true
      this.loadTvShowData()

      if (this.$focus) {
        this.$focus()
      }
    },
    unfocus() {
      // Set component as unfocused
      this.isFocused = false
    },
  },

  methods: {
    loadTvShowData() {
      // Get the selected TV show from app state
      if (this.$appState && this.$appState.selectedTvShow) {
        this.tvShow = this.$appState.selectedTvShow
      } else {
        // Fallback: create a dummy TV show for testing if data is not available
        this.tvShow = {
          id: parseInt(this.showId) || 1,
          title: 'Sample TV Show',
          seasons: 5,
          creator: 'Sample Creator',
          genre: 'Drama',
          year: 2020,
          episodes: 50,
          status: 'Ongoing',
          rating: '8.5/10',
          mood: 'Dramatic, engaging'
        }
      }
      
      // Generate episodes for current season
      this.generateEpisodes()
    },

    generateEpisodes() {
      // Generate simple episodes for the current season
      const episodeCount = 5 // Fixed episode count for simplicity
      this.episodes = []
      
      for (let i = 1; i <= episodeCount; i++) {
        this.episodes.push({
          number: i,
          title: `Episode ${i}`,
        })
      }
    },
  },

  input: {
    left() {
      // Go to sidebar menu
      if (this.$appState) {
        this.$appState.activeView = this
        this.$appState.focusMenu = true
      }
    },

    up() {
      // Navigate up through episodes
      if (this.focusedEpisodeIndex > 0) {
        this.focusedEpisodeIndex = this.focusedEpisodeIndex - 1
      }
    },

    down() {
      // Navigate down through episodes
      if (this.focusedEpisodeIndex < this.episodes.length - 1) {
        this.focusedEpisodeIndex = this.focusedEpisodeIndex + 1
      }
    },
  },
})
