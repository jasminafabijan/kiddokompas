import pkNoviSadWebp from '../../assets/images/schools/swimming/pk-novi-sad.webp'
import pkNoviSadJpg from '../../assets/images/schools/swimming/pk-novi-sad.jpg'
import pkVojvodinaWebp from '../../assets/images/schools/swimming/pk-vojvodina.webp'
import pkVojvodinaJpg from '../../assets/images/schools/swimming/pk-vojvodina.jpg'
import plivanjeSpensJpg from '../../assets/images/schools/swimming/plivanje-spens.jpg'
import pkNeptunWebp from '../../assets/images/schools/swimming/pk-neptun.webp'
import pkNeptunPng from '../../assets/images/schools/swimming/pk-neptun.png'

import type { School } from './types'

export const swimmingSchools: School[] = [
    {
        id: 'pk-novi-sad',
        slug: 'pk-novi-sad',
        name: {
            sr: 'Plivački klub „Novi Sad”',
            en: 'Novi Sad Swimming Club',
        },
        categorySlugs: ['swimming'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: pkNoviSadWebp,
        imageFallback: pkNoviSadJpg,
        description: {
            sr: [
                'Plivački klub Novi Sad vodi školu plivanja sa licenciranim trenerima Plivačkog saveza Srbije, uz učenje plivačkih veština i tehnika.',
                'Nakon osnova, polaznici prelaze u predtakmičarske grupe i nastavljaju trenažni proces ka takmičarskim rezultatima.',
                'Školu plivanja vode Igor Bežanović, Aleksandra Marjanac i Nina Vukanović, a klub je jedan od najuspešnijih plivačkih kolektiva u zemlji.',
                'Grupe rade uveče i vikendom, dva ili tri puta nedeljno, sa jasnom putanjom od prvih časova do klupskog takmičenja.',
            ],
            en: [
                'Novi Sad Swimming Club runs a swimming school with coaches licensed by the Swimming Federation of Serbia, teaching swimming skills and technique.',
                'After the basics, pupils move into pre-competitive groups and continue training toward competitive results.',
                'The swimming school is led by Igor Bežanović, Aleksandra Marjanac and Nina Vukanović, and the club is one of the most successful swimming clubs in the country.',
                'Groups train in the evening and on weekends, two or three times a week, with a clear path from the first lessons to club competition.',
            ],
        },
        addresses: [
            {
                street: 'Bazeni SPENS-a, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
            {
                street: 'Sportski centar Sajmište, Hajduk Veljkova 11',
                city: 'Novi Sad',
                district: 'Sajmište',
                lat: 45.2554766,
                lng: 19.8253051,
            },
        ],
        contact: {
            phone: '060 555 02 39',
            email: 'kancelarija@pknovisad.rs',
            website: 'https://pknovisad.rs/skola-plivanja/',
            facebook: 'https://www.facebook.com/novisadswimming',
            facebookLabel: 'novisadswimming',
            instagram: 'https://www.instagram.com/pk.novisad/',
        },
    },
    {
        id: 'pk-vojvodina',
        slug: 'pk-vojvodina',
        name: {
            sr: 'Plivački klub „Vojvodina”',
            en: 'Vojvodina Swimming Club',
        },
        categorySlugs: ['swimming'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 5,
        maxAge: null,
        ageLabel: '5+ godina',
        imageWebp: pkVojvodinaWebp,
        imageFallback: pkVojvodinaJpg,
        description: {
            sr: [
                'Plivački klub Vojvodina vodi školicu plivanja i školu tehnika — od prvih koraka u vodi do pravilnih stilova i zdravog držanja.',
                'Sa decom rade iskusni treneri, u grupama po uzrastu i predznanju, uz mogućnost da se kasnije pređe na takmičarski ili rekreativni program.',
                'Klub ima dugu tradiciju rada sa mlađim kategorijama i stotine članova, uz jasnu organizaciju prijave u kancelariji kluba.',
                'Termini su radnim danima, a zbog velikog interesovanja potrebna je preliminarna prijava pre dolaska na bazen.',
            ],
            en: [
                'Vojvodina Swimming Club runs a learn-to-swim program and a technique school — from first steps in the water to proper strokes and healthy posture.',
                'Experienced coaches work with the children, in groups by age and prior knowledge, with the option of later moving into a competitive or recreational program.',
                'The club has a long tradition of work with younger age groups and hundreds of members, with a clear enrollment process at the club office.',
                'Sessions are on weekdays, and because of high demand a preliminary application is needed before coming to the pool.',
            ],
        },
        addresses: [
            {
                street: 'Bazeni SPENS-a, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '062 541 051',
            email: 'pkvojvodina@gmail.com',
            website: 'https://pkvojvodina.org.rs/grupe/',
            facebook: 'https://www.facebook.com/plivackiklub.vojvodina/',
            facebookLabel: 'plivackiklub.vojvodina',
            instagram: 'https://www.instagram.com/pkvojvodina/',
        },
    },
    {
        id: 'plivanje-spens',
        slug: 'plivanje-spens',
        name: {
            sr: 'Plivanje SPENS',
            en: 'SPENS Swimming',
        },
        categorySlugs: ['swimming'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: 12,
        ageLabel: '3–12 godina',
        imageWebp: plivanjeSpensJpg,
        imageFallback: plivanjeSpensJpg,
        description: {
            sr: [
                'Plivanje SPENS je školica sporta JP Sportskog i poslovnog centra Vojvodina. Časove vodi Pro akva 021 — osnovni kurs obuke neplivača, u grupama za predškolce i školarce.',
                'Za najmlađe postoji i program Tata–mama plivajte sa nama, u kom je roditelj u bazenu sa detetom.',
                'Grupe se održavaju uveče tokom radne nedelje, a jedna i subotom ujutru. Stariji školarci imaju i grupu dva puta nedeljno. Broj polaznika je ograničen.',
                'Upis i uplate su kod trenera u holu bazena, pola sata pre i posle termina. Rezervacija SMS-om je obavezna.',
            ],
            en: [
                'SPENS Swimming is a sports school program of JP Sports and Business Center Vojvodina. Classes are run by Pro akva 021 — a basic learn-to-swim course for non-swimmers, in groups for preschoolers and schoolchildren.',
                'For the youngest there is also Tata–mama plivajte sa nama, a parent-and-child program with the parent in the pool.',
                'Groups meet in the evening on weekdays, and one also on Saturday morning. Older schoolchildren have a twice-weekly group as well. Places are limited.',
                'Enrollment and payment are with the coach in the pool hall, half an hour before and after the session. An SMS reservation is required.',
            ],
        },
        addresses: [
            {
                street: 'Bazeni SPENS-a, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2471273,
                lng: 19.8454852,
            },
        ],
        contact: {
            phone: '069 709 986',
            email: 'biljana.avramovic021@gmail.com',
            website: 'https://spens.rs/home-2/skolice-sporta-i-termini-za-gradjane/',
            facebook: 'https://www.facebook.com/AkvarobikObukaNeplivaca',
            facebookLabel: 'AkvarobikObukaNeplivaca',
            instagram: 'https://www.instagram.com/skolicaplivanja_akvafitness/',
        },
    },
    {
        id: 'pk-neptun',
        slug: 'pk-neptun',
        name: {
            sr: 'Plivački klub „Neptun”',
            en: 'Neptun Swimming Club',
        },
        categorySlugs: ['swimming'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: pkNeptunWebp,
        imageFallback: pkNeptunPng,
        description: {
            sr: [
                'Plivački klub „Neptun” upisuje nove članove svakog meseca.',
                'Program obuhvata školicu plivanja za najmlađe, obuku neplivača i usavršavanje tehnike. Klub ima predtakmičarske i takmičarske grupe, kao i rekreativno plivanje.',
                'Za prijavu su zadužene Marinela Marković i Mihaela Marković.',
            ],
            en: [
                'Swimming club “Neptun” enrolls new members every month.',
                'The program covers a swimming school for the youngest, training for non-swimmers and work on technique. The club has pre-competitive and competitive groups, and recreational swimming.',
                'Enrollment is with Marinela Marković and Mihaela Marković.',
            ],
        },
        addresses: [
            {
                street: 'Bazeni SPENS-a, Sutjeska 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.24634,
                lng: 19.8461232,
                mapsUrl: 'https://www.google.com/maps?cid=5659167617721317525',
            },
        ],
        contact: {
            phone: ['062 846 40 14', '062 846 40 07'],
            email: 'pkneptun.ns@gmail.com',
            facebook: 'https://www.facebook.com/profile.php?id=61561605963576',
            instagram: 'https://www.instagram.com/pkneptun_ns/',
        },
    },
]
