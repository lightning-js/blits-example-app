import Blits from '@lightningjs/blits'

export default Blits.Component('NamedRoutes', {
  template: `
    <Element w="1920" h="1080" color="#0f172a">
      <!-- Header -->
      <Element x="80" y="60">
        <Text content="Named Routes: App-in-App" size="44" color="#ffffff" />
        <Text
          y="60"
          content="This page demonstrates a child app (Side Panel) living inside the main App."
          size="20"
          color="#94a3b8"
        />
        <Text
          y="90"
          content="The Side Panel has its own named RouterView and independent navigation."
          size="20"
          color="#94a3b8"
        />
      </Element>

      <!-- How it works -->
      <Element x="80" y="200" w="700" h="200" color="#1e293b">
        <Element x="30" y="25">
          <Text content="How it works:" size="26" color="#e2e8f0" />
          <Text
            y="45"
            content="- SidePanel is registered in App.js with its own named RouterView"
            size="18"
            color="#cbd5e1"
          />
          <Text
            y="72"
            content="- Routes target the panel via: $router.to(path, {}, {}, 'sidePanel')"
            size="18"
            color="#cbd5e1"
          />
          <Text y="99" content="- Both routers (main + panel) coexist independently" size="18" color="#cbd5e1" />
          <Text y="126" content="- Focus can shift between main app and the panel" size="18" color="#cbd5e1" />
        </Element>
      </Element>

      <!-- Open Panel Button -->
      <Element x="80" y="450" w="300" h="70" :color="$buttonFocused ? '#3b82f6' : '#334155'" ref="openBtn">
        <Text
          content="Open Side Panel"
          size="24"
          mount="{x: 0.5, y: 0.5}"
          x="150"
          y="35"
          :color="$buttonFocused ? '#ffffff' : '#94a3b8'"
        />
      </Element>

      <!-- Status -->
      <Element x="80" y="560">
        <Text
          :content="'Panel: ' + ($panelOpen ? 'OPEN' : 'CLOSED')"
          size="20"
          :color="$panelOpen ? '#4ade80' : '#64748b'"
        />
      </Element>
      <!-- Instructions -->
      <Element x="80" y="610">
        <Text content="Press [Enter] on the button to open the Side Panel" size="18" color="#64748b" />
        <Text y="28" content="Press [Back] to return to Portal" size="18" color="#64748b" />
      </Element>
    </Element>
  `,
  state() {
    return {
      panelOpen: false,
      buttonFocused: true,
    }
  },
  hooks: {
    focus() {
      this.buttonFocused = true
      this.panelOpen = false
    },
  },
  input: {
    enter() {
      if (!this.panelOpen) {
        this.$emit('openPanel')
        this.panelOpen = true
        this.buttonFocused = false
      }
    },
    left() {
      if (this.panelOpen) {
        this.$emit('closePanel')
        this.panelOpen = false
        this.buttonFocused = true
      }
    },
  },
})
