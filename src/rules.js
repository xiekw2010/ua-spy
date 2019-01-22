export const WIN_OS_NAME = {
  5.1: 'XP',
  5.2: 'Server2003',
  6.0: 'Vista',
  6.1: '7',
  6.2: '8',
  6.3: '8.1',
  10.0: '10',
}

export const OS = [
  ['WP_Android', /\bWindows Phone [\d.]+; Android ([\d.]+)/],
  ['WP', /\bWindows Phone (?:OS )?([\d.]+)/],
  ['Android', /\b(?:Android|Adr) ([\d.]+)/],
  ['iOS', /\b(?:iPhone|iPad|iPod)[a-zA-Z ;]+([\d._]+)/],
  ['Windows', /\bWindows NT ([\d.]+)/],
  ['macOS', /\bMacintosh[a-zA-Z ;]+([\d._]+)/],
  ['Linux', /\b(?:X11|Ubuntu|Linux(?= \w+)?);/],
]

// TODO add common app, like tb, alipay
export const APP = [
  ['AliApp', /\bAliApp\((?<name>[\w-]+)\/(?<version>[\d.]+)/],
  ['BBM', /\bBBM\/([\d.]+)/],
  ['Bukalapak', /\bBukalapak\/([\d.]+).*DanaWallet/],
  ['Skywalker', /\bSkywalker\/([\d.]+).*Dana/i],
]

export const SDK = [
  ['DanaKit', /\bDanaKit\/([\d.]+)/i],
  ['DanaWallet', /\bDanaWallet\/([\d.]+)/],
]

export const BROWSER = [
  ['AlipaySDK', /\bAlipaySDK\(.+\/([\d.]+)\)/],
  ['AlipayClient', /\bAlipayClient\/([\d.]+)/],
  ['NebulaSDK', /\bNebulaSDK\/([\d.]+)/],
  ['WindVane', /\bWindVane\/([\d.]+)/],
  ['UC', /\bUC?Browser\/([\d.]+)/],
  ['XiaoMi', /\bMiuiBrowser\/([\d.]+)/],
  ['IEMobile', /\bIEMobile\/(\d+)/],
  ['Edge', /\bEdge\/(\d+)/],
  ['IE', /\b(?:MSIE |Trident\/\d+.+rv:)(\d+)/],
  ['Opera', /\bOPR\/(\d+)/],
  ['Yandex', /\bYaBrowser\/(\d+\.\d+\.\d+)/],
  ['Firefox', /\b(?:Firefox|FxiOS)\/?(\d+)/],
  ['Chrome', /\b(?:Chrome|CriOS|CrMo)\/(\d+)/],
  ['Safari', /\b(?:iPhone|iPad|iPod)[a-zA-Z ;]+([\d._]+)/],
]

export const DEVICE = [
  ['PC', /\bWindows NT\b/],
  ['Mac', /\bMacintosh\b/],
  ['iPod', /\biPod[ \w]*;/],
  ['iPhone', /\biPhone;[a-zA-Z ;]+([\d_]+)/],
  ['iPad', /\biPad;[a-zA-Z ;]+([\d_]+)/],
  ['Samsung', /\b(SAMSUNG|S(CH|GH|PH|EC|AM|HV|HW|M)-|GT)-?([A-Za-z0-9]+)/],
  ['Sony', /\b(C\d{4}|D\d{4}|E\d{4}|F\d{4}|L39h|m2|SO-04G)(?= Build)/],
  ['Motorola', /\b(Moto ?\w+|XT\d+|C117)/],
  ['LG', /\b(LG-?\w+|P500|L70)/],
  ['Asus', /\b(ASUS[ _]?\w+|P01Y)/],
  // eslint-disable-next-line
  ['Xiaomi', /; *((MI|HM|MI-ONE|Redmi|Mi|2014\d{3}|wt88047|A1603)[ -]?(NOTE |Note )?[^;/]*) (Build|MIUI)/],
  ['HTC', /\bHTC ?\w+/],
  ['Nexus', /\bNexus ?(\w+)\b/],
  ['OPPO', /\b(OPPO|R7g|X90\d{2}|A\d{2}[a-z]|CPH\d{4}|F1f|A1601|R1001)/],
  ['vivo', /\b([Vv]ivo|X7)[ _](\w+)/],
  ['Huawei', /\b(Huawei|Honor|HW-|L51)/i],
  ['Digma', /\bPlane\b/],
  ['Lenovo', /\bLenovo[ _-]([A-Za-z0-9]+)/],
  ['Micromax', /\bMicromax\b/],
  ['Prestigio', /\b(PMP|PAP|PMT|PSP)\d+\w+[);/ ]/],
  ['Fly', /\b(Fly|FS505)\b/],
  ['ZTE', /\bZTE\b/],
  ['Lumia', /\bLumia\b/],
  ['Nokia', /\b(NOKIA|TA-\d{4})/i],
  ['BlackBerry', /\b(BlackBerry|BB\d+|RIM|BBC100-1)/],
  ['Coolpad', /\bCoolpad[ _]([^;/]+)/],
  ['Nubia', /\b(NX597J)/],
  ['Andromax', /\b([A-Z]\d{2}[A-Z]\d[A-Z])/],
  ['Infinix', /\b(X572-LTE|X572|Zero 4|Infinix[ -]?\w+)/i],
  ['ALCATEL', /\b(ONETOUCH|5059|FL02)/],
  ['Google', /\b(Pixel 2 XL)/],
  ['OnePlus', /\b(A\d0\d0)/],
  ['Evercoss', /\b(M50 STAR|A\d{2}A)/],
  ['Advan', /\b(i\d[A-Z]|S\d[A-Z])/],
  ['Acer', /\b(Z520|T012)/],
  ['Gionee', /\b(P8M)/],
  ['Letv', /\b(X820)/],
  ['HOMTOM', /\b(HT20)/],
  ['Lava', /\b(A76|iris ?\w+)/],
  ['Himax', /\b(M23s)/],
  ['Meizu', /\b(MEIZU_\w+)/],
  ['LUNA', /\b(LUNA \w+)/],
  ['Harga', /\b(POLYTRON ?\w+|SH825Wi|E1C_3G)/],
  ['Hisense', /\b(L697)/],
]

export const defaults = {
  name: 'na',
  version: '-',
}
