import { getCategoryBySlug, getCategoryName, getCategoryNameBySlug } from './categories'
import { getCityOptions } from './cities'
import { getDistrictName, DISTRICT_LABELS } from './districts'
import { CATALOG_ADD_ORDER } from './catalogAddOrder'
import { VERIFIED_SCHOOL_IDS } from './verifiedSchoolIds'
import { getStreetName } from './streets'
import { formatAgeLabel, formatAgeOptionLabel, getLocalizedText, warnMissingEnglish } from '../i18n/helpers'
import type { Lang } from '../i18n/types'
import { balletSchools } from './schoolCategories/ballet'
import { jazzBalletSchools } from './schoolCategories/jazz-ballet'
import { footballSchools } from './schoolCategories/football'
import { actingSchools } from './schoolCategories/acting'
import { tennisSchools } from './schoolCategories/tennis'
import { tableTennisSchools } from './schoolCategories/table-tennis'
import { basketballSchools } from './schoolCategories/basketball'
import { karateSchools } from './schoolCategories/karate'
import { boxingSchools } from './schoolCategories/boxing'
import { aikidoSchools } from './schoolCategories/aikido'
import { chessSchools } from './schoolCategories/chess'
import { ridingSchools } from './schoolCategories/riding'
import { folkloreSchools } from './schoolCategories/folklore'
import { volleyballSchools } from './schoolCategories/volleyball'
import { danceSportSchools } from './schoolCategories/dance-sport'
import { swimmingSchools } from './schoolCategories/swimming'
import { miniSportsSchools } from './schoolCategories/mini-sports'
import { kidsSportsSchools } from './schoolCategories/kids-sports'
import { athleticsSchools } from './schoolCategories/athletics'
import { developmentalGymnasticsSchools } from './schoolCategories/developmental-gymnastics'
import { teenWorkoutSchools } from './schoolCategories/teen-workout'
import { capoeiraSchools } from './schoolCategories/capoeira'
import { languagesSchools } from './schoolCategories/languages'
import { programmingSchools } from './schoolCategories/programming'
import type { School, SchoolAddress, SchoolContact, SchoolFilters } from './schoolCategories/types'

export type { School, SchoolAddress, SchoolContact, SchoolFilters } from './schoolCategories/types'

export const schools: School[] = [
    ...balletSchools,
    ...jazzBalletSchools,
    ...danceSportSchools,
    ...footballSchools,
    ...actingSchools,
    ...tennisSchools,
    ...tableTennisSchools,
    ...basketballSchools,
    ...volleyballSchools,
    ...karateSchools,
    ...boxingSchools,
    ...aikidoSchools,
    ...capoeiraSchools,
    ...chessSchools,
    ...swimmingSchools,
    ...miniSportsSchools,
    ...kidsSportsSchools,
    ...athleticsSchools,
    ...developmentalGymnasticsSchools,
    ...teenWorkoutSchools,
    ...ridingSchools,
    ...folkloreSchools,
    ...languagesSchools,
    ...programmingSchools,
]

const isPubliclyListed = (school: School) =>
    !school.hidden && VERIFIED_SCHOOL_IDS.has(school.id)

const getListedSchools = () => schools.filter(isPubliclyListed)

/** Card listings: brand overview when no city is selected, city branches when a city is. */
export const forCatalogCards = (list: School[], city: string) =>
    city
        ? list.filter((school) => !school.brandOverview)
        : list.filter((school) => !school.brandSchoolId)

/** Map pins use city halls, not the brand overview. */
export const forCatalogMap = (list: School[]) => list.filter((school) => !school.brandOverview)

export const formatSchoolAddress = (address: SchoolAddress, lang: Lang = 'sr') => {
    const street = getStreetName(address.street, lang)
    const district = address.district ? getDistrictName(address.district, lang) : ''
    const parts = [street, district, address.city].filter((part) => part.length > 0)

    return [...new Set(parts)].join(', ')
}

const getSchoolAddressList = (school: School): SchoolAddress[] => {
    if (school.addresses && school.addresses.length > 0) {
        return school.addresses
    }

    return [
        {
            street: '',
            city: school.city,
            district: school.district,
        },
    ]
}

const catalogCities = () => new Set(getCityOptions())

const addressBelongsToCity = (address: SchoolAddress, schoolCity: string, city: string) => {
    if (address.city === city) {
        return true
    }

    return !catalogCities().has(address.city) && schoolCity === city
}

export const getSchoolCities = (school: School) => {
    const catalog = catalogCities()
    const cities = new Set<string>()

    for (const address of getSchoolAddressList(school)) {
        if (catalog.has(address.city)) {
            cities.add(address.city)
        } else {
            cities.add(school.city)
        }
    }

    if (cities.size === 0) {
        cities.add(school.city)
    }

    return [...cities]
}

export const getContactPhones = (phone?: string | string[]) => {
    if (!phone) {
        return []
    }

    return Array.isArray(phone) ? phone : [phone]
}

export const hasContactDetails = (contact?: SchoolContact) => {
    if (!contact) {
        return false
    }

    return (
        getContactPhones(contact.phone).length > 0 ||
        Boolean(contact.email) ||
        Boolean(contact.website) ||
        Boolean(contact.facebook) ||
        Boolean(contact.instagram)
    )
}

export const usesLocationPicker = (addresses?: SchoolAddress[]) =>
    Boolean(
        addresses &&
            addresses.length > 1 &&
            addresses.some((address) => hasContactDetails(address.contact))
    )

export const getLocationOptionLabel = (address: SchoolAddress, lang: Lang) => {
    if (address.areaLabel) {
        return getLocalizedText(address.areaLabel, lang, 'address.areaLabel')
    }

    const district = address.district ? getDistrictName(address.district, lang) : ''
    const street = getStreetName(address.street, lang)

    if (district && street) {
        return `${district} — ${street}`
    }

    return street || district || address.city
}

export const formatWebsiteLabel = (url: string) => {
    try {
        const parsed = new URL(url)
        const host = parsed.hostname.replace(/^www\./, '')
        const pathname = parsed.pathname.replace(/\/$/, '')

        return pathname ? `${host}${pathname}` : host
    } catch {
        return url.replace(/^https?:\/\//, '').split('#')[0].replace(/\/$/, '')
    }
}

export const formatFacebookLabel = (url: string) => {
    try {
        const parsed = new URL(url)
        const host = parsed.hostname.replace(/^www\./, '')

        if (parsed.pathname === '/profile.php' || parsed.pathname.startsWith('/people/')) {
            return host
        }

        const pathname = parsed.pathname.replace(/\/$/, '').replace(/^\//, '')
        return pathname ? `${host}/${pathname}` : host
    } catch {
        return url
    }
}

export const formatInstagramLabel = (url: string) => {
    try {
        const username = new URL(url).pathname.replace(/\//g, '')
        return username ? `@${username}` : url
    } catch {
        return url
    }
}

const firstAddressContactValue = <K extends keyof SchoolContact>(
    school: School,
    key: K
): SchoolContact[K] | undefined => {
    for (const address of school.addresses ?? []) {
        const value = address.contact?.[key]

        if (value) {
            return value
        }
    }

    return undefined
}

export const getSchoolWebsite = (school: School) =>
    school.contact?.website ?? firstAddressContactValue(school, 'website')

export const getSchoolEmail = (school: School) =>
    school.contact?.email ?? firstAddressContactValue(school, 'email')

export const collectSchoolPhones = (school: School) => {
    const phones: string[] = []
    const seen = new Set<string>()

    for (const phone of [
        ...getContactPhones(school.contact?.phone),
        ...(school.addresses ?? []).flatMap((address) => getContactPhones(address.contact?.phone)),
    ]) {
        if (seen.has(phone)) {
            continue
        }

        seen.add(phone)
        phones.push(phone)
    }

    return phones
}

export const formatPhoneHref = (phone: string) => {
    const digits = phone.replace(/\D/g, '')

    if (digits.startsWith('0')) {
        return `tel:+381${digits.slice(1)}`
    }

    if (digits.startsWith('381')) {
        return `tel:+${digits}`
    }

    return `tel:${digits}`
}

export const getMapsHref = (address: SchoolAddress, placeName?: string) => {
    if (address.mapsUrl) {
        return address.mapsUrl
    }

    const label = [address.street, address.city].filter(Boolean).join(', ') || placeName

    if (address.lat != null && address.lng != null) {
        const { lat, lng } = address
        const slug = encodeURIComponent(label || `${lat},${lng}`)
        return `https://www.google.com/maps/place/${slug}/@${lat},${lng},17z/data=!3m1!4b1!4m4!3m3!8m2!3d${lat}!4d${lng}`
    }

    if (label) {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(label)}`
    }

    return 'https://www.google.com/maps'
}

export const getGoogleMapsOpenHref = (addresses: SchoolAddress[], placeName?: string) => {
    const withCoords = addresses.filter(
        (address): address is SchoolAddress & { lat: number; lng: number } =>
            address.lat != null && address.lng != null
    )

    if (withCoords.length === 1) {
        return getMapsHref(withCoords[0], placeName)
    }

    if (addresses.length > 0) {
        return getMapsHref(addresses[0], placeName)
    }

    return 'https://www.google.com/maps'
}

export const getSchoolNameSr = (school: Pick<School, 'name'>): string => school.name.sr

export const getSchoolName = (school: Pick<School, 'id' | 'name'>, lang: Lang): string =>
    getLocalizedText(school.name, lang, `school:${school.id}:name`)

export const getSchoolsByCategory = (categorySlug: string, lang: Lang = 'sr') => {
    const categoryId = getCategoryBySlug(categorySlug)?.id ?? categorySlug

    return getListedSchools()
        .filter((school) => school.categorySlugs.includes(categoryId))
        .sort((a, b) => getSchoolName(a, lang).localeCompare(getSchoolName(b, lang), lang === 'en' ? 'en' : 'sr'))
}

/** Newest listed catalog cards. City branches of a brand are omitted so one hub card is enough. */
export const getRecentlyAddedSchools = (count = 4) => {
    const listed = forCatalogCards(getListedSchools(), '')
    const byId = new Map(listed.map((school) => [school.id, school]))
    const known = new Set<string>(CATALOG_ADD_ORDER)
    const unseen = listed.filter((school) => !known.has(school.id)).reverse()
    const fromOrder: School[] = []

    for (let index = CATALOG_ADD_ORDER.length - 1; index >= 0; index -= 1) {
        const school = byId.get(CATALOG_ADD_ORDER[index])

        if (school) {
            fromOrder.push(school)
        }
    }

    return [...unseen, ...fromOrder].slice(0, count)
}

export const formatSchoolCategoryNames = (school: School, lang: Lang = 'sr') =>
    school.categorySlugs
        .map((slug) => getCategoryNameBySlug(slug, lang))
        .join(', ')

/** Direct `/skola/...` URLs stay reachable. Search, categories and the map use listed schools only. */
const SCHOOL_SLUG_ALIASES: Record<string, string> = {
    'helen-doron-novi-beograd': 'helen-doron-beograd',
    'helen-doron-zemun': 'helen-doron-beograd',
}

export const getSchoolBySlug = (slug: string) => {
    const canonical = SCHOOL_SLUG_ALIASES[slug] ?? slug

    return schools.find((school) => !school.hidden && school.slug === canonical)
}

export const getSchoolDistricts = (school: School) => {
    const fromAddresses =
        school.addresses
            ?.map((address) => address.district)
            .filter((district): district is string => district != null && district.length > 0) ?? []

    if (fromAddresses.length > 0) {
        return [...new Set(fromAddresses)]
    }

    return [school.district]
}

export const formatSchoolLocationLabel = (school: School, lang: Lang = 'sr') => {
    const groups: { city: string; districts: string[] }[] = []
    const cityIndex = new Map<string, number>()

    for (const address of getSchoolAddressList(school)) {
        let index = cityIndex.get(address.city)

        if (index == null) {
            index = groups.length
            cityIndex.set(address.city, index)
            groups.push({ city: address.city, districts: [] })
        }

        if (address.district && !groups[index].districts.includes(address.district)) {
            groups[index].districts.push(address.district)
        }
    }

    return groups
        .map(({ city, districts }) => {
            const districtPart = districts
                .map((district) => getDistrictName(district, lang))
                .join(', ')

            return districtPart ? `${districtPart}, ${city}` : city
        })
        .join(' · ')
}

export const getDistrictOptions = (lang: Lang = 'sr', city?: string) => {
    if (!city) {
        return []
    }

    return [
        ...new Set(
            getListedSchools().flatMap((school) =>
                getSchoolAddressList(school)
                    .filter((address) => addressBelongsToCity(address, school.city, city))
                    .map((address) => address.district)
                    .filter((district): district is string => district != null && district.length > 0)
            )
        ),
    ].sort((a, b) => getDistrictName(a, lang).localeCompare(getDistrictName(b, lang), lang === 'en' ? 'en' : 'sr'))
}

if (import.meta.env.DEV) {
    for (const school of schools) {
        for (const district of getSchoolDistricts(school)) {
            if (!(district in DISTRICT_LABELS)) {
                warnMissingEnglish(`district:${district}`, 'not in DISTRICT_LABELS')
            }
        }
    }

    for (const school of schools) {
        for (const address of school.addresses ?? []) {
            getStreetName(address.street, 'en')
        }
    }
}

export const getAgeOptions = (lang: Lang = 'sr') => {
    const listed = getListedSchools()

    if (listed.length === 0) {
        return []
    }

    const minAge = Math.min(...listed.map((school) => school.minAge))
    const finiteMaxAges = listed
        .map((school) => school.maxAge)
        .filter((age): age is number => age != null)
    const maxFiniteAge = finiteMaxAges.length > 0 ? Math.max(...finiteMaxAges) : minAge
    const hasOpenEndedRange = listed.some((school) => school.maxAge == null)
    const finalAge = hasOpenEndedRange ? maxFiniteAge + 1 : maxFiniteAge

    return Array.from({ length: finalAge - minAge + 1 }, (_, index) => {
        const value = minAge + index
        const isOpenEnded = hasOpenEndedRange && value === finalAge
        const label = isOpenEnded ? formatAgeLabel(value, null, lang) : formatAgeOptionLabel(value, lang)
        return { value, label }
    })
}

const activityOptionsFrom = (list: School[], lang: Lang) =>
    [...new Set(list.flatMap((school) => school.categorySlugs))]
        .map((slug) => {
            const category = getCategoryBySlug(slug)
            return category ? { slug, name: getCategoryName(category, lang) } : null
        })
        .filter((option): option is { slug: string; name: string } => option != null)
        .sort((a, b) => a.name.localeCompare(b.name, lang === 'en' ? 'en' : 'sr'))

export const getActivityOptions = (lang: Lang = 'sr') =>
    activityOptionsFrom(getListedSchools(), lang)

/** All catalog schools, including hidden and unverified — for the admin filter. */
export const getAdminActivityOptions = () => activityOptionsFrom(schools, 'sr')

export const filterSchools = (filters: SchoolFilters) =>
    getListedSchools().filter((school) => {
        const addresses = getSchoolAddressList(school).filter((address) =>
            filters.city ? addressBelongsToCity(address, school.city, filters.city) : true
        )

        if (filters.city && addresses.length === 0) {
            return false
        }

        if (
            filters.activities.length > 0 &&
            !filters.activities.some((activity) => school.categorySlugs.includes(activity))
        ) {
            return false
        }

        if (
            filters.age != null &&
            (filters.age < school.minAge || (school.maxAge != null && filters.age > school.maxAge))
        ) {
            return false
        }

        if (filters.partsOfCity.length > 0) {
            const matchesDistrict = addresses.some(
                (address) => address.district != null && filters.partsOfCity.includes(address.district)
            )

            if (!matchesDistrict) {
                return false
            }
        }

        return true
    })

export const venueBelongsToCity = (school: School, address: SchoolAddress, city?: string) =>
    !city || addressBelongsToCity(address, school.city, city)

