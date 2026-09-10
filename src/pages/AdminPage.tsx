import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCategoryNameBySlug } from '../data/categories'
import { preLaunchSchools } from '../data/preLaunchSchools'
import type { PreLaunchSchool } from '../data/preLaunchSchools'
import { rejectedSchools } from '../data/rejectedSchools'
import type { RejectedSchool } from '../data/rejectedSchools'
import {
  CONTACTED_STORAGE_KEY,
  VERIFIED_STORAGE_KEY,
  loadContactedFlags,
  loadVerifiedFlags,
  persistContactedSchoolIds,
  persistVerifiedSchoolIds,
  verifiedIdsFromFlags,
} from '../data/adminStorage'
import {
  formatSchoolCategoryNames,
  formatPhoneHref,
  getAdminActivityOptions,
  collectSchoolPhones,
  getContactPhones,
  getSchoolEmail,
  getSchoolNameSr,
  getSchoolWebsite,
  schools,
} from '../data/schools'
import type { School } from '../data/schools'
import './admin.css'

type AdminTab = 'catalog' | 'prelaunch' | 'rejected'

const TABS: { id: AdminTab; label: string; panelId: string }[] = [
  { id: 'catalog', label: 'Škole', panelId: 'admin-tabpanel-catalog' },
  { id: 'prelaunch', label: 'Upit za prikaz', panelId: 'admin-tabpanel-prelaunch' },
  { id: 'rejected', label: 'Odbijeno', panelId: 'admin-tabpanel-rejected' },
]

const toggleFlag = (schoolId: string, current: Record<string, boolean>) => ({
  ...current,
  [schoolId]: !current[schoolId],
})

const formatCategorySlugs = (slugs: string[]) =>
  slugs.map((slug) => getCategoryNameBySlug(slug, 'sr')).join(', ')

const sortAdminSchools = (list: School[]) =>
  [...list].sort((a, b) => {
    const bySport = formatSchoolCategoryNames(a).localeCompare(formatSchoolCategoryNames(b), 'sr')

    if (bySport !== 0) {
      return bySport
    }

    return getSchoolNameSr(a).localeCompare(getSchoolNameSr(b), 'sr')
  })

const sortPreLaunchSchools = (list: PreLaunchSchool[]) =>
  [...list].sort((a, b) => {
    const bySport = formatCategorySlugs(a.categorySlugs).localeCompare(
      formatCategorySlugs(b.categorySlugs),
      'sr'
    )

    if (bySport !== 0) {
      return bySport
    }

    return a.name.localeCompare(b.name, 'sr')
  })

const sortRejectedSchools = (list: RejectedSchool[]) =>
  [...list].sort((a, b) => {
    const sportA = getCategoryNameBySlug(a.categorySlug, 'sr')
    const sportB = getCategoryNameBySlug(b.categorySlug, 'sr')
    const bySport = sportA.localeCompare(sportB, 'sr')

    if (bySport !== 0) {
      return bySport
    }

    return a.name.localeCompare(b.name, 'sr')
  })

const sportOptionsFromSlugs = (slugs: string[]) =>
  [...new Set(slugs)]
    .map((slug) => ({ slug, name: getCategoryNameBySlug(slug, 'sr') }))
    .sort((a, b) => a.name.localeCompare(b.name, 'sr'))

const displayWebsite = (website: string) => website.replace(/^https?:\/\/(www\.)?/, '')

const AdminWebsiteCell = ({ website }: { website?: string }) => {
  if (!website) {
    return <span className="admin-table-empty">—</span>
  }

  return (
    <a href={website} className="admin-table-link" target="_blank" rel="noreferrer">
      {displayWebsite(website)}
    </a>
  )
}

const AdminEmailCell = ({ email }: { email?: string }) => {
  if (!email) {
    return <span className="admin-table-empty">—</span>
  }

  return (
    <a href={`mailto:${email}`} className="admin-table-link">
      {email}
    </a>
  )
}

const AdminPhonesCell = ({ phones }: { phones: string[] }) => {
  const phone = phones[0]

  if (!phone) {
    return <span className="admin-table-empty">—</span>
  }

  return (
    <a href={formatPhoneHref(phone)} className="admin-table-link admin-table-phone">
      {phone}
    </a>
  )
}

const AdminCheckboxes = ({
  schoolId,
  schoolName,
  isContacted,
  isVerified,
  onToggleContacted,
  onToggleVerified,
}: {
  schoolId: string
  schoolName: string
  isContacted: boolean
  isVerified: boolean
  onToggleContacted: (id: string) => void
  onToggleVerified: (id: string) => void
}) => (
  <>
    <td className="admin-table-col-check">
      <input
        type="checkbox"
        className="admin-table-checkbox"
        checked={isContacted}
        onChange={() => onToggleContacted(schoolId)}
        aria-label={`Kontaktirano — ${schoolName}`}
      />
    </td>
    <td className="admin-table-col-check">
      <input
        type="checkbox"
        className="admin-table-checkbox"
        checked={isVerified}
        onChange={() => onToggleVerified(schoolId)}
        aria-label={`Provereno sa vlasnikom — ${schoolName}`}
      />
    </td>
  </>
)

const AdminPage = () => {
  const [tab, setTab] = useState<AdminTab>('catalog')
  const [sportFilter, setSportFilter] = useState('')
  const [contacted, setContacted] = useState<Record<string, boolean>>(loadContactedFlags)
  const [verified, setVerified] = useState<Record<string, boolean>>(loadVerifiedFlags)

  useEffect(() => {
    const ids = verifiedIdsFromFlags(contacted)
    localStorage.setItem(CONTACTED_STORAGE_KEY, JSON.stringify(contacted))
    if (ids.length > 0) {
      persistContactedSchoolIds(ids)
    }
  }, [contacted])

  useEffect(() => {
    localStorage.setItem(VERIFIED_STORAGE_KEY, JSON.stringify(verified))
  }, [verified])

  const isCatalog = tab === 'catalog'
  const isPrelaunch = tab === 'prelaunch'
  const isRejected = tab === 'rejected'

  const catalogSportOptions = getAdminActivityOptions()
  const prelaunchSportOptions = useMemo(
    () => sportOptionsFromSlugs(preLaunchSchools.flatMap((school) => school.categorySlugs)),
    []
  )
  const rejectedSportOptions = useMemo(
    () => sportOptionsFromSlugs(rejectedSchools.map((school) => school.categorySlug)),
    []
  )
  const sportOptions = isCatalog
    ? catalogSportOptions
    : isPrelaunch
      ? prelaunchSportOptions
      : rejectedSportOptions

  const catalogRows = useMemo(() => {
    const listed = schools.filter((school) => !school.brandSchoolId)
    const filtered =
      sportFilter === ''
        ? listed
        : listed.filter((school) => school.categorySlugs.includes(sportFilter))

    return sortAdminSchools(filtered)
  }, [sportFilter])

  const prelaunchRows = useMemo(() => {
    const filtered =
      sportFilter === ''
        ? preLaunchSchools
        : preLaunchSchools.filter((school) => school.categorySlugs.includes(sportFilter))

    return sortPreLaunchSchools(filtered)
  }, [sportFilter])

  const rejectedRows = useMemo(() => {
    const filtered =
      sportFilter === ''
        ? rejectedSchools
        : rejectedSchools.filter((school) => school.categorySlug === sportFilter)

    return sortRejectedSchools(filtered)
  }, [sportFilter])

  const contactedCount = catalogRows.filter((school) => contacted[school.id]).length
  const verifiedCount = catalogRows.filter((school) => verified[school.id]).length
  const rowsLength = isCatalog
    ? catalogRows.length
    : isPrelaunch
      ? prelaunchRows.length
      : rejectedRows.length

  const emptyState = (() => {
    if (isCatalog) {
      return 'Nema škola za izabrani sport.'
    }

    if (isRejected) {
      return 'Nema odbijenih škola za izabrani sport.'
    }

    if (preLaunchSchools.length === 0) {
      return 'Još nema škola. Javi kada kontaktiraš neku, pa je dodajem ovde.'
    }

    return 'Nema škola za izabrani sport.'
  })()

  const subtitle = isCatalog
    ? 'Označi koga si kontaktirala, pa red kada su podaci potvrđeni.'
    : isPrelaunch
      ? 'Škole koje si pitala da se prikažu na sajtu. Nisu u katalogu — samo evidencija.'
      : 'Škole koje su bile u katalogu, a vlasnici su tražili uklanjanje. Ostaju samo kontakt podaci.'

  return (
    <div className="admin-page">
      <header className="admin-page-header">
        <div>
          <Link to="/" className="admin-page-back">
            ← Nazad na sajt
          </Link>
          <h1 className="admin-page-title">Admin — škole</h1>
          <p className="admin-page-subtitle">{subtitle}</p>
        </div>

        {isCatalog ? (
          <div className="admin-page-stats">
            <span className="admin-page-stat">
              Kontaktirano: <strong>{contactedCount}</strong> / {catalogRows.length}
            </span>
            <span className="admin-page-stat">
              Provereno: <strong>{verifiedCount}</strong> / {catalogRows.length}
            </span>
          </div>
        ) : (
          <div className="admin-page-stats">
            <span className="admin-page-stat">
              {isPrelaunch ? 'Škola' : 'Odbijeno'}: <strong>{rowsLength}</strong>
            </span>
          </div>
        )}
      </header>

      <div className="admin-tabs" role="tablist" aria-label="Admin tabele">
        {TABS.map((item) => {
          const isActive = tab === item.id

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`admin-tab-${item.id}`}
              aria-selected={isActive}
              aria-controls={item.panelId}
              className={`admin-tab${isActive ? ' is-active' : ''}`}
              onClick={() => {
                setTab(item.id)
                setSportFilter('')
              }}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="admin-page-toolbar">
        <label className="admin-filter">
          <select
            className="admin-filter-select"
            value={sportOptions.some((option) => option.slug === sportFilter) ? sportFilter : ''}
            onChange={(event) => setSportFilter(event.target.value)}
          >
            <option value="">Sve aktivnosti</option>
            {sportOptions.map((option) => (
              <option key={option.slug} value={option.slug}>
                {option.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div
        className="admin-table-wrap"
        role="tabpanel"
        id={TABS.find((item) => item.id === tab)?.panelId}
        aria-labelledby={`admin-tab-${tab}`}
      >
        <table className="admin-table">
          <thead>
            <tr>
              {isCatalog ? (
                <>
                  <th className="admin-table-col-check" scope="col">
                    Kontakt
                  </th>
                  <th className="admin-table-col-check" scope="col">
                    Provera
                  </th>
                </>
              ) : null}
              <th scope="col">Aktivnost</th>
              <th scope="col">Škola</th>
              <th scope="col">Websajt</th>
              <th scope="col">Email</th>
              <th scope="col">Telefon</th>
            </tr>
          </thead>
          <tbody>
            {isCatalog
              ? catalogRows.map((school) => {
                  const sportName = formatSchoolCategoryNames(school)
                  const schoolName = getSchoolNameSr(school)
                  const isContacted = Boolean(contacted[school.id])
                  const isVerified = Boolean(verified[school.id])
                  const rowClass = isVerified
                    ? 'admin-table-row--verified'
                    : isContacted
                      ? 'admin-table-row--contacted'
                      : ''

                  return (
                    <tr key={school.id} className={rowClass}>
                      <AdminCheckboxes
                        schoolId={school.id}
                        schoolName={schoolName}
                        isContacted={isContacted}
                        isVerified={isVerified}
                        onToggleContacted={(id) =>
                          setContacted((current) => {
                            const next = toggleFlag(id, current)
                            persistContactedSchoolIds(verifiedIdsFromFlags(next))
                            return next
                          })
                        }
                        onToggleVerified={(id) =>
                          setVerified((current) => {
                            const next = toggleFlag(id, current)
                            persistVerifiedSchoolIds(verifiedIdsFromFlags(next))
                            return next
                          })
                        }
                      />
                      <td>{sportName}</td>
                      <td>
                        {school.hidden ? (
                          `${schoolName} (sakriveno)`
                        ) : (
                          <Link to={`/skola/${school.slug}`} className="admin-table-school-link">
                            {schoolName}
                          </Link>
                        )}
                      </td>
                      <td>
                        <AdminWebsiteCell website={getSchoolWebsite(school)} />
                      </td>
                      <td>
                        <AdminEmailCell email={getSchoolEmail(school)} />
                      </td>
                      <td>
                        <AdminPhonesCell phones={collectSchoolPhones(school)} />
                      </td>
                    </tr>
                  )
                })
              : isPrelaunch
                ? prelaunchRows.map((school) => (
                    <tr key={school.id}>
                      <td>{formatCategorySlugs(school.categorySlugs)}</td>
                      <td>{school.name}</td>
                      <td>
                        <AdminWebsiteCell website={school.website} />
                      </td>
                      <td>
                        <AdminEmailCell email={school.email} />
                      </td>
                      <td>
                        <AdminPhonesCell phones={getContactPhones(school.phone)} />
                      </td>
                    </tr>
                  ))
                : rejectedRows.map((school) => (
                    <tr key={school.id}>
                      <td>{getCategoryNameBySlug(school.categorySlug, 'sr')}</td>
                      <td>{school.name}</td>
                      <td>
                        <AdminWebsiteCell website={school.website} />
                      </td>
                      <td>
                        <AdminEmailCell email={school.email} />
                      </td>
                      <td>
                        <AdminPhonesCell phones={getContactPhones(school.phone)} />
                      </td>
                    </tr>
                  ))}
          </tbody>
        </table>

        {rowsLength === 0 && <p className="admin-table-empty-state">{emptyState}</p>}
      </div>
    </div>
  )
}

export default AdminPage
