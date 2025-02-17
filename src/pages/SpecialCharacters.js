import Blits from '@lightningjs/blits'

const Accent = Blits.Component('Accent', {
  template: `
    <Element w="300" h="250" :color="$bColor" :effects="[{type: 'radius', props: {radius: 8}}]">
      <Text x="150" y="125" mount="{x:0.5, y:0.5}" :content="$lang" color="#fff" font="lato-black" />
    </Element>
    `,
  state() {
    return {
      /**
       * background color of accent tile
       */
      bColor: "{ top: '#93C5FD', bottom: '#3B82F6' }",
    }
  },
  props: ['lang'],
  hooks: {
    focus() {
      this.bColor = "{ top: '#6366F1', bottom: '#4F46E5' }"
    },
    unfocus() {
      this.bColor = "{ top: '#93C5FD', bottom: '#3B82F6' }"
    },
  },
})

const Accents = Blits.Component('Accents', {
  components: {
    Accent,
  },
  template: `
    <Element>
      <Element :x.transition="$x">
        <Accent :for="(item, index) in $data" key="$item.lang" lang="$item.lang" :ref="'accent'+$index" x="$index * 400" />
      </Element>
      <Text :content="$activeAccent" font="lato-black" x="960" y="400" mount="{x:0.5}" letterspacing="10" size="40" />
    </Element>
    `,
  props: ['data'],
  state() {
    return {
      /**
       * Position of accents list
       */
      x: 160,
      /**
       * Current active index of tile
       */
      activeIndex: 0,
      /**
       * Current active accent characters
       */
      activeAccent: '',
    }
  },
  watch: {
    activeIndex(v) {
      const el = this.$select(`accent${v}`)
      if (el && el.$focus) {
        el.$focus()
        this.activeAccent = this.data[v].chars
      }
    },
  },
  hooks: {
    focus() {
      this.$trigger('activeIndex')
    },
  },
  input: {
    right() {
      if (this.activeIndex < this.data.length - 1) this.move(1)
    },
    left() {
      if (this.activeIndex > 0) this.move(-1)
    },
  },
  methods: {
    move(dir) {
      const next = this.activeIndex + dir
      this.x = next > 3 ? -(next - 3) * 400 - 160 : 160
      this.activeIndex = next
    },
  },
})
export default Blits.Component('Characters', {
  components: {
    Accents,
  },
  template: `
    <Element w="1920">
      <Text x="960" y="50" mount="{x:0.5}" content="Alphabets" font="lato-black" size="60" />
      <Text x="960" y="150" mount="{x:0.5}" content="$alphabets" font="lato-black" size="40" letterspacing="10" />
      <Text x="960" y="290" mount="{x:0.5}" content="Accents" font="lato-black" size="60" />
      <Accents data="$accents" y="400" ref="accents" />
      <Element
        w="950"
        h="40"
        color="#000000ff"
        :effects="[{type: 'radius', props: {radius: 10}}]"
        y="1000"
        placement="center"
      >
        <Text
          content="The character ? represents a character that is not supported by the Lato-Black font"
          size="25"
          x="475"
          y="20"
          mount="{x:0.5, y:0.5}"
        />
      </Element>
    </Element>
    `,
  state() {
    return {
      alphabets: 'abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      accents: [
        {
          lang: 'Dutch',
          chars: 'éèëïüáóĳĲ',
        },
        {
          lang: 'French',
          chars: 'éèêëàâîïôùûç',
        },
        {
          lang: 'Spanish',
          chars: 'áéíóúñü',
        },
        {
          lang: 'Turkish',
          chars: 'ÇçĞğİiÖöÜüŞş',
        },
      ],
    }
  },
  hooks: {
    focus() {
      const comp = this.$select('accents')
      if (comp && comp.$focus) comp.$focus()
    },
  },
})
