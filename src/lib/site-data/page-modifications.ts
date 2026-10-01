/**
 * @file page-modifications.ts
 * @description Centralized, truthful lastModified registry for all static/core routes.
 *
 * TRUTHFUL LASTMOD ARCHITECTURE RULES:
 * 1. A route's lastModified date MUST represent the date when meaningful, indexable
 *    content on that specific URL was actually updated (copy revisions, pricing changes,
 *    policy terms updates, structural additions).
 * 2. DO NOT update dates for technical/infrastructure refactors (e.g., bundle size
 *    optimization, CSS tuning, dependency bumps, analytics tweaks).
 * 3. NEVER use dynamic timestamps (new Date(), Date.now(), or CI/CD build times)
 *    which falsely manufacture freshness and erode Google crawl trust.
 * 4. For device guides (/devices/[device]), dates remain managed directly in
 *    `src/lib/site-data/how-to.json` which drives the visible "Last updated",
 *    JSON-LD Schema, and sitemap simultaneously.
 *
 * DEVELOPER WORKFLOW:
 * When you edit a page's content, update its corresponding ISO date (YYYY-MM-DD)
 * in PAGE_LAST_MODIFIED below. For legal pages, updating this date will
 * automatically update both the sitemap.xml <lastmod> and the visible
 * "Last Updated: Month Year" notice on the page.
 */

export const STATIC_ROUTES = [
  '/',
  '/pricing',
  '/iptv-free-trial',
  '/about',
  '/devices',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
  '/refund-policy',
  '/disclaimer',
  '/dmca-report',
] as const;

export type StaticRoute = (typeof STATIC_ROUTES)[number];

/**
 * Verified last modification dates for all static routes.
 * Format: YYYY-MM-DD
 *
 * Historical Audit Baseline:
 * - Homepage (/): 2026-09-30 (Hero copy, value props, and layout overhaul - commit 61807de)
 * - /pricing: 2026-09-30 (Plan structure and pricing feature matrix overhaul - commit 61807de)
 * - /iptv-free-trial: 2026-09-30 (Channel/VOD metrics correction & WhatsApp flow - commit 16efd8f)
 * - /about: 2026-10-01 (About page created and published)
 * - /devices: 2026-09-30 (Device directory index created and published - commit 16efd8f)
 * - /faq: 2026-09-29 (FAQ content and answer updates in faq.ts - commit a25404e)
 * - /contact: 2026-09-29 (Contact information and support channel copy - commit a25404e)
 * - Legal pages: 2026-03-01 (Formal legal policy review and publication effective date)
 */
export const PAGE_LAST_MODIFIED: Record<StaticRoute, string> = {
  '/': '2026-09-30',
  '/pricing': '2026-09-30',
  '/iptv-free-trial': '2026-09-30',
  '/about': '2026-10-01',
  '/devices': '2026-09-30',
  '/faq': '2026-09-29',
  '/contact': '2026-09-29',
  '/privacy-policy': '2026-03-01',
  '/terms-conditions': '2026-03-01',
  '/refund-policy': '2026-03-01',
  '/disclaimer': '2026-03-01',
  '/dmca-report': '2026-03-01',
};

/**
 * Formats a YYYY-MM-DD date string into a human-readable "Month YYYY" string
 * using UTC to prevent timezone boundary discrepancies.
 *
 * Example: "2026-03-01" -> "March 2026"
 */
export function formatLegalDate(dateString: string): string {
  const date = new Date(`${dateString}T00:00:00Z`);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
