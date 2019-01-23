import { detectAll } from '../../src/index'
import assert from 'assert'

const BBM_IPHONE_UA = 'BBM/300.0.155.124 Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 AppContainer/1.2.3.0 DanaKit/1.4.0.19'
const BBM_ANDROID_UA = 'BBM/3.3.15.225 Mozilla/5.0 (Linux; Android 7.1.2; Redmi Note 5A Build/N2G47H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/64.0.3282.137 Mobile Safari/537.36 AppContainer/1.4.3.1 DanaKit/1.4.3.1 Lang/id-ID'
const BUKALAPAK_ANDROID_UA = 'Bukalapak/1.3.0 Dalvik/2.1.0 (Linux; U; Android 6.0; Google Nexus 5 - 6.0.0 - API 23 - 1080x1920 Build/MRA58K)AppContainer/1.6.0.4 DanaWallet/1.5.4.15'
const WEB_IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_3 like Mac OS X) AppleWebKit/603.3.8 (KHTML, like Gecko) Mobile/14G60'
const WEB_ANDROID_UA = 'Mozilla/5.0 (Linux; Android 7.0; SM-J730G Build/NRD90M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/65.0.3325.109 Mobile Safari/537.36'
const SKYWALKER_IPHONE_UA = 'Skywalker/1.0.0 Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 AppContainer/1.3.0.9 DanaKit/1.6.0.12'
const CUSTOM_UA = 'TB/1.3.0 YEJIDEVICE1.3 Mozilla/5.0 YOURKIT 33.44.55.66(iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15F79 AppContainer/1.3.0.9 DanaKit/1.6.0.12 MYOS 33.3 MYUC 11_33_55'
const WINDOWS_UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'
const VIVO_UA = 'Mozilla/5.0 (Linux; Android 5.1.1; vivo X6S A Build/LMY47V; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/57.0.2987.132 MQQBrowser/6.2 TBS/044207 Mobile Safari/537.36 MicroMessenger/6.7.3.1340(0x26070332) NetType/4G Language/zh_CN Process/tools'
const LZD_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C101 AliApp(LA/6.99.999) WindVane/8.4.2 750x1334 TestName(tname_1-1/99.9)'
const LZD_UA2 = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/16C101 aliapP(LA/6.99.999) WindVane/8.4.2 750x1334'
const TU_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1_2 like Mac OS X; zh-CN) AppleWebKit/537.51.1 (KHTML, like Gecko) Mobile/16C101 UCBrowser/12.2.5.1130 Mobile AliApp(TUnionSDK/0.1.20.3)'

const myDetect = detectAll({
  osPatches: [
    {},
    ['MYOS', /\bMYOS ([\d.]+)/],
  ],
  appPatches: [
    ['TAOBAO', /\bTB\/([\d.]+)/],
    ['Lazada', /\bAliApp\(LA\/([\d.]+)/i],
  ],
  browserPatches: [
    ['UC', /\bMYUC ([\d._]+)/],
  ],
  devicePatches: [
    ['YEJIDEVICE', /\bYEJIDEVICE ?([\d.]+)/],
  ],
  sdkPatches: [
    ['YOURKIT', /\bYOURKIT ?([\d.]+)/],
    ['any', /\bTestName\((?<name>[\w_-]+)\/(?<version>[\d.]+)/],
  ],
})

describe('user-agent detector', function () {
  it(`detect BBM iphone ua ${BBM_IPHONE_UA}`, function () {
    const all = myDetect(BBM_IPHONE_UA)

    assert(all.os.name === 'iOS')
    assert(all.os.version === '11.4')

    assert(all.app.name === 'BBM')
    assert(all.app.version === '300.0.155.124')

    assert(all.browser.name === 'Safari')
    assert(all.browser.version === '11.4')

    assert(all.device.name === 'iPhone')
    assert(all.device.version === '11.4')
  })

  it(`detect Skywalker iphone ua ${SKYWALKER_IPHONE_UA}`, function () {
    const all = myDetect(SKYWALKER_IPHONE_UA)

    assert(all.os.name === 'iOS')
    assert(all.os.version === '11.4')

    assert(all.app.name === 'Skywalker')
    assert(all.app.version === '1.0.0')

    assert(all.browser.name === 'Safari')
    assert(all.browser.version === '11.4')

    assert(all.device.name === 'iPhone')
    assert(all.device.version === '11.4')
  })

  it(`detect BBM android ua ${BBM_ANDROID_UA}`, function () {
    const all = myDetect(BBM_ANDROID_UA)

    assert(all.os.name === 'Android')
    assert(all.os.version === '7.1.2')

    assert(all.app.name === 'BBM')
    assert(all.app.version === '3.3.15.225')

    assert(all.browser.name === 'Chrome')
    assert(all.browser.version === '64')

    assert(all.device.name === 'Xiaomi')
    assert(all.device.version === 'Redmi Note 5A')

    assert(all.sdk.name === 'DanaKit')
    assert(all.sdk.version === '1.4.3.1')
  })

  it(`detect BUKALAPAK android ua ${BUKALAPAK_ANDROID_UA}`, function () {
    const all = myDetect(BUKALAPAK_ANDROID_UA)

    assert(all.os.name === 'Android')
    assert(all.os.version === '6.0')

    assert(all.app.name === 'Bukalapak')
    assert(all.app.version === '1.3.0')

    assert(all.browser.name === 'na')
    assert(all.browser.version === '-')

    assert(all.device.name === 'Nexus')
    assert(all.device.version === '5')

    assert(all.sdk.name === 'DanaWallet')
    assert(all.sdk.version === '1.5.4.15')
  })

  it(`detect NORMAL web iphone ua ${WEB_IPHONE_UA}`, function () {
    const all = myDetect(WEB_IPHONE_UA)

    assert(all.os.name === 'iOS')
    assert(all.os.version === '10.3.3')

    assert(all.app.name === 'na')
    assert(all.app.version === '-')

    assert(all.browser.name === 'Safari')
    assert(all.browser.version === '10.3.3')

    assert(all.device.name === 'iPhone')
    assert(all.device.version === '10.3.3')
  })

  it(`detect NORMAL web android ua ${WEB_ANDROID_UA}`, function () {
    const all = myDetect(WEB_ANDROID_UA)

    assert(all.os.name === 'Android')
    assert(all.os.version === '7.0')

    assert(all.app.name === 'na')
    assert(all.app.version === '-')

    assert(all.browser.name === 'Chrome')
    assert(all.browser.version === '65')

    assert(all.device.name === 'Samsung')
    assert(all.device.version === 'J730G')
  })

  it(`detect patch rules ua ${CUSTOM_UA}`, function () {
    const all = myDetect(CUSTOM_UA)

    assert(all.os.name === 'MYOS')
    assert(all.os.version === '33.3')

    assert(all.app.name === 'TAOBAO')
    assert(all.app.version === '1.3.0')

    assert(all.browser.name === 'UC')
    assert(all.browser.version === '11.33.55')

    assert(all.device.name === 'YEJIDEVICE')
    assert(all.device.version === '1.3')

    assert(all.sdk.name === 'YOURKIT')
    assert(all.sdk.version === '33.44.55.66')
  })

  it(`detect NORMAL without config ${WEB_ANDROID_UA}`, function () {
    const all = detectAll()(WEB_ANDROID_UA)

    assert(all.os.name === 'Android')
    assert(all.os.version === '7.0')

    assert(all.app.name === 'na')
    assert(all.app.version === '-')

    assert(all.browser.name === 'Chrome')
    assert(all.browser.version === '65')

    assert(all.device.name === 'Samsung')
    assert(all.device.version === 'J730G')
  })

  it('detect windows UA', function () {
    const all = detectAll()(WINDOWS_UA)
    assert(all.os.name === 'Windows')
    assert(all.os.version === '10.0')

    assert(all.browser.name === 'Chrome')
    assert(all.browser.version === '60')
  })

  it('detect vivo UA', function () {
    const all = detectAll()(VIVO_UA)
    assert(all.os.name === 'Android')
    assert(all.os.version === '5.1.1')

    assert(all.browser.name === 'Chrome')
    assert(all.browser.version === '57')
    assert(all.device.name === 'vivo')
    assert(all.device.version === 'X6S')
  })

  it('detect test empty UA', function () {
    const all = detectAll()()
    assert(all.os.name === 'na')
    assert(all.os.version === '-')
  })

  it('detect lzd app', function () {
    const all = myDetect(LZD_UA)
    assert(all.app.name === 'Lazada')
    assert(all.app.version === '6.99.999')

    assert(all.sdk.name === 'tname_1-1')
    assert(all.sdk.version === '99.9')

    const pure = detectAll()(LZD_UA)
    assert(pure.app.name === 'LA')
    assert(pure.app.version === '6.99.999')

    const pure2 = detectAll()(LZD_UA2)
    assert(pure2.app.name === 'LA')
    assert(pure2.app.version === '6.99.999')
  })

  it('detect tunion app', function () {
    const all = myDetect(TU_UA)
    assert(all.app.name === 'TUnionSDK')
    assert(all.app.version === '0.1.20.3')

    assert(all.browser.name === 'UC')
    assert(all.browser.version === '12.2.5.1130')
  })
})
