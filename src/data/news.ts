import type { ImageMetadata } from 'astro';
import ecwo from '../assets/news/ecwo-2026.jpg';
import interview from '../assets/news/interview-frederik-abel.jpg';
import dreiklaenge from '../assets/news/drei-klaenge-der-heimat.jpg';

export type NewsItem = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  dateISO: string;
  author: string;
  excerpt: string;
  image: ImageMetadata;
  imageAlt: string;
};

export const NEWS: NewsItem[] = [
  {
    slug: 'das-lbo-vertritt-deutschland-beim-ecwo-2026',
    title: 'Das LBO vertritt Deutschland beim ECWO 2026',
    kicker: 'Heimspiel bei der Europameisterschaft',
    date: '11. August 2026',
    dateISO: '2026-08-11',
    author: 'Walter Melcher',
    excerpt:
      'Im November blickt die europäische Blasmusikszene nach Stuttgart: Im Rahmen der BRAWO-Messe wird dort die Europameisterschaft für sinfonische Blasorchester ausgetragen – zum ersten Mal überhaupt in Deutschland.',
    image: ecwo,
    imageAlt: 'Ankündigung: Das LBO vertritt Deutschland beim ECWO 2026',
  },
  {
    slug: 'interview-mit-frederik-abel',
    title: 'Interview mit Frederik Abel',
    kicker: 'Sieger des Kompositionswettbewerbs Donaueschingen 2.0',
    date: '30. März 2026',
    dateISO: '2026-03-30',
    author: 'Walter Melcher',
    excerpt:
      'Mit seiner Komposition „Drei-Klänge der Heimat“ hat der 22-jährige Frederik Abel die Jury überzeugt. Im Gespräch erzählt er von seinen Vorbildern, dem Kompositionsprozess im Englandurlaub und davon, warum Heimat für ihn vor allem ein Gefühl ist.',
    image: interview,
    imageAlt: 'Interview mit dem Komponisten Frederik Abel',
  },
  {
    slug: 'siegerkomposition-drei-klaenge-der-heimat',
    title: 'Siegerkomposition „Drei-Klänge der Heimat“ wird in Donaueschingen uraufgeführt',
    kicker: 'Donaueschingen 2.0 im Frühjahrsprogramm',
    date: '18. März 2026',
    dateISO: '2026-03-18',
    author: 'Walter Melcher',
    excerpt:
      'Anlässlich des 100-jährigen Jubiläums des wegweisenden Konzertes von 1926 rief der Blasmusikverband Baden-Württemberg den Kompositionswettbewerb Donaueschingen 2.0 aus. Die Uraufführung des Siegerwerks findet am 18.04.2026 statt.',
    image: dreiklaenge,
    imageAlt: 'Ankündigung der Uraufführung von „Drei-Klänge der Heimat“',
  },
];
