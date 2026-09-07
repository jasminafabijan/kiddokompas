import { warnMissingEnglish } from '../i18n/helpers'
import type { Lang } from '../i18n/types'

/**
 * English display for address strings that include a venue/type phrase.
 * Translate the venue type only. Streets, official names and personal names
 * keep original spelling (including diacritics).
 */
const STREET_LABELS: Record<string, string> = {
  'Pavla Papa 16 (sala u dvorištu)': 'Pavla Papa 16 (hall in the courtyard)',
  'Kopernikova 34 (sala u dvorištu)': 'Kopernikova 34 (hall in the courtyard)',
  'OŠ "Svetozar Marković Toza", Janka Čmelika 89':
    'Primary School "Svetozar Marković Toza", Janka Čmelika 89',
  'OŠ "Vuk Karadžić", Radoja Domanovića 24':
    'Primary School "Vuk Karadžić", Radoja Domanovića 24',
  'OŠ "Nikola Tesla", Futoški put 25a': 'Primary School "Nikola Tesla", Futoški put 25a',
  'OŠ „Vasa Stajić“, Pajevićeva': 'Primary School “Vasa Stajić”, Pajevićeva',
  'OŠ „Kosta Trifković”, Berislava Berića 2':
    'Primary School “Kosta Trifković”, Berislava Berića 2',
  'Đačko igralište, Jirečekova 2': 'Đačko playground, Jirečekova 2',
  'Fudbalski centar „Vujadin Boškov”, Novosadski put 114':
    'Football Center “Vujadin Boškov”, Novosadski put 114',
  'Sportski centar RFK Novi Sad, Rumenačka 152':
    'Sports Center RFK Novi Sad, Rumenačka 152',
  'Sportski centar Sajmište, Hajduk Veljkova 11':
    'Sajmište Sports Center, Hajduk Veljkova 11',
  'Mesna zajednica Bistrica, Braće Dronjak 11':
    'Bistrica Community Center, Braće Dronjak 11',
  'Bazeni SPENS-a, Sutjeska 2': 'SPENS pools, Sutjeska 2',
  'Tehnička škola „Mileva Marić Anštajn”, Gagarinova 1':
    'Technical School “Mileva Marić Anštajn”, Gagarinova 1',
  'TC Pariski magazin, Kralja Aleksandra 12':
    'Shopping Center Pariski magazin, Kralja Aleksandra 12',
  'Kod autoputa A1': 'Near the A1 motorway',
  'SC „Dejan Sremčević”, Školska 4': 'SC “Dejan Sremčević”, Školska 4',
  'Sportski centar MarUK (BINS), Novosadskog sajma 37':
    'Sports Center MarUK (BINS), Novosadskog sajma 37',
  'OŠ „Prva vojvođanska brigada”, Seljačkih buna 51a':
    'Primary School “Prva vojvođanska brigada”, Seljačkih buna 51a',
  'OŠ „Miloš Crnjanski”, Anđe Ranković 2':
    'Primary School “Miloš Crnjanski”, Anđe Ranković 2',
  'OŠ „Dušan Radović”, Velebitska bb':
    'Primary School “Dušan Radović”, Velebitska bb',
  'OŠ „Dušan Radović 2”, Čenejska 61':
    'Primary School “Dušan Radović 2”, Čenejska 61',
  'OŠ „Petefi Šandor”, Bore Prodanovića 15A':
    'Primary School “Petefi Šandor”, Bore Prodanovića 15A',
  'Mileve Marić 25 (iza zgrade, atomsko sklonište)':
    'Mileve Marić 25 (behind the building, fallout shelter)',
  'Mesna zajednica, Janošikova 1a': 'Community Center, Janošikova 1a',
  'OŠ „Branko Radičević”, Futoška 5':
    'Primary School “Branko Radičević”, Futoška 5',
  'OŠ „Jovan Jovanović Zmaj”, Školska 3':
    'Primary School “Jovan Jovanović Zmaj”, Školska 3',
  'Mesna zajednica, Vuka Karadžića 289':
    'Community Center, Vuka Karadžića 289',
  'OŠ „Jovan Popović”, Nikole Tesle 73':
    'Primary School “Jovan Popović”, Nikole Tesle 73',
  'Rumenačka 35, ulaz 3': 'Rumenačka 35, entrance 3',
  'Beograd na vodi, Quartet 1, Luke Ćelovića Trebinjca 13, ulaz B, stan 6':
    'Beograd na vodi, Quartet 1, Luke Ćelovića Trebinjca 13, entrance B, apartment 6',
  'Cara Dušana 145a, stan 5': 'Cara Dušana 145a, apartment 5',
}

const SERBIAN_VENUE_PHRASE =
  /sala u dvorištu|OŠ |Fakultet sporta|Sala na |Fudbalski centar|Sportski centar|Mesna zajednica|Bazeni |Tehnička škola|Kod autoputa|igralište|TC /i

export const getStreetName = (street: string, lang: Lang): string => {
  if (lang !== 'en') {
    return street
  }

  const mapped = STREET_LABELS[street]
  if (mapped) {
    return mapped
  }

  if (SERBIAN_VENUE_PHRASE.test(street)) {
    warnMissingEnglish(`street:${street}`, 'needs an English venue label (keep original street spelling)')
  }

  return street
}
