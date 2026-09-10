import L from 'leaflet'
import { useEffect, useMemo, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getCatalogMapPin } from '../utils/mapCategoryStyle'
import type { MapLocation } from '../utils/mapLocation'
import { attachActivePinState } from '../utils/mapPin'
import { attachMarkerOverlapZoom } from '../utils/mapOverlapZoom'
import { buildSchoolMapPopupHtml, schoolMapHref, schoolMapPopupOptions } from '../utils/mapPopup'
import { schoolAgeLabel } from '../i18n/helpers'
import { useI18n } from '../i18n/useI18n'
import { getSchoolName } from '../data/schools'
import { CITY_MAP_VIEWS } from '../data/cities'
import { getStreetName } from '../data/streets'
import { MAP_TILE_OPTIONS, MAP_TILE_URL } from '../utils/mapTiles'
import 'leaflet/dist/leaflet.css'

type MarkerWithLocations = L.Marker & { __locationIds?: string[] }

type MapPoint = {
  lat: number
  lng: number
  locations: MapLocation[]
}

const getMapPoints = (locations: MapLocation[]): MapPoint[] => {
  const groups = new Map<string, MapPoint>()

  for (const location of locations) {
    const { lat, lng } = location.address

    if (lat == null || lng == null) {
      continue
    }

    const key = `${lat.toFixed(5)}|${lng.toFixed(5)}`
    const existing = groups.get(key)

    if (existing) {
      existing.locations.push(location)
      continue
    }

    groups.set(key, {
      lat,
      lng,
      locations: [location],
    })
  }

  return [...groups.values()]
}

interface CatalogMapProps {
  locations: MapLocation[]
  selectedLocationId?: string | null
  onSelectLocation?: (locationId: string) => void
  city?: string
}

const CatalogMap = ({ locations, selectedLocationId, onSelectLocation, city }: CatalogMapProps) => {
  const navigate = useNavigate()
  const routeLocation = useLocation()
  const { lang, t } = useI18n()
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<MarkerWithLocations[]>([])
  const onSelectLocationRef = useRef(onSelectLocation)
  const selectedLocationIdRef = useRef(selectedLocationId)
  const points = useMemo(() => getMapPoints(locations), [locations])

  onSelectLocationRef.current = onSelectLocation
  selectedLocationIdRef.current = selectedLocationId

  useEffect(() => {
    if (!mapRef.current || points.length === 0) {
      return
    }

    mapInstanceRef.current?.remove()
    mapInstanceRef.current = null

    const map = L.map(mapRef.current, {
      scrollWheelZoom: true,
      attributionControl: true,
      zoomControl: true,
      zoomSnap: 0.5,
    })

    L.tileLayer(MAP_TILE_URL, MAP_TILE_OPTIONS).addTo(map)

    const markers = points.map((point) => {
      const uniqueSchools = point.locations.filter(
        (item, index, list) => list.findIndex((other) => other.school.id === item.school.id) === index
      )
      const marker = L.marker([point.lat, point.lng], {
        icon: getCatalogMapPin(point.locations[0]?.school.categorySlugs[0]),
      }) as MarkerWithLocations
      marker.__locationIds = point.locations.map((item) => item.locationId)
      marker.bindPopup(
        buildSchoolMapPopupHtml(
          getStreetName(point.locations[0].address.street, lang),
          uniqueSchools.map(({ school, addressIndex }) => ({
            name: getSchoolName(school, lang),
            ageLabel: schoolAgeLabel(school, lang, true),
            href: schoolMapHref(school, lang, addressIndex),
          })),
          t('map.seeDetails')
        ),
        schoolMapPopupOptions
      )
      marker.addTo(map)
      return marker
    })

    markersRef.current = markers

    const detachOverlapZoom = attachMarkerOverlapZoom(map, markers, { overlapPx: 40 })
    const detachActivePin = attachActivePinState(map)

    const onPopupOpen = (event: L.PopupEvent) => {
      const source = (event.popup as L.Popup & { _source?: L.Layer })._source
      const marker = source as MarkerWithLocations | undefined
      const locationIds = marker?.__locationIds

      if (!locationIds?.length) {
        return
      }

      const selectedId = selectedLocationIdRef.current

      if (selectedId && locationIds.includes(selectedId)) {
        return
      }

      onSelectLocationRef.current?.(locationIds[0])
    }

    map.on('popupopen', onPopupOpen)

    let hasView = false

    const applyView = () => {
      if (!map.getContainer()?.isConnected) {
        return
      }

      map.invalidateSize()

      const size = map.getSize()
      if (size.x < 80 || size.y < 80) {
        return
      }

      if (hasView) {
        return
      }

      hasView = true

      const cityView = city ? CITY_MAP_VIEWS[city] : undefined

      if (cityView) {
        map.setView(cityView.center, cityView.zoom)
        return
      }

      if (markers.length === 1) {
        map.setView(markers[0].getLatLng(), 15)
        return
      }

      map.fitBounds(L.featureGroup(markers).getBounds(), {
        padding: [28, 28],
        maxZoom: 15,
      })
    }

    map.whenReady(applyView)
    const rafId = requestAnimationFrame(applyView)
    const timeoutId = window.setTimeout(applyView, 250)
    const resizeObserver = new ResizeObserver(() => applyView())
    resizeObserver.observe(map.getContainer())

    mapInstanceRef.current = map

    return () => {
      window.cancelAnimationFrame(rafId)
      window.clearTimeout(timeoutId)
      resizeObserver.disconnect()
      map.off('popupopen', onPopupOpen)
      detachOverlapZoom()
      detachActivePin()
      markersRef.current = []
      map.remove()
      mapInstanceRef.current = null
    }
  }, [city, points, lang, t])

  useEffect(() => {
    const map = mapInstanceRef.current

    if (!map || !selectedLocationId) {
      return
    }

    const marker = markersRef.current.find((item) => item.__locationIds?.includes(selectedLocationId))

    if (!marker) {
      return
    }

    map.panTo(marker.getLatLng())

    if (!marker.isPopupOpen()) {
      marker.openPopup()
    }
  }, [selectedLocationId])

  if (points.length === 0) {
    return null
  }

  return (
    <div
      className="catalog-map"
      onClick={(event) => {
        const link = (event.target as HTMLElement).closest<HTMLAnchorElement>(
          'a.school-map-popup-button'
        )

        if (!link?.href) {
          return
        }

        const url = new URL(link.href)
        if (url.origin !== window.location.origin) {
          return
        }

        event.preventDefault()
        navigate(`${url.pathname}${url.search}`, {
          state: { from: `${routeLocation.pathname}${routeLocation.search}${routeLocation.hash}` },
        })
      }}
    >
      <div ref={mapRef} className="catalog-map-canvas" />
    </div>
  )
}

export default CatalogMap
