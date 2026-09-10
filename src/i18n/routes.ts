import { getCategorySlug, localizeCategorySlug } from '../data/categories'
import { getLangFromPath } from './helpers'
import type { Lang } from './types'

/** Live Serbian paths. Keep these unchanged so existing URLs keep working. */
export const PAGE_PATHS = {
  home: { sr: '/', en: '/en' },
  about: { sr: '/o-nama', en: '/en/about' },
  contact: { sr: '/kontakt', en: '/en/contact' },
  privacy: { sr: '/politika-privatnosti', en: '/en/privacy-policy' },
  search: { sr: '/pretraga', en: '/en/search' },
  map: { sr: '/mapa', en: '/en/map' },
} as const

export const PATH_SEGMENT = {
  category: { sr: 'kategorija', en: 'categories' },
  school: { sr: 'skola', en: 'schools' },
} as const

export const HASH = {
  categories: { sr: 'kategorije', en: 'categories' },
} as const

/** DOM id for the home categories section. URL hashes stay localized. */
export const CATEGORIES_SECTION_ID = 'categories'

export const QUERY = {
  category: { sr: 'kategorija', en: 'category' },
  location: { sr: 'lokacija', en: 'location' },
} as const

export const CATEGORY_ROUTE_PATH = {
  sr: `/${PATH_SEGMENT.category.sr}/:slug`,
  en: `/en/${PATH_SEGMENT.category.en}/:slug`,
} as const

export const SCHOOL_ROUTE_PATH = {
  sr: `/${PATH_SEGMENT.school.sr}/:slug`,
  en: `/en/${PATH_SEGMENT.school.en}/:slug`,
} as const

export type PageName = keyof typeof PAGE_PATHS

export const isHomePath = (pathname: string) =>
  pathname === PAGE_PATHS.home.sr || pathname === PAGE_PATHS.home.en

export const isCategoriesHash = (hash: string) => {
  const value = hash.replace(/^#/, '')
  return value === HASH.categories.sr || value === HASH.categories.en
}

export const getCategoryQueryValue = (searchParams: URLSearchParams) =>
  searchParams.get(QUERY.category.sr) ?? searchParams.get(QUERY.category.en)

export const getLocationQueryValue = (searchParams: URLSearchParams) =>
  searchParams.get(QUERY.location.sr) ?? searchParams.get(QUERY.location.en)

/** Address index for multi-hall schools (Helen Doron, etc.), or null if missing/invalid. */
export const getLocationIndexFromSearchParams = (searchParams: URLSearchParams) => {
  const raw = getLocationQueryValue(searchParams)

  if (raw == null || raw === '') {
    return null
  }

  const index = Number(raw)
  return Number.isInteger(index) && index >= 0 ? index : null
}

export const pagePath = (name: PageName, lang: Lang) => PAGE_PATHS[name][lang]

export const homeHashPath = (lang: Lang) =>
  `${PAGE_PATHS.home[lang]}#${HASH.categories[lang]}`

export const categoryPath = (lang: Lang, slugOrId: string) => {
  const slug = localizeCategorySlug(slugOrId, lang)
  return lang === 'en' ? `/en/categories/${slug}` : `/kategorija/${slug}`
}

export const schoolPath = (lang: Lang, slug: string, categoryId?: string) => {
  const base = lang === 'en' ? `/en/schools/${slug}` : `/skola/${slug}`

  if (!categoryId) {
    return base
  }

  const param = QUERY.category[lang]
  const categorySlug = localizeCategorySlug(categoryId, lang)
  return `${base}?${param}=${encodeURIComponent(categorySlug)}`
}

const CATEGORY_RE: Record<Lang, RegExp> = {
  sr: /^\/kategorija\/([^/]+)\/?$/,
  en: /^\/en\/categories\/([^/]+)\/?$/,
}

const SCHOOL_RE: Record<Lang, RegExp> = {
  sr: /^\/skola\/([^/]+)\/?$/,
  en: /^\/en\/schools\/([^/]+)\/?$/,
}

export const matchCategorySlug = (pathname: string): string | null => {
  const lang = getLangFromPath(pathname)
  return pathname.match(CATEGORY_RE[lang])?.[1] ?? null
}

export const isCategoryPath = (pathname: string) => matchCategorySlug(pathname) != null

export const matchSchoolSlug = (pathname: string): string | null => {
  const lang = getLangFromPath(pathname)
  return pathname.match(SCHOOL_RE[lang])?.[1] ?? null
}

const mapHash = (hash: string, targetLang: Lang) => {
  if (!hash) {
    return ''
  }

  const value = hash.replace(/^#/, '')

  if (value === HASH.categories.sr || value === HASH.categories.en) {
    return `#${HASH.categories[targetLang]}`
  }

  return hash.startsWith('#') ? hash : `#${hash}`
}

const mapLocalizedQueryKey = (
  params: URLSearchParams,
  keys: { sr: string; en: string },
  targetLang: Lang,
  mapValue?: (value: string) => string
) => {
  const fromKey = keys[targetLang === 'en' ? 'sr' : 'en']
  const toKey = keys[targetLang]
  const value = params.get(fromKey) ?? params.get(toKey)

  if (!value) {
    return
  }

  params.delete(keys.sr)
  params.delete(keys.en)
  params.set(toKey, mapValue ? mapValue(value) : value)
}

const mapSearch = (search: string, targetLang: Lang) => {
  if (!search) {
    return ''
  }

  const params = new URLSearchParams(search.startsWith('?') ? search.slice(1) : search)
  mapLocalizedQueryKey(params, QUERY.category, targetLang, (value) =>
    localizeCategorySlug(value, targetLang)
  )
  mapLocalizedQueryKey(params, QUERY.location, targetLang)

  const next = params.toString()
  return next ? `?${next}` : ''
}

/**
 * Equivalent page in `targetLang`.
 * Category slugs are remapped (`plivanje` ↔ `swimming`).
 * School slugs stay the same in both languages.
 */
export const getLocalizedRoute = (
  pathname: string,
  targetLang: Lang,
  search = '',
  hash = ''
) => {
  const currentLang = getLangFromPath(pathname)

  if (currentLang === targetLang) {
    return `${pathname}${search}${hash}`
  }

  for (const name of Object.keys(PAGE_PATHS) as PageName[]) {
    if (pathname === PAGE_PATHS[name][currentLang]) {
      return `${PAGE_PATHS[name][targetLang]}${mapSearch(search, targetLang)}${mapHash(hash, targetLang)}`
    }
  }

  const categorySlug = matchCategorySlug(pathname)
  if (categorySlug) {
    return `${categoryPath(targetLang, categorySlug)}${mapSearch(search, targetLang)}${mapHash(hash, targetLang)}`
  }

  const schoolSlug = matchSchoolSlug(pathname)
  if (schoolSlug) {
    return `${schoolPath(targetLang, schoolSlug)}${mapSearch(search, targetLang)}${mapHash(hash, targetLang)}`
  }

  if (targetLang === 'en') {
    const enPath = pathname.startsWith('/en') ? pathname : `/en${pathname}`
    return `${enPath}${mapSearch(search, targetLang)}${mapHash(hash, targetLang)}`
  }

  const srPath = pathname.startsWith('/en/') ? pathname.slice(3) || '/' : pathname
  return `${srPath}${mapSearch(search, targetLang)}${mapHash(hash, targetLang)}`
}

export { getCategorySlug, localizeCategorySlug }
