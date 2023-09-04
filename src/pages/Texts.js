import Bolt from '@lightningjs/bolt'

const colors = ['#64748b', '#ef4444', '#f97316', '#84cc16', '#14b8a6', '#3b82f6']

const characters = [
  'Iron Man',
  'Captain America',
  'Thor',
  'Hulk',
  'Black Widow',
  'Hawkeye',
  'Scarlet Witch',
  'Vision',
  'Black Panther',
  'Doctor Strange',
  'Spider-Man',
  'Ant-Man',
  'Wasp',
  'Captain Marvel',
  'Falcon',
  'Winter Soldier',
  'War Machine',
  'Quicksilver',
  'Star-Lord',
  'Gamora',
]

export default Bolt.Component('Texts', {
  template: /*html*/ `
    <Element x="100" y="100">

      <Text content="Default text" />
      <Text content="Text with a different fontsize" :size="$size" y="120" />
      <Text content="Text with a different color" size="50" :color="$color" y="250" />

      <!-- does the font have a bold and italic? -->
      <Text content="Bold and Italic text (todo?)" size="50" color="#0369a1" y="350" style="italic" weight="bold" />

      <Text content="Letterspacing" size="50" color="#38bdf8" y="450" letterspacing="40" />

      <Element w="800" h="100" y="550" color="#94a3b8">
        <Text content="Text align center (todo?)" size="50" y="15" color="#bae6fd" align="center" w="800" />
      </Element>

      <Text :content="$character" size="50" :color="$color" y="750" />

    </Element>`,

  state() {
    return {
      color: colors[0],
      size: 10,
      character: characters[0],
      myText: 'This is my test yeah',
    }
  },
  hooks: {
    ready() {
      let count = 0
      this.$setInterval(() => {
        count++
        if (count > colors.length - 1) count = 0
        this.color = colors[count]
        this.size = 10 * (count * 2 + 1)
      }, 1000)

      let count2 = 0
      this.$setInterval(() => {
        count2++
        if (count2 > characters.length - 1) count2 = 0
        this.character = characters[count2]
      }, 1400)
    },
  },
})
