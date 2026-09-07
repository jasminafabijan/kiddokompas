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
    { name: 'Novi Beograd', locative: 'Novom Beogradu' },
    { name: 'Sombor', locative: 'Somboru' },
    { name: 'Zemun', locative: 'Zemunu' },
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
    Beograd: { center: [44.791, 20.474], zoom: 12 },
    Beočin: { center: [45.2246, 19.5352], zoom: 13 },
    Čačak: { center: [43.887, 20.352], zoom: 15 },
    'Novi Beograd': { center: [44.808, 20.392], zoom: 13 },
    Sombor: { center: [45.774, 19.115], zoom: 14 },
    Zemun: { center: [44.847, 20.396], zoom: 13.5 },
}
