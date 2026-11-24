import jkPartizanNsWebp from '../../assets/images/schools/judo/jk-partizan-ns.webp'
import jkPartizanNsJpeg from '../../assets/images/schools/judo/jk-partizan-ns.avif.jpeg'

import type { School } from './types'

export const judoSchools: School[] = [
    {
        id: 'dzudo-klub-partizan',
        slug: 'dzudo-klub-partizan',
        name: {
            sr: 'Džudo klub Partizan Novi Sad',
            en: 'Partizan Novi Sad Judo Club',
        },
        categorySlugs: ['judo'],
        city: 'Novi Sad',
        district: 'Telep',
        minAge: 5,
        maxAge: 14,
        ageLabel: '5–14 godina',
        imageWebp: jkPartizanNsWebp,
        imageFallback: jkPartizanNsJpeg,
        description: {
            sr: [
                'Džudo je borilačka veština bacanja, držanja i padova, u kojoj se radi u paru. Naglasak je na ravnoteži, kontroli pokreta i poštovanju protivnika.',
                'Klub prima nove članove. Partizan je jedan od najstarijih džudo klubova u zemlji.',
            ],
            en: [
                'Judo is a martial art of throws, holds and falls, practiced with a partner. The emphasis is on balance, control of movement and respect for the opponent.',
                'The club is enrolling new members. Partizan is one of the oldest judo clubs in the country.',
            ],
        },
        addresses: [
            {
                street: 'Heroja Pinkija 2a',
                city: 'Novi Sad',
                district: 'Telep',
                lat: 45.2385117,
                lng: 19.823471,
                mapsUrl: 'https://www.google.com/maps?cid=9163907668135042104',
            },
        ],
        contact: {
            phone: '066 545 32 12',
            facebook: 'https://www.facebook.com/JkPartizanNS/',
            facebookLabel: 'Džudo klub Partizan Novi Sad',
            instagram: 'https://www.instagram.com/jk_partizan_ns/',
        },
    },
]
