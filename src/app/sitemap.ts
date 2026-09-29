import type { MetadataRoute } from 'next';
import { howToArticles } from '@/lib/how-to';
import { SITE_URL } from '@/lib/site-config';

const baseUrl = process.env.SITE_URL || SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/pricing`,
    },
    {
      url: `${baseUrl}/iptv-free-trial`,
    },
    {
      url: `${baseUrl}/faq`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];

  const devicePages: MetadataRoute.Sitemap = howToArticles.map((article) => ({
    url: `${baseUrl}/devices/${article.id}`,
  }));

  return [
    ...staticPages,
    ...devicePages,
  ];
}
