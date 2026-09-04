import type { MiddlewareHandler } from 'astro';
import { sideBearing } from './lib/side-bearings';

/**
 * Optischer Randausgleich – wird beim Bauen der Seite angewendet.
 *
 * Überschrift und Fließtext stehen in derselben Box, sehen aber nicht bündig
 * aus, weil jeder Buchstabe eine unterschiedlich große Vorbreite hat, die mit
 * der Schriftgröße wächst. Hier bekommt jeder Textblock einen negativen
 * Außenabstand in Höhe der Vorbreite seines ersten Zeichens – angegeben in em,
 * damit der Wert bei jeder Schriftgröße stimmt.
 *
 * Das Ergebnis steht fertig im HTML. Zur Laufzeit läuft dafür kein Skript.
 */

/** Blöcke, deren Schrift links am Raster anliegen soll. */
const BLOCK = /<(h1|h2|h3|h4|p|li)(\s[^>]*)?>([\s\S]*?)<\/\1>/gi;

/** Zu kleine Werte lohnen den Aufwand nicht und blähen das HTML nur auf. */
const SCHWELLE = 0.008;

const ersterBuchstabe = (html: string) =>
  html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, 'x')
    .trim()
    .charAt(0);

function ausgleichen(html: string): string {
  const start = html.indexOf('<main');
  const ende = html.indexOf('</main>');
  if (start < 0 || ende < 0) return html;

  const vorher = html.slice(0, start);
  const main = html.slice(start, ende);
  const nachher = html.slice(ende);

  const neu = main.replace(BLOCK, (treffer, tag, attrs = '', inhalt) => {
    const a: string = attrs || '';
    // bereits gesetzte Ausrichtung oder eigenes style-Attribut nicht anfassen
    if (/\bstyle=/.test(a)) return treffer;
    // Blöcke, die nur einen Button enthalten, würden sonst mitwandern
    if (/class="[^"]*\bbtn\b/.test(inhalt)) return treffer;

    const b = sideBearing(ersterBuchstabe(inhalt));
    if (!(b > SCHWELLE)) return treffer;

    return `<${tag}${a} style="margin-left:-${b}em">${inhalt}</${tag}>`;
  });

  return vorher + neu + nachher;
}

export const onRequest: MiddlewareHandler = async (_ctx, next) => {
  const antwort = await next();
  const typ = antwort.headers.get('content-type') ?? '';
  if (!typ.includes('text/html')) return antwort;

  const html = await antwort.text();
  return new Response(ausgleichen(html), {
    status: antwort.status,
    statusText: antwort.statusText,
    headers: antwort.headers,
  });
};
