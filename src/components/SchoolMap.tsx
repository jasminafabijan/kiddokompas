import L from 'leaflet'
import { useEffect, useMemo, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import type { SchoolAddress } from '../data/schools'
import { getGoogleMapsOpenHref } from '../data/schools'
import { schoolPath } from '../i18n/routes'
import { attachActivePinState, mapPinIcon } from '../utils/mapPin'
import { attachMarkerOverlapZoom } from '../utils/mapOverlapZoom'
import { MAP_TILE_OPTIONS, MAP_TILE_URL } from '../utils/mapTiles'
import { useI18n } from '../i18n/useI18n'
import 'leaflet/dist/leaflet.css'

const getMapZoom = (pointCount: number) => {
  if (pointCount === 1) return 16
  if (pointCount === 2) return 15
  return 13
}

interface SchoolMapProps {
  addresses: SchoolAddress[]
  placeName?: string
}

const SchoolMap = ({ addresses, placeName }: SchoolMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const { lang, t } = useI18n()
  const navigate = useNavigate()

  const points = useMemo(
    () =>
      addresses.filter(
        (address): address is SchoolAddress & { lat: number; lng: number } =>
          address.lat != null && address.lng != null
      ),
    [addresses]
  )
  const showGoogleMapsLink = points.length === 1 && points.some((address) => !address.schoolSlug)

  useEffect(() => {
    if (!mapRef.current || points.length === 0) return

    mapInstanceRef.current?.remove()
    mapInstanceRef.current = null

    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      attributionControl: true,
      zoomControl: true,
    })

    L.tileLayer(MAP_TILE_URL, MAP_TILE_OPTIONS).addTo(map)

    const markerEntries = points.map((address) => {
      const marker = L.marker([address.lat, address.lng], { icon: mapPinIcon })
      marker.addTo(map)

      if (address.schoolSlug) {
        marker.getElement()?.classList.add('is-link')
      }

      return { marker, address }
    })
    const markers = markerEntries.map((entry) => entry.marker)

    const detachOverlapZoom = attachMarkerOverlapZoom(map, markers, {
      onIsolatedClick: (marker) => {
        const entry = markerEntries.find((item) => item.marker === marker)
        const slug = entry?.address.schoolSlug

        if (!slug) {
          return false
        }

        navigate(schoolPath(lang, slug))
        return true
      },
    })
    const detachActivePin = attachActivePinState(map)

    const applyView = () => {
      map.invalidateSize()

      if (markers.length === 1) {
        map.setView([points[0].lat, points[0].lng], getMapZoom(1))
        return
      }

      const bounds = L.featureGroup(markers).getBounds()
      map.fitBounds(bounds, {
        padding: [24, 24],
        maxZoom: getMapZoom(points.length),
      })
    }

    map.whenReady(applyView)
    requestAnimationFrame(applyView)

    mapInstanceRef.current = map

    return () => {
      detachOverlapZoom()
      detachActivePin()
      map.remove()
      mapInstanceRef.current = null
    }
  }, [lang, navigate, points])

  if (points.length === 0) return null

  return (
    <div className="school-detail-map">
      <div ref={mapRef} className="school-detail-map-canvas" />
      {showGoogleMapsLink ? (
        <div className="school-detail-map-footer">
          <a
            href={getGoogleMapsOpenHref(points, placeName)}
            target="_blank"
            rel="noopener noreferrer"
            className="school-detail-map-open-link"
          >
            {t('map.openInGoogleMaps')}
          </a>
        </div>
      ) : null}
    </div>
  )
}

export default SchoolMap
