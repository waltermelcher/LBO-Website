"""
Liest die linken Vorbreiten aller relevanten Zeichen aus der Schriftdatei aus
und schreibt sie nach src/lib/side-bearings.ts.

Nach einem Wechsel der Hausschrift einmal ausführen:
    npm run schriftmasse

Voraussetzung:  pip3 install fonttools brotli
"""
from fontTools.ttLib import TTFont
import pathlib

SCHRIFT = 'node_modules/@fontsource-variable/source-sans-3/files/source-sans-3-latin-wght-normal.woff2'
ZEICHEN = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ' 'abcdefghijklmnopqrstuvwxyz' '0123456789'
           'ÄÖÜäöüßÀÁÂÃÈÉÊÌÍÎÒÓÔÙÚÛàáâãèéêìíîòóôùúûçÇñÑ' '„“”‚‘’«»(【[{<' '–—-…§€$&@#*+')

font = TTFont(SCHRIFT)
upem, hmtx, cmap = font['head'].unitsPerEm, font['hmtx'], font.getBestCmap()

eintraege, gesehen = [], set()
for ch in ZEICHEN:
    if ch in gesehen:
        continue
    gesehen.add(ch)
    g = cmap.get(ord(ch))
    if g:
        eintraege.append((ch, round(hmtx[g][1] / upem, 4)))

zeilen, reihe = [], []
for ch, v in eintraege:
    reihe.append(f"'{ch}': {v}")
    if len(reihe) == 6:
        zeilen.append('  ' + ', '.join(reihe) + ','); reihe = []
if reihe:
    zeilen.append('  ' + ', '.join(reihe) + ',')

kopf = pathlib.Path('src/lib/side-bearings.ts').read_text(encoding='utf-8').split('export const')[0]
rumpf = ('export const SIDE_BEARINGS: Record<string, number> = {\n'
         + '\n'.join(zeilen)
         + '\n};\n\n/** Vorbreite des ersten sichtbaren Zeichens eines Textes, in em. */\n'
           'export function sideBearing(text: string): number {\n'
           '  const ch = text.trim().charAt(0);\n'
           '  return ch ? (SIDE_BEARINGS[ch] ?? 0) : 0;\n}\n')
pathlib.Path('src/lib/side-bearings.ts').write_text(kopf + rumpf, encoding='utf-8')
print(f'{len(eintraege)} Zeichen → src/lib/side-bearings.ts')
