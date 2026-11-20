import sportisimoWebp from '../../assets/images/schools/athletics/sportisimo.webp'
import sportisimoJpg from '../../assets/images/schools/athletics/sportisimo.jpg'
import zverkoWebp from '../../assets/images/schools/kids-sports/zverko.webp'
import zverkoPng from '../../assets/images/schools/kids-sports/zverko.png'
import sportskaDruzinaWebp from '../../assets/images/schools/kids-sports/sportska-druzina.webp'

import type { School } from './types'

export const kidsSportsSchools: School[] = [
    {
        id: 'sportisimo-skolica-sporta',
        slug: 'sportisimo-skolica-sporta',
        name: {
            sr: 'Sportisimo',
            en: 'Sportisimo',
        },
        categorySlugs: ['kids-sports'],
        city: 'Novi Sad',
        district: 'Detelinara',
        minAge: 3,
        maxAge: 6,
        ageLabel: '3–6 godina',
        imageWebp: sportisimoWebp,
        imageFallback: sportisimoJpg,
        description: {
            sr: [
                'Školica sporta namenjena je deci od 3 do 6 godina, raspoređenoj u dve uzrasne grupe: 3–4 i 4–6 godina.',
                'Trčimo, skačemo, puzimo, provlačimo se, penjemo, bacamo i hvatamo, prelazimo različite prepreke i učimo nove pokrete. Kako deca rastu, zadaci postaju složeniji i počinjemo da povezujemo više pokreta u jednu celinu.',
                'U ovom uzrastu ne žurimo sa izborom jednog sporta. Važnije nam je da dete isproba mnogo različitih načina kretanja i napravi dobru osnovu za sport kojim će se možda kasnije baviti.',
            ],
            en: [
                'Kids’ Sports is for children from 3 to 6, split into two age groups: 3–4 and 4–6.',
                'We run, jump, crawl, squeeze through, climb, throw and catch, cross different obstacles and learn new movements. As children grow, the tasks get more complex and we start linking several movements into one whole.',
                'At this age we are not in a hurry to choose one sport. What matters more is that the child tries many different ways of moving and builds a good foundation for a sport they may take up later.',
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
            website: 'https://sportisimo.org/deca/skolica-sporta-4-6-god/',
            facebook: 'https://www.facebook.com/sportisimosportskaporodica',
            facebookLabel: 'Sportisimo sportska porodica',
            instagram: 'https://www.instagram.com/sportisimo_sportska_porodica/',
        },
    },
    {
        id: 'zverko',
        slug: 'zverko',
        name: {
            sr: 'Školica sporta Zverko',
            en: 'Zverko Kids’ Sports',
        },
        categorySlugs: ['kids-sports'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: 7,
        ageLabel: '3–7 godina',
        imageWebp: zverkoWebp,
        imageFallback: zverkoPng,
        description: {
            sr: [
                'Školica sporta namenjena uzrastu od 3 - 7 godina. Mesto gde deca uživaju u sportu.',
            ],
            en: [
                'Kids’ sports program for ages 3–7. A place where children enjoy sport.',
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
            phone: '064 252 14 14',
            email: 'vlajkovicana@yahoo.com',
            instagram: 'https://www.instagram.com/zverko.trening/',
        },
    },
    {
        id: 'sportska-druzina',
        slug: 'sportska-druzina',
        name: {
            sr: 'Sportska Družina',
            en: 'Sportska Družina',
        },
        categorySlugs: ['kids-sports', 'athletics', 'judo', 'karate', 'psychomotor-exercises'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 3,
        maxAge: 9,
        ageLabel: '3–9 godina',
        agesByCategory: {
            'kids-sports': { minAge: 3, maxAge: 6, ageLabel: '3–6 godina' },
        },
        imageWebp: sportskaDruzinaWebp,
        imageFallback: sportskaDruzinaWebp,
        description: {
            sr: [
                'Školica sporta za decu, udruženje otvoreno 2024, licencirani treneri i studenti sporta i fizičkog vaspitanja.',
                'Trening izgleda ovako: uvodni deo (trčanje, vije, igrice), pripremni (vežbe oblikovanja), glavni deo (poligoni, takmičenje, cilj treninga, kare, bacanja-perter) i završni, koji se završava uz osmeh i razne igrice, plesove i takmičenja.',
                'Za odrasle radimo funkcionalne kružne treninge, fokusiramo se na aerobne vežbe, snagu i izdržljivost.',
            ],
            en: [
                'A kids’ sports program, an association opened in 2024, with licensed coaches and students of sport and physical education.',
                'A session looks like this: an opening part (running, vije, games), a preparation part (shaping exercises), a main part (obstacle courses, competition, the goal of the session, squares, partner throws) and a closing part that ends with a smile and various games, dances and competitions.',
                'For adults we run functional circuit training, focused on aerobic exercise, strength and endurance.',
            ],
        },
        descriptionsByCategory: {
            'kids-sports': {
                sr: [
                    'Od 3 do 4 godine:',
                    'Školica uvodi prve korake kroz igru, motoričke igre, poligone i vežbe koordinacije i ravnoteže. Deca trče, skaču, provlače se, bacaju i hvataju, uz rad na gruboj motorici, držanju tela i orijentaciji u prostoru.',
                    'Uče da sarađuju, čekaju red i poštuju pravila. Treninzi su kratki i dinamični, bez pritiska i bez ranog izbora jednog sporta.',
                    'Od 4 do 6 godina:',
                    'Program i dalje ide kroz igru, uz poligone, elementarne sportske igre i vežbe koordinacije. Deca rade snagu, brzinu, okretnost, ravnotežu i preciznost, i drže pažnju na držanju tela i kontroli pokreta.',
                    'Postepeno se uvode osnovni elementi atletike, gimnastike, fudbala i košarke. Nema takmičarskog pritiska: deca uče da prate uputstva i da grade disciplinu i koncentraciju.',
                ],
                en: [
                    'Ages 3–4:',
                    'Kids’ sports introduces first steps through play, movement games, obstacle courses and coordination and balance exercises. Children run, jump, crawl through, throw and catch, and work on gross motor skill, posture and orientation in space.',
                    'They learn to cooperate, wait their turn and respect the rules. Sessions are short and lively, without pressure and without an early choice of one sport.',
                    'Ages 4–6:',
                    'The program stays rooted in play, with obstacle courses, elementary sports games and coordination exercises. Children work on strength, speed, agility, balance and precision, and on posture and control of movement.',
                    'Basic elements of athletics, gymnastics, soccer and basketball come in gradually. There is no competitive pressure: children learn to follow instructions and to build discipline and concentration.',
                ],
            },
            athletics: {
                sr: [
                    'Atletika u Sportskoj Družini spaja igru i kretanje: trčanje, skokove i bacanja. Deca tako razvijaju brzinu, izdržljivost, snagu, koordinaciju, ravnotežu i pravilno držanje tela.',
                    'Akcenat je na druženju i pozitivnom sportskom duhu, bez pritiska na rezultat. Cilj je da steknu zdrave navike i temelj za atletiku, ali i za bilo koji drugi sport.',
                ],
                en: [
                    'Athletics at Sportska Družina joins play and movement: running, jumps and throws. Children develop speed, endurance, strength, coordination, balance and good posture.',
                    'The emphasis is on time together and a positive sporting spirit, without pressure for results. The aim is healthy habits and a foundation for athletics, and for any other sport as well.',
                ],
            },
            judo: {
                sr: [
                    'Džudo u Sportskoj Družini uvodi osnove veštine kroz igru i vežbe prilagođene detetu. Uči se bezbedan pad i kontrola tela, uz rad na snazi, koordinaciji, fleksibilnosti, ravnoteži i motorici.',
                    'Pored fizičkog dela, trening je i škola discipline, poštovanja i samokontrole. Deca uče strpljenje, poštovanje pravila i drugih, i kako da kontrolišu emocije.',
                    'Posebno se pazi na bezbednost, fer-plej i pozitivnu atmosferu. Takmičenje nije u prvom planu: cilj je sigurnije telo i stabilnije samopouzdanje.',
                ],
                en: [
                    'Judo at Sportska Družina introduces the basics through play and exercises adapted to the child. They learn a safe fall and control of the body, along with strength, coordination, flexibility, balance and motor skill.',
                    'Alongside the physical work, training is also a school of discipline, respect and self-control. Children learn patience, respect for the rules and for others, and how to control their emotions.',
                    'Safety, fair play and a positive atmosphere get special attention. Competition is not the priority: the aim is a more secure body and steadier confidence.',
                ],
            },
            karate: {
                sr: [
                    'Karate u Sportskoj Družini uvodi osnove veštine kroz igru i postepeno savladavanje tehnike. Deca vežbaju snagu, brzinu, fleksibilnost, koordinaciju i ravnotežu, uz koncentraciju i samokontrolu.',
                    'Uče da poštuju pravila, trenere i vršnjake i da usmere energiju na zdrav način. Napredak ide kroz rad i nove veštine, bez pritiska na rezultat.',
                    'Program gradi i telo i navike: disciplinu, samopouzdanje i poštovanje, koje dete nosi i van treninga.',
                ],
                en: [
                    'Karate at Sportska Družina introduces the basics through play and a gradual learning of technique. Children practice strength, speed, flexibility, coordination and balance, along with concentration and self-control.',
                    'They learn to respect the rules, coaches and peers, and to direct their energy in a healthy way. Progress comes through work and new skills, without pressure for results.',
                    'The program builds both the body and habits: discipline, confidence and respect, which a child carries beyond training.',
                ],
            },
            'psychomotor-exercises': {
                sr: [
                    'Individualni treninzi su za decu sa poteškoćama u razvoju kojima treba poseban pristup i više pažnje. Program se pravi za svako dete, prema razvojnim ciljevima i preporukama stručnjaka.',
                    'Vežbe rade na motorici, koordinaciji, ravnoteži, snazi i koncentraciji, i na osećaju sigurnosti. Napredak se prati, u saradnji sa roditeljima i, po potrebi, drugim stručnjacima.',
                    'Pored fizičkog napretka, radi se na socijalnim veštinama, samostalnosti i odnosu prema kretanju, tempom koji detetu odgovara.',
                ],
                en: [
                    'Individual sessions are for children with developmental difficulties who need a particular approach and more attention. The program is built for each child, around developmental goals and specialists’ recommendations.',
                    'Exercises work on motor skill, coordination, balance, strength and concentration, and on a sense of safety. Progress is followed, together with parents and, when needed, other specialists.',
                    'Alongside physical progress, the work covers social skills, independence and a positive relationship with movement, at a pace that suits the child.',
                ],
            },
        },
        websitesByCategory: {
            'kids-sports': 'https://sportskadruzina.rs/skolica-sporta-za-decu-od-3-10-godina/',
            athletics: 'https://sportskadruzina.rs/skolica-sporta-za-decu-od-3-10-godina/',
            judo: 'https://sportskadruzina.rs/skolica-sporta-za-decu-od-3-10-godina/',
            karate: 'https://sportskadruzina.rs/skolica-sporta-za-decu-od-3-10-godina/',
            'psychomotor-exercises':
                'https://sportskadruzina.rs/individualni-treninzi-za-decu-sa-poteskocama-u-razvoju/',
        },
        addresses: [
            {
                street: 'Vase Stajića 27',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2493122,
                lng: 19.8425512,
                mapsUrl: 'https://www.google.com/maps?cid=17214341550029297554',
            },
        ],
        contact: {
            phone: '066 237 446',
            email: 'sportskadruzina24@gmail.com',
            website: 'https://sportskadruzina.rs',
            facebook: 'https://www.facebook.com/p/Sportska-Družina-61564522832984/',
            facebookLabel: 'Sportska Družina',
            instagram: 'https://www.instagram.com/sportska_druzina/',
        },
    },
]
