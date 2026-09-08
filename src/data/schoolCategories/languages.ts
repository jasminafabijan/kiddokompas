import eltisiJpg from '../../assets/images/schools/languages/eltisi.jpg'
import helenDoronWebp from '../../assets/images/schools/languages/helen-doron.webp'
import helenDoronJpg from '../../assets/images/schools/languages/helen-doron.jpg'

import type { LocalizedText } from '../../i18n/types'
import type { School, SchoolAddress, SchoolContact } from './types'

const helenDoronDescription = {
    sr: [
        'Pre 35 godina, lingvista i nastavnik, gospođa Helen Doron, napravila je revoluciju u učenju engleskog jezika kao stranog jezika za decu, razvivši metod koji oponaša način na koji bebe uče njihov maternji jezik.',
        'Danas Helen Doron predstavlja međunarodnu franšiznu mrežu zastupljenu u 34 zemlje.',
        'Preko 3 miliona dece danas priča engleski jezik zahvaljujući Helen Doron metodi.',
        'Centralna komponenta Helen Doron English metode je pozadinsko slušanje određenih audio diskova ili pesama kod kuće, optimalno 15-25 minuta dnevno svakog dana.',
        'Helen Doron English kursevi se održavaju u malim grupama od četvoro do osmoro dece.',
        'Helen Doron metod za učenje uzima u obzir dečje jedinstvene stilove učenja i koristi igre, pokret, muziku i mnoštvo zabave da poveća dečju prirodnu ljubav za učenjem i sklonost za upijanjem jezika.',
    ],
    en: [
        'Thirty-five years ago, linguist and teacher Helen Doron revolutionized learning English as a foreign language for children, developing a method that mimics the way babies learn their native language.',
        'Today Helen Doron is an international franchise network in 34 countries.',
        'More than 3 million children today speak English thanks to the Helen Doron method.',
        'A central component of the Helen Doron English method is background listening to specific audio discs or songs at home, optimally 15–25 minutes every day.',
        'Helen Doron English courses are held in small groups of four to eight children.',
        'The Helen Doron learning method takes children’s unique learning styles into account and uses games, movement, music and plenty of fun to increase children’s natural love of learning and aptitude for absorbing language.',
    ],
}

const helenDoronContact: SchoolContact = {
    phone: ['0800 333 000', '064 641 6082', '011 3573 017'],
    website: 'https://helendoron.rs',
    facebook: 'https://sr-rs.facebook.com/HelenDoronSchoolOfEnglishSrbija',
    facebookLabel: 'Helen Doron English',
    instagram: 'https://www.instagram.com/helendoronsrbija/',
}

const helenDoronSocial: SchoolContact = {
    facebook: helenDoronContact.facebook,
    facebookLabel: helenDoronContact.facebookLabel,
    instagram: helenDoronContact.instagram,
}

const helenDoronCityPage = {
    categorySlugs: ['languages'],
    minAge: 0,
    maxAge: 19,
    ageLabel: '0–19 godina',
    imageWebp: helenDoronWebp,
    imageFallback: helenDoronJpg,
    description: helenDoronDescription,
} satisfies Pick<
    School,
    'categorySlugs' | 'minAge' | 'maxAge' | 'ageLabel' | 'imageWebp' | 'imageFallback' | 'description'
>

const helenDoronBranchPage = {
    ...helenDoronCityPage,
    brandSchoolId: 'helen-doron',
}

/** Google listing CID from the embed on each helendoron.rs location page. */
const helenDoronMaps = (cid: string) => `https://www.google.com/maps?cid=${cid}`

const helenDoronHall = (
    street: string,
    city: string,
    district: string,
    lat: number,
    lng: number,
    areaLabel: LocalizedText,
    contact: SchoolContact,
    mapsUrl?: string
): SchoolAddress => ({
    street,
    city,
    district,
    lat,
    lng,
    mapsUrl,
    areaLabel,
    contact,
})

const zemunContact: SchoolContact = {
    phone: '062 1870 667',
    email: 'zemun1@helendoron.rs',
    website: 'https://helendoron.rs/zemun-1/',
}

const helenDoronBeogradHalls: SchoolAddress[] = [
    helenDoronHall(
        'Zrmanjska 27',
        'Beograd',
        'Čukarica',
        44.7846692,
        20.4199788,
        { sr: 'Čukarica — Banovo brdo', en: 'Čukarica — Banovo brdo' },
        {
            phone: ['011 3573 017', '064 641 6082'],
            email: 'cukarica@helendoron.rs',
            website: 'https://helendoron.rs/cukarica/',
        },
        helenDoronMaps('14360350694701766148')
    ),
    helenDoronHall(
        'Cvijićeva 46',
        'Beograd',
        'Palilula',
        44.8153861,
        20.476965,
        { sr: 'Palilula — Cvijićeva', en: 'Palilula — Cvijićeva' },
        {
            phone: '063 8346 958',
            email: 'palilula1@helendoron.rs',
            website: 'https://helendoron.rs/helen-doron-palilula/',
        },
        helenDoronMaps('8636135683467167051')
    ),
    helenDoronHall(
        'Beograd na vodi, Quartet 1, Luke Ćelovića Trebinjca 13, ulaz B, stan 6',
        'Beograd',
        'Savski Venac',
        44.8057248,
        20.4529913,
        { sr: 'Savski Venac — Beograd na vodi', en: 'Savski Venac — Beograd na vodi' },
        {
            phone: '062 736 525',
            email: 'savskivenac@helendoron.rs',
            website: 'https://helendoron.rs/savski-venac-helen-doron/',
        },
        helenDoronMaps('12301328192489613629')
    ),
    helenDoronHall(
        'Solunska 13',
        'Beograd',
        'Stari Grad',
        44.8269921,
        20.4586092,
        { sr: 'Stari Grad — Dorćol', en: 'Stari Grad — Dorćol' },
        {
            phone: '065 8346 958',
            email: 'starigrad@helendoron.rs',
            website: 'https://helendoron.rs/stari-grad/',
        },
        helenDoronMaps('16106082710081904292')
    ),
    helenDoronHall(
        'Jove Ilića 125',
        'Beograd',
        'Voždovac',
        44.7770758,
        20.4736796,
        { sr: 'Voždovac — Autokomanda', en: 'Voždovac — Autokomanda' },
        {
            phone: '062 1222 099',
            email: 'vozdovac1@helendoron.rs',
            website: 'https://helendoron.rs/vozdovac-jove-ilica-125/',
        },
        helenDoronMaps('16536227715528641172')
    ),
    helenDoronHall(
        'Paunova 40',
        'Beograd',
        'Voždovac',
        44.7551114,
        20.476671,
        { sr: 'Voždovac — Banjica', en: 'Voždovac — Banjica' },
        {
            phone: ['011 3675 130', '064 4610 233'],
            email: 'vozdovac2@helendoron.rs',
            website: 'https://helendoron.rs/vozdovac-paunova-40/',
        },
        helenDoronMaps('5416108815432540262')
    ),
    helenDoronHall(
        'Kneza Stracimira 8',
        'Beograd',
        'Vračar',
        44.7918322,
        20.4762224,
        { sr: 'Vračar — Kneza Stracimira', en: 'Vračar — Kneza Stracimira' },
        {
            phone: ['011 3085 644', '064 6416 083'],
            email: 'vracar@helendoron.rs',
            website: 'https://helendoron.rs/vracar/',
            facebook: 'https://www.facebook.com/HelenDoronEnglishVracar',
            facebookLabel: 'Helen Doron Vračar',
        },
        helenDoronMaps('3548129985076988917')
    ),
    helenDoronHall(
        'Bulevar kralja Aleksandra 151',
        'Beograd',
        'Zvezdara',
        44.7998393,
        20.4895316,
        { sr: 'Zvezdara — Đeram', en: 'Zvezdara — Đeram' },
        {
            phone: ['011 2413 043', '065 241 3043'],
            email: 'zvezdara1@helendoron.rs',
            website: 'https://helendoron.rs/zvezdara-1/',
        },
        helenDoronMaps('10920551699865680109')
    ),
    helenDoronHall(
        'Mirijevski bulevar 211',
        'Beograd',
        'Zvezdara',
        44.7952643,
        20.5278845,
        { sr: 'Zvezdara — Mirijevo', en: 'Zvezdara — Mirijevo' },
        {
            phone: ['011 316 7754', '062 1222 099'],
            email: 'zvezdara2@helendoron.rs',
            website: 'https://helendoron.rs/zvezdara-2/',
        },
        helenDoronMaps('10769121090646486650')
    ),
    helenDoronHall(
        'Bulevar Arsenija Čarnojevića 103',
        'Beograd',
        'Novi Beograd',
        44.8143328,
        20.4142793,
        {
            sr: 'Novi Beograd, Blok 28 — Arsenija Čarnojevića',
            en: 'Novi Beograd, Blok 28 — Arsenija Čarnojevića',
        },
        {
            phone: '061 6485 334',
            email: 'novibgd1@helendoron.rs',
            website: 'https://helendoron.rs/novi-beograd-1/',
        },
        helenDoronMaps('2903457973395151446')
    ),
    helenDoronHall(
        'Dr. Ivana Ribara 81',
        'Beograd',
        'Novi Beograd',
        44.8022931,
        20.3684928,
        {
            sr: 'Novi Beograd, Blok 61 — Dr. Ivana Ribara',
            en: 'Novi Beograd, Blok 61 — Dr. Ivana Ribara',
        },
        {
            phone: '062 9725 648',
            email: 'novibgd2-blokovi@helendoron.rs',
            website: 'https://helendoron.rs/novi-beograd-blok-61/',
        },
        helenDoronMaps('1652438137243335967')
    ),
    helenDoronHall(
        'Radoja Dakića 10',
        'Beograd',
        'Zemun',
        44.8382494,
        20.4073238,
        { sr: 'Zemun, Gradski park — Radoja Dakića', en: 'Zemun, City Park — Radoja Dakića' },
        zemunContact,
        helenDoronMaps('9929231828131060657')
    ),
    helenDoronHall(
        'Cara Dušana 145a, stan 5',
        'Beograd',
        'Zemun',
        44.8559027,
        20.3848058,
        {
            sr: 'Zemun, Zemunske kapije — Cara Dušana',
            en: 'Zemun, Zemunske kapije — Cara Dušana',
        },
        zemunContact
    ),
]

export const languagesSchools: School[] = [
    {
        id: 'eltisi',
        slug: 'eltisi',
        name: {
            sr: 'Škola stranih jezika ELTISI',
            en: 'ELTISI Language School',
        },
        categorySlugs: ['languages'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: eltisiJpg,
        imageFallback: eltisiJpg,
        description: {
            sr: [
                'Škola stranih jezika ELTISI vodi dečije kurseve engleskog kroz igru, pesmu, priče i glumu, uz TPR metodu koja spaja govor i pokret.',
                'Profesori su posebno obučeni za rad sa decom, a nastava prati zajedničke metodološke principe, uz redovne obuke u školi i na seminarima.',
                'Časovi nisu pasivno praćenje udžbenika: deca aktivno koriste jezik, uz audio-vizuelne materijale, interaktivne programe i pametnu tablu.',
                'Saradnja sa roditeljima i praćenje napretka su deo rada, a škola ima više od dve decenije iskustva.',
            ],
            en: [
                'ELTISI Language School runs children’s English courses through play, song, stories and acting, using the TPR method that links speech and movement.',
                'Teachers are specially trained to work with children, and classes follow shared methodological principles, with regular in-school training and external seminars.',
                'Lessons are not passive textbook work: children use the language actively, with audiovisual materials, interactive programs and a smart board.',
                'Cooperation with parents and tracking progress are part of the work, and the school has more than two decades of experience.',
            ],
        },
        addresses: [
            {
                street: 'Kraljev Park, Kraljevića Marka 26, I/3',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.262871,
                lng: 19.8357055,
            },
        ],
        contact: {
            phone: '066 633 28 71',
            email: 'office@eltisi.com',
            website: 'https://eltisi.com/deciji-kursevi/',
            facebook: 'https://www.facebook.com/eltisins/',
            facebookLabel: 'ELTISI',
            instagram: 'https://www.instagram.com/el_ti_si/',
        },
    },
    {
        id: 'helen-doron',
        slug: 'helen-doron',
        name: {
            sr: 'Helen Doron English',
            en: 'Helen Doron English',
        },
        ...helenDoronCityPage,
        brandOverview: true,
        city: 'Novi Sad',
        district: '',
        addresses: [
            {
                street: '',
                city: 'Novi Sad',
                lat: 45.252,
                lng: 19.842,
                schoolSlug: 'helen-doron-novi-sad',
            },
            {
                street: '',
                city: 'Beograd',
                lat: 44.8176,
                lng: 20.4569,
                schoolSlug: 'helen-doron-beograd',
            },
            {
                street: '',
                city: 'Čačak',
                lat: 43.8914,
                lng: 20.3497,
                schoolSlug: 'helen-doron-cacak',
            },
        ],
        contact: helenDoronContact,
    },
    {
        id: 'helen-doron-novi-sad',
        slug: 'helen-doron-novi-sad',
        name: {
            sr: 'Helen Doron English',
            en: 'Helen Doron English',
        },
        ...helenDoronBranchPage,
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        addresses: [
            helenDoronHall(
                'Vase Stajića 22a',
                'Novi Sad',
                'Stari Grad (Centar)',
                45.250605,
                19.8424414,
                { sr: 'Centar — Vase Stajića', en: 'City Center — Vase Stajića' },
                {
                    phone: '060 6416 088',
                    email: 'novisad1@helendoron.rs',
                    website:
                        'https://helendoron.rs/novi-sad-1/#1642502612622-e811b19c-b8bc0c3f-a6a3',
                    facebook: 'https://www.facebook.com/HelenDoronNoviSad1/',
                    facebookLabel: 'Helen Doron Novi Sad 1',
                },
                helenDoronMaps('5937701111303450701')
            ),
            helenDoronHall(
                'Rumenačka 35, ulaz 3',
                'Novi Sad',
                'Detelinara',
                45.2623909,
                19.8183782,
                { sr: 'Detelinara — Rumenačka', en: 'Detelinara — Rumenačka' },
                {
                    phone: '064 1413 764',
                    email: 'novisad2@helendoron.rs',
                    website: 'https://helendoron.rs/novi-sad-2/',
                },
                helenDoronMaps('8397576049915206913')
            ),
        ],
        contact: {
            facebook: 'https://www.facebook.com/HelenDoronNoviSad1/',
            facebookLabel: 'Helen Doron Novi Sad 1',
            instagram: helenDoronSocial.instagram,
        },
    },
    {
        id: 'helen-doron-beograd',
        slug: 'helen-doron-beograd',
        name: {
            sr: 'Helen Doron English',
            en: 'Helen Doron English',
        },
        ...helenDoronBranchPage,
        city: 'Beograd',
        district: 'Čukarica',
        addresses: helenDoronBeogradHalls,
        contact: helenDoronSocial,
    },
    {
        id: 'helen-doron-cacak',
        slug: 'helen-doron-cacak',
        name: {
            sr: 'Helen Doron English',
            en: 'Helen Doron English',
        },
        ...helenDoronBranchPage,
        city: 'Čačak',
        district: '',
        addresses: [
            {
                street: 'Kursulina 10',
                city: 'Čačak',
                lat: 43.886999,
                lng: 20.351934,
                mapsUrl: helenDoronMaps('14424722641234276524'),
            },
        ],
        contact: {
            phone: '069 774 492',
            website: 'https://helendoron.rs/cacak/',
            facebook: helenDoronSocial.facebook,
            facebookLabel: helenDoronSocial.facebookLabel,
            instagram: helenDoronSocial.instagram,
        },
    },
]
