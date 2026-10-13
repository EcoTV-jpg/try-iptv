import { unstable_cache as cache } from 'next/cache';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';
import type { BreadcrumbList, Service } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

export const trialFaqs = [
  {
    question: "How long does the TryIPTV free trial last?",
    answer:
      "The free trial provides 24-hour access at $0 so you can test the service before choosing a paid plan.",
  },
  {
    question: "Do I need a credit card to start the trial?",
    answer:
      "No. Request the trial through WhatsApp; the request does not open a paid checkout and no credit card is required.",
  },
  {
    question: "How quickly do trial credentials arrive?",
    answer:
      "Credentials typically arrive within 5–15 minutes after confirmation. Actual delivery time can vary.",
  },
  {
    question: "What is included in the free trial?",
    answer:
      "You can test the available live TV and on-demand service, picture quality where available, EPG data, Xtream Codes or M3U access, and the supported device or player you plan to use.",
  },
  {
    question: "Can I use the trial on two devices?",
    answer:
      "The service lists 2 simultaneous connections. Confirm the trial allowance for your specific setup with support.",
  },
  {
    question: "Which devices work with the trial?",
    answer:
      "Use the device and player guides linked on this page for Fire TV, Android TV, Smart TVs, Apple TV, Chromecast, Roku, MAG, Windows, and Mac.",
  },
  {
    question: "Do I receive Xtream Codes or M3U?",
    answer:
      "The documented formats are Xtream Codes API credentials (server URL, username, and password) and an M3U playlist URL. Confirm which details are issued for your trial.",
  },
  {
    question: "What should I test during my 24-hour trial?",
    answer:
      "Test your main device during normal viewing hours. Check must-have channels, channel switching, audio/video sync, VOD playback, and EPG loading.",
  },
  {
    question: "Does the free trial automatically renew?",
    answer:
      "No. The trial does not automatically become a paid subscription. If you want to continue, choose a prepaid plan separately on the pricing page.",
  },
  {
    question: "How much does TryIPTV cost after the trial?",
    answer:
      "Paid plans are prepaid and start at $16 for 1 month, with 3-, 6-, and 12-month options. See the pricing page for the current comparison.",
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
        "24-hour free trial of TryIPTV to evaluate available live TV and on-demand viewing on a compatible device. No credit card required.",
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
