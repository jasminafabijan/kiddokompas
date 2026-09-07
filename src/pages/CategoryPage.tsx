import { Navigate, useParams, useSearchParams } from 'react-router-dom'
import BackLink from '../components/BackLink'
import Navbar from '../components/Navbar'
import SchoolCard from '../components/SchoolCard'
import {
  formatCategorySubtitle,
  getCategoryBySlug,
  getCategoryName,
  getCategorySlug,
} from '../data/categories'
import { getSchoolCities, forCatalogCards, getSchoolsByCategory } from '../data/schools'
import { categoryPath } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'

const getSelectedCity = (
  searchParams: URLSearchParams,
  categoryCities: string[]
) => {
  const cityFromQuery = searchParams.get('grad') ?? searchParams.get('city')

  if (cityFromQuery) {
    return cityFromQuery
  }

  if (categoryCities.length === 1) {
    return categoryCities[0]
  }

  return ''
}

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const [searchParams] = useSearchParams()
  const { lang, path, t } = useI18n()
  const category = slug ? getCategoryBySlug(slug) : undefined
  const categorySchools = category ? getSchoolsByCategory(category.id, lang) : []

  if (category && categorySchools.length === 0) {
    return <Navigate to={path.homeCategories} replace />
  }

  const categoryCities = [...new Set(categorySchools.flatMap((school) => getSchoolCities(school)))]
  const selectedCity = getSelectedCity(searchParams, categoryCities)
  const visibleSchools = forCatalogCards(
    selectedCity
      ? categorySchools.filter((school) => getSchoolCities(school).includes(selectedCity))
      : categorySchools,
    selectedCity
  )

  if (!category) {
    return (
      <div className="page-shell">
        <Navbar />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
          <p className="text-muted">{t('category.notFound')}</p>
          <BackLink to={path.homeCategories} className="mt-4 inline-block text-sm font-semibold text-primary">
            ← {t('common.backHome')}
          </BackLink>
        </div>
      </div>
    )
  }

  const canonicalSlug = getCategorySlug(category, lang)
  if (slug !== canonicalSlug) {
    const query = searchParams.toString()
    return (
      <Navigate
        to={`${categoryPath(lang, category.id)}${query ? `?${query}` : ''}`}
        replace
      />
    )
  }

  return (
    <div className="page-shell">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pt-6 pb-8 sm:px-6 sm:pt-8">
        <BackLink to={path.homeCategories} className="category-page-back">
          ← {t('common.backHome')}
        </BackLink>

        <header className="category-page-header">
          <h1 className="category-page-title">{getCategoryName(category, lang)}</h1>
          <p className="category-page-subtitle">
            {formatCategorySubtitle(category, selectedCity, lang)}
          </p>
        </header>

        {visibleSchools.length > 0 ? (
          <div className="schools-grid">
            {visibleSchools.map((school) => (
              <SchoolCard key={school.id} school={school} categoryContext={category.id} />
            ))}
          </div>
        ) : (
          <p className="text-muted">{t('category.empty')}</p>
        )}
      </main>
    </div>
  )
}

export default CategoryPage
