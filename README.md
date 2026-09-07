# LBO-Website

**Live: https://waltermelcher.github.io/LBO-Website/**

Relaunch der Website des **Landesblasorchesters Baden-Württemberg** – gebaut mit [Astro](https://astro.build).

| | |
| --- | --- |
| Vorschau (GitHub Pages) | https://waltermelcher.github.io/LBO-Website/ |
| Produktion (geplant) | https://www.landesblasorchester.de |
| Bisherige Website | https://www.landesblasorchester.de |

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statischer Build nach dist/
npm run preview
```

## Aufbau

```
src/
  assets/     Bilder, Logo (SVG), CD-Cover, Partner-Logos
  components/ Header, Footer, Karten, Listen, Artikel-Layout
  data/       Konzerte, News, Diskografie
  layouts/    BaseLayout (SEO, Fonts, Reveal-Animation)
  pages/      eine Datei je Seite + robots.txt-Endpoint
  styles/     global.css (Design-Tokens nach CD Manual 2.0)
public/       Favicons, Downloads
```

## Design

Grundlage ist das *LBO Corporate Design Manual 2.0*:

| Rolle | Farbe |
| --- | --- |
| Hintergrund | `#f3ede3` (leichtes Beige) |
| Typo | `#191715` |
| LBO-Rot dunkel | `#631f31` |
| LBO-Rot mittel | `#a34e61` |
| LBO-Rot hell | `#b47a88` |

Schrift: **Source Sans 3** (selbst gehostet) als Web-Äquivalent zur Hausschrift
Myriad Pro. Das Logo liegt in der überarbeiteten, monochromen Fassung als SVG
mit `fill: currentColor` vor und funktioniert dadurch auf hellem wie dunklem Grund.

## Indexierung (Staging vs. Produktion)

Indexiert wird **nur** auf den Hosts in `PRODUCTION_HOSTS` (`src/consts.ts`):

* Der Build leitet aus `site` (bzw. `SITE_URL`) ab, ob es sich um die
  Produktions-Domain handelt. Wenn nicht, erhält jede Seite
  `<meta name="robots" content="noindex, nofollow">` und `robots.txt` liefert
  `Disallow: /`.
* Zusätzlich prüft ein Inline-Skript zur Laufzeit den tatsächlichen Host und
  setzt bzw. entfernt das noindex-Tag entsprechend. Damit bleibt auch eine
  Vorschau-Domain gesperrt, die mit einem Produktions-Build ausgeliefert wird.
* Die Sitemap wird ausschließlich für die Produktions-Domain erzeugt.

Ein manuelles Umschalten ist nicht nötig: Sobald die Seite unter
`www.landesblasorchester.de` läuft (Custom Domain in den GitHub-Pages-Einstellungen),
schaltet sich die Indexierung von selbst frei.

## Deployment

Jeder Push auf `main` baut die Seite über `.github/workflows/deploy.yml` und
veröffentlicht sie nach GitHub Pages:

**https://waltermelcher.github.io/LBO-Website/**

`SITE_URL` und `BASE_PATH` kommen dabei automatisch von `actions/configure-pages`.
Solange das die `github.io`-Adresse ist, ist die Seite auf noindex; sobald in den
GitHub-Pages-Einstellungen `www.landesblasorchester.de` als Custom Domain
eingetragen ist, schaltet sich die Indexierung von selbst frei
(siehe [Indexierung](#indexierung-staging-vs-produktion)).

### Seitenübersicht

| Seite | Vorschau |
| --- | --- |
| Startseite | https://waltermelcher.github.io/LBO-Website/ |
| Konzerttermine | https://waltermelcher.github.io/LBO-Website/konzerttermine/ |
| Konzertprogramm | https://waltermelcher.github.io/LBO-Website/programm/ |
| CDs und DVDs | https://waltermelcher.github.io/LBO-Website/cds/ |
| Presse | https://waltermelcher.github.io/LBO-Website/presse/ |
| Über uns | https://waltermelcher.github.io/LBO-Website/ueber-uns/ |
| Künstlerische Leitung | https://waltermelcher.github.io/LBO-Website/kuenstlerische-leitung/ |
| Vorstand | https://waltermelcher.github.io/LBO-Website/vorstand/ |
| Mitglied werden | https://waltermelcher.github.io/LBO-Website/mitglied-werden/ |
| LBO-hautnah | https://waltermelcher.github.io/LBO-Website/lbo-hautnah/ |
| Lehrkonzert | https://waltermelcher.github.io/LBO-Website/lehrkonzert/ |
| Förderverein | https://waltermelcher.github.io/LBO-Website/foerderverein/ |
| Kontakt | https://waltermelcher.github.io/LBO-Website/kontakt/ |
| Aktuelles | https://waltermelcher.github.io/LBO-Website/news/ |
| Impressum | https://waltermelcher.github.io/LBO-Website/impressum/ |
| Datenschutzerklärung | https://waltermelcher.github.io/LBO-Website/datenschutzerklaerung/ |
| Haftung | https://waltermelcher.github.io/LBO-Website/haftung/ |
