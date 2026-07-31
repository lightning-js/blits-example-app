import Blits from '@lightningjs/blits'

export default Blits.Component('Trending', {
  template: `
    <Element w="380" h="800">
      <Text content="Trending" size="30" x="20" y="30" color="#f97316" />
      <Text content="Page 3 of 3" size="14" x="20" y="68" color="#64748b" />
      <Element y="100" x="20" w="340" h="2" color="#ffffff40" />
      <Element y="120" x="20">
        <Text content="Popular this week" size="16" color="#64748b" />
        <Element y="30">
          <Text content="1. Retro Racer" size="20" color="#4ade80" />
          <Text y="25" content="+250% players" size="15" color="#94a3b8" />
        </Element>
        <Element y="80">
          <Text content="2. Space Quest" size="20" color="#4ade80" />
          <Text y="25" content="+180% players" size="15" color="#94a3b8" />
        </Element>
        <Element y="130">
          <Text content="3. Puzzle Master" size="20" color="#fbbf24" />
          <Text y="25" content="Steady popularity" size="15" color="#94a3b8" />
        </Element>
        <Element y="180">
          <Text content="4. Word Finder" size="20" color="#f87171" />
          <Text y="25" content="-10% players" size="15" color="#94a3b8" />
        </Element>
        <Element y="230">
          <Text content="5. Dungeon Crawl" size="20" color="#4ade80" />
          <Text y="25" content="+95% players" size="15" color="#94a3b8" />
        </Element>
      </Element>
    </Element>
  `,
})
