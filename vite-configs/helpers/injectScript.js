const injectScriptPlugin = (script) => {
  return {
    name: 'inject-scrip',
    transformIndexHtml: {
      enforce: 'post',
      order: 'post',
      handler(html) {
        const closingBodyTagPosition = html.lastIndexOf('</body>')

        if (closingBodyTagPosition === -1) {
          throw new Error('Closing </body> tag not found in the HTML string.')
        }

        return (
          html.substring(0, closingBodyTagPosition) +
          script +
          html.substring(closingBodyTagPosition)
        )
      },
    },
  }
}

export default injectScriptPlugin
