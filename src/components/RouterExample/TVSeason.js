import Blits from '@lightningjs/blits'

export const TVSeason = Blits.Component('TVSeason', {
  template: `
    <Element w="1518" h="1080" color="transparent">
      <Text :content="'Season ' + $currentSeason" x="40" y="80" size="42" font="raleway" color="#fff" />
      
      <Element x="40" y="160" w="1200" h="500" color="#374151" :effects="[{type: 'radius', props: 12}]">
        <Text :content="'Season ' + $currentSeason + ' Episodes'" x="40" y="40" size="28" color="#fff" />
        <Text :content="'Show ID: ' + $showId" x="40" y="100" size="18" color="#e2e8f0" />
        <Text :content="'Season ' + $currentSeason + ' of 5'" x="40" y="130" size="18" color="#e2e8f0" />
        
        <Text content="Episodes:" x="40" y="180" size="20" color="#fff" />
        <Text content="1. Pilot" x="40" y="220" size="16" color="#e2e8f0" />
        
        
        <Element x="40" y="380" w="500" h="80" color="#4a5568" :effects="[{type: 'radius', props: 8}]">
          <Text content="← Previous Season | Next Season →" x="20" y="20" size="14" color="#e2e8f0" />
          <Text content="⬅ BACK to TV Details" x="20" y="45" size="14" color="#e2e8f0" />
        </Element>
      </Element>
    </Element>
  `,
  props: ['currentSeason', 'showId'],
})
