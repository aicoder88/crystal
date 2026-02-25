/**
 * Shared types for JSON-LD schema components.
 * Based on Schema.org vocabulary.
 */

/** Base schema context */
export interface SchemaBase {
  "@context": "https://schema.org";
  "@type": string;
}

/** Organization schema type */
export interface OrganizationSchemaData extends SchemaBase {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

/** WebSite schema type */
export interface WebSiteSchemaData extends SchemaBase {
  "@type": "WebSite";
  name: string;
  url: string;
  description?: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

/** Product schema type */
export interface ProductSchemaData extends SchemaBase {
  "@type": "Product";
  name: string;
  description: string;
  brand?: {
    "@type": "Brand";
    name: string;
  };
  offers?: {
    "@type": "AggregateOffer";
    lowPrice: string;
    highPrice: string;
    priceCurrency: string;
    availability: string;
    url: string;
  };
  aggregateRating?: {
    "@type": "AggregateRating";
    ratingValue: string;
    reviewCount: string;
    bestRating: string;
  };
}

/** Breadcrumb list item */
export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Breadcrumb list schema type */
export interface BreadcrumbListSchemaData extends SchemaBase {
  "@type": "BreadcrumbList";
  itemListElement: {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }[];
}

/** FAQ item for FAQ schema */
export interface FAQItem {
  question: string;
  answer: string;
}

/** FAQ page schema type */
export interface FAQPageSchemaData extends SchemaBase {
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

/** Article schema type */
export interface ArticleSchemaData extends SchemaBase {
  "@type": "Article";
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author: {
    "@type": "Organization" | "Person";
    name: string;
  };
  publisher?: {
    "@type": "Organization";
    name: string;
    url: string;
  };
  image?: string;
}
