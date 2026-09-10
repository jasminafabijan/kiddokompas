import L from 'leaflet'

const TEAM_BALL = '#BDEAC3'
const WATER = '#BDD7EA'
const COURT_MOVEMENT = '#F7C6B7'
const MARTIAL = '#EABDC5'
const DANCE_MUSIC = '#C5BDEA'
const ACTING = '#DFBDEA'
const CHESS = '#EAE3BD'
const NATURE = '#C0E0CF'
const LEARNING = '#BDCBEA'

const GROUP_COLOR: Record<string, string> = {
  football: TEAM_BALL,
  basketball: TEAM_BALL,
  volleyball: TEAM_BALL,
  'mini-sports': TEAM_BALL,
  'kids-sports': TEAM_BALL,
  swimming: WATER,
  tennis: COURT_MOVEMENT,
  'table-tennis': COURT_MOVEMENT,
  athletics: COURT_MOVEMENT,
  gymnastics: COURT_MOVEMENT,
  'developmental-gymnastics': COURT_MOVEMENT,
  'teen-workout': COURT_MOVEMENT,
  karate: MARTIAL,
  boxing: MARTIAL,
  aikido: MARTIAL,
  judo: MARTIAL,
  capoeira: MARTIAL,
  chess: CHESS,
  ballet: DANCE_MUSIC,
  'jazz-ballet': DANCE_MUSIC,
  'dance-sport': DANCE_MUSIC,
  folklore: DANCE_MUSIC,
  dance: DANCE_MUSIC,
  music: DANCE_MUSIC,
  acting: ACTING,
  art: CHESS,
  'creative-writing': ACTING,
  riding: NATURE,
  nature: NATURE,
  languages: LEARNING,
  'learning-support': LEARNING,
  programming: LEARNING,
  science: LEARNING,
  technology: LEARNING,
}

const SVG_ATTRS =
  'viewBox="0 0 24 24" fill="none" stroke="#0b1a3b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"'

const wrap = (inner: string) => `<svg ${SVG_ATTRS} aria-hidden="true">${inner}</svg>`

const ICONS: Record<string, string> = {
  football: wrap(
    '<circle cx="12" cy="12" r="9"/><path d="M12 8.2 14.6 10l-.9 3.2h-3.4L9.4 10z"/><path d="M12 3.2 12 8.2M14.6 10l4.2-2.2M13.7 13.2 16.8 17.4M10.3 13.2 7.2 17.4M9.4 10 5.2 7.8"/>'
  ),
  basketball: wrap(
    '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/><path d="M5.2 5.4c3.6 3.4 3.6 9.8 0 13.2M18.8 5.4c-3.6 3.4-3.6 9.8 0 13.2"/>'
  ),
  volleyball: wrap(
    '<circle cx="12" cy="12" r="9"/><path d="M12 3c-2.2 4.2-2.2 13.6 0 18"/><path d="M4.2 8.2c5.2 1.4 10.4 1.4 15.6 0M4.2 15.8c5.2-1.4 10.4-1.4 15.6 0"/>'
  ),
  tennis: wrap(
    '<circle cx="12" cy="12" r="9"/><path d="M12 3C11 9 9 11 3 12M12 21C13 15 15 13 21 12"/>'
  ),
  'table-tennis': wrap(
    '<ellipse cx="9.4" cy="14.6" rx="5.1" ry="6.3" transform="rotate(-38 9.4 14.6)"/><path d="M6.2 19.4 4.2 21.6"/><circle cx="18.2" cy="6.2" r="2.2"/>'
  ),
  athletics: wrap(
    '<circle cx="14.6" cy="4.8" r="2"/><path d="M8.2 21.2 12.2 12.4 16.8 8.6M12.2 12.4 6.4 11.2M16.8 8.6 20.4 12.8M16.8 8.6 13.4 7.2"/>'
  ),
  karate: wrap(
    '<circle cx="8.6" cy="5.2" r="2.1"/><path d="M9.4 7.4 11.3 13.8M11.3 13.8 10.9 21.5M11.3 13.8 20.5 5.2M9.5 9.2 18.2 3.8M9.3 8.8 3.8 14.6"/>'
  ),
  boxing: wrap(
    '<path d="M9.4 21.8h5.2c1 0 1.8-.8 1.8-1.8v-4.2c2.4-1 4-3.4 4-6.2C20.4 5.6 16.6 3.4 12 3.4S3.6 5.6 3.6 9.6c0 2.8 1.6 5.2 4 6.2V20c0 1 .8 1.8 1.8 1.8z"/><path d="M3.8 11.2c-1.6.4-2.4 1.8-2.4 3.2 0 1.4 1.2 2.6 2.6 2.6"/><path d="M10.2 17.6h3.6M10.2 19.6h3.6"/>'
  ),
  aikido: `<svg viewBox="0 0 24 24" fill="#0b1a3b" stroke="#0b1a3b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="15" cy="4.8" r="2.15" stroke="none"/><path fill="none" d="M13.6 7.2 11.2 14.1M13.4 7.9 21.3 7.3M13.1 8.2 7.6 6.5 11.3 11.3M11.2 14.1 16.7 16.5 15.4 21.5M11.2 14.1 4.5 21.3"/></svg>`,
  capoeira: `<svg viewBox="0 0 24 24" fill="#0b1a3b" stroke="#0b1a3b" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="16.2" cy="15.6" r="2.1" stroke="none"/><path fill="none" d="M9.8 21.4 12.2 13.2M12.2 13.2 6.8 14.8M12.2 13.2 12.8 7.4M12.8 7.4 6.2 2.8M12.8 7.4 20.8 3.2"/></svg>`,
  chess: wrap(
    '<path d="M12 3.2v3.2M10.4 4.8h3.2"/><path d="M8.4 7.4h7.2v2H8.4z"/><path d="M9.2 9.4 8.2 17.8h7.6L14.8 9.4"/><path d="M6.8 17.8h10.4v2.4H6.8z"/>'
  ),
  swimming: wrap(
    '<path d="M3 17.2c1.6-1.2 3.2-1.2 4.8 0s3.2 1.2 4.8 0 3.2-1.2 4.8 0 3.2 1.2 4.8 0"/><circle cx="16" cy="6.4" r="2"/><path d="M5.5 13.5 11 12l3.6-3.4M14.2 11.2 18 13.4"/>'
  ),
  'mini-sports': wrap(
    '<circle cx="10.2" cy="5" r="2.1"/><path d="M6.6 21.2 10.2 11.4l3.6 9.8M6.4 13.6h7.6"/><circle cx="17.4" cy="17.6" r="2.6"/>'
  ),
  'kids-sports': wrap(
    '<circle cx="12" cy="5.2" r="2"/><path d="M4.8 8.6 12 11.6 19.2 8.6M12 11.6V14.8M6.6 21.2 12 14.8 17.4 21.2"/>'
  ),
  'developmental-gymnastics': wrap(
    '<circle cx="12" cy="4.8" r="2.1"/><path d="M4.5 11h15M8 21.2 12 11l4 10.2M12 11V8.6"/>'
  ),
  'teen-workout': wrap(
    '<circle cx="12" cy="4.6" r="2"/><path d="M12 7.2v6.2M7.4 21.2 12 13.4 16.6 21.2"/><path d="M5.4 9.6h13.2"/><circle cx="4.6" cy="9.6" r="1.3"/><circle cx="19.4" cy="9.6" r="1.3"/>'
  ),
  riding: `<svg viewBox="0 0 24 24" fill="none" stroke="#0b1a3b" stroke-width="1.45" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="13" cy="2.3" r="1.9"/><path d="M13 4.3V10.2"/><path d="M13 6.5 8 9.5"/><path d="M13 10.2 15.6 12.5V16.6"/><path d="M5.4 7 4.4 5.3"/><path d="M7.2 8.6C5.6 5.5 2.1 6 1.5 9.1 1.1 11 2.8 12.3 5.5 11.6 6.7 11.3 7.3 10 7.2 8.6"/><path d="M7.2 8.6C9.8 9.8 12.6 10.2 15.2 10.2H19.8"/><path d="M19.8 10.2Q22.2 11.6 21.3 15.6"/><path d="M4 14.8 3 18.4 2.5 22.4"/><path d="M8.6 14.2 9.2 22.5"/><path d="M13.5 14.2 12.8 22.5"/><path d="M17.4 14.2 18.6 22.3"/></svg>`,
  ballet: wrap(
    '<circle cx="12" cy="4.6" r="2"/><path d="M12 7.2v5M12 12.2V21.2M12 12.2 8 14.8 11.2 17.4M12 12.2 5.8 8.8M12 12.2 19 7.6"/>'
  ),
  'jazz-ballet': wrap(
    '<circle cx="12" cy="4.6" r="2"/><path d="M12 7.2v5M8.5 21.2 12 12.2l2 4.2 2.8 4.8M12 12.2 5.8 8.8M12 12.2 19 7.6"/>'
  ),
  'dance-sport': wrap(
    '<circle cx="8.6" cy="5" r="1.8"/><circle cx="15.8" cy="5.4" r="1.8"/><path d="M8.6 7.4v5.2L6 21.2M8.6 12.6l4.2 2M15.8 7.8v4.6l3 8.8M15.8 12.4l-3 2.2"/>'
  ),
  folklore: wrap(
    '<circle cx="12" cy="4.8" r="2"/><path d="M12 7.4v3.2M6 21c1.8-6.2 3.2-8.8 6-10.6C14.8 12.2 16.2 14.8 18 21"/><path d="M8.2 12.2h7.6"/>'
  ),
  dance: wrap(
    '<circle cx="12" cy="4.6" r="2"/><path d="M12 7.2v5M8.5 21.2 12 12.2l2 4.2 2.8 4.8M12 12.2 5.8 8.8M12 12.2 19 7.6"/>'
  ),
  music: wrap(
    '<path d="M9 18.5a2.5 2.5 0 1 1-1.6-2.3V6.8L19 4.6v9.4"/><circle cx="16.8" cy="16.2" r="2.5"/><path d="M9 10.2 19 8"/>'
  ),
  acting: wrap(
    '<path d="M12.4 4.6C9.4 3.4 4.6 4.8 3.8 8.8c-.6 3.4 1.2 6.4 4.2 7.2"/><path d="M6 8.8q1.2 1.2 2.4 0"/><path d="M5.2 12q1.5-1.6 3 0"/><path d="M14.8 6.2c3.8 0 6.2 3 6.2 6.6 0 4-2.8 7.4-6.2 7.4S8.6 16.8 8.6 12.8c0-3.6 2.4-6.6 6.2-6.6z"/><path d="M12 11.6q1.1-1.2 2.2 0M15.4 11.6q1.1-1.2 2.2 0"/><path d="M11.8 15q3 3 6 0"/>'
  ),
  art: wrap(
    '<path d="M12 3.4c-4.8 0-8.6 3.6-8.6 7.4 0 2.6 1.8 4 3.4 4 1.2 0 1.6-.6 1.6-1.4 0-.6-.4-1.2-.4-2 0-2.6 2.2-4.6 4-4.6s4 2 4 4.6c0 .8-.4 1.4-.4 2 0 .8.4 1.4 1.6 1.4 1.6 0 3.4-1.4 3.4-4 0-3.8-3.8-7.4-8.6-7.4z"/><circle cx="8.2" cy="8.4" r="1"/><circle cx="12" cy="6.6" r="1"/><circle cx="15.8" cy="8.4" r="1"/>'
  ),
  'creative-writing': wrap(
    '<path d="M14 3.8 19.2 9l-9.4 9.4-5.2 1.2 1.2-5.2z"/><path d="M12.2 5.6 18.4 11.8"/><path d="M4.5 20.5h15"/>'
  ),
  languages: wrap(
    '<circle cx="12" cy="12" r="9"/><path d="M3.6 12h16.8M12 3c2.4 3.2 3.6 6.2 3.6 9s-1.2 5.8-3.6 9M12 3c-2.4 3.2-3.6 6.2-3.6 9s1.2 5.8 3.6 9"/>'
  ),
  'learning-support': wrap(
    '<path d="M4.5 19.5V6.2c0-.8.6-1.4 1.4-1.4h5.2c.8 0 1.4.6 1.4 1.4V19.5"/><path d="M12.5 19.5V6.2c0-.8.6-1.4 1.4-1.4h5.2c.8 0 1.4.6 1.4 1.4V19.5"/><path d="M4.5 19.5h15"/>'
  ),
  programming: wrap(
    '<path d="M8.2 6.8 3.8 12l4.4 5.2M15.8 6.8 20.2 12l-4.4 5.2M10.4 18.6 13.6 5.4"/>'
  ),
  science: wrap(
    '<path d="M9.2 3.5h5.6M10.2 3.5v6.4L5.4 19.2A2.2 2.2 0 0 0 7.3 22.5h9.4a2.2 2.2 0 0 0 1.9-3.3L13.8 9.9V3.5"/><path d="M8.6 14.8h6.8"/>'
  ),
  technology: wrap(
    '<rect x="7" y="7" width="10" height="10" rx="1.4"/><path d="M12 3.4v1.8M12 18.8v1.8M3.4 12h1.8M18.8 12h1.8M6.2 6.2l1.3 1.3M16.5 16.5l1.3 1.3M17.8 6.2l-1.3 1.3M7.5 16.5l-1.3 1.3"/>'
  ),
  nature: wrap(
    '<path d="M12 21V11"/><path d="M12 18.2c-4.2 0-7.2-2.6-7.2-6.4C4.8 7 9 5 12 3.5 15 5 19.2 7 19.2 11.8c0 3.8-3 6.4-7.2 6.4z"/>'
  ),
}

const DEFAULT_ICON = wrap('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4" fill="#0b1a3b" stroke="none"/>')

export const getMapCategoryColor = (slug?: string) =>
  (slug && GROUP_COLOR[slug]) || LEARNING

export const getMapCategoryIconSvg = (slug?: string) =>
  (slug && ICONS[slug]) || DEFAULT_ICON

export const getMapCategoryStyle = (slug?: string) => ({
  color: getMapCategoryColor(slug),
  svg: getMapCategoryIconSvg(slug),
})

const pinCache = new Map<string, L.DivIcon>()

export const getCatalogMapPin = (slug?: string) => {
  const { color, svg } = getMapCategoryStyle(slug)
  const key = `${slug ?? 'default'}:${svg}`
  const cached = pinCache.get(key)

  if (cached) {
    return cached
  }

  const icon = L.divIcon({
    className: 'catalog-map-pin-wrap',
    html: `<span class="catalog-map-pin" style="background:${color}">${svg}</span>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    popupAnchor: [0, -18],
  })

  pinCache.set(key, icon)
  return icon
}
