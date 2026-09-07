import { getCityLocative } from '../data/cities'
import { getCategoryNameBySlug } from '../data/categories'
import { getDistrictName } from '../data/districts'
import type { SchoolFilters } from '../data/schools'
import { formatAgeOptionLabel } from './helpers'
import { translate } from './translate'
import type { Lang } from './types'

export const formatSchoolCountLabel = (count: number, lang: Lang): string => {
  if (lang === 'en') {
    return translate(lang, count === 1 ? 'search.schoolOne' : 'search.schoolMany', { n: count })
  }

  const mod10 = count % 10
  const mod100 = count % 100

  if (mod10 === 1 && mod100 !== 11) {
    return translate(lang, 'search.schoolOne', { n: count })
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return translate(lang, 'search.schoolFew', { n: count })
  }

  return translate(lang, 'search.schoolMany', { n: count })
}

export const formatSearchSubtitle = (
  count: number,
  hasAge: boolean,
  hasLocation: boolean,
  lang: Lang,
  hasActivity = false
): string => {
  const label = formatSchoolCountLabel(count, lang)

  if (hasAge && hasLocation) {
    return translate(lang, 'search.foundAgeLocation', { count: label })
  }

  if (hasAge) {
    if (lang === 'en') {
      return translate(lang, 'search.foundAge', { count: label })
    }

    const agreement = count === 1 ? 'koja odgovara' : 'koje odgovaraju'
    return translate(lang, 'search.foundAge', { count: label, agreement })
  }

  if (hasLocation) {
    return translate(lang, 'search.foundLocation', { count: label })
  }

  if (hasActivity) {
    return translate(lang, 'search.foundActivity', { count: label })
  }

  return translate(lang, 'search.found', { count: label })
}

const locationCountWord = (count: number, lang: Lang) => {
  const remainder10 = count % 10
  const remainder100 = count % 100

  if (lang === 'en') {
    return translate(lang, count === 1 ? 'map.locationOne' : 'map.locationMany')
  }

  if (remainder100 >= 11 && remainder100 <= 14) {
    return translate(lang, 'map.locationMany')
  }

  if (remainder10 === 1) {
    return translate(lang, 'map.locationOne')
  }

  if (remainder10 >= 2 && remainder10 <= 4) {
    return translate(lang, 'map.locationFew')
  }

  return translate(lang, 'map.locationMany')
}

export const formatLocationCountLabel = (count: number, lang: Lang): string =>
  `${count} ${locationCountWord(count, lang)}`

export const formatMapCountLabel = (count: number, cityName: string, lang: Lang): string => {
  const word = locationCountWord(count, lang)

  if (!cityName) {
    return translate(lang, 'map.countAll', { count, word })
  }

  const city = lang === 'en' ? cityName : getCityLocative(cityName)
  return translate(lang, 'map.count', { count, word, city })
}

const NAMED_FILTER_LIMIT = 3

const quoteName = (name: string, lang: Lang) => (lang === 'en' ? `“${name}”` : `„${name}”`)

const joinNames = (names: string[], lang: Lang) => {
  if (names.length === 1) {
    return names[0]
  }

  const conjunction = lang === 'en' ? 'and' : 'i'
  const last = names[names.length - 1]
  const rest = names.slice(0, -1)

  if (rest.length === 1) {
    return `${rest[0]} ${conjunction} ${last}`
  }

  return `${rest.join(', ')} ${conjunction} ${last}`
}

const formatNamedList = (names: string[], lang: Lang) => {
  if (names.length === 0 || names.length > NAMED_FILTER_LIMIT) {
    return null
  }

  return joinNames(names.map((name) => quoteName(name, lang)), lang)
}

const emptyHintKey = (
  hasAge: boolean,
  hasActivity: boolean,
  hasDistrict: boolean,
  includeDistrict: boolean
) => {
  if (hasAge && hasActivity && hasDistrict) {
    return 'search.emptyHintAll'
  }

  if (hasAge && hasActivity) {
    return 'search.emptyHintAgeActivity'
  }

  if (hasAge && hasDistrict) {
    return 'search.emptyHintAgeDistrict'
  }

  if (hasActivity && hasDistrict) {
    return 'search.emptyHintActivityDistrict'
  }

  if (hasAge) {
    return 'search.emptyHintAge'
  }

  if (hasActivity) {
    return 'search.emptyHintActivity'
  }

  if (hasDistrict) {
    return 'search.emptyHintDistrict'
  }

  return includeDistrict ? 'search.emptyHintAll' : 'search.emptyHintAgeActivity'
}

export const formatEmptyFilterMessage = (
  filters: Pick<SchoolFilters, 'age' | 'activities' | 'partsOfCity'>,
  lang: Lang,
  includeDistrict = true
) => {
  const hasAge = filters.age != null
  const hasActivity = filters.activities.length > 0
  const hasDistrict = includeDistrict && filters.partsOfCity.length > 0
  const clauses: string[] = []

  if (hasActivity) {
    const names = filters.activities.map((slug) => getCategoryNameBySlug(slug, lang))
    const listed = formatNamedList(names, lang)

    if (listed && names.length === 1) {
      clauses.push(translate(lang, 'search.emptyForActivity', { activity: names[0] }))
    } else if (listed) {
      clauses.push(translate(lang, 'search.emptyForActivities', { activities: listed }))
    } else {
      clauses.push(translate(lang, 'search.emptyForSelectedActivities'))
    }
  }

  if (hasAge && filters.age != null) {
    clauses.push(
      translate(lang, 'search.emptyForAge', { age: formatAgeOptionLabel(filters.age, lang) })
    )
  }

  if (hasDistrict) {
    const names = filters.partsOfCity.map((part) => getDistrictName(part, lang))
    const listed = formatNamedList(names, lang)
    const combined = hasAge || hasActivity
    const one = names.length === 1

    if (listed && one) {
      clauses.push(
        translate(lang, combined ? 'search.emptyInDistrict' : 'search.emptyForDistrict', {
          district: names[0],
        })
      )
    } else if (listed) {
      clauses.push(
        translate(lang, combined ? 'search.emptyInDistricts' : 'search.emptyForDistricts', {
          districts: listed,
        })
      )
    } else {
      clauses.push(
        translate(lang, combined ? 'search.emptyInSelectedDistricts' : 'search.emptyForSelectedDistricts')
      )
    }
  }

  const title = clauses.length
    ? `${translate(lang, 'search.emptyLead')} ${clauses.join(' ')}.`
    : translate(lang, 'search.emptyGeneric')

  return {
    title,
    hint: translate(lang, emptyHintKey(hasAge, hasActivity, hasDistrict, includeDistrict)),
  }
}
