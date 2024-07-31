import Blits from '@lightningjs/blits'
import FitRow from '../components/FitRow'

export default Blits.Component('Resize', {
  components: {
    FitRow,
  },
  template: `
    <Element>
      <Text y="30" content="fit (resizeMode) sample" wordwrap="1920" align="center" />
      <Element :x.transition="{value: $pages.x1, duration: 200}" y="60">
        <FitRow :for="(item, index) in $samples1" key="$item.metadata.id" item="$item.metadata" config="$item.configs" />
      </Element>
      <Element :x.transition="{value: $pages.x2, duration: 200}" y="60">
        <FitRow :for="(item, index) in $samples2" key="$item.metadata.id" item="$item.metadata" config="$item.configs" />
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
      },
      totalPages: 0, // dynamically calculates
      samples1: [
        {
          metadata: {
            id: 'positionY',
            w: 500,
            h: 200,
            y: 50,
            x: 100,
            img: 'assets/testscreen.png',
            dimensions: '2560 X 1440',
            title:
              'Texture width > height - fit cover maximum width of node and position Y - 0, 0.5, 1',
          },
          configs: [
            {
              id: 'posY0', // to use it as a key in for-loop
              fit: { type: 'cover', position: { y: 0 } },
            },
            {
              id: 'posY05',
              fit: { type: 'cover', position: { y: 0.5 } },
            },
            {
              id: 'posY1',
              fit: { type: 'cover', position: { y: 1 } },
            },
          ],
        },
        {
          metadata: {
            id: 'positionX',
            x: 100,
            y: 500,
            w: 500,
            h: 350,
            img: 'assets/testscreen.png',
            dimensions: '2560 X 1440',
            title:
              'Texture width > height - fit:cover maximum width of node and position X - 0, 0.5, 1',
          },
          configs: [
            {
              id: 'posX0',
              fit: { type: 'cover', position: { x: 0 } },
            },
            {
              id: 'posX05',
              fit: { type: 'cover', position: { x: 0.5 } },
            },
            {
              id: 'posX1',
              fit: { type: 'cover', position: { x: 1 } },
            },
          ],
        },
      ],
      samples2: [
        {
          metadata: {
            id: 'positionY',
            w: 500,
            h: 300,
            y: 20,
            x: 100,
            img: 'assets/testscreen_rotated.png',
            dimensions: '1440 X 2560 ',
            title:
              ' Texture width < height - fit cover maximum width of node and positionY - 0, 0.5, 1',
          },
          configs: [
            {
              id: 'posY0',
              fit: { type: 'cover', position: { y: 0, x: 0 } },
            },
            {
              id: 'posY05',
              fit: { type: 'cover', position: { y: 0.5, x: 0.5 } },
            },
            {
              id: 'posY1',
              fit: { type: 'cover', position: { y: 1, x: 1 } },
            },
          ],
        },
        {
          metadata: {
            id: 'positionX',
            x: 100,
            y: 470,
            w: 150,
            h: 400,
            img: 'assets/testscreen_rotated.png',
            dimensions: '1440 X 2560',
            title:
              'Texture width < height - fit cover maximum width of node and position X - 0, 0.25, 0.5, 0.75, 1',
          },
          configs: [
            {
              id: 'posX0',
              fit: { type: 'cover', position: { x: 0 } },
            },
            {
              id: 'posX025',
              fit: { type: 'cover', position: { x: 0.25 } },
            },
            {
              id: 'posX05',
              fit: { type: 'cover', position: { x: 0.5 } },
            },
            {
              id: 'posX075',
              fit: { type: 'cover', position: { x: 0.75 } },
            },
            {
              id: 'posX1',
              fit: { type: 'cover', position: { x: 1 } },
            },
          ],
        },
      ],
    }
  },
  hooks: {
    ready() {
      this.totalPages = Object.keys(this.pages).length
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
