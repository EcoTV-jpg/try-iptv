// Client Sentry init is deferred so the large SDK chunk is not parsed/evaluated
// during the homepage LCP critical window (audit: 2e_9euj4nbak-.js ~595 ms CPU).
// Errors after init, and global-error.tsx (static import), still report to Sentry.

const SENTRY_DSN =
  "https://2c6b3d1af5286155f96e3cc65959938f@o4512229364072448.ingest.us.sentry.io/4512229368266752";

const sentryInitOptions = {
  dsn: SENTRY_DSN,
  // Turns off collection of data that could identify users. Adjust per category:
  // https://docs.sentry.io/platforms/javascript/configuration/options/#dataCollection
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
};

let sentryInitPromise: Promise<typeof import("@sentry/nextjs")> | null = null;

function loadSentry() {
  if (!sentryInitPromise) {
    sentryInitPromise = import("@sentry/nextjs").then((Sentry) => {
      Sentry.init(sentryInitOptions);
      return Sentry;
    });
  }
  return sentryInitPromise;
}

function scheduleClientSentryInit() {
  const start = () => {
    void loadSentry();
  };

  const ric = window.requestIdleCallback;
  if (typeof ric === "function") {
    ric(() => start(), { timeout: 4000 });
    return;
  }

  window.addEventListener("load", () => {
    window.setTimeout(start, 0);
  });
}

scheduleClientSentryInit();

export function onRouterTransitionStart(
  url: string,
  navigationType: "push" | "replace" | "traverse",
) {
  void loadSentry().then((Sentry) => {
    if (typeof Sentry.captureRouterTransitionStart === "function") {
      Sentry.captureRouterTransitionStart(url, navigationType);
    }
  });
}
