import type { MetadataRoute } from 'next';
import { howToArticles } from '@/lib/how-to';
import { SITE_URL } from '@/lib/site-config';

const baseUrl = process.env.SITE_URL || SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/iptv-free-trial`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/devices`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/refund-policy`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date('2026-03-01'),
    },
    {
      url: `${baseUrl}/dmca-report`,
      lastModified: new Date('2026-03-01'),
    },
  ];

  const devicePages: MetadataRoute.Sitemap = howToArticles.map((article) => ({
    url: `${baseUrl}/devices/${article.id}`,
    lastModified: new Date(article.dateModified || article.datePublished),
  }));

  return [
    ...staticPages,
    ...devicePages,
  ];
}
