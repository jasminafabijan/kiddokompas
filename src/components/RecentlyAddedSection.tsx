import { getCategoryNameBySlug } from '../data/categories'
import { getRecentlyAddedSchools } from '../data/schools'
import { useI18n } from '../i18n/useI18n'
import SchoolCard from './SchoolCard'

const RecentlyAddedSection = () => {
  const { lang, t } = useI18n()
  const recentSchools = getRecentlyAddedSchools()

  if (recentSchools.length === 0) {
    return null
  }

  return (
    <section
      className="recently-added-section"
      aria-labelledby="recently-added-title"
    >
      <div className="categories-header">
        <span className="tag tag--pill tag--mint">{t('recentlyAdded.tag')}</span>
        <h2 id="recently-added-title" className="categories-title">
            {t('recentlyAdded.title')}
        </h2>
        <p className="categories-subtitle">
            {t('recentlyAdded.subtitle')}
        </p>
      </div>

      <div className="schools-grid">
        {recentSchools.map((school) => (
          <SchoolCard
            key={school.id}
            school={school}
            categoryLabels={school.categorySlugs.map((slug) => getCategoryNameBySlug(slug, lang))}
          />
        ))}
      </div>
    </section>
  )
}

export default RecentlyAddedSection
