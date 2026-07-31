import Blits from '@lightningjs/blits'

export default Blits.Component('Recommendations', {
  props: {
    subtitle: {
      type: String,
      default: '',
    },
  },
  template: `
    <Element w="380" h="800">
      <Text content="Recommendations" size="30" x="20" y="30" color="#a855f7" />
      <Text content="Page 2 of 3" size="14" x="20" y="68" color="#64748b" />
      <Text :content="$subtitle || 'Based on your history'" size="14" x="20" y="92" color="#86efac" />
      <Element y="120" x="20" w="340" h="2" color="#ffffff40" />
      <Element y="140" x="20">
        <Text content="Based on your history" size="16" color="#64748b" />
        <Element y="30">
          <Text content="1. Breaking Bad" size="20" color="#e2e8f0" />
          <Text y="25" content="Drama - 5 Seasons" size="15" color="#94a3b8" />
        </Element>
        <Element y="80">
          <Text content="2. Better Call Saul" size="20" color="#e2e8f0" />
          <Text y="25" content="Drama - 6 Seasons" size="15" color="#94a3b8" />
        </Element>
        <Element y="130">
          <Text content="3. The Wire" size="20" color="#e2e8f0" />
          <Text y="25" content="Crime - 5 Seasons" size="15" color="#94a3b8" />
        </Element>
        <Element y="180">
          <Text content="4. Stranger Things" size="20" color="#e2e8f0" />
          <Text y="25" content="Sci-Fi - 4 Seasons" size="15" color="#94a3b8" />
        </Element>
        <Element y="230">
          <Text content="5. True Detective" size="20" color="#e2e8f0" />
          <Text y="25" content="Thriller - 4 Seasons" size="15" color="#94a3b8" />
        </Element>
      </Element>
    </Element>
  `,
})
