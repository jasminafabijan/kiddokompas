import granicarWebp from '../../assets/images/schools/riding/granicar.webp'
import granicarJpg from '../../assets/images/schools/riding/granicar.jpg'
import sumskaStalaWebp from '../../assets/images/schools/riding/sumska-stala-card.webp'
import sumskaStalaJpg from '../../assets/images/schools/riding/sumska-stala.jpg'

import type { School } from './types'

export const ridingSchools: School[] = [
    {
        id: 'kk-granicar',
        slug: 'kk-granicar',
        name: {
            sr: 'Konjički klub Graničar',
            en: 'Graničar Equestrian Club',
        },
        categorySlugs: ['riding'],
        city: 'Novi Sad',
        district: 'Šangaj',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: granicarWebp,
        imageFallback: granicarJpg,
        description: {
            sr: [
                'Konjički klub Graničar osnovan je 1953. godine i jedan je od najstarijih konjičkih klubova u zemlji.',
                'Ako tražite beg od grada i buke, u klubu možete naučiti da jašete ili jednostavno provesti miran dan u prirodi uz konje.',
                'Škola jahanja se odvija uz stručni nadzor trenera, sa naglaskom na sigurnost i postepeno usvajanje tehnike.',
                'Pored škole jahanja, klub nudi i organizovane posete za predškolske ustanove i osnovne škole, sa edukativno-kreativnim programom.',
                'Na današnjoj lokaciji klub raspolaže objektima i velikim prostorom, što ga čini mestom za sport, rekreaciju i druženje ljubitelja konja.',
            ],
            en: [
                'Graničar Equestrian Club was founded in 1953 and is one of the oldest riding clubs in the country.',
                'If you want an escape from the city and the noise, you can learn to ride at the club or simply spend a quiet day outdoors with the horses.',
                'The riding school runs under a coach’s professional supervision, with an emphasis on safety and gradually learning technique.',
                'Alongside the riding school, the club also offers organized visits for preschool institutions and primary schools, with an educational and creative program.',
                'At its present site the club has facilities and a large outdoor area, making it a place for sport, recreation and gathering among horse lovers.',
            ],
        },
        addresses: [
            {
                street: 'Kod autoputa A1',
                city: 'Novi Sad',
                district: 'Šangaj',
                lat: 45.2759736,
                lng: 19.913578,
            },
        ],
        contact: {
            phone: '062 817 35 12',
            email: 'granicarns@gmail.com',
            website: 'http://konjickiklubgranicar.com',
            facebook: 'https://www.facebook.com/granicar.konjicki/',
            facebookLabel: 'granicar.konjicki',
            instagram: 'https://www.instagram.com/granicarns',
        },
    },
    {
        id: 'sumska-stala',
        slug: 'sumska-stala',
        name: {
            sr: 'Šumska štala',
            en: 'Šumska štala',
        },
        categorySlugs: ['riding'],
        city: 'Novi Sad',
        district: 'Stari Ledinci',
        minAge: 10,
        maxAge: null,
        ageLabel: '10+ godina',
        imageWebp: sumskaStalaWebp,
        imageFallback: sumskaStalaJpg,
        description: {
            sr: [
                'Šumska štala vodi školu jahanja za početnike i za jahače koji već imaju iskustvo. Časovi su u malim grupama, po tri do četiri jahača, i prilagođavaju se svakom polazniku. Čas traje 45 do 60 minuta.',
                'Program kreće od osnova rada sa konjem i pripreme konja, pa ide na upravljanje, komunikaciju, dizgine i stabilnost u sedlu. Kas i galop dolaze u kasnijim kursevima, kad je jahač siguran na konju. Deo obuke je i terensko jahanje.',
                'Termini su fiksni, radnim danima i vikendom, jednom ili dva puta nedeljno. Upis je tokom cele godine, a u julu i avgustu grupni časovi pauziraju. Mogući su i individualni treninzi.',
            ],
            en: [
                'Šumska štala runs a riding school for beginners and for riders who already have experience. Classes are in small groups of three to four riders and are adapted to each pupil. A class lasts 45 to 60 minutes.',
                'The program starts with the basics of working with the horse and preparing the horse to ride, then moves on to control, communication, the reins and stability in the saddle. Trot and canter come in later courses, once the rider is secure on the horse. Trail riding is part of the training.',
                'Times are fixed, on weekdays and weekends, once or twice a week. Enrollment is open all year, and group classes pause in July and August. Individual lessons are available as well.',
            ],
        },
        addresses: [
            {
                street: 'Jovana Dučića 1',
                city: 'Novi Sad',
                district: 'Stari Ledinci',
                lat: 45.1854829,
                lng: 19.8074944,
                mapsUrl: 'https://www.google.com/maps?cid=8833375938599739804',
            },
        ],
        contact: {
            phone: '064 169 07 60',
            email: 'sumskastala@gmail.com',
            website: 'https://sumskastala.rs/skola-jahanja/',
            facebook: 'https://www.facebook.com/sumskastala',
            facebookLabel: 'sumskastala',
            instagram: 'https://www.instagram.com/sumskastala/',
        },
    },
]
