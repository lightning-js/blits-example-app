const queryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search)
  return urlParams.get(param)
}

const keymapping = {
  sky: {
    test() {
      return navigator.userAgent.indexOf('WPE Sky') > -1 || queryParam('keymapping') === 'sky'
    },
    mapping: {
      Escape: 'back',
      27: 'back',
    },
  },
}

export default () => {
  let mapping = {}

  Object.keys(keymapping).forEach((target) => {
    if (
      keymapping[target].test &&
      typeof keymapping[target].test === 'function' &&
      keymapping[target].test() === true
    ) {
      mapping = keymapping[target].mapping
      return
    }
  })

  return mapping
}
