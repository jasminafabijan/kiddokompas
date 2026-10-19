import raptorsBajmokWebp from '../../assets/images/schools/flag-football/raptors-bajmok.webp'

import type { School } from './types'

export const flagFootballSchools: School[] = [
    {
        id: 'raptors-bajmok',
        slug: 'raptors-bajmok',
        name: {
            sr: 'Raptors Bajmok',
            en: 'Raptors Bajmok',
        },
        categorySlugs: ['flag-football'],
        city: 'Bajmok',
        district: '',
        minAge: 8,
        maxAge: null,
        ageLabel: '8+ godina',
        imageWebp: raptorsBajmokWebp,
        imageFallback: raptorsBajmokWebp,
        description: {
            sr: [
                'Raptors Bajmok je klub fleg fudbala. Fleg fudbal je bezkontaktna verzija američkog fudbala: umesto obaranja, cilj je skinuti zastavicu sa pojasa.',
                'Treninzi razvijaju brzinu, koordinaciju, taktiku i timski duh. Vode ih licencirani treneri, u manjim grupama, kroz zagrevanje, vežbe i igru.',
                'Klub nastupa na turnirima i u ligama. Igrači mogu da napreduju od prvih koraka do takmičarskog nivoa, uz fer-plej i priliku da svako izađe na teren.',
            ],
            en: [
                'Raptors Bajmok is a flag football club. Flag football is a non-contact version of American football: instead of tackling, the aim is to pull a flag from the belt.',
                'Training builds speed, coordination, tactics and teamwork. Licensed coaches lead smaller groups, through warm-up, drills and play.',
                'The club competes in tournaments and leagues. Players can progress from their first steps to a competitive level, with fair play and a chance for everyone to get on the field.',
            ],
        },
        addresses: [
            {
                street: 'Pomoćni teren FK Radnički 1905, Gajeva bb',
                city: 'Bajmok',
                lat: 45.9665897,
                lng: 19.4149799,
                mapsUrl: 'https://www.google.com/maps?cid=892019368490291766',
            },
            {
                street: 'Pored pomoćnih terena FK Spartak, Izvorska',
                city: 'Subotica',
                lat: 46.0831008,
                lng: 19.6784424,
                mapsUrl: 'https://www.google.com/maps?cid=2919399001134131115',
            },
        ],
        contact: {
            phone: '064 660 29 99',
            email: 'office@raptors.rs',
            website: 'https://raptors.rs',
            facebook: 'https://www.facebook.com/bajmokraptors/',
            facebookLabel: 'Raptors Bajmok',
            instagram: 'https://www.instagram.com/raptorsbajmok/',
        },
    },
]
