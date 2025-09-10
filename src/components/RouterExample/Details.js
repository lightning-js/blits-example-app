import Blits from '@lightningjs/blits'

export const Details = Blits.Component('Details', {
  template: `
    <Element w="1518" h="1080" color="#2d3748">
      <Text content="Movie Details" x="40" y="40" size="42" font="raleway" color="#fff" />
      <Text content="Press BACK to return to movies" x="40" y="100" size="20" color="#a0aec0" />
      
      <Element x="40" y="160" w="1438" h="600" color="#374151" :effects="[{type: 'radius', props: 12}]">
        <Text content="Movie Information" x="40" y="40" size="32" color="#fff" />
        <Text :content="'Movie ID: ' + $movieId" x="40" y="100" size="24" color="#e2e8f0" />
        <Text content="Title: The Amazing Adventure" x="40" y="140" size="24" color="#e2e8f0" />
        <Text content="Genre: Action/Adventure" x="40" y="180" size="24" color="#e2e8f0" />
        <Text content="Year: 2024" x="40" y="220" size="24" color="#e2e8f0" />
        <Text content="Rating: 8.5/10" x="40" y="260" size="24" color="#e2e8f0" />
        <Text content="Duration: 2h 15min" x="40" y="300" size="24" color="#e2e8f0" />
        <Text content="Description: An epic adventure through mysterious lands" x="40" y="360" size="20" color="#a0aec0" />
        <Text content="with stunning visuals and compelling characters." x="40" y="390" size="20" color="#a0aec0" />
        <Text content="Focus is now on this content area - use BACK to return" x="40" y="460" size="18" color="#718096" />
      </Element>
    </Element>
  `,
  state() {
    return {
      movieId: 'N/A'
    }
  },
  hooks: {
    ready() {
      this.movieId = String(this.$router.currentRoute.params.id || 'No ID')
    }
  }
})
