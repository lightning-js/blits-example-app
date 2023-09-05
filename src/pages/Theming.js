import Bolt from '@lightningjs/bolt'

const darkmode = {
  color1: '#475569',
  color2: '#64748b',
  color3: '#cbd5e1',
  color4: '#38bdf8',
}

const lightmode = {
  color1: '#f8fafc',
  color2: '#e2e8f0',
  color3: '#1e293b',
  color4: '#0369a1',
}

export default Bolt.Component('Theming', {
  template: /*html*/ `
    <Element x="710" y="240">
      <Element x="-250" y="-100" src="assets/shadow.png" w="1000" h="900" alpha="0.5" />
      <Element w="500" h="600" :color="$colors.color1" :effects="[$shader('radius', {radius: 20})]">
        <Element w="500" h="100" :color="$colors.color2" :effects="[$shader('radius', {radius: 20})]" />
        <Element w="500" h="80" y="20" :color="$colors.color2">
          <Text :content="$text" :color="$colors.color3" size="28" x="20" y="14" />
          <Element w="100" h="50" x="380" y="5" :color="$colors.color1" :effects="[$shader('radius', {radius:25})]">
            <Circle :x.transition="$toggleX" size="50" color="#22c55e" />
          </Element>
        </Element>
        <Element w="200" h="180" x="25" y="140" :color="$colors.color2" :effects="[$shader('radius', {radius: 10})]" />
        <Element w="200" h="180" x="270" y="140" :color="$colors.color2" :effects="[$shader('radius', {radius: 10})]" />
        <Element x="32" y="370">
          <Element w="70" h="200" :color="$colors.color2" :effects="[$shader('radius', {radius:10})]">
            <Element w="70" y="100" h="100" :color="$colors.color4" :effects="[$shader('radius', {radius:10})]" />
          </Element>
          <Element w="70" h="200" x="90" :color="$colors.color2" :effects="[$shader('radius', {radius:10})]">
            <Element w="70" y="60" h="140" :color="$colors.color4" :effects="[$shader('radius', {radius:10})]" />
          </Element>
          <Element w="70" h="200" :x="90*2" :color="$colors.color2" :effects="[$shader('radius', {radius:10})]">
            <Element w="70" y="30" h="170" :color="$colors.color4" :effects="[$shader('radius', {radius:10})]" />
          </Element>
          <Element w="70" h="200" :x="90*3" :color="$colors.color2" :effects="[$shader('radius', {radius:10})]">
            <Element w="70" y="50" h="150" :color="$colors.color4" :effects="[$shader('radius', {radius:10})]" />
          </Element>
          <Element w="70" h="200" :x="90*4" :color="$colors.color2" :effects="[$shader('radius', {radius:10})]">
            <Element w="70" y="110" h="90" :color="$colors.color4" :effects="[$shader('radius', {radius:10})]" />
          </Element>
        </Element>
      </Element>
    </Element>
  `,
  //

  state() {
    return {
      mode: 'dark',
      toggleX: 0,
    }
  },
  computed: {
    colors() {
      return this.mode === 'dark' ? darkmode : lightmode
    },
    text() {
      return this.mode === 'dark' ? 'Dark mode' : 'Light mode'
    },
  },
  input: {
    space() {
      this.toggleX = this.toggleX === 0 ? 48 : 0
      this.$setTimeout(() => {
        this.mode = this.mode === 'dark' ? 'light' : 'dark'
      }, 150)
    },
  },
})
