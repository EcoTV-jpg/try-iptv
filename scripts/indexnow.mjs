import { INDEXABLE_ROUTES, SITE_ROUTES } from '../src/lib/site-routes.ts';
import { SITE_URL } from '../src/lib/site-config.ts';
import { submitIndexNowUrls, validateIndexNowUrls } from './indexnow-client.mjs';

const args = process.argv.slice(2).filter((arg) => arg !== '--dry-run');
const dryRun = process.argv.includes('--dry-run');

const defaultUrls = INDEXABLE_ROUTES.map(({ path }) =>
  path === '/' ? SITE_URL : `${SITE_URL}${path}`
);
const urls = validateIndexNowUrls(args.length > 0 ? args : defaultUrls);
const excluded = SITE_ROUTES.filter(({ indexable }) => !indexable);

console.log(`Approved indexable routes: ${INDEXABLE_ROUTES.length}`);
console.log(`Prepared unique URLs: ${urls.length}`);
console.log(`Excluded noindex routes: ${excluded.map(({ path }) => path).join(', ') || 'none'}`);
if (args.length > 0) {
  console.log(`Explicit URL list (${args.length} args):`);
  for (const url of urls) console.log(`  ${url}`);
}

if (dryRun) {
  console.log('Dry run: no IndexNow request sent.');
} else {
  try {
    const result = await submitIndexNowUrls(urls);
    console.log(`URLs submitted: ${result.count}`);
    console.log(`HTTP status: ${result.status}`);
    console.log(result.message);
    if (!result.success) process.exitCode = 1;
  } catch (error) {
    console.error(`IndexNow submission failed: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  }
}
