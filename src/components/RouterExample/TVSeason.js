import Blits from '@lightningjs/blits'
import { List } from './List'

export default Blits.Component('TvSeason', {
  components: {
    List,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b" focusable="true">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text
          :content="($showTitle ? $showTitle : 'TV Show') + ' - Season ' + $season"
          x="40"
          y="80"
          size="36"
          font="raleway"
          color="#fff"
        />

        <Element x="40" y="160" w="1400" h="600" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Element x="40" y="100" w="1200" h="400">
            <Text content="Episodes:" x="0" y="0" size="20" color="#e2e8f0" />

            <!-- Episode list with focus -->
            <Element
              :for="(episode, index) in $episodes"
              key="$episode.number"
              x="0"
              :y="40 + ($index * 40)"
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

            <!-- Episode Details Display -->
            <Element x="250" y="40" w="600" h="300" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
              <Text content="Episode Details" x="20" y="20" size="20" color="#fff" />
              <Text :content="$episodeDetails.title" x="20" y="60" size="18" color="#e2e8f0" />
              <Text :content="$episodeDetails.description" x="20" y="100" size="14" color="#cbd5e1" />
              <Text :content="'Duration: ' + $episodeDetails.duration" x="20" y="140" size="14" color="#a0aec0" />
              <Text :content="'Air Date: ' + $episodeDetails.airDate" x="20" y="170" size="14" color="#a0aec0" />
              <Text :content="'Rating: ' + $episodeDetails.rating" x="20" y="200" size="14" color="#a0aec0" />
            </Element>
          </Element>
        </Element>

        <!-- TV Shows List for navigation -->
        <List x="40" type="tv-seasons" ref="tvSeasonList" />
      </Element>
    </Element>
  `,
  props: ['showTitle', 'season'],
  state() {
    return {
      episodes: [],
      focusedEpisodeIndex: 0,
      isFocused: false,
    }
  },
  computed: {
    episodeDetails() {
      const episode = this.episodes[this.focusedEpisodeIndex]
      if (!episode) {
        return {
          title: 'No Episode Selected',
          description: 'Select an episode to view details',
          duration: 'N/A',
          airDate: 'N/A',
          rating: 'N/A',
        }
      }

      // Generate random episode details
      const descriptions = [
        'An exciting episode filled with drama and suspense.',
        'A character-driven story that explores deep themes.',
        'Action-packed episode with thrilling sequences.',
        'A comedic episode that brings light-hearted moments.',
        'A plot-twisting episode that changes everything.',
      ]

      const durations = ['42 min', '45 min', '38 min', '50 min', '40 min']
      const ratings = ['8.2/10', '9.1/10', '7.8/10', '8.9/10', '8.5/10']

      return {
        title: episode.title,
        description: descriptions[episode.number - 1] || descriptions[0],
        duration: durations[episode.number - 1] || durations[0],
        airDate: `Season ${this.currentSeason}, Episode ${episode.number}`,
        rating: ratings[episode.number - 1] || ratings[0],
      }
    },
  },

  watch: {
    season(v) {
      if (v != undefined) {
        // Regenerate episodes when season changes
        this.generateEpisodes()
        // Reset episode focus when season changes
        this.focusedEpisodeIndex = 0
      }
    },
    focusedEpisodeIndex() {
      if (this.focusedEpisodeIndex >= this.episodes.length) {
        this.focusedEpisodeIndex = Math.max(0, this.episodes.length - 1)
      }
    },
  },

  hooks: {
    ready() {
      this.generateEpisodes()
    },
    focus() {
      this.isFocused = true
      this.$trigger('focusedEpisodeIndex')
    },
    destroy() {
      this.$log.info('>>>>>>>>>>>>> Destoyed TV seasons >>>>>>>>>>>>>>>>>>>>')
    },
  },

  methods: {
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
      } else {
        this.isFocused = false
        // Move to TV shows list
        const tvSeasonList = this.$select('tvSeasonList')
        if (tvSeasonList && tvSeasonList.$focus) tvSeasonList.$focus()
      }
    },
  },
})
