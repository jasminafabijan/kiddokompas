import aikidoZemunWebp from '../../assets/images/schools/aikido/aikido-zemun.webp'
import ikedaDojoWebp from '../../assets/images/schools/aikido/ikeda-dojo.webp'
import ikedaDojoJpg from '../../assets/images/schools/aikido/ikeda-dojo.jpg'

import type { School } from './types'

export const aikidoSchools: School[] = [
    {
        id: 'aikido-ikeda-dojo',
        slug: 'aikido-ikeda-dojo',
        name: {
            sr: 'Aikido Ikeda Dojo',
            en: 'Aikido Ikeda Dojo',
        },
        categorySlugs: ['aikido'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: ikedaDojoWebp,
        imageFallback: ikedaDojoJpg,
        description: {
            sr: [
                'Aikido Ikeda Dojo u Novom Sadu radi već tri decenije. Danas klub vode učitelji Strahinja Bubulj i Damir Kostovski, obojica 3. dan.',
                'Aikido je borilačka veština bez takmičenja — cilj je da napreduje zajednica, a ne samo pojedinac, kroz disciplinu, poštovanje i lični razvoj.',
                'Deca uče kroz redovan trening i seminare, uz gostujuće instruktore iz zemlje i inostranstva.',
                'Veština gradi telo, pažnju i zdrav odnos prema kretanju, u ritmu koji ide uz današnji način života.',
            ],
            en: [
                'Aikido Ikeda Dojo in Novi Sad has been active for three decades. The club is led by instructors Strahinja Bubulj and Damir Kostovski, both 3rd dan.',
                'Aikido is a martial art without competition — the aim is for the community to grow, not only the individual, through discipline, respect and personal development.',
                'Children learn through regular training and seminars, with visiting instructors from Serbia and abroad.',
                'The practice builds the body, attention and a healthy relationship with movement, in a rhythm that fits today’s way of life.',
            ],
        },
        addresses: [
            {
                street: 'Kisačka 11',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2613116,
                lng: 19.8412943,
            },
        ],
        contact: {
            phone: '063 726 98 85',
            email: 'aikidoikedadojonovisad@gmail.com',
            website: 'https://aikidoikedadojo.rs',
            facebook: 'https://www.facebook.com/aikidoikedadojonovisad/',
            facebookLabel: 'Aikido Ikeda Dojo',
            instagram: 'https://www.instagram.com/aikidoikedadojonovisad/',
        },
    },
    {
        id: 'aikido-zemun',
        slug: 'aikido-zemun',
        name: {
            sr: 'Aikido klub Zemun',
            en: 'Aikido Club Zemun',
        },
        categorySlugs: ['aikido'],
        city: 'Beograd',
        district: 'Zemun',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: aikidoZemunWebp,
        imageFallback: aikidoZemunWebp,
        description: {
            sr: [
                'Aikido klub za borilačke veštine i rekreaciju „Zemun“ vodi Dejan Žuža, viši trener aikidoa i nosilac 7. dana.',
                'Treninzi obuhvataju padove, kretanje, tehnike i samoodbranu. Aikido nije takmičarski sport: članovi napreduju kroz redovan rad i polaganja za pojaseve, uz manji rizik od povreda.',
                'Program „Aikido kroz igru“ uvodi u veštinu kroz pokretne igre, ravnotežu i osnovne aikido vežbe. Dalji rad ide kroz tehniku, samoodbranu i polaganja.',
                'Klub je član Srpskog aikido saveza i Internacionalne aikido akademije. Tokom godine organizuje seminare, javne nastupe i prezentacije.',
            ],
            en: [
                'Aikido Club Zemun, a martial arts and recreation club, is led by Dejan Žuža, a senior aikido coach and 7th dan.',
                'Training covers falls, movement, technique and self-defense. Aikido is not a competitive sport: members progress through regular practice and belt exams, with a lower risk of injury.',
                'The Aikido Through Play program introduces the art through movement games, balance and basic aikido exercises. Further work continues through technique, self-defense and exams.',
                'The club belongs to the Serbian Aikido Federation and the International Aikido Academy. Through the year it holds seminars, public performances and presentations.',
            ],
        },
        addresses: [
            {
                street: 'Ugrinovačka 104',
                city: 'Beograd',
                district: 'Zemun',
                lat: 44.8490866,
                lng: 20.3924168,
                mapsUrl: 'https://www.google.com/maps?cid=2461736600020418836',
            },
        ],
        contact: {
            phone: '063 55 54 53',
            email: 'aikidozemun@gmail.com',
            website: 'https://aikidoklub.com',
            facebook: 'https://www.facebook.com/aikido.zemun97/',
            facebookLabel: 'Aikido klub Zemun',
            instagram: 'https://www.instagram.com/aikido_zemun/',
        },
    },
]
