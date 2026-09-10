import type { PopupOptions } from 'leaflet'
import { QUERY, schoolPath } from '../i18n/routes'
import type { Lang } from '../i18n/types'

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

export const schoolMapHref = (
  school: { slug: string; categorySlugs: string[] },
  lang: Lang,
  addressIndex?: number
) => {
  const base = schoolPath(lang, school.slug, school.categorySlugs[0])

  if (addressIndex == null || addressIndex < 0) {
    return base
  }

  const separator = base.includes('?') ? '&' : '?'
  return `${base}${separator}${QUERY.location[lang]}=${addressIndex}`
}

export const schoolMapPopupOptions: PopupOptions = {
  maxWidth: 260,
  minWidth: 168,
  closeButton: true,
  className: 'school-map-popup-wrap',
}

type PopupSchool = {
  name: string
  ageLabel: string
  href?: string
}

export const buildSchoolMapPopupHtml = (
  street: string,
  schools: PopupSchool[],
  seeDetailsLabel: string
) => {
  if (schools.length === 0) {
    return `<div class="school-map-popup"><p class="school-map-popup-meta">${escapeHtml(street)}</p></div>`
  }

  const schoolsHtml = schools
    .map((school) => {
      const button = school.href
        ? `<a class="school-map-popup-button" href="${escapeHtml(school.href)}">${escapeHtml(seeDetailsLabel)}</a>`
        : ''

      return `<div class="school-map-popup-school">
        <p class="school-map-popup-title">${escapeHtml(school.name)}</p>
        <p class="school-map-popup-meta">${escapeHtml(school.ageLabel)}</p>
        <p class="school-map-popup-meta">${escapeHtml(street)}</p>
        ${button}
      </div>`
    })
    .join('')

  return `<div class="school-map-popup">${schoolsHtml}</div>`
}
