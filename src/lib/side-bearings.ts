/**
 * Linke Vorbreite (left side bearing) je Zeichen in em – ausgelesen aus
 * Source Sans 3, der Hausschrift dieser Seite.
 *
 * Die Vorbreite ist der Abstand zwischen Textkante und erstem Strich eines
 * Buchstabens. Sie wächst mit der Schriftgröße, ist aber je Buchstabe sehr
 * unterschiedlich: „H“ hat 0,100 em, „V“ nur 0,006 em. Deshalb wirken
 * Überschriften gegenüber dem Fließtext eingerückt, obwohl beide in derselben
 * Box stehen – bei 50 px sind das knapp 5 px.
 *
 * Der Ausgleich passiert beim Bauen der Seite (siehe src/middleware.ts) und
 * kostet zur Laufzeit nichts. Weil der Wert in em angegeben wird, stimmt er
 * bei jeder Schriftgröße, auch bei den fließenden clamp()-Größen.
 *
 * Neu erzeugen nach einem Schriftwechsel:
 *   npm run schriftmasse
 */
export const SIDE_BEARINGS: Record<string, number> = {
  'A': 0.01, 'B': 0.1, 'C': 0.056, 'D': 0.1, 'E': 0.1, 'F': 0.1,
  'G': 0.056, 'H': 0.1, 'I': 0.1, 'J': 0.044, 'K': 0.1, 'L': 0.1,
  'M': 0.1, 'N': 0.1, 'O': 0.056, 'P': 0.1, 'Q': 0.056, 'R': 0.1,
  'S': 0.048, 'T': 0.03, 'U': 0.098, 'V': 0.006, 'W': 0.03, 'X': 0.018,
  'Y': 0.004, 'Z': 0.052, 'a': 0.06, 'b': 0.096, 'c': 0.054, 'd': 0.054,
  'e': 0.054, 'f': 0.03, 'g': 0.054, 'h': 0.096, 'i': 0.078, 'j': -0.03,
  'k': 0.096, 'l': 0.096, 'm': 0.096, 'n': 0.096, 'o': 0.054, 'p': 0.096,
  'q': 0.054, 'r': 0.096, 's': 0.034, 't': 0.03, 'u': 0.088, 'v': 0.012,
  'w': 0.024, 'x': 0.014, 'y': 0.012, 'z': 0.026, '0': 0.05, '1': 0.086,
  '2': 0.04, '3': 0.03, '4': 0.016, '5': 0.026, '6': 0.054, '7': 0.044,
  '8': 0.04, '9': 0.044, 'Ä': 0.01, 'Ö': 0.056, 'Ü': 0.098, 'ä': 0.06,
  'ö': 0.054, 'ü': 0.088, 'ß': 0.096, 'À': 0.01, 'Á': 0.01, 'Â': 0.01,
  'Ã': 0.01, 'È': 0.1, 'É': 0.1, 'Ê': 0.1, 'Ì': -0.004, 'Í': 0.046,
  'Î': -0.034, 'Ò': 0.056, 'Ó': 0.056, 'Ô': 0.056, 'Ù': 0.098, 'Ú': 0.098,
  'Û': 0.098, 'à': 0.06, 'á': 0.06, 'â': 0.06, 'ã': 0.06, 'è': 0.054,
  'é': 0.054, 'ê': 0.054, 'ì': 0.0, 'í': 0.04, 'î': -0.04, 'ò': 0.054,
  'ó': 0.054, 'ô': 0.054, 'ù': 0.088, 'ú': 0.088, 'û': 0.088, 'ç': 0.054,
  'Ç': 0.056, 'ñ': 0.096, 'Ñ': 0.1, '„': 0.056, '“': 0.058, '”': 0.056,
  '‚': 0.056, '‘': 0.058, '’': 0.056, '«': 0.042, '»': 0.054, '(': 0.09,
  '[': 0.1, '{': 0.036, '<': 0.034, '–': 0.04, '—': 0.04, '-': 0.04,
  '…': 0.108, '§': 0.052, '€': 0.024, '$': 0.062, '&': 0.038, '@': 0.052,
  '#': 0.036, '*': 0.074, '+': 0.034,
};

/** Vorbreite des ersten sichtbaren Zeichens eines Textes, in em. */
export function sideBearing(text: string): number {
  const ch = text.trim().charAt(0);
  return ch ? (SIDE_BEARINGS[ch] ?? 0) : 0;
}
