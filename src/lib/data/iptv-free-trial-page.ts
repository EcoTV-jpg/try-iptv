
import { unstable_cache as cache } from 'next/cache';
import { generateSemanticContent, type SemanticContent as SemanticContentType } from "@/lib/vector-seo";
import { generateBreadcrumbSchema, generateFAQPageSchema, generateServiceSchema } from '@/lib/schema';
import type { BreadcrumbList, FAQPage, Service } from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

const trialFaqs = [
    {
        question: "How long does the TryIPTV free trial last?",
        answer: "The TryIPTV free trial provides 24 hours of full access, starting from the moment your login credentials are delivered and activated."
    },
    {
        question: "Do I need a credit card for the IPTV free trial?",
        answer: "No. TryIPTV does not collect credit card details or payment information to start a free trial. The trial is completely free with zero auto-renewals or hidden commitments."
    },
    {
        question: "How do I receive my free trial login credentials?",
        answer: "After submitting your trial request via WhatsApp or email, our support team provides your M3U playlist URL, Xtream Codes credentials (server URL, username, and password), and step-by-step setup instructions."
    },
    {
        question: "What is the difference between Xtream Codes and M3U setup?",
        answer: "Xtream Codes API uses a Server URL, Username, and Password to automatically organize channels, VOD categories, and EPG data in modern player apps like TiviMate and IPTV Smarters. An M3U playlist is a single web link that loads the complete stream directory, universally compatible with media players like VLC and GSE Smart IPTV."
    },
    {
        question: "What devices and apps work with the free trial?",
        answer: "TryIPTV works on Amazon Fire TV, Android TV and mobile, Apple TV, iPhone, iPad, Windows, macOS, Samsung and LG Smart TVs, Roku, and MAG boxes using standard IPTV players like TiviMate, IPTV Smarters, or GSE Smart IPTV."
    },
    {
        question: "Is any content locked or downgraded during the free trial?",
        answer: "No. The 24-hour trial provides complete, unrestricted access to our full catalog of 25,000+ live channels, 120,000+ movies and series, 4K streams, and the EPG TV guide, exactly like a paid subscription."
    },
    {
        question: "What happens when the 24-hour trial ends?",
        answer: "When your 24 hours conclude, trial access automatically stops. You cannot be charged because no payment information was collected. If you choose to continue, you can purchase any prepaid plan starting at $16."
    },
    {
        question: "How many devices can stream simultaneously during the trial?",
        answer: "The TryIPTV free trial includes 2 simultaneous device connections, allowing you to test streaming across two screens in your household at the same time."
    }
];

export const getIptvFreeTrialPageData = cache(
  async () => {
    const baseUrl = siteConfig.url;
    const pageUrl = `${baseUrl}/iptv-free-trial`;

    const semanticContentPromise: Promise<SemanticContentType> = generateSemanticContent("IPTV Free Trial");

    const breadcrumbSchemaPromise: Promise<BreadcrumbList> = Promise.resolve(generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "IPTV Free Trial", item: pageUrl }
    ]));

    const faqSchemaPromise: Promise<FAQPage> = Promise.resolve(generateFAQPageSchema(trialFaqs));

    const serviceSchemaPromise: Promise<Service> = Promise.resolve(generateServiceSchema({
        serviceType: "Free IPTV Trial",
        providerName: "TryIPTV",
        name: "24-Hour IPTV Free Trial",
        description: "24-hour free trial of TryIPTV with full access to 25,000+ live channels, 120,000+ on-demand movies and series, 4K streams, and 2 simultaneous connections. No credit card required.",
        areaServed: { type: "Country", name: "Worldwide" },
        offers: {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
        }
    }));
    
    const [
      semanticContent,
      breadcrumbSchema,
      faqSchema,
      serviceSchema
    ] = await Promise.all([
      semanticContentPromise,
      breadcrumbSchemaPromise,
      faqSchemaPromise,
      serviceSchemaPromise,
    ]);

    return { 
      semanticContent, 
      breadcrumbSchema,
      faqSchema,
      serviceSchema,
      trialFaqs
    };
  },
  ['iptv-free-trial-page-data'],
  {
    revalidate: 3600,
    tags: ['pages', 'iptv-free-trial-page'],
  }
);

    