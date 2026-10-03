import { NextRequest, NextResponse } from 'next/server'
import { INDEXABLE_ROUTES } from '@/lib/site-routes';
import { SITE_URL as DEFAULT_SITE_URL } from '@/lib/site-config';

const INDEXNOW_API_URL = 'https://api.indexnow.org/indexnow';
const SITE_URL = process.env.SITE_URL || DEFAULT_SITE_URL;
const API_KEY = '34703b31e96542ffb49bffed790d5e29';

async function submitUrls(urlList: string[]) {
  const payload = {
    host: new URL(SITE_URL).hostname,
    key: API_KEY,
    keyLocation: `${SITE_URL}/${API_KEY}.txt`,
    urlList: urlList,
  };

  try {
    const response = await fetch(INDEXNOW_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`IndexNow API error: ${response.status} ${response.statusText} - ${errorText}`);
    }
    
    console.log('IndexNow submission successful:', payload);
    return { success: true, status: response.status, payload };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred during IndexNow submission';
    console.error('IndexNow Submission Error:', errorMessage);
    return { success: false, error: errorMessage };
  }
}

export async function GET(req: NextRequest) {
  // Only submit URLs that are currently indexable (index: true, real content, in sitemap)
  const allUrls = INDEXABLE_ROUTES.map((route) =>
    route.path === '/' ? SITE_URL : `${SITE_URL}${route.path}`
  );

  const result = await submitUrls(allUrls);

  if (result.success) {
    return NextResponse.json({ message: 'URLs submitted to IndexNow successfully.', details: result });
  } else {
    return NextResponse.json({ error: 'Failed to submit URLs to IndexNow.', details: result }, { status: 500 });
  }
}
