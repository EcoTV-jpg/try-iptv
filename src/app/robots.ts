import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/**
 * Robots.txt configuration for https://www.tryiptv.com
 *
 * One rule block for every crawler. /api/og is allowed explicitly because it
 * sits under the disallowed /api/ prefix and serves the default share image.
 * GPTBot (model training) is intentionally blocked, except for the AI
 * discovery files.
 *
 * NOTE: Noindex pages are NOT disallowed here. Robots.txt controls
 * crawlability; the <meta robots> tag controls indexability.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/og'],
        disallow: ['/api/', '/admin/', '/staging/'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/llms.txt', '/llms-full.txt', '/ai.txt'],
        disallow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
