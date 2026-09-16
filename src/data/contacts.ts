export type Contact = {
  topic: string;
  name: string;
  position: string;
  mail: string;
};

/** Ansprechpartner – genutzt auf der Kontaktseite und im Kontaktbereich der Startseite. */
export const CONTACTS: Contact[] = [
  {
    topic: 'Konzertanfragen und allgemeine Anfragen',
    name: 'Ilka Hermann',
    position: 'Vorsitzende',
    mail: 'ilka.hermann@landesblasorchester.de',
  },
  {
    topic: 'Anfragen rund um Kommunikation und Presse',
    name: 'Walter Melcher',
    position: 'Kommunikationsreferent',
    mail: 'walter.melcher@landesblasorchester.de',
  },
];
