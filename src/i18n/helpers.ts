import type { Lang, LocalizedParagraphs, LocalizedText } from './types'

export const DEFAULT_LANG: Lang = 'sr'
export const OTHER_LANG: Record<Lang, Lang> = { sr: 'en', en: 'sr' }

export const isLang = (value: string): value is Lang => value === 'sr' || value === 'en'

/** Language comes from the route only: `/en` and `/en/...` are English. */
export const getLangFromPath = (pathname: string): Lang =>
  pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'sr'

const isBlank = (value: string | undefined | null): boolean =>
  value == null || value.trim() === ''

const warnedEnglish = new Set<string>()

export const warnMissingEnglish = (context: string, detail?: string) => {
  if (!import.meta.env.DEV) {
    return
  }

  const key = `${context}::${detail ?? ''}`
  if (warnedEnglish.has(key)) {
    return
  }

  warnedEnglish.add(key)
  const suffix = detail ? ` — ${detail}` : ''
  console.warn(
    `[i18n] Missing English text (${context})${suffix}. Serbian was used as a technical fallback only.`
  )
}

export const getLocalizedText = (value: LocalizedText, lang: Lang, context = 'LocalizedText'): string => {
  const requested = value[lang]

  if (lang === 'en' && isBlank(requested)) {
    warnMissingEnglish(context, 'en is missing or empty')
    return value.sr
  }

  return requested || value.sr
}

export const getLocalizedParagraphs = (
  value: LocalizedParagraphs,
  lang: Lang,
  context = 'LocalizedParagraphs'
): string[] => {
  const requested = value[lang]

  if (lang !== 'en') {
    return requested?.length ? requested : value.sr
  }

  if (!requested || requested.length === 0) {
    warnMissingEnglish(context, 'en paragraphs are missing or empty')
    return value.sr
  }

  const blankIndexes = requested
    .map((paragraph, index) => (isBlank(paragraph) ? index : -1))
    .filter((index) => index >= 0)

  if (blankIndexes.length > 0) {
    warnMissingEnglish(context, `empty en paragraph(s) at index ${blankIndexes.join(', ')}`)
  }

  if (value.sr.length > requested.length) {
    warnMissingEnglish(
      context,
      `en has ${requested.length} paragraph(s), sr has ${value.sr.length}`
    )
  }

  const resolved = requested.map((paragraph, index) => {
    if (!isBlank(paragraph)) {
      return paragraph
    }

    return value.sr[index] ?? ''
  })

  if (value.sr.length > requested.length) {
    return [...resolved, ...value.sr.slice(requested.length)]
  }

  return resolved
}

export const interpolate = (template: string, vars?: Record<string, string | number>): string => {
  if (!vars) {
    return template
  }

  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    vars[key] == null ? `{${key}}` : String(vars[key])
  )
}

export const formatAgeOptionLabel = (age: number, lang: Lang): string => {
  if (lang === 'en') {
    return age === 1 ? '1 year' : `${age} years`
  }

  const remainder = age % 10
  const isTeen = age >= 10 && age <= 20

  if (remainder >= 2 && remainder <= 4 && !isTeen) {
    return `${age} godine`
  }

  return `${age} godina`
}

export const formatAgeLabel = (minAge: number, maxAge: number | null, lang: Lang): string => {
  if (maxAge == null) {
    return lang === 'en' ? `${minAge}+ years` : `${minAge}+ godina`
  }

  if (minAge === maxAge) {
    return formatAgeOptionLabel(minAge, lang)
  }

  return lang === 'en' ? `${minAge}–${maxAge} years` : `${minAge}–${maxAge} godina`
}

export const formatPopupAge = (minAge: number, maxAge: number | null, lang: Lang): string => {
  const label = formatAgeLabel(minAge, maxAge, lang)
  return lang === 'en'
    ? label.replace(/\s*years/g, ' yrs').replace(/\s+/g, ' ').trim()
    : label.replace(/\s*godina|\s*godine/g, ' god.').replace(/\s+/g, ' ').trim()
}

export type SchoolAgeRange = {
  minAge: number
  maxAge: number | null
  ageLabel: string
  agesByCategory?: Partial<Record<string, { minAge: number; maxAge: number | null; ageLabel: string }>>
}

/** Category override when the school is opened from one activity; otherwise the school range. */
export const resolveSchoolAge = (school: SchoolAgeRange, categoryId?: string) =>
  (categoryId && school.agesByCategory?.[categoryId]) || {
    minAge: school.minAge,
    maxAge: school.maxAge,
    ageLabel: school.ageLabel,
  }

/** Serbian keeps stored `ageLabel`; English is generated from min/max. */
export const schoolAgeLabel = (
  school: SchoolAgeRange,
  lang: Lang,
  compact = false,
  categoryId?: string
): string => {
  const range = resolveSchoolAge(school, categoryId)

  if (lang === 'en') {
    return compact
      ? formatPopupAge(range.minAge, range.maxAge, lang)
      : formatAgeLabel(range.minAge, range.maxAge, lang)
  }

  if (!compact) {
    return range.ageLabel
  }

  return range.ageLabel.replace(/\s*godina|\s*godine/g, ' god.').replace(/\s+/g, ' ').trim()
}

export const warnMissingTranslation = (key: string, lang: Lang) => {
  if (!import.meta.env.DEV) {
    return
  }

  console.warn(
    `[i18n] Missing UI key "${key}" for language "${lang}". Check src/i18n/translations.ts.`
  )
}
