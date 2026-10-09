import { unstable_cache as cache } from 'next/cache';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';
import type { BreadcrumbList, Service } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

export const trialFaqs = [
  {
    question: "Is the TryIPTV trial really free?",
    answer:
      "The trial is listed at $0 for 24 hours, with no credit card required. Use it to check stream stability and channel selection before deciding whether to purchase a plan.",
  },
  {
    question: "Do I need a credit card to start the trial?",
    answer:
      "The stated trial offer requires no credit card. Use the WhatsApp trial request button and include your device type; the button does not open a checkout.",
  },
  {
    question: "How long does the IPTV free trial last?",
    answer:
      "The stated trial duration is 24 hours. Contact support if you need to confirm the start or end time for your access.",
  },
  {
    question: "Which devices and player apps can I use during the trial?",
    answer:
      "Our setup guides cover Fire TV, Android TV, Apple TV, Windows, macOS, Samsung and LG Smart TVs, and other listed platforms. Check the guide for your device and test your chosen player during the trial.",
  },
  {
    question: "Do I receive Xtream Codes or an M3U playlist URL?",
    answer:
      "You receive both. Your trial details include your Xtream Codes API login (Server URL, Username, and Password) for supported IPTV apps, as well as an M3U playlist URL and XMLTV EPG guide link for players that accept those formats, such as VLC.",
  },
  {
    question: "How quickly are trial credentials sent?",
    answer:
      "The stated estimate is 5–15 minutes after trial confirmation. Actual delivery time may vary.",
  },
  {
    question: "Does the free trial automatically become a paid subscription?",
    answer:
      "The trial request button opens WhatsApp, not a paid checkout. Paid plans are selected separately on the pricing page.",
  },
  {
    question: "What should I test during my 24-hour trial?",
    answer:
      "We recommend testing on your main viewing screen during peak evening hours (7–11 PM). Check channel zapping speed on your must-have sports and local feeds, verify audio and video sync, test VOD playback, and ensure the EPG guide populates correctly.",
  },
  {
    question: "What happens after the stated 24-hour trial period?",
    answer:
      "The stated trial duration is 24 hours. If you are satisfied, you can choose a prepaid plan on our pricing page. Contact support to confirm your access end time or next steps.",
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
        "24-hour free trial of TryIPTV with full access to 24,000+ live channels, 80,000+ on-demand movies and series, 4K streams, and 2 simultaneous connections. No credit card required.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    });

    return {
      breadcrumbSchema,
      serviceSchema,
      trialFaqs,
    };
  },
  ['iptv-free-trial-page-data'],
  {
    revalidate: 3600,
    tags: ['pages', 'iptv-free-trial-page'],
  }
);
