import type {
  Product,
  WebSite,
  Organization,
  FAQPage,
  BreadcrumbList,
  Article,
  HowTo,
  Service,
  Brand,
  Offer,
  AggregateOffer,
  WithContext,
} from 'schema-dts';
import { siteConfig } from '@/lib/site-config';

// Reusable parts of schemas
const defaultPublisher = {
  '@type': 'Organization' as const,
  'name': siteConfig.name,
  'logo': {
    '@type': 'ImageObject' as const,
    'url': `${siteConfig.url}/api/og`,
  },
};

export function generateWebSiteSchema(): WithContext<WebSite> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'url': siteConfig.url,
    'name': siteConfig.name,
    'alternateName': ["Try IPTV", "TryIPTV Stream"],
  };
}

export function generateOrganizationSchema(): WithContext<Organization> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    'name': siteConfig.name,
    'url': siteConfig.url,
    'logo': `${siteConfig.url}/api/og`,
    'contactPoint': {
      '@type': 'ContactPoint',
      'email': siteConfig.links.email,
      'contactType': 'Customer Service',
    },
  };
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  price?: string;
  offers?: Offer | AggregateOffer;
  sku?: string;
  mpn?: string;
  brand?: Brand;
}

export function generateProductSchema(props: ProductSchemaProps): WithContext<Product> {
    const { name, description, image, price, offers, sku, mpn, brand } = props;
    
    const offerDetails = offers || (price ? {
        '@type': 'Offer' as const,
        price: price,
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock' as const,
        url: `${siteConfig.url}/pricing`,
    } : undefined);

    const schema: WithContext<Product> = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name,
        description,
        image,
        sku,
        mpn,
        brand,
        offers: offerDetails,
    };

    return schema;
}

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
    datePublished: string;
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
        datePublished: props.datePublished,
        dateModified: props.dateModified,
        author: {
            '@type': 'Organization',
            name: props.authorName || siteConfig.name,
        },
        publisher: defaultPublisher,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': props.url,
        },
    };
}

interface HowToSchemaProps {
    name: string;
    description: string;
    image?: { url: string; width?: number; height?: number; };
    steps: { name: string; text: string; url: string; }[];
    totalTime?: string;
}

function stripHtml(html: string): string {
    return html
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&apos;/g, "'")
        .replace(/&#x27;/g, "'")
        .replace(/&quot;/g, '"')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .trim();
}

export function generateHowToSchema(props: HowToSchemaProps): WithContext<HowTo> {
    const { name, description, image, steps, totalTime } = props;
    return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        image: image ? {
            '@type': 'ImageObject',
            url: image.url,
            width: image.width ? `${image.width}px` : undefined,
            height: image.height ? `${image.height}px` : undefined,
        } : undefined,
        step: steps.map((step, index) => ({
            '@type': 'HowToStep',
            name: step.name,
            text: stripHtml(step.text),
            url: step.url,
            position: index + 1,
        })),
        totalTime: totalTime,
    };
}

interface ServiceSchemaProps {
    serviceType: string;
    providerName: string;
    areaServed: { type: string, name: string};
    name: string;
    description: string;
    offers?: Offer | AggregateOffer;
}

export function generateServiceSchema(props: ServiceSchemaProps): WithContext<Service> {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: props.serviceType,
        provider: {
            '@type': 'Organization',
            name: props.providerName
        },
        areaServed: {
            '@type': props.areaServed.type as any,
            name: props.areaServed.name,
        },
        name: props.name,
        description: props.description,
        offers: props.offers
    }
}
