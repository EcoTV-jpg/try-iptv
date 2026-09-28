
import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site-config';
 
export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.SITE_URL || SITE_URL;
  
  return {
    rules: [
        {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/', '/staging/'],
        },
        {
            userAgent: 'GPTBot',
            disallow: ['/'],
        },
        {
            userAgent: 'ChatGPT-User',
            allow: '/',
        },
        {
            userAgent: 'Google-Extended',
            allow: '/',
        },
        {
            userAgent: 'anthropic-ai',
            allow: '/',
        },
        {
            userAgent: 'PerplexityBot',
            allow: '/',
        }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: new URL(siteUrl).host,
  }
}
