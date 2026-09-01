import type { ImageMetadata } from 'astro';
import wildflowers from '../assets/covers/wildflowers.jpg';
import klangbilder from '../assets/covers/klangbilder.jpg';
import dvdKerkrade from '../assets/covers/dvd-kerkrade-2017.jpg';
import lotr from '../assets/covers/lord-of-the-rings.jpg';
import transitions from '../assets/covers/transitions.jpg';
import gelb from '../assets/covers/gelb.jpg';
import gilgamesh from '../assets/covers/gilgamesh.jpg';
import rossRoy from '../assets/covers/ross-roy.jpg';
import wasbe2007 from '../assets/covers/wasbe-2007.jpg';
import druiden from '../assets/covers/die-druiden.jpg';
import cartoon from '../assets/covers/cartoon.jpg';
import jahre20 from '../assets/covers/20-jahre-lbo.jpg';
import collections from '../assets/covers/collections.jpg';
import donaueschingen from '../assets/covers/donaueschingen-1926.jpg';
import goodbye from '../assets/covers/time-to-say-goodbye.jpg';
import lbo1991 from '../assets/covers/landesblasorchester-1991.jpg';
import wolves from '../assets/covers/salute-to-the-wolves.jpg';
import wmc2009 from '../assets/covers/wmc-2009.jpg';

export type NoteBlock = { heading?: string; subheading?: string; body: string[] };

export type Release = {
  slug: string;
  title: string;
  conductor: string;
  year?: string;
  price: string;
  meta?: string[];
  cover: ImageMetadata;
  tracks: string[];
  cta?: { label: string; href: string };
  notes?: NoteBlock[];
};

export const RELEASES: Release[] = [
  {
    slug: 'wildflowers',
    title: 'Wildflowers LP',
    conductor: 'Björn Bus',
    year: '2024',
    price: '35 €',
    cover: wildflowers,
    tracks: [
      'Earthen Echoes Unveiled – Mathias Wehr',
      'Danse Satanique – Alexandre Kosmicki',
      'Images – José Suñer-Oriola',
      'Capriccio – Christiaan Janssen',
      'A Brussels Requiem – Bert Appermont',
      'Königsmarsch – Richard Strauss, Arr.: Guido Rennert',
    ],
    cta: { label: 'Wildflowers erleben', href: 'https://www.youtube.com/user/landesblasorchester' },
  },
  {
    slug: 'klangbilder',
    title: 'Klangbilder',
    conductor: 'Björn Bus',
    year: '2018',
    price: '15 €',
    cover: klangbilder,
    tracks: [
      'El Jardin de las Hespérides – José Suñer Oriola (La Búsqueda / Ladón / Las Ninfas / Huida y Retorno)',
      'Intermezzo Sinfonico – Pietro Mascagni, arr. Jos van de Braak',
      'Pan & Syrinx – Carl Nielsen, arr. Jos van de Braak',
      'Tsar Boris – Wassili S. Kalinnikow, arr. Marc Koninkx',
      'Gigantic – Julius Fučik, arr. Jaroslav Šip',
      'Allerseelen – Richard Strauss, arr. Frederick Fennell',
    ],
  },
  {
    slug: 'dvd-wmc-kerkrade-2017',
    title: 'DVD WMC Kerkrade 2017',
    conductor: 'Björn Bus',
    price: '15 €',
    meta: ['Kerkrade, 30. Juli 2017, Live-Aufnahme des Vizeweltmeister-Konzerts'],
    cover: dvdKerkrade,
    tracks: [
      'Middle East Raid – Eckhard Stromer (*1972)',
      'Syrinx – Claude Debussy (1862–1918), Solistin: Corinna Henger, Flöte',
      'Pan und Syrinx – Carl Nielsen (1865–1931), arr. Jos van de Braak',
      'Rebroll – Salvador Brotons (*1959)',
      'El jardin de las Hespérides – José Suñer Oriola (*1964)',
    ],
  },
  {
    slug: 'lord-of-the-rings',
    title: 'Lord of the Rings: Return to Middle Earth',
    conductor: 'Björn Bus',
    price: '10 €',
    meta: [
      'Live-Aufnahme des Konzertes vom 12. Mai 2019 im Congress Centrum Heidenheim zusammen mit dem Neuen Kammerchor Heidenheim',
    ],
    cover: lotr,
    tracks: [
      'Lord of the Rings: Return to Middle Earth – Johan de Meij (5. Sinfonie)',
      'I. Mîri na Fëanor (Fëanors Juwelen)',
      'II. Tinúviel (Nachtigall)',
      'III. Ancalagon i-môr (Ancalagon, der Schwarze)',
      'IV. Arwen Undómiel (Abendstern)',
      'V. Dagor Delothrin (Krieg des Zorns)',
      'VI. Thuringwethil (Frau vom geheimen Schatten)',
      'Zugabe: Auszug aus dem 5. Satz „Die Hobbits“ der Sinfonie Nr. 1 „Der Herr der Ringe“ von Johan de Meij, Arr. Ben Roundtree',
    ],
  },
  {
    slug: 'transitions',
    title: 'Transitions',
    conductor: 'Björn Bus',
    year: '2013',
    price: '15 €',
    cover: transitions,
    tracks: [
      'Rienzi Ouvertüre – Richard Wagner, arr. Douglas McLain',
      'Transitions – Henk Badings',
      'Vasa – José Suñer Oriola (Moderato / Andante tranquillo / Allegro furioso)',
      'Terra Australis – Thorsten Wollmann (Rainforest / Outback / Reef)',
      'Cap Kennedy – Serge Lancen',
      'Times Square „On the Town“ – Leonard Bernstein',
    ],
    notes: [
      {
        body: [
          'Der Titel der CD Transitions geht nicht nur auf das gleichnamige Werk von Henk Badings zurück, sondern trifft auch in vielfältiger Weise auf das gesamte Landesblasorchester (LBO) zu. Der lateinische Begriff Transition lässt sich wohl am ehesten als Übergang übersetzen.',
          'Das LBO ist aufgrund seiner Struktur an Wandlungen in Besetzung und wechselnde Konzertorte gewöhnt. Das Jahr 2013, in dem die Aufnahme entstand, brachte darüber hinaus eine weitere einschneidende Veränderung mit sich. Die langjährige künstlerische Leiterin Isabelle Ruf-Weber übergab nach mehr als 10 Jahren äußerst erfolgreichen Wirkens den Dirigentenstab an ihren Nachfolger Björn Bus und verabschiedete sich mit einem Abschlusskonzert am 09.11.2013.',
          'Das LBO dankt beiden Dirigenten dafür, dass dieser Übergang sehr harmonisch verlief und vor allem das Wohl des Orchesters und die Musik im Blick hatten.',
          'Die Aufnahmen entstanden als Livemitschnitt der Konzerte am 20.04.2013 in Rottweil und am 09.11.2013 in Stetten am kalten Markt. Ein besonderer Dank geht an die Stadt Rottweil und ihre Stadtkapelle sowie an die Gemeinde Stetten am kalten Markt und die dortige Feuerwehrkapelle, die die logistischen Voraussetzungen für die CD-Aufnahme geschaffen haben.',
        ],
      },
      {
        heading: 'Rienzi Ouvertüre (1842)',
        subheading: 'Richard Wagner (1813–1883), Arr.: Douglas McLain',
        body: [
          'Mit der Ouvertüre zu Rienzi möchte das Landesblasorchester Baden-Württemberg den großen Opernkomponisten Richard Wagner ehren. Die Oper Rienzi war Richard Wagners dritte vollendete Oper und sein musikalischer Durchbruch. Wie auch in seinen nachfolgenden Opern nimmt Wagner in der Ouvertüre die Leitmotive der handelnden Personen vorweg.',
          'Inhaltlich lässt sie den Zuhörer in fünf Akten am tragischen Schicksal des Staatsmanns und Volkstribun Cola di Rienzi teilhaben, der sich entschlossen gegen den Terror zweier verfeindeter Adelsfamilien im Rom des 14. Jahrhunderts stellt. Ein von ihm angeführter Volksaufstand scheint zunächst erfolgreich, aufgrund einer Intrige wendet sich das Volk jedoch gegen ihn. In einem Tumult stirbt Rienzi im Flammenmeer des von den Aufständischen entzündeten Kapitols.',
        ],
      },
      {
        heading: 'Transitions (1972)',
        subheading: 'Henk Badings (1907–1987)',
        body: [
          'Das Werk Transitions entstammt der Feder des 1907 geborenen Henk Badings, der seinen Ruhm als einer der bekanntesten zeitgenössischen holländischen Komponisten durch die große Anzahl sowie die enorme Bandbreite und Innovation seiner Werke begründete.',
          'Thema des Werkes sind die spannungsvollen Wechsel und Übergänge, die durch die kontrastreiche Verwendung verschiedener musikalischer Parameter entstehen, beispielsweise hoch-tief, laut-leise, schnell-langsam. So formen sich Konflikte zwischen den tiefen Registern, mit ihrem geradezu grimmigen Charakter und den hohen Instrumenten mit ihrem hellen, glitzernden Klang. Daraus bildet sich dramatische Spannung zwischen den zwei gegensätzlichen Klangwelten. Letztlich mündet diese in eine mildere Stimmung, die nach und nach ihre Aggressivität verliert und schließlich in einer strahlenden, angenehm tönenden Weise endet.',
        ],
      },
      {
        heading: 'Vasa (1999)',
        subheading: 'José Suñer Oriola (*1964)',
        body: [
          'Der 1964 geborene spanische Komponist José Suñer Oriola widmete sein Werk Vasa seiner Tochter Iris. Es beschreibt Eindrücke eines Besuchs des bekannten Vasa-Museums in Stockholm. In diesem Museum ist das legendäre Kriegsschiff der königlichen Flotte Gustav Adolfs II. Vasa ausgestellt. Wegen einer Fehlkonstruktion sank das Schiff tragischer Weise bereits bei seiner Jungfernfahrt 1628 und riss viele Menschen mit in den Tod.',
          'Nach seiner Bergung im Jahr 1961 wurde es aufwendig konserviert und bezog 1990 das eigens errichtete Vasa-Museum, mittlerweile das meistbesuchte Museum in Skandinavien. Die große Faszination, die den Museumsbesucher in ihren Bann zieht, ist begründet durch die besondere Atmosphäre des gedämpften Lichtes und der direkten Nähe zu dem auf wundersame Weise beinahe vollständig erhaltenen Schiff.',
        ],
      },
      {
        heading: 'Terra Australis (2008)',
        subheading: 'Thorsten Wollmann (*1966)',
        body: [
          'Der in Asien lebende zeitgenössische Komponist Thorsten Wollmann komponierte Terra Australis als Auftragswerk des Landesblasorchesters anlässlich seines dreißigjährigen Bestehens im Jahre 2008.',
          'Wollmann widmet der Einzigartigkeit des australischen Kontinents drei Sätze. In Rainforest schildert der Komponist die unheilschwangere Atmosphäre und seine Anspannung beim Wandern durch die üppige Vegetation des tasmanischen Regenwaldes während der Regen durch die großen Baumfarne fällt.',
          'Der zweite Satz Outback beschreibt die gleichnamige große Wüste im Landesinneren. In dieser flirrenden Hitze und der zu Dünen aufgetürmten roten Erde treffen sich die Aborigines um ihre kultischen Rituale zu begehen. Diese australischen Ureinwohner verwenden dazu das Didgeridoo, eines der ältesten Instrumente der Welt.',
          'Der dritte Satz vertont das Great Barrier Reef, das größte und beeindruckendste Korallenriff der Erde. Vor dem geistigen Auge des Zuhörers entsteht das tropische Paradies einer farbigen, lebendigen und faszinierenden Unterwasserwelt.',
        ],
      },
      {
        heading: 'Frank Heinkel, Didgeridoo',
        body: [
          'Das Didgeridoo ist ein Blas-Rhythmusinstrument und tief verwurzelt in der Jahrtausende alten Kultur der Ureinwohner im Norden Australiens.',
          'Frank Heinkel benutzt beim Spiel sein eigenes Gefühl und versteht das Didgeridoo dabei als Ausdrucksmittel. Frank erlernte das Didgeridoospiel autodidaktisch, veröffentlichte in seiner beinahe zwanzigjährigen Karriere vier CDs und tritt international auf verschiedensten Bühnen auf.',
        ],
      },
      {
        heading: 'Cap Kennedy (1970)',
        subheading: 'Serge Lancen (1922–2005)',
        body: [
          'Der 1922 geborene französische Komponist Serge Lancen wurde zu seinem Werk Cap Kennedy durch das Apolloprojekt der USA inspiriert. Es ist benannt nach der amerikanischen Raumstation in Florida, die seit 1973 in Cape Canaveral umbenannt wurde.',
          'Die erfolgreiche Raumfahrt, insbesondere die erste Mondlandung, regte ihn dazu an, eine Klangschilderung dieser Reise zum Mond zu komponieren.',
          'Der Zuhörer durchlebt den Start der Rakete, den Eintritt in die Schwerelosigkeit, den Blick auf das majestätische Panorama des Weltalls, die Euphorie bei Erreichen des Ziels und die maßlose Freude über die geglückte Landung.',
        ],
      },
      {
        heading: 'On the Town (1944) – Times Square',
        subheading: 'Leonard Bernstein (1918–1990)',
        body: [
          'Der 1918 geborene Dirigent Leonard Bernstein erlangte auch als Komponist mit Werken wie West Side Story und Candide Weltruhm. Schon sein erstes Musical On the Town, das er bereits im Alter von 26 Jahren schrieb, feierte am Broadway mit 436 Aufführungen große Erfolge.',
          'Basierend auf seiner Ballettmusik zu Fancy Free schildert es den Landurlaub dreier Matrosen, die vor dem Hintergrund des Zweiten Weltkriegs ihren 24-stündigen Aufenthalt in New York nutzen wollen, sich zu amüsieren. Der Times Square bietet hierfür den perfekten Ausgangspunkt.',
          'Von den Drei Tanzepisoden aus On the Town hat das LBO nur den 3. Satz Times Square auf die CD eingespielt.',
        ],
      },
    ],
  },
  {
    slug: 'gelb',
    title: 'Gelb',
    conductor: 'Isabelle Ruf-Weber',
    price: '15 €',
    cover: gelb,
    tracks: [
      'Machu Picchu – City in the Sky (2005): The mystery of the hidden sun temple – Satoshi Yagisawa',
      'Concerto Fantastique für Altsaxophon und Blasorchester – Yasuhide Ito, Solistin: Tanja Heinkel, Alt-Saxophon',
      'Il Cantico (2005) – Oliver Waespi',
      'Clarinova – Konzert für Klarinettenquintett und Blasorchester (1999) – Franz Cibulka, Solisten: Claríssono',
      '„The Gum-Suckers“ March (1942 für Blasorchester arrangiert) – Percy Aldridge Grainger',
    ],
    notes: [
      {
        body: [
          'Gelb steht für Energie, Dynamik, Wandlung, Optimismus und Freude. Eigenschaften, die die Musiker des LBOs immer wieder verkörpern. Genau mit diesem Enthusiasmus wurden auch die Werke auf dieser CD eingespielt.',
        ],
      },
      {
        heading: 'Machu Picchu – City in the Sky (2005)',
        subheading: 'Satoshi Yagisawa',
        body: [
          'Der 1975 geborene japanische Komponist studierte Trompete und Komposition und veröffentlichte bereits zahlreiche Werke für unterschiedliche Besetzungen, in denen er häufig die Natur oder Altertümer beschreibt.',
          'Dieses farbenprächtige Werk „Machu Picchu“ gewährt dem Zuhörer einen Blick auf das glanzvolle Reich der Inkas und dessen gewaltsamen Niedergang im 16. Jahrhundert.',
          'Am Beispiel der schimmernden, goldenen Stadt Cuzco, dem kulturellen Zentrum der Inkas in den südamerikanischen Anden, erhält der Zuhörer einen Eindruck vom Glanz dieser Hochkultur. Umso betroffener ist man ob der sinnlosen Gewalt der spanischen Eroberer unter Francisco Pizarro, die die Stadt und ihr höchstes Heiligtum, den Sonnentempel, zerstören. Das gesamte Reich der Inka liegt in Trümmern, lediglich die versteckt in den Bergen liegende Stadt Machu Picchu bleibt den Eroberern verborgen. Entvölkert und verlassen gerät sie einige Jahrhunderte in Vergessenheit.',
          'Die Ergriffenheit der Entdecker, denen sich der Blick auf die prachtvolle Ruinenstadt eröffnet, lässt sich anhand der erhabenen Klänge nachempfinden. Gleich einer Wiederauferstehung zeigt sich die Inka-Stadt aus den sich lichtenden Wolken im Morgengrauen.',
        ],
      },
      {
        heading: 'Concerto Fantastique für Altsaxophon und Blasorchester (1983)',
        subheading: 'Yasuhide Ito',
        body: [
          'Yasuhide Ito wurde 1960 in Japan geboren. Er graduierte an der Nationalen Kunstakademie in Tokyo in Komposition. Er ist ein gefragter Pianist und ein vielseitiger Komponist mit umfangreichem Œuvre.',
          'Das Concerto Fantastique wurde vom Konzertmeister des Tokyo Kosei Wind Orchestra, Nobuya Sugawa, in Auftrag gegeben und 1983 von Sugawa und der Kita High School Band unter der Leitung des Komponisten uraufgeführt.',
          'Die einleitende Perkussionspassage führt direkt in eine Kadenz des Saxophons, in welcher die Solistin mit ihren technischen Fähigkeiten brillieren kann. Während die Kadenz zu einem Gipfel aufsteigt, kommt das Orchester zu seinem ersten dynamischen Einsatz. Im Kontrast der rhythmisierten Ensemblebegleitung und den deutlich gezeichneten Klängen des Saxophons gelangt die Einleitung zu einem ersten Höhepunkt.',
          'Auf eine kurze Reprise des ruhigen Holzbläser-Abschnitts folgt eine kontrastreiche, durch rhythmische Elemente geprägte Sequenz, in welcher das Solo-Saxophon teilweise improvisatorische Freiheiten ausleben kann. Der anschließende Schlussteil, der Jazzelemente enthält, mündet in eine Kadenz der Solistin, die von Perkussionsinstrumenten in der Art der japanischen Musik improvisierend begleitet wird.',
        ],
      },
      {
        heading: 'Solistin: Tanja Heinkel',
        body: [
          'Das Landesblasorchester Baden-Württemberg freut sich, das Concerto Fantastique mit Tanja Heinkel aufnehmen zu können. Die langjährige Musikerin des Landesblasorchesters stammt aus Dettingen/Erms. Tanja Heinkel erhielt ihr Lehrdiplom für Saxophon an der Musikhochschule Freiburg i. Br. und wechselte für ihre künstlerische Ausbildung in die Klasse von Prof. Daniel Gauthier an die Dortmunder Hochschule für Musik. Ihre Studien vertiefte sie durch den Besuch zahlreicher Meisterkurse.',
          'Sie wirkte bei unterschiedlichsten CD- und Fernsehaufnahmen mit und konzertierte mit anerkannten Orchestern wie dem Mariinski-Theater St. Petersburg und beim Schleswig-Holstein Musik Festival.',
          'Kammermusik ist ein weiterer Schwerpunkt des musikalischen Wirkens von Tanja Heinkel. So ist sie u. a. Mitglied des Ardey-Saxophonquartetts und konzertiert regelmäßig mit Klavier und anderen Kammermusikensembles.',
          'Neben den Tätigkeiten als freischaffende Musikerin unterrichtet Tanja Heinkel an der Musikschule Kirchheim unter Teck und wird zu den verschiedenen Lehrgängen des Blasmusikverbandes Baden-Württemberg als Dozentin eingeladen.',
        ],
      },
      {
        heading: 'Il Cantico (2005)',
        subheading: 'Oliver Waespi',
        body: [
          'Oliver Waespi, der 1971 in Zürich geboren wurde, absolvierte ein Studium an der Musikhochschule Zürich. Neben seinem Hauptfach Komposition galt sein Interesse unter anderem auch der Orchesterleitung. Hierzu besuchte er Meisterkurse bei Alfred Reed und Klaus Huber für Komposition sowie Sylvia Caduff für Dirigieren. Verschiedene seiner Werke wurden mit Kompositionspreisen ausgezeichnet, zudem ist Oliver Waespi regelmäßig als Experte bei Musikwettbewerben tätig.',
          'Das Werk „Il Cantico“ ist im Auftrag der Stadtharmonie Zürich Oerlikon-Seebach für die WASBE Weltkonferenz 2005 in Singapur entstanden.',
          '„Il Cantico“ wurde durch den Sonnengesang des heiligen Franz von Assisi inspiriert, dem „Cantico di Frate Sole“. In diesem berühmten mystischen Gedicht dankt der Dichter der Gottheit für die Schöpfung der Natur, der Sonne, der Erde und Lebewesen.',
          'Das Werk „Il Cantico“ konzentriert sich auf einzelne Passagen aus dem Sonnengesang. Ein langsames, traumartiges Lied der Flöte führt allmählich zum Erscheinen der Sonne, deren lichtvolle Energie durch eine helle, kraftvolle Musik in den Blechbläsern ausgedrückt wird. Gleichsam als Spiegel der Sonne werden in einem weiteren Abschnitt der Mond, sora luna, und die nächtlichen Sterne, le stelle, besungen. Hier wird die Musik nachdenklicher, in sich gekehrt, führt später zu einem leuchtenden Klangfeld der Holzbläser und mündet schließlich in ein Hornsolo. Noch in die langsame Musik hinein blitzen Akkordfetzen auf, die den raschen letzten Teil ankündigen.',
          'Im Mittelpunkt dieses Abschnitts steht zunächst das frate focu, das Feuer, das die Nacht erhellt, gleichsam als irdischer Stellvertreter der Sonne. Am Ende des Werks verbindet sich die Sonnenmusik aus dem ersten Teil mit der Feuermusik.',
          'Neben diesen Bildern liegt „Il Cantico“ auch eine rein musikalische Erzählung zugrunde. Fast die gesamte Musik entwickelt sich aus einer Keimzelle von vier Tönen, die gleich zu Beginn in den Hörnern und der Flöte erklingen. Insofern ist das Werk über weite Strecken monothematisch und als eine Art sinfonische Metamorphose strukturiert.',
        ],
      },
      {
        heading: 'Clarinova – Konzert für Klarinettenquintett und Blasorchester (1999)',
        subheading: 'Franz Cibulka',
        body: [
          'Der 1946 geborene österreichische Komponist Franz Cibulka war Professor für Klarinette, Kammermusik und Musiktheorie am Konservatorium in Graz und arbeitete seit 2002 als freischaffender Komponist. Viele seiner mehr als 300 Werke umfassenden Veröffentlichungen für unterschiedliche Besetzungen entstanden auf Wunsch und in Zusammenarbeit mit verschiedenen Musikern und Ensembles. So entstand auch das Stück Clarinova auf Anregung des bekannten Ensembles Vienna Clarinet Connection, von dem es 1999 bei der Mid Europe uraufgeführt wurde.',
          'Das Landesblasorchester schätzt sich glücklich, das selten gespielte Werk mit dem Ensemble Claríssono aufnehmen zu dürfen, das zum größten Teil aus aktiven oder ehemaligen Musikern des Landesblasorchesters besteht.',
          'Im ersten Satz werden in einem Allegro vivace das Orchester sowie die Solisten vorgestellt. Nach dem spannungsgeladenen Beginn des Orchesters kommen die Solisten in ihrer ganzen Virtuosität zur Geltung. Das mitreißende Pulsieren steigert sich fortwährend und mündet letztendlich in einem drangvollen Orchestertutti.',
          'Im Andante des zweiten Satzes äußert sich die allgegenwärtige Aufbruchstimmung in einer lyrischen Melodik, die mal schlicht, mal schillernd untermalt wird.',
          'Wechselhafte Rhythmik und häufige Taktwechsel einer eingängigen Melodie verleihen dem rondoartigen Presto des dritten Satzes quirlige Lebendigkeit.',
        ],
      },
      {
        heading: '„The Gum-Suckers“ March (arr. 1942)',
        subheading: 'Percy Aldridge Grainger',
        body: [
          'Der australische Komponist Percy Aldridge Grainger (1882–1961) war eine der außergewöhnlichsten musikalischen Persönlichkeiten seiner Zeit. Grainger, der nach einem Studium in Deutschland zunächst seine Karriere als Konzertpianist begann, emigrierte zu Beginn des ersten Weltkrieges nach Amerika. Dort trat er in eine Militärkapelle ein, in der er sowohl Saxophon als auch Oboe spielte und dadurch die Besonderheiten des Blasorchesters näher kennen lernte.',
          'Während seiner Tourneen und Wanderjahre sammelte der Musiker ständig neue musikalische Eindrücke unterschiedlichster Kulturen und entwickelte dabei ein besonderes Interesse für Volkslieder verschiedenster Länder, die er auf dem Fahrrad mit dem Wachszylinder (Phonograph) festhielt. Viele dieser über 500 Volkslieder arrangierte er zunächst in Klavierfassung und dann für Blasorchester.',
          'In seinen Kompositionen übersetzt er die musikalische Schlichtheit der Volkslieder, Reiseeindrücke und Naturerfahrungen in ein musikalisches Hörerlebnis. Beispiel hierfür ist der „Gum-Suckers March“, der den Zuhörer in seinen Heimatstaat Victoria nach Australien führt.',
          'Der „Gum-Suckers“ Marsch war ursprünglich Teil der Suite „In A Nutshell“ für sinfonisches Orchester. Er wurde 1942 von Grainger für Blasorchester arrangiert und war somit der einzige Satz der Suite, der für Blasorchester vom Komponisten selbst bearbeitet wurde.',
        ],
      },
    ],
  },
  {
    slug: 'gilgamesh',
    title: 'Gilgamesh',
    conductor: 'Isabelle Ruf-Weber',
    year: '2006',
    price: '15 €',
    cover: gilgamesh,
    tracks: [
      'Das Gilgamesh Epos – Sprecher: Stefan Müller-Ruppert',
      'Symphony Nr. 1 „Gilgamesh“ – Bert Appermont',
      'Konzert für Trompete und Orchester – A. Arutjunjan / arr. G. M. Duker, Solist: Jens Böcherer',
      'Variations on a Pentatonic Theme – Rob Goorhuis',
    ],
  },
  {
    slug: 'ross-roy',
    title: 'Ross Roy',
    conductor: 'Jan van der Roost, Jacob de Haan',
    year: '1998',
    price: '10 €',
    cover: rossRoy,
    tracks: [
      'Ross Roy (Overture for Band) – Jacob de Haan',
      'Rosamunde Ouvertüre – Franz Schubert, arr. Tohru Takahashi',
      'Old And Wise – E. Woolfsen & A. Parson, arr. Larry Foster',
      'Omisoka (New Year Eve) – Itaru Sakai',
      'The Millennium Song – Kees Vlak',
      'Souvenirs d’Interlaken – André Waignein',
      'Samba de Janeiro – A. Moreira / G. Engels / R. Zenker, arr. André Waignein',
      'Elton John In Concert – arr. André Waignein (Nikita, Blue Eyes, Don’t Go Breaking My Heart)',
      'Epitaph (A Tribute To Gustav Mahler) – Piet Swerts',
      'Et In Terra Pax – Jan van der Roost',
    ],
  },
  {
    slug: 'wasbe-2007',
    title: 'WASBE 2007',
    conductor: 'Isabelle Ruf-Weber',
    price: '10 €',
    meta: ['Live-Konzertmitschnitt'],
    cover: wasbe2007,
    tracks: [
      'Il Cantico – Oliver Waespi',
      'Die Tränen des Phoenix – Thomas Krause',
      'Concerto Fantastique für Altsaxophon und Blasorchester – Yasuhide Ito, Solistin: Tanja Heinkel, Saxophon',
      'The Sword and the Crown – Edward Gregson',
      'Façade – William Walton / arr. Robert O’Brien (Popular Song / Yodelling Song / Polka)',
      'Nimrod – Edward Elgar / arr. Alfred Reed',
      'Polka aus dem Ballett „Solitaire“ – Malcolm Arnold / arr. John Paynter',
    ],
  },
  {
    slug: 'die-druiden',
    title: 'Die Druiden',
    conductor: 'Harry D. Bath',
    year: '1996',
    price: '10 €',
    cover: druiden,
    tracks: [
      'Music for a Festival – Philip Sparke',
      'Symphonic Variations for Euphonium – James Curnow, Solist: Steven Mead, Euphonium',
      'Die Druiden – Rolf Rudin (Eine mythische Erinnerung, Auftragskomposition für das LBO, 1993/94)',
      'Armenian Rhapsodie – Alexander Comitas (Pflichtstück beim Wettbewerb 1995, Kerkrade)',
      'Commando March – Samuel Barber',
    ],
  },
  {
    slug: 'cartoon',
    title: 'Cartoon',
    conductor: 'Harry D. Bath',
    year: '1996',
    price: '10 €',
    cover: cartoon,
    tracks: [
      'Drei lustige Märsche – Ernst Krenek',
      'Irish tune from County Derry – Percy Aldridge Grainger',
      'Gavotte – Hans Gál',
      'Symphonie Nr. 3, 2. Satz – Alfred Reed',
      'Einzugsmarsch der Bojaren – Johan Halvorsen',
      'Serenade – Derek Bourgeois',
      'Commando March – Samuel Barber',
      'Ye Banks and Braes o’Bonnie Doon – Percy Aldridge Grainger',
      'Pas Redoublé – Camille Saint-Saëns',
      'Prinzessin Amaranth – Paul Kühmstedt',
      'Crescendo – Klaus-Peter Bruchmann',
      'Music for a Festival, 3. Satz – Philip Sparke',
    ],
    notes: [
      {
        body: [
          'Der aus Portsmouth, England, stammende Kapellmeister Harry D. Bath leitete das Landesblasorchester von 1986 bis 1997 und hat ihm bei zahlreichen Konzerten, Wettbewerben und Tourneen im In- und Ausland zu hohem Ansehen verholfen. Die CD „Cartoon“ bietet einen unterhaltsamen Querschnitt durch das Repertoire des Landesblasorchesters und eine Auswahl kleiner liebenswerter Stücke, die man auf Konzertprogrammen selten vorfindet.',
        ],
      },
    ],
  },
  {
    slug: '20-jahre-lbo',
    title: '20 Jahre LBO',
    conductor: 'Walter Ratzek',
    year: '1999',
    price: '10 €',
    cover: jahre20,
    tracks: [
      'Symphony No. XV (Conflicts and Confluences) – Henk Badings',
      'Nocturne op. 9, Nr. 2 – Alexander Skrjabin',
      'Danse Funambulesque – Jules Strens',
      'Dance Movements – Philip Sparke',
      'Divertimento – Leonard Bernstein',
    ],
  },
  {
    slug: 'collections',
    title: 'Collections',
    conductor: 'Johan de Meij, Walter Ratzek',
    year: '2002',
    price: '10 €',
    cover: collections,
    tracks: [
      'Venetian Collection – Johan de Meij',
      'Alborada del gracioso – Maurice Ravel',
      'Atmospheres – James Golland',
      'Pavane – Maurice Ravel, Solist: Lars Firchau, Horn',
    ],
  },
  {
    slug: 'donaueschingen-1926',
    title: 'Donaueschingen 1926',
    conductor: 'Harry D. Bath',
    price: '15 €',
    cover: donaueschingen,
    tracks: [
      'Drei lustige Märsche, op. 44 – Ernst Krenek',
      'Spiel für Militärorchester (später: Spiel für Blasorchester) – Ernst Toch',
      'Kleine Serenade für Militärorchester – Ernst Pepping',
      'Konzertmusik für Blasorchester, op. 41 – Paul Hindemith',
      'Promenadenmusik für Militärorchester – Hans Gál',
    ],
    notes: [
      {
        heading: 'Donaueschingen 1926: Gebrauchsmusik für Blasorchester',
        subheading: 'von Wolfgang Suppan',
        body: [
          'In einer Phase wirtschaftlicher Depression und politischer Hoffnungslosigkeit, 1921, bot das Fürstlich-Fürstenbergische Haus in Donaueschingen einer jungen Komponistengeneration Mitteleuropas die Chance, neue Musik zu präsentieren. Paul Hindemith, der seit 1922 dem Arbeitsausschuss der „Donaueschinger Kammermusiktage“ angehörte, wollte den Auftrag in zweifacher Hinsicht erfüllen: Einmal als Suche nach neuen klanglichen Ausdrucksformen, die über Schönbergs und Hauers „Wiener Schule“ hinausführen sollten, zum anderen in der Erschließung neuer, bislang abseits stehender Gesellschaftsschichten für Neue Musik. In den zweiten Bereich fällt Hindemiths „Entdeckung“ des ländlichen und kleinstädtischen Sänger- und Amateur-Blasmusikwesens.',
          'So kam es im Verlauf der Vorbereitung des 1926er-Festes zur Idee, Komponisten einzuladen, „Gebrauchsmusik für Blasorchester einzusenden; denn was an neuer Militärmusik vorhanden ist, ist Bearbeitung, Surrogat“ (Hindemith).',
          'Hindemith selbst schrieb dafür die „Konzertmusik“, op. 41. Ernst Pepping, der „dankbar“ Hindemiths „ausgezeichneten Vorschlag“ aufgriff, sandte die „Kleine Serenade“ ein. Ernst Krenek, dem die Arbeit „viel Spaß“ bereitete, komponierte „Drei lustige Märsche“, op. 44. Von Ernst Toch kam das „Spiel für Militärorchester“ und von Hans Gál die „Promenadenmusik“. Am 24. Juli 1926 fanden unter der Leitung von Hermann Scherchen und Heinrich Burkard die Uraufführungen der Werke von Krenek, Pepping, Toch und Hindemith statt.',
          'So enttäuschend es für Initiatoren wie Komponisten gewesen sein muss, dass die Adressaten dieser Musik, die Blasmusiker des südwestdeutschen Raumes, dem Donaueschinger Fest ferngeblieben waren – als so bedeutungsvoll stellt sich der 1926er-Anstoß heute dar. Für Hindemith, Krenek und Toch erwiesen sich die 1926er-Blasorchesterwerke geradezu als Einstiegshilfe in die USA-Musikszene, und alle drei schufen in den Folgejahren weitere Auftragswerke für amerikanische Blasorchester.',
          'Was 1926 als „Gebrauchsmusik“ verstanden wurde, hält heute in Blasmusikkreisen sowohl Amerikas wie Europas und Japans artifiziellen Ansprüchen stand. Auch darin zeigt sich, wie fortschrittlich, wie weit seiner Zeit voraus Hindemith agierte. Und obgleich die Verantwortlichen des Blasmusikwesens der zwanziger Jahre abseits standen, so darf man doch von einem Wendepunkt sprechen, der die gesellschaftliche Aufwertung des Blasmusikwesens in Mitteleuropa einleitete.',
        ],
      },
    ],
  },
  {
    slug: 'time-to-say-goodbye',
    title: 'Time to say goodbye',
    conductor: 'Harry D. Bath',
    year: '1996',
    price: '10 €',
    cover: goodbye,
    tracks: [
      'Jacob’s Ladder To A Crescent – Toshio Mashima',
      'Romanza Siciliana – C. M. v. Weber, arr. Wil van der Beek, Solistin: Nicola Li, Flöte',
      'Festmarsch op. 452 – Johann Strauss, arr. Michael Friedmann',
      'For The Next Thousand – Otto M. Schwarz',
      'Wiener Melange – Johann Strauss, arr. Rita Defoort',
      'Trompetenteufel – Peter Fischer, Solisten: Thomas Ratzek, Wolfgang Steber, Bernd Hess, Trompete',
      'Antzell – Rita Defoort',
      'La Cittadella – Kees Vlak',
      'Xylomania – Wim Laseroms, Solistin: Christa Tenbusch, Xylophon',
    ],
  },
  {
    slug: 'landesblasorchester-1991',
    title: 'Landesblasorchester Baden-Württemberg',
    conductor: 'Harry D. Bath',
    year: '1991',
    price: '10 €',
    cover: lbo1991,
    tracks: [
      'Incantation and Dance – John Barnes Chance',
      'Einzugsmarsch der Bojaren – Johan Halvorsen (Arr. Clifford P. Barnes)',
      'Konzertstück – Felix Mendelssohn Bartholdy (Arr. Harry Gee), Solisten: Thomas Krause, Klarinette – Brigitte Graf, Bassetthorn',
      'Serenade – Derek Bourgeois',
      'Schwabenstreiche – Adolf Götz (Arr. Paul Kühmstedt)',
    ],
  },
  {
    slug: 'salute-to-the-wolves',
    title: 'Salute to the Wolves',
    conductor: 'Harry D. Bath',
    year: '1993',
    price: '10 €',
    cover: wolves,
    tracks: [
      'Symphonie No. 3 – Alfred Reed',
      'Mytho-Logica – Karl-Heinz Köper, Solist: Claus Weisserth, Pauke',
      'Salute to the lone Wolves – Peter Jona Korn',
      'Prinzessin Amaranth – Paul Kühmstedt',
      'Crescendo – Klaus-Peter Bruchmann',
    ],
  },
  {
    slug: 'wmc-2009',
    title: 'WMC 2009',
    conductor: 'Isabelle Ruf-Weber',
    price: '15 €',
    meta: ['Kerkrade, 25. Juli 2009'],
    cover: wmc2009,
    tracks: [
      'Vientos… – Francisco Tamarit Fayos (I. que fluyen del caos / II. que acarician mis recuerdos / III. que pregonan el nombre de Bach)',
      'Vetrate di Chiesa – Ottorino Respighi, instr. José Schyns (1. La Fuga in Egitto / 2. San Michele Arcangelo)',
      'Variazioni Sinfoniche su „Non Potho Reposare“ – Hardy Mertens',
    ],
  },
];
