import Blits from '@lightningjs/blits'

export const Movies = Blits.Component('Movies', {
  template: `
    <Element w="1518" h="1080" color="transparent">
      <Text content="Movies" x="40" y="80" size="42" font="raleway" color="#fff" />
      
      <Element x="40" y="160" w="1200" h="400" color="#374151" :effects="[{type: 'radius', props: 12}]">
        <Text content="Movies Main Page" x="40" y="40" size="28" color="#fff" />
        
        <Element x="40" y="160" w="500" h="150" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
          <Text content="Controls:" x="20" y="20" size="16" color="#a0aec0" />
          <Text content="⏎ ENTER → Movie Details" x="20" y="50" size="14" color="#e2e8f0" />
          <Text content="⬅ BACK → Return to Sidebar" x="20" y="75" size="14" color="#e2e8f0" />
        </Element>
      </Element>
    </Element>
  `
})