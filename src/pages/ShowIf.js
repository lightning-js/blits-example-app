import Bolt from '@lightningjs/bolt'

export default Bolt.Component('ShowIf', {
  template: `
    <Element>

      <!-- hardcoded show values -->
      <Element y="40">

        <!-- should show -->
        <Element x="50" w="200" h="300" color="#bef264" show="true" />
        <!-- should not show -->
        <Element x="350" w="200" h="300" color="#bef264" show="false" />

        <!-- should show -->
        <Element x="650" w="200" h="300" color="#84cc16" show="1" />
        <!-- should not show -->
        <Element x="950" w="200" h="300" color="#84cc16" show="0" />

        </Element>

      <!-- dynamic show values -->
      <Element y="380">

        <!-- should show -->
        <Element x="50" w="200" h="300" color="#fde047" show="$showNr" />
        <!-- should not show -->
        <Element x="350" w="200" h="300" color="#fde047" show="$hideNr" />

        <!-- should show -->
        <Element x="650" w="200" h="300" color="#84cc16" show="$showBool" />
        <!-- should not show -->
        <Element x="950" w="200" h="300" color="#84cc16" show="$hideBool" />

      </Element>

      <!-- dynamic show value -->
      <Element y="720">

        <!-- should show / hide every 2 seconds -->
        <Element x="50" w="200" h="300" color="#5eead4" :show="$showHideToggle" />

        <!-- show / hide with transition ... todo! -->
        <!--Element x="350" w="200" h="300" color="#5eead4" :show.transition="$showHideToggle" /-->

        </Element>

    </Element>`,
  state() {
    return {
      showNr: 1,
      hidNr: 0,
      showBool: true,
      hideBool: false,
      showHideToggle: true,
    }
  },
  hooks: {
    render() {
      setInterval(() => {
        this.showHideToggle = !!!this.showHideToggle
      }, 2000)

      setTimeout(() => {
        // this should not make a difference since no reactive bound is made
        this.showNr = 0
        this.hideNr = 1
        this.showBool = false
        this.hideBool = true
      }, 4000)
    },
  },
})
