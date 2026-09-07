import { useCallback, useMemo, useRef, useState } from 'react'
import CatalogMap from '../components/CatalogMap'
import FiltersBar, { type FilterValues } from '../components/FiltersBar'
import MapActivityCard from '../components/MapActivityCard'
import Navbar from '../components/Navbar'
import { filterSchools, forCatalogMap, getSchoolName, venueBelongsToCity } from '../data/schools'
import { formatEmptyFilterMessage, formatMapCountLabel } from '../i18n/formatters'
import { useI18n } from '../i18n/useI18n'
import { getMapLocations } from '../utils/mapLocation'
import { getDefaultFilters } from '../utils/searchFilters'

const scrollMapCardIntoView = (card: HTMLElement) => {
  const list = card.closest('.map-page-list-cards')

  if (list instanceof HTMLElement && list.scrollHeight > list.clientHeight + 2) {
    const delta = card.getBoundingClientRect().top - list.getBoundingClientRect().top
    list.scrollTo({ top: list.scrollTop + delta, behavior: 'smooth' })
    return
  }

  const navbar = document.querySelector('.site-navbar')
  const offset = (navbar instanceof HTMLElement ? navbar.offsetHeight : 80) + 12
  const top = window.scrollY + card.getBoundingClientRect().top - offset

  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
}

const MapPage = () => {
  const { lang, t } = useI18n()
  const [filters, setFilters] = useState<FilterValues>(getDefaultFilters)
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null)
  const cardRefs = useRef<Map<string, HTMLElement>>(new Map())
  const visibleSchools = useMemo(() => forCatalogMap(filterSchools(filters)), [filters])
  const emptyMessage = useMemo(
    () => formatEmptyFilterMessage(filters, lang, false),
    [filters, lang]
  )
  const mappedLocations = useMemo(() => {
    const schools = visibleSchools
      .filter((school) => school.addresses?.some((address) => address.lat != null && address.lng != null))
      .sort((a, b) => getSchoolName(a, lang).localeCompare(getSchoolName(b, lang), lang === 'en' ? 'en' : 'sr'))

    return getMapLocations(schools).filter((location) =>
      venueBelongsToCity(location.school, location.address, filters.city)
    )
  }, [filters.city, lang, visibleSchools])

  const handleFilterChange = useCallback((next: FilterValues) => {
    setFilters(next)
    setSelectedLocationId(null)
  }, [])

  const handleSelectLocation = (locationId: string) => {
    setSelectedLocationId(locationId)
  }

  const handleSelectLocationFromMap = (locationId: string) => {
    setSelectedLocationId(locationId)

    requestAnimationFrame(() => {
      const card = cardRefs.current.get(locationId)

      if (card) {
        scrollMapCardIntoView(card)
      }
    })
  }

  return (
    <div className="page-shell page-shell--fill map-page">
      <Navbar />

      <div className="map-page-intro">
        <header className="category-page-header map-page-header">
          <h1 className="category-page-title">{t('map.title')}</h1>
        </header>

        <FiltersBar hideDistrict applyOnChange onFilterChange={handleFilterChange} />
      </div>

      {mappedLocations.length > 0 ? (
        <div className="map-page-body">
          <aside className="map-page-list" aria-label={t('map.listAria')}>
            <h2 className="map-page-list-title">
              {formatMapCountLabel(mappedLocations.length, filters.city, lang)}
            </h2>
            <div className="map-page-list-cards">
              {mappedLocations.map((location) => (
                <div
                  key={location.locationId}
                  ref={(node) => {
                    if (node) {
                      cardRefs.current.set(location.locationId, node)
                    } else {
                      cardRefs.current.delete(location.locationId)
                    }
                  }}
                >
                  <MapActivityCard
                    location={location}
                    selected={selectedLocationId === location.locationId}
                    onSelect={handleSelectLocation}
                  />
                </div>
              ))}
            </div>
          </aside>
          <div className="map-page-map">
            <CatalogMap
              locations={mappedLocations}
              selectedLocationId={selectedLocationId}
              onSelectLocation={handleSelectLocationFromMap}
              city={filters.city}
            />
          </div>
        </div>
      ) : (
        <div className="map-page-empty">
          <p>{emptyMessage.title}</p>
          <p>{emptyMessage.hint}</p>
        </div>
      )}
    </div>
  )
}

export default MapPage
