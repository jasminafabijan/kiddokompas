import youngEngineersWebp from '../../assets/images/schools/robotics/young-engineers.webp'
import youngEngineersPng from '../../assets/images/schools/robotics/young-engineers.png'

import type { School } from './types'

export const roboticsSchools: School[] = [
    {
        id: 'young-engineers',
        slug: 'young-engineers',
        name: {
            sr: 'Young Engineers',
            en: 'Young Engineers',
        },
        categorySlugs: ['robotics'],
        city: 'Novi Sad',
        district: 'Novo naselje',
        minAge: 6,
        maxAge: 11,
        ageLabel: '6–11 godina',
        imageWebp: youngEngineersWebp,
        imageFallback: youngEngineersPng,
        description: {
            sr: [
                'Young Engineers nudi STEM programe Bricks Challenge i Galileo Technic — deo međunarodne franšize prisutne u više od 50 zemalja, sa preko 30.000 polaznika.',
                'Časovi traju 1,5 sat jednom nedeljno: sklapaju se kockice od nule do funkcionalnog mehaničkog robo-modela koji pokreću motorić i baterije.',
                'Kroz igru, gradnju i istraživanje deca uče principe mehanike i inženjerstva, razvijaju logičko razmišljanje, kreativnost, fine motorike, koncentraciju i dužu pažnju — bez fokusa na ekrane.',
                'Prvi čas je probni i besplatan: dete napravi robotizovani model koji na kraju „oživi“. Nudimo i tematske radionice, rođendane, kampove i team buildinge.',
            ],
            en: [
                'Young Engineers offers the STEM programs Bricks Challenge and Galileo Technic — part of an international franchise in more than 50 countries, with over 30,000 participants.',
                'Classes last 1.5 hours once a week: bricks are built from scratch into a working mechanical robot model powered by a small motor and batteries.',
                'Through play, building and exploration, children learn principles of mechanics and engineering, and develop logical thinking, creativity, fine motor skills, concentration and longer attention — without a screen focus.',
                'The first class is a free trial: the child builds a motorized model that “comes alive” at the end. The offer also includes themed workshops, birthday parties, camps and team-building events.',
            ],
        },
        addresses: [
            {
                street: 'Milana Ješića Ibre 3',
                city: 'Novi Sad',
                district: 'Novo naselje',
                lat: 45.2580106,
                lng: 19.8056981,
            },
            {
                street: 'Mite Ružića 2',
                city: 'Novi Sad',
                district: 'Stari Grad (Centar)',
                lat: 45.2563737,
                lng: 19.8456218,
            },
        ],
        contact: {
            phone: '064 128 98 30',
            email: 'yenovisad@gmail.com',
            website: 'https://novisad.youngengineers.org',
            facebook: 'https://www.facebook.com/youngengineersnovisad/',
            facebookLabel: 'Young Engineers Novi Sad',
            instagram: 'https://www.instagram.com/youngengineers.ns/',
        },
    },
]
