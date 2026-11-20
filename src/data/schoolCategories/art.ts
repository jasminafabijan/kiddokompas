import decijiAteljeWebp from '../../assets/images/schools/art/deciji-atelje.jpg.webp'

import type { School } from './types'

export const artSchools: School[] = [
    {
        id: 'deciji-atelje',
        slug: 'deciji-atelje',
        name: {
            sr: 'Dečiji atelje',
            en: 'Dečiji atelje',
        },
        categorySlugs: ['art'],
        city: 'Beograd',
        district: 'Banovo brdo',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: decijiAteljeWebp,
        imageFallback: decijiAteljeWebp,
        description: {
            sr: [
                'Dečiji atelje je likovni atelje za crtanje, slikanje i vajanje.',
                'Časovi uvode u posmatranje i prenošenje viđenog: kompoziciju, perspektivu, proporcije, teksturu, valer, boju, senku i svetlost. Radi se i sa glinom, kroz vajanje i prenošenje forme u tri dimenzije.',
                'Posebni kursevi pokrivaju strip i ilustraciju, od panela i priče do likovnog izraza. Pripreme za srednje umetničke škole i za smerove ilustracije, animacije, koncept-arta i dizajna karaktera vežbaju reprodukciju mrtve prirode i predmeta u crtežu, slici i vajanoj formi.',
            ],
            en: [
                'Dečiji atelje is an art studio for drawing, painting and sculpture.',
                'Classes introduce close looking and transferring what is seen: composition, perspective, proportion, texture, value, color, shadow and light. Work also includes clay, through sculpture and transferring form into three dimensions.',
                'Dedicated courses cover comics and illustration, from panels and story to visual expression. Preparation for art high schools and for illustration, animation, concept art and character design programs practices reproducing a still life and an object in drawing, painting and sculpted form.',
            ],
        },
        addresses: [
            {
                street: 'Stankom centar, Stevana Brakusa 4',
                city: 'Beograd',
                district: 'Banovo brdo',
                lat: 44.7728979,
                lng: 20.4114563,
                mapsUrl: 'https://www.google.com/maps?cid=4007770843359244203',
            },
        ],
        contact: {
            phone: '063 894 03 32',
            email: 'deciji.atelje@gmail.com',
            website: 'https://www.decijiatelje.com',
            facebook: 'https://www.facebook.com/decijiatelje1/',
            facebookLabel: 'Dečiji atelje',
            instagram: 'https://www.instagram.com/deciji.atelje/',
        },
    },
]
