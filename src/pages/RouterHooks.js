import Blits from '@lightningjs/blits'

const Button = Blits.Component('JokeButton', {
  template: `
    <Element
      w="$w"
      h="$h"
      color="{left: '#7a65fe', right:'#e14ffe'}"
      :scale.transition="{value:$scale, d: 300, easing: 'cubic-bezier(0.20, 1.00, 0.80, 1.00)'}"
    >
      <Text x="$w/2" y="$h/2" mount="{x:0.5, y:0.7}" :content="$title" font="opensans" size="50" color="#e4fcff" />
    </Element>
  `,
  props: ['title', 'w', 'h', 'navTo'],
  state() {
    return {
      scale: 0.98,
    }
  },
  hooks: {
    focus() {
      this.scale = 1.2
    },
    unfocus() {
      this.scale = 0.9
    },
  },
  input: {
    enter() {
      this.$router.to(`/examples/router-hooks/${this.navTo}`)
    },
  },
})

export const Jokes = Blits.Component('Jokes', {
  components: {
    Button,
  },
  template: `
    <Element w="1920" h="1080" color="#000">
      <Text
        x="960"
        y="300"
        mount="{x:0.5, y:0.5}"
        content="Ready for a Chuckle? Pick Your Joke Category!"
        font="opensans"
        size="40"
      />
      <Button w="500" h="200" x="400" y="440" title="Programming" ref="type0" navTo="jokes/programming" />
      <Button w="500" h="200" x="1010" y="440" title="General" ref="type1" navTo="jokes/general" />
    </Element>
  `,
  state() {
    return {
      focused: 0,
    }
  },
  watch: {
    focused(v) {
      const el = this.select(`type${v}`)
      if (el && el.focus) el.focus()
    },
  },
  hooks: {
    focus() {
      this.$trigger('focused')
    },
  },
  input: {
    left() {
      this.focused = this.focused == 1 ? 0 : 1
    },
    right() {
      this.focused = this.focused == 0 ? 1 : 0
    },
  },
})

export const GeneralJoke = Blits.Component('GeneralJoke', {
  components: {
    Button,
  },
  template: `
    <Element w="1920" h="1080" color="{right:'#C0DADF', left:'#FF4E9A'}">
      <Element src="assets/emoji.png" w="100" h="100" x="900" y="200" mount="{x:0.5}" />
      <Text
        x="900"
        y="400"
        mount="{x: 0.5, y:0.5}"
        color="black"
        content="$joke.setup"
        font="opensans"
        size="50"
        wordwrap="1720"
      />
      <Text x="900" y="500" mount="{x: 0.5, y:0.5}" content="$joke.punchline" font="opensans" size="40" color="gold" />
      <Button w="300" h="100" x="1100" y="600" title="Rate Me :)" navTo="rating" ref="rate" />
    </Element>
  `,
  props: [
    {
      key: 'joke',
      cast: Object,
    },
  ],
  hooks: {
    focus() {
      const el = this.select('rate')
      if (el && el.focus) {
        el.focus()
      }
    },
  },
})

export const ProgrammingJoke = Blits.Component('ProgrammingJoke', {
  components: {
    Button,
  },
  template: `
    <Element w="1920" h="1080" color="#000">
      <Element src="assets/programming.png" w="100" h="100" x="900" y="200" mount="{x:0.5}" />
      <Text
        x="900"
        y="400"
        mount="{x: 0.5, y:0.5}"
        content="$joke.setup"
        font="opensans"
        size="50"
        wordwrap="1720"
        maxlines="2"
      />
      <Text x="900" y="500" mount="{x: 0.5, y:0.5}" content="$joke.punchline" font="opensans" size="40" color="red" />
      <Button w="300" h="100" x="1100" y="600" title="Rate Me :)" navTo="rating" ref="rate" />
    </Element>
  `,
  props: [
    {
      key: 'joke',
      cast: Object,
    },
  ],
  hooks: {
    focus() {
      const el = this.select('rate')
      if (el && el.focus) {
        el.focus()
      }
    },
  },
})

export const JokesRating = Blits.Component('JokesRating', {
  template: `
    <Element>
      <Text content="Coming Soon..." x="960" y="540" mount="{x: 0.5, y:0.5}" font="opensans" size="100" />
      <Text content="Redirecting to home.." x="1200" y="900" size="40" font="opensans" />
      <Text :content="$counter" x="1650" y="900" size="40" font="opensans" color="gold" />
    </Element>
  `,
  state() {
    return {
      counter: 3,
    }
  },
  hooks: {
    focus() {
      this.$setInterval(() => {
        this.counter--
        if (this.counter == 0) {
          this.$router.to('/examples/router-hooks')
        }
      }, 1000)
    },
  },
})
