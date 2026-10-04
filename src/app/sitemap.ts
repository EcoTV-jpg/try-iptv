import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';
import { INDEXABLE_ROUTES } from '@/lib/site-routes';

const baseUrl = SITE_URL;

/**
 * Canonical sitemap for https://www.tryiptv.com
 *
 * Only includes:
 * - Approved canonical URLs
 * - Pages that return HTTP 200
 * - Pages with real indexable content (indexable: true in site-routes.ts)
 *
 * Excluded:
 * - noindex pages (indexable: false)
 * - redirects
 * - 404 / 410 pages
 * - API endpoints
 * - /thank-you (noindex technical page)
 *
 * Source of truth: src/lib/site-routes.ts
 * Do NOT add URLs here manually — update site-routes.ts instead.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return INDEXABLE_ROUTES.map((route) => {
    let changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly';
    let priority = 0.6;

    if (route.path === '/') {
      changeFrequency = 'daily';
      priority = 1.0;
    } else if (route.path === '/pricing' || route.path === '/iptv-free-trial') {
      changeFrequency = 'weekly';
      priority = 0.9;
    } else if (route.section === 'devices') {
      changeFrequency = 'weekly';
      priority = route.path === '/devices' ? 0.85 : 0.8;
    } else if (route.section === 'players') {
      changeFrequency = 'weekly';
      priority = route.path === '/players' ? 0.85 : 0.8;
    } else if (route.path === '/contact-us' || route.path === '/faq') {
      changeFrequency = 'monthly';
      priority = 0.7;
    }

    return {
      url: route.path === '/' ? baseUrl : `${baseUrl}${route.path}`,
      lastModified: route.lastModified ? new Date(route.lastModified) : undefined,
      changeFrequency,
      priority,
    };
  });
}
