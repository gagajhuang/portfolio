import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const tokensDir = path.join(root, 'tokens')
const scssPath  = path.join(root, 'assets/css/abstracts/_variables.scss')

const base       = JSON.parse(fs.readFileSync(path.join(tokensDir, 'Base.json'),       'utf8'))
const functional = JSON.parse(fs.readFileSync(path.join(tokensDir, 'Functional.json'), 'utf8'))
const rwd        = JSON.parse(fs.readFileSync(path.join(tokensDir, 'RWD.json'),        'utf8'))

const hex = val => (typeof val === 'object' && val?.hex ? val.hex.toLowerCase() : String(val))
const px  = val => `${val}px`

// ── 保留固定 header（//以下為 figma token 以上的所有內容）────────────────────
const MARKER = '//以下為 figma token'
const existing = fs.existsSync(scssPath) ? fs.readFileSync(scssPath, 'utf8') : ''
const markerIdx = existing.indexOf(MARKER)
const fixedHeader = markerIdx !== -1
  ? existing.slice(0, markerIdx + MARKER.length)
  : ''

// ── 建立 base color 查找表（用於 functional color 生成變數引用）────────────────
const colorVarMap = {}
for (const [key, token] of Object.entries(base.Color.Gray)) {
  colorVarMap[hex(token.$value)] = `$color-${key.toLowerCase()}`
}
for (const [key, token] of Object.entries(base.Color.Primary)) {
  colorVarMap[hex(token.$value)] = `$color-${key.toLowerCase()}`
}
colorVarMap[hex(base.Color.White.$value)] = '$color-white'
colorVarMap[hex(base.Color.Black.$value)] = '$color-black'
colorVarMap[hex(base.Color.Accent.Red.$value)]    = '$color-accent-red'
colorVarMap[hex(base.Color.Accent.Orange.$value)]  = '$color-accent-orange'
colorVarMap[hex(base.Color.Secondary.Blue.$value)] = '$color-secondary-blue'

const colorRef = val => colorVarMap[hex(val)] ?? hex(val)

// ── 生成 tokens ───────────────────────────────────────────────────────────
const lines = []
const section = label => lines.push('', `// ${label}`)

// Layout (RWD.json)
section('Layout')
lines.push(`$grid-margin: ${px(rwd.Device.Grid.Margin.$value)};`)
lines.push(`$grid-gutter: ${px(rwd.Device.Grid.Gutter.$value)};`)
lines.push(`$page-width:  ${px(rwd.Device.Breakpoint.$value)};`)

// Colors — base palette (Base.json)
section('Colors — base palette')
lines.push(`$color-white: ${hex(base.Color.White.$value)};`)
lines.push(`$color-black: ${hex(base.Color.Black.$value)};`)
lines.push('')
lines.push('// Gray')
for (const [key, token] of Object.entries(base.Color.Gray)) {
  lines.push(`$color-${key.toLowerCase()}: ${hex(token.$value)};`)
}
lines.push('')
lines.push('// Primary blue')
for (const [key, token] of Object.entries(base.Color.Primary)) {
  lines.push(`$color-${key.toLowerCase()}: ${hex(token.$value)};`)
}
lines.push('')
lines.push(`$color-secondary-blue: ${hex(base.Color.Secondary.Blue.$value)};`)
lines.push(`$color-accent-red:     ${hex(base.Color.Accent.Red.$value)};`)
lines.push(`$color-accent-orange:  ${hex(base.Color.Accent.Orange.$value)};`)

// Colors — functional (Functional.json) — 自動轉成變數引用
section('Colors — functional')
const fn = functional.Color.Normal
lines.push(`$color-primary:   ${colorRef(fn.Primary.$value)};`)
lines.push(`$color-secondary: ${colorRef(fn.Secondary.$value)};`)
lines.push(`$color-tertiary:  ${colorRef(fn.Tertiary.$value)};`)
lines.push(`$color-divider:   ${colorRef(fn.Divider.$value)};`)
lines.push(`$color-bg:        ${colorRef(fn.Bg.$value)};`)
lines.push('')
lines.push(`$color-btn-disabled:        ${colorRef(functional.Button.Disabled.$value)};`)
lines.push(`$color-btn-disabled-border: ${colorRef(functional.Button.DisabledBorder.$value)};`)
lines.push('')
lines.push(`$color-tabs-active:      ${colorRef(functional.Tabs.ActiveBg.$value)};`)
lines.push(`$color-tabs-active-line: ${colorRef(functional.Tabs.AcriveLine.$value)};`)

// Typography (RWD.json)
section('Typography')
lines.push(`$font-family: '${base.Typography.Family.$value}', 'Roboto', sans-serif;`)
lines.push('')
const rwdSizes = rwd.Typography.Size
const fontSizeMap = [
  ['xs',   '12'],
  ['base', '14'],
  ['md',   '16'],
  ['lg',   '18'],
  ['xl',   '20'],
  ['2xl',  '28'],
  ['3xl',  '32'],
  ['4xl',  '44'],
]
for (const [name, key] of fontSizeMap) {
  lines.push(`$font-size-${name}: ${px(rwdSizes[key].$value)};`)
}

// Spacing (RWD.json)
section('Spacing')
const spacingOrder = ['Tiny-4', 'XXS-8', 'XS-12', 'S-16', 'M-20', 'L-24', 'XL-28', '2XL-32', '3XL-36', '4XL-40', '5XL-48']
for (const key of spacingOrder) {
  const token = rwd.Spacing[key]
  if (token) lines.push(`$spacing-${token.$value}: ${px(token.$value)};`)
}
lines.push(`$spacing-section-80:  ${px(rwd.Spacing.Section.Spacing80.$value)};`)
lines.push(`$spacing-section-100: ${px(rwd.Spacing.Section.Spacing100.$value)};`)

// Radius (RWD.json)
section('Radius')
lines.push(`$radius-pill: ${px(rwd.Radius.rounded.$value)};`)
lines.push(`$radius-xl:   ${px(rwd.Radius.xl.$value)};`)
lines.push(`$radius-m:    ${px(rwd.Radius.m.$value)};`)
lines.push(`$radius-card: ${px(rwd.Radius.xs.$value)};`)
lines.push(`$radius-sm:   ${px(rwd.Radius.xxs.$value)};`)

// ── 合併輸出 ──────────────────────────────────────────────────────────────
const tokenBlock = lines.join('\n').replace(/^\n/, '')
const output = fixedHeader
  ? `${fixedHeader}\n${tokenBlock}\n`
  : `${tokenBlock}\n`

fs.writeFileSync(scssPath, output)
console.log('✓  _variables.scss generated (fixed header preserved)')
