import { Link } from 'react-router-dom'
import { getCategoryNameBySlug } from '../data/categories'
import { getActivityOptions } from '../data/schools'
import { useI18n } from '../i18n/useI18n'
import learningSupportIcon from '../assets/icons/learning-support.svg'
import speechDevelopmentIcon from '../assets/icons/speech-development.svg'

const CATEGORY_ICON_BASE_SIZE_PX = 64

const supportCategories = [
  { id: 'learning-support', iconSrc: learningSupportIcon, iconSizeAdjustPx: -4 },
  { id: 'speech-development', iconSrc: speechDevelopmentIcon },
]

const SupportSection = () => {
  const { lang, path, t } = useI18n()
  const listedCategoryIds = new Set(getActivityOptions(lang).map((option) => option.slug))
  const visibleCategories = supportCategories.filter((category) => listedCategoryIds.has(category.id))

  if (visibleCategories.length === 0) {
    return null
  }

  return (
    <section className="support-section" aria-labelledby="support-title">
      <div className="categories-header">
        <span className="tag tag--pill tag--peach">{t('support.tag')}</span>
        <h2 id="support-title" className="categories-title">
          {t('support.title')}
        </h2>
        <p className="categories-subtitle">{t('support.subtitle')}</p>
      </div>

      <div className="categories-grid">
        {visibleCategories.map((category) => {
          const iconSizePx = CATEGORY_ICON_BASE_SIZE_PX + (category.iconSizeAdjustPx ?? 0)

          return (
            <Link key={category.id} to={path.category(category.id)} className="category-card">
              <span className="category-card-icon category-card-icon--peach">
                <img
                  src={category.iconSrc}
                  alt=""
                  width={iconSizePx}
                  height={iconSizePx}
                  decoding="async"
                  className="category-card-icon-image"
                  style={{ height: iconSizePx, maxHeight: iconSizePx }}
                />
              </span>
              <span className="category-card-label">{getCategoryNameBySlug(category.id, lang)}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SupportSection
