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
            :focused="$index === $focusedMovieIndex && !$menuFocused"
            :ref="'movie' + $movie.id"
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

  state() {
    return {
      menuFocused: false,
      enterCount: 0,
      movies: [
        {
          id: 1,
          title: "Blade Runner 2049",
          director: "Denis Villeneuve",
          genre: "Sci-Fi",
          year: 2017,
          colorPalette: ["neon blue", "orange", "grey"],
          mood: "Futuristic, melancholic",
          imageUrl: "https://example.com/blade-runner.jpg"
        },
        {
          id: 2,
          title: "The Grand Budapest Hotel",
          director: "Wes Anderson",
          genre: "Comedy/Drama",
          year: 2014,
          colorPalette: ["pastel pink", "lavender", "gold"],
          mood: "Whimsical, nostalgic",
          imageUrl: "https://example.com/grand-budapest.jpg"
        },
        {
          id: 3,
          title: "Mad Max: Fury Road",
          director: "George Miller",
          genre: "Action",
          year: 2015,
          colorPalette: ["desert orange", "steel blue", "black"],
          mood: "Intense, chaotic",
          imageUrl: "https://example.com/mad-max.jpg"
        },
        {
          id: 4,
          title: "Moonlight",
          director: "Barry Jenkins",
          genre: "Drama",
          year: 2016,
          colorPalette: ["deep blue", "purple", "soft pink"],
          mood: "Emotional, intimate",
          imageUrl: "https://example.com/moonlight.jpg"
        },
        {
          id: 5,
          title: "Life of Pi",
          director: "Ang Lee",
          genre: "Adventure/Drama",
          year: 2012,
          colorPalette: ["sunset orange", "ocean blue", "white"],
          mood: "Spiritual, surreal",
          imageUrl: "https://example.com/life-of-pi.jpg"
        }
      ],
      focusedMovieIndex: 0,
    }
  },

  computed: {
    focusedMovie() {
      return this.movies[this.focusedMovieIndex]
    },
    gridCols() {
      return 3
    },
    gridRows() {
      return Math.ceil(this.movies.length / 3)
    },
  },

  // watch: {
  //   '$appState.focusMenu'(value) {
  //     this.menuFocused = value === true
  //     if (value === false && this.$appState.activeView === this) {
  //       this.$focus()
  //     }
  //   },
  // },

  hooks: {
    ready() {
      // Show menu and focus Movies (same pattern as other RouterExample components)
      if (this.$appState) {
        this.$appState.showMenu = true
        this.$appState.focusedItem = 0
        this.$appState.focusMenu = false 
        this.$appState.activeView = this
      }

      // Reset local focus state
      this.menuFocused = false

      // Force focus immediately
      this.$focus()
    },
    focus() {
      this.$log.info('Movies Focus')
      this.menuFocused = false
      if (this.$appState) {
        this.$appState.focusMenu = false
      }
    },
    unfocus() {
      this.$log.info('Movies unfocus')
    },
  },

  input: {
    left() {
      if (this.focusedMovieIndex % 3 === 0) {
        this.menuFocused = true
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
      // If menu is focused, return focus to movies
      if (this.menuFocused) {
        this.menuFocused = false
        if (this.$appState) {
          this.$appState.focusMenu = false
        }

        this.$focus()
        return
      }

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

        this.$appState.selectedMovie = movie
        this.$router.to(`/examples/router/movies/${movie.id}`)
      }
    },

    back() {
      // Navigate back to home
      this.$appState.showMenu = false
      this.$router.to('/')
    },
  },
})