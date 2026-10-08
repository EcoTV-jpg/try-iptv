import { unstable_cache as cache } from 'next/cache';
import { generateBreadcrumbSchema, generateServiceSchema } from '@/lib/schema';
import type { BreadcrumbList, Service } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

export const trialFaqs = [
  {
    question: "Is the TryIPTV trial really free?",
    answer:
      "Yes, the trial is 100% free with a cost of $0. We do not ask for credit card numbers, billing addresses, or payment details. It is a genuine 24-hour evaluation pass so you can test stream stability and channel selection before deciding whether to purchase a plan.",
  },
  {
    question: "Do I need a credit card to start the trial?",
    answer:
      "No credit card is required. You can request your 24-hour trial access directly via WhatsApp or email with just your device type. We never collect payment details for free trials.",
  },
  {
    question: "How long does the IPTV free trial last?",
    answer:
      "The free trial lasts for 24 continuous hours. The 24-hour countdown begins the moment your trial credentials are generated, activated, and delivered to you by our support team.",
  },
  {
    question: "Which devices and player apps can I use during the trial?",
    answer:
      "The trial works across all major hardware including Amazon Firestick & Fire TV, Android TV boxes, Google TV, Apple TV, iPhone, iPad, Windows, macOS, Samsung and LG Smart TVs, and MAG boxes. You can use any standard IPTV player such as TiviMate, IPTV Smarters Pro, XCIPTV, or GSE Smart IPTV.",
  },
  {
    question: "Do I receive Xtream Codes or an M3U playlist URL?",
    answer:
      "You receive both. Your activation email or WhatsApp message includes your Xtream Codes API login (Server URL, Username, and Password) for dedicated IPTV apps, as well as an M3U playlist URL and XMLTV EPG guide link for universal media players like VLC.",
  },
  {
    question: "How quickly are trial credentials sent?",
    answer:
      "Trial details are typically generated and delivered within 5–15 minutes during active support hours. If you request trial credentials via email, please check your spam or junk folder in case our message is filtered.",
  },
  {
    question: "Does the free trial automatically become a paid subscription?",
    answer:
      "No. Because no payment information or credit card was ever collected, it is impossible for the trial to automatically convert into a paid subscription. You will never be billed automatically.",
  },
  {
    question: "What should I test during my 24-hour trial?",
    answer:
      "We recommend testing on your main viewing screen during peak evening hours (7–11 PM). Check channel zapping speed on your must-have sports and local feeds, verify audio and video sync, test VOD playback, and ensure the EPG guide populates correctly.",
  },
  {
    question: "What happens when the 24-hour trial expires?",
    answer:
      "When the 24-hour period concludes, your stream access simply turns off. If you are satisfied with the performance, you can choose any prepaid plan starting at $16 on our pricing page. Our team can renew your existing trial line so you do not have to reconfigure your player app.",
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
      areaServed: "Worldwide",
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
