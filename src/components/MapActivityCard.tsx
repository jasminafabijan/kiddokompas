import { Link, useLocation } from 'react-router-dom'
import { getCategoryNameBySlug } from '../data/categories'
import { getDistrictName } from '../data/districts'
import { getStreetName } from '../data/streets'
import { getSchoolName } from '../data/schools'
import { schoolAgeLabel } from '../i18n/helpers'
import { schoolMapHref } from '../utils/mapPopup'
import { getMapCategoryStyle } from '../utils/mapCategoryStyle'
import type { MapLocation } from '../utils/mapLocation'
import { useI18n } from '../i18n/useI18n'
import type { Lang } from '../i18n/types'

const LocationIcon = () => (
  <svg
    aria-hidden="true"
    className="map-activity-card-pin-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const getLocationLabel = (item: MapLocation, lang: Lang) => {
  const { address, school } = item
  const district = address.district ? getDistrictName(address.district, lang) : undefined
  const city = address.city || school.city

  if (district) {
    return `${district}, ${city}`
  }

  return [getStreetName(address.street, lang), city].filter(Boolean).join(', ') || city
}

interface MapActivityCardProps {
  location: MapLocation
  selected: boolean
  onSelect: (locationId: string) => void
}

const MapActivityCard = ({ location, selected, onSelect }: MapActivityCardProps) => {
  const routeLocation = useLocation()
  const { lang, t } = useI18n()
  const { school } = location
  const categorySlug = school.categorySlugs[0]
  const categoryName = getCategoryNameBySlug(categorySlug, lang)
  const { color, svg } = getMapCategoryStyle(categorySlug)
  const href = schoolMapHref(school, lang, location.addressIndex)
  const from = `${routeLocation.pathname}${routeLocation.search}${routeLocation.hash}`

  return (
    <article className={`map-activity-card${selected ? ' is-selected' : ''}`}>
      <button
        type="button"
        className="map-activity-card-main"
        onClick={() => onSelect(location.locationId)}
      >
        <span className="map-activity-card-icon" style={{ backgroundColor: color }} aria-hidden="true">
          <span dangerouslySetInnerHTML={{ __html: svg }} />
        </span>
        <span className="map-activity-card-copy">
          <span className="map-activity-card-title">{getSchoolName(school, lang)}</span>
          <span className="map-activity-card-meta">
            {categoryName} · {schoolAgeLabel(school, lang, true)}
          </span>
        </span>
      </button>
      <p className="map-activity-card-location">
        <LocationIcon />
        <span>{getLocationLabel(location, lang)}</span>
      </p>
      <div className="map-activity-card-footer">
        <Link
          to={href}
          state={{ from }}
          className="school-map-popup-button"
          onClick={(event) => event.stopPropagation()}
        >
          {t('map.seeDetails')}
        </Link>
      </div>
    </article>
  )
}

export default MapActivityCard
