import Bolt from '@lightningjs/bolt'

const colors = ['#bbf7d0', '#86efac', '#4ade80', '#22c55e', '#16a34a', '#15803d']

export default Bolt.Component('ForLoop', {
  template: `
    <Element>
      <Element>
        <!-- looping over a simple array with x values -->
        <Element :for="item in $collection1" w="80" h="80" x="$item" color="#4d7c0f" />
      </Element>

      <Element>
        <!-- looping over an array with objects -->
        <Element :for="item in $collection2" w="80" h="80" y="$120" x="$item.x" color="$item.color" />
      </Element>

      <Element>
        <!-- looping over an array empty array, adding items over time -->
        <Element :for="item in $collection3" w="80" h="80" y="$240" x="$item.x" color="$item.color" />
      </Element>

    </Element>`,

  state() {
    return {
      collection1: [0, 100, 200, 300, 400, 500],
      collection2: [
        {
          x: 0,
          color: colors[0],
        },
        {
          x: 100,
          color: colors[1],
        },
        {
          x: 200,
          color: colors[2],
        },
        {
          x: 300,
          color: colors[3],
        },
        {
          x: 400,
          color: colors[4],
        },
        {
          x: 500,
          color: colors[5],
        },
      ],
      collection3: [],
    }
  },
  hooks: {
    render() {
      setTimeout(() => {
        this.collection2[0].color = colors[5]
        this.collection2[1].color = colors[4]
        this.collection2[2].color = colors[3]
        this.collection2[3].color = colors[2]
        this.collection2[4].color = colors[1]
        this.collection2[5].color = colors[0]
      }, 4000)

      let count = 0
      const interval = setInterval(() => {
        this.collection3.push({
          x: count * 100,
          color: colors[count],
        })
        count++
        if (count === colors.length) clearInterval(interval)
      }, 1000)
    },
  },
})
