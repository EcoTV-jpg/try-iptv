import type { MetadataRoute } from 'next';
import { howToArticles, isRedirectedDevice } from '@/lib/how-to';
import { SITE_URL } from '@/lib/site-config';
import { PAGE_LAST_MODIFIED, STATIC_ROUTES } from '@/lib/site-data/page-modifications';

const baseUrl = process.env.SITE_URL || SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: route === '/' ? baseUrl : `${baseUrl}${route}`,
    lastModified: new Date(PAGE_LAST_MODIFIED[route]),
  }));

  const devicePages: MetadataRoute.Sitemap = howToArticles
    .filter((article) => !isRedirectedDevice(article.id))
    .map((article) => ({
      url: `${baseUrl}/devices/${article.id}`,
      lastModified: new Date(article.dateModified || article.datePublished),
    }));

  return [
    ...staticPages,
    ...devicePages,
  ];
}
