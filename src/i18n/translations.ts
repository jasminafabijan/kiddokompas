import type { LocalizedText } from './types'

export const translations = {
  nav: {
    home: { sr: 'Početna', en: 'Home' },
    categories: { sr: 'Kategorije', en: 'Categories' },
    map: { sr: 'Mapa', en: 'Map' },
    about: { sr: 'O nama', en: 'About' },
    addActivity: { sr: 'Dodaj aktivnost', en: 'Add activity' },
    openMenu: { sr: 'Otvori meni', en: 'Open menu' },
    closeMenu: { sr: 'Zatvori meni', en: 'Close menu' },
    switchToEn: { sr: 'English', en: 'English' },
    switchToSr: { sr: 'Srpski', en: 'Srpski' },
    language: { sr: 'Jezik', en: 'Language' },
  },
  footer: {
    explore: { sr: 'Istraži', en: 'Explore' },
    info: { sr: 'Informacije', en: 'Information' },
    description: {
      sr: 'KiddoKompas pomaže roditeljima da brže pronađu aktivnosti koje odgovaraju uzrastu, lokaciji i interesovanjima deteta.',
      en: 'KiddoKompas helps parents quickly find activities that match their child’s age, location and interests.',
    },
    privacy: { sr: 'Politika privatnosti', en: 'Privacy policy' },
    contact: { sr: 'Kontakt', en: 'Contact' },
    copyright: { sr: '© 2026 KiddoKompas. Sva prava zadržana.', en: '© 2026 KiddoKompas. All rights reserved.' },
    disclaimer: {
      sr: 'Svi podaci su informativni — za tačne termine, cene i grupe kontaktirajte direktno školu ili organizatora.',
      en: 'All information is for guidance only — for exact schedules, prices and groups, contact the school or organizer directly.',
    },
  },
  hero: {
    tag: { sr: 'Platforma za roditelje', en: 'A platform for parents' },
    titleLine1: { sr: 'Pronađite savršene', en: 'Find the right' },
    titleAccent: { sr: 'aktivnosti', en: 'activities' },
    titleLine2: { sr: 'za vašu decu', en: 'for your kids' },
    lead: {
      sr: 'Sport, ples, muzika, umetnost i još mnogo toga — sve na jednom mestu, uz jednostavno filtriranje po lokaciji, uzrastu i interesovanju.',
      en: 'Sports, dance, music, art and much more — all in one place, with simple filters for location, age and interests.',
    },
  },
  categories: {
    tag: { sr: 'Kategorije', en: 'Categories' },
    title: { sr: 'Istražite po interesovanjima', en: 'Explore by interest' },
    subtitle: {
      sr: 'Odaberite oblast koja najviše odgovara vašem detetu i otkrijte programe u vašem kraju',
      en: 'Choose the area that suits your child best and discover programs nearby',
    },
  },
  recentlyAdded: {
    tag: { sr: 'Rastemo', en: 'Growing' },
    title: { sr: 'Novo na KiddoKompasu', en: 'New on KiddoKompas' },
    subtitle: {
      sr: 'Pogledajte škole i klubove koje smo nedavno dodali',
      en: 'See schools and clubs we added recently',
    },
  },
  filters: {
    ariaLabel: { sr: 'Pretraga aktivnosti', en: 'Search activities' },
    city: { sr: 'Grad / opština', en: 'City / municipality' },
    allCities: { sr: 'Svi gradovi', en: 'All cities' },
    district: { sr: 'Naselje / deo grada', en: 'Settlement / neighborhood' },
    districtPlaceholder: { sr: 'Izaberite naselje / deo grada', en: 'Choose a settlement / neighborhood' },
    districtSearch: { sr: 'Pretraži naselje / deo grada...', en: 'Search settlements / neighborhoods...' },
    age: { sr: 'Uzrast', en: 'Age' },
    allAges: { sr: 'Svi uzrasti', en: 'All ages' },
    activity: { sr: 'Aktivnost', en: 'Activity' },
    activityPlaceholder: { sr: 'Izaberite aktivnost', en: 'Choose an activity' },
    activitySearch: { sr: 'Pretraži aktivnost...', en: 'Search activities...' },
    selectAll: { sr: 'Označi sve', en: 'Select all' },
    clearAll: { sr: 'Izbriši sve', en: 'Clear all' },
    noResults: { sr: 'Nema rezultata', en: 'No results' },
    search: { sr: 'Pretraži', en: 'Search' },
    find: { sr: 'Pronađi', en: 'Find' },
    clear: { sr: 'Obriši filtere', en: 'Clear filters' },
  },
  search: {
    title: { sr: 'Rezultati pretrage', en: 'Search results' },
    back: { sr: 'Nazad na pretragu', en: 'Back to search' },
    emptyLead: { sr: 'Nema rezultata', en: 'No results' },
    emptyGeneric: {
      sr: 'Nema rezultata za izabrane kriterijume.',
      en: 'No results for the selected filters.',
    },
    emptyForActivity: { sr: 'za aktivnost „{activity}”', en: 'for activity “{activity}”' },
    emptyForActivities: { sr: 'za aktivnosti {activities}', en: 'for activities {activities}' },
    emptyForSelectedActivities: {
      sr: 'za izabrane aktivnosti',
      en: 'for the selected activities',
    },
    emptyForAge: { sr: 'za uzrast {age}', en: 'for age {age}' },
    emptyForDistrict: { sr: 'za naselje „{district}”', en: 'for the “{district}” settlement' },
    emptyForDistricts: { sr: 'za naselja {districts}', en: 'for the {districts} settlements' },
    emptyForSelectedDistricts: {
      sr: 'za izabrana naselja',
      en: 'for the selected settlements',
    },
    emptyInDistrict: { sr: 'u naselju „{district}”', en: 'in the “{district}” settlement' },
    emptyInDistricts: { sr: 'u naseljima {districts}', en: 'in the {districts} settlements' },
    emptyInSelectedDistricts: {
      sr: 'u izabranim naseljima',
      en: 'in the selected settlements',
    },
    emptyHintAge: { sr: 'Pokušajte da promenite uzrast.', en: 'Try changing the age.' },
    emptyHintActivity: {
      sr: 'Pokušajte da izaberete drugu aktivnost.',
      en: 'Try choosing another activity.',
    },
    emptyHintDistrict: {
      sr: 'Pokušajte da izaberete drugo naselje ili deo grada.',
      en: 'Try choosing another settlement or neighborhood.',
    },
    emptyHintAgeActivity: {
      sr: 'Pokušajte da promenite uzrast ili izaberete drugu aktivnost.',
      en: 'Try changing the age or choose another activity.',
    },
    emptyHintAgeDistrict: {
      sr: 'Pokušajte da promenite uzrast ili naselje / deo grada.',
      en: 'Try changing the age or settlement / neighborhood.',
    },
    emptyHintActivityDistrict: {
      sr: 'Pokušajte da izaberete drugu aktivnost ili naselje / deo grada.',
      en: 'Try choosing another activity or settlement / neighborhood.',
    },
    emptyHintAll: {
      sr: 'Pokušajte da promenite uzrast, aktivnost ili naselje / deo grada.',
      en: 'Try changing the age, activity or settlement / neighborhood.',
    },
    found: { sr: 'Pronašli smo {count}.', en: 'We found {count}.' },
    foundAge: {
      sr: 'Pronašli smo {count} {agreement} izabranom uzrastu.',
      en: 'We found {count} matching the selected age.',
    },
    foundLocation: {
      sr: 'Pronašli smo {count} na izabranoj lokaciji.',
      en: 'We found {count} in the selected area.',
    },
    foundAgeLocation: {
      sr: 'Pronašli smo {count} prema izabranom uzrastu i lokaciji.',
      en: 'We found {count} matching the selected age and area.',
    },
    foundActivity: {
      sr: 'Pronašli smo {count} za izabranu aktivnost.',
      en: 'We found {count} for the selected activity.',
    },
    schoolOne: { sr: '{n} školu', en: '{n} school' },
    schoolFew: { sr: '{n} škole', en: '{n} schools' },
    schoolMany: { sr: '{n} škola', en: '{n} schools' },
  },
  map: {
    title: { sr: 'Mapa aktivnosti', en: 'Activities map' },
    seeDetails: { sr: 'Vidi detalje', en: 'See details' },
    listAria: { sr: 'Lista aktivnosti', en: 'Activity list' },
    openInGoogleMaps: { sr: 'Otvori u Google Maps', en: 'Open in Google Maps' },
    locationOne: { sr: 'lokacija', en: 'location' },
    locationFew: { sr: 'lokacije', en: 'locations' },
    locationMany: { sr: 'lokacija', en: 'locations' },
    count: { sr: '{count} {word} u {city}', en: '{count} {word} in {city}' },
    countAll: { sr: '{count} {word}', en: '{count} {word}' },
  },
  school: {
    notFound: { sr: 'Škola nije pronađena.', en: 'School not found.' },
    contact: { sr: 'Kontakt', en: 'Contact' },
    location: { sr: 'Lokacija', en: 'Location' },
    locations: { sr: 'Lokacije', en: 'Locations' },
    selectLocation: { sr: 'Izaberite lokaciju', en: 'Select a location' },
    backHome: { sr: 'Nazad na početnu', en: 'Back to home' },
    backSearch: { sr: 'Nazad na pretragu', en: 'Back to search' },
    backMap: { sr: 'Nazad na mapu', en: 'Back to map' },
    backCategory: { sr: 'Nazad na {category}', en: 'Back to {category}' },
    aboutProgram: { sr: 'O programu', en: 'About the program' },
    activities: { sr: 'Aktivnosti:', en: 'Activities:' },
  },
  category: {
    notFound: { sr: 'Kategorija nije pronađena.', en: 'Category not found.' },
    empty: { sr: 'Trenutno nema dostupnih škola u ovoj kategoriji.', en: 'There are no schools in this category yet.' },
  },
  common: {
    backHome: { sr: 'Nazad na početnu', en: 'Back to home' },
    close: { sr: 'Zatvori', en: 'Close' },
    closeWindow: { sr: 'Zatvori prozor', en: 'Close window' },
  },
  notFound: {
    title: { sr: 'Stranica nije pronađena', en: 'Page not found' },
    text: {
      sr: 'Link možda više ne postoji ili je adresa pogrešna.',
      en: 'This link may no longer exist or the address may be incorrect.',
    },
    button: { sr: 'Nazad na početnu', en: 'Back to home' },
  },
  modal: {
    title: { sr: 'Dodajte svoju školicu na KiddoKompas', en: 'Add your school to KiddoKompas' },
    intro: {
      sr: 'Vodite školu, klub, radionicu ili aktivnost za decu? Pošaljite nam osnovne podatke i rado ćemo ih dodati u katalog. Cilj nam je da roditelji na jednom mestu lakše pronađu aktivnosti u svom gradu.',
      en: 'Do you run a school, club, workshop or kids’ activity? Send us the basic details and we will be glad to add them to the catalog. Our goal is to help parents find activities in their city in one place.',
    },
    free: { sr: 'Unos podataka je besplatan.', en: 'Submitting all details is free.' },
    name: { sr: 'Naziv škole, kluba ili aktivnosti', en: 'Name of the school, club or activity' },
    locations: { sr: 'Lokacija(e) održavanja aktivnosti', en: 'Location(s) where the activity takes place' },
    age: { sr: 'Uzrast kojem je aktivnost namenjena', en: 'Age group the activity is for' },
    phone: { sr: 'Telefon', en: 'Phone' },
    links: { sr: 'Link do sajta, Instagrama ili Facebooka', en: 'Website, Instagram or Facebook link' },
    description: { sr: 'Kratak opis', en: 'Short description' },
    photo: { sr: 'Fotografija koju smemo da koristimo', en: 'A photo we may use' },
    emailSubject: { sr: 'Dodavanje aktivnosti na KiddoKompas', en: 'Adding an activity to KiddoKompas' },
    emailBody: {
      sr: 'Zdravo,\n\nŽeleo/la bih da dodam svoju školu/aktivnost na KiddoKompas.\n\nNaziv škole, kluba ili aktivnosti:\nLokacija(e) održavanja aktivnosti:\nUzrast kojem je aktivnost namenjena:\nTelefon:\nSajt / Instagram / Facebook:\nKratak opis:\nLink do fotografije ili napomena kako šaljete fotografiju:\n\n(Hvala!)',
      en: 'Hello,\n\nI would like to add my school/activity to KiddoKompas.\n\nName of the school, club or activity:\nLocation(s):\nAge group:\nPhone:\nWebsite / Instagram / Facebook:\nShort description:\nPhoto link or a note on how you will send the photo:\n\n(Thank you!)',
    },
    note: {
      sr: 'Ne mora sve biti savršeno pripremljeno — dovoljno je da pošaljete osnovne informacije, a mi ćemo ih urediti za prikaz na sajtu.',
      en: 'It does not have to be perfectly prepared — basic information is enough, and we will edit it for the site.',
    },
    checklistTitle: { sr: 'Šta da pošaljete', en: 'What to send' },
    sendHow: { sr: 'Izaberite način slanja', en: 'Choose how to send' },
    formTitle: { sr: 'Popunite formu', en: 'Fill in the form' },
    formBadge: { sr: 'Preporučeno', en: 'Recommended' },
    formSubtitle: { sr: 'Vodi vas kroz sva polja, oko 2 minuta', en: 'Walks you through every field, about 2 minutes' },
    emailTitle: { sr: 'Pošaljite email', en: 'Send an email' },
    emailSubtitle: { sr: 'Ako vam je lakše da napišete svojim rečima', en: 'If you prefer to write it in your own words' },
    viberTitle: { sr: 'Pošaljite poruku na Viber', en: 'Send a Viber message' },
    viberSubtitle: { sr: 'Pošaljite podatke direktno u Viber poruku', en: 'Send the details directly in a Viber message' },
  },
  about: {
    eyebrow: { sr: 'Zdravo', en: 'Hello' },
    title: { sr: 'Drago mi je što ste ovde.', en: 'I’m glad you’re here.' },
    role: {
      sr: 'Mama dve devojčice i autorka KiddoKompasa',
      en: 'Mom of two girls and the author of KiddoKompas',
    },
    p1: {
      sr: 'KiddoKompas je nastao iz jedne sasvim praktične roditeljske potrebe: da se na jednom mestu lakše pronađu aktivnosti za decu u vašem gradu.',
      en: 'KiddoKompas came from a completely practical parental need: to make it easier to find kids’ activities in your city in one place.',
    },
    p2: {
      sr: 'Dok sam tražila aktivnosti za svoje devojčice, nedostajalo mi je jedno mesto koje bi olakšalo početak potrage — da mogu brzo da vidim koje aktivnosti su opcija, gde se održavaju i kojem uzrastu su namenjene.',
      en: 'While I was looking for activities for my girls, I was missing one place that would make the start of the search easier — so I could quickly see which activities are an option, where they take place and which age they are for.',
    },
    quote: {
      sr: 'Kada su informacije pregledne, i izbor postaje lakši.',
      en: 'When information is clear, the choice also becomes easier.',
    },
    p3: {
      sr: 'Pošto je izrada web sajtova moj posao, odlučila sam da napravim upravo takvo mesto — za sebe i za sve roditelje koji traže aktivnosti za svoju decu.',
      en: 'Since making websites is my job, I decided to make exactly that kind of place — for myself and for all parents looking for activities for their children.',
    },
    notice: {
      sr: 'KiddoKompas je katalog škola i klubova — ne sistem za upis. Cene, termine i detaljnije informacije proverite kontaktirajući školu, klub ili organizatora.',
      en: 'KiddoKompas is a catalog of schools and clubs — not an enrollment system. Check prices, schedules and more detailed information by contacting the school, club or organizer.',
    },
    ctaTitle: {
      sr: 'Znate školu ili klub koji nije na listi?',
      en: 'Know a school or club that is not on the list?',
    },
    ctaText: {
      sr: 'Ako vodite aktivnost za decu ili znate za školu, klub ili radionicu koju bi trebalo dodati, javite mi se.',
      en: 'If you run an activity for children or know of a school, club or workshop that should be added, get in touch with me.',
    },
    ctaButton: { sr: 'Predložite aktivnost', en: 'Suggest an activity' },
  },
  privacy: {
    title: { sr: 'Politika privatnosti', en: 'Privacy policy' },
    updated: {
      sr: 'Poslednje ažuriranje: 12. avgust 2026.',
      en: 'Last updated: 12 August 2026.',
    },
    intro: {
      sr: 'Ova Politika privatnosti objašnjava koje podatke KiddoKompas prikuplja, u koje svrhe ih koristi i koja prava imate u vezi sa svojim ličnim podacima. Sajtom upravlja Jasmina Fabijan',
      en: 'This Privacy Policy explains which data KiddoKompas collects, for what purposes it uses them and which rights you have in relation to your personal data. The site is managed by Jasmina Fabijan',
    },
    h1: { sr: '1. Šta je KiddoKompas', en: '1. What KiddoKompas is' },
    p1: {
      sr: 'KiddoKompas je informativni katalog škola, klubova i aktivnosti za decu. Sajt nije sistem za upis — ne posredujemo u ugovorima između roditelja i organizatora, niti naplaćujemo članarine u ime škola.',
      en: 'KiddoKompas is an informational catalog of schools, clubs and activities for children. The site is not an enrollment system — we do not mediate contracts between parents and organizers, nor do we charge membership fees on behalf of schools.',
    },
    h2: { sr: '2. Koje podatke obrađujemo', en: '2. What data we process' },
    p2intro: {
      sr: 'U zavisnosti od načina korišćenja sajta, možemo obrađivati:',
      en: 'Depending on how the site is used, we may process:',
    },
    dataVoluntaryLabel: {
      sr: 'Podatke koje nam dobrovoljno pošaljete',
      en: 'Data you send us voluntarily',
    },
    dataVoluntary: {
      sr: ' — npr. kada predložite aktivnost putem forme, emaila ili Vibera (ime ili naziv organizacije, kontakt telefon/email, adresa, opis aktivnosti i slično).',
      en: ' — e.g. when you suggest an activity via a form, email or Viber (name or organization name, contact phone/email, address, activity description and similar).',
    },
    dataPublicLabel: {
      sr: 'Javne podatke o školama i klubovima',
      en: 'Public data about schools and clubs',
    },
    dataPublic: {
      sr: ' — naziv, adresa, uzrast, opis, telefon, email, veb-sajt i profili na društvenim mrežama, koje objavljujemo u katalogu radi informisanja roditelja.',
      en: ' — name, address, age group, description, phone, email, website and social media profiles, which we publish in the catalog to inform parents.',
    },
    dataPhotosLabel: { sr: 'Fotografije', en: 'Photographs' },
    dataPhotos: {
      sr: ' — ako nam šaljete fotografiju za prikaz aktivnosti, potrebno je da imate pravo da tu fotografiju pošaljete i dozvolite njeno korišćenje na sajtu. Posebno obratite pažnju da ne šaljete fotografije dece ili drugih osoba bez odgovarajuće saglasnosti.',
      en: ' — if you send us a photograph to display an activity, you need to have the right to send that photograph and allow its use on the site. Pay particular attention not to send photographs of children or other people without the appropriate consent.',
    },
    p2note: {
      sr: 'KiddoKompas trenutno ne zahteva kreiranje korisničkog naloga, ne koristi Google Analytics, marketinške alate niti podatke o deci za profilisanje ili oglašavanje.',
      en: 'KiddoKompas currently does not require creating a user account, does not use Google Analytics, marketing tools, or data about children for profiling or advertising.',
    },
    h3: { sr: '3. Svrha obrade', en: '3. Purpose of processing' },
    p3intro: { sr: 'Podatke obrađujemo kako bismo:', en: 'We process data in order to:' },
    purpose1: {
      sr: 'održavali i unapređivali katalog aktivnosti,',
      en: 'maintain and improve the activities catalog,',
    },
    purpose2: {
      sr: 'odgovorili na predloge i upite koje nam pošaljete,',
      en: 'respond to suggestions and inquiries you send us,',
    },
    purpose3: {
      sr: 'proverili i ažurirali informacije o školama i klubovima,',
      en: 'check and update information about schools and clubs,',
    },
    purpose4: {
      sr: 'ispunili zakonske obaveze, ako postoje.',
      en: 'fulfil legal obligations, if they exist.',
    },
    h4: { sr: '4. Pravni osnov', en: '4. Legal basis' },
    p4: {
      sr: 'Obrada se zasniva na: (a) vašem pristanku ili zahtevu kada nam dobrovoljno pošaljete podatke; (b) legitimnom interesu da vodimo informativni katalog; i (c) zakonskim obavezama, kada je to primenljivo.',
      en: 'Processing is based on: (a) your consent or request when you voluntarily send us data; (b) the legitimate interest of running an informational catalog; and (c) legal obligations, when applicable.',
    },
    h5: { sr: '5. Kome delimo podatke', en: '5. Who we share data with' },
    p5a: {
      sr: 'Lične podatke ne prodajemo, ne iznajmljujemo i ne delimo ih u marketinške svrhe. Podatke možemo deliti samo kada je to potrebno za rad sajta, obradu predloga ili komunikaciju sa vama.',
      en: 'We do not sell, rent or share personal data for marketing purposes. We may share data only when it is necessary for the operation of the site, processing suggestions or communicating with you.',
    },
    p5b: {
      sr: 'Za prijem i obradu predloga i poruka možemo koristiti spoljne servise kao što su EmailJS, Google Forms, Google Sheets, Gmail/Google Workspace i Viber. Kada koristite te servise, na obradu podataka mogu se primenjivati i njihove politike privatnosti.',
      en: 'For receiving and processing suggestions and messages we may use external services such as EmailJS, Google Forms, Google Sheets, Gmail/Google Workspace and Viber. When you use those services, their privacy policies may also apply to the processing of data.',
    },
    p5c: {
      sr: 'Sajt može koristiti i tehničke servise neophodne za njegovo funkcionisanje, kao što su hosting, DNS, zaštita sajta, slanje emailova ili osnovna tehnička obrada podataka. Ti servisi mogu obrađivati samo one podatke koji su potrebni za pružanje konkretne usluge.',
      en: 'The site may also use technical services necessary for its functioning, such as hosting, DNS, site protection, sending emails or basic technical data processing. Those services may process only the data needed to provide the specific service.',
    },
    p5d: {
      sr: 'Javni kontakt podaci škola, klubova i organizatora objavljuju se u katalogu kako bi roditelji mogli da pronađu osnovne informacije i kontaktiraju organizatore direktno.',
      en: 'Public contact details of schools, clubs and organizers are published in the catalog so that parents can find basic information and contact organizers directly.',
    },
    p5e: {
      sr: 'Ako kliknete na spoljne linkove, kao što su Google mape, Instagram, Facebook, Viber, sajtovi škola ili drugi eksterni servisi, za obradu podataka na tim servisima važe njihove politike privatnosti.',
      en: 'If you click on external links, such as Google Maps, Instagram, Facebook, Viber, school websites or other external services, those services’ privacy policies apply to data processing on those services.',
    },
    h6: { sr: '6. Kolačići i analitika', en: '6. Cookies and analytics' },
    p6: {
      sr: 'Možemo koristiti osnovnu statistiku posećenosti kako bismo razumeli koje stranice se najviše koriste i unapredili sadržaj sajta. Ti podaci se ne koriste za praćenje korisnika kroz druge sajtove, oglašavanje ili profilisanje dece.',
      en: 'We may use basic visit statistics to understand which pages are used most and to improve the site content. These data are not used to track users across other sites, for advertising or for profiling children.',
    },
    h7: { sr: '7. Čuvanje podataka', en: '7. Data retention' },
    p7: {
      sr: 'Podatke čuvamo onoliko dugo koliko je potrebno za svrhu zbog koje su prikupljeni (npr. dok je škola u katalogu, dok traje razmena povodom predloga, ili dok postoji zakonska obaveza čuvanja). Nakon toga ih brišemo ili anonimizujemo, u razumnoj meri tehnički izvodljivom.',
      en: 'We keep data for as long as needed for the purpose for which they were collected (e.g. while the school is in the catalog, while correspondence about a suggestion is ongoing, or while there is a legal obligation to retain them). After that we delete or anonymize them, to a reasonably technically feasible extent.',
    },
    h8: { sr: '8. Vaša prava', en: '8. Your rights' },
    p8a: {
      sr: 'U skladu sa važećim propisima o zaštiti podataka o ličnosti, možete zatražiti uvid, ispravku, brisanje, ograničenje obrade ili prenos podataka, kao i uložiti prigovor na obradu zasnovanu na legitimnom interesu. Ako ste dali pristanak, možete ga povući u bilo kom trenutku, bez uticaja na zakonitost obrade pre povlačenja.',
      en: 'In accordance with applicable personal data protection regulations, you may request access, rectification, erasure, restriction of processing or data portability, and you may object to processing based on legitimate interest. If you have given consent, you may withdraw it at any time, without affecting the lawfulness of processing before withdrawal.',
    },
    p8bBefore: {
      sr: 'Za ostvarivanje prava pišite na',
      en: 'To exercise your rights, write to',
    },
    p8bAfter: {
      sr: 'Na pitanja i zahteve u vezi sa podacima odgovaramo u najkraćem mogućem roku.',
      en: 'We respond to questions and requests relating to data as soon as possible.',
    },
    h9: { sr: '9. Tačnost podataka u katalogu', en: '9. Accuracy of data in the catalog' },
    p9: {
      sr: 'Informacije o školama i klubovima su informativnog karaktera i mogu se menjati. Termine, cene, uzrast i slobodna mesta uvek proverite direktno sa organizatorom. Ako primetite netačan podatak, javite nam — rado ćemo ga ispraviti.',
      en: 'Information about schools and clubs is informational in character and may change. Always check schedules, prices, age groups and available places directly with the organizer. If you notice inaccurate information, let us know — we will be glad to correct it.',
    },
    h10: { sr: '10. Izmene politike', en: '10. Changes to the policy' },
    p10: {
      sr: 'Ovu politiku možemo povremeno ažurirati. Nova verzija važi od dana objavljivanja na ovoj stranici, uz navedeni datum poslednje izmene.',
      en: 'We may update this policy from time to time. The new version applies from the date of publication on this page, with the stated date of the last change.',
    },
    h11: { sr: '11. Kontakt', en: '11. Contact' },
    p11a: {
      sr: 'Za pitanja o privatnosti i obradi podataka:',
      en: 'For questions about privacy and data processing:',
    },
    p11b: {
      sr: 'Više o projektu možete pročitati na stranici',
      en: 'You can read more about the project on the',
    },
    p11bAfter: { sr: '.', en: ' page.' },
  },
  contact: {
    title: { sr: 'Pišite nam', en: 'Write to us' },
    lead: {
      sr: 'Imate pitanje, primetili ste netačan podatak ili nešto na sajtu ne radi kako treba? Pišite nam.',
      en: 'Have a question, noticed incorrect information, or is something on the site not working as it should? Write to us.',
    },
    addIntro: {
      sr: 'Vodite aktivnost za decu?',
      en: 'Do you run an activity for children?',
    },
    addLead: {
      sr: 'Pošaljite nam podatke za dodavanje na KiddoKompas. Prikaz je besplatan.',
      en: 'Send us the details to add it to KiddoKompas. Listing is free.',
    },
    name: { sr: 'Ime', en: 'Name' },
    namePlaceholder: { sr: 'Vaše ime', en: 'Your name' },
    email: { sr: 'Email', en: 'Email' },
    emailPlaceholder: { sr: 'vas@email.com', en: 'you@email.com' },
    reason: { sr: 'Tema poruke', en: 'Message topic' },
    reasonQuestion: { sr: 'Imam pitanje', en: 'I have a question' },
    reasonSite: { sr: 'Poteškoća na sajtu', en: 'A problem on the site' },
    reasonData: { sr: 'Podatak nije tačan', en: 'The information is incorrect' },
    reasonActivity: { sr: 'Predlog aktivnosti', en: 'Activity suggestion' },
    message: { sr: 'Poruka', en: 'Message' },
    messagePlaceholder: {
      sr: 'Napišite nam ukratko o čemu je reč.',
      en: 'Tell us briefly what this is about.',
    },
    submit: { sr: 'Pošalji poruku', en: 'Send message' },
    sending: { sr: 'Šaljemo…', en: 'Sending…' },
    success: {
      sr: 'Poruka je poslata. Hvala što ste nas kontaktirali.',
      en: 'Message sent. Thank you for contacting us.',
    },
    error: {
      sr: 'Nešto nije uspelo. Pokušajte ponovo ili nam pišite na {email}.',
      en: 'Something went wrong. Please try again or write to us at {email}.',
    },
    note: {
      sr: 'Odgovaramo u roku od 48h. Vašu adresu koristimo samo da vam odgovorimo — ništa drugo.',
      en: 'We reply within 48 hours. We use your address only to reply — nothing else.',
    },
  },
  seo: {
    homeTitle: { sr: 'KiddoKompas — Aktivnosti za decu', en: 'KiddoKompas — Kids’ activities' },
    homeDescription: {
      sr: 'KiddoKompas pomaže roditeljima da brže pronađu aktivnosti za decu u svom gradu — škole, klubove i radionice po uzrastu, lokaciji i interesovanjima.',
      en: 'KiddoKompas helps parents quickly find kids’ activities in their city — schools, clubs and workshops by age, location and interests.',
    },
    pageTitle: { sr: '{page} — KiddoKompas', en: '{page} — KiddoKompas' },
  },
} as const satisfies Record<string, Record<string, LocalizedText>>
