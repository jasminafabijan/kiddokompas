import type { SchoolFilters } from '../data/schools'

const getArrayParam = (value: string | null) => {
  if (!value) {
    return []
  }

  return value
    .split(',')
    .map((item) => item.trim())
    .filter((item) => item.length > 0)
}

const cloneFilters = (filters: SchoolFilters): SchoolFilters => ({
  city: filters.city,
  partsOfCity: [...filters.partsOfCity],
  age: filters.age,
  activities: [...filters.activities],
})

export const getDefaultFilters = (): SchoolFilters => ({
  city: '',
  partsOfCity: [],
  age: null,
  activities: [],
})

export const getFiltersFromSearchParams = (searchParams: URLSearchParams): SchoolFilters => {
  const ageParam = searchParams.get('age')
  const parsedAge = ageParam ? Number(ageParam) : NaN
  const city = searchParams.get('city')

  return {
    city: city ?? '',
    partsOfCity: getArrayParam(searchParams.get('partsOfCity')),
    age: Number.isFinite(parsedAge) ? parsedAge : null,
    activities: getArrayParam(searchParams.get('activities')),
  }
}

export const filtersToSearchParams = (filters: SchoolFilters) => {
  const searchParams = new URLSearchParams()

  if (filters.city) {
    searchParams.set('city', filters.city)
  }

  if (filters.partsOfCity.length > 0) {
    searchParams.set('partsOfCity', filters.partsOfCity.join(','))
  }

  if (filters.age != null) {
    searchParams.set('age', String(filters.age))
  }

  if (filters.activities.length > 0) {
    searchParams.set('activities', filters.activities.join(','))
  }

  return searchParams
}

export type HomeLocationState = {
  filters?: SchoolFilters
}

let pendingHomeFilters: SchoolFilters | null = null

export const stashHomeFilters = (filters: SchoolFilters) => {
  pendingHomeFilters = cloneFilters(filters)
}

export const clearPendingHomeFilters = () => {
  pendingHomeFilters = null
}

const getFiltersFromLocationState = (state: unknown): SchoolFilters | null => {
  const filters = (state as HomeLocationState | null)?.filters

  if (!filters) {
    return null
  }

  return {
    ...getDefaultFilters(),
    ...filters,
    partsOfCity: Array.isArray(filters.partsOfCity) ? [...filters.partsOfCity] : [],
    activities: Array.isArray(filters.activities) ? [...filters.activities] : [],
  }
}

export const getInitialHomeFilters = (state: unknown): SchoolFilters => {
  // Prefer in-memory stash from "Nazad na pretragu" click — survives SPA sessions
  // that began with a document reload (when history.state alone would be ignored).
  if (pendingHomeFilters) {
    return cloneFilters(pendingHomeFilters)
  }

  return getFiltersFromLocationState(state) ?? getDefaultFilters()
}
