import Blits from '@lightningjs/blits'
import { List } from './List'

export default Blits.Component('Details', {
  components: {
    List,
  },
  template: `
    <Element w="1920" h="1080" color="#1e293b">
      <!-- Divider -->
      <Element x="400" y="0" w="2" h="1080" color="#4a5568" />

      <!-- Content -->
      <Element x="402" y="0" w="1518" h="1080">
        <Text content="Movie Details" x="40" y="40" size="42" font="raleway" color="#fff" />
        <Text content="Press BACK to return to movies" x="40" y="100" size="20" color="#a0aec0" />

        <Element x="40" y="160" w="1438" h="600" color="#374151" :effects="[{type: 'radius', props: 12}]">
          <Element w="1438" h="5" :color="$color" />
          <Text content="Movie Information" x="40" y="40" size="32" color="#fff" />
          <Text :content="'Movie ID: ' + $id" x="40" y="100" size="24" color="#e2e8f0" />
          <Text
            :content="'Title: ' + ($selectedMovie.title || 'Movie not found')"
            x="40"
            y="140"
            size="24"
            color="#e2e8f0"
          />
          <Text
            :content="'Genre: ' + ($selectedMovie.genre || 'N/A')"
            x="40"
            y="180"
            size="24"
            color="#e2e8f0"
          />
          <Text
            :content="'Year: ' + ($selectedMovie.year || 'N/A')"
            x="40"
            y="220"
            size="24"
            color="#e2e8f0"
          />
          <Text
            :content="'Director: ' + ($selectedMovie.director || 'N/A')"
            x="40"
            y="260"
            size="24"
            color="#e2e8f0"
          />
          <Text
            :content="'Mood: ' + ($selectedMovie.mood || 'N/A')"
            x="40"
            y="300"
            size="20"
            color="#a0aec0"
          />
          <Text content="Focus is now on this content area - use BACK to return" x="40" y="460" size="18" color="#718096" />
        </Element>

        <List x="40" type="movies" ref="list" />
      </Element>
    </Element>
  `,
  props: ['id', 'selectedMovie'],
  state() {
    return {
      color: '#374151',
    }
  },
  hooks: {
    focus() {
      this.color = '#fbbf24'
    },
  },
  input: {
    left() {
      if (this.$appState) {
        this.$appState.activeView = this
        this.$appState.focusMenu = true
      }
    },
    down() {
      this.color = '#374151'
      const list = this.$select('list')
      if (list && list.$focus) list.$focus()
    },
  },
})
