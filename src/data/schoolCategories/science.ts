import tinkerLabsWebp from '../../assets/images/schools/science/tinker-labs.webp'

import type { LocalizedText } from '../../i18n/types'
import type { School, SchoolAddress, SchoolContact } from './types'

const tinkerLabsDescription = {
    sr: [
        'Tinker Labs je vanškolski program za decu uzrasta od 3 do 14 godina, osmišljen da ih na zanimljiv i kreativan način uvede u svet STEAM-a – nauke, tehnologije, inženjerstva, umetnosti i matematike.',
        'Program se sastoji od eksperimentalnih radionica koje deci omogućavaju da kroz igru, istraživanje i praktičan rad upoznaju različite STEAM oblasti. Cilj je da deca otkriju šta ih najviše zanima i u čemu uživaju, kako bi tu strast kasnije, kroz formalno obrazovanje, razvijala u svoju svrhu.',
        'Naš slogan glasi: Od igre do strasti, od strasti do svrhe.',
        'Pored redovnih programa prilagođenih različitim uzrastima, Tinker Labs organizuje i tematske rođendane, kao i jednokratne sezonske radionice, poput Slime Day, Space Day, Earth Day, Dino Day i Winter Day.',
        'STEAM pristup povezuje nauku, tehnologiju, inženjerstvo, umetnost i matematiku, podstičući decu da razmišljaju kreativno, istražuju i samostalno dolaze do rešenja.',
        'Poseban akcenat stavljamo na učenje kroz pokušaje i greške, praktičan rad i rešavanje problema. Deca stvaraju sopstvenim rukama, eksperimentišu sa različitim materijalima i alatima, postavljaju pitanja i stiču nova znanja kroz neposredno iskustvo.',
        'Rad u malim grupama omogućava individualniji pristup i posvećenost svakom detetu.',
    ],
    en: [
        'Tinker Labs is an after-school program for children ages 3 to 14, designed to introduce them to the world of STEAM — science, technology, engineering, art and mathematics — in an engaging and creative way.',
        'The program is made up of experiment workshops that let children get to know different STEAM fields through play, exploration and hands-on work. The aim is for children to discover what interests them most and what they enjoy, so they can later develop that passion into their purpose through formal education.',
        'Our slogan is: From play to passion, from passion to purpose.',
        'Alongside regular programs adapted to different ages, Tinker Labs also organizes themed birthday parties and one-time seasonal workshops, such as Slime Day, Space Day, Earth Day, Dino Day and Winter Day.',
        'The STEAM approach connects science, technology, engineering, art and mathematics, encouraging children to think creatively, explore and reach solutions on their own.',
        'We put special emphasis on learning through trial and error, hands-on work and problem solving. Children create with their own hands, experiment with different materials and tools, ask questions and gain new knowledge through direct experience.',
        'Work in small groups allows a more individual approach and attention for every child.',
    ],
}

const tinkerLabsName = {
    sr: 'Tinker Labs',
    en: 'Tinker Labs',
}

const tinkerLabsPage = {
    categorySlugs: ['science'],
    minAge: 3,
    maxAge: 14,
    ageLabel: '3–14 godina',
    imageWebp: tinkerLabsWebp,
    imageFallback: tinkerLabsWebp,
    description: tinkerLabsDescription,
} satisfies Pick<
    School,
    'categorySlugs' | 'minAge' | 'maxAge' | 'ageLabel' | 'imageWebp' | 'imageFallback' | 'description'
>

const tinkerLabsBranch = {
    ...tinkerLabsPage,
    brandSchoolId: 'tinker-labs',
}

const tinkerMaps = (cid: string) => `https://www.google.com/maps?cid=${cid}`

const tinkerSite = (path: string) => `https://tinkerlabs.rs/${path}`

const tinkerHall = (
    street: string,
    city: string,
    district: string,
    lat: number,
    lng: number,
    contact: SchoolContact,
    cid: string,
    areaLabel?: LocalizedText
): SchoolAddress => ({
    street,
    city,
    district,
    lat,
    lng,
    mapsUrl: tinkerMaps(cid),
    areaLabel,
    contact,
})

const tinkerCityLink = (city: string, slug: string, lat: number, lng: number): SchoolAddress => ({
    street: '',
    city,
    lat,
    lng,
    schoolSlug: slug,
})

const tinkerSingle = (
    id: string,
    city: string,
    street: string,
    lat: number,
    lng: number,
    cid: string,
    contact: SchoolContact
): School => ({
    id,
    slug: id,
    name: tinkerLabsName,
    ...tinkerLabsBranch,
    city,
    district: '',
    addresses: [
        {
            street,
            city,
            lat,
            lng,
            mapsUrl: tinkerMaps(cid),
        },
    ],
    contact,
})

export const scienceSchools: School[] = [
    {
        id: 'tinker-labs',
        slug: 'tinker-labs',
        name: tinkerLabsName,
        ...tinkerLabsPage,
        brandOverview: true,
        city: 'Novi Sad',
        district: '',
        addresses: [
            tinkerCityLink('Bačka Palanka', 'tinker-labs-backa-palanka', 45.25, 19.392),
            tinkerCityLink('Beograd', 'tinker-labs-beograd', 44.805, 20.45),
            tinkerCityLink('Čačak', 'tinker-labs-cacak', 43.887, 20.352),
            tinkerCityLink('Inđija', 'tinker-labs-indjija', 45.049, 20.082),
            tinkerCityLink('Kladovo', 'tinker-labs-kladovo', 44.607, 22.615),
            tinkerCityLink('Kragujevac', 'tinker-labs-kragujevac', 44.012, 20.911),
            tinkerCityLink('Kruševac', 'tinker-labs-krusevac', 43.583, 21.327),
            tinkerCityLink('Niš', 'tinker-labs-nis', 43.32, 21.896),
            tinkerCityLink('Nova Pazova', 'tinker-labs-nova-pazova', 44.947, 20.216),
            tinkerCityLink('Novi Sad', 'tinker-labs-novi-sad', 45.252, 19.842),
            tinkerCityLink('Pančevo', 'tinker-labs-pancevo', 44.871, 20.64),
            tinkerCityLink('Sombor', 'tinker-labs-sombor', 45.774, 19.115),
            tinkerCityLink('Sremska Mitrovica', 'tinker-labs-sremska-mitrovica', 44.976, 19.612),
            tinkerCityLink('Subotica', 'tinker-labs-subotica', 46.1, 19.667),
            tinkerCityLink('Šabac', 'tinker-labs-sabac', 44.755, 19.69),
            tinkerCityLink('Vršac', 'tinker-labs-vrsac', 45.116, 21.303),
        ],
        contact: {
            phone: '064 184 90 08',
            email: 'serbia@tinkerlabs.rs',
            website: 'https://tinkerlabs.rs',
        },
    },
    {
        id: 'tinker-labs-novi-sad',
        slug: 'tinker-labs-novi-sad',
        name: tinkerLabsName,
        ...tinkerLabsBranch,
        city: 'Novi Sad',
        district: 'Grbavica',
        addresses: [
            tinkerHall(
                'Krilova 1',
                'Novi Sad',
                'Grbavica',
                45.2418032,
                19.8306705,
                {
                    phone: '069 101 09 10',
                    email: 'novisad@tinkerlabs.rs',
                    website: tinkerSite('novi-sad-grbovica-liman'),
                    facebook: 'https://www.facebook.com/p/Tinker-Labs-Novi-Sad-1-100077177214668',
                    facebookLabel: 'Tinker Labs Novi Sad',
                    instagram: 'https://www.instagram.com/tinkerlabs_novisad/',
                },
                '12840694344925140261',
                { sr: 'Grbavica / Liman', en: 'Grbavica / Liman' }
            ),
            tinkerHall(
                'Kosovska 25, lokal 15',
                'Novi Sad',
                'Podbara',
                45.2611521,
                19.8498625,
                {
                    phone: '064 178 87 04',
                    email: 'novisad2@tinkerlabs.rs',
                    website: tinkerSite('novi-sad-2-podbara'),
                    facebook: 'https://www.facebook.com/people/Tinker-Labs-Novi-Sad-Podbara/100094471993751',
                    facebookLabel: 'Tinker Labs Podbara',
                    instagram: 'https://www.instagram.com/tinkerlabs_podbara/',
                },
                '12620674644998341740',
                { sr: 'Podbara', en: 'Podbara' }
            ),
        ],
        contact: {
            website: 'https://tinkerlabs.rs',
        },
    },
    {
        id: 'tinker-labs-beograd',
        slug: 'tinker-labs-beograd',
        name: tinkerLabsName,
        ...tinkerLabsBranch,
        city: 'Beograd',
        district: '',
        addresses: [
            tinkerHall(
                'Zmaj od Avale bb (zgrada FK Avala)',
                'Beograd',
                'Beli Potok',
                44.7112789,
                20.5047741,
                {
                    phone: ['069 352 50 11', '063 885 32 11'],
                    email: 'avala@tinkerlabs.rs',
                    website: tinkerSite('beograd-avala'),
                    facebook: 'https://www.facebook.com/tinkerlabs.avala',
                    facebookLabel: 'Tinker Labs Avala',
                    instagram: 'https://www.instagram.com/tinkerlabs_avala/',
                },
                '2014835689697185963',
                { sr: 'Avala', en: 'Avala' }
            ),
            tinkerHall(
                'Nikolaja Gogolja 38D',
                'Beograd',
                'Čukarica',
                44.7765817,
                20.4124666,
                {
                    phone: '063 149 51 34',
                    email: 'banovobrdo@tinkerlabs.rs',
                    website: tinkerSite('banovo-brdo'),
                    facebook: 'https://www.facebook.com/tinkerlabs.banovobrdo',
                    facebookLabel: 'Tinker Labs Banovo brdo',
                    instagram: 'https://www.instagram.com/tinkerlabs_banovobrdo/',
                },
                '8405509455413866012',
                { sr: 'Banovo brdo', en: 'Banovo brdo' }
            ),
            tinkerHall(
                'Partizanske avijacije bb (prekoputa Vodovoda)',
                'Beograd',
                'Novi Beograd',
                44.8146054,
                20.3825402,
                {
                    phone: '064 911 82 65',
                    email: 'bezanijskakosa@tinkerlabs.rs',
                    website: tinkerSite('bezanijska-kosa'),
                    facebook: 'https://www.facebook.com/profile.php?id=61558752897842',
                    facebookLabel: 'Tinker Labs Bežanijska kosa',
                    instagram: 'https://www.instagram.com/tinkerlabs__bezanijskakosa/',
                },
                '15604195542191878106',
                { sr: 'Bežanijska kosa', en: 'Bežanijska kosa' }
            ),
            tinkerHall(
                'Kajmakčalanska 4',
                'Beograd',
                'Zvezdara',
                44.7989517,
                20.4862166,
                {
                    phone: '063 33 88 33',
                    email: 'zvezdara1@tinkerlabs.rs',
                    website: tinkerSite('zvezdara1'),
                    facebook: 'https://www.facebook.com/p/Tinker-Labs-Crveni-Krst-61559460180310',
                    facebookLabel: 'Tinker Labs Crveni krst',
                    instagram: 'https://www.instagram.com/tinkerlabs_crvenikrst/',
                },
                '16242252139156280811',
                { sr: 'Crveni krst', en: 'Crveni krst' }
            ),
            tinkerHall(
                'Venizelosova 29j',
                'Beograd',
                'Stari Grad',
                44.8202841,
                20.4725628,
                {
                    phone: ['063 700 08 90', '063 813 66 26'],
                    email: 'dorcol@tinkerlabs.rs',
                    website: tinkerSite('beograd-dorcol'),
                    facebook: 'https://www.facebook.com/people/Tinker-Labs-Novi-Dorćol/61550654008922',
                    facebookLabel: 'Tinker Labs Dorćol',
                    instagram: 'https://www.instagram.com/tinkerlabs_novidorcol/',
                },
                '13706948735195042168',
                { sr: 'Dorćol', en: 'Dorćol' }
            ),
            tinkerHall(
                'Mirijevski bulevar 213a',
                'Beograd',
                'Zvezdara',
                44.7950914,
                20.5276427,
                {
                    phone: '065 575 80 39',
                    email: 'mirijevo@tinkerlabs.rs',
                    website: tinkerSite('beograd-mirijevo'),
                    facebook: 'https://www.facebook.com/profile.php?id=61573497418323',
                    facebookLabel: 'Tinker Labs Mirijevo',
                    instagram: 'https://www.instagram.com/tinkerlabs_mirijevo/',
                },
                '5932248440757234225',
                { sr: 'Mirijevo', en: 'Mirijevo' }
            ),
            tinkerHall(
                'Dr Agostina Neta 32A',
                'Beograd',
                'Novi Beograd',
                44.8019723,
                20.4022185,
                {
                    phone: '064 613 60 42',
                    email: 'savskiblokovi@tinkerlabs.rs',
                    website: tinkerSite('savski-blokovi'),
                    facebook: 'https://www.facebook.com/TinkerLabsSavskiblokovi',
                    facebookLabel: 'Tinker Labs Savski blokovi',
                    instagram: 'https://www.instagram.com/tinkerlabs_savskiblokovi/',
                },
                '1459446216053995775',
                { sr: 'Savski blokovi', en: 'Savski blokovi' }
            ),
            tinkerHall(
                'Šumadijske divizije 8, lokal 1',
                'Beograd',
                'Voždovac',
                44.7608383,
                20.4901497,
                {
                    phone: '064 294 02 54',
                    email: 'stepa@tinkerlabs.rs',
                    website: tinkerSite('stepa'),
                    facebook: 'https://www.facebook.com/p/Tinker-Labs-Stepa-Stepanović-61556550677763',
                    facebookLabel: 'Tinker Labs Stepa Stepanović',
                    instagram: 'https://www.instagram.com/tinkerlabs_stepa/',
                },
                '16216303784356396998',
                { sr: 'Stepa Stepanović', en: 'Stepa Stepanović' }
            ),
            tinkerHall(
                'Bulevar Mihaila Pupina 10Z, 2. sprat',
                'Beograd',
                'Novi Beograd',
                44.8229508,
                20.42133,
                {
                    phone: ['063 373 288', '011 313 20 34'],
                    email: 'novibeogradyubc@tinkerlabs.rs',
                    website: tinkerSite('novi-beograd-yubc'),
                    facebook:
                        'https://www.facebook.com/people/Tinker-Labs-Novi-Beograd-Yu-Biznis-Centar/61550716110944',
                    facebookLabel: 'Tinker Labs Novi Beograd',
                    instagram: 'https://www.instagram.com/tinkerlabs_novibeograd/',
                },
                '2674920152133003310',
                { sr: 'Novi Beograd — YUBC', en: 'Novi Beograd — YUBC' }
            ),
            tinkerHall(
                'Pilota Mihaila Petrovića 77a',
                'Beograd',
                'Rakovica',
                44.7419304,
                20.4170984,
                {
                    phone: '062 335 853',
                    email: 'vidikovac@tinkerlabs.rs',
                    website: tinkerSite('beogradVidikovac'),
                    facebook: 'https://www.facebook.com/people/Tinker-Labs-Vidikovac/61559883387155',
                    facebookLabel: 'Tinker Labs Vidikovac',
                    instagram: 'https://www.instagram.com/tinkerlabs_vidikovac/',
                },
                '12987662605779741557',
                { sr: 'Vidikovac', en: 'Vidikovac' }
            ),
            tinkerHall(
                'Gornjogradska 7b',
                'Beograd',
                'Zemun',
                44.8428181,
                20.3935443,
                {
                    phone: '060 068 33 44',
                    email: 'zemun@tinkerlabs.rs',
                    website: tinkerSite('zemun'),
                    facebook: 'https://www.facebook.com/people/Tinker-Labs-Zemun/100092957217781',
                    facebookLabel: 'Tinker Labs Zemun',
                    instagram: 'https://www.instagram.com/tinkerlabs_zemun/',
                },
                '5378563490149604927',
                { sr: 'Zemun', en: 'Zemun' }
            ),
        ],
        contact: {
            website: 'https://tinkerlabs.rs',
        },
    },
    {
        id: 'tinker-labs-nis',
        slug: 'tinker-labs-nis',
        name: tinkerLabsName,
        ...tinkerLabsBranch,
        city: 'Niš',
        district: '',
        addresses: [
            tinkerHall(
                'Narodnih heroja 1',
                'Niš',
                '',
                43.3242321,
                21.9187013,
                {
                    phone: '063 656 924',
                    email: 'nis@tinkerlabs.rs',
                    website: tinkerSite('nis-bulevar'),
                    facebook: 'https://www.facebook.com/people/Tinker-Labs-Nis/100083546734748',
                    facebookLabel: 'Tinker Labs Niš',
                    instagram: 'https://www.instagram.com/tinkerlabs_nis/',
                },
                '9087180136743692827',
                { sr: 'Bulevar', en: 'Bulevar' }
            ),
            tinkerHall(
                'Rajićeva 13',
                'Niš',
                '',
                43.3153932,
                21.8983466,
                {
                    phone: '063 656 924',
                    email: 'nis2@tinkerlabs.rs',
                    website: tinkerSite('nis-2-centar'),
                    facebook: 'https://www.facebook.com/people/Tinker-Labs-Nis/100083546734748',
                    facebookLabel: 'Tinker Labs Niš',
                    instagram: 'https://www.instagram.com/tinkerlabs_nis/',
                },
                '9506655517123429579',
                { sr: 'Centar', en: 'City Center' }
            ),
        ],
        contact: {
            website: 'https://tinkerlabs.rs',
        },
    },
    tinkerSingle(
        'tinker-labs-backa-palanka',
        'Bačka Palanka',
        'Šafarikova 93',
        45.2535442,
        19.3910777,
        '5771011794219210357',
        {
            phone: '069 251 09 74',
            email: 'backa.palanka@tinkerlabs.rs',
            website: tinkerSite('backa-palanka'),
            facebook: 'https://www.facebook.com/tinkerlabs.backapalanka',
            facebookLabel: 'Tinker Labs Bačka Palanka',
            instagram: 'https://www.instagram.com/tinkerlabs_backapalanka/',
        }
    ),
    tinkerSingle(
        'tinker-labs-cacak',
        'Čačak',
        'Svetozara Markovića 27',
        43.8873189,
        20.3477935,
        '7267004688445612777',
        {
            phone: '063 162 37 04',
            email: 'cacak@tinkerlabs.rs',
            website: tinkerSite('cacak'),
            facebook: 'https://www.facebook.com/people/Tinkerlabs-Čačak/100090770021165',
            facebookLabel: 'Tinker Labs Čačak',
            instagram: 'https://www.instagram.com/tinkerlabs_cacak/',
        }
    ),
    tinkerSingle(
        'tinker-labs-indjija',
        'Inđija',
        'Tirševa 8',
        45.0490305,
        20.0902857,
        '15952805423966041568',
        {
            phone: '064 282 62 67',
            email: 'indjija@tinkerlabs.rs',
            website: tinkerSite('indjija'),
            facebook: 'https://www.facebook.com/tinkerlabsindjija',
            facebookLabel: 'Tinker Labs Inđija',
            instagram: 'https://www.instagram.com/tinkerlabs_indjija/',
        }
    ),
    tinkerSingle(
        'tinker-labs-kladovo',
        'Kladovo',
        'Kralja Aleksandra 39',
        44.609147,
        22.6088421,
        '11175875377163895401',
        {
            phone: '065 455 09 00',
            email: 'kladovo@tinkerlabs.rs',
            website: tinkerSite('kladovo'),
            facebook: 'https://www.facebook.com/tinkerlabskladovo',
            facebookLabel: 'Tinker Labs Kladovo',
            instagram: 'https://www.instagram.com/tinkerlabs_kladovo/',
        }
    ),
    tinkerSingle(
        'tinker-labs-kragujevac',
        'Kragujevac',
        'Bulevar Kraljice Marije 54B',
        44.009481,
        20.8966459,
        '116352517939949125',
        {
            phone: '064 268 77 80',
            email: 'kragujevac@tinkerlabs.rs',
            website: tinkerSite('kragujevac'),
            facebook: 'https://www.facebook.com/kragujevactinkerlabs',
            facebookLabel: 'Tinker Labs Kragujevac',
            instagram: 'https://www.instagram.com/tinkerlabs_kragujevac/',
        }
    ),
    tinkerSingle(
        'tinker-labs-krusevac',
        'Kruševac',
        'Nikole Tesle 6V',
        43.5752773,
        21.3324368,
        '10432893192199743937',
        {
            phone: '062 162 90 68',
            email: 'krusevac@tinkerlabs.rs',
            website: tinkerSite('krusevac'),
            facebook: 'https://www.facebook.com/people/Tinker-Labs-Kruševac/61558408106870',
            facebookLabel: 'Tinker Labs Kruševac',
            instagram: 'https://www.instagram.com/tinkerlabs_krusevac/',
        }
    ),
    tinkerSingle(
        'tinker-labs-nova-pazova',
        'Nova Pazova',
        'Cara Dušana 38',
        44.9466165,
        20.216329,
        '6777737062796252425',
        {
            phone: '063 373 288',
            email: 'novapazova@tinkerlabs.rs',
            website: tinkerSite('nova-pazova'),
            facebook: 'https://www.facebook.com/profile.php?id=61576294499797',
            facebookLabel: 'Tinker Labs Nova Pazova',
            instagram: 'https://www.instagram.com/tinkerlabs_novapazova/',
        }
    ),
    tinkerSingle(
        'tinker-labs-pancevo',
        'Pančevo',
        'Svetog Save 34',
        44.8750996,
        20.6444783,
        '15657019334682029779',
        {
            phone: '064 118 37 31',
            email: 'pancevo@tinkerlabs.rs',
            website: tinkerSite('pancevo'),
            facebook: 'https://www.facebook.com/tinkerlabspa',
            facebookLabel: 'Tinker Labs Pančevo',
            instagram: 'https://www.instagram.com/tinkerlabs_pancevo/',
        }
    ),
    tinkerSingle(
        'tinker-labs-sombor',
        'Sombor',
        'Sonje Marinković 23',
        45.7693602,
        19.1207277,
        '17442748060137542927',
        {
            phone: '060 157 82 46',
            email: 'sombor@tinkerlabs.rs',
            website: tinkerSite('sombor'),
            facebook: 'https://www.facebook.com/people/Tinker-labs-Sombor/61559587391422',
            facebookLabel: 'Tinker Labs Sombor',
            instagram: 'https://www.instagram.com/tinkerlabs_sombor/',
        }
    ),
    tinkerSingle(
        'tinker-labs-sremska-mitrovica',
        'Sremska Mitrovica',
        'Ratarska 6',
        44.9772354,
        19.6301596,
        '18131341278129214775',
        {
            phone: '065 567 64 29',
            email: 'sremskamitrovica@tinkerlabs.rs',
            website: tinkerSite('sremska-mitrovica'),
            facebook: 'https://www.facebook.com/p/Tinker-Labs-Sremska-Mitrovica-61557720403150',
            facebookLabel: 'Tinker Labs Sremska Mitrovica',
            instagram: 'https://www.instagram.com/tinkerlabs_sremskamitrovica/',
        }
    ),
    tinkerSingle(
        'tinker-labs-subotica',
        'Subotica',
        'Blaška Rajića 26',
        46.0886396,
        19.6690783,
        '17392010163094067173',
        {
            phone: '060 177 90 77',
            email: 'subotica@tinkerlabs.rs',
            website: tinkerSite('subotica'),
            facebook: 'https://www.facebook.com/people/Tinker-Labs-Subotica/100090280959437',
            facebookLabel: 'Tinker Labs Subotica',
            instagram: 'https://www.instagram.com/tinkerlabs_subotica/',
        }
    ),
    tinkerSingle(
        'tinker-labs-sabac',
        'Šabac',
        'Miloša Pocerca 38',
        44.7517001,
        19.7012911,
        '7538580317142123663',
        {
            phone: '064 325 77 53',
            email: 'sabac@tinkerlabs.rs',
            website: tinkerSite('sabac'),
            facebook: 'https://www.facebook.com/people/Tinker-Labs-Šabac/61557913864069',
            facebookLabel: 'Tinker Labs Šabac',
            instagram: 'https://www.instagram.com/tinkerlabs_sabac/',
        }
    ),
    tinkerSingle(
        'tinker-labs-vrsac',
        'Vršac',
        'Dimitrija Tucovića 17/1',
        45.1147154,
        21.2990735,
        '1124083051319830914',
        {
            phone: '063 29 60 29',
            email: 'vrsac@tinkerlabs.rs',
            website: tinkerSite('vrsac'),
            facebook: 'https://www.facebook.com/profile.php?id=61575041121881',
            facebookLabel: 'Tinker Labs Vršac',
            instagram: 'https://www.instagram.com/tinkerlabs_vrsac/',
        }
    ),
]
