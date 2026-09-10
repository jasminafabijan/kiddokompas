import { Link, Navigate, useLocation, useParams, useSearchParams } from 'react-router-dom'
import BackLink from '../components/BackLink'
import Navbar from '../components/Navbar'
import SchoolContactList, {
  buildContactLinks,
  LocationPinIcon,
} from '../components/SchoolContactList'
import SchoolLocations from '../components/SchoolLocations'
import SchoolMap from '../components/SchoolMap'
import { getCategoryBySlug, getCategoryName, getCategoryNameAccusative } from '../data/categories'
import {
  categoryPath,
  getCategoryQueryValue,
  getLocationIndexFromSearchParams,
  getLocalizedRoute,
  isCategoryPath,
  isHomePath,
  pagePath,
  PAGE_PATHS,
  schoolPath,
} from '../i18n/routes'
import { getLocalizedParagraphs, schoolAgeLabel } from '../i18n/helpers'
import { useI18n } from '../i18n/useI18n'
import type { Lang } from '../i18n/types'
import {
  formatSchoolAddress,
  getMapsHref,
  getSchoolBySlug,
  getSchoolName,
  usesLocationPicker,
} from '../data/schools'
import { isWebpSrc } from '../utils/schoolImage'

const UsersIcon = () => (
  <svg
    aria-hidden="true"
    className="school-detail-tag-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

type SchoolLocationState = {
  from?: string
}

type TranslateFn = (key: string, vars?: Record<string, string | number>) => string

const DESCRIPTION_URL_RE = /(https?:\/\/[^\s)]+)/g

const DescriptionText = ({ text }: { text: string }) => {
  const parts = text.split(DESCRIPTION_URL_RE)

  return parts.map((part, index) => {
    if (!part.startsWith('http://') && !part.startsWith('https://')) {
      return <span key={`${part}-${index}`}>{part}</span>
    }

    const href = part.replace(/[.,;:]+$/, '')
    const trailing = part.slice(href.length)
    const label = href.replace(/^https?:\/\/(www\.)?/, '')

    return (
      <span key={`${href}-${index}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="school-detail-description-link"
        >
          {label}
        </a>
        {trailing}
      </span>
    )
  })
}

const DescriptionParagraph = ({ text }: { text: string }) => (
  <p>
    <DescriptionText text={text} />
  </p>
)

type DescriptionBlock =
  | { type: 'p'; text: string }
  | { type: 'list'; heading?: string; items: string[] }

const groupDescriptionParagraphs = (paragraphs: string[]): DescriptionBlock[] => {
  const blocks: DescriptionBlock[] = []

  for (const paragraph of paragraphs) {
    if (paragraph.startsWith('- ')) {
      const item = paragraph.slice(2)
      const last = blocks[blocks.length - 1]

      if (last?.type === 'list') {
        last.items.push(item)
        continue
      }

      if (last?.type === 'p' && last.text.endsWith(':')) {
        blocks[blocks.length - 1] = {
          type: 'list',
          heading: last.text.slice(0, -1),
          items: [item],
        }
        continue
      }

      blocks.push({ type: 'list', items: [item] })
      continue
    }

    blocks.push({ type: 'p', text: paragraph })
  }

  return blocks
}

const getFromPathname = (from: string | undefined) => from?.split(/[?#]/)[0] ?? ''

const localizeFrom = (from: string, lang: Lang) => {
  try {
    const url = new URL(from, 'http://kiddokompas.local')
    return getLocalizedRoute(url.pathname, lang, url.search, url.hash)
  } catch {
    return from
  }
}

const categoryBack = (
  from: string | undefined,
  fromPath: string,
  categoryName: string,
  categoryId: string,
  lang: Lang,
  t: TranslateFn
) => ({
  to: from && isCategoryPath(fromPath) ? localizeFrom(from, lang) : categoryPath(lang, categoryId),
  label: t('school.backCategory', { category: categoryName }),
})

const getSchoolBack = (
  from: string | undefined,
  categoryName: string | undefined,
  categoryId: string | undefined,
  lang: Lang,
  t: TranslateFn
) => {
  const fromPath = getFromPathname(from)

  if (from && (isHomePath(fromPath) || from.startsWith('/#'))) {
    return { to: pagePath('home', lang), label: t('school.backHome') }
  }

  if (from && (fromPath === PAGE_PATHS.search.sr || fromPath === PAGE_PATHS.search.en)) {
    return { to: localizeFrom(from, lang), label: t('school.backSearch') }
  }

  if (from && (fromPath === PAGE_PATHS.map.sr || fromPath === PAGE_PATHS.map.en)) {
    return { to: localizeFrom(from, lang), label: t('school.backMap') }
  }

  if (categoryId && categoryName) {
    return categoryBack(from, fromPath, categoryName, categoryId, lang, t)
  }

  return { to: pagePath('home', lang), label: t('school.backHome') }
}

const SchoolDetailPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const location = useLocation()
  const [searchParams] = useSearchParams()
  const { lang, path, t } = useI18n()
  const school = slug ? getSchoolBySlug(slug) : undefined
  const from = (location.state as SchoolLocationState | null)?.from
  const queryCategory = getCategoryQueryValue(searchParams)
  const locationIndex = getLocationIndexFromSearchParams(searchParams)
  const categoryFromQuery = queryCategory ? getCategoryBySlug(queryCategory) : undefined
  const activeCategorySlug =
    school && categoryFromQuery && school.categorySlugs.includes(categoryFromQuery.id)
      ? categoryFromQuery.id
      : undefined
  const category = activeCategorySlug ? getCategoryBySlug(activeCategorySlug) : undefined
  const isMultiCategory = Boolean(school && school.categorySlugs.length > 1)
  const showCategoryLinks = Boolean(school && isMultiCategory && !activeCategorySlug)

  if (!school) {
    return (
      <div className="page-shell">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-muted">{t('school.notFound')}</p>
          <BackLink to={path.home} className="mt-4 inline-block text-sm font-semibold text-primary">
            ← {t('school.backHome')}
          </BackLink>
        </div>
      </div>
    )
  }

  if (slug && slug !== school.slug) {
    return (
      <Navigate
        to={`${schoolPath(lang, school.slug)}${location.search}${location.hash}`}
        replace
      />
    )
  }

  const contactForCategory = {
    ...school.contact,
    website:
      (activeCategorySlug && school.websitesByCategory?.[activeCategorySlug]) ||
      school.contact?.website,
  }
  const contactLinks = buildContactLinks(contactForCategory)
  const showLocationPicker = usesLocationPicker(school.addresses)
  const mapAddresses =
    school.addresses?.filter((address) => address.lat != null && address.lng != null) ?? []
  const showSimpleLocations = Boolean(school.addresses?.length || mapAddresses.length > 0)
  const descriptionSource =
    (activeCategorySlug && school.descriptionsByCategory?.[activeCategorySlug]) || school.description
  const descriptionParagraphs = descriptionSource
    ? getLocalizedParagraphs(
        descriptionSource,
        lang,
        `school:${school.id}:description${activeCategorySlug ? `:${activeCategorySlug}` : ':overview'}`
      )
    : []
  const back = getSchoolBack(
    from,
    category ? getCategoryNameAccusative(category, lang) : undefined,
    category?.id,
    lang,
    t
  )

  return (
    <div className="page-shell school-page">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pt-6 pb-8 sm:px-6 sm:pt-8">
        <BackLink to={back.to} className="category-page-back">
          ← {back.label}
        </BackLink>

        <article className="school-detail">
          <header className="school-detail-header">
            <h1 className="school-detail-title">{getSchoolName(school, lang)}</h1>

            {school.ageLabel ? (
              <div className="school-detail-tags">
                <span className="school-detail-tag school-detail-tag--age">
                  <UsersIcon />
                  {schoolAgeLabel(school, lang)}
                </span>
              </div>
            ) : null}
          </header>

          <div className="school-detail-grid">
            <div className="school-detail-main">
              <div className="school-detail-image-frame">
                <span aria-hidden="true" className="school-detail-deco school-detail-deco--circle" />
                <span aria-hidden="true" className="school-detail-deco school-detail-deco--square" />
                <div className="school-detail-image-wrap">
                  <picture>
                    {isWebpSrc(school.imageWebp) && (
                      <source srcSet={school.imageWebp} type="image/webp" />
                    )}
                    <img
                      src={school.imageFallback}
                      alt={getSchoolName(school, lang)}
                      loading="eager"
                      decoding="async"
                      width={680}
                      height={400}
                      className="school-detail-image"
                    />
                  </picture>
                </div>
              </div>

              {(descriptionParagraphs.length > 0 || showCategoryLinks) && (
                <section className="school-detail-section" aria-labelledby="school-description">
                  <h2 id="school-description" className="school-detail-section-title">
                    {t('school.aboutProgram')}
                  </h2>
                  {descriptionParagraphs.length > 0 ? (
                    <div className="school-detail-description">
                      {groupDescriptionParagraphs(descriptionParagraphs).map((block, index) =>
                        block.type === 'list' ? (
                          <div key={`list-${index}`} className="school-detail-description-group">
                            {block.heading ? (
                              <p className="school-detail-description-heading">{block.heading}</p>
                            ) : null}
                            <ul className="school-detail-description-list">
                              {block.items.map((item) => (
                                <li key={item}>
                                  <DescriptionText text={item} />
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <DescriptionParagraph key={block.text} text={block.text} />
                        )
                      )}
                    </div>
                  ) : null}
                  {showCategoryLinks ? (
                    <div className="school-detail-activity-links">
                      <p className="school-detail-description-heading">{t('school.activities')}</p>
                      <ul className="school-detail-activity-links-list">
                        {school.categorySlugs.map((categorySlug) => {
                          const activityCategory = getCategoryBySlug(categorySlug)
                          if (!activityCategory) return null

                          return (
                            <li key={categorySlug}>
                              <Link
                                to={path.school(school.slug, categorySlug)}
                                state={{ from }}
                                className="school-detail-activity-link"
                              >
                                <span>{getCategoryName(activityCategory, lang)}</span>
                                <svg
                                  aria-hidden="true"
                                  className="school-detail-activity-link-arrow"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="M5 12h14" />
                                  <path d="m13 6 6 6-6 6" />
                                </svg>
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  ) : null}
                </section>
              )}
            </div>

            <aside className="school-detail-sidebar">
              {showLocationPicker && school.addresses ? (
                <section className="school-detail-section" aria-labelledby="school-contact">
                  <h2 id="school-contact" className="school-detail-section-title">
                    {t('school.contact')}
                  </h2>
                  <SchoolLocations
                    key={`${school.id}-${locationIndex ?? 'none'}`}
                    addresses={school.addresses}
                    initialSelectedIndex={locationIndex}
                  />
                </section>
              ) : contactLinks.length > 0 ? (
                <section className="school-detail-section" aria-labelledby="school-contact">
                  <h2 id="school-contact" className="school-detail-section-title">
                    {t('school.contact')}
                  </h2>
                  <SchoolContactList links={contactLinks} />
                </section>
              ) : null}

              {showSimpleLocations ? (
                <section className="school-detail-section" aria-labelledby="school-location">
                  <h2 id="school-location" className="school-detail-section-title">
                    {(school.addresses?.length ?? 0) > 1
                      ? t('school.locations')
                      : t('school.location')}
                  </h2>
                  {school.addresses && school.addresses.length > 0 && (
                    <div className="school-detail-contact mb-4">
                      {school.addresses.map((address) => {
                        const label = formatSchoolAddress(address, lang)

                        if (address.schoolSlug) {
                          return (
                            <Link
                              key={address.schoolSlug}
                              to={schoolPath(lang, address.schoolSlug)}
                              className="school-detail-contact-link"
                            >
                              <span className="school-detail-contact-icon-wrap">
                                <LocationPinIcon />
                              </span>
                              <span className="school-detail-contact-label">{label}</span>
                            </Link>
                          )
                        }

                        return (
                          <a
                            key={label}
                            href={getMapsHref(address, getSchoolName(school, lang))}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="school-detail-contact-link"
                          >
                            <span className="school-detail-contact-icon-wrap">
                              <LocationPinIcon />
                            </span>
                            <span className="school-detail-contact-label">{label}</span>
                          </a>
                        )
                      })}
                    </div>
                  )}
                  {mapAddresses.length > 0 && (
                    <SchoolMap
                      addresses={mapAddresses}
                      placeName={getSchoolName(school, lang)}
                    />
                  )}
                </section>
              ) : null}
            </aside>
          </div>
        </article>
      </main>
    </div>
  )
}

export default SchoolDetailPage
