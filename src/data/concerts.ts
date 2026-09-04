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
    {
      composer: 'Alexandre Kosmicki',
      life: '*1978',
      title: 'Danse Satanique',
      year: '2015',
      notes: [
        'Der französische Komponist Alexandre Kosmicki begann seine musikalische Ausbildung am Konservatorium von Douai mit dem Studium der Klarinette. Zusätzlich belegte er die Fächer Komposition, Orchestration und Orchesterleitung. 2001 setzte er sein Studium in Paris am Conservatoire National Supérieur de musique de Paris fort, wo er für seine Leistungen in musikalischer Analyse mit dem Preis der Stadt Paris ausgezeichnet wurde. Momentan ist er Leiter des Marinemusikkorps in Brest. Zudem ist es ihm ein Anliegen, sein Wissen weiterzugeben, und so erhält er häufig Anfragen zur Veröffentlichung seiner pädagogischen Arbeiten.',
        'Zutiefst der französischen Klangästhetik verbunden, strebt er danach, das originale Repertoire für Blasorchester zu erweitern. Dies gelingt ihm mit großem Erfolg, so dass sein 2015 veröffentlichtes Werk Danse Satanique jüngst als Pflichtstück für die Europameisterschaft der Blasmusik ausgewählt wurde.',
        'Das Werk beginnt mit der Anrufung der dunklen Mächte durch ein einzelnes Horn. Daran anschließend wird diese Beschwörung von den Klarinetten in Form einer Litanei aufgenommen. Hier erwächst aus der Tiefe eine böse Kraft, die durch das zügellos ungeordnete Beben des Orchesters und durch wilde Glissandi der Posaunen symbolisiert wird.',
        'Sehr schnell bricht sich eine böse Welt Bahn und mündet schließlich in einen satanischen Tanz. Dieser Tanz stellt das Reich Satans mit seinen Dämonen dar, von denen sich manche völlig ungehemmt verhalten, während ein anderer Teil die Ankunft des Teufels vorbereitet. Das aufsehenerregende Auftreten des Teufels wird von schweren Blechbläserklängen repräsentiert, die seine Macht betonen. Dies stößt den Zuhörer in einen Klangstrudel von boshafter Ironie, extremem Sarkasmus und Respektlosigkeit. Die letzten Anklänge des Anrufungsthemas werden hinweggespült von beißendem Gespött, das den Beleg dafür gibt, dass die satanische Welt unabwendbar die Oberhand gewonnen hat.',
      ],
    },
    {
      composer: 'Hubert Hoche',
      life: '*1966',
      title: 'Melancholy Moment',
      year: '2017',
      notes: [
        'Der deutsche Komponist Hubert Hoche begann seine musikalische Ausbildung in seiner Kindheit mit dem Akkordeon und der Gitarre. Nach einer Schreinerlehre und dem Besuch der Berufsfachschule für Musik in Bad Königshofen studierte er an der Hochschule für Musik „Franz Liszt“ in Weimar Komposition und Dirigieren, welches er mit weiteren Aufbaustudien im Fach Komposition und der Teilnahme an Dirigierkursen ergänzte. Es folgten mehrere Erfolge bei nationalen Kompositionswettbewerben und die Zusammenarbeit mit renommierten Ensembles und Musiker*innen.',
        'Hubert Hoche komponierte sein Werk „Melancholy Moment“ anlässlich des Festivals UNerHÖRTes 2017 im Auftrag der Bayerischen Musikakademie in Hammelburg. Diese Auftragskomposition kam in einer Zeit, die für Hubert Hoche nicht ganz einfach war und in der gewisse Enttäuschungen einen Moment der Melancholie in ihm ausgelöst haben. So entstand auch der Titel dieses Werkes, welches aus zwei Hauptthemen besteht. Aufgrund seiner Komplexität ist es nicht einfach, sofort ein harmonisches Klangbild zu zaubern, da man der Musik zuerst ihre sanften Geheimnisse entlocken muss. Dennoch wird man gefesselt von einem spannenden, eigentlich melancholischen, aber sehr hoffnungsvollen Werk.',
      ],
    },
    {
      composer: 'Kevin Houben',
      life: '*1977',
      title: 'Resurrection',
      year: '2022',
      notes: [
        'Der in Belgien geborene Komponist Kevin Houben befasste sich bereits seit seiner frühesten Jugend in vielfältiger Weise mit Musik. Er erlernte die Trompete und widmete sich ausgiebig der Kammermusik. In seinen späteren Studien beschäftigte er sich mit Blasorchesterleitung, Arrangement und Komposition, unter anderem bei Jan Van der Roost. Heute ist er ein gefragter Pädagoge, Dirigent und preisgekrönter Komponist.',
        'Im Auftrag der belgischen Concert Band Maasmechelen komponierte er das Werk Resurrection. Dabei ließ er sich maßgeblich von Gustav Mahlers gewaltiger 2. Sinfonie, der sogenannten Auferstehungssinfonie, inspirieren. Houben greift zahlreiche kompositorische Bausteine und Klangelemente auf, die er wie der österreichische Meister in der Natur findet, und verarbeitet sie auf zeitgemäße Weise weiter. Das feingliedrige Werk beginnt mit einem Rückbezug auf die Natur und bietet im Verlauf jeder Instrumentengruppe die Möglichkeit, in solistischen Fragmenten, in transparenten thematischen Passagen sowie in kraftvollen Tuttistellen zu strahlen. Nach einem groß angelegten Spannungsbogen mündet das Stück mit dem klanggewaltigen Auferstehungschoral aus Mahlers 2. Sinfonie. Dabei erzeugt die reiche Orchestrierung des Chorals die Illusion, als seien eine Orgel und ein Chor beteiligt.',
        'So behält das Motto Gustav Mahlers auch in dieser moderneren Interpretation seine Gültigkeit: „Die Musik muss immer ein Sehnen enthalten, ein Sehnen über die Dinge dieser Welt hinaus.“',
      ],
    },
  ],
};
