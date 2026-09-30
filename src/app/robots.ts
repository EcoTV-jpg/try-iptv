import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

const standardAllow = ['/', '/api/og'];
const standardDisallow = ['/api/', '/admin/', '/staging/'];
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL || SITE_URL;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: standardAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: standardAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: standardAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'Google-Extended',
        allow: standardAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'anthropic-ai',
        allow: standardAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'PerplexityBot',
        allow: standardAllow,
        disallow: standardDisallow,
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: new URL(siteUrl).host,
  };
}
