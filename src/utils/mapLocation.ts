import type { School, SchoolAddress } from '../data/schools'

export type MapLocation = {
  locationId: string
  school: School
  address: SchoolAddress
  addressIndex: number
  /** Set when an activity filter picks which icon this row and pin use. */
  pinCategory?: string
}

export const getSchoolLocationId = (schoolId: string, addressIndex: number) =>
  `${schoolId}-${addressIndex}`

export const getMapLocations = (schools: School[]): MapLocation[] =>
  schools.flatMap((school) =>
    (school.addresses ?? []).flatMap((address, addressIndex) => {
      if (address.lat == null || address.lng == null) {
        return []
      }

      return [
        {
          locationId: getSchoolLocationId(school.id, addressIndex),
          school,
          address,
          addressIndex,
        },
      ]
    })
  )

/** One row per selected activity the school actually offers. No filter stays a single row. */
export const expandLocationsForSelectedActivities = (
  locations: MapLocation[],
  selectedActivities: string[]
): MapLocation[] => {
  if (selectedActivities.length === 0) {
    return locations
  }

  return locations.flatMap((location) => {
    const categories = location.school.categorySlugs.filter((slug) =>
      selectedActivities.includes(slug)
    )

    if (categories.length <= 1) {
      return [{ ...location, pinCategory: categories[0] }]
    }

    return categories.map((pinCategory) => ({
      ...location,
      pinCategory,
      locationId: `${location.locationId}-${pinCategory}`,
    }))
  })
}
