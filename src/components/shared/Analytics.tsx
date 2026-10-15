import Script from "next/script";

const GA_ID = "G-76FDX71VDQ";

/**
 * Loads GA4 after the page is idle so gtag is not preloaded against LCP.
 * `@next/third-parties` GoogleAnalytics defaults to afterInteractive, which
 * injects a `<link rel="preload">` for gtag/js (audit evidence on homepage).
 */
export function Analytics() {
  return (
    <>
      <Script id="ga-init" strategy="lazyOnload">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');
`}</Script>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="lazyOnload"
      />
    </>
  );
}
