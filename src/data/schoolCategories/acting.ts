import dramaStudioWebp from '../../assets/images/schools/acting/drama-studio.webp'
import dramaStudioJpg from '../../assets/images/schools/acting/drama-studio.jpg'
import daskeWebp from '../../assets/images/schools/acting/daske-i-maske.webp'
import daskeJpeg from '../../assets/images/schools/acting/daske-i-maske.jpeg'

import type { School } from './types'

export const actingSchools: School[] = [
    {
        id: 'drama-studio',
        slug: 'drama-studio',
        name: {
            sr: 'Drama Studio',
            en: 'Drama Studio',
        },
        categorySlugs: ['acting'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 7,
        maxAge: null,
        ageLabel: '7+ godina',
        imageWebp: dramaStudioWebp,
        imageFallback: dramaStudioJpg,
        description: {
            sr: [
                'Drama Studio je najtraženija škola glume u Srbiji, sa timom vrhunskih predavača i mentora iz sveta pozorišta i filma.',
                'Škola radi po Sistemu Stanislavskog i nudi individualan pristup svakom polazniku, uz podršku u razvoju samopouzdanja i scenskog izraza.',
                'Standardni program namenjen je uzrastu od 7 do 23 godine, sa grupama formiranim prema starosti: osnovna škola, srednja škola i stariji uzrast.',
                'Polaznici pohađaju pet predmeta: glumu, ples, pevanje, scenski pokret i dikciju, kroz osam mesečnih blokova po 2×45 minuta.',
                'Program pomaže deci da se oslobode treme, nauče pravilno da govore i steknu kulturno ponašanje u sigurnom i podržavajućem okruženju.',
            ],
            en: [
                'Drama Studio is the most sought-after acting school in Serbia, with a team of leading teachers and mentors from theatre and film.',
                'The school works according to the Stanislavski System and offers an individual approach to each pupil, with support for confidence and stage expression.',
                'The standard program is for ages 7 to 23, with groups formed by age: primary school, secondary school and older pupils.',
                'Pupils take five subjects: acting, dance, singing, stage movement and diction, across eight monthly blocks of 2×45 minutes.',
                'The program helps children ease stage fright, learn to speak clearly and develop cultured behavior in a safe, supportive setting.',
            ],
        },
        addresses: [
            {
                street: 'TC Pariski magazin, Kralja Aleksandra 12',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2541374,
                lng: 19.8435541,
            },
        ],
        contact: {
            phone: '061 46 000 47',
            email: 'info@dramastudio.rs',
            website: 'https://www.dramastudio.rs/skola-glume-novi-sad/',
            facebook: 'https://www.facebook.com/dramastudio.rs/',
            instagram: 'https://www.instagram.com/dramastudio.rs/',
        },
    },
    {
        id: 'daske-i-maske',
        slug: 'daske-i-maske',
        name: {
            sr: 'Dramski studio „Daske & Maske”',
            en: 'Drama studio “Daske & Maske”',
        },
        categorySlugs: ['acting'],
        city: 'Beograd',
        district: 'Voždovac',
        minAge: 6,
        maxAge: 18,
        ageLabel: '6–18 godina',
        imageWebp: daskeWebp,
        imageFallback: daskeJpeg,
        description: {
            sr: [
                'Dramski studio „Daske & Maske” nastao je iz ljubavi prema glumi, pozorištu i radu sa decom i mladima.',
                'Kroz pažljivo osmišljen program, prilagođen uzrastu, polaznici kroz igru, improvizacije i scenske vežbe razvijaju samopouzdanje, maštu i slobodu kreativnog izražavanja.',
                'Program obuhvata glumačke vežbe, stvaranje likova, scenski pokret, rad na glasu i dikciji, sinhronizaciju, savladavanje treme i timski rad.',
                'Deca uče kako da razviju scensku sigurnost, sarađuju u timu, koriste pokret i glas, oslobode se pred publikom i uživaju u zajedničkom stvaranju na sceni.',
                'Školu vode diplomirani glumci Teodora Aleksić i Nikola Todorović, sa iskustvom u pozorištu, na filmu i televiziji, kao i u radu sa decom i mladima.',
                'Programi su namenjeni deci i mladima od 6 do 18 godina.',
                'Nastava se odvija dva puta nedeljno, a svaki semestar završava se javnim časom, nastupom ili predstavom.',
                'Vidimo se na daskama, pod maskama.',
            ],
            en: [
                'Drama studio “Daske & Maske” grew out of a love of acting, theatre and work with children and young people.',
                'Through a carefully designed program, adapted to age, pupils develop confidence, imagination and freedom of creative expression through play, improvisation and stage exercises.',
                'The program covers acting exercises, creating characters, stage movement, work on voice and diction, dubbing, overcoming stage fright and teamwork.',
                'Children learn how to develop stage confidence, work as a team, use movement and voice, feel free in front of an audience and enjoy creating together on stage.',
                'The school is led by graduated actors Teodora Aleksić and Nikola Todorović, with experience in theatre, film and television, and in work with children and young people.',
                'The programs are for children and young people aged 6 to 18.',
                'Classes take place twice a week, and each semester ends with a public class, a performance or a show.',
                'See you on the boards, under the masks.',
            ],
        },
        addresses: [
            {
                street: 'Danila Bojovića 20',
                city: 'Beograd',
                district: 'Voždovac',
                lat: 44.7724704,
                lng: 20.4808425,
                mapsUrl: 'https://www.google.com/maps?cid=13285091061969815756',
            },
        ],
        contact: {
            phone: '063 8359 589',
            email: 'studio@daskeimaske.rs',
            website: 'https://daskeimaske.rs/',
            facebook: 'https://www.facebook.com/profile.php?id=61586083949797',
            instagram: 'https://www.instagram.com/daskeimaske/',
        },
    },
]
