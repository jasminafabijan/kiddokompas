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
            sr: 'Novi Sad rollerschool',
            en: 'Novi Sad rollerschool',
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
                'Novi Sad rollerschool je škola rolera u Novom Sadu. Školu je u decembru 2023. osnovao trener Aleksandar Babii.',
                'Na individualnim i grupnim treninzima polaznici uče da sigurno i samostalno voze rolere, uz rad na ravnoteži, koordinaciji i kontroli pokreta.',
                'Grupe su za početnike i za one koji već voze. Program obuhvata i roller cross, pripremu za takmičenja i časove kroz igru i poligone, prilagođene uzrastu i nivou.',
                'Treninzi se održavaju na Pozorišnom trgu i u Limanskom parku, zavisno od programa. Pored redovnih časova, škola organizuje takmičenja i događaje za decu.',
            ],
            en: [
                'Novi Sad rollerschool is a roller skating school in Novi Sad. Coach Aleksandar Babii founded it in December 2023.',
                'In individual and group sessions, pupils learn to skate safely and on their own, working on balance, coordination and control of movement.',
                'Groups are for beginners and for those who already skate. The program also includes roller cross, competition preparation and classes through games and obstacle courses, adapted to age and level.',
                'Training takes place at Pozorišni trg and in Limanski park, depending on the program. Alongside regular classes, the school organizes competitions and events for children.',
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
            sr: 'Beograd rollerschool',
            en: 'Beograd rollerschool',
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
                'Beograd rollerschool drži treninge rolera u Beogradu, od početnika do onih koji već voze.',
                'Na času se uči osnovna tehnika, kočenje, ravnoteža, skretanje i kontrola rolera. Program se prilagođava nivou i onome što polazniku treba.',
                'Pored tehnike, ostaje mesto za igru i druženje. U Beogradu su individualni treninzi, a po interesovanju i grupni časovi i posebni programi.',
                'Treninzi su u Tašmajdan parku i u Ušće parku.',
            ],
            en: [
                'Beograd rollerschool runs roller skating training in Belgrade, from beginners to people who already skate.',
                'Class covers basic technique, braking, balance, turning and control of the skates. The program is adapted to level and to what each pupil needs.',
                'Alongside technique, there is room for play and time together. In Belgrade there are individual sessions, and group classes and separate programs when there is interest.',
                'Training is in Tašmajdan park and in Ušće park.',
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
