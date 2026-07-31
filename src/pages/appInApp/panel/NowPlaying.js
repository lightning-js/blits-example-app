import Blits from '@lightningjs/blits'

export default Blits.Component('NowPlaying', {
  template: `
    <Element w="380" h="800">
      <Text content="Now Playing" size="30" x="20" y="30" color="#3b82f6" />
      <Text content="Page 1 of 3" size="14" x="20" y="68" color="#64748b" />
      <Element y="100" x="20" w="340" h="2" color="#ffffff40" />
      <Element y="120" x="20">
        <Text content="The Dark Knight" size="24" color="#e2e8f0" />
        <Text y="35" content="Runtime: 2h 32m" size="17" color="#94a3b8" />
        <Text y="60" content="Rating: 9.0/10" size="17" color="#fbbf24" />
        <Text y="100" content="Director: Christopher Nolan" size="17" color="#94a3b8" />
        <Text y="125" content="Genre: Action, Drama" size="17" color="#94a3b8" />
      </Element>
      <Element y="290" x="20">
        <Text content="Up Next" size="20" color="#64748b" />
        <Text y="30" content="Inception" size="17" color="#94a3b8" />
        <Text y="55" content="Interstellar" size="17" color="#94a3b8" />
        <Text y="80" content="Tenet" size="17" color="#94a3b8" />
      </Element>
    </Element>
  `,
})
