import rollerSchoolWebp from '../../assets/images/schools/inline-skates/novi-sad-rollerschool.webp'
import rollerSchoolPng from '../../assets/images/schools/inline-skates/novi-sad-rollerschool.png'
import beogradRollerWebp from '../../assets/images/schools/inline-skates/beograd-rollerschool.webp'
import beogradRollerPng from '../../assets/images/schools/inline-skates/beograd-rollerschool.png'

import type { School } from './types'

export const rollerSkatingSchools: School[] = [
    {
        id: 'novi-sad-roller-school',
        slug: 'novi-sad-roller-school',
        name: {
            sr: 'Novi Sad Roller School',
            en: 'Novi Sad Roller School',
        },
        categorySlugs: ['roller-skating'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: rollerSchoolWebp,
        imageFallback: rollerSchoolPng,
        description: {
            sr: [
                'Novi Sad Roller School postoji od decembra 2023. godine. Školu je osnovao Aleksandar Babii, trener rolera.',
                'Kroz individualne i grupne treninge polaznici uče da sigurno i samostalno voze rolere, razvijaju ravnotežu, koordinaciju, kontrolu pokreta i samopouzdanje.',
                'Posebnu pažnju posvećujemo tome da treninzi budu zanimljivi, prilagođeni uzrastu i nivou znanja svakog polaznika. Pored učenja tehnike, važni su nam druženje, aktivnost, fer-plej i uživanje u vožnji.',
                'Šta nudimo:',
                '• grupne treninge za decu',
                '• individualne treninge za decu i odrasle',
                '• treninge za početnike i one koji već voze rolere',
                '• treninge za odrasle',
                '• roller cross i pripremu za takmičenja',
                '• zabavne treninge kroz igre i različite poligone',
                '• časove na otvorenim lokacijama',
                'Važno nam je da dete ne uči samo da vozi rolere, već da kroz trening razvija sigurnost u sebe, samostalnost, koordinaciju i osećaj kontrole. Treninge prilagođavamo uzrastu i trenutnom nivou svakog deteta.',
            ],
            en: [
                'Novi Sad Roller School has existed since December 2023. The school was founded by Aleksandar Babii, a roller skating coach.',
                'Through individual and group training, pupils learn to skate safely and on their own, and develop balance, coordination, control of movement and confidence.',
                'We pay special attention to making training interesting and adapted to the age and level of each pupil. Alongside learning technique, what matters to us is time together, activity, fair play and enjoying the ride.',
                'What we offer:',
                '• group training for children',
                '• individual training for children and adults',
                '• training for beginners and for those who already skate',
                '• training for adults',
                '• roller cross and preparation for competitions',
                '• fun training through games and different obstacle courses',
                '• classes at outdoor locations',
                'It matters to us that a child does not only learn to skate, but that through training they develop confidence in themselves, independence, coordination and a sense of control. We adapt training to the age and current level of each child.',
            ],
        },
        addresses: [
            {
                street: 'Pozorišni trg',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2544996,
                lng: 19.8430703,
            },
            {
                street: 'Limanski park',
                city: 'Novi Sad',
                district: 'Liman 3',
                lat: 45.2388743,
                lng: 19.8419979,
                mapsUrl: 'https://www.google.com/maps?cid=5365029618491150683',
            },
        ],
        contact: {
            phone: '061 109 45 43',
            facebook: 'https://www.facebook.com/profile.php?id=61555013345801',
            instagram: 'https://www.instagram.com/novisadrollerschool/',
        },
    },
    {
        id: 'beograd-roller-school',
        slug: 'beograd-roller-school',
        name: {
            sr: 'Beograd Roller School',
            en: 'Beograd Roller School',
        },
        categorySlugs: ['roller-skating'],
        city: 'Beograd',
        district: 'Tašmajdan',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: beogradRollerWebp,
        imageFallback: beogradRollerPng,
        description: {
            sr: [
                'Beograd Roller School organizuje treninge rolera za decu i odrasle, od početnika do onih koji već imaju iskustva u vožnji.',
                'Na treninzima polaznici uče osnovnu tehniku vožnje, pravilno kočenje, održavanje ravnoteže, sigurno kretanje, skretanje i kontrolu rolera. Program se prilagođava uzrastu, nivou znanja i individualnim potrebama svakog polaznika.',
                'Poseban fokus je na tome da deca kroz trening uče bezbedno i samostalno da voze rolere, ali i da uživaju u kretanju, igri i druženju.',
                'Dostupni su individualni treninzi, a u zavisnosti od interesovanja organizuju se i grupni treninzi i posebni programi.',
            ],
            en: [
                'Beograd Roller School organizes roller skating training for children and adults, from beginners to those who already have experience skating.',
                'In training, pupils learn basic skating technique, proper braking, keeping balance, moving safely, turning and control of the skates. The program is adapted to the age, level and individual needs of each pupil.',
                'A special focus is on children learning through training to skate safely and on their own, and also to enjoy movement, play and time together.',
                'Individual training is available, and depending on interest, group training and special programs are organized as well.',
            ],
        },
        addresses: [
            {
                street: 'Tašmajdan park',
                city: 'Beograd',
                district: 'Tašmajdan',
                lat: 44.8093187,
                lng: 20.4706762,
                mapsUrl: 'https://www.google.com/maps?cid=4911569507737360311',
            },
            {
                street: 'Ušće park',
                city: 'Beograd',
                district: 'Novi Beograd',
                lat: 44.8175103,
                lng: 20.4415419,
                mapsUrl: 'https://www.google.com/maps?cid=15772377048449025130',
            },
        ],
        contact: {
            phone: '061 563 89 75',
            facebook: 'https://www.facebook.com/profile.php?id=100093643385555',
            instagram: 'https://www.instagram.com/beograd_rollerschool/',
        },
    },
]
