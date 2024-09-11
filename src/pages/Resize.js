import Blits from '@lightningjs/blits'

export default Blits.Component('Resize', {
  template: `
    <Element>
      <Text y="30" content="fit (Resize Mode) sample" wordwrap="1920" align="center" />
      <Element :x.transition="{value: $pages.x1, duration: 200}" y="90">
        <Text x="100" :content="'Image dimensions: 2560 X 1440'" />
        <Text x="100" y="80" content="$titles.t1" />
        <Element y="150" x="100">
          <Element w="$w" h="$w-300" src="$img" fit="{type: 'cover', position: { y: 0 } }" />
          <Element w="$w" h="$w-300" src="$img" fit="{ type: 'cover', position: { y: 0.5 } }" x="600" />
          <Element w="$w" h="$w-300" src="$img" fit="{ type: 'cover', position: { y: 1 } }" x="1200" />
        </Element>
        <Text x="100" y="500" content="$titles.t2" />
        <Element y="600" x="100">
          <Element w="$w" h="$w-150" src="$img" fit="{ type: 'cover', position: { x: 0 } }" />
          <Element w="$w" h="$w-150" src="$img" fit="{ type: 'cover', position: { x: 0.5 } }" x="600" />
          <Element w="$w" h="$w-150" src="$img" fit="{ type: 'cover', position: { x: 1 } }" x="1200" />
        </Element>
      </Element>
      <Element :x.transition="{value: $pages.x2, duration: 200}" y="90">
        <Text x="100" :content="'Image dimensions: 1440 X 2560'" />
        <Text x="100" y="80" content="$titles.t3" />
        <Element y="150" x="100">
          <Element w="$w" h="$w-200" src="$img1" fit="{ type: 'cover', position: { y: 0, x: 0 } }" />
          <Element w="$w" h="$w-200" src="$img1" fit="{ type: 'cover', position: { y: 0.5, x: 0.5 } }" x="600" />
          <Element w="$w" h="$w-200" src="$img1" fit="{ type: 'cover', position: { y: 1, x: 1 } }" x="1200" />
        </Element>
        <Text x="100" y="500" content="$titles.t4" />
        <Element y="570" x="100">
          <Element w="$w-350" h="$w-100" src="$img1" fit="{ type: 'cover', position: { x: 0 } }" />
          <Element w="$w-350" h="$w-100" src="$img1" fit="{ type: 'cover', position: { x: 0.25 } }" x="250" />
          <Element w="$w-350" h="$w-100" src="$img1" fit="{ type: 'cover', position: { x: 0.5 } }" x="500" />
          <Element w="$w-350" h="$w-100" src="$img1" fit="{ type: 'cover', position: { x: 0.75 } }" x="750" />
          <Element w="$w-350" h="$w-100" src="$img1" fit="{ type: 'cover', position: { x: 1 } }" x="1000" />
        </Element>
      </Element>
      <Element :x.transition="{value: $pages.x3, duration: 200}" y="90">
        <Text x="100" :content="'Image dimensions: 2560 X 1440'" />
        <Text x="100" y="80" content="$titles.t5" />
        <Element y="150" x="100" w="$w+100" h="$w-200" color="#000000ff">
          <Element w="$w+100" h="$w-200" src="$img" fit="contain" />
        </Element>
        <Text x="100" y="500" content="$titles.t6" />
        <Element y="550" x="100" w="$w+100" h="$w-100" color="#000000ff">
          <Element w="$w+100" h="$w-100" src="$img" fit="contain" />
        </Element>
      </Element>
      <Text x="1700" y="20" :content="'Page ' + $activePage + '/' + $totalPages" />
    </Element>
  `,
  state() {
    return {
      activePage: 1,
      pages: {
        x1: 0,
        x2: 1920,
        x3: 1920 * 2,
      },
      w: 500,
      img: 'assets/testscreen.png',
      img1: 'assets/testscreen_rotated.png',
      titles: {
        t1: 'Texture width > height - fit cover maximum width of node and position Y - 0, 0.5, 1',
        t2: 'Texture width > height - fit:cover maximum width of node and position X - 0, 0.5, 1',
        t3: 'Texture width < height - fit cover maximum width of node and positionY - 0, 0.5, 1',
        t4: 'Texture width < height - fit cover maximum width of node and position X - 0, 0.25, 0.5, 0.75, 1',
        t5: 'Texture width > height - fit contain maximum height of node',
        t6: 'Texture width > height - fit contain maximum width of node',
      },
    }
  },
  computed: {
    totalPages() {
      return Object.keys(this.pages).length
    },
  },
  input: {
    right() {
      if (this.activePage < this.totalPages) {
        for (let i = 1; i <= this.totalPages; i++) {
          this.pages[`x${i}`] = this.pages[`x${i}`] - 1920
        }
        this.activePage += 1
      }
    },
    left() {
      if (this.activePage > 1) {
        for (let i = this.totalPages; i >= 1; i--) {
          this.pages[`x${i}`] = this.pages[`x${i}`] + 1920
        }
        this.activePage -= 1
      }
    },
  },
})
