export const SITE_NAME = 'Landesblasorchester Baden-Württemberg';
export const SITE_SHORT = 'LBO';
export const CLAIM = 'Driven by music. Connected by heart.';
export const SUBCLAIM = 'Sinfonische Blasmusik der Spitzenklasse seit 1978.';
export const SITE_DESCRIPTION =
  'Das Landesblasorchester Baden-Württemberg ist das Auswahlorchester des Blasmusikverbandes Baden-Württemberg – sinfonische Blasmusik auf höchstem Niveau seit 1978.';

/** Hosts, auf denen die Seite indexiert werden darf. Alles andere = Staging. */
export const PRODUCTION_HOSTS = ['landesblasorchester.de', 'www.landesblasorchester.de'];

export const isProductionHost = (url: URL | undefined) =>
  !!url && PRODUCTION_HOSTS.includes(url.hostname);

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

/** Navigationsstruktur – identisch zur bisherigen Website. */
export const NAV: NavItem[] = [
  {
    label: 'Konzerte',
    href: '/konzerttermine',
    children: [
      { label: 'Konzerttermine', href: '/konzerttermine' },
      { label: 'Programm', href: '/programm' },
    ],
  },
  {
    label: 'Medien',
    href: '/cds',
    children: [
      { label: 'CDs und DVDs', href: '/cds' },
      { label: 'YouTube', href: 'https://www.youtube.com/user/landesblasorchester', external: true },
      { label: 'Facebook', href: 'https://www.facebook.com/Landesblasorchester/', external: true },
      { label: 'Instagram', href: 'https://www.instagram.com/landesblasorchester/', external: true },
      { label: 'Presse', href: '/presse' },
      { label: 'Fanshop', href: 'https://landesblasorchester.myspreadshop.de/', external: true },
    ],
  },
  {
    label: 'Orchester',
    href: '/ueber-uns',
    children: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Künstlerische Leitung', href: '/kuenstlerische-leitung' },
      { label: 'Vorstand', href: '/vorstand' },
      { label: 'Mitglied werden', href: '/mitglied-werden' },
      { label: 'LBO-hautnah', href: '/lbo-hautnah' },
      { label: 'Lehrkonzert', href: '/lehrkonzert' },
    ],
  },
  { label: 'Förderverein', href: '/foerderverein' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const FOOTER_LINKS: NavItem[] = [
  { label: 'Interner Bereich', href: 'https://intern.landesblasorchester.de/', external: true },
  { label: 'Impressum', href: '/impressum' },
  { label: 'Datenschutzerklärung', href: '/datenschutzerklaerung' },
  { label: 'Haftung', href: '/haftung' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const SOCIAL = [
  { label: 'YouTube', href: 'https://www.youtube.com/user/landesblasorchester' },
  { label: 'Facebook', href: 'https://www.facebook.com/Landesblasorchester/' },
  { label: 'Instagram', href: 'https://www.instagram.com/landesblasorchester/' },
  { label: 'Fanshop', href: 'https://landesblasorchester.myspreadshop.de/' },
];
