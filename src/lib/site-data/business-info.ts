/**
 * Business details shown on /contact-us, /about and /licensing.
 *
 * Every `null` field is real business data that has not been supplied yet.
 * Pages hide a field while it is `null`, so placeholders never render publicly.
 * /about and /licensing stay noindex and out of the sitemap until
 * `isPublishReady()` returns true.
 */
export const BUSINESS_INFO = {
  // TODO: legal name of the company or person operating TryIPTV.
  legalName: null as string | null,
  // TODO: country/state of registration and registration or company number.
  registration: null as string | null,
  // TODO: registered business or mailing address.
  address: null as string | null,
  // TODO: support hours with time zone, e.g. "Mon–Sun, 9:00–23:00 (UTC)".
  supportHours: null as string | null,
  // TODO: typical first-response time, e.g. "Usually within 2 hours".
  responseTime: null as string | null,
  // TODO: who supplies the channel and on-demand catalog, and on what basis
  // (licensing agreements, distribution rights, etc.).
  contentSource: null as string | null,
  // TODO: link or reference to licensing documentation that backs the
  // published channel and title counts.
  catalogEvidence: null as string | null,
};

export function isPublishReady(): boolean {
  return (
    BUSINESS_INFO.legalName !== null &&
    BUSINESS_INFO.address !== null &&
    BUSINESS_INFO.contentSource !== null
  );
}
