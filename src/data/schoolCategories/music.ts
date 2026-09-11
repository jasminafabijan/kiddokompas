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
]
