import mementoMoriWebp from '../../assets/images/schools/boxing/memento-mori.webp'
import mementoMoriJpg from '../../assets/images/schools/boxing/memento-mori.jpg'
import bkVojvodinaWebp from '../../assets/images/schools/boxing/bk-vojvodina.webp'
import bkVojvodinaJpg from '../../assets/images/schools/boxing/bk-vojvodina.jpg'
import industrijaBoksaJpeg from '../../assets/images/schools/boxing/industrija-boksa.jpeg'

import type { School } from './types'

export const boxingSchools: School[] = [
    {
        id: 'memento-mori',
        slug: 'memento-mori',
        name: {
            sr: 'Memento Mori — Dečija škola boksa',
            en: 'Memento Mori — Children’s Boxing School',
        },
        categorySlugs: ['boxing'],
        city: 'Novi Sad',
        district: 'Sremska Kamenica',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: mementoMoriWebp,
        imageFallback: mementoMoriJpg,
        description: {
            sr: [
                'Dečija škola boksa u klubu Memento Mori sportsko-pedagoški je program usmeren na fizički i mentalni razvoj kroz osnove bokserske veštine.',
                'Trening se odvija u sigurnom i kontrolisanom okruženju, uz naglasak na disciplinu, motoriku, koordinaciju i sportski duh.',
                'Kroz vežbe oblikovanja, osnove kretanja, rad na džaku i rad sa trenerom, deca razvijaju brzinu, ravnotežu i osećaj za prostor.',
                'Program podstiče samopouzdanje, poštovanje pravila i drugova, i na zdrav način usmerava energiju mališana.',
                'Klub raspolaže velikom, moderno opremljenom halom namenjenom borilačkim sportovima.',
            ],
            en: [
                'The children’s boxing school at club Memento Mori is a sports-pedagogical program aimed at physical and mental development through the basics of boxing.',
                'Training takes place in a safe, controlled setting, with an emphasis on discipline, motor skills, coordination and sporting spirit.',
                'Through shaping exercises, basic movement, bag work and work with a coach, children develop speed, balance and a sense of space.',
                'The program builds confidence, respect for rules and teammates, and channels children’s energy in a healthy way.',
                'The club has a large, modern hall dedicated to combat sports.',
            ],
        },
        addresses: [
            {
                street: 'Vojvode Putnika BB',
                city: 'Novi Sad',
                district: 'Sremska Kamenica',
                lat: 45.2285795,
                lng: 19.8543537,
            },
        ],
        contact: {
            phone: '065 342 18 27',
            email: 'office@mementomori.rs',
            website: 'https://mementomori.rs/services/decija-skola-boksa/',
            facebook: 'https://www.facebook.com/Memento-mori-MMA-103335755379628',
            instagram: 'https://www.instagram.com/mementomori_mma/',
        },
    },
    {
        id: 'bk-vojvodina',
        slug: 'bk-vojvodina',
        name: {
            sr: 'Bokserski klub Vojvodina',
            en: 'Vojvodina Boxing Club',
        },
        categorySlugs: ['boxing'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 8,
        maxAge: null,
        ageLabel: '8+ godina',
        imageWebp: bkVojvodinaWebp,
        imageFallback: bkVojvodinaJpg,
        description: {
            sr: [
                'Bokserski klub Vojvodina jedan je od najtrofejnijih bokserskih kolektiva u Novom Sadu, sa školom boksa za početnike i radom kroz pionirske, kadetske i omladinske selekcije.',
                'Najmlađi polaznici kreću od upisne škole boksa, gde uče osnove kretanja, discipline i rada u grupi, pre prelaska u takmičarske uzraste.',
                'Klub se takmiči u nacionalnim ligama, a sa selekcijama rade iskusni treneri — među njima i dugogodišnji stručnjaci sa međunarodnim iskustvom.',
                'Program je namenjen dečacima i devojčicama koji žele da otkriju olimpijski boks u ozbiljnom, ali podržavajućem klupskom okruženju.',
            ],
            en: [
                'Vojvodina Boxing Club is one of the most decorated boxing clubs in Novi Sad, with a boxing school for beginners and work through pioneer, cadet and youth selections.',
                'The youngest pupils start in the enrollment boxing school, where they learn the basics of movement, discipline and group work, before moving into competitive age groups.',
                'The club competes in national leagues, and experienced coaches work with the selections — among them long-standing specialists with international experience.',
                'The program is for boys and girls who want to discover Olympic boxing in a serious but supportive club setting.',
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
            phone: '061 138 34 22',
            email: 'boksvojvodina@gmail.com',
            facebook: 'https://www.facebook.com/boksvojvodina',
            facebookLabel: 'BK Vojvodina',
            instagram: 'https://www.instagram.com/boks.vojvodina/',
        },
    },
    {
        id: 'industrija-boksa',
        slug: 'industrija-boksa',
        name: {
            sr: 'Industrija boksa',
            en: 'Industrija Boksa',
        },
        categorySlugs: ['boxing'],
        city: 'Novi Sad',
        district: 'Liman 1',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: industrijaBoksaJpeg,
        imageFallback: industrijaBoksaJpeg,
        description: {
            sr: [
                'Industrija boksa je Centar za rekreativni boks u Novom Sadu. Pored programa za odrasle rekreativce, nudimo i programe za decu svih uzrasta i to:',
                'Deca do 7 godina — program školice sporta u kombinaciji sa treningom boksa za mlađe uzraste. Ovaj program usmeren je podjednako na celokupan motorički razvoj deteta kao i na savladavanje veštine boksa.',
                'Deca od 7 do 15 godina — program učenja boksa, savladavanja tehnika i veštine. Učenje u kontrolisanim i bezbednim uslovima usmereno na disciplinu, dinamiku i fokus. Podstiče izbacivanje viška energije kao i samopouzdanje kod dece.',
            ],
            en: [
                'Industrija Boksa is a recreational boxing center in Novi Sad. Alongside programs for adult recreational boxers, it also offers programs for children of all ages:',
                'Children up to age 7 follow a kids’ sports program combined with boxing training for younger ages. The program focuses equally on overall motor development and on learning boxing.',
                'Children from 7 to 15 follow a program for learning boxing, technique and skill. Training in controlled, safe conditions is aimed at discipline, drive and focus. It helps children use extra energy and build confidence.',
            ],
        },
        addresses: [
            {
                street: 'Bulevar oslobođenja 133',
                city: 'Novi Sad',
                district: 'Liman 1',
                lat: 45.2423067,
                lng: 19.8431985,
                mapsUrl: 'https://www.google.com/maps?cid=16252062829963774638',
            },
        ],
        contact: {
            phone: '061 506 60 77',
            email: 'info@industrijaboksa.com',
            website: 'https://industrijaboksa.com',
            facebook: 'https://www.facebook.com/profile.php?id=61570666471818',
            facebookLabel: 'Industrija boksa',
            instagram: 'https://www.instagram.com/industrija.boksa/',
        },
    },
]
