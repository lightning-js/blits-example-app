import Blits from '@lightningjs/blits'

export const techWords = [
  'Processor',
  'Monitor',
  'Keyboard',
  'Router',
  'Sensor',
  'Algorithm',
  'Database',
  'Compiler',
  'Protocol',
  'Interface',
  'Server',
  'Firewall',
  'Bandwidth',
  'Domain',
  'Packet',
  'Smartphone',
  'Tablet',
  'Charger',
  'Headphones',
  'Bluetooth',
  'Firmware',
  'Encryption',
  'Cloud',
  'API',
  'Debugger',
]

const List = Blits.Component('List', {
  template: `
    <Element>
      <Element :for="(item, index) in $data" key="$item.id + 'key'" w="380" h="60" :y="$index * 80 + 50" color="#fff7ed">
        <Text :content="$item.text" maxwidth="380" align="center" y="12.5" font="lato" size="30" color="#1e293b" />
      </Element>
    </Element>
  `,
  props: ['data'],
  hooks: {
    ready() {
      this.$setTimeout(() => {}, 1000)
    },
  },
})

let emitterCounter = 1
const makeItems = (count) => {
  const d = []
  for (let i = 0; i < count; i++) {
    d.push(makeItem())
  }
  return d
}
const makeItem = () => {
  return {
    id: emitterCounter++,
    text: techWords[Math.floor(Math.random() * techWords.length - 1)],
  }
}

const DataEmitter = Blits.Component('DataEmitter', {
  components: {
    List,
  },
  template: `
    <Element>
      <Text content="Emitter Component" font="raleway" maxwidth="960" align="center" y="150" />
      <List :data="$data" x="300" y="200" />
    </Element>
  `,
  state() {
    return {
      buttons: [
        { symbol: '+', operation: 'emitter-add' },
        { symbol: '-', operation: 'emitter-remove' },
      ],
      data: [],
      obj: {
        a: 'one',
      },
    }
  },
  hooks: {
    ready() {
      this.data = makeItems(8)
      this.$emit('tech-list', this.data)
    },
  },
})

const DataReceiver = Blits.Component('DataReceiver', {
  components: {
    List,
  },
  template: `
    <Element>
      <Text content="Receiver Component" font="raleway" maxwidth="960" align="center" y="150" />
      <Text content="Current Operation" font="lato" y="250" maxwidth="960" align="center" />
      <Text :content="$operation" font="raleway" maxwidth="960" align="center" y="350" />
      <Element y="400" x="400">
        <Text content="Items Count" font="raleway" />
        <Text :content="$size" font="lato" x="200" />
      </Element>
    </Element>
  `,
  state() {
    return {
      operation: 'Pop',
      size: 0,
    }
  },
  hooks: {
    init() {
      // The main tech-list data receiver from Data Provider
      this.$listen('tech-list', (list) => {
        this.size = list.length
        this.$setInterval(() => {
          this.operation === 'Pop' ? list.pop() : list.push(makeItem())
          this.operation = list.length == 0 ? 'Add' : list.length == 10 ? 'Pop' : this.operation
          this.size = list.length
        }, 500)
      })
    },
  },
})

const refEmits = Blits.Component('RefEmits', {
  components: {
    DataEmitter,
    DataReceiver,
  },
  template: `
    <Element>
      <Text
        content="Reflecting Changes in Parent via Emitted Reference: A Reactive Shared State Demo"
        font="lato"
        size="40"
        maxwidth="1920"
        align="center"
        y="50"
      />
      <DataEmitter ref="emitter" />
      <DataReceiver ref="receiver" x="960" />
    
      <Element src="assets/arrow.png" x="1770" rotation="90" y="480" />
    </Element>
  `,
  input: {
    right() {
      this.$router.to('/examples/non-ref-emits')
    },
  },
})

const NonRefDataEmitter = Blits.Component('DataEmitter', {
  components: {
    List,
  },
  template: `
    <Element>
      <Text content="Emitter Component" font="raleway" maxwidth="960" align="center" y="150" />
      <List :data="$data" x="300" y="200" />
    </Element>
  `,
  state() {
    return {
      data: [],
    }
  },
  hooks: {
    ready() {
      this.data = makeItems(8)
      // emitting events by non reference variant
      this.$emit('tech-list', this.data, false)
    },
  },
})

const NonRefEmits = Blits.Component('RefEmits', {
  components: {
    NonRefDataEmitter,
    DataReceiver,
  },
  template: `
    <Element>
      <Text
        content="Not Reflecting Changes in Parent via No Reference Emit"
        font="lato"
        size="40"
        maxwidth="1920"
        align="center"
        y="50"
      />
      <NonRefDataEmitter ref="emitter" />
      <DataReceiver ref="receiver" x="960" />
      <Element src="assets/arrow.png" rotation="-90" y="480" />
    </Element>
  `,
  input: {
    left() {
      this.$router.to('/examples/ref-emits')
    },
  },
})

export const EventRoutes = [
  {
    path: '/examples/ref-emits',
    component: refEmits,
  },
  {
    path: '/examples/non-ref-emits',
    component: NonRefEmits,
  },
]

export default EventRoutes
