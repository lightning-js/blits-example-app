import Blits from '@lightningjs/blits'
import TvCard from '../TvCard.js'

export default Blits.Component('Tv', {
  components: {
    TvCard,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b" focusable="true">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text content="TV Shows" x="40" y="80" size="42" font="raleway" color="#fff" />

        <Element x="40" y="160" w="1400" h="800" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Text content="TV Shows Collection" x="40" y="40" size="28" color="#fff" />

          <!-- TV Show Cards using for-loop -->
          <TvCard
            :for="(tvShow, index) in $tvShows"
            key="$tvShow.id"
            :x="40 + ($index % 3) * 320"
            :y="100 + Math.floor($index / 3) * 220"
            :title="$tvShow.title"
            :creator="$tvShow.creator"
            :genre="$tvShow.genre"
            :year="$tvShow.year"
            :seasons="$tvShow.seasons"
            :episodes="$tvShow.episodes"
            :status="$tvShow.status"
            :tvShowId="$tvShow.id"
            :ref="'tvShow' + $index"
          />

          <Element x="40" y="560" w="500" h="100" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
            <Text content="Controls:" x="20" y="20" size="16" color="#a0aec0" />
            <Text content="⏎ ENTER → TV Show Details" x="20" y="45" size="14" color="#e2e8f0" />
            <Text content="⬅ BACK → Return to Sidebar" x="20" y="70" size="14" color="#e2e8f0" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  props: ['tvShows'],
  state() {
    return {
      focusedTvShowIndex: 0,
    }
  },
  computed: {
    gridCols() {
      return 3
    },
    gridRows() {
      return Math.ceil(this.tvShows.length / 3)
    },
  },
  watch: {
    focusedTvShowIndex(v) {
      if (v !== undefined) {
        const tvShow = this.$select(`tvShow${this.focusedTvShowIndex}`)
        if (tvShow && tvShow.$focus) tvShow.$focus()
      }
    },
  },

  hooks: {
    focus() {
      this.$trigger('focusedTvShowIndex')
    },
  },

  input: {
    left() {
      if (this.focusedTvShowIndex % 3 === 0) {
        if (this.$appState) {
          this.$appState.focusMenu = true
        }
      } else {
        // Move left within the grid
        this.focusedTvShowIndex = Math.max(0, this.focusedTvShowIndex - 1)
      }
    },

    right() {
      // Move right within the grid
      if (this.focusedTvShowIndex < this.tvShows.length - 1) {
        this.focusedTvShowIndex = Math.min(this.tvShows.length - 1, this.focusedTvShowIndex + 1)
      }
    },

    up() {
      // Move up in the grid (previous row)
      const newIndex = this.focusedTvShowIndex - 3
      if (newIndex >= 0) {
        this.focusedTvShowIndex = newIndex
      }
    },

    down() {
      // Move down in the grid (next row)
      const newIndex = this.focusedTvShowIndex + 3
      if (newIndex < this.tvShows.length) {
        this.focusedTvShowIndex = newIndex
      }
    },

    enter() {
      const selectedTvShow = this.tvShows[this.focusedTvShowIndex]
      if (selectedTvShow) {
        // Navigate to TV details
        this.$router.to(`/examples/router/tv/${selectedTvShow.id}`)
      }
    },
  },
})
