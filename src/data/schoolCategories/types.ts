import type { LocalizedParagraphs, LocalizedText } from '../../i18n/types'

export type SchoolFilters = {
    city: string
    partsOfCity: string[]
    age: number | null
    activities: string[]
}

export type SchoolContact = {
    phone?: string | string[]
    email?: string
    website?: string
    facebook?: string
    facebookLabel?: string
    instagram?: string
}

export type SchoolAddress = {
    street: string
    city: string
    district?: string
    lat?: number
    lng?: number
    /** Opens this Google listing instead of a coordinate search that can snap to a nearby place. */
    mapsUrl?: string
    /** When set, the location link opens this school page instead of Google Maps. */
    schoolSlug?: string
    /** Dropdown label, e.g. "Centar — Vase Stajića". Falls back to district and street. */
    areaLabel?: LocalizedText
    /** Per-venue phone, email, website and socials. */
    contact?: SchoolContact
}

export type School = {
    id: string
    slug: string
    name: LocalizedText
    /** Keep the record, but omit from the public catalog, map, search and school page. */
    /** Keep the record, but omit from the public catalog, map, search and school page. */
    hidden?: boolean
    categorySlugs: string[]
    city: string
    district: string
    minAge: number
    maxAge: number | null
    ageLabel: string
    imageWebp: string
    imageFallback: string
    description?: LocalizedParagraphs
    addresses?: SchoolAddress[]
    contact?: SchoolContact
    /** Brand landing page: shown when no city is selected; omitted from the map. */
    brandOverview?: boolean
    /** City branch of a brand overview school; hidden from all-cities card listings. */
    brandSchoolId?: string
}
