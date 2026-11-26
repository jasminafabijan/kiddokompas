import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getCategoryBySlug, getCategoryName } from '../data/categories'
import { getSchoolBySlug, getSchoolName } from '../data/schools'
import { SITE_ORIGIN } from './config'
import {
  categoryPath,
  getCategoryQueryValue,
  isHomePath,
  matchCategorySlug,
  matchSchoolSlug,
  PAGE_PATHS,
  type PageName,
  schoolPath,
} from './routes'
import { useI18n } from './useI18n'

const NOINDEX = 'noindex, follow'

const setMetaDescription = (description: string) => {
  const meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.setAttribute('content', description)
  }
}

/** Indexable pages get no robots meta; filter, search and not-found pages get `noindex, follow`. */
const setRobots = (content: string | null) => {
  let meta = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')

  if (!content) {
    meta?.remove()
    return
  }

  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'robots'
    document.head.appendChild(meta)
  }

  meta.content = content
}

/** Canonical is the clean path without query or trailing slash. Noindex pages get none. */
const setCanonical = (path: string | null) => {
  let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')

  if (!path) {
    link?.remove()
    return
  }

  if (!link) {
    link = document.createElement('link')
    link.rel = 'canonical'
    document.head.appendChild(link)
  }

  link.href = `${SITE_ORIGIN}${path}`
}

const trimTrailingSlash = (pathname: string) =>
  pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

const isPage = (pathname: string, name: PageName) =>
  pathname === PAGE_PATHS[name].sr || pathname === PAGE_PATHS[name].en

type PageSeo = {
  title: string
  description?: string
  /** Clean canonical path, or null for noindex pages. */
  canonical: string | null
}

/**
 * Keep `<html lang>`, title, description, robots and canonical in sync with the route.
 *
 * Query URL rules:
 * - `/pretraga?…`: always noindex.
 * - `/mapa?…`: noindex; plain `/mapa` is indexable.
 * - `/kategorija/x?grad=…`: canonical `/kategorija/x` until city pages exist.
 * - `/skola/x?kategorija=…` and `?lokacija=…`: canonical `/skola/x`.
 * - Any other parameter (`utm_…`, `fbclid`): ignored by the canonical.
 */
const DocumentLang = () => {
  const { pathname: rawPathname, search } = useLocation()
  const { lang, t } = useI18n()

  useLayoutEffect(() => {
    const pathname = trimTrailingSlash(rawPathname)
    const params = new URLSearchParams(search)
    const pageTitle = (page: string) => t('seo.pageTitle', { page })

    const resolve = (): PageSeo => {
      if (isHomePath(pathname)) {
        return { title: t('seo.homeTitle'), canonical: PAGE_PATHS.home[lang] }
      }

      if (isPage(pathname, 'search')) {
        return { title: pageTitle(t('search.title')), canonical: null }
      }

      if (isPage(pathname, 'map')) {
        return {
          title: pageTitle(t('map.title')),
          canonical: params.toString() ? null : PAGE_PATHS.map[lang],
        }
      }

      if (isPage(pathname, 'about')) {
        return { title: pageTitle(t('nav.about')), canonical: PAGE_PATHS.about[lang] }
      }

      if (isPage(pathname, 'contact')) {
        return {
          title: pageTitle(t('footer.contact')),
          description: t('contact.lead'),
          canonical: PAGE_PATHS.contact[lang],
        }
      }

      if (isPage(pathname, 'privacy')) {
        return { title: pageTitle(t('footer.privacy')), canonical: PAGE_PATHS.privacy[lang] }
      }

      const categorySlug = matchCategorySlug(pathname)
      if (categorySlug) {
        const category = getCategoryBySlug(categorySlug)

        return category
          ? { title: pageTitle(getCategoryName(category, lang)), canonical: categoryPath(lang, category.id) }
          : { title: pageTitle(t('category.notFound')), canonical: null }
      }

      const schoolSlug = matchSchoolSlug(pathname)
      if (schoolSlug) {
        const school = getSchoolBySlug(schoolSlug)

        if (!school) {
          return { title: pageTitle(t('school.notFound')), canonical: null }
        }

        const queryCategory = getCategoryQueryValue(params)
        const categoryId = queryCategory ? getCategoryBySlug(queryCategory)?.id : undefined
        const activeCategory =
          categoryId && school.categorySlugs.includes(categoryId) ? categoryId : undefined

        return {
          title: pageTitle(getSchoolName(school, lang, activeCategory)),
          canonical: schoolPath(lang, school.slug),
        }
      }

      return { title: pageTitle(t('notFound.title')), canonical: null }
    }

    const seo = resolve()

    document.documentElement.lang = lang
    document.title = seo.title
    setMetaDescription(seo.description ?? t('seo.homeDescription'))
    setCanonical(seo.canonical)
    setRobots(seo.canonical ? null : NOINDEX)
  }, [lang, rawPathname, search, t])

  return null
}

export default DocumentLang
