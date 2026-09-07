import { useSearchParams } from 'react-router-dom'
import BackLink from '../components/BackLink'
import Navbar from '../components/Navbar'
import SchoolCard from '../components/SchoolCard'
import { getCategoryNameBySlug } from '../data/categories'
import {
  filterSchools,
  formatSchoolCategoryNames,
  forCatalogCards,
  type School,
  type SchoolFilters,
} from '../data/schools'
import { formatEmptyFilterMessage, formatSearchSubtitle } from '../i18n/formatters'
import type { Lang } from '../i18n/types'
import { useI18n } from '../i18n/useI18n'
import {
  getFiltersFromSearchParams,
  stashHomeFilters,
  type HomeLocationState,
} from '../utils/searchFilters'

const getSchoolCategoryLabel = (school: School, filters: SchoolFilters, lang: Lang) => {
  // One selected activity is already clear from the filter — no tag needed.
  if (filters.activities.length === 1) {
    return undefined
  }

  if (filters.activities.length === 0) {
    return formatSchoolCategoryNames(school, lang)
  }

  // Multiple activities selected — show which of them apply to this school.
  return filters.activities
    .filter((activity) => school.categorySlugs.includes(activity))
    .map((slug) => getCategoryNameBySlug(slug, lang))
    .join(', ')
}

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams()
  const { lang, path, t } = useI18n()
  const filters = getFiltersFromSearchParams(searchParams)
  const results = forCatalogCards(filterSchools(filters), filters.city)
  const backState: HomeLocationState = { filters }
  const emptyMessage = formatEmptyFilterMessage(filters, lang)

  return (
    <div className="page-shell">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <BackLink
          to={path.home}
          state={backState}
          className="category-page-back"
          onClick={() => stashHomeFilters(filters)}
        >
          ← {t('search.back')}
        </BackLink>

        <header className="category-page-header">
          <h1 className="category-page-title">{t('search.title')}</h1>
          {results.length > 0 && (
            <p className="category-page-subtitle">
              {formatSearchSubtitle(
                results.length,
                filters.age != null,
                filters.partsOfCity.length > 0,
                lang,
                filters.activities.length > 0
              )}
            </p>
          )}
        </header>

        {results.length > 0 ? (
          <div className="schools-grid">
            {results.map((school) => (
              <SchoolCard
                key={school.id}
                school={school}
                categoryLabel={getSchoolCategoryLabel(school, filters, lang)}
                categoryContext={
                  filters.activities.find((activity) => school.categorySlugs.includes(activity)) ??
                  school.categorySlugs[0]
                }
              />
            ))}
          </div>
        ) : (
          <div className="search-empty">
            <p>{emptyMessage.title}</p>
            <p>{emptyMessage.hint}</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default SearchResultsPage
