
import articles from '@/lib/site-data/how-to.json';

// Export the raw article data for use in server components
export const howToArticles = articles;

export const REDIRECTED_DEVICE_SLUGS: Record<string, string> = {
  'fire-tv': 'firestick',
  'android': 'android-tv',
  'ios': 'iphone-ipad',
  'macos': 'mac',
};

export const getDeviceSlug = (id: string): string => {
  return REDIRECTED_DEVICE_SLUGS[id] || id;
};

export const isRedirectedDevice = (id: string): boolean => {
  return id in REDIRECTED_DEVICE_SLUGS;
};

// A lightweight, dependency-free function to get article data for client/edge use.
// This function does NOT include the processed image blur data.
export const getSafeArticleData = (deviceId: string) => {
    return articles.find((p) => p.id === deviceId);
}
