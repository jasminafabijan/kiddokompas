import { useEffect, useLayoutEffect, useState } from 'react'
import { useLocation, useNavigate, useNavigationType } from 'react-router-dom'
import { hasSavedScroll } from '../utils/scrollRestoration'
import { jumpToCategories } from '../utils/scrollToElement'
import { isCategoriesHash } from '../i18n/routes'
import { useI18n } from '../i18n/useI18n'
import {
  clearPendingHomeFilters,
  filtersToSearchParams,
  getInitialHomeFilters,
} from '../utils/searchFilters'
import CategoryCards from './CategoryCards'
import FiltersBar, { type FilterValues } from './FiltersBar'
import Hero from './Hero'
import Navbar from './Navbar'
import RecentlyAddedSection from './RecentlyAddedSection'
import SupportSection from './SupportSection'

const HomePage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const navigationType = useNavigationType()
  const { path } = useI18n()
  const [initialFilters] = useState(() => getInitialHomeFilters(location.state))

  useLayoutEffect(() => {
    if (!isCategoriesHash(location.hash)) {
      return
    }

    if (navigationType === 'PUSH') {
      jumpToCategories()
      return
    }

    // Direct visit / refresh of the categories hash. Back/forward keeps saved scroll.
    if (navigationType === 'POP' && !hasSavedScroll(location.key)) {
      jumpToCategories()
    }
  }, [location.hash, location.key, navigationType])

  // Clear after mount so refresh does not restore filters.
  // Timeout + cleanup keeps React Strict Mode double-mount from wiping them early.
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      clearPendingHomeFilters()

      if (location.state) {
        navigate('.', { replace: true, state: null })
      }
    }, 0)

    return () => window.clearTimeout(timeoutId)
  }, [location.state, navigate])

  const handleFilterChange = (filters: FilterValues) => {
    const params = filtersToSearchParams(filters).toString()
    navigate(`${path.search}${params ? `?${params}` : ''}`)
  }

  return (
    <div className="page-shell">
      <Navbar />
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <FiltersBar initialFilters={initialFilters} onFilterChange={handleFilterChange} />

        <CategoryCards />
        <SupportSection />
        <RecentlyAddedSection />
      </div>
    </div>
  )
}

export default HomePage
