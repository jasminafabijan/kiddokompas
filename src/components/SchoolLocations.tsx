import { useState } from 'react'
import SchoolContactList, { buildContactLinks } from './SchoolContactList'
import type { SchoolAddress } from '../data/schools'
import { getLocationOptionLabel } from '../data/schools'
import { useI18n } from '../i18n/useI18n'

type SchoolLocationsProps = {
  addresses: SchoolAddress[]
  /** Pre-select a hall (e.g. from map `?lokacija=` / `?location=`). */
  initialSelectedIndex?: number | null
}

const SchoolLocations = ({ addresses, initialSelectedIndex = null }: SchoolLocationsProps) => {
  const { lang, t } = useI18n()
  const resolvedInitial =
    initialSelectedIndex != null &&
    Number.isInteger(initialSelectedIndex) &&
    initialSelectedIndex >= 0 &&
    initialSelectedIndex < addresses.length
      ? initialSelectedIndex
      : null
  const [selectedIndex, setSelectedIndex] = useState<number | null>(resolvedInitial)
  const selected = selectedIndex == null ? undefined : addresses[selectedIndex]
  const contactLinks = selected ? buildContactLinks(selected.contact) : []

  if (addresses.length === 0) {
    return null
  }

  return (
    <div className="school-locations">
      <div className="school-locations-picker">
        <div className="school-locations-select-wrap">
          <select
            id="school-locations-select"
            className="school-locations-select"
            aria-label={t('school.selectLocation')}
            value={selectedIndex == null ? '' : String(selectedIndex)}
            onChange={(event) => {
              const next = event.target.value
              setSelectedIndex(next === '' ? null : Number(next))
            }}
          >
            <option value="">{t('school.selectLocation')}</option>
            {addresses.map((address, index) => (
              <option key={`${address.city}-${address.street}-${index}`} value={index}>
                {getLocationOptionLabel(address, lang)}
              </option>
            ))}
          </select>
        </div>
      </div>
      {contactLinks.length > 0 ? (
        <div className="school-locations-details">
          <SchoolContactList links={contactLinks} />
        </div>
      ) : null}
    </div>
  )
}

export default SchoolLocations
