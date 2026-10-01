import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-config';

const standardAllow = ['/', '/api/og'];
const brandAssetAllow = [
  '/favicon.ico',
  '/favicon-16x16.png',
  '/favicon-32x32.png',
  '/favicon-48x48.png',
  '/apple-touch-icon.png',
  '/icon-192.png',
  '/icon-512.png',
  '/logo.png',
  '/brand-logo-square.png',
  '/site.webmanifest',
  '/manifest.json',
];
const publicAllow = [...standardAllow, ...brandAssetAllow];
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
        userAgent: 'OAI-SearchBot',
        allow: publicAllow,
        disallow: standardDisallow,
      },
      {
        userAgent: 'GPTBot',
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
        userAgent: 'anthropic-ai',
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
    host: new URL(siteUrl).host,
  };
}
