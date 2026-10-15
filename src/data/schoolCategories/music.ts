import andjeliJpg from '../../assets/images/schools/music/andjeli.jpg'
import milicevicWebp from '../../assets/images/schools/music/milicevic.webp'
import odgajanjeSaMuzikomWebp from '../../assets/images/schools/music/odgajanje-sa-muzikom.webp'
import odgajanjeSaMuzikomPng from '../../assets/images/schools/music/odgajanje-sa-muzikom.png'

import type { School } from './types'

export const musicSchools: School[] = [
    {
        id: 'odgajanje-sa-muzikom',
        slug: 'odgajanje-sa-muzikom',
        name: {
            sr: 'Odgajanje sa muzikom',
            en: 'Odgajanje sa muzikom',
        },
        categorySlugs: ['music'],
        city: 'Novi Sad',
        district: 'Liman 4',
        minAge: 0,
        maxAge: 6,
        ageLabel: '0–6 godina',
        imageWebp: odgajanjeSaMuzikomWebp,
        imageFallback: odgajanjeSaMuzikomPng,
        description: {
            sr: [
                'Odgajanje sa muzikom je program koji kroz muziku, igru i pokret podstiče razvoj i stvaranje pozitivnog odnosa prema muzici od najranijeg uzrasta.',
                'Kroz pesmu, ritam, pokret, sviranje različitih instrumenata i muzičke igre, deca razvijaju motoričke i kognitivne sposobnosti, pažnju, koncentraciju, kreativnost i samopouzdanje, ali i veštine komunikacije, saradnje i izražavanja.',
                'Sadržaj radionica prilagođen je svakom uzrastu i razvojnoj fazi deteta – od prvih susreta sa zvukom, ritmom i pokretom kod najmlađih, do složenijih muzičkih aktivnosti i grupnog muziciranja kod starije dece.',
                'Radionice se održavaju jednom nedeljno, u toplom i podsticajnom okruženju, uz prisustvo roditelja. Naš cilj je da deca kroz muziku istražuju, stvaraju, izražavaju se i sa radošću razvijaju svoje potencijale.',
                'Jer muzika nije samo ono što čujemo – muzika je i način na koji rastemo.',
            ],
            en: [
                'Odgajanje sa muzikom is a program that, through music, play and movement, encourages development and a positive relationship with music from the earliest age.',
                'Through song, rhythm, movement, playing different instruments and musical games, children build motor and cognitive skills, attention, concentration, creativity and confidence, as well as communication, cooperation and self-expression.',
                'Workshop content is adapted to each age and developmental stage — from first encounters with sound, rhythm and movement for the youngest, to more complex musical activities and group music-making for older children.',
                'Workshops run once a week in a warm, supportive setting, with parents present. The goal is for children to explore, create and express themselves through music, and joyfully develop their potential.',
                'Because music is not only what we hear — music is also how we grow.',
            ],
        },
        addresses: [
            {
                street: 'Jozefa Marčoka 1',
                city: 'Novi Sad',
                district: 'Liman 4',
                lat: 45.2368696,
                lng: 19.8313043,
            },
        ],
        contact: {
            phone: '060 077 60 84',
            email: 'odgajanjesamuzikom.novisad@gmail.com',
            website: 'https://odgajanjesamuzikom.com/centri/novi-sad/',
            instagram: 'https://www.instagram.com/odgajanjesamuzikom.novisad/',
        },
    },
    {
        id: 'muzicka-radionica-andeli',
        slug: 'muzicka-radionica-andeli',
        name: {
            sr: 'Muzička radionica Anđeli',
            en: 'Anđeli Music Workshop',
        },
        categorySlugs: ['music', 'speech-development'],
        city: 'Beograd',
        district: 'Savski Venac',
        minAge: 1,
        maxAge: null,
        ageLabel: '1+ godina',
        imageWebp: andjeliJpg,
        imageFallback: andjeliJpg,
        description: {
            sr: [
                'U ponudi su časovi pevanja, solfeđa, klavira i violine, i razvoj govora kroz muzikoterapiju i likovnu terapiju.',
                'Muzika i umetnost idu zajedno: dete svira i peva, a kroz igru, pokret i likovni rad gradi govor, pažnju i izražavanje.',
                'Program vodi dete od prvih reči ka potpunijoj komunikaciji, uz bogatiji rečnik, jasniju dikciju i više samopouzdanja u nastupu.',
                'Muzikoterapija podstiče razgovor, koncentraciju, pamćenje i socijalizaciju, a likovna terapija kroz slikanje, crtanje i oblikovanje razvija finu motoriku i izraz.',
                'Rad je individualan i prati potrebe deteta. Posebnu metodu „Anđeli“ osmislila je osnivačica Anđelka Spencer, spajajući muziku, pokret i igru.',
                'Radionica je namenjena za decu sa kašnjenjem u razvoju kao i za regularnu decu.',
            ],
            en: [
                'The offer includes singing, solfeggio, piano and violin lessons, and speech development through music therapy and art therapy.',
                'Music and art go together: a child plays and sings, and through play, movement and visual art builds speech, attention and expression.',
                'The program leads a child from first words toward fuller communication, with a richer vocabulary, clearer diction and more confidence when performing.',
                'Music therapy encourages conversation, concentration, memory and social connection, while art therapy through painting, drawing and shaping builds fine motor skill and expression.',
                'The work is one-on-one and follows the child’s needs. Founder Anđelka Spencer developed the Anđeli method, bringing music, movement and play together.',
                'The workshop is intended for children with a developmental delay as well as for typically developing children.',
            ],
        },
        descriptionsByCategory: {
            music: {
                sr: [
                    'Muzička radionica Anđeli drži časove pevanja, solfeđa, klavira i violine, uz ritam, pokret i sviranje.',
                    'Kroz pesmu i instrument deca grade sluh, ritam, koncentraciju, memoriju i koordinaciju, i stiču sigurnost kad nastupaju.',
                    'Rad prati tempo deteta, od prvih nota i muzičkih igara do samostalnijeg sviranja i pevanja.',
                    'Solfeđo ide uz instrument, tako da se note, ritam i sluh povezuju sa onim što dete svira.',
                ],
                en: [
                    'Anđeli Music Workshop offers singing, solfeggio, piano and violin lessons, along with rhythm, movement and playing.',
                    'Through song and an instrument, children build listening, rhythm, concentration, memory and coordination, and gain confidence when performing.',
                    'The work follows the child’s pace, from first notes and musical games to more independent playing and singing.',
                    'Solfeggio sits alongside the instrument, so notes, rhythm and listening connect with what the child plays.',
                ],
            },
            'speech-development': {
                sr: [
                    'Centar za razvoj govora Anđeli vodi dete od prvih reči ka potpunijoj komunikaciji, kroz muziku, pokret i likovni rad.',
                    'Program muzikoterapije podržava govor, koncentraciju, motoričke veštine, koordinaciju oka i ruke, pamćenje i socijalizaciju. Muzika je sredstvo kojim se dete podstiče na razgovor i na vezu sa drugima.',
                    'Likovna terapija ide kroz slikanje, crtanje i oblikovanje: dete izražava emocije i misli, razvija finu motoriku i jača neuronske veze koje prate govor.',
                    'Stručnjaci rade individualno, prema potrebama i interesovanjima deteta. Cilj je bogatiji rečnik, jasnija dikcija i više samopouzdanja.',
                    'Posebnu metodu „Anđeli“ osmislila je osnivačica Anđelka Spencer, spajajući muziku, pokret i igru u podršci govoru.',
                ],
                en: [
                    'The Anđeli speech development center leads a child from first words toward fuller communication, through music, movement and visual art.',
                    'The music therapy program supports speech, concentration, motor skills, eye-hand coordination, memory and social connection. Music is the means that encourages a child to talk and to connect with others.',
                    'Art therapy works through painting, drawing and shaping: a child expresses feelings and thoughts, builds fine motor skill and strengthens the neural connections that go with speech.',
                    'Specialists work one-on-one, according to the child’s needs and interests. The aim is a richer vocabulary, clearer diction and more confidence.',
                    'Founder Anđelka Spencer developed the Anđeli method, bringing music, movement and play together to support speech.',
                ],
            },
        },
        addresses: [
            {
                street: 'Kneza Miloša 28',
                city: 'Beograd',
                district: 'Savski Venac',
                lat: 44.8047206,
                lng: 20.4586668,
            },
        ],
        contact: {
            phone: '065 637 49 97',
            email: 'angelsmusicws@gmail.com',
            website: 'https://angelsmusicws.com',
            facebook: 'https://www.facebook.com/angelsmusicws/',
            instagram: 'https://www.instagram.com/angelsmusicws/',
            facebookLabel: 'Muzička radionica Anđeli',
        },
    },
    {
        id: 'muzicka-skola-milicevic',
        slug: 'muzicka-skola-milicevic',
        name: {
            sr: 'Muzička škola Milićević',
            en: 'Milićević Music School',
        },
        categorySlugs: ['music'],
        city: 'Beograd',
        district: 'Mirijevo',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: milicevicWebp,
        imageFallback: milicevicWebp,
        description: {
            sr: [
                'Muzička škola Milićević namenjena je deci, tinejdžerima i odraslima koji žele da nauče da sviraju gitaru ili unaprede svoje postojeće znanje.',
                'Nastava se odvija kroz grupne i individualne časove, uživo u školi ili online. Grupe se formiraju prema uzrastu i nivou znanja, kako bi svaki polaznik imao dovoljno pažnje i podrške tokom učenja.',
                'Poseban akcenat stavljamo na praktično sviranje, razvoj muzičkog sluha, ritma i pravilne tehnike. Početnici postepeno savladavaju prve akorde i pesme, dok se program za iskusnije polaznike prilagođava njihovom nivou i ciljevima.',
                'Naš cilj je da učenje gitare bude zanimljivo, podsticajno i prilagođeno svakom polazniku, uz prijatnu atmosferu, kontinuiran napredak i razvijanje ljubavi prema muzici.',
            ],
            en: [
                'Milićević Music School is for children, teenagers and adults who want to learn to play the guitar or improve the skills they already have.',
                'Classes run in groups and one-on-one, in person at the school or online. Groups are formed by age and level, so each student gets enough attention and support while learning.',
                'We put special emphasis on practical playing and on developing musical ear, rhythm and proper technique. Beginners gradually learn their first chords and songs, while the program for more experienced students is adapted to their level and goals.',
                'Our aim is for learning guitar to be engaging, encouraging and adapted to each student, with a pleasant atmosphere, steady progress and a growing love of music.',
            ],
        },
        addresses: [
            {
                street: 'Jovanke Radaković 80b',
                city: 'Beograd',
                district: 'Mirijevo',
                lat: 44.798893,
                lng: 20.5218793,
                mapsUrl: 'https://www.google.com/maps?cid=6740222409885807124',
            },
        ],
        contact: {
            phone: ['061 458 55 58', '061 730 60 43'],
            email: 'milicevic.muzicka.skola@gmail.com',
            website: 'https://www.muzickaskolamilicevic.rs/',
            facebook: 'https://www.facebook.com/msmilicevic/',
            facebookLabel: 'Muzička škola Milićević',
            instagram: 'https://www.instagram.com/ms.milicevic/',
            tiktok: 'https://www.tiktok.com/@ms.milicevic',
        },
    },
]
