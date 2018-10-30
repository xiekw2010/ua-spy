import { DEVICE, WIN_OS_NAME, OS, BROWSER, defaults, APP, SDK } from './rules'

const detector = (rules, handler) => (userAgent) => {
  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i]
    try {
      const [name, reg] = rule
      const matches = userAgent.match(reg)
      const res = handler && handler(matches, name)
      if (res) {
        return res
      }
    } catch (err) {
      continue
    }
  }

  return defaults
}

const defaultHandler = (matches, name) => {
  if (matches && matches.length > 1) {
    let version = matches[1]
    if (version.indexOf('_') > -1) {
      version = version.split('_').join('.')
    }
    return {
      name: name,
      version,
    }
  }
  return null
}

const mergePatches = (patches, origin) => {
  if (patches && patches.length) {
    return patches.concat(origin)
  }
  return origin
}

export const detectOS = patches => detector(mergePatches(patches, OS), (matches, name) => {
  if (matches && matches.length) {
    let version = matches[1]

    if (name === 'Windows') {
      version = WIN_OS_NAME[version] || version
    }
    if (version.indexOf('_') > -1) {
      version = version.split('_').join('.')
    }
    return {
      name,
      version,
    }
  }
  return null
})

export const detectApp = patches => detector(mergePatches(patches, APP), defaultHandler)

export const detectBrowser = patches => detector(mergePatches(patches, BROWSER), defaultHandler)

export const detectDevice = patches => detector(mergePatches(patches, DEVICE), (matches, name) => {
  let v
  if (matches && matches.length > 0) {
    if (name === 'Samsung') {
      v = matches[3]
    } else if (name === 'iPhone') {
      v = matches[1] && matches[1].replace(/_/g, '.')
    } else if (name === 'vivo') {
      v = matches[2]
    } else {
      v = matches[1]
    }

    return {
      name: name,
      version: v || defaults.version,
    }
  }
  return null
})

export const detectSDK = patches => detector(mergePatches(patches, SDK), defaultHandler)

export const detectAll = (patches = {}) => (ua = '') => {
  const { osPatches, appPatches, browserPatches, devicePatches, sdkPatches } = patches
  return {
    os: detectOS(osPatches)(ua),
    app: detectApp(appPatches)(ua),
    browser: detectBrowser(browserPatches)(ua),
    device: detectDevice(devicePatches)(ua),
    sdk: detectSDK(sdkPatches)(ua),
  }
}
