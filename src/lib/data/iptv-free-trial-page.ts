import { unstable_cache as cache } from 'next/cache';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';
import type { BreadcrumbList, Service, WebPage } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

export const TRIAL_PAGE_TITLE = "IPTV Free Trial: 24-Hour Test, No Credit Card | TryIPTV";
export const TRIAL_PAGE_DESCRIPTION =
  "Request a free 24-hour IPTV trial with no credit card. Get Xtream Codes or M3U login details in about 5–15 minutes and test channels, EPG and your player.";

export const trialFaqs = [
  {
    question: "How long is the TryIPTV free trial?",
    answer:
      "The trial provides access for 24 consecutive hours from the time your credentials are confirmed and generated.",
  },
  {
    question: "Is there a 48-hour or 72-hour (3-day) free trial?",
    answer:
      "No. The TryIPTV free trial lasts 24 hours. We do not offer a 48-hour, 72-hour or 3-day trial.",
  },
  {
    question: "When do the 24 hours start?",
    answer:
      "When your trial credentials are activated, not when you send the request. Request the trial when you are ready to test.",
  },
  {
    question: "What is an IPTV test line?",
    answer:
      "It is another name for trial login details: an Xtream Codes login (server URL, username and password) or an M3U playlist URL that you enter in a compatible IPTV player. It expires automatically 24 hours after activation.",
  },
  {
    question: "Can I request more than one free trial?",
    answer:
      "No. The Terms & Conditions allow one trial per household or user.",
  },
  {
    question: "Is the IPTV trial really free?",
    answer:
      "Yes. The trial costs $0. You are not required to enter payment information, billing details, or future payment commitments.",
  },
  {
    question: "Do I need a credit card for the IPTV free trial?",
    answer:
      "No. Trial access is issued without collecting credit card or payment information.",
  },
  {
    question: "How long does trial activation take?",
    answer:
      "Credentials typically arrive via WhatsApp within 5–15 minutes after request confirmation.",
  },
  {
    question: "Which devices can I use for the trial?",
    answer:
      "You can test on supported smart TVs, streaming media players, and personal computers, including Firestick, Android TV, Samsung TV, LG TV, Apple TV, Roku, Windows, Mac, and MAG devices.",
  },
  {
    question: "Can I use TiviMate?",
    answer:
      "Yes. If you use TiviMate on an Android TV or Fire TV device, enter the server URL, username, and password provided with your trial using the Xtream Codes login option.",
  },
  {
    question: "Can I use IPTV Smarters?",
    answer:
      "Yes. IPTV Smarters is compatible. Select \"Login with Xtream Codes API\" and enter the trial server address, username, and password issued for your test.",
  },
  {
    question: "Can I test specific channels before paying?",
    answer:
      "Yes. You can use the trial to check whether the specific channels and content you care about are available and play correctly on your setup.",
  },
  {
    question: "Does the free trial automatically renew?",
    answer:
      "No. The trial does not automatically renew or convert into a paid subscription.",
  },
  {
    question: "What happens when the 24-hour trial ends?",
    answer:
      "Your trial credentials expire and streaming stops. You can choose to purchase a prepaid subscription on the pricing page or simply discontinue use.",
  },
  {
    question: "Is the trial exactly the same as a paid subscription?",
    answer:
      "The trial allows you to evaluate stream playback, channel availability, and guide data. However, paid plans include two simultaneous connections, whereas trial connection limits are confirmed upon issuance.",
  },
  {
    question: "What should I test during an IPTV free trial?",
    answer:
      "Focus on testing the specific channels you watch most often, verifying picture quality on your main TV screen, observing channel startup time, and confirming that EPG data loads properly.",
  },
];

export const getIptvFreeTrialPageData = cache(
  async () => {
    const baseUrl = siteConfig.url;
    const pageUrl = `${baseUrl}/iptv-free-trial`;

    const breadcrumbSchema: BreadcrumbList = generateBreadcrumbSchema([
      { name: "Home", item: `${baseUrl}/` },
      { name: "IPTV Free Trial", item: pageUrl },
    ]);

    const serviceSchema: Service = generateServiceSchema({
      serviceType: "Free IPTV Trial",
      providerName: "TryIPTV",
      name: "24-Hour IPTV Free Trial",
      description:
        "Free 24-hour trial of TryIPTV, requested on WhatsApp, to test live TV and on-demand viewing on your own device and IPTV player. $0, no credit card required.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    });

    const webPageSchema: WebPage = {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: TRIAL_PAGE_TITLE,
      description: TRIAL_PAGE_DESCRIPTION,
      isPartOf: { '@id': `${baseUrl}/#website` },
      about: { '@id': `${baseUrl}/#organization` },
    };

    return {
      breadcrumbSchema,
      webPageSchema: { '@context': 'https://schema.org', ...webPageSchema },
      serviceSchema,
      trialFaqs,
    };
  },
  // Bump the version when the static data above changes: the data cache outlives rebuilds.
  ['iptv-free-trial-page-data-v3'],
  {
    revalidate: 3600,
    tags: ['pages', 'iptv-free-trial-page'],
  }
);
