import { getCityLocative } from './cities'
import { getLocalizedText } from '../i18n/helpers'
import type { Lang, LocalizedText } from '../i18n/types'

export type Category = {
  id: string
  name: LocalizedText
  /** Stable legacy slug (same as id). Still accepted in Serbian URLs. */
  slug: string
  /** Localized route slugs. `id` stays the canonical key. */
  slugs: { sr: string; en: string }
  subtitle: LocalizedText
  pageSubtitle?: LocalizedText
  /** Serbian accusative for phrases like „Nazad na …”. English uses `name`. */
  nameAccusative?: string
}

export const categories: Category[] = [
  {
    id: 'ballet',
    name: { sr: 'Balet', en: 'Ballet' },
    slug: 'ballet',
    slugs: { sr: 'balet', en: 'ballet' },
    subtitle: { sr: 'Škole klasičnog baleta', en: 'Classical ballet schools' },
    pageSubtitle: {
      sr: 'Istražite škole klasičnog baleta u {city} — za gracioznost, držanje i ljubav prema sceni.',
      en: 'Explore classical ballet schools in {city} — for grace, posture and a love of the stage.',
    },
  },
  {
    id: 'jazz-ballet',
    name: { sr: 'Moderan ples', en: 'Modern dance' },
    slug: 'jazz-ballet',
    slugs: { sr: 'moderan-ples', en: 'modern-dance' },
    subtitle: { sr: 'Škole modernog plesa', en: 'Modern dance schools' },
    pageSubtitle: {
      sr: 'Istražite škole modernog plesa u {city} — za energiju, ritam i slobodniji plesni izraz.',
      en: 'Explore modern dance schools in {city} — for energy, rhythm and a freer dance expression.',
    },
  },
  {
    id: 'dance-sport',
    name: { sr: 'Sportski ples', en: 'DanceSport' },
    slug: 'dance-sport',
    slugs: { sr: 'sportski-ples', en: 'dancesport' },
    subtitle: { sr: 'Škole sportskog plesa', en: 'DanceSport schools' },
    pageSubtitle: {
      sr: 'Istražite škole sportskog plesa u {city} — za ritam, gracioznost i sigurnost u svakom koraku.',
      en: 'Explore DanceSport schools in {city} — for rhythm, grace and confidence in every step.',
    },
  },
  {
    id: 'football',
    name: { sr: 'Fudbal', en: 'Football' },
    slug: 'football',
    slugs: { sr: 'fudbal', en: 'football' },
    subtitle: { sr: 'Škole fudbala', en: 'Football schools' },
    pageSubtitle: {
      sr: 'Istražite škole fudbala u {city} — za igru, timski duh i sportsku energiju.',
      en: 'Explore football schools in {city} — for play, teamwork and sporting energy.',
    },
  },
  {
    id: 'acting',
    name: { sr: 'Gluma', en: 'Acting' },
    slug: 'acting',
    slugs: { sr: 'gluma', en: 'acting' },
    subtitle: { sr: 'Škole glume', en: 'Acting schools' },
    pageSubtitle: {
      sr: 'Istražite škole glume u {city} — za maštu, govor, pokret i više samopouzdanja.',
      en: 'Explore acting schools in {city} — for imagination, speech, movement and more confidence.',
    },
  },
  {
    id: 'basketball',
    name: { sr: 'Košarka', en: 'Basketball' },
    nameAccusative: 'košarku',
    slug: 'basketball',
    slugs: { sr: 'kosarka', en: 'basketball' },
    subtitle: { sr: 'Škole košarke', en: 'Basketball schools' },
    pageSubtitle: {
      sr: 'Istražite košarkaške škole u {city} — za decu koja vole igru, pokret i izazov pod obručima.',
      en: 'Explore basketball schools in {city} — for children who love the game, movement and a challenge under the hoop.',
    },
  },
  {
    id: 'volleyball',
    name: { sr: 'Odbojka', en: 'Volleyball' },
    nameAccusative: 'odbojku',
    slug: 'volleyball',
    slugs: { sr: 'odbojka', en: 'volleyball' },
    subtitle: { sr: 'Škole odbojke', en: 'Volleyball schools' },
    pageSubtitle: {
      sr: 'Istražite škole odbojke u {city} — za razvoj koordinacije i timskog duha u igri preko mreže.',
      en: 'Explore volleyball schools in {city} — for coordination and teamwork in the game over the net.',
    },
  },
  {
    id: 'tennis',
    name: { sr: 'Tenis', en: 'Tennis' },
    slug: 'tennis',
    slugs: { sr: 'tenis', en: 'tennis' },
    subtitle: { sr: 'Škole tenisa', en: 'Tennis schools' },
    pageSubtitle: {
      sr: 'Istražite škole tenisa u {city} — za fokus, koordinaciju i sigurnost u svakom udarcu.',
      en: 'Explore tennis schools in {city} — for focus, coordination and confidence in every stroke.',
    },
  },
  {
    id: 'table-tennis',
    name: { sr: 'Stoni tenis', en: 'Table tennis' },
    slug: 'table-tennis',
    slugs: { sr: 'stoni-tenis', en: 'table-tennis' },
    subtitle: { sr: 'Škole stonog tenisa', en: 'Table tennis schools' },
    pageSubtitle: {
      sr: 'Istražite škole stonog tenisa u {city} — za fokus, brzinu reakcije i sigurnost za stolom.',
      en: 'Explore table tennis schools in {city} — for focus, reaction speed and confidence at the table.',
    },
  },
  {
    id: 'athletics',
    name: { sr: 'Atletika', en: 'Athletics' },
    nameAccusative: 'atletiku',
    slug: 'athletics',
    slugs: { sr: 'atletika', en: 'athletics' },
    subtitle: { sr: 'Škole atletike', en: 'Athletics schools' },
    pageSubtitle: {
      sr: 'Istražite škole atletike u {city} — za razvoj brzine, izdržljivosti i pravilnog pokreta.',
      en: 'Explore athletics schools in {city} — for developing speed, endurance and proper movement.',
    },
  },
  {
    id: 'karate',
    name: { sr: 'Karate', en: 'Karate' },
    slug: 'karate',
    slugs: { sr: 'karate', en: 'karate' },
    subtitle: { sr: 'Škole karatea', en: 'Karate schools' },
    pageSubtitle: {
      sr: 'Istražite karate klubove u {city} — za fokus, disciplinu i sigurnost u pokretu.',
      en: 'Explore karate clubs in {city} — for focus, discipline and confidence in movement.',
    },
  },
  {
    id: 'boxing',
    name: { sr: 'Boks', en: 'Boxing' },
    slug: 'boxing',
    slugs: { sr: 'boks', en: 'boxing' },
    subtitle: { sr: 'Škole boksa', en: 'Boxing schools' },
    pageSubtitle: {
      sr: 'Istražite škole boksa u {city} — za disciplinu, koordinaciju i zdrav sportski duh.',
      en: 'Explore boxing schools in {city} — for discipline, coordination and a healthy sporting spirit.',
    },
  },
  {
    id: 'aikido',
    name: { sr: 'Aikido', en: 'Aikido' },
    slug: 'aikido',
    slugs: { sr: 'aikido', en: 'aikido' },
    subtitle: { sr: 'Škole aikida', en: 'Aikido schools' },
    pageSubtitle: {
      sr: 'Istražite škole aikida u {city} — za disciplinu, poštovanje i sklad pokreta.',
      en: 'Explore aikido schools in {city} — for discipline, respect and harmony in movement.',
    },
  },
  {
    id: 'judo',
    name: { sr: 'Džudo', en: 'Judo' },
    slug: 'judo',
    slugs: { sr: 'dzudo', en: 'judo' },
    subtitle: { sr: 'Škole džudoa', en: 'Judo schools' },
    pageSubtitle: {
      sr: 'Istražite škole džudoa u {city} — za disciplinu, ravnotežu i poštovanje.',
      en: 'Explore judo schools in {city} — for discipline, balance and respect.',
    },
  },
  {
    id: 'taekwondo',
    name: { sr: 'Tekvondo', en: 'Taekwondo' },
    slug: 'taekwondo',
    slugs: { sr: 'tekvondo', en: 'taekwondo' },
    subtitle: { sr: 'Škole tekvondoa', en: 'Taekwondo schools' },
  },
  {
    id: 'capoeira',
    name: { sr: 'Kapuera', en: 'Capoeira' },
    nameAccusative: 'kapueru',
    slug: 'capoeira',
    slugs: { sr: 'kapuera', en: 'capoeira' },
    subtitle: { sr: 'Škole kapuere', en: 'Capoeira schools' },
    pageSubtitle: {
      sr: 'Istražite škole kapuere u {city} — za spoj igre, muzike i borilačke veštine.',
      en: 'Explore capoeira schools in {city} — for a blend of play, music and martial art.',
    },
  },
  {
    id: 'chess',
    name: { sr: 'Šah', en: 'Chess' },
    slug: 'chess',
    slugs: { sr: 'sah', en: 'chess' },
    subtitle: { sr: 'Škole šaha', en: 'Chess schools' },
    pageSubtitle: {
      sr: 'Istražite škole šaha u {city} — za koncentraciju, strpljenje i logičko razmišljanje.',
      en: 'Explore chess schools in {city} — for concentration, patience and logical thinking.',
    },
  },
  {
    id: 'swimming',
    name: { sr: 'Plivanje', en: 'Swimming' },
    slug: 'swimming',
    slugs: { sr: 'plivanje', en: 'swimming' },
    subtitle: { sr: 'Škole plivanja', en: 'Swimming schools' },
    pageSubtitle: {
      sr: 'Istražite škole plivanja u {city} — za decu koja vole vodu ili tek treba da je zavole.',
      en: 'Explore swimming schools in {city} — for children who already love the water, or are just about to.',
    },
  },
  {
    id: 'mini-sports',
    name: { sr: 'Sportić', en: 'Mini Sports' },
    slug: 'mini-sports',
    slugs: { sr: 'sportic', en: 'mini-sports' },
    subtitle: { sr: 'Prvi samostalni treninzi', en: 'First independent training' },
    pageSubtitle: {
      sr: 'Istražite programe Sportića u {city} — za prve samostalne treninge kroz igru, priču i navikavanje na grupu.',
      en: 'Explore Sportić programs in {city} — for first independent training through play, story and getting used to a group.',
    },
  },
  {
    id: 'kids-sports',
    name: { sr: 'Školica sporta', en: 'Kids’ Sports' },
    nameAccusative: 'školicu sporta',
    slug: 'kids-sports',
    slugs: { sr: 'skolica-sporta', en: 'kids-sports' },
    subtitle: { sr: 'Školice sporta za predškolce', en: 'Sports programs for preschoolers' },
    pageSubtitle: {
      sr: 'Istražite školice sporta u {city} — za igru, razvoj motorike i prve sportske korake.',
      en: 'Explore kids’ sports programs in {city} — for play, motor development and first steps in sport.',
    },
  },
  {
    id: 'developmental-gymnastics',
    name: { sr: 'Razvojna gimnastika', en: 'Developmental gymnastics' },
    nameAccusative: 'razvojnu gimnastiku',
    slug: 'developmental-gymnastics',
    slugs: { sr: 'razvojna-gimnastika', en: 'developmental-gymnastics' },
    subtitle: { sr: 'Škole razvojne gimnastike', en: 'Developmental gymnastics schools' },
    pageSubtitle: {
      sr: 'Istražite škole razvojne gimnastike u {city} — za koordinaciju, držanje i motoričku osnovu kroz igru.',
      en: 'Explore developmental gymnastics schools in {city} — for coordination, posture and a motor foundation through play.',
    },
  },
  {
    id: 'teen-workout',
    name: { sr: 'Fitnes za tinejdžere', en: 'Teen workout' },
    nameAccusative: 'fitnes za tinejdžere',
    slug: 'teen-workout',
    slugs: { sr: 'fitnes-za-tinejdzere', en: 'teen-workout' },
    subtitle: { sr: 'Treninzi za tinejdžere', en: 'Workouts for teenagers' },
    pageSubtitle: {
      sr: 'Istražite treninge za tinejdžere u {city} — za snagu, pokretljivost i aktivnost bez pritiska.',
      en: 'Explore teen workouts in {city} — for strength, mobility and staying active without the pressure.',
    },
  },
  {
    id: 'riding',
    name: { sr: 'Jahanje', en: 'Horse riding' },
    slug: 'riding',
    slugs: { sr: 'jahanje', en: 'riding' },
    subtitle: { sr: 'Škole jahanja', en: 'Horse riding schools' },
    pageSubtitle: {
      sr: 'Istražite škole jahanja u {city} — za prirodu, povezanost sa konjima i miran ritam van grada.',
      en: 'Explore horse riding schools in {city} — for nature, a bond with horses and a calm rhythm away from city streets.',
    },
  },
  {
    id: 'folklore',
    name: { sr: 'Folklor', en: 'Folklore' },
    slug: 'folklore',
    slugs: { sr: 'folklor', en: 'folklore' },
    subtitle: { sr: 'Škole folklora', en: 'Folklore schools' },
    pageSubtitle: {
      sr: 'Istražite škole folklora u {city} — za tradiciju, igru, pesmu i druženje kroz narodne običaje.',
      en: 'Explore folklore schools in {city} — for tradition, dance, song and getting together through folk customs.',
    },
  },
  {
    id: 'dance',
    name: { sr: 'Ples', en: 'Dance' },
    slug: 'dance',
    slugs: { sr: 'ples', en: 'dance' },
    subtitle: { sr: 'Škole plesa', en: 'Dance schools' },
  },
  {
    id: 'music',
    name: { sr: 'Muzika', en: 'Music' },
    slug: 'music',
    slugs: { sr: 'muzika', en: 'music' },
    subtitle: { sr: 'Muzičke škole', en: 'Music schools' },
  },
  {
    id: 'art',
    name: { sr: 'Umetnost', en: 'Art' },
    slug: 'art',
    slugs: { sr: 'umetnost', en: 'art' },
    subtitle: { sr: 'Umetničke škole', en: 'Art schools' },
  },
  {
    id: 'creative-writing',
    name: { sr: 'Kreativno pisanje', en: 'Creative writing' },
    nameAccusative: 'kreativno pisanje',
    slug: 'creative-writing',
    slugs: { sr: 'kreativno-pisanje', en: 'creative-writing' },
    subtitle: { sr: 'Kursevi kreativnog pisanja', en: 'Creative writing courses' },
    pageSubtitle: {
      sr: 'Istražite kurseve kreativnog pisanja u {city} — za poeziju, prozu i radost stvaranja kroz reči.',
      en: 'Explore creative writing courses in {city} — for poetry, prose and the joy of creating through words.',
    },
  },
  {
    id: 'languages',
    name: { sr: 'Jezici', en: 'Languages' },
    nameAccusative: 'jezike',
    slug: 'languages',
    slugs: { sr: 'jezici', en: 'languages' },
    subtitle: { sr: 'Škole stranih jezika', en: 'Foreign language schools' },
    pageSubtitle: {
      sr: 'Istražite škole stranih jezika u {city} — za decu koja kroz igru i razgovor usvajaju novi jezik.',
      en: 'Explore foreign language schools in {city} — for children who acquire a new language through play and conversation.',
    },
  },
  {
    id: 'learning-support',
    name: { sr: 'Podrška učenju', en: 'Learning support' },
    nameAccusative: 'podršku učenju',
    slug: 'learning-support',
    slugs: { sr: 'podrska-ucenju', en: 'learning-support' },
    subtitle: { sr: 'Podrška učenju', en: 'Learning support' },
    pageSubtitle: {
      sr: 'Istražite podršku učenju u {city} — priprema za ispite i pomoć sa školskim gradivom.',
      en: 'Explore learning support in {city} — exam prep and help with schoolwork.',
    },
  },
  {
    id: 'programming',
    name: { sr: 'Programiranje', en: 'Programming' },
    nameAccusative: 'programiranje',
    slug: 'programming',
    slugs: { sr: 'programiranje', en: 'programming' },
    subtitle: { sr: 'Škole programiranja', en: 'Programming schools' },
    pageSubtitle: {
      sr: 'Istražite škole programiranja u {city} — za kod, logiku i prve korake u informatici.',
      en: 'Explore programming schools in {city} — for code, logic and first steps in computer science.',
    },
  },
  {
    id: 'science',
    name: { sr: 'Nauka', en: 'Science' },
    slug: 'science',
    slugs: { sr: 'nauka', en: 'science' },
    subtitle: { sr: 'Naučni programi za decu', en: 'Science programs for children' },
  },
  {
    id: 'technology',
    name: { sr: 'Tehnologija', en: 'Technology' },
    slug: 'technology',
    slugs: { sr: 'tehnologija', en: 'technology' },
    subtitle: { sr: 'Tehnološki programi za decu', en: 'Technology programs for children' },
  },
  {
    id: 'nature',
    name: { sr: 'Priroda', en: 'Nature' },
    slug: 'nature',
    slugs: { sr: 'priroda', en: 'nature' },
    subtitle: { sr: 'Programi na otvorenom', en: 'Outdoor programs' },
  },
]

export const getCategoryBySlug = (slug: string) =>
  categories.find(
    (category) =>
      category.id === slug ||
      category.slug === slug ||
      category.slugs.sr === slug ||
      category.slugs.en === slug
  )

export const getCategorySlug = (category: Category, lang: Lang) => category.slugs[lang]

/** Map a category id or either-language slug to the slug used in `targetLang` routes. */
export const localizeCategorySlug = (slug: string, targetLang: Lang) => {
  const category = getCategoryBySlug(slug)
  return category ? getCategorySlug(category, targetLang) : slug
}

export const getCategoryName = (category: Category, lang: Lang) =>
  getLocalizedText(category.name, lang, `category:${category.id}:name`)

export const getCategoryNameBySlug = (slug: string, lang: Lang) => {
  const category = getCategoryBySlug(slug)
  return category ? getCategoryName(category, lang) : slug
}

export const getCategoryNameAccusative = (category: Category, lang: Lang) => {
  if (lang === 'sr') {
    const value = category.nameAccusative ?? getCategoryName(category, lang)
    // Mid-phrase after „Nazad na …”: common nouns stay lowercase (not title case).
    return value.charAt(0).toLocaleLowerCase('sr-RS') + value.slice(1)
  }

  return getCategoryName(category, lang)
}

export const formatCategorySubtitle = (category: Category, city: string, lang: Lang) => {
  if (category.pageSubtitle) {
    const template = getLocalizedText(
      category.pageSubtitle,
      lang,
      `category:${category.id}:pageSubtitle`
    )

    if (!city) {
      return template
        .replace(' u {city}', '')
        .replace(' in {city}', '')
        .replace('{city}', '')
        .replace(/\s{2,}/g, ' ')
        .trim()
    }

    const cityText = lang === 'en' ? city : getCityLocative(city)
    return template.replace('{city}', cityText)
  }

  const subtitle = getLocalizedText(category.subtitle, lang, `category:${category.id}:subtitle`)

  if (!city) {
    return subtitle
  }

  const cityText = lang === 'en' ? city : getCityLocative(city)
  return lang === 'en' ? `${subtitle} in ${cityText}` : `${subtitle} u ${cityText}`
}
