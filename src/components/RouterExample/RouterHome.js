import Blits from '@lightningjs/blits'

export const RouterHome = Blits.Component('RouterHome', {
  template: `
    <Element w="1920" h="1080" color="#2d3748">
      <Element x="960" y="540" mount="0.5">
        <Text content="Welcome To Router Features Explorer" x="0" y="-150" mount="{x: 0.5}" 
              size="48" font="raleway" color="#fff" />
        
        <Text content="Navigation Instructions:" x="0" y="-80" mount="{x: 0.5}" 
              size="32" color="#4299e1" />
              
        <Text content="• Use UP/DOWN arrows to navigate the left menu" x="0" y="-30" mount="{x: 0.5}" 
              size="24" color="#e2e8f0" />
        <Text content="• Press ENTER to select a menu option" x="0" y="10" mount="{x: 0.5}" 
              size="24" color="#e2e8f0" />
        <Text content="• Press BACK to return to previous screens" x="0" y="50" mount="{x: 0.5}" 
              size="24" color="#e2e8f0" />
        
        <Element w="600" h="120" color="#4299e1" x="0" y="120" mount="{x: 0.5}" 
                 :effects="[{type: 'radius', props: 12}]">
          <Text content="🎬 Router Example Features" x="300" y="40" mount="0.5" size="28" color="#fff" />
          <Text content="Movies • TV Shows • Dynamic Routes • Transitions" x="300" y="75" mount="0.5" size="18" color="#e6fffa" />
        </Element>
      </Element>
    </Element>
  `,
  input: {
    enter() {
      this.$router.to('/router-example/movies')
    },
    back() {
      this.$router.to("/")
    }
  }
  
})
