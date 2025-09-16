import Blits from '@lightningjs/blits'
import { List } from './List'

const SeasonItem = Blits.Component('SeasonItem', {
  template: `
    <Element x="0" y="$y" w="200" h="50" :color="$focused ? '#fbbf24' : '#4a5568'" :effects="[{type: 'radius', props: 8}]">
      <Text :content="'Season ' + $seasonNumber" x="20" y="15" size="18" :color="$focused ? '#000' : '#fff'" />
    </Element>
  `,
  props: ['seasonNumber', 'y'],
  state() {
    return {
      focused: false,
    }
  },
  hooks: {
    focus() {
      this.focused = true
    },
    unfocus() {
      this.focused = false
    },
  },
  input: {
    enter() {
      this.$appState.focusMenu = false
      // Ensure the TV show data is in global state before navigation
      if (this.$appState && this.$appState.selectedTvShow) {
        this.$router.to(
          `/examples/router/tv/${this.$appState.selectedTvShow.id}/season/${this.seasonNumber}`
        )
      }
    },
  },
})

export default Blits.Component('TvDetails', {
  components: {
    SeasonItem,
    List,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!-- Divider -->
      <Element x="400" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" w="1518">
        <Text content="TV Show Details" x="40" y="80" size="42" font="raleway" color="#fff" />

        <Element x="40" y="160" w="1400" h="720" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Text :content="$tvShow ? $tvShow.title : 'Loading...'" x="40" y="40" size="32" color="#fff" font="raleway" />

          <Element x="40" y="100" w="600" h="300">
            <Text :content="'Created by: ' + ($tvShow ? $tvShow.creator : 'N/A')" x="0" y="0" size="20" color="#e2e8f0" />
            <Text :content="'Genre: ' + ($tvShow ? $tvShow.genre : 'N/A')" x="0" y="40" size="18" color="#cbd5e1" />
            <Text :content="'Year: ' + ($tvShow ? $tvShow.year : 'N/A')" x="0" y="80" size="18" color="#cbd5e1" />
            <Text :content="'Seasons: ' + ($tvShow ? $tvShow.seasons : 'N/A')" x="0" y="120" size="18" color="#cbd5e1" />
            <Text :content="'Episodes: ' + ($tvShow ? $tvShow.episodes : 'N/A')" x="0" y="160" size="18" color="#cbd5e1" />
            <Text :content="'Status: ' + ($tvShow ? $tvShow.status : 'N/A')" x="0" y="200" size="18" color="#cbd5e1" />
            <Text :content="'Rating: ' + ($tvShow ? $tvShow.rating : 'N/A')" x="0" y="240" size="18" color="#cbd5e1" />
          </Element>

          <Element x="700" y="100" w="600" h="300" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
            <Text content="Show Information" x="20" y="20" size="20" color="#fff" />
            <Text content="This TV show has been carefully selected" x="20" y="60" size="16" color="#e2e8f0" />
            <Text content="for its exceptional storytelling and" x="20" y="90" size="16" color="#e2e8f0" />
            <Text content="character development. Each season" x="20" y="120" size="16" color="#e2e8f0" />
            <Text content="builds upon the previous one, creating" x="20" y="150" size="16" color="#e2e8f0" />
            <Text content="a rich narrative experience." x="20" y="180" size="16" color="#e2e8f0" />
            <Text :content="'Mood: ' + ($tvShow ? $tvShow.mood : 'N/A')" x="20" y="220" size="16" color="#a0aec0" />
          </Element>

          <!-- Seasons List -->
          <Element x="40" y="420" w="1200">
            <Text content="Seasons:" size="24" color="#fff" />
            <Element w="1200" h="200" clipping="true" y="40">
              <SeasonItem
                :for="(season, index) in $seasons"
                key="$season"
                :seasonNumber="$season"
                :y="($index * 60)"
                :ref="'season' + $index"
              />
            </Element>
          </Element>

          <List y="-50" type="tv" :currentIndex="$tvShow ? $tvShow.id - 1 : 0" ref="tvList" />
        </Element>
      </Element>
    </Element>
  `,
  state() {
    return {
      tvShow: null,
      focusedSeasonIndex: 0,
    }
  },
  computed: {
    seasons() {
      // Get seasons from the global app state TV object
      this.tvShow = this.$appState.selectedTvShow
      const seasonCount = this.tvShow ? this.tvShow.seasons : 0
      const seasonList = []
      for (let i = 1; i <= seasonCount; i++) {
        seasonList.push(i)
      }
      return seasonList
    },
  },
  watch: {
    focusedSeasonIndex(v) {
      if (v !== undefined) {
        const season = this.$select(`season${this.focusedSeasonIndex}`)
        if (season && season.$focus) season.$focus()
      }
    },
  },
  hooks: {
    ready() {
      // Get the selected TV show from app state
      if (this.$appState && this.$appState.selectedTvShow) {
        this.tvShow = this.$appState.selectedTvShow
      }
    },
    focus() {
      // Ensure we have the TV show data
      if (this.$appState && this.$appState.selectedTvShow && !this.tvShow) {
        this.tvShow = this.$appState.selectedTvShow
      }
      this.focusedSeasonIndex = 0
      this.$trigger('focusedSeasonIndex')
    },
  },
  input: {
    left() {
      // go back to menu when pressing left
      if (this.$appState) {
        this.$appState.activeView = this
        this.$appState.focusMenu = true
      }
    },
    up() {
      // Move up through seasons vertically
      if (this.focusedSeasonIndex > 0) {
        this.focusedSeasonIndex = this.focusedSeasonIndex - 1
      }
    },
    down() {
      // Move down through seasons vertically
      if (this.focusedSeasonIndex < this.seasons.length - 1) {
        this.focusedSeasonIndex = this.focusedSeasonIndex + 1
      } else {
        // Move to TV shows list
        const tvList = this.$select('tvList')
        if (tvList && tvList.$focus) tvList.$focus()
      }
    },
    enter() {
      const season = this.seasons[this.focusedSeasonIndex]
      if (season && this.tvShow) {
        // Ensure TV show data is in global state before navigation
        if (this.$appState) {
          this.$appState.selectedTvShow = this.tvShow
        }
        this.$router.to(`/examples/router/tv/${this.tvShow.id}/season/${season}`)
      }
    },
  },
})
