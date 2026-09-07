import { useState } from 'react'
import SchoolContactList, {
  buildContactLinks,
  LocationPinIcon,
} from './SchoolContactList'
import SchoolMap from './SchoolMap'
import type { SchoolAddress } from '../data/schools'
import {
  formatSchoolAddress,
  getLocationOptionLabel,
  getMapsHref,
} from '../data/schools'
import { formatLocationCountLabel } from '../i18n/formatters'
import { useI18n } from '../i18n/useI18n'

type SchoolLocationsProps = {
  city: string
  addresses: SchoolAddress[]
  placeName: string
  hideHrefs?: string[]
}

const normalizeHref = (href: string) => href.replace(/\/$/, '').toLowerCase()

const SchoolLocations = ({ city, addresses, placeName, hideHrefs = [] }: SchoolLocationsProps) => {
  const { lang, t } = useI18n()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const selected = addresses[selectedIndex] ?? addresses[0]
  const mapAddresses = addresses.filter((address) => address.lat != null && address.lng != null)
  const hiddenHrefs = new Set(hideHrefs.map(normalizeHref))
  const contactLinks = selected
    ? [
        ...buildContactLinks(selected.contact).filter(
          (link) => !hiddenHrefs.has(normalizeHref(link.href))
        ),
        {
          label: formatSchoolAddress(selected, lang),
          href: getMapsHref(selected, placeName),
          icon: <LocationPinIcon />,
          external: true,
        },
      ]
    : []

  if (addresses.length === 0) {
    return null
  }

  return (
    <section className="school-detail-section school-locations" aria-labelledby="school-location">
      <h2 id="school-location" className="school-detail-section-title">
        {t('school.locations')}
      </h2>
      <p className="school-locations-summary">
        <span className="school-locations-city">{city}</span>
        <span className="school-locations-count">
          {' '}
          · {formatLocationCountLabel(addresses.length, lang)}
        </span>
      </p>
      <div className="school-locations-picker">
        <label htmlFor="school-locations-select" className="school-locations-label">
          {t('school.chooseArea')}
        </label>
        <div className="school-locations-select-wrap">
          <select
            id="school-locations-select"
            className="school-locations-select"
            value={String(selectedIndex)}
            onChange={(event) => setSelectedIndex(Number(event.target.value))}
          >
            {addresses.map((address, index) => (
              <option key={`${address.city}-${address.street}-${index}`} value={index}>
                {getLocationOptionLabel(address, lang)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="school-locations-details">
        <SchoolContactList links={contactLinks} />
        {mapAddresses.length > 0 ? (
          <SchoolMap addresses={mapAddresses} placeName={placeName} />
        ) : null}
      </div>
    </section>
  )
}

export default SchoolLocations
