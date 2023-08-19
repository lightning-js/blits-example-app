import Bolt from '@lightningjs/bolt'
import Square from '../components/Square.js'
import Card from '../components/Card.js'

export default Bolt.Component('Components', {
  components: {
    Square,
    Card,
  },
  template: /*html*/ `
    <Element>
      <!-- simple square component that takes a size (number) argument and maps it to w and h -->
      <Square x="100" y="100" size="50" />
      <Square x="100" y="200" size="100" />
      <Square x="100" y="350" size="200" />
      <!-- reactive (animated) x position for component -->
      <Square :x.transition="$x" y="600" size="50" />
      <!-- card component that takes a string size argument and also has a nested square component -->
      <Card x="500" y="100" />
      <Card x="500" y="500" size="large" />
    </Element>`,
  state() {
    return {
      x: 100,
    }
  },
  hooks: {
    render() {
      setInterval(() => {
        this.x = this.x === 100 ? 250 : 100
      }, 2000)
    },
  },
})
