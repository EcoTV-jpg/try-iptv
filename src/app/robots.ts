import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/**
 * Robots.txt configuration for https://www.tryiptv.com
 *
 * /api/og is allowed explicitly because it sits under the disallowed /api/
 * prefix and serves the default share image. Search crawlers are listed
 * explicitly because a crawler with its own group ignores the '*' group.
 * GPTBot (model training) is intentionally blocked, except for the AI
 * discovery files.
 *
 * NOTE: Noindex pages are NOT disallowed here. Robots.txt controls
 * crawlability; the <meta robots> tag controls indexability.
 */
const allow = ['/', '/api/og'];
const disallow = ['/api/'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow, disallow },
      { userAgent: ['Googlebot', 'Bingbot', 'OAI-SearchBot', 'PerplexityBot'], allow, disallow },
      {
        userAgent: 'GPTBot',
        allow: ['/llms.txt', '/llms-full.txt', '/ai.txt'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
