// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Produktions-Domain(s). Nur auf diesen Hosts darf die Seite indexiert werden.
 * Jede andere Domain (GitHub-Pages-Vorschau, Netlify-Preview, lokal …) wird
 * automatisch auf noindex gesetzt – ohne manuelles Umschalten.
 */
export const PRODUCTION_HOSTS = ['landesblasorchester.de', 'www.landesblasorchester.de'];

const site = process.env.SITE_URL ?? 'https://waltermelcher.github.io';
const host = new URL(site).hostname;
const isProduction = PRODUCTION_HOSTS.includes(host);

// Auf GitHub Pages liegt das Projekt unter /LBO-Website/, auf der eigenen Domain unter /
const base = process.env.BASE_PATH ?? (host.endsWith('github.io') ? '/LBO-Website' : '/');

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // Sitemap nur für die echte Produktions-Domain erzeugen
  integrations: isProduction ? [sitemap({ filter: (page) => !page.includes('/404') })] : [],
  build: { format: 'directory' },
  image: { responsiveStyles: true },
  devToolbar: { enabled: false },
});
