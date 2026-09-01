export type Concert = {
  weekday: string;
  date: string;
  dateISO: string;
  place: string;
  title?: string;
  details?: string[];
};

export const SEASON = 'Herbst 2026';

export const CONCERTS: Concert[] = [
  {
    weekday: 'Sonntag',
    date: '11. Oktober 2026',
    dateISO: '2026-10-11',
    place: 'Plochingen',
    title: 'Werkstattkonzert',
    details: ['Musikzentrum Baden-Württemberg', 'Beginn: 13:30 Uhr – Eintritt frei'],
  },
  {
    weekday: 'Samstag',
    date: '24. Oktober 2026',
    dateISO: '2026-10-24',
    place: 'Dettingen/Erms',
    title: 'Doppel- und Lehrkonzert mit dem KVJBO Neckar/Alb',
    details: ['Lehrkonzert: 17:00 Uhr', 'Konzert: 19:00 Uhr'],
  },
  {
    weekday: 'Sonntag',
    date: '25. Oktober 2026',
    dateISO: '2026-10-25',
    place: 'Ehingen',
    title: 'Doppelkonzert mit dem KVJBO Ulm-Alb/Donau',
  },
  {
    weekday: 'Sonntag',
    date: '22. November 2026',
    dateISO: '2026-11-22',
    place: 'ECWO in Stuttgart',
    title: 'Europameisterschaft für sinfonische Blasorchester im Rahmen der BRAWO Messe',
  },
];

export const REHEARSALS = [
  { date: '18.09.2026 – 20.09.2026', place: 'Musikakademie Plochingen' },
  { date: '09.10.2026 – 11.10.2026', place: 'Musikakademie Plochingen' },
];

export const PROGRAMME = {
  season: 'Programm Herbst 2026',
  works: [
    { composer: 'Alexandre Kosmicki', life: '*1978', title: 'Danse Satanique', year: '2015' },
    { composer: 'Hubert Hoche', life: '*1966', title: 'Melancholy Moment', year: '2017' },
    { composer: 'Kevin Houben', life: '*1977', title: 'Resurrection', year: '2022' },
  ],
};
