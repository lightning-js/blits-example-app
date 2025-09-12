import Blits from '@lightningjs/blits'
import MovieCard from '../MovieCard.js'

export default Blits.Component('Movies', {
  components: {
    MovieCard,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b" focusable="true">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text content="Movies" x="40" y="80" size="42" font="raleway" color="#fff" />

        <Element x="40" y="160" w="1400" h="800" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Text content="Movies Collection" x="40" y="40" size="28" color="#fff" />

          <!-- Movie Cards using for-loop -->
          <MovieCard
            :for="(movie, index) in $movies"
            key="$movie.id"
            :x="40 + ($index % 3) * 320"
            :y="100 + Math.floor($index / 3) * 220"
            :title="$movie.title"
            :director="$movie.director"
            :genre="$movie.genre"
            :year="$movie.year"
            :mood="$movie.mood"
            :movieId="$movie.id"
            :ref="'movie' + $index"
          />

          <Element x="40" y="560" w="500" h="100" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
            <Text content="Controls:" x="20" y="20" size="16" color="#a0aec0" />
            <Text content="⏎ ENTER → Movie Details" x="20" y="45" size="14" color="#e2e8f0" />
            <Text content="⬅ BACK → Return to Sidebar" x="20" y="70" size="14" color="#e2e8f0" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  props: ['movies'],
  state() {
    return {
      focusedMovieIndex: 0,
    }
  },
  computed: {
    gridCols() {
      return 3
    },
    gridRows() {
      return Math.ceil(this.movies.length / 3)
    },
  },
  watch: {
    focusedMovieIndex(v) {
      if (v !== undefined) {
        const movie = this.$select(`movie${this.focusedMovieIndex}`)
        if (movie && movie.$focus) movie.$focus()
      }
    },
  },

  hooks: {
    ready() {
      // Show menu and focus Movies (same pattern as other RouterExample components)
      if (this.$appState) {
        this.$appState.showMenu = true
        this.$appState.focusMenu = false
      }
    },
    focus() {
      this.$trigger('focusedMovieIndex')
    },
  },

  input: {
    left() {
      if (this.focusedMovieIndex % 3 === 0) {
        if (this.$appState) {
          this.$appState.activeView = this
          this.$appState.focusMenu = true
        }
      } else {
        // Move left within the grid
        this.focusedMovieIndex = Math.max(0, this.focusedMovieIndex - 1)
      }
    },

    right() {
      // Move right within the grid
      if (this.focusedMovieIndex < this.movies.length - 1) {
        this.focusedMovieIndex = Math.min(this.movies.length - 1, this.focusedMovieIndex + 1)
      }
    },

    up() {
      // Move up in the grid (previous row)
      const newIndex = this.focusedMovieIndex - 3
      if (newIndex >= 0) {
        this.focusedMovieIndex = newIndex
      }
    },

    down() {
      // Move down in the grid (next row)
      const newIndex = this.focusedMovieIndex + 3
      if (newIndex < this.movies.length) {
        this.focusedMovieIndex = newIndex
      }
    },

    enter() {
      const movie = this.movies[this.focusedMovieIndex]
      if (movie) {
        this.$appState.selectedMovie = null
        this.$appState.selectedMovie = movie
        this.$router.to(`/examples/router/movies/${movie.id}`)
      }
    },
  },
})
