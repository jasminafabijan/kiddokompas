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
                'Džudo klub Partizan osnovan je 1961. godine i predstavlja jedan od sportskih kolektiva sa dugom tradicijom u Novom Sadu. Klub se nalazi na Telepu i posvećen je razvoju i popularizaciji džudo sporta, posebno među decom i mladima.',
                'Kroz redovne treninge članovi razvijaju fizičku spremnost, disciplinu, samopouzdanje i međusobno poštovanje. Posebna pažnja posvećuje se pravilnom razvoju mladih sportista i njihovoj pripremi za takmičenja. Klub svojim radom promoviše zdrave životne navike, sportski duh i fer-plej, doprinoseći razvoju džudoa i sporta u Novom Sadu.',
            ],
            en: [
                'Judo Club Partizan was founded in 1961 and is one of the sports clubs with a long tradition in Novi Sad. The club is on Telep and is dedicated to developing and popularizing the sport of judo, especially among children and young people.',
                'Through regular training, members develop physical fitness, discipline, confidence and mutual respect. Particular attention goes to the proper development of young athletes and their preparation for competition. Through its work, the club promotes healthy habits, sporting spirit and fair play, contributing to the development of judo and sport in Novi Sad.',
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
            email: 'jkpartizan@gmail.com',
            facebook: 'https://www.facebook.com/JkPartizanNS/',
            facebookLabel: 'Džudo klub Partizan Novi Sad',
            instagram: 'https://www.instagram.com/jk_partizan_ns/',
        },
    },
]
