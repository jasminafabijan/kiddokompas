import sportsWorldWebp from '../../assets/images/schools/basketball/sports-world.webp'
import sportsWorldJpg from '../../assets/images/schools/basketball/sports-world.jpg'
import kkLdWebp from '../../assets/images/schools/basketball/kk-ld.webp'
import kkLdJpg from '../../assets/images/schools/basketball/kk-ld.jpg'
import kkStarWebp from '../../assets/images/schools/basketball/kk-star.webp'
import kkStarJpg from '../../assets/images/schools/basketball/kk-star.jpg'
import sportKeyWebp from '../../assets/images/schools/basketball/sport-key.webp'
import sportKeyJpg from '../../assets/images/schools/basketball/sport-key.jpg'
import kkKadetWebp from '../../assets/images/schools/basketball/kadet.webp'
import kkKadetJpg from '../../assets/images/schools/basketball/kadet.jpg'
import kkDanubiusWebp from '../../assets/images/schools/basketball/kk-danubius.webp'
import kkDanubiusJpg from '../../assets/images/schools/basketball/kk-danubius.jpg'

import type { School } from './types'

export const basketballSchools: School[] = [
    {
        id: 'kk-sports-world',
        slug: 'kk-sports-world',
        name: {
            sr: "KK Sport's World",
            en: "Sport's World Basketball Club",
        },
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Salajka',
        minAge: 6,
        maxAge: 16,
        ageLabel: '6–16 godina',
        imageWebp: sportsWorldWebp,
        imageFallback: sportsWorldJpg,
        description: {
            sr: [
                "Košarkaški klub Sport's World postoji više od 35 godina i specijalizovan je za rad sa mlađim kategorijama.",
                'U programu se naglašavaju trud, karakter i poštovanje — vrednosti koje pomažu deci da napreduju i na terenu i van njega.',
                'Klub veruje da su kvalitetne košarkaške osnove u strogom, zabavnom i negujućem okruženju najbolji put ka dugoročnom uspehu.',
                'Treninzi se održavaju po međunarodnom programu veština i evropskom kurikulumu, uz tim diplomiranih košarkaških trenera.',
                'Polaznici učestvuju u takmičenjima na nivou grada, Vojvodine i Srbije, kroz uzrasne selekcije od minibasketa do kadeta.',
            ],
            en: [
                "Sport's World Basketball Club has existed for more than 35 years and specializes in work with younger age groups.",
                'The program emphasises effort, character and respect — values that help children progress both on the court and off it.',
                'The club believes that sound basketball foundations in a strict, fun and nurturing environment are the best path to long-term success.',
                'Training follows an international skills program and a European curriculum, with a team of graduate basketball coaches.',
                'Pupils take part in competitions at city, Vojvodina and Serbia level, through age selections from minibasket to cadets.',
            ],
        },
        addresses: [
            {
                street: 'OŠ "Vuk Karadžić", Radoja Domanovića 24',
                city: 'Novi Sad',
                district: 'Salajka',
                lat: 45.2682668,
                lng: 19.8388342,
            },
            {
                street: 'Đačko igralište, Jirečekova 2',
                city: 'Novi Sad',
                district: 'Liman 1',
                lat: 45.2430605,
                lng: 19.8534566,
            },
        ],
        contact: {
            phone: ['063 77 33 365', '063 771 38 73'],
            email: 'dragpan@gmail.com',
            website: 'https://kksportsworld.com',
            facebook: 'https://www.facebook.com/kksportsworld',
            instagram: 'https://www.instagram.com/kksportsworld/',
        },
    },
    {
        id: 'kk-ld',
        slug: 'kk-ld',
        name: {
            sr: 'Košarkaški klub LD',
            en: 'LD Basketball Club',
        },
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Telep',
        minAge: 6,
        maxAge: 16,
        ageLabel: '6–16 godina',
        imageWebp: kkLdWebp,
        imageFallback: kkLdJpg,
        description: {
            sr: [
                'Košarkaški klub LD osnovan je 2011. godine u Novom Sadu, sa ciljem da privuče i usmeri decu ka bavljenju košarkom.',
                'Osnivači kluba svoj igrački i trenerski iskustvo prenose na dečake i devojčice koji tek otkrivaju prve košarkaške korake.',
                'Rad je organizovan tako da svako dete ima priliku da ispolji talenat, druži se sa vršnjacima i uči kroz pobede i poraze.',
                'U klubu se jednako cene košarkaški napredak, školski uspeh i odnos prema drugovima u timu.',
                'Kroz treninge i takmičenja polaznici razvijaju radne navike, disciplinu, samostalnost i osećaj pripadnosti kolektivu.',
            ],
            en: [
                'LD Basketball Club was founded in 2011 in Novi Sad, with the aim of attracting children and guiding them into basketball.',
                'The club’s founders pass on their playing and coaching experience to boys and girls who are just taking their first basketball steps.',
                'The work is organized so that every child has a chance to show talent, spend time with peers and learn through wins and losses.',
                'The club values basketball progress, school success and how teammates treat one another equally.',
                'Through training and competitions, pupils develop work habits, discipline, independence and a sense of belonging to the group.',
            ],
        },
        addresses: [
            {
                street: 'OŠ "Nikola Tesla", Futoški put 25a',
                city: 'Novi Sad',
                district: 'Telep',
                lat: 45.2469675,
                lng: 19.8138278,
            },
            {
                street: 'SC Meridiana, Stojana Novakovića 2',
                city: 'Novi Sad',
                district: 'Detelinara',
                lat: 45.2548022,
                lng: 19.8069969,
            },
        ],
        contact: {
            phone: '065 55 06 526',
            email: 'kklubld@gmail.com',
            website: 'https://www.kk-ld.com',
            facebook: 'https://www.facebook.com/profile.php?id=100057053606676',
            facebookLabel: 'Košarkaški klub LD',
        },
    },
    {
        id: 'kk-star',
        slug: 'kk-star',
        hidden: true,
        name: {
            sr: 'Košarkaški klub Star',
            en: 'Star Basketball Club',
        },
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Stari Grad (Centar)',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: kkStarWebp,
        imageFallback: kkStarJpg,
        description: {
            sr: [
                'Košarkaški klub Star iz Novog Sada osnovan je 2004. godine i okuplja decu i mlade kroz školu košarke i rad mlađih kategorija.',
                'Klub neguje ljubav prema košarci kroz redovne treninge, takmičenja i zajedničke sportske aktivnosti.',
                'Program je namenjen deci koja žele da nauče osnove igre, napreduju u timu i razvijaju sportske navike.',
                'Star je aktivan u lokalnoj košarkaškoj zajednici i redovno organizuje upise i programe za nove članove.',
            ],
            en: [
                'Star Basketball Club from Novi Sad was founded in 2004 and brings together children and young people through a basketball school and younger age-group work.',
                'The club nurtures a love of basketball through regular training, competitions and shared sports activities.',
                'The program is for children who want to learn the basics of the game, progress in a team and develop sporting habits.',
                'Star is active in the local basketball community and regularly organizes enrollment and programs for new members.',
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
            phone: '063 865 6949',
            email: 'kkstar.direktor@gmail.com',
            facebook: 'https://www.facebook.com/kkstarnovisad/',
            facebookLabel: 'kkstarnovisad',
            instagram: 'https://www.instagram.com/kkstarnovisad/',
        },
    },
    {
        id: 'sport-key',
        slug: 'sport-key',
        name: {
            sr: 'KK Sport-Key',
            en: 'Sport-Key Basketball Club',
        },
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Sajmište',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: sportKeyWebp,
        imageFallback: sportKeyJpg,
        description: {
            sr: [
                'KK Sport-Key je škola košarke i košarkaški klub u Novom Sadu, sa dugom tradicijom rada sa decom i mladima.',
                'Klub neguje sportsko vaspitanje i razvoj ličnosti — pored košarkaških veština, naglasak je na vrednostima koje pomažu i van terena.',
                'Treninzi i takmičenja odvijaju se u sopstvenom sportskom centru „Dejan Sremčević”, sa dve sale i kompletnom pratećom infrastrukturom.',
                'Upis novih članova traje tokom cele godine, a rad je organizovan po uzrasnim grupama sa stručnim trenerskim kadrom.',
            ],
            en: [
                'Sport-Key Basketball Club is a basketball school and basketball club in Novi Sad, with a long tradition of work with children and young people.',
                'The club nurtures sports education and personal development — besides basketball skills, the emphasis is on values that help off the court as well.',
                'Training and competitions take place in its own sports center “Dejan Sremčević”, with two halls and full supporting infrastructure.',
                'Enrollment of new members runs throughout the year, and the work is organized by age groups with specialist coaching staff.',
            ],
        },
        addresses: [
            {
                street: 'SC „Dejan Sremčević”, Školska 4',
                city: 'Novi Sad',
                district: 'Sajmište',
                lat: 45.2496325,
                lng: 19.8357009,
            },
        ],
        contact: {
            phone: '069 226 79 16',
            facebook: 'https://www.facebook.com/p/sport-key-100042121190117/',
            facebookLabel: 'sport-key',
            instagram: 'https://www.instagram.com/kksportkey/',
        },
    },
    {
        id: 'kk-kadet',
        slug: 'kk-kadet',
        name: {
            sr: 'KK „Kadet”',
            en: 'Kadet Basketball Club',
        },
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Sajmište',
        minAge: 8,
        maxAge: 15,
        ageLabel: '8–15 godina',
        imageWebp: kkKadetWebp,
        imageFallback: kkKadetJpg,
        description: {
            sr: [
                'Košarkaški klub Kadet okuplja decu kroz igru i druženje, uz košarkaško obrazovanje i vaspitanje u timu — častan i drugarski odnos u ekipi.',
                'U klubu su ponikli igrači kao što su Nikola Milutinov, Luka Mitrović i Aleksej Pokuševski, koji je i promoter škole košarke.',
                'Upis traje tokom cele godine, a klub prima i devojčice.',
                'Selekcije se takmiče u Vojvođanskoj ligi, novosadskoj NSMK ligi i VIBA ligi, uz turnire u regionu i Evropi.',
            ],
            en: [
                'Kadet Basketball Club brings children together through play and friendship, with basketball education and team upbringing — a fair, supportive attitude in the squad.',
                'Players such as Nikola Milutinov, Luka Mitrović and Aleksej Pokuševski came up through the club; Pokuševski is also a promoter of the basketball school.',
                'Enrollment runs year-round, and the club also welcomes girls.',
                'Selections compete in the Vojvodina league, the Novi Sad NSMK league and the VIBA league, plus tournaments in the region and Europe.',
            ],
        },
        addresses: [
            {
                street: 'Sportski centar MarUK (BINS), Novosadskog sajma 37',
                city: 'Novi Sad',
                district: 'Sajmište',
                lat: 45.2533682,
                lng: 19.8252779,
            },
            {
                street: 'OŠ „Prva vojvođanska brigada”, Seljačkih buna 51a',
                city: 'Novi Sad',
                district: 'Novo naselje',
                lat: 45.2540205,
                lng: 19.797913,
            },
            {
                street: 'OŠ „Miloš Crnjanski”, Anđe Ranković 2',
                city: 'Novi Sad',
                district: 'Satelit',
                lat: 45.247616,
                lng: 19.7965593,
            },
        ],
        contact: {
            phone: ['062 409 616', '069 300 5035'],
            email: 'hodzic.selim@gmail.com',
            website: 'https://kkkadet.com',
            facebook: 'https://www.facebook.com/profile.php?id=100086423757996',
            facebookLabel: 'KK Kadet',
            instagram: 'https://www.instagram.com/k.k.kadet/',
        },
    },
    {
        id: 'kk-danubius',
        slug: 'kk-danubius',
        name: {
            sr: 'KK Danubius',
            en: 'Danubius Basketball Club',
        },
        categorySlugs: ['basketball'],
        city: 'Novi Sad',
        district: 'Sajmište',
        minAge: 6,
        maxAge: null,
        ageLabel: '6+ godina',
        imageWebp: kkDanubiusWebp,
        imageFallback: kkDanubiusJpg,
        description: {
            sr: [
                'Košarkaški klub Danubius osnovan je 2000. godine, a osnivač je trener Nebojša Zeković. Nakon prvih sezona klub se okrenuo isključivo radu sa mlađim kategorijama — i ta koncepcija važi i danas.',
                'Škola košarke okuplja više od 120 članova, uz stručne trenere, prilagođene programe, igru i takmičenja.',
                'Klub ima niz titula u KSS, KSV i VIBA ligama, kao i na turnirima u Srbiji i inostranstvu, a kroz njega su prošli igrači kao što su Nikola Silađi, Vukašin Petković, Vasilije Vučetić, Dušan Bulut i Strahinja Stojačić.',
                'Svake sezone organizuju se i pripreme na Tari i Zlatiboru, kao i na obalama Grčke.',
            ],
            en: [
                'Danubius Basketball Club was founded in 2000 by coach Nebojša Zeković. After its first seasons the club turned exclusively to younger age groups — and that approach still holds.',
                'The basketball school has more than 120 members, with specialist coaches, adapted programs, play and competitions.',
                'The club has a string of titles in the KSS, KSV and VIBA leagues, as well as at tournaments in Serbia and abroad, and players such as Nikola Silađi, Vukašin Petković, Vasilije Vučetić, Dušan Bulut and Strahinja Stojačić came up through it.',
                'Each season it also organizes training camps on Tara and Zlatibor, and on the coast of Greece.',
            ],
        },
        addresses: [
            {
                street: 'OŠ „Petefi Šandor”, Bore Prodanovića 15A',
                city: 'Novi Sad',
                district: 'Sajmište',
                lat: 45.2541054,
                lng: 19.8299933,
            },
        ],
        contact: {
            phone: '063 597 946',
            email: 'kkdanubius2000@gmail.com',
            website: 'https://kkdanubius.rs',
            facebook: 'https://www.facebook.com/DanubiusSkolaKosarke/',
            facebookLabel: 'DanubiusSkolaKosarke',
            instagram: 'https://www.instagram.com/kkdanubius/',
        },
    },
]
