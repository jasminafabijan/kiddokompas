import L from 'leaflet'

const OVERLAP_PX = 26
const SEPARATION_PX = 28
const SPIDERFY_RADIUS_PX = 36
const MAX_SEPARATE_ZOOM = 16
const MAX_ZOOM_STEP = 2

type MarkerWithHome = L.Marker & { __homeLatLng?: L.LatLng }

const pixelDistance = (map: L.Map, a: L.LatLng, b: L.LatLng) =>
  map.latLngToContainerPoint(a).distanceTo(map.latLngToContainerPoint(b))

const getOverlappingMarkers = (
  map: L.Map,
  origin: L.Marker,
  markers: L.Marker[],
  overlapPx: number
) => {
  const originLatLng = origin.getLatLng()

  return markers.filter(
    (marker) => pixelDistance(map, originLatLng, marker.getLatLng()) < overlapPx
  )
}

const minPairDistanceMeters = (latLngs: L.LatLng[]) => {
  let min = Number.POSITIVE_INFINITY

  for (let i = 0; i < latLngs.length; i += 1) {
    for (let j = i + 1; j < latLngs.length; j += 1) {
      min = Math.min(min, latLngs[i].distanceTo(latLngs[j]))
    }
  }

  return min
}

const zoomToSeparatePoints = (map: L.Map, latLngs: L.LatLng[]) => {
  const meters = minPairDistanceMeters(latLngs)

  if (!Number.isFinite(meters) || meters < 2) {
    return null
  }

  const latitude = L.latLngBounds(latLngs).getCenter().lat
  const metersPerPixel = meters / SEPARATION_PX
  const zoom =
    Math.log2((156543.03392 * Math.cos((latitude * Math.PI) / 180)) / metersPerPixel)

  return Math.min(
    MAX_SEPARATE_ZOOM,
    map.getZoom() + MAX_ZOOM_STEP,
    Math.max(map.getZoom() + 1, Math.round(zoom))
  )
}

const unspiderfy = (markers: MarkerWithHome[]) => {
  markers.forEach((marker) => {
    if (marker.__homeLatLng) {
      marker.setLatLng(marker.__homeLatLng)
    }
  })
}

const spiderfy = (map: L.Map, markers: MarkerWithHome[]) => {
  const count = markers.length
  const center = L.latLngBounds(markers.map((marker) => marker.getLatLng())).getCenter()
  const centerPoint = map.latLngToContainerPoint(center)
  const radius = Math.max(SPIDERFY_RADIUS_PX, 16 + count * 8)

  markers.forEach((marker, index) => {
    const angle = (2 * Math.PI * index) / count - Math.PI / 2
    const point = L.point(
      centerPoint.x + radius * Math.cos(angle),
      centerPoint.y + radius * Math.sin(angle)
    )

    marker.setLatLng(map.containerPointToLatLng(point))
  })
}

export const attachMarkerOverlapZoom = (
  map: L.Map,
  markers: L.Marker[],
  options?: {
    overlapPx?: number
    /** Return true when the click was handled (e.g. in-app navigation). */
    onIsolatedClick?: (marker: L.Marker) => boolean
  }
) => {
  const overlapPx = options?.overlapPx ?? OVERLAP_PX
  const typedMarkers = markers as MarkerWithHome[]

  typedMarkers.forEach((marker) => {
    marker.__homeLatLng = marker.getLatLng()
    marker.off('click')
  })

  const resetSpiderfy = () => {
    unspiderfy(typedMarkers)
  }

  map.on('zoomstart', resetSpiderfy)

  typedMarkers.forEach((marker) => {
    marker.on('click', (event: L.LeafletMouseEvent) => {
      const overlapping = getOverlappingMarkers(map, marker, typedMarkers, overlapPx)

      if (overlapping.length < 2) {
        if (options?.onIsolatedClick?.(marker)) {
          return
        }

        if (marker.getPopup()) {
          marker.openPopup()
        }
        return
      }

      L.DomEvent.stop(event)
      map.closePopup()

      const targetZoom = zoomToSeparatePoints(
        map,
        overlapping.map((item) => item.getLatLng())
      )

      if (targetZoom != null && targetZoom > map.getZoom() + 0.2) {
        const center = L.latLngBounds(overlapping.map((item) => item.getLatLng())).getCenter()
        map.setView(center, targetZoom)
        return
      }

      spiderfy(map, overlapping)
    })
  })

  return () => {
    map.off('zoomstart', resetSpiderfy)
  }
}
