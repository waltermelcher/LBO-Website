# LBO-Website

Relaunch der Website des **Landesblasorchesters Baden-Württemberg** – gebaut mit [Astro](https://astro.build).

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

`.github/workflows/deploy.yml` baut bei jedem Push auf `main` und veröffentlicht
nach GitHub Pages. `SITE_URL` und `BASE_PATH` kommen dabei automatisch von
`actions/configure-pages`.
