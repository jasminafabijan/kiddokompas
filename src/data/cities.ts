export type City = {
    name: string
    locative: string
}

export const DEFAULT_CITY = 'Novi Sad'

export const cities: City[] = [
    { name: DEFAULT_CITY, locative: 'Novom Sadu' },
    { name: 'Beograd', locative: 'Beogradu' },
    { name: 'Beočin', locative: 'Beočinu' },
    { name: 'Čačak', locative: 'Čačku' },
    { name: 'Sombor', locative: 'Somboru' },
    { name: 'Bajmok', locative: 'Bajmoku' },
    { name: 'Bačka Palanka', locative: 'Bačkoj Palanci' },
    { name: 'Inđija', locative: 'Inđiji' },
    { name: 'Kladovo', locative: 'Kladovu' },
    { name: 'Kragujevac', locative: 'Kragujevcu' },
    { name: 'Kruševac', locative: 'Kruševcu' },
    { name: 'Niš', locative: 'Nišu' },
    { name: 'Nova Pazova', locative: 'Novoj Pazovi' },
    { name: 'Pančevo', locative: 'Pančevu' },
    { name: 'Sremska Mitrovica', locative: 'Sremskoj Mitrovici' },
    { name: 'Subotica', locative: 'Subotici' },
    { name: 'Šabac', locative: 'Šapcu' },
    { name: 'Vršac', locative: 'Vršcu' },
]

export const getCityLocative = (cityName: string) => {
    const city = cities.find((entry) => entry.name === cityName)

    return city?.locative ?? cityName
}

export const getCityOptions = () => {
    const names = cities.map((city) => city.name)
    const rest = names
        .filter((name) => name !== DEFAULT_CITY)
        .sort((a, b) => a.localeCompare(b, 'sr'))

    return names.includes(DEFAULT_CITY) ? [DEFAULT_CITY, ...rest] : rest
}

/** Default catalog-map camera. Novi Sad stays framed on the city, not outlying settlements. */
export const CITY_MAP_VIEWS: Record<string, { center: [number, number]; zoom: number }> = {
    [DEFAULT_CITY]: { center: [45.252, 19.842], zoom: 13.5 },
    Beograd: { center: [44.805, 20.45], zoom: 11.5 },
    Beočin: { center: [45.2246, 19.5352], zoom: 13 },
    Čačak: { center: [43.887, 20.352], zoom: 15 },
    Sombor: { center: [45.774, 19.115], zoom: 14 },
    Bajmok: { center: [45.967, 19.415], zoom: 14 },
    'Bačka Palanka': { center: [45.25, 19.392], zoom: 14 },
    Inđija: { center: [45.049, 20.082], zoom: 14 },
    Kladovo: { center: [44.607, 22.615], zoom: 14 },
    Kragujevac: { center: [44.012, 20.911], zoom: 13 },
    Kruševac: { center: [43.583, 21.327], zoom: 14 },
    Niš: { center: [43.32, 21.896], zoom: 13 },
    'Nova Pazova': { center: [44.947, 20.216], zoom: 14 },
    Pančevo: { center: [44.871, 20.64], zoom: 14 },
    'Sremska Mitrovica': { center: [44.976, 19.612], zoom: 14 },
    Subotica: { center: [46.1, 19.667], zoom: 13 },
    Šabac: { center: [44.755, 19.69], zoom: 14 },
    Vršac: { center: [45.116, 21.303], zoom: 14 },
}
