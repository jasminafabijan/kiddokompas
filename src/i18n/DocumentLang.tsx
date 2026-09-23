import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getCategoryBySlug, getCategoryName } from '../data/categories'
import { getSchoolBySlug, getSchoolName } from '../data/schools'
import { getCategoryQueryValue, isHomePath, matchCategorySlug, matchSchoolSlug, PAGE_PATHS } from './routes'
import { useI18n } from './useI18n'

const setMetaDescription = (description: string) => {
  const meta = document.querySelector('meta[name="description"]')
  if (meta) {
    meta.setAttribute('content', description)
  }
}

/** Keep `<html lang>`, title and description in sync with the route. */
const DocumentLang = () => {
  const { pathname, search } = useLocation()
  const { lang, t } = useI18n()

  useLayoutEffect(() => {
    document.documentElement.lang = lang
    setMetaDescription(t('seo.homeDescription'))

    if (isHomePath(pathname)) {
      document.title = t('seo.homeTitle')
      return
    }

    if (pathname === PAGE_PATHS.search.sr || pathname === PAGE_PATHS.search.en) {
      document.title = t('seo.pageTitle', { page: t('search.title') })
      return
    }

    if (pathname === PAGE_PATHS.map.sr || pathname === PAGE_PATHS.map.en) {
      document.title = t('seo.pageTitle', { page: t('map.title') })
      return
    }

    if (pathname === PAGE_PATHS.about.sr || pathname === PAGE_PATHS.about.en) {
      document.title = t('seo.pageTitle', { page: t('nav.about') })
      return
    }

    if (pathname === PAGE_PATHS.contact.sr || pathname === PAGE_PATHS.contact.en) {
      document.title = t('seo.pageTitle', { page: t('footer.contact') })
      setMetaDescription(t('contact.lead'))
      return
    }

    if (pathname === PAGE_PATHS.privacy.sr || pathname === PAGE_PATHS.privacy.en) {
      document.title = t('seo.pageTitle', { page: t('footer.privacy') })
      return
    }

    const categorySlug = matchCategorySlug(pathname)
    if (categorySlug) {
      const category = getCategoryBySlug(categorySlug)
      const categoryName = category ? getCategoryName(category, lang) : t('category.notFound')
      document.title = t('seo.pageTitle', { page: categoryName })
      return
    }

    const schoolSlug = matchSchoolSlug(pathname)
    if (schoolSlug) {
      const school = getSchoolBySlug(schoolSlug)
      const queryCategory = getCategoryQueryValue(new URLSearchParams(search))
      const categoryId = queryCategory ? getCategoryBySlug(queryCategory)?.id : undefined
      const activeCategory =
        school && categoryId && school.categorySlugs.includes(categoryId) ? categoryId : undefined
      const schoolName = school ? getSchoolName(school, lang, activeCategory) : t('school.notFound')
      document.title = t('seo.pageTitle', { page: schoolName })
      return
    }

    document.title = t('seo.pageTitle', { page: t('notFound.title') })
  }, [lang, pathname, search, t])

  return null
}

export default DocumentLang
