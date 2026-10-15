import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

/**
 * Robots.txt configuration for https://www.tryiptv.com
 *
 * Allow rules: the whole site, plus the OG image endpoint, which must be listed
 * explicitly because it sits under the disallowed /api/ prefix.
 * Disallow rules: API routes, admin, staging.
 *
 * NOTE: Noindex pages (players/*, guides/*, help/*, etc.) are NOT disallowed here.
 * Robots.txt controls crawlability; the <meta robots> tag and x-robots-tag
 * control indexability. We allow crawling of all content paths so bots can
 * discover internal links, even for pages that are temporarily noindex.
 */
const publicAllow = ['/', '/api/og'];
const aiDiscoveryAllow = [
  '/llms.txt',
  '/llms-full.txt',
  '/ai.txt',
];
const standardDisallow = ['/api/', '/admin/', '/staging/'];
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = SITE_URL;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'Googlebot',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'Bingbot',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'GPTBot',
        allow: aiDiscoveryAllow,
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'Google-Extended',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'ClaudeBot',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'Claude-User',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'Claude-SearchBot',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'PerplexityBot',
        allow: publicAllow,
        disallow: standardDisallow,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
