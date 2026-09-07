import { useEffect, useRef, useState } from 'react'
import {
  getActivityOptions,
  getAgeOptions,
  getDistrictOptions,
  type SchoolFilters,
} from '../data/schools'
import { getCityOptions } from '../data/cities'
import { districtMatchesQuery, getDistrictName } from '../data/districts'
import { getDefaultFilters } from '../utils/searchFilters'
import { useI18n } from '../i18n/useI18n'

export type FilterValues = SchoolFilters

interface FiltersBarProps {
  onFilterChange?: (filters: FilterValues) => void
  initialFilters?: Partial<FilterValues>
  hideDistrict?: boolean
  applyOnChange?: boolean
}

const defaultFilters = getDefaultFilters()

const isSearchMenuTarget = (target: EventTarget | null) =>
  target instanceof Element && Boolean(target.closest('.search-field-menu'))

const LocationIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
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

const MapIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2V6Z" />
    <path d="M9 4v14" />
    <path d="M15 6v14" />
  </svg>
)

const UsersIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
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

const SparklesIcon = () => (
  <svg
    aria-hidden="true"
    className="search-field-icon h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9.94 15.5 11 19l1.06-3.5L15.5 14l-3.44-1.06L11 9.5 9.94 13 6.5 14l3.44 1.5Z" />
    <path d="M18 4 18.8 6.2 21 7l-2.2.8L18 10l-.8-2.2L15 7l2.2-.8L18 4Z" />
    <path d="M5 3 5.4 4.2 6.6 4.6 5.4 5 5 6.2 4.6 5 3.4 4.6 4.6 4.2 5 3Z" />
  </svg>
)

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

const FiltersBar = ({
  onFilterChange,
  initialFilters,
  hideDistrict = false,
  applyOnChange = false,
}: FiltersBarProps) => {
  const { lang, t } = useI18n()
  const cities = getCityOptions()
  const ageOptions = getAgeOptions(lang)
  const activityOptions = getActivityOptions(lang)
  const [filters, setFilters] = useState<FilterValues>(() => ({
    ...defaultFilters,
    ...initialFilters,
  }))
  const [isPartsOpen, setIsPartsOpen] = useState(false)
  const [isAgeOpen, setIsAgeOpen] = useState(false)
  const [isActivityOpen, setIsActivityOpen] = useState(false)
  const [partsQuery, setPartsQuery] = useState('')
  const [activitiesQuery, setActivitiesQuery] = useState('')
  const partsDropdownRef = useRef<HTMLDivElement>(null)
  const ageDropdownRef = useRef<HTMLDivElement>(null)
  const activityDropdownRef = useRef<HTMLDivElement>(null)
  const partsSearchRef = useRef<HTMLInputElement>(null)
  const activitiesSearchRef = useRef<HTMLInputElement>(null)
  const skipLiveApply = useRef(true)

  useEffect(() => {
    if (!applyOnChange) {
      return
    }

    if (skipLiveApply.current) {
      skipLiveApply.current = false
      return
    }

    onFilterChange?.(filters)
  }, [applyOnChange, filters, onFilterChange])

  useEffect(() => {
    if (!isPartsOpen && !isAgeOpen && !isActivityOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (isPartsOpen && partsDropdownRef.current && !partsDropdownRef.current.contains(target)) {
        setIsPartsOpen(false)
      }

      if (isAgeOpen && ageDropdownRef.current && !ageDropdownRef.current.contains(target)) {
        setIsAgeOpen(false)
      }

      if (
        isActivityOpen &&
        activityDropdownRef.current &&
        !activityDropdownRef.current.contains(target)
      ) {
        setIsActivityOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsPartsOpen(false)
        setIsAgeOpen(false)
        setIsActivityOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isPartsOpen, isAgeOpen, isActivityOpen])

  useEffect(() => {
    if (!isPartsOpen) {
      setPartsQuery('')
      return
    }

    partsSearchRef.current?.focus()
  }, [isPartsOpen])

  useEffect(() => {
    if (!isActivityOpen) {
      setActivitiesQuery('')
      return
    }

    activitiesSearchRef.current?.focus()
  }, [isActivityOpen])

  const partsOfCityOptions = getDistrictOptions(lang, filters.city)
  const showDistrict = !hideDistrict && partsOfCityOptions.length > 0

  const handleCityChange = (value: string) => {
    setFilters((prev) => {
      const allowed = new Set(getDistrictOptions(lang, value))

      return {
        ...prev,
        city: value,
        partsOfCity: prev.partsOfCity.filter((part) => allowed.has(part)),
      }
    })
  }

  const togglePartOfCity = (part: string) => {
    setFilters((prev) => {
      const isSelected = prev.partsOfCity.includes(part)
      const partsOfCity = isSelected
        ? prev.partsOfCity.filter((item) => item !== part)
        : [...prev.partsOfCity, part]

      return { ...prev, partsOfCity }
    })
  }

  const filteredPartsOfCityOptions = partsOfCityOptions.filter((part) =>
    districtMatchesQuery(part, partsQuery)
  )

  const selectAllPartsOfCity = () => {
    setFilters((prev) => ({
      ...prev,
      partsOfCity: [
        ...new Set([...prev.partsOfCity, ...filteredPartsOfCityOptions]),
      ],
    }))
  }

  const clearPartsOfCity = () => {
    setFilters((prev) => ({ ...prev, partsOfCity: [] }))
  }

  const selectAge = (age: number | null) => {
    setFilters((prev) => ({ ...prev, age }))
    setIsAgeOpen(false)
  }

  const toggleActivity = (activitySlug: string) => {
    setFilters((prev) => {
      const isSelected = prev.activities.includes(activitySlug)
      const activities = isSelected
        ? prev.activities.filter((item) => item !== activitySlug)
        : [...prev.activities, activitySlug]

      return { ...prev, activities }
    })
  }

  const normalizedActivitiesQuery = activitiesQuery.trim().toLocaleLowerCase(lang)
  const filteredActivityOptions = activityOptions.filter((activity) =>
    activity.name.toLocaleLowerCase(lang).includes(normalizedActivitiesQuery)
  )

  const selectAllActivities = () => {
    setFilters((prev) => ({
      ...prev,
      activities: [
        ...new Set([
          ...prev.activities,
          ...filteredActivityOptions.map((activity) => activity.slug),
        ]),
      ],
    }))
  }

  const clearActivities = () => {
    setFilters((prev) => ({ ...prev, activities: [] }))
  }

  const partsLabel =
    filters.partsOfCity.length === 0
      ? t('filters.districtPlaceholder')
      : filters.partsOfCity.map((part) => getDistrictName(part, lang)).join(', ')

  const selectedAgeOption = ageOptions.find((option) => option.value === filters.age)
  const agesLabel = selectedAgeOption?.label ?? t('filters.allAges')

  const activitiesLabel =
    filters.activities.length === 0
      ? t('filters.activityPlaceholder')
      : filters.activities
          .map(
            (activitySlug) =>
              activityOptions.find((activity) => activity.slug === activitySlug)?.name ??
              activitySlug
          )
          .join(', ')

  const handleSearch = () => {
    setIsPartsOpen(false)
    setIsAgeOpen(false)
    setIsActivityOpen(false)
    onFilterChange?.(filters)
  }

  const hasActiveFilters =
    Boolean(filters.city) ||
    filters.age != null ||
    filters.activities.length > 0 ||
    filters.partsOfCity.length > 0

  const clearFilters = () => {
    setFilters(getDefaultFilters())
  }

  return (
    <section
      className={`search-bar${showDistrict ? '' : ' search-bar--no-district'}`}
      aria-label={t('filters.ariaLabel')}
    >
      <div className="search-bar-panel">
        <div className="search-bar-grid">
          <div className="search-field">
            <LocationIcon />
            <div className="search-field-content">
              <span id="city-label" className="search-field-label">
                {t('filters.city')}
              </span>
              <span className="search-field-select" aria-hidden="true">
                {filters.city || t('filters.allCities')}
              </span>
            </div>
            <select
              id="city"
              aria-labelledby="city-label"
              value={filters.city}
              onChange={(e) => handleCityChange(e.target.value)}
              className="search-field-native-select"
            >
              <option value="">{t('filters.allCities')}</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {showDistrict && (
            <div
              ref={partsDropdownRef}
              className={`search-field search-field-dropdown search-field-dropdown-district ${isPartsOpen ? 'search-field-dropdown-open' : ''}`}
              onClick={(event) => {
                if (isSearchMenuTarget(event.target)) {
                  return
                }

                setIsPartsOpen((open) => !open)
              }}
            >
            <MapIcon />
            <div className="search-field-content">
              <span id="partsOfCity-label" className="search-field-label">
                {t('filters.district')}
              </span>
              <button
                type="button"
                id="partsOfCity"
                aria-labelledby="partsOfCity-label"
                aria-expanded={isPartsOpen}
                aria-controls="partsOfCity-menu"
                className="search-field-trigger"
              >
                {partsLabel}
              </button>

              {isPartsOpen && (
                <div id="partsOfCity-menu" className="search-field-menu" aria-labelledby="partsOfCity-label">
                  <div className="search-field-menu-search">
                    <input
                      ref={partsSearchRef}
                      type="search"
                      value={partsQuery}
                      onChange={(e) => setPartsQuery(e.target.value)}
                      placeholder={t('filters.districtSearch')}
                      className="search-field-menu-search-input"
                      aria-label={t('filters.districtSearch')}
                    />
                  </div>
                  <button
                    type="button"
                    className="search-field-option search-field-option-text search-field-option-bulk"
                    onClick={
                      filters.partsOfCity.length > 0 ? clearPartsOfCity : selectAllPartsOfCity
                    }
                  >
                    {filters.partsOfCity.length > 0 ? t('filters.clearAll') : t('filters.selectAll')}
                  </button>
                  <div className="search-field-menu-options">
                    {filteredPartsOfCityOptions.length > 0 ? (
                      filteredPartsOfCityOptions.map((part) => {
                        const isChecked = filters.partsOfCity.includes(part)

                        return (
                          <label key={part} className="search-field-option">
                            <input
                              type="checkbox"
                              className="search-field-checkbox"
                              checked={isChecked}
                              onChange={() => togglePartOfCity(part)}
                            />
                            <span>{getDistrictName(part, lang)}</span>
                          </label>
                        )
                      })
                    ) : (
                      <p className="search-field-menu-empty">{t('filters.noResults')}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          )}

          <div
            ref={ageDropdownRef}
            className={`search-field search-field-dropdown ${isAgeOpen ? 'search-field-dropdown-open' : ''}`}
            onClick={(event) => {
              if (isSearchMenuTarget(event.target)) {
                return
              }

              setIsAgeOpen((open) => !open)
            }}
          >
            <UsersIcon />
            <div className="search-field-content">
              <span id="age-label" className="search-field-label">
                {t('filters.age')}
              </span>
              <button
                type="button"
                id="age"
                aria-labelledby="age-label"
                aria-expanded={isAgeOpen}
                aria-controls="age-menu"
                className="search-field-trigger"
              >
                {agesLabel}
              </button>

              {isAgeOpen && (
                <div id="age-menu" className="search-field-menu" aria-labelledby="age-label">
                  <div className="search-field-menu-options">
                    <button
                      type="button"
                      className={`search-field-option search-field-option-text ${filters.age == null ? 'search-field-option-active' : ''}`}
                      onClick={() => selectAge(null)}
                    >
                      {t('filters.allAges')}
                    </button>
                    {ageOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        className={`search-field-option search-field-option-text ${filters.age === option.value ? 'search-field-option-active' : ''}`}
                        onClick={() => selectAge(option.value)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            ref={activityDropdownRef}
            className={`search-field search-field-dropdown ${isActivityOpen ? 'search-field-dropdown-open' : ''}`}
            onClick={(event) => {
              if (isSearchMenuTarget(event.target)) {
                return
              }

              setIsActivityOpen((open) => !open)
            }}
          >
            <SparklesIcon />
            <div className="search-field-content">
              <span id="activity-label" className="search-field-label">
                {t('filters.activity')}
              </span>
              <button
                type="button"
                id="activity"
                aria-labelledby="activity-label"
                aria-expanded={isActivityOpen}
                aria-controls="activity-menu"
                className="search-field-trigger"
              >
                {activitiesLabel}
              </button>

              {isActivityOpen && (
                <div id="activity-menu" className="search-field-menu" aria-labelledby="activity-label">
                  <div className="search-field-menu-search">
                    <input
                      ref={activitiesSearchRef}
                      type="search"
                      value={activitiesQuery}
                      onChange={(e) => setActivitiesQuery(e.target.value)}
                      placeholder={t('filters.activitySearch')}
                      className="search-field-menu-search-input"
                      aria-label={t('filters.activitySearch')}
                    />
                  </div>
                  <button
                    type="button"
                    className="search-field-option search-field-option-text search-field-option-bulk"
                    onClick={
                      filters.activities.length > 0 ? clearActivities : selectAllActivities
                    }
                  >
                    {filters.activities.length > 0 ? t('filters.clearAll') : t('filters.selectAll')}
                  </button>
                  <div className="search-field-menu-options">
                    {filteredActivityOptions.length > 0 ? (
                      filteredActivityOptions.map((activity) => {
                        const isChecked = filters.activities.includes(activity.slug)

                        return (
                          <label key={activity.slug} className="search-field-option">
                            <input
                              type="checkbox"
                              className="search-field-checkbox"
                              checked={isChecked}
                              onChange={() => toggleActivity(activity.slug)}
                            />
                            <span>{activity.name}</span>
                          </label>
                        )
                      })
                    ) : (
                      <p className="search-field-menu-empty">{t('filters.noResults')}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {applyOnChange ? null : (
            <button type="button" onClick={handleSearch} className="search-submit">
              <SearchIcon />
              {t('filters.find')}
            </button>
          )}
        </div>
        {applyOnChange && hasActiveFilters ? (
          <button type="button" className="search-clear" onClick={clearFilters}>
            {t('filters.clear')}
          </button>
        ) : null}
      </div>
    </section>
  )
}

export default FiltersBar
