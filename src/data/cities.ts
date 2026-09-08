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
}
