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
  webos: {
    test() {
      return navigator.userAgent.indexOf('WebOS') > -1 || queryParam('keymapping') === 'webos'
    },
    mapping: {
      19: 'pause',
      33: 'channelUp',
      34: 'channelDown',
      412: 'rewind',
      413: 'stop',
      415: 'play',
      417: 'fastForward',
      461: 'back',
    },
  },
  tizen: {
    test() {
      return navigator.userAgent.indexOf('Tizen') > -1 || queryParam('keymapping') === 'tizen'
    },
    mapping: {
      10009: 'back',
      10252: 'playPause',
      19: 'pause',
      412: 'rewind',
      413: 'stop',
      415: 'play',
      417: 'fastForward',
      427: 'channelUp',
      428: 'channelDown',
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
