/** Baut einen Link inkl. base-Pfad (GitHub Pages: /LBO-Website). */
export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#|\/\/)/i.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/+$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}` || '/';
}

/** Ist der aktuelle Pfad (inkl. base) auf href aktiv? */
export function isActive(pathname: string, href: string): boolean {
  const target = url(href).replace(/\/+$/, '');
  const current = pathname.replace(/\/+$/, '');
  if (target === '' ) return current === '';
  return current === target;
}
