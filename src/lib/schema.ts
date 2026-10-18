import type {
  WebSite,
  WebPage,
  Organization,
  FAQPage,
  BreadcrumbList,
  Article,
  Service,
  Offer,
  AggregateOffer,
  WithContext,
} from 'schema-dts';
import { siteConfig } from '@/lib/site-config';
import { publicBrandSocialLinks } from '@/lib/site-data/socials';

export const organizationId = `${siteConfig.url}/#organization`;
const websiteId = `${siteConfig.url}/#website`;
const organizationReference = {
  '@id': organizationId,
} as const;

// Reusable parts of schemas
const defaultPublisher = organizationReference;

export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    'url': `${siteConfig.url}/`,
    'name': siteConfig.name,
    'alternateName': 'Try IPTV',
    'publisher': organizationReference,
  };
}

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': organizationId,
    'name': siteConfig.name,
    'alternateName': 'Try IPTV',
    'url': `${siteConfig.url}/`,
    'logo': {
      '@type': 'ImageObject',
      'url': `${siteConfig.url}/logo.png`,
      'contentUrl': `${siteConfig.url}/logo.png`,
      'width': 1024 as any,
      'height': 1024 as any,
    },
    'sameAs': [...publicBrandSocialLinks],
  };
}

interface WebPageSchemaProps {
  name: string;
  description: string;
  url: string;
  id?: string;
}

/** Homepage/root WebPage node. Do not invent Article fields here. */
export function generateWebPageSchema(props: WebPageSchemaProps): WithContext<WebPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': props.id ?? props.url,
    name: props.name,
    description: props.description,
    url: props.url,
    isPartOf: {
      '@id': websiteId,
    },
    publisher: organizationReference,
    about: organizationReference,
  };
}

/** Kept for /faq only — do not use for FAQPage sprawl on other routes. */
export function generateFAQPageSchema(mainEntity: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: mainEntity.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(itemListElement: { name: string; item: string }[]): WithContext<BreadcrumbList> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElement.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

interface ArticleSchemaProps {
    headline: string;
    description: string;
    image?: string;
    dateModified: string;
    authorName?: string;
    publisherName?: string;
    url: string;
}

export function generateArticleSchema(props: ArticleSchemaProps): WithContext<Article> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: props.headline,
        description: props.description,
        image: props.image,
        dateModified: props.dateModified,
        author: organizationReference,
        publisher: defaultPublisher,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': props.url,
        },
    };
}

interface ServiceSchemaProps {
    id?: string;
    serviceType: string;
    providerName: string;
    areaServed?: string;
    name: string;
    description: string;
    offers?: Offer | AggregateOffer;
}

export function generateServiceSchema(props: ServiceSchemaProps): WithContext<Service> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        ...(props.id ? { '@id': props.id } : {}),
        serviceType: props.serviceType,
        provider: organizationReference,
        ...(props.areaServed ? { areaServed: props.areaServed } : {}),
        name: props.name,
        description: props.description,
        offers: props.offers
    }
}
