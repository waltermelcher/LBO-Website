import type { APIRoute } from 'astro';
import { isProductionHost } from '../consts';

/**
 * robots.txt wird beim Build automatisch aus der konfigurierten Domain abgeleitet:
 * – Produktions-Domain  → Indexierung erlaubt + Sitemap
 * – jede andere Domain  → komplette Sperre (Staging/Vorschau)
 */
export const GET: APIRoute = ({ site }) => {
  const body = isProductionHost(site)
    ? `User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`
    : `# Vorschau-/Staging-Umgebung – keine Indexierung\nUser-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
