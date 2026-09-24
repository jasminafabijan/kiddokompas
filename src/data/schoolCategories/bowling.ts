import backaWebp from '../../assets/images/schools/nine-pin-bowling/kk-backa.webp'
import backaPng from '../../assets/images/schools/nine-pin-bowling/kk-backa.png'

import type { School } from './types'

export const bowlingSchools: School[] = [
    {
        id: 'kuglaski-klub-backa',
        slug: 'kuglaski-klub-backa',
        name: {
            sr: 'Kuglaški klub „Bačka”',
            en: 'Bačka Nine-pin Bowling Club',
        },
        categorySlugs: ['bowling'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 10,
        maxAge: null,
        ageLabel: '10+ godina',
        imageWebp: backaWebp,
        imageFallback: backaPng,
        description: {
            sr: [
                'Kuglaški klub „Bačka” iz Novog Sada treninge i domaće utakmice igra u kuglani Sportskog i poslovnog centra Vojvodina, na SPENS-u. Klub ima sopstvenu školu kuglanja, iz koje u ženski tim dolaze takmičarke čiji prosek godina jedva prelazi dvadesetu.',
                'Muška ekipa sezonu je završila na četvrtom mestu Prve vojvođanske lige, a ženska, koja se godinama takmiči u elitnom rangu, na četvrtom mestu Superlige Srbije. Bačka organizuje i Bačka Open, otvoreno prvenstvo Novog Sada po pravilima NBC, na stazama 1–8 iste kuglane, za takmičare i rekreativce iz zemlje i inostranstva.',
            ],
            en: [
                'Bačka Nine-pin Bowling Club from Novi Sad trains and plays its home matches at the bowling alley of the Vojvodina Sports and Business Center, at SPENS. The club runs its own bowling school, and the women’s team is drawn from it, with an average age barely over 20.',
                'The men’s team finished the season fourth in the First Vojvodina League, and the women’s team, which has competed in the elite division for years, finished fourth in the Super League of Serbia. Bačka also organizes the Bačka Open, the Open Championship of Novi Sad under NBC rules, on lanes 1–8 of the same alley, for competitive and recreational bowlers from Serbia and abroad.',
            ],
        },
        addresses: [
            {
                street: 'Kuglana SPENS-a, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2486982,
                lng: 19.8473067,
                mapsUrl: 'https://www.google.com/maps?cid=2884856616235851877',
            },
        ],
        contact: {
            phone: ['064 125 47 63', '063 784 27 64'],
            email: 'kuglaskiklubbacka@gmail.com',
            facebook: 'https://www.facebook.com/adacompNS',
        },
    },
]
