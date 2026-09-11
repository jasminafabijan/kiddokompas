import { getLocalizedText, warnMissingEnglish } from '../i18n/helpers'
import type { Lang, LocalizedText } from '../i18n/types'

/** Canonical district names as stored on schools. English translates only directional/center labels. */
export const DISTRICT_LABELS: Record<string, LocalizedText> = {
  Adice: { sr: 'Adice', en: 'Adice' },
  'Blok 28': { sr: 'Blok 28', en: 'Blok 28' },
  'Blok 61': { sr: 'Blok 61', en: 'Blok 61' },
  Čukarica: { sr: 'Čukarica', en: 'Čukarica' },
  'Gradski park': { sr: 'Gradski park', en: 'City Park' },
  'Adamovićevo naselje': { sr: 'Adamovićevo naselje', en: 'Adamovićevo naselje' },
  Banatić: { sr: 'Banatić', en: 'Banatić' },
  Detelinara: { sr: 'Detelinara', en: 'Detelinara' },
  Grbavica: { sr: 'Grbavica', en: 'Grbavica' },
  Kamenjar: { sr: 'Kamenjar', en: 'Kamenjar' },
  Klisa: { sr: 'Klisa', en: 'Klisa' },
  'Liman 1': { sr: 'Liman 1', en: 'Liman 1' },
  'Liman 3': { sr: 'Liman 3', en: 'Liman 3' },
  'Liman 4': { sr: 'Liman 4', en: 'Liman 4' },
  'Novo naselje': { sr: 'Novo naselje', en: 'Novo naselje' },
  'Novi Beograd': { sr: 'Novi Beograd', en: 'Novi Beograd' },
  Petrovaradin: { sr: 'Petrovaradin', en: 'Petrovaradin' },
  Podbara: { sr: 'Podbara', en: 'Podbara' },
  Rotkvarija: { sr: 'Rotkvarija', en: 'Rotkvarija' },
  Sajmište: { sr: 'Sajmište', en: 'Sajmište' },
  Salajka: { sr: 'Salajka', en: 'Salajka' },
  'Slana bara': { sr: 'Slana bara', en: 'Slana bara' },
  Satelit: { sr: 'Satelit', en: 'Satelit' },
  'Severni Telep': { sr: 'Severni Telep', en: 'North Telep' },
  'Južni Telep': { sr: 'Južni Telep', en: 'South Telep' },
  Palilula: { sr: 'Palilula', en: 'Palilula' },
  'Sremska Kamenica': { sr: 'Sremska Kamenica', en: 'Sremska Kamenica' },
  Čenej: { sr: 'Čenej', en: 'Čenej' },
  Susek: { sr: 'Susek', en: 'Susek' },
  'Savski Venac': { sr: 'Savski Venac', en: 'Savski Venac' },
  'Stari Grad': { sr: 'Stari Grad', en: 'Stari Grad' },
  'Stari Grad (Centar)': { sr: 'Stari Grad (Centar)', en: 'City Center' },
  Telep: { sr: 'Telep', en: 'Telep' },
  Veternik: { sr: 'Veternik', en: 'Veternik' },
  Voždovac: { sr: 'Voždovac', en: 'Voždovac' },
  Vračar: { sr: 'Vračar', en: 'Vračar' },
  Zemun: { sr: 'Zemun', en: 'Zemun' },
  'Zemunske kapije': { sr: 'Zemunske kapije', en: 'Zemunske kapije' },
  Zvezdara: { sr: 'Zvezdara', en: 'Zvezdara' },
  Šangaj: { sr: 'Šangaj', en: 'Šangaj' },
}

export const stripSerbianDiacritics = (value: string): string =>
  value
    .replace(/đ/g, 'dj')
    .replace(/Đ/g, 'Dj')
    .replace(/č/g, 'c')
    .replace(/Č/g, 'C')
    .replace(/ć/g, 'c')
    .replace(/Ć/g, 'C')
    .replace(/ž/g, 'z')
    .replace(/Ž/g, 'Z')
    .replace(/š/g, 's')
    .replace(/Š/g, 'S')

export const getDistrictName = (district: string, lang: Lang): string => {
  const mapped = DISTRICT_LABELS[district]

  if (mapped) {
    return getLocalizedText(mapped, lang, `district:${district}`)
  }

  if (lang === 'en') {
    warnMissingEnglish(`district:${district}`, 'not in DISTRICT_LABELS')
  }

  return district
}

export const districtMatchesQuery = (district: string, query: string): boolean => {
  const normalized = query.trim().toLocaleLowerCase('sr')

  if (!normalized) {
    return true
  }

  const sr = district.toLocaleLowerCase('sr')
  const en = getDistrictName(district, 'en').toLocaleLowerCase('en')
  const stripped = stripSerbianDiacritics(district).toLocaleLowerCase('en')

  return sr.includes(normalized) || en.includes(normalized) || stripped.includes(normalized)
}
