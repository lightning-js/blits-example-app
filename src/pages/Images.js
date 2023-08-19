import Bolt from '@lightningjs/bolt'

const images = [
  'https://images.unsplash.com/photo-1690360994204-3d10cc73a08d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80',
  'https://images.unsplash.com/photo-1582971103098-bfc707d2ad92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80',
]

export default Bolt.Component('Images', {
  template: /*html*/ `
    <Element>
      <!-- local image -->
      <Image src="assets/lightningbolt.jpg" w="428" h="234" x="100" y="100" />

      <!-- remote image -->
      <Image
        src="https://images.unsplash.com/photo-1611148799269-63df34f63f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=428&q=80"
        w="428" h="234" x="100" y="400"
      />

      <Image
        :src="$image"
        w="428" h="234" x="100" y="700"
        :effects="[$shader('radius', {radius: 10})]"
      />

      <!-- local image with color -->
      <Image src="assets/lightningbolt.jpg" w="428" h="234" x="600" y="100" color="gold" />

    </Element>`,
  state() {
    return {
      image: images[0],
    }
  },
  hooks: {
    render() {
      setInterval(() => {
        this.image = this.image === images[0] ? images[1] : images[0]
      }, 2000)
    },
  },
})
