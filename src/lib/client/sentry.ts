type SentryClient = typeof import("@sentry/nextjs");

let sentryReady: Promise<SentryClient> | null = null;

/**
 * Loads the Sentry browser SDK once, after the caller decides it is safe.
 * BrowserTracing is omitted: this app does not set a traces sample rate, and
 * the Next.js SDK still installs that integration when tracing is not
 * explicitly disabled, which shows up as main-thread work on every page.
 */
export function loadSentry(): Promise<SentryClient> {
  if (!sentryReady) {
    sentryReady = import("@sentry/nextjs").then((Sentry) => {
      Sentry.init({
        dsn: "https://2c6b3d1af5286155f96e3cc65959938f@o4512229364072448.ingest.us.sentry.io/4512229368266752",
        dataCollection: {
          userInfo: false,
          graphQL: { document: false, variables: false },
          genAI: { inputs: false, outputs: false },
          databaseQueryData: false,
          queues: false,
          httpBodies: [],
          httpHeaders: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
          cookies: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
          urlQueryParams: { deny: ["forwarded", "-ip", "remote-", "via", "-user"] },
        },
        integrations: (integrations) =>
          integrations.filter((integration) => integration.name !== "BrowserTracing"),
      });
      return Sentry;
    });
  }

  return sentryReady;
}
