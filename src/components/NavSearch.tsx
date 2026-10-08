import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  formatSchoolCategoryNames,
  formatSchoolLocationLabel,
  getSchoolName,
  searchSchoolsByWords,
} from '../data/schools'
import { useI18n } from '../i18n/useI18n'

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    className="nav-search-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

type NavSearchProps = {
  onNavigate?: () => void
}

const NavSearch = ({ onNavigate }: NavSearchProps) => {
  const { lang, path, t } = useI18n()
  const navigate = useNavigate()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const rootRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const results = searchSchoolsByWords(query, lang)
  const showResults = isOpen && query.trim().length > 0

  useEffect(() => {
    setIsOpen(false)
    setQuery('')
  }, [location.pathname, location.search])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
        setQuery('')
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  const openSchool = (slug: string) => {
    setIsOpen(false)
    setQuery('')
    onNavigate?.()
    navigate(path.school(slug))
  }

  return (
    <div ref={rootRef} className={`nav-search${isOpen ? ' is-open' : ''}`}>
      {isOpen ? (
        <form
          className="nav-search-form"
          role="search"
          onSubmit={(event) => {
            event.preventDefault()

            if (results[0]) {
              openSchool(results[0].slug)
            }
          }}
        >
          <label className="nav-search-field">
            <SearchIcon />
            <span className="sr-only">{t('nav.search')}</span>
            <input
              ref={inputRef}
              type="search"
              value={query}
              placeholder={t('nav.searchPlaceholder')}
              className="nav-search-input"
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
          {showResults ? (
            <ul className="nav-search-results">
              {results.length > 0 ? (
                results.map((school) => (
                  <li key={school.id}>
                    <button
                      type="button"
                      className="nav-search-result"
                      onClick={() => openSchool(school.slug)}
                    >
                      <span className="nav-search-result-title">{getSchoolName(school, lang)}</span>
                      <span className="nav-search-result-meta">
                        {formatSchoolLocationLabel(school, lang)}
                        {' · '}
                        {formatSchoolCategoryNames(school, lang)}
                      </span>
                    </button>
                  </li>
                ))
              ) : (
                <li className="nav-search-empty">{t('nav.searchNoResults')}</li>
              )}
            </ul>
          ) : null}
        </form>
      ) : (
        <button type="button" className="nav-search-toggle" onClick={() => setIsOpen(true)}>
          <SearchIcon />
          {t('nav.search')}
        </button>
      )}
    </div>
  )
}

export default NavSearch
