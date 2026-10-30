import mawashiWebp from '../../assets/images/schools/karate/mawashi.webp'
import mawashiJpg from '../../assets/images/schools/karate/mawashi.jpg'
import sokoWebp from '../../assets/images/schools/karate/soko.webp'
import sokoJpg from '../../assets/images/schools/karate/soko.jpg'
import karateKlubNoviSadJpg from '../../assets/images/schools/karate/karate-klub-novi-sad.jpg'
import nokaciJpg from '../../assets/images/schools/karate/kk-nokaci.jpg'

import type { School } from './types'

export const karateSchools: School[] = [
    {
        id: 'karate-klub-mawashi',
        slug: 'karate-klub-mawashi',
        name: {
            sr: 'Karate klub Mawashi',
            en: 'Mawashi Karate Club',
        },
        categorySlugs: ['karate'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: mawashiWebp,
        imageFallback: mawashiJpg,
        description: {
            sr: [
                'Karate klub „Mawashi” osnovan je 2006. godine i danas je jedan od najmasovnijih i najuspešnijih karate kolektiva u Novom Sadu.',
                'Klub je član Karate saveza Vojvodine i Karate federacije Srbije, a treninzi se održavaju po programu olimpijskog WKF karatea.',
                'Program je prilagođen različitim uzrastima i nivoima znanja, uz naglasak na tehničku preciznost, disciplinu i poštovanje.',
                'U klubu treniraju zonski, pokrajinski i državni prvaci, kao i osvajači medalja na najvećim domaćim i međunarodnim turnirima.',
                'Kroz redovan rad deca razvijaju koordinaciju, koncentraciju i samopouzdanje u podržavajućem timskom okruženju.',
            ],
            en: [
                'Mawashi Karate Club was founded in 2006 and is today one of the largest and most successful karate clubs in Novi Sad.',
                'The club is a member of the Karate Federation of Vojvodina and the Karate Federation of Serbia, and training follows the Olympic WKF karate program.',
                'The program is adapted to different ages and skill levels, with an emphasis on technical precision, discipline and respect.',
                'Zone, provincial and national champions train at the club, as well as medal winners at major domestic and international tournaments.',
                'Through regular work, children develop coordination, concentration and confidence in a supportive team setting.',
            ],
        },
        addresses: [
            {
                street: 'SPENS, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
            {
                street: 'OŠ "Svetozar Marković Toza", Janka Čmelika 89',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2633666,
                lng: 19.8082866,
            },
        ],
        contact: {
            phone: '063 16 14 403',
            email: 'karateklubmawashi@live.com',
            facebook: 'https://www.facebook.com/karateklubmawashi/',
            instagram: 'https://www.instagram.com/karateklubmawashi/',
        },
    },
    {
        id: 'karate-klub-soko',
        slug: 'karate-klub-soko',
        name: {
            sr: 'Karate klub Soko',
            en: 'Soko Karate Club',
        },
        categorySlugs: ['karate'],
        city: 'Novi Sad',
        district: 'Novo naselje',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: sokoWebp,
        imageFallback: sokoJpg,
        description: {
            sr: [
                'Karate klub Soko osnovan je 1978. godine i predstavlja klub sa najdužom tradicijom karatea u Novom Sadu.',
                'Član je WKF karate saveza Srbije, a kroz grupe prilagođene uzrastu i nivou pojasa vodi polaznike od prvih koraka do naprednog treninga.',
                'Prvi je u gradu organizovao karate zabavište, a danas ima i grupu Karate sportić za najmlađe.',
                'Upis je otvoren tokom cele godine, uz mogućnost probnog treninga za nove članove.',
            ],
            en: [
                'Soko Karate Club was founded in 1978 and is the club with the longest karate tradition in Novi Sad.',
                'It is a member of the WKF karate federation of Serbia, and through groups adapted to age and belt level it takes pupils from first steps to advanced training.',
                'It was the first in the city to organize a karate kindergarten, and today it also has a Karate sportić group for the youngest.',
                'Enrolment is open throughout the year, with a trial training session available for new members.',
            ],
        },
        addresses: [
            {
                street: 'Iva Ćipika 17',
                city: 'Novi Sad',
                district: 'Novo naselje',
                lat: 45.2487242,
                lng: 19.8039351,
            },
        ],
        contact: {
            phone: '069 744 676',
            email: 'kksoko1978@hotmail.com',
            website: 'https://www.karateklubsokonovisad.com/',
            facebook: 'https://www.facebook.com/kksokonovisad',
        },
    },
    {
        id: 'karate-klub-novi-sad',
        slug: 'karate-klub-novi-sad',
        name: {
            sr: 'Karate klub Novi Sad',
            en: 'Novi Sad Karate Club',
        },
        categorySlugs: ['karate'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: karateKlubNoviSadJpg,
        imageFallback: karateKlubNoviSadJpg,
        description: {
            sr: [
                'Karate klub Novi Sad vodi školu karatea u autentičnom japanskom dođou, uz program koji spaja tradicionalnu veštinu, samoodbranu i olimpijski sport.',
                'Sa decom rade višedecenijski majstori karatea i kvalifikovani sportski pedagozi, u manjim grupama i uz javne treninge na kojima su dobrodošli i roditelji.',
                'Obuka je postupna — kroz kihon, kate i kumite, uz ispite za pojaseve po programu ITKF i JKA — a naglasak je na samodisciplini, samokontroli i poštovanju.',
                'Klub ne favorizuje agresivnost: svaka forma počinje odbranom, a trening je vođen tako da razvija karakter, pažnju i zdrav odnos prema naporu.',
            ],
            en: [
                'Novi Sad Karate Club runs a karate school in an authentic Japanese dojo, with a program that combines traditional skill, self-defense and Olympic sport.',
                'Long-standing karate masters and qualified sports pedagogues work with the children, in smaller groups and with open training sessions where parents are welcome too.',
                'Training is gradual — through kihon, kata and kumite, with belt exams under the ITKF and JKA programs — and the emphasis is on self-discipline, self-control and respect.',
                'The club does not favor aggression: every form begins with defense, and training is led so that it develops character, attention and a healthy relationship to effort.',
            ],
        },
        addresses: [
            {
                street: 'SPENS, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '063 505 371',
            email: 'info@shobu.rs',
            website: 'https://www.shobu.rs/?page_id=392',
            facebook: 'https://www.facebook.com/karateklubnovisad/',
        },
    },
    {
        id: 'karate-klub-nokaci',
        slug: 'karate-klub-nokaci',
        name: {
            sr: 'Karate klub „Nokači”',
            en: 'Nokači Karate Club',
        },
        categorySlugs: ['karate'],
        city: 'Novi Sad',
        district: 'Liman 4',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: nokaciJpg,
        imageFallback: nokaciJpg,
        description: {
            sr: [
                'Od 2001. godine klub je registrovan pod imenom „Nokači”. Od tada pa do danas on broji oko 1000 članova. Kod nas treniraju deca starosti od pet godina pa naviše, takođe i odrasli sa kojima vežbamo osim šotokan karatea i „gošin” karate (primena karatea u samoodbrani). Radimo karate za decu, sportsko-školski karate po WKF (World Karate Federation) sistemu (takmičarskog karaktera).',
                'Karate klub „Nokači” se bavi ne samo sportskim i tradicionalnim karateom nego i sa prvom i najstarijom veštinom na svetu, a to je angampora, što mi zovemo drevnim karateom.',
                'Borilačke veštine: (karate, džiju-džicu, džudo, aikido i kendžucu), sportovi: školica sporta, pilates, fitnes, korektivne vežbe, parkour, kalistetiks, personalni treninzi itd.',
            ],
            en: [
                'Since 2001 the club has been registered under the name Nokači. Since then it has counted about 1,000 members. Children from the age of five and up train here, and so do adults. Besides Shotokan karate we also practice Goshin karate, which applies karate to self-defense. We offer karate for children and school sport karate under the WKF (World Karate Federation) system, which is competitive.',
                'Nokači Karate Club works not only in sport and traditional karate, but also in the first and oldest art in the world, Angampora, which we call ancient karate.',
                'Martial arts: karate, jiu-jitsu, judo, aikido and kenjutsu. Sports: a kids’ sports program, Pilates, fitness, corrective exercise, parkour, calisthenics, personal training and more.',
            ],
        },
        addresses: [
            {
                street: 'Atomsko sklonište „Trka Frka”, Ive Andrića 1',
                city: 'Novi Sad',
                district: 'Liman 4',
                lat: 45.239487,
                lng: 19.826775,
                mapsUrl: 'https://www.google.com/maps?cid=494366991004108301',
            },
        ],
        contact: {
            phone: '069 199 71 18',
            email: 'grujic3.nokaci@gmail.com',
            website: 'https://sites.google.com/view/karateklubnokacins/',
            facebook: 'https://www.facebook.com/karateklubnokaci',
            facebookLabel: 'Karate klub Nokači',
            instagram: 'https://www.instagram.com/karateklubnokaci/',
            tiktok: 'https://www.tiktok.com/@karateklubnokaci02',
            youtube: 'https://www.youtube.com/@KarateNOKACI/featured',
        },
    },
]
