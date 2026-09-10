import masterDanceWebp from '../../assets/images/schools/dance/master-dance.webp'
import masterDanceJpg from '../../assets/images/schools/dance/master-dance.jpg'
import impulsWebp from '../../assets/images/schools/dance/impuls.webp'
import impulsJpg from '../../assets/images/schools/dance/impuls.png'
import laJazzWebp from '../../assets/images/schools/dance/la-jazz.webp'
import laJazzJpg from '../../assets/images/schools/dance/la-jazz.jpg'
import nsdkcWebp from '../../assets/images/schools/dance/nsdkc-savremeni-ples.webp'
import nsdkcJpg from '../../assets/images/schools/dance/nsdkc-savremeni-ples.jpg'
import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'
import partizan2Webp from '../../assets/images/schools/developmental-gymnastics/partizan2.webp'
import partizan2Png from '../../assets/images/schools/developmental-gymnastics/partizan2.png'

import type { School } from './types'

export const jazzBalletSchools: School[] = [
    {
        id: 'master-dance',
        slug: 'master-dance',
        name: {
            sr: 'Plesni klub "Master dance"',
            en: 'Master Dance Club',
        },
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Grbavica',
        minAge: 3,
        maxAge: 15,
        ageLabel: '3–15 godina',
        imageWebp: masterDanceWebp,
        imageFallback: masterDanceJpg,
        description: {
            sr: [
                'Plesni klub "Master dance" okuplja decu koja kroz ples razvijaju talent, samopouzdanje i ljubav prema pokretu.',
                'Klub je započeo rad 2005. godine sa osnivačicom Dubravkom Demić, a danas uz nju vredno rade i drugi treneri.',
                'Naglasak je na džez plesu, uz učenje osnova baletske tehnike koja je neophodna za pravilan razvoj plesača.',
                'Deca uče kroz koreografije, pažljivo odabranu muziku i kreativne pokrete koji podstiču rad, zajedništvo i radoznalost.',
                'Polaznici pamte druženja, putovanja i takmičenja, uče organizovanosti i neodustajanju od svojih snova.',
                'Javne predstave i nastupi daju priliku da roditelji vide koliko deca uživaju u plesu i koliko im klub znači.',
            ],
            en: [
                'Master Dance Club brings together children who develop talent, confidence and a love of movement through dance.',
                'The club began in 2005 with founder Dubravka Demić, and other coaches work alongside her today.',
                'The emphasis is on jazz dance, with the basics of ballet technique that dancers need for sound development.',
                'Children learn through choreography, carefully chosen music and creative movement that encourage effort, togetherness and curiosity.',
                'Pupils remember gatherings, trips and competitions, and learn organization and not giving up on their dreams.',
                'Public shows and performances let parents see how much children enjoy dance and what the club means to them.',
            ],
        },
        addresses: [
            {
                street: 'Tolstojeva 51',
                city: 'Novi Sad',
                district: 'Grbavica',
                lat: 45.2425798,
                lng: 19.8317812,
            },
        ],
        contact: {
            phone: '069 524 59 05',
            email: 'masterdancens@hotmail.com',
            facebook: 'https://www.facebook.com/MasterdanceNS/',
            instagram: 'https://www.instagram.com/masterdance_ns/',
        },
    },
    {
        id: 'impuls',
        slug: 'impuls',
        name: {
            sr: 'Plesni studio Impuls',
            en: 'Impuls Dance Studio',
        },
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 4,
        maxAge: null,
        ageLabel: '4+ godina',
        imageWebp: impulsWebp,
        imageFallback: impulsJpg,
        description: {
            sr: [
                'Plesni studio Impuls radi više od tri decenije i poznat je po džez baletu, modernom baletu i show dance programima.',
                'Studio je višegodišnji državni prvak u džez balet formacijama, a nastupao je i na evropskim i svetskim prvenstvima.',
                'Za mlađe uzraste postoji Jazz Kids program, a stariji polaznici nastavljaju kroz jazz balet, jazz dance i srodne discipline.',
                'Pored redovnih časova, organizuju se takmičenja, putovanja, TV nastupi i završne priredbe.',
            ],
            en: [
                'Impuls Dance Studio has been running for more than three decades and is known for jazz ballet, modern ballet and show dance programs.',
                'The studio is a long-standing national champion in jazz ballet formations, and has also appeared at European and world championships.',
                'Younger children have a Jazz Kids program, while older pupils continue through jazz ballet, jazz dance and related disciplines.',
                'Alongside regular classes there are competitions, trips, TV appearances and end-of-year shows.',
            ],
        },
        addresses: [
            {
                street: 'Trg mladenaca 7',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2520887,
                lng: 19.8425817,
            },
            {
                street: 'Janka Veselinovića 54–56',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2619403,
                lng: 19.817073,
            },
            {
                street: 'Cvećarska 9',
                city: 'Novi Sad',
                district: 'Telep',
                lat: 45.2443515,
                lng: 19.8174658,
            },
        ],
        contact: {
            phone: '063 541 928',
            email: 'impulss@mts.rs',
            website: 'https://studioimpuls.org/',
            facebook: 'https://www.facebook.com/impulsdancens/',
            instagram: 'https://www.instagram.com/impulsdancestudio/',
        },
    },
    {
        id: 'la-jazz',
        slug: 'la-jazz',
        name: {
            sr: 'Plesni studio La Jazz',
            en: 'La Jazz Dance Studio',
        },
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Rotkvarija',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: laJazzWebp,
        imageFallback: laJazzJpg,
        description: {
            sr: [
                'Plesni studio La Jazz vodi časove jazz baleta, show dance-a i modernog plesa, uz osnove klasične tehnike i gimnastike.',
                'Grupe su podeljene po uzrastu — od Mini Jazz programa za najmlađe, preko dečijih i juniorskih klasa, do rekreacije za starije.',
                'Časove vode instruktori sa iskustvom u radu sa decom, sa naglaskom na ritam, držanje, kreativnost i nastupe na festivalima i takmičenjima.',
            ],
            en: [
                'La Jazz Dance Studio runs jazz ballet, show dance and modern dance classes, with the basics of classical technique and gymnastics.',
                'Groups are split by age — from the Mini Jazz program for the youngest, through children’s and junior classes, to recreation for older dancers.',
                'Classes are led by instructors experienced with children, with an emphasis on rhythm, posture, creativity and appearances at festivals and competitions.',
            ],
        },
        addresses: [
            {
                street: 'Pavla Papa 16 (sala u dvorištu)',
                city: 'Novi Sad',
                district: 'Rotkvarija',
                lat: 45.2551345,
                lng: 19.8390452,
            },
            {
                street: 'Kopernikova 34 (sala u dvorištu)',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2559546,
                lng: 19.8153622,
            },
            {
                street: 'Petefi Šandora 153',
                city: 'Novi Sad',
                district: 'Telep',
                lat: 45.2410274,
                lng: 19.7963396,
            },
        ],
        contact: {
            phone: '060 584 50 30',
            email: 'lajazzstudio@gmail.com',
            facebook: 'https://www.facebook.com/p/La-Jazz-Studio-61558281309067/',
            instagram: 'https://www.instagram.com/la_jazz_studio/',
        },
    },
    {
        id: 'nsdkc-savremeni-ples',
        slug: 'nsdkc-savremeni-ples',
        name: {
            sr: 'Novosadski dečiji kulturni centar',
            en: 'Novi Sad Children\'s Cultural Center',
        },
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: 16,
        ageLabel: '7–16 godina',
        imageWebp: nsdkcWebp,
        imageFallback: nsdkcJpg,
        description: {
            sr: [
                'Radionice savremenog plesa u NSDKC-u otvaraju deci prostor da istražuju pokret, ritam, telo i muziku kroz različite plesne tehnike.',
                'Pored vežbi, uče se koreografije koje vode ka scenskom nastupu, partnerskoj igri i osećaju za prostor i vreme.',
                'Časove vode plesni pedagozi i koreografi Jovana Rakić i Željka Jakovljević, u grupama podeljenim po uzrastu, tokom cele školske godine.',
                'Dva puta godišnje rad se prikazuje publici kroz koncert ili predstavu, uz saradnju sa drugim programima centra. Programi NSDKC-a besplatni su za polaznike.',
            ],
            en: [
                'Contemporary dance workshops at NSDKC give children room to explore movement, rhythm, the body and music through different dance techniques.',
                'Besides exercises, they learn choreography that leads toward stage performance, partner work and a sense of space and time.',
                'Classes are led by dance pedagogues and choreographers Jovana Rakić and Željka Jakovljević, in groups split by age, throughout the school year.',
                'Twice a year the work is shown to an audience as a concert or a play, with collaboration with the center’s other programs. NSDKC programs are free for participants.',
            ],
        },
        addresses: [
            {
                street: 'Radnička 20',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2494564,
                lng: 19.8501205,
            },
        ],
        contact: {
            phone: '021 521 447',
            email: 'office@nsdkc.rs',
            website: 'https://nsdkc.rs/portfolio/savremeni-ples/',
            facebook: 'https://www.facebook.com/profile.php?id=61555926235874',
            facebookLabel: 'NSDKC',
            instagram: 'https://www.instagram.com/novosadskidecijikulturnicentar/',
        },
    },
    {
        id: 'sportisimo-jazz-balet',
        slug: 'sportisimo-jazz-balet',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 4,
        maxAge: 6,
        ageLabel: '4–6 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Jazz balet je spoj muzike, ritma, plesa i igre prilagođen predškolskom uzrastu.',
                'Učimo osnovne plesne korake i kratke koreografije, ali pokret često povezujemo i sa pričom, maštom i glumom. Dete sluša muziku, prepoznaje ritam, pamti šta sledi i pokušava da sve to poveže sa pokretom.',
                'Upravo taj trenutak kada istovremeno treba slušati, zapamtiti i pokrenuti telo čini ples mnogo većim izazovom od samog učenja koraka.',
            ],
            en: [
                'Jazz ballet is a mix of music, rhythm, dance and play adapted to preschool age.',
                'We learn basic dance steps and short choreographies, but we often connect movement with story, imagination and acting as well. The child listens to the music, recognizes the rhythm, remembers what comes next and tries to connect all of that with movement.',
                'That moment when they have to listen, remember and move the body at the same time is what makes dance a much bigger challenge than simply learning the steps.',
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
            website: 'https://sportisimo.org/deca/jazz-balet-5-6/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
    {
        id: 'partizan-2-plesni-klub',
        slug: 'partizan-2-plesni-klub',
        name: {
            sr: 'Plesni klub Partizan 2',
            en: 'Partizan 2 Dance Club',
        },
        categorySlugs: ['jazz-ballet'],
        city: 'Novi Sad',
        district: 'Sajmište',
        minAge: 3,
        maxAge: null,
        ageLabel: '3+ godina',
        imageWebp: partizan2Webp,
        imageFallback: partizan2Png,
        description: {
            sr: [
                'Plesni klub Partizan 2 vodi časove modernog plesa — jazz dance, show dance, moderan balet i savremeni plesni pokret.',
                'Rad počinje od osnovne baletske tehnike, motoričkih sposobnosti i kratkih koreografija, sa ciljem da pokret postane scenska stvarnost, a ne samo niz koraka.',
                'Klub gradi upornost i ljubav prema igri, uz odlaske na baletske predstave, analizu snimaka i saradnju trenera i roditelja.',
                'Nastupa na državnim i evropskim takmičenjima, festivalima Dance Now, Zmajevima dečijim igrama i tradicionalnom novogodišnjem plesnom koncertu.',
            ],
            en: [
                'Partizan 2 Dance Club teaches modern dance — jazz dance, show dance, modern ballet and contemporary movement.',
                'Work starts from basic ballet technique, motor skills and short choreography, with the aim that movement becomes something for the stage, not only a sequence of steps.',
                'The club builds persistence and a love of dance, with visits to ballet performances, video review and close coach–parent collaboration.',
                'It performs at national and European competitions, Dance Now festivals, Zmajeve dečije igre and the traditional New Year dance concert.',
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
            phone: ['064 253 80 84', '063 707 49 59'],
            email: 'office@partizan2.rs',
            website: 'https://partizan2.rs/partizan-2-plesni-klub/',
            facebook: 'https://www.facebook.com/partizan2plesniklub/',
            facebookLabel: 'Partizan 2 plesni klub',
            instagram: 'https://www.instagram.com/p2_dance/',
        },
    },
]
