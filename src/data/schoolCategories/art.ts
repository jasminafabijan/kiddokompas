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
                'Pripreme za Dizajnersku i TehnoArt vode ka prijemnom za srednje umetničke škole. Ispit ima tri testa: crtanje, slikanje i vajanje.',
                'Na crtežu se gledaju kompozicija, proporcija, karakter oblika, kvalitet linije i ukupan likovni utisak. Na slici kompozicija, osećaj za boju i srednji ton, a na skulpturi kompozicija, osećaj za oblik, struktura i taktilnost.',
                'Zadaci idu postepeno, kroz vođene vežbe, da se ta pravila i tehnike savladaju pre polaganja.',
            ],
            en: [
                'Dečiji atelje is an art studio for drawing, painting and sculpture.',
                'Classes introduce close looking and transferring what is seen: composition, perspective, proportion, texture, value, color, shadow and light. Work also includes clay, through sculpture and transferring form into three dimensions.',
                'Dedicated courses cover comics and illustration, from panels and story to visual expression. Preparation for art high schools and for illustration, animation, concept art and character design programs practices reproducing a still life and an object in drawing, painting and sculpted form.',
                'Preparation for Dizajnerska and TehnoArt leads to the entrance exam for art high schools. The exam has three tests: drawing, painting and sculpture.',
                'A drawing is judged on composition, proportion, the character of the form, line quality and the overall visual impression. A painting is judged on composition, a feel for color and mid-tone, and a sculpture on composition, a feel for form, structure and tactility.',
                'Tasks build gradually, through guided exercises, so those rules and techniques are in place before the exam.',
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
