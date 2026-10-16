export type RejectedSchool = {
  id: string
  name: string
  categorySlug: string
  website?: string
  email?: string
  phone?: string
}

/** Contact rows for schools removed from the public catalog at the owner's request. */
export const rejectedSchools: RejectedSchool[] = [
  {
    id: 'champ-07-fudbal',
    name: 'Champ 07',
    categorySlug: 'football',
    website: 'https://www.ch07.rs/sport/fudbal/',
    email: 'bobanch07@yahoo.com',
    phone: '064 65 21 282',
  },
  {
    id: 'champ-07',
    name: 'Champ 07',
    categorySlug: 'basketball',
    website: 'https://www.ch07.rs/sport/kosarka/',
    email: 'bobanch07@yahoo.com',
    phone: '064 65 21 282',
  },
  {
    id: 'champ-07-odbojka',
    name: 'Champ 07',
    categorySlug: 'volleyball',
    website: 'https://www.ch07.rs/sport/odbojka/',
    email: 'bobanch07@yahoo.com',
    phone: '064 65 21 282',
  },
  {
    id: 'champ-07-plivanje',
    name: 'Champ 07',
    categorySlug: 'swimming',
    website: 'https://www.ch07.rs/sport/skola-plivanja/',
    email: 'bobanch07@yahoo.com',
    phone: '064 65 21 282',
  },
  {
    id: 'champ-07-razvojna-gimnastika',
    name: 'Champ 07',
    categorySlug: 'developmental-gymnastics',
    website: 'https://www.ch07.rs/sport/korektivno-razvojna-gimnastika/',
    email: 'bobanch07@yahoo.com',
    phone: '064 65 21 282',
  },
  {
    id: 'conkic-academy',
    name: 'Čonkić Tennis Academy',
    categorySlug: 'tennis',
    website: 'https://conkicacademy.com',
    email: 'conkictennis@gmail.com',
    phone: '062 503 364',
  },
  {
    id: 'olimpik-subotica',
    name: 'Olimpik Subotica',
    categorySlug: 'kids-sports',
    website: 'https://www.facebook.com/olimpiksubotica/',
  },
]
