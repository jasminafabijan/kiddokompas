import eltisiJpg from '../../assets/images/schools/languages/eltisi.jpg'
import helenDoronWebp from '../../assets/images/schools/languages/helen-doron.webp'
import helenDoronJpg from '../../assets/images/schools/languages/helen-doron.jpg'
import academyWebp from '../../assets/images/schools/languages/academy.webp'
import academyJpg from '../../assets/images/schools/languages/academy.jpg'
import nskrugWebp from '../../assets/images/schools/languages/ns-krug.webp'
import nskrugFallback from '../../assets/images/schools/languages/ns-krug.jpg'
import scoolWebp from '../../assets/images/schools/languages/scool.webp'
import scoolPng from '../../assets/images/schools/languages/scool.png'

import type { LocalizedText } from '../../i18n/types'
import type { School, SchoolAddress, SchoolContact } from './types'

const helenDoronDescription = {
    sr: [
        'Pre više od 40 godina, lingvista i nastavnik, gospođa Helen Doron, napravila je revoluciju u učenju engleskog jezika kao stranog jezika za decu, razvivši metod koji oponaša način na koji bebe uče njihov maternji jezik.',
        'Danas Helen Doron predstavlja međunarodnu franšiznu mrežu zastupljenu u 34 zemlje.',
        'Preko 3 miliona dece danas priča engleski jezik zahvaljujući Helen Doron metodi.',
        'Centralna komponenta Helen Doron English metode je pozadinsko slušanje određenih audio diskova ili pesama kod kuće, optimalno 15-25 minuta dnevno svakog dana.',
        'Helen Doron English kursevi se održavaju u malim grupama od četvoro do osmoro dece.',
        'Helen Doron metod za učenje uzima u obzir dečje jedinstvene stilove učenja i koristi igre, pokret, muziku i mnoštvo zabave da poveća dečju prirodnu ljubav za učenjem i sklonost za upijanjem jezika.',
    ],
    en: [
        'More than 40 years ago, linguist and teacher Helen Doron revolutionized learning English as a foreign language for children, developing a method that mimics the way babies learn their native language.',
        'Today Helen Doron is an international franchise network in 34 countries.',
        'More than 3 million children today speak English thanks to the Helen Doron method.',
        'A central component of the Helen Doron English method is background listening to specific audio discs or songs at home, optimally 15–25 minutes every day.',
        'Helen Doron English courses are held in small groups of four to eight children.',
        'The Helen Doron learning method takes children’s unique learning styles into account and uses games, movement, music and plenty of fun to increase children’s natural love of learning and aptitude for absorbing language.',
    ],
}

const helenDoronContact: SchoolContact = {
    phone: ['0800 333 000', '064 641 60 82', '011 357 30 17'],
    website: 'https://helendoron.rs',
    facebook: 'https://www.facebook.com/HelenDoronSchoolOfEnglishSrbija/',
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
    phone: '062 187 06 67',
    email: 'zemun1@helendoron.rs',
    website: 'https://helendoron.rs/zemun-1/',
    facebook: 'https://www.facebook.com/helen.doron.zemun',
    facebookLabel: 'Helen Doron Zemun',
    instagram: 'https://www.instagram.com/helen.doron.zemun/',
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
            phone: ['011 357 30 17', '064 641 60 82'],
            email: 'cukarica@helendoron.rs',
            website: 'https://helendoron.rs/cukarica/',
            facebook: 'https://www.facebook.com/HelenDoronEnglishCukarica',
            facebookLabel: 'Helen Doron Čukarica',
            instagram: 'https://www.instagram.com/helen_doron_school_cukarica/',
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
            phone: '063 834 69 58',
            email: 'palilula1@helendoron.rs',
            website: 'https://helendoron.rs/helen-doron-palilula/',
            facebook: 'https://www.facebook.com/HelenDoronEnglishPalilula1',
            facebookLabel: 'Helen Doron Palilula 1',
            instagram: 'https://www.instagram.com/helendoronpalilula1/',
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
            facebook: 'https://www.facebook.com/helendoronsavskivenac',
            facebookLabel: 'Helen Doron Savski Venac',
            instagram: 'https://www.instagram.com/helendoron.savskivenac/',
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
            phone: '065 834 69 58',
            email: 'starigrad@helendoron.rs',
            website: 'https://helendoron.rs/stari-grad/',
            facebook: 'https://www.facebook.com/helendoronstarigrad',
            facebookLabel: 'Helen Doron Stari Grad',
            instagram: 'https://www.instagram.com/helendoron_starigrad/',
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
            phone: '062 122 20 99',
            email: 'vozdovac1@helendoron.rs',
            website: 'https://helendoron.rs/vozdovac-jove-ilica-125/',
            facebook: 'https://www.facebook.com/HelenDoronVozdovac1',
            facebookLabel: 'Helen Doron Voždovac 1',
            instagram: 'https://www.instagram.com/helendoronvozdovac1/',
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
            phone: ['011 367 51 30', '064 461 02 33'],
            email: 'vozdovac2@helendoron.rs',
            website: 'https://helendoron.rs/vozdovac-paunova-40/',
            facebook: 'https://www.facebook.com/HelenDoronVozdovac2.SkolicaZekan',
            facebookLabel: 'Helen Doron Voždovac 2',
            instagram: 'https://www.instagram.com/skolicazekan/',
        },
        helenDoronMaps('5416108815432540262')
    ),
    helenDoronHall(
        'Kneza Stracimira 8',
        'Beograd',
        'Vračar',
        44.7917823,
        20.4762834,
        { sr: 'Vračar — Kneza Stracimira', en: 'Vračar — Kneza Stracimira' },
        {
            phone: ['011 308 56 44', '064 641 60 83'],
            email: 'vracar@helendoron.rs',
            website: 'https://helendoron.rs/vracar/',
            facebook: 'https://www.facebook.com/HelenDoronEnglishVracar/',
            facebookLabel: 'Helen Doron Vračar',
            instagram: 'https://www.instagram.com/helendoron_vracar/',
        },
        helenDoronMaps('17016160093086498663')
    ),
    helenDoronHall(
        'Bulevar kralja Aleksandra 151',
        'Beograd',
        'Zvezdara',
        44.7998393,
        20.4895316,
        { sr: 'Zvezdara — Đeram', en: 'Zvezdara — Đeram' },
        {
            phone: ['011 241 30 43', '065 241 30 43'],
            email: 'zvezdara1@helendoron.rs',
            website: 'https://helendoron.rs/zvezdara-1/',
            facebook: 'https://www.facebook.com/HelenDoronEnglishZvezdara1',
            facebookLabel: 'Helen Doron Zvezdara 1',
            instagram: 'https://www.instagram.com/helendoronzvezdara1/',
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
            phone: ['011 316 77 54', '062 122 20 99'],
            email: 'zvezdara2@helendoron.rs',
            website: 'https://helendoron.rs/zvezdara-2/',
            facebook: 'https://www.facebook.com/sigel.studio.beograd',
            facebookLabel: 'Helen Doron Zvezdara 2',
            instagram: 'https://www.instagram.com/helen.doron.mirijevo/',
        },
        helenDoronMaps('10769121090646486650')
    ),
    helenDoronHall(
        'Bulevar Arsenija Čarnojevića 103',
        'Beograd',
        'Novi Beograd',
        44.8141443,
        20.4146265,
        {
            sr: 'Novi Beograd, Blok 28 — Arsenija Čarnojevića',
            en: 'Novi Beograd, Blok 28 — Arsenija Čarnojevića',
        },
        {
            phone: '061 648 53 34',
            email: 'novibgd1@helendoron.rs',
            website: 'https://helendoron.rs/novi-beograd-1/',
            facebook: 'https://www.facebook.com/HelenDoronNoviBeograd1',
            facebookLabel: 'Helen Doron Novi Beograd 1',
            instagram: 'https://www.instagram.com/helendoronenglishnovibeograd1/',
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
            phone: '062 972 56 48',
            email: 'novibgd2-blokovi@helendoron.rs',
            website: 'https://helendoron.rs/novi-beograd-blok-61/',
            facebook: 'https://www.facebook.com/helen.doron.blok.61',
            facebookLabel: 'Helen Doron Blokovi',
            instagram: 'https://www.instagram.com/helen.doron.blok.61/',
        },
        helenDoronMaps('1652438137243335967')
    ),
    helenDoronHall(
        'Radoja Dakića 10',
        'Beograd',
        'Zemun',
        44.8382363,
        20.4074002,
        { sr: 'Zemun, Gradski park — Radoja Dakića', en: 'Zemun, City Park — Radoja Dakića' },
        zemunContact,
        'https://www.google.com/maps/place/Helen+Doron+English+LC+Zemun/@44.8382363,20.4074002,17z/data=!4m6!3m5!1s0x475a65a7c2677ff3:0xdbcc9dd261fb8b8f!8m2!3d44.8382363!4d20.4074002!16s%2Fg%2F11cn0qdcy0'
    ),
    helenDoronHall(
        'Cara Dušana 145a, stan 5',
        'Beograd',
        'Zemun',
        44.8558671,
        20.3847697,
        {
            sr: 'Zemun, Zemunske kapije — Cara Dušana',
            en: 'Zemun, Zemunske kapije — Cara Dušana',
        },
        zemunContact,
        'https://www.google.com/maps/place/Cara+Du%C5%A1ana+145a,+Beograd+11080/@44.8558671,20.3847697,17z/data=!4m6!3m5!1s0x475a65d290e1d885:0x995f64634582bec8!8m2!3d44.8558671!4d20.3847697!16s%2Fg%2F11z93qpxpg'
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
        id: 'academy-centar-stranih-jezika',
        slug: 'academy-centar-stranih-jezika',
        name: {
            sr: 'Academy — Centar stranih jezika',
            en: 'Academy Language Center',
        },
        categorySlugs: ['languages'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        hidden: true,
        imageWebp: academyWebp,
        imageFallback: academyJpg,
        description: {
            sr: [
                'Academy radi od 1995. godine kao centar stranih jezika, sa kursevima engleskog, nemačkog i ruskog.',
                'Dečije grupe imaju najviše osam učenika i formiraju se prema uzrastu i stvarnom nivou znanja, uz besplatno testiranje predznanja pre upisa.',
                'Na času se jezik odmah koristi u govoru, zadacima i situacijama — nije cilj samo preći udžbenik, već podići nivo od početnog do najviših stepena, uključujući pripremu za Cambridge ispite.',
                'Isti čas može da se prati u učionici ili uživo online, sa istim profesorom i istom grupom.',
            ],
            en: [
                'Academy has been a language center since 1995, with English, German and Russian courses.',
                'Children’s groups have at most eight pupils and are formed by age and actual level, with a free placement test before enrollment.',
                'In class the language is used right away in speech, tasks and real situations — the goal is not only to get through the textbook, but to raise the level from starter through the highest grades, including Cambridge exam preparation.',
                'The same lesson can be followed in the classroom or live online, with the same teacher and the same group.',
            ],
        },
        addresses: [
            {
                street: 'Jevrejska 22',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2532102,
                lng: 19.8393455,
            },
        ],
        contact: {
            phone: ['021 425 542', '066 425 542'],
            email: 'info@academy.edu.rs',
            website: 'https://academy.edu.rs/kursevi/kursevi-engleskog-za-decu/',
            facebook: 'https://www.facebook.com/academycentarstranihjezika',
            facebookLabel: 'Academy',
            instagram: 'https://www.instagram.com/academy.centar.stranih.jezika/',
        },
    },
    {
        id: 'nskrug',
        slug: 'nskrug',
        name: {
            sr: 'Novosadski kulturno-obrazovni krug',
            en: 'Novi Sad Cultural and Educational Circle',
        },
        categorySlugs: ['languages', 'learning-support', 'programming', 'creative-writing'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: nskrugWebp,
        imageFallback: nskrugFallback,
        description: {
            sr: [
                'U ponudi su strani jezici, podrška školskom gradivu, programiranje za decu i kreativno pisanje — u malim grupama ili individualno, uz pristup prilagođen uzrastu.',
                'Strani jezici kroz igru i konverzaciju, mentorski časovi iz školskih predmeta, Scratch i Python sa robotićima, kao i kurs poezije i proze.',
            ],
            en: [
                'The offer includes foreign languages, schoolwork support, programming for children and creative writing — in small groups or one-on-one, with an age-adapted approach.',
                'Foreign languages through play and conversation, mentored classes in school subjects, Scratch and Python with small robots, plus a poetry and prose course.',
            ],
        },
        descriptionsByCategory: {
            languages: {
                sr: [
                    'Strani jezici uče se kroz igru, pesmice, priče i crtanje, uz nastavni plan prilagođen uzrastu i interesovanjima.',
                    'U ponudi su engleski, nemački, ruski, francuski, španski, mađarski i srpski — u malim grupama, sa naglaskom na konverzaciju i aktivno usvajanje jezika.',
                    'Nastava prati module od predškolskog uzrasta do srednje škole, uz kvalifikovane nastavnike i fleksibilne termine.',
                ],
                en: [
                    'Foreign languages are taught through play, songs, stories and drawing, with a syllabus adapted to age and interests.',
                    'The offer includes English, German, Russian, French, Spanish, Hungarian and Serbian — in small groups, with an emphasis on conversation and active language use.',
                    'Classes follow modules from preschool through high school, with qualified teachers and flexible scheduling.',
                ],
            },
            'learning-support': {
                sr: [
                    'Individualni časovi uz mentora 1:1 — fokus na znanja koja treba steći i probleme koje treba rešiti, u terminima koji odgovaraju učeniku.',
                    'Poluindividualni rad u malim grupama prati školsko gradivo, pripremu za kontrolne i pismene, uz efikasan pristup sličan individualnoj nastavi.',
                    'U ponudi su časovi iz srpskog, matematike, programiranja, fizike, hemije, biologije, geografije, istorije, stranih jezika i drugih školskih predmeta.',
                ],
                en: [
                    'Individual 1:1 mentoring — focused on the knowledge to build and the problems to solve, on a schedule that works for the student.',
                    'Semi-individual work in small groups tracks school material and prep for tests and written exams, with an approach close to one-on-one teaching.',
                    'The offer includes classes in Serbian, math, programming, physics, chemistry, biology, geography, history, foreign languages and other school subjects.',
                ],
            },
            programming: {
                sr: [
                    'Prvi koraci u programiranju uvode decu postepeno — najmlađi kroz vizuelno programiranje u Scratch-u i rad sa robotićima, stariji kroz Python na sopstvenim projektima.',
                    'Kursevi su prilagođeni različitim nivoima znanja; nastava je mentorska, u malim grupama, uz visok udeo praktičnog rada.',
                    'Tim čine saradnici i diplomci računarskog usmerenja FTN-a — cilj je kreativnost, logičko razmišljanje i timski rad, umesto pasivnog vremena ispred ekrana.',
                ],
                en: [
                    'First steps in programming introduce children gradually — younger kids through visual Scratch coding and work with small robots, older ones through Python on their own projects.',
                    'Courses are adapted to different knowledge levels; teaching is mentored, in small groups, with a strong share of hands-on work.',
                    'The team includes collaborators and computer-science graduates from FTN — the goal is creativity, logical thinking and teamwork, instead of passive screen time.',
                ],
            },
            'creative-writing': {
                sr: [
                    'Kurs kreativnog pisanja poezije ili proze — prostor da se ideje, misli i osećanja pretoče u stihove, priče ili roman, bilo da ste početnik ili već pišete.',
                    'Polaznici čitaju odabrana dela svetske i srpske književnosti, pišu na teme, dobijaju usmerenja i povratne informacije, a mogu i da učestvuju na književnoj večeri ili literarnom konkursu.',
                    'Nastava je interaktivna, u manjim grupama ili individualno — cilj je razviti stil, maštu i veštinu pisanja do prve sopstvene knjige.',
                ],
                en: [
                    'A creative writing course in poetry or prose — room to turn ideas, thoughts and feelings into verses, stories or a novel, whether you are a beginner or already write.',
                    'Participants read selected works of world and Serbian literature, write on themes, get guidance and feedback, and may join a literary evening or contest.',
                    'Classes are interactive, in small groups or one-on-one — the goal is to develop style, imagination and writing skill toward a first book of your own.',
                ],
            },
        },
        websitesByCategory: {
            languages: 'https://www.nskrug.org/časovi-i-kursevi/stranijezicizadecu',
            'learning-support': 'https://www.nskrug.org/časovi-i-kursevi/individualni-časovi',
            programming: 'https://www.nskrug.org/časovi-i-kursevi/programiranje-za-decu',
            'creative-writing': 'https://www.nskrug.org/časovi-i-kursevi/kreativnopisanje',
        },
        addresses: [
            {
                street: 'Pasterova 2',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2599119,
                lng: 19.8208928,
            },
            {
                street: 'Narodnog fronta 2a',
                city: 'Novi Sad',
                district: 'Liman 1',
                lat: 45.2425341,
                lng: 19.8464136,
            },
            {
                street: 'Preradovićeva 17',
                city: 'Novi Sad',
                district: 'Petrovaradin',
                lat: 45.251155,
                lng: 19.8742251,
            },
        ],
        contact: {
            phone: ['064 039 32 69', '064 113 27 29'],
            email: 'info@nskrug.org',
            website: 'https://www.nskrug.org/časovi-i-kursevi/stranijezicizadecu',
            facebook: 'https://www.facebook.com/nskulobrazovnikrug',
            facebookLabel: 'Novosadski kulturno-obrazovni krug',
            instagram: 'https://www.instagram.com/ns.krug/',
        },
    },
    {
        id: 'scool',
        slug: 'scool',
        name: {
            sr: 'Centar stranih jezika Scool',
            en: 'Scool Language Center',
        },
        categorySlugs: ['languages', 'learning-support', 'music'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 4,
        maxAge: 77,
        ageLabel: '4–77 godina',
        imageWebp: scoolWebp,
        imageFallback: scoolPng,
        description: {
            sr: [
                'Scool nudi engleski kroz Project-Based Learning, srpski za strance, podršku školskom gradivu i malu maturu, kao i časove klavira i solfeđa — uživo i online.',
                'Po uzoru na kanadski obrazovni sistem, nastava je praktična: deca istražuju, stvaraju, sarađuju i zaista koriste jezik kroz projekte.',
            ],
            en: [
                'Scool offers English through Project-Based Learning, Serbian for foreigners, schoolwork support and elementary exam prep, plus piano and solfeggio — in person and online.',
                'Following the Canadian education model, teaching is practical: children explore, create, collaborate and truly use the language through projects.',
            ],
        },
        descriptionsByCategory: {
            languages: {
                sr: [
                    'Scool je drugačiji način učenja.',
                    'Po uzoru na kanadski obrazovni sistem, engleski se uči kroz Project-Based Learning (PBL) — deca istražuju, stvaraju, sarađuju i kroz konkretne projekte zaista koriste jezik.',
                    'Srpski jezik za strance: praktičan srpski za decu i odrasle kojima srpski nije maternji jezik — kroz razgovor, svakodnevne situacije i postepeno razvijanje sigurnosti u jeziku.',
                ],
                en: [
                    'Scool is a different way of learning.',
                    'Following the Canadian education model, English is taught through Project-Based Learning (PBL) — children explore, create, collaborate and truly use the language through concrete projects.',
                    'Serbian for foreigners: practical Serbian for children and adults whose first language is not Serbian — through conversation, everyday situations and gradually building confidence in the language.',
                ],
            },
            'learning-support': {
                sr: [
                    'Srpski jezik – priprema za malu maturu',
                    'Ciljana priprema za završni ispit iz srpskog jezika, uz sistematizaciju gradiva, vežbanje zadataka i rad na oblastima koje učeniku predstavljaju najveći izazov.',
                    'Pomoć sa školskim gradivom',
                    'Podrška u učenju i savladavanju gradiva iz različitih školskih predmeta, uz objašnjenja prilagođena učeniku, vežbanje i pomoć u organizaciji učenja.',
                ],
                en: [
                    'Serbian — prep for the elementary school leaving exam',
                    'Focused preparation for the final Serbian exam, with systematizing the material, practice tasks and work on the areas that challenge the student most.',
                    'Help with schoolwork',
                    'Support in learning and mastering material from different school subjects, with explanations tailored to the student, practice and help organizing study.',
                ],
            },
            music: {
                sr: [
                    'Muzičko i solfeđo',
                    'Razvijanje muzičkih veština kroz upoznavanje sa notama, ritmom, melodijom i osnovama muzičke teorije, uz praktičan i prilagođen pristup.',
                    'Klavir',
                    'Individualni časovi klavira prilagođeni uzrastu i predznanju deteta, sa fokusom na pravilnu tehniku, muzikalnost, čitanje nota i uživanje u sviranju.',
                ],
                en: [
                    'Music theory and solfeggio',
                    'Building musical skills through notes, rhythm, melody and the basics of music theory, with a practical, age-adapted approach.',
                    'Piano',
                    'Individual piano lessons adapted to the child’s age and prior knowledge, with a focus on proper technique, musicality, reading notes and enjoying playing.',
                ],
            },
        },
        addresses: [
            {
                street: 'Dunavska 17',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2572671,
                lng: 19.8497204,
                mapsUrl:
                    'https://www.google.com/maps/place/Scool+-+Centar+stranih+jezika+Novi+Sad/@45.2572671,19.8497204,17z/data=!4m6!3m5!1s0x475b11840e2b40fb:0x8412724a10026438!8m2!3d45.2572671!4d19.8497204!16s%2Fg%2F11tx6df5mb',
            },
        ],
        contact: {
            phone: '062 412 646',
            email: 'centarscool@gmail.com',
            instagram: 'https://www.instagram.com/scoolns/',
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
                45.2505949,
                19.8425673,
                { sr: 'Centar — Vase Stajića', en: 'City Center — Vase Stajića' },
                {
                    phone: '060 641 60 88',
                    email: 'novisad1@helendoron.rs',
                    website:
                        'https://helendoron.rs/novi-sad-1/#1642502612622-e811b19c-b8bc0c3f-a6a3',
                    facebook: 'https://www.facebook.com/HelenDoronNoviSad1',
                    facebookLabel: 'Helen Doron Novi Sad 1',
                    instagram: 'https://www.instagram.com/helen_doron_school_novi_sad_1/',
                },
                helenDoronMaps('8445124162537648362')
            ),
            helenDoronHall(
                'Rumenačka 35, ulaz 3',
                'Novi Sad',
                'Detelinara',
                45.2623909,
                19.8183782,
                { sr: 'Detelinara — Rumenačka', en: 'Detelinara — Rumenačka' },
                {
                    phone: '064 141 37 64',
                    email: 'novisad2@helendoron.rs',
                    website: 'https://helendoron.rs/novi-sad-2/',
                    facebook: 'https://www.facebook.com/share/18FtdiBsDe/?mibextid=LQQJ4d',
                    facebookLabel: 'Helen Doron Novi Sad 2',
                    instagram: 'https://www.instagram.com/helendoron_novi_sad2/',
                },
                helenDoronMaps('8397576049915206913')
            ),
        ],
        contact: {
            facebook: 'https://www.facebook.com/HelenDoronNoviSad1',
            facebookLabel: 'Helen Doron Novi Sad 1',
            instagram: 'https://www.instagram.com/helen_doron_school_novi_sad_1/',
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
                lat: 43.8870188,
                lng: 20.3518839,
                mapsUrl: helenDoronMaps('12399991383292778973'),
            },
        ],
        contact: {
            phone: '069 774 492',
            email: 'cacak@helendoron.rs',
            website: 'https://helendoron.rs/cacak/',
            facebook: 'https://www.facebook.com/profile.php?id=61574665184386',
            facebookLabel: 'Helen Doron Čačak',
            instagram: 'https://www.instagram.com/helendoron_cacak/',
        },
    },
]
