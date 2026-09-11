import { Link } from 'react-router-dom'
import { getCategoryNameBySlug } from '../data/categories'
import { getActivityOptions } from '../data/schools'
import { CATEGORIES_SECTION_ID } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'
import actingIcon from '../assets/icons/acting.svg'
import creativeWritingIcon from '../assets/icons/creative-writing.svg'
import languagesIcon from '../assets/icons/languages.svg'
import learningSupportIcon from '../assets/icons/learning-support.svg'
import programmingIcon from '../assets/icons/programming.svg'
import roboticsIcon from '../assets/icons/robotics.svg'
import balletIcon from '../assets/icons/ballet.svg'
import basketballIcon from '../assets/icons/basketball.svg'
import boxingIcon from '../assets/icons/boxing.svg'
import capoeiraIcon from '../assets/icons/capoeira.svg'
import aikidoIcon from '../assets/icons/aikido.svg'
import chessIcon from '../assets/icons/chess.svg'
import footballIcon from '../assets/icons/football.svg'
import jazzDanceIcon from '../assets/icons/jazz-dance.svg'
import karateIcon from '../assets/icons/karate.svg'
import ridingIcon from '../assets/icons/riding.svg'
import folkloreIcon from '../assets/icons/folklore.svg'
import musicIcon from '../assets/icons/music.svg'
import tennisIcon from '../assets/icons/tennis.svg'
import tableTennisIcon from '../assets/icons/table-tennis.svg'
import athleticsIcon from '../assets/icons/athletics.svg'
import volleyballIcon from '../assets/icons/volleyball.webp'
import danceSportIcon from '../assets/icons/dance-sport.svg'
import swimmingIcon from '../assets/icons/swimming.svg'
import miniSportsIcon from '../assets/icons/mini-sports.svg'
import kidsSportsIcon from '../assets/icons/kids-sports.svg'
import developmentalGymnasticsIcon from '../assets/icons/developmental-gymnastics.svg'
import teenWorkoutIcon from '../assets/icons/teen-workout.svg'

type CategoryIconBg = 'mint' | 'peach'

const CATEGORY_ICON_BASE_SIZE_PX = 64

interface CategoryDisplay {
  id: string
  iconBg: CategoryIconBg
  iconSrc?: string
  /** Extra pixels added to the base icon height (64px). */
  iconSizeAdjustPx?: number
}

const categoryDisplay: CategoryDisplay[] = [
  { id: 'football', iconBg: 'mint', iconSrc: footballIcon, iconSizeAdjustPx: -12 },
  { id: 'basketball', iconBg: 'mint', iconSrc: basketballIcon, iconSizeAdjustPx: -4 },
  { id: 'volleyball', iconBg: 'peach', iconSrc: volleyballIcon, iconSizeAdjustPx: -10 },
  { id: 'tennis', iconBg: 'peach', iconSrc: tennisIcon },
  { id: 'table-tennis', iconBg: 'mint', iconSrc: tableTennisIcon, iconSizeAdjustPx: -6 },
  { id: 'athletics', iconBg: 'peach', iconSrc: athleticsIcon },
  { id: 'karate', iconBg: 'mint', iconSrc: karateIcon },
  { id: 'boxing', iconBg: 'peach', iconSrc: boxingIcon, iconSizeAdjustPx: -6 },
  { id: 'capoeira', iconBg: 'mint', iconSrc: capoeiraIcon, iconSizeAdjustPx: 4 },
  { id: 'aikido', iconBg: 'peach', iconSrc: aikidoIcon },
  { id: 'chess', iconBg: 'mint', iconSrc: chessIcon, iconSizeAdjustPx: -10 },
  { id: 'swimming', iconBg: 'mint', iconSrc: swimmingIcon, iconSizeAdjustPx: -18 },
  { id: 'mini-sports', iconBg: 'peach', iconSrc: miniSportsIcon },
  { id: 'kids-sports', iconBg: 'mint', iconSrc: kidsSportsIcon },
  { id: 'developmental-gymnastics', iconBg: 'peach', iconSrc: developmentalGymnasticsIcon, iconSizeAdjustPx: -6 },
  { id: 'teen-workout', iconBg: 'mint', iconSrc: teenWorkoutIcon },
  { id: 'riding', iconBg: 'peach', iconSrc: ridingIcon },
  { id: 'ballet', iconBg: 'mint', iconSrc: balletIcon, iconSizeAdjustPx: 8 },
  { id: 'jazz-ballet', iconBg: 'peach', iconSrc: jazzDanceIcon, iconSizeAdjustPx: 6 },
  { id: 'dance-sport', iconBg: 'mint', iconSrc: danceSportIcon, iconSizeAdjustPx: 4 },
  { id: 'folklore', iconBg: 'mint', iconSrc: folkloreIcon, iconSizeAdjustPx: 2 },
  { id: 'music', iconBg: 'peach', iconSrc: musicIcon },
  { id: 'acting', iconBg: 'peach', iconSrc: actingIcon, iconSizeAdjustPx: -6 },
  { id: 'creative-writing', iconBg: 'mint', iconSrc: creativeWritingIcon },
  { id: 'languages', iconBg: 'mint', iconSrc: languagesIcon, iconSizeAdjustPx: -6 },
  { id: 'learning-support', iconBg: 'peach', iconSrc: learningSupportIcon, iconSizeAdjustPx: -4 },
  { id: 'programming', iconBg: 'peach', iconSrc: programmingIcon, iconSizeAdjustPx: -18 },
  { id: 'robotics', iconBg: 'mint', iconSrc: roboticsIcon },
]

const CategoryCards = () => {
  const { lang, path, t } = useI18n()
  const listedCategoryIds = new Set(getActivityOptions(lang).map((option) => option.slug))
  const visibleCategories = categoryDisplay.filter((category) => listedCategoryIds.has(category.id))

  if (visibleCategories.length === 0) {
    return null
  }

  return (
    <section id={CATEGORIES_SECTION_ID} className="categories-section" aria-labelledby="categories-title">
      <div className="categories-header">
        <span className="tag tag--pill tag--peach">{t('categories.tag')}</span>
        <h2 id="categories-title" className="categories-title">
          {t('categories.title')}
        </h2>
        <p className="categories-subtitle">
          {t('categories.subtitle')}
        </p>
      </div>

      <div className="categories-grid">
        {visibleCategories.map((category) => {
          const iconSizePx = CATEGORY_ICON_BASE_SIZE_PX + (category.iconSizeAdjustPx ?? 0)

          return (
            <Link
              key={category.id}
              to={path.category(category.id)}
              className="category-card"
            >
              <span className={`category-card-icon category-card-icon--${category.iconBg}`}>
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

export default CategoryCards
