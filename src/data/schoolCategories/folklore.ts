import kudNeraWebp from '../../assets/images/schools/folklore/kud-nera.webp'
import kudNeraJpg from '../../assets/images/schools/folklore/kud-nera.jpg'
import folklorikaWebp from '../../assets/images/schools/folklore/folklorika.webp'
import folklorikaJpg from '../../assets/images/schools/folklore/folklorika.png'
import velikoKoloJpg from '../../assets/images/schools/folklore/veliko-kolo.jpg'

import type { LocalizedText } from '../../i18n/types'
import type { School, SchoolAddress, SchoolContact } from './types'

const velikoKoloIntro = {
    sr: [
        'Folklorno udruženje Veliko kolo osnovano je 2010. godine da sačuva kulturnu baštinu i prenese ljubav prema narodnoj igri na decu i mlade.',
        'Kroz vrtić grupe, školu folklora, dečije sastave, inkluzivne grupe i narodni orkestar okuplja veliki broj članova, od prvih koraka u kolu do scenskih nastupa.',
        'Udruženje je poznato po internacionalnom festivalu igre i muzike „Zov ravnice” i po Velikom kolu za Ginisa, kada je u Novom Sadu igralo najveće kolo na svetu.',
        'Član je međunarodnog saveta CIOFF, a osnivač i umetnički voditelj je Milan Veselinović.',
    ],
    en: [
        'Veliko Kolo Folklore Association was founded in 2010 to preserve cultural heritage and pass on a love of folk dance to children and young people.',
        'Through preschool groups, a folklore school, children’s ensembles, inclusive groups and a folk orchestra, it brings together many members, from first steps in kolo to stage performances.',
        'The association is known for the international dance and music festival “Zov ravnice” and for Veliko kolo za Ginisa, when the world’s largest kolo was danced in Novi Sad.',
        'It is a member of the international council CIOFF, and founder and artistic director is Milan Veselinović.',
    ],
}

const velikoKoloNoviSadLocations = {
    sr: [
        'Treninzi se održavaju na više lokacija, raspoređeni po uzrastu.',
        'Svi uzrasti:',
        '- Novo naselje, Mileve Marić 25 (iza zgrade, u atomskom skloništu)',
        '4–11 godina:',
        '- Čenej, Mesna zajednica',
        '7–10 godina:',
        '- Telep, Subotička 8',
        '- Telep, Mesna zajednica, Janošikova 1a',
        '- Grbavica, OŠ „Branko Radičević”',
        '7–12 godina:',
        '- Sremska Kamenica, OŠ „Jovan Jovanović Zmaj”',
    ],
    en: [
        'Training is held at several venues, grouped by age.',
        'All ages:',
        '- Novo naselje, Mileve Marić 25 (behind the building, in the fallout shelter)',
        'Ages 4–11:',
        '- Čenej, Community Center',
        'Ages 7–10:',
        '- Telep, Subotička 8',
        '- Telep, Community Center, Janošikova 1a',
        '- Grbavica, Primary School “Branko Radičević”',
        'Ages 7–12:',
        '- Sremska Kamenica, Primary School “Jovan Jovanović Zmaj”',
    ],
}

const velikoKoloBeocinOverviewLocations = {
    sr: ['7–14 godina:', '- Susek, OŠ „Jovan Popović”'],
    en: ['Ages 7–14:', '- Susek, Primary School “Jovan Popović”'],
}

const velikoKoloOverviewDescription = {
    sr: [
        ...velikoKoloIntro.sr,
        ...velikoKoloNoviSadLocations.sr,
        ...velikoKoloBeocinOverviewLocations.sr,
    ],
    en: [
        ...velikoKoloIntro.en,
        ...velikoKoloNoviSadLocations.en,
        ...velikoKoloBeocinOverviewLocations.en,
    ],
}

const velikoKoloContact: SchoolContact = {
    phone: '064 275 36 37',
    email: 'velikokolo@gmail.com',
    website: 'https://www.velikokolo.org',
    facebook: 'https://www.facebook.com/velikokolo/',
    facebookLabel: 'Veliko kolo',
    instagram: 'https://www.instagram.com/kudvelikokolo/',
}

const velikoKoloCityPage = {
    categorySlugs: ['folklore'],
    minAge: 4,
    maxAge: null,
    ageLabel: '4+ godina',
    imageWebp: velikoKoloJpg,
    imageFallback: velikoKoloJpg,
} satisfies Pick<
    School,
    'categorySlugs' | 'minAge' | 'maxAge' | 'ageLabel' | 'imageWebp' | 'imageFallback'
>

const velikoKoloBranchPage = {
    ...velikoKoloCityPage,
    brandSchoolId: 'veliko-kolo',
}

const velikoKoloMaps = (cid: string) => `https://www.google.com/maps?cid=${cid}`

const velikoKoloHall = (
    street: string,
    city: string,
    district: string,
    lat: number,
    lng: number,
    areaLabel: LocalizedText,
    mapsUrl?: string
): SchoolAddress => ({
    street,
    city,
    district,
    lat,
    lng,
    mapsUrl,
    areaLabel,
})

const velikoKoloNoviSadHalls: SchoolAddress[] = [
    velikoKoloHall(
        'Bulevar oslobođenja 26',
        'Novi Sad',
        'Rotkvarija',
        45.2593572,
        19.831467,
        { sr: 'Rotkvarija — Bulevar oslobođenja', en: 'Rotkvarija — Bulevar oslobođenja' },
        velikoKoloMaps('13108244394030674879')
    ),
    velikoKoloHall(
        'Mileve Marić 25 (iza zgrade, atomsko sklonište)',
        'Novi Sad',
        'Novo naselje',
        45.250673,
        19.786614,
        { sr: 'Novo naselje — Mileve Marić', en: 'Novo naselje — Mileve Marić' },
        velikoKoloMaps('12480422889477065790')
    ),
    velikoKoloHall(
        'Subotička 8',
        'Novi Sad',
        'Severni Telep',
        45.2469558,
        19.8112219,
        { sr: 'Severni Telep — Subotička', en: 'North Telep — Subotička' },
        velikoKoloMaps('4758249238720477825')
    ),
    velikoKoloHall(
        'Mesna zajednica, Janošikova 1a',
        'Novi Sad',
        'Južni Telep',
        45.2334797,
        19.8154377,
        { sr: 'Južni Telep — Janošikova', en: 'South Telep — Janošikova' },
        velikoKoloMaps('18386642481767360904')
    ),
    velikoKoloHall(
        'OŠ „Branko Radičević”, Futoška 5',
        'Novi Sad',
        'Grbavica',
        45.2511216,
        19.8358989,
        { sr: 'Grbavica — OŠ Branko Radičević', en: 'Grbavica — Primary School Branko Radičević' },
        velikoKoloMaps('17125509413860903824')
    ),
    velikoKoloHall(
        'OŠ „Jovan Jovanović Zmaj”, Školska 3',
        'Novi Sad',
        'Sremska Kamenica',
        45.2249724,
        19.842949,
        {
            sr: 'Sremska Kamenica — OŠ Jovan Jovanović Zmaj',
            en: 'Sremska Kamenica — Primary School Jovan Jovanović Zmaj',
        },
        velikoKoloMaps('5546795757126962731')
    ),
    velikoKoloHall(
        'Mesna zajednica, Vuka Karadžića 289',
        'Novi Sad',
        'Čenej',
        45.3695778,
        19.801012,
        { sr: 'Čenej — Mesna zajednica', en: 'Čenej — Community Center' },
        velikoKoloMaps('18293299012805347827')
    ),
]

export const folkloreSchools: School[] = [
    {
        id: 'kud-nera',
        slug: 'kud-nera',
        name: {
            sr: 'KUD Nera',
            en: 'Nera Cultural and Artistic Society',
        },
        categorySlugs: ['folklore'],
        city: 'Novi Sad',
        district: 'Salajka',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: kudNeraWebp,
        imageFallback: kudNeraJpg,
        description: {
            sr: [
                'Kulturno-umetničko društvo Nera iz Novog Sada neguje folklor kroz dečiji, rekreativni i veteranski sastav.',
                'Dečiji folklorni sastav uči narodne igre i pesme iz raznih krajeva Srbije, uz zagrevanje, vežbe i rad na ritmu i pokretu.',
                'Kroz probe i nastupe deca razvijaju motoriku, osećaj za igru i pesmu, upoznaju vršnjake i stiču iskustvo na koncertima i festivalima.',
                'KUD Nera je poznat i po festivalu veteranskog folklora „Ravnica“, kojim promoviše tradiciju, nošnju i srpsko kolo.',
                'Probe se održavaju dva puta nedeljno, a društvo redovno prima nove članove u dečije i ostale sastave.',
            ],
            en: [
                'Nera Cultural and Artistic Society from Novi Sad nurtures folklore through children’s, recreational and veterans’ ensembles.',
                'The children’s folklore ensemble learns folk dances and songs from various parts of Serbia, with warm-up, exercises and work on rhythm and movement.',
                'Through rehearsals and performances, children develop motor skills, a feel for dance and song, meet peers and gain experience at concerts and festivals.',
                'KUD Nera is also known for the veterans’ folklore festival “Ravnica”, through which it promotes tradition, costume and Serbian kolo.',
                'Rehearsals are twice a week, and the society regularly takes new members into the children’s and other ensembles.',
            ],
        },
        addresses: [
            {
                street: 'Šajkaška 26',
                city: 'Novi Sad',
                district: 'Salajka',
                lat: 45.2727198,
                lng: 19.8381287,
            },
        ],
        contact: {
            phone: '063 82 43 794',
            email: 'kudnera@gmail.com',
            website: 'https://kudnera.rs',
            facebook: 'https://www.facebook.com/kud.nera',
            facebookLabel: 'kud.nera',
        },
    },
    {
        id: 'folklorika',
        slug: 'folklorika',
        name: {
            sr: 'Udruženje Folklorika',
            en: 'Folklorika Association',
        },
        categorySlugs: ['folklore'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: folklorikaWebp,
        imageFallback: folklorikaJpg,
        description: {
            sr: [
                'Udruženje Folklorika osnovano je 2016. godine u Novom Sadu, sa ciljem da afirmiše decu i mlade za narodno stvaralaštvo i tradiciju.',
                'Okuplja oko 200 članova u više folklornih ansambala — od Folklorne azbuke za najmlađe do reprezentativnih i rekreativnih sastava.',
                'Pored igre, organizuju radionice o starim zanatima, pripremu za muzičku školu i osnove scenskog nastupa.',
                'Udruženje je poznato i po vraćanju obreda Bačkih kraljica i festivalu „Kraljičino kolo“, kojim neguje nematerijalnu kulturnu baštinu.',
                'Članovi redovno nastupaju na koncertima, festivalima i međunarodnim gostovanjima.',
            ],
            en: [
                'Folklorika Association was founded in 2016 in Novi Sad, with the aim of introducing children and young people to folk creativity and tradition.',
                'It brings together around 200 members in several folklore ensembles — from Folklorna azbuka for the youngest to representative and recreational groups.',
                'Besides dance, it organizes workshops on traditional crafts, preparation for music school and the basics of stage performance.',
                'The association is also known for restoring the Bačke kraljice rite and for the festival “Kraljičino kolo”, through which it nurtures intangible cultural heritage.',
                'Members regularly appear at concerts, festivals and international guest performances.',
            ],
        },
        addresses: [
            {
                street: 'Kraljevića Marka 48',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2644183,
                lng: 19.8352253,
            },
        ],
        contact: {
            phone: '060 044 67 17',
            email: 'marina.ilin1971@gmail.com',
            website: 'https://www.folklorika.rs/',
            facebook: 'https://www.facebook.com/udruzenjefolklorika/',
            instagram: 'https://www.instagram.com/_folklorika/',
        },
    },
    {
        id: 'veliko-kolo',
        slug: 'veliko-kolo',
        name: {
            sr: 'Folklorno udruženje „Veliko kolo”',
            en: 'Veliko Kolo Folklore Association',
        },
        ...velikoKoloCityPage,
        brandOverview: true,
        description: velikoKoloOverviewDescription,
        city: 'Novi Sad',
        district: '',
        addresses: [
            {
                street: '',
                city: 'Novi Sad',
                lat: 45.2593572,
                lng: 19.831467,
                schoolSlug: 'veliko-kolo-novi-sad',
            },
            {
                street: '',
                city: 'Beočin',
                lat: 45.2244724,
                lng: 19.5352005,
                schoolSlug: 'veliko-kolo-beocin',
            },
        ],
        contact: velikoKoloContact,
    },
    {
        id: 'veliko-kolo-novi-sad',
        slug: 'veliko-kolo-novi-sad',
        name: {
            sr: 'Veliko kolo Novi Sad',
            en: 'Veliko Kolo Novi Sad',
        },
        ...velikoKoloBranchPage,
        city: 'Novi Sad',
        district: 'Rotkvarija',
        description: {
            sr: [...velikoKoloIntro.sr, ...velikoKoloNoviSadLocations.sr],
            en: [...velikoKoloIntro.en, ...velikoKoloNoviSadLocations.en],
        },
        addresses: velikoKoloNoviSadHalls,
        contact: velikoKoloContact,
    },
    {
        id: 'veliko-kolo-beocin',
        slug: 'veliko-kolo-beocin',
        name: {
            sr: 'Veliko kolo Beočin',
            en: 'Veliko Kolo Beočin',
        },
        ...velikoKoloBranchPage,
        city: 'Beočin',
        district: 'Susek',
        minAge: 7,
        maxAge: 14,
        ageLabel: '7–14 godina',
        description: velikoKoloIntro,
        addresses: [
            {
                street: 'OŠ „Jovan Popović”, Nikole Tesle 73',
                city: 'Beočin',
                district: 'Susek',
                lat: 45.2244724,
                lng: 19.5352005,
                mapsUrl: velikoKoloMaps('18094186361467725027'),
            },
        ],
        contact: velikoKoloContact,
    },
]
