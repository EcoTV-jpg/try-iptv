
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { timingSafeEqual } from 'node:crypto';
import { SITE_URL } from '@/lib/site-config';

function isAuthorized(authHeader: string | null, secret: string | undefined): boolean {
  if (!secret || !authHeader || !authHeader.startsWith('Bearer ')) {
    return false;
  }
  const token = authHeader.slice(7).trim();
  if (!token) {
    return false;
  }
  const tokenBuffer = Buffer.from(token);
  const secretBuffer = Buffer.from(secret);
  if (tokenBuffer.length !== secretBuffer.length) {
    return false;
  }
  return timingSafeEqual(tokenBuffer, secretBuffer);
}

function validateIndexingUrl(rawUrl: unknown): { valid: true; url: string } | { valid: false; error: string } {
  if (typeof rawUrl !== 'string' || !rawUrl.trim()) {
    return { valid: false, error: 'URL is required' };
  }

  let parsed: URL;
  try {
    parsed = new URL(rawUrl.trim());
  } catch {
    return { valid: false, error: 'Invalid URL format' };
  }

  if (parsed.protocol !== 'https:') {
    return { valid: false, error: 'URL must use https protocol' };
  }

  if (parsed.username || parsed.password) {
    return { valid: false, error: 'URL must not contain credentials' };
  }

  const canonicalOrigin = new URL(SITE_URL).origin;
  if (parsed.origin !== canonicalOrigin) {
    return { valid: false, error: `URL must belong to canonical origin (${canonicalOrigin})` };
  }

  return { valid: true, url: parsed.href };
}

export async function POST(req: NextRequest) {
  // 1. Authorization check
  const authHeader = req.headers.get('authorization');
  const indexingSecret = process.env.INDEXING_SECRET;

  if (!isAuthorized(authHeader, indexingSecret)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Body parsing
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { url: rawUrl } = body as { url?: unknown };

  // 3. URL validation
  const validation = validateIndexingUrl(rawUrl);
  if (!validation.valid) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }
  const validatedUrl = validation.url;

  // 4. Service account credential check
  const serviceAccountBase64 = process.env.GOOGLE_INDEXING_SERVICE_ACCOUNT_BASE64;
  if (!serviceAccountBase64) {
    console.error('Google indexing service account credentials are not configured.');
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }

  try {
    let credentials: { client_email?: string; private_key?: string };
    try {
      const decodedKey = Buffer.from(serviceAccountBase64, 'base64').toString('utf-8');
      credentials = JSON.parse(decodedKey);
    } catch {
      console.error('Failed to parse Google indexing service account credentials.');
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    if (!credentials.client_email || !credentials.private_key) {
      console.error('Google indexing service account credentials missing required fields.');
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }

    const jwtClient = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ['https://www.googleapis.com/auth/indexing'],
    });

    const tokens = await jwtClient.authorize();

    const options = {
      url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${tokens.access_token}`,
      },
      data: {
        url: validatedUrl,
        type: 'URL_UPDATED',
      },
    };

    const response = await fetch(options.url, {
      method: options.method,
      headers: options.headers,
      body: JSON.stringify(options.data),
    });

    if (!response.ok) {
      let errorDetails: unknown;
      try {
        errorDetails = await response.json();
      } catch {
        errorDetails = await response.text();
      }
      return NextResponse.json(
        { error: 'Indexing API Error', details: errorDetails },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json(result);
  } catch (error) {
    console.error('Indexing Error: Upstream request failed');
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

