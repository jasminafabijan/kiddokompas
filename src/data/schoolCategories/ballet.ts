import ntcBaletWebp from '../../assets/images/schools/ballet/ntc-balet.webp'
import ntcBaletPng from '../../assets/images/schools/ballet/ntc-balet.png'
import reveransWebp from '../../assets/images/schools/ballet/reverans.webp'
import reveransJpg from '../../assets/images/schools/ballet/reverans.jpg'
import pointeDanceWebp from '../../assets/images/schools/ballet/pointe-dance.webp'
import pointeDancePng from '../../assets/images/schools/ballet/pointe-dance.png'
import dobrilaNovkovWebp from '../../assets/images/schools/ballet/dobrila-novkov.webp'
import dobrilaNovkovPng from '../../assets/images/schools/ballet/dobrila-novkov.png'
import ludensWebp from '../../assets/images/schools/ballet/ludens.webp'
import ludensJpg from '../../assets/images/schools/ballet/ludens.jpg'

import type { School } from './types'

const ntcBaletDescription = {
    sr: [
        'Kroz pokret, muziku i igru, NTC balet razvija maštu, koordinaciju i samopouzdanje deteta.',
        'Program spaja balet, ritmičku gimnastiku i NTC metodologiju. Nije profesionalna baletska obuka, već razvojni program za decu koja vole pokret, muziku i igru, i nije potrebno prethodno iskustvo.',
        'Na času se radi na koordinaciji, ravnoteži, pravilnom držanju, pažnji i osećaju za ritam, a kroz baletske igre i na samopouzdanju, izražavanju emocija i saradnji.',
        'NTC tehnike ulaze u svaki čas kroz ritam, asocijacije, koordinacione zadatke i igru, tako da deca istovremeno pokreću telo, maštu i razmišljanje.',
        'Svaki čas vodi u novu priču: deca plešu kroz pustinje, džungle, ledene predele i skrivene gradove, i tako povezuju pokret sa avanturom.',
        'Radionice traju 60 minuta, jednom ili dva puta sedmično tokom školske godine. Tokom godine su javni časovi, a na kraju i godišnja priredba svih grupa.',
    ],
    en: [
        'Through movement, music and play, NTC ballet develops a child’s imagination, coordination and confidence.',
        'The program combines ballet, rhythmic gymnastics and the NTC methodology. It is not professional ballet training, but a developmental program for children who like movement, music and play, and no previous experience is required.',
        'Class works on coordination, balance, posture, attention and a sense of rhythm, and through ballet games also on confidence, expressing emotions and cooperation.',
        'NTC techniques are part of every class through rhythm, associations, coordination tasks and play, so children set body, imagination and thinking in motion at the same time.',
        'Each class leads into a new story: children dance through deserts, jungles, icy landscapes and hidden cities, and so connect movement with adventure.',
        'Workshops last 60 minutes, once or twice a week throughout the school year. There are open classes during the year, and an annual performance of all groups at the end.',
    ],
}

const ntcBaletContact = {
    phone: '061 3755 399',
    email: 'balet.gimnastika@ntcucenje.com',
    website: 'https://ntcucenje.com/ntc-balet/',
    facebook: 'https://www.facebook.com/ntcsistemucenja',
    instagram: 'https://www.instagram.com/ntcucenje/',
}

const ntcBaletCityPage = {
    categorySlugs: ['ballet'],
    minAge: 3,
    maxAge: 9,
    ageLabel: '3–9 godina',
    imageWebp: ntcBaletWebp,
    imageFallback: ntcBaletPng,
    description: ntcBaletDescription,
    contact: ntcBaletContact,
} satisfies Pick<
    School,
    | 'categorySlugs'
    | 'minAge'
    | 'maxAge'
    | 'ageLabel'
    | 'imageWebp'
    | 'imageFallback'
    | 'description'
    | 'contact'
>

const ntcBaletBranchPage = {
    ...ntcBaletCityPage,
    brandSchoolId: 'ntc-balet',
}

export const balletSchools: School[] = [
    {
        id: 'dobrila-novkov',
        slug: 'dobrila-novkov',
        name: {
            sr: 'Baletska škola Dobrile Novkov „La Sylphide“',
            en: 'Dobrila Novkov “La Sylphide” Ballet School',
        },
        categorySlugs: ['ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: dobrilaNovkovWebp,
        imageFallback: dobrilaNovkovPng,
        description: {
            sr: [
                'Privatna baletska škola Dobrile Novkov „La Sylphide“ u Novom Sadu više od tri decenije nudi klasično baletsko obrazovanje.',
                'Nastava se izvodi po ruskom metodu Akademije Vaganove, uz rad na gipkosti, izdržljivosti, disciplini i pažnji na detalje.',
                'Program obuhvata predškolske grupe, klase baletske osnovne škole sa verifikovanim svedočanstvima i pripremu za srednju baletsku školu.',
                'Na kraju školske godine škola priređuje gala predstavu, a učenici nastupaju i na lokalnim manifestacijama i humanitarnim koncertima.',
                'Školu je do sada pohađalo više od hiljadu učenika — od onih koji uživaju u baletu do onih koji nastavljaju profesionalni put.',
            ],
            en: [
                'The private ballet school of Dobrila Novkov “La Sylphide” in Novi Sad has offered classical ballet education for more than three decades.',
                'Classes follow the Russian Vaganova Academy method, with work on flexibility, stamina, discipline and attention to detail.',
                'The program includes preschool groups, elementary ballet school classes with verified certificates, and preparation for secondary ballet school.',
                'At the end of the school year the school stages a gala performance, and pupils also appear at local events and charity concerts.',
                'More than a thousand pupils have attended so far — from those who simply enjoy ballet to those who go on to a professional path.',
            ],
        },
        addresses: [
            {
                street: 'Svetozara Miletića 47',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2576699,
                lng: 19.8430092,
            },
        ],
        contact: {
            phone: '063 70 36 556',
            email: 'dobrila.novkov@gmail.com',
            website: 'https://www.ballet-dobrilanovkov.com',
            facebook: 'https://www.facebook.com/klasicanbaletnovisad',
            facebookLabel: 'klasicanbaletnovisad',
            instagram: 'https://www.instagram.com/klasican_balet/',
        },
    },
    {
        id: 'reverans',
        slug: 'reverans',
        name: {
            sr: 'Baletski studio "Reverans"',
            en: 'Reverans Ballet Studio',
        },
        categorySlugs: ['ballet'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 3,
        maxAge: 7,
        ageLabel: '3–7 godina',
        imageWebp: reveransWebp,
        imageFallback: reveransJpg,
        description: {
            sr: [
                'Baletski studio "Reverans" osnovan je 2017. godine i posluje u Novom Sadu i Kikindi.',
                'Studio vodi diplomirana balerina Jovana Banić, koja kroz igru uči decu osnovama baleta, muzikalnosti i koordinacije.',
                'Program razvija osećaj za ritam, gipkost i pravilno držanje, uz vežbe na parteru i u sredini sale.',
                'Roditelji mogu da prate napredak dece na javnim nastupima i javnim časovima na kraju svakog polugodišta.',
                'Kreativni deo programa uključuje improvizacije koje pomažu deci da otkriju sopstveni izraz i povežu ples sa pričom i muzikom.',
                'Kroz igru deca uče disciplinu i koncentraciju, u toploj atmosferi koja neguje sigurnost i radoznalost.',
            ],
            en: [
                'Reverans Ballet Studio was founded in 2017 and operates in Novi Sad and Kikinda.',
                'The studio is led by graduate ballerina Jovana Banić, who teaches children the basics of ballet, musicality and coordination through play.',
                'The program develops a sense of rhythm, flexibility and good posture, with floor work and center-of-the-room exercises.',
                'Parents can follow their children’s progress at public performances and open classes at the end of each term.',
                'The creative part of the program includes improvisations that help children find their own expression and connect dance with story and music.',
                'Through play, children learn discipline and concentration, in a warm atmosphere that nurtures safety and curiosity.',
            ],
        },
        addresses: [
            {
                street: 'Dostojevskog 11',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2576083,
                lng: 19.8368714,
            },
        ],
        contact: {
            phone: '064 299 63 83',
            email: 'reverans.rs@gmail.com',
            website: 'https://decijisvetbaleta.weebly.com',
            facebook: 'https://www.facebook.com/reveransnovisad/',
            instagram: 'https://www.instagram.com/baletski_studio_reverans/',
        },
    },
    {
        id: 'ntc-balet',
        slug: 'ntc-balet',
        name: {
            sr: 'NTC balet',
            en: 'NTC Ballet',
        },
        ...ntcBaletCityPage,
        brandOverview: true,
        city: 'Novi Sad',
        district: '',
        addresses: [
            {
                street: '',
                city: 'Novi Sad',
                lat: 45.252,
                lng: 19.842,
                schoolSlug: 'ntc-balet-novi-sad',
            },
            {
                street: '',
                city: 'Beograd',
                lat: 44.8176,
                lng: 20.4569,
                schoolSlug: 'ntc-balet-beograd',
            },
        ],
    },
    {
        id: 'ntc-balet-novi-sad',
        slug: 'ntc-balet-novi-sad',
        name: {
            sr: 'NTC balet',
            en: 'NTC Ballet',
        },
        ...ntcBaletBranchPage,
        city: 'Novi Sad',
        district: 'Podbara',
        addresses: [
            {
                street: 'Zlatne Grede 25',
                city: 'Novi Sad',
                district: 'Podbara',
                lat: 45.2592145,
                lng: 19.847808,
            },
        ],
    },
    {
        id: 'ntc-balet-beograd',
        slug: 'ntc-balet-beograd',
        name: {
            sr: 'NTC balet',
            en: 'NTC Ballet',
        },
        ...ntcBaletBranchPage,
        city: 'Beograd',
        district: 'Blok 61',
        addresses: [
            {
                street: 'Dr Ivana Ribara 55a',
                city: 'Beograd',
                district: 'Blok 61',
                lat: 44.8033546,
                lng: 20.3698412,
                mapsUrl: 'https://www.google.com/maps?cid=7972978205243774238',
            },
            {
                street: 'Bulevar Maršala Tolbuhina 38',
                city: 'Beograd',
                district: 'Novi Beograd',
                lat: 44.8304385,
                lng: 20.4068597,
                mapsUrl: 'https://www.google.com/maps?cid=5829842104018423254',
            },
            {
                street: 'Resavska 28',
                city: 'Beograd',
                district: 'Vračar',
                lat: 44.8076783,
                lng: 20.4654008,
                mapsUrl: 'https://www.google.com/maps?cid=18435185411975160700',
            },
            {
                street: 'Beogradska 71',
                city: 'Beograd',
                district: 'Tašmajdan',
                lat: 44.8089944,
                lng: 20.473619,
                mapsUrl: 'https://www.google.com/maps?cid=12710270496040487959',
            },
        ],
    },
    {
        id: 'pointe-dance-serbia',
        slug: 'pointe-dance-serbia',
        name: {
            sr: 'Pointe Dance Serbia',
            en: 'Pointe Dance Serbia',
        },
        categorySlugs: ['ballet', 'jazz-ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: pointeDanceWebp,
        imageFallback: pointeDancePng,
        description: {
            sr: [
                'Pointe Dance Serbia okuplja decu koja kroz ples razvijaju koordinaciju, muzikalnost i samopouzdanje u podržavajućem okruženju.',
                'Program obuhvata klasičan balet i moderan ples, uz rad na tehnici, izražajnosti i kreativnom pokretu prilagođenom uzrastu.',
                'Deca uče kroz strukturisane časove, koreografije i nastupe koji podstiču disciplinu, timski duh i ljubav prema plesu.',
            ],
            en: [
                'Pointe Dance Serbia brings together children who develop coordination, musicality and confidence through dance, in a supportive setting.',
                'The program includes classical ballet and modern dance, with work on technique, expression and creative movement adapted to the group.',
                'Children learn through structured classes, choreography and performances that encourage discipline, teamwork and a love of dance.',
            ],
        },
        addresses: [
            {
                street: 'TC Pariski magazin, Kralja Aleksandra 12',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2541374,
                lng: 19.8435541,
            },
        ],
        contact: {
            phone: '060 30 13 332',
            email: 'mitrovicmilana@yahoo.com',
            facebook: 'https://www.facebook.com/pointedanceserbia/',
            instagram: 'https://www.instagram.com/pointedanceserbia/',
        },
    },
    {
        id: 'ludens',
        slug: 'ludens',
        name: {
            sr: 'Baletski studio Ludens',
            en: 'Ludens Ballet Studio',
        },
        categorySlugs: ['ballet'],
        city: 'Novi Sad',
        district: 'Podbara',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: ludensWebp,
        imageFallback: ludensJpg,
        description: {
            sr: [
                'Baletski studio Ludens osnovala je 1994. Mira Ruškuc, solistkinja baleta SNP-a u penziji, i od tada vodi klasičan program za decu i odrasle.',
                'Nema prijemnog ni selekcije — polaznici uče prve baletske korake, držanje, muzikalnost i disciplinu, a oni sa smislom za igru pripremaju se i za baletsku školu.',
                'Nastava traje kroz školsku godinu, a u junu studio izvodi završnu predstavu u kojoj učestvuju svi polaznici.',
                'Dva puta godišnje pripremaju i predstave u pozorištu; Mira Ruškuc je sa studijem uradila više od pedeset dečijih baletskih predstava i koreografija.',
            ],
            en: [
                'Ludens Ballet Studio was founded in 1994 by Mira Ruškuc, a retired ballet soloist of the Serbian National Theatre in Novi Sad, and has since run a classical program for children and adults.',
                'There is no entrance exam or selection — pupils learn the first ballet steps, posture, musicality and discipline, and those with a gift for dance also prepare for ballet school.',
                'Classes run through the school year, and in June the studio stages a closing performance in which all pupils take part.',
                'Twice a year they also prepare theater performances; Mira Ruškuc has created more than fifty children’s ballet productions and choreographies with the studio.',
            ],
        },
        addresses: [
            {
                street: 'Zlatne Grede 25',
                city: 'Novi Sad',
                district: 'Podbara',
                lat: 45.2592145,
                lng: 19.847808,
            },
        ],
        contact: {
            phone: '064 183 88 52',
            email: 'baletskistudioludens@gmail.com',
            website: 'https://studioludens.info/upis/',
            facebook: 'https://www.facebook.com/BaletskiStudioLudens/',
            facebookLabel: 'BaletskiStudioLudens',
            instagram: 'https://www.instagram.com/baletskistudioludens/',
        },
    },
]
