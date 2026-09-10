import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'
import partizan2Webp from '../../assets/images/schools/developmental-gymnastics/partizan2.webp'
import partizan2Png from '../../assets/images/schools/developmental-gymnastics/partizan2.png'

import type { School } from './types'

export const developmentalGymnasticsSchools: School[] = [
    {
        id: 'sportisimo-razvojna-gimnastika',
        slug: 'sportisimo-razvojna-gimnastika',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['developmental-gymnastics'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 7,
        maxAge: 10,
        ageLabel: '7–10 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Sa polaskom u školu menja se i svakodnevica deteta — više vremena provodi sedeći, a telo nastavlja brzo da raste. Zato mu je i dalje potrebno mnogo različitog kretanja.',
                'Na Razvojnoj gimnastici radimo vežbe snage prilagođene uzrastu, skokove, preskakanja, različite gimnastičke zadatke, vežbe na spravama i sa rekvizitima. Učimo i zahtevnije pokrete, povezujemo ih i postepeno savladavamo nove izazove.',
                'Cilj je da dete kroz ovaj period nastavi da jača telo, proširuje ono što ume da uradi i stekne sigurnost i kontrolu u sve složenijim pokretima.',
            ],
            en: [
                'Starting school also changes a child’s everyday life — they spend more time sitting, while the body keeps growing fast. That is why they still need a lot of varied movement.',
                'In Developmental gymnastics we do age-appropriate strength exercises, jumps, vaults, different gymnastics tasks, work on apparatus and with props. We also learn more demanding movements, connect them and gradually take on new challenges.',
                'The goal is for the child through this period to keep strengthening the body, expand what they can do, and gain confidence and control in increasingly complex movements.',
            ],
        },
        addresses: [
            {
                street: 'Milenka Grčića 3a',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2619586,
                lng: 19.8123263,
            },
        ],
        contact: {
            phone: '064 236 15 94',
            email: 'borjanaradonic@gmail.com',
            website: 'https://sportisimo.org/deca/razvojna-gimnastika-deca-7-10/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
    {
        id: 'partizan-2-razvojna-gimnastika',
        slug: 'partizan-2-razvojna-gimnastika',
        name: {
            sr: 'Partizan 2',
            en: 'Partizan 2',
        },
        categorySlugs: ['developmental-gymnastics'],
        city: 'Novi Sad',
        district: 'Sajmište',
        minAge: 4,
        maxAge: 10,
        ageLabel: '4–10 godina',
        imageWebp: partizan2Webp,
        imageFallback: partizan2Png,
        description: {
            sr: [
                'Razvojna gimnastika u Društvu sport za sve Partizan 2 je bazični sport: telo se jača u celini, a dete dobija dobru osnovu za kasniji izbor discipline.',
                'Vežbe grade mišićnu snagu, gipkost, koordinaciju, snalažljivost i svest o sopstvenim mogućnostima — uz planiranje pokreta, a ne samo ponavljanje zadataka.',
                'Pored fizičkog razvoja, rad podstiče percepciju, samopouzdanje i naviku da dete bude aktivno i spremno za nove sportske izazove.',
                'Časove vodi profesor fizičke kulture Mirjana Pejčić, u manjim grupama.',
            ],
            en: [
                'Developmental gymnastics at Sport for All society Partizan 2 is a foundation sport: the whole body is strengthened, and the child gets a good base for choosing a discipline later.',
                'The exercises build muscle strength, flexibility, coordination, resourcefulness and awareness of what the body can do — with planning each movement, not only repeating tasks.',
                'Beyond physical development, the work builds perception, self-confidence and the habit of staying active and ready for new sports challenges.',
                'Classes are led by physical education teacher Mirjana Pejčić, in smaller groups.',
            ],
        },
        addresses: [
            {
                street: 'Uroša Predića 6',
                city: 'Novi Sad',
                district: 'Sajmište',
                lat: 45.2536679,
                lng: 19.8288715,
                mapsUrl:
                    'https://www.google.com/maps/place/Partizan+2/@45.2536679,19.8288715,17z/data=!4m6!3m5!1s0x475b10464601ec3b:0x5c39dc4ef17d129e!8m2!3d45.2536679!4d19.8288715!16s%2Fg%2F11gh3d6hcx',
            },
        ],
        contact: {
            phone: ['066 466 484', '064 253 80 84'],
            email: 'office@partizan2.rs',
            website: 'https://partizan2.rs/razvojna-gimnastika/',
            facebook: 'https://www.facebook.com/RekreacijaPartizan2Ns/',
            facebookLabel: 'Partizan 2',
            instagram: 'https://www.instagram.com/p2_dance/',
        },
    },
]
