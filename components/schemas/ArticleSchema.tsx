import type { ArticleSchemaData } from "./types";

export interface ArticleSchemaProps {
  /** Article headline/title */
  headline: string;
  /** Article description/excerpt */
  description: string;
  /** Published date (ISO 8601 format) */
  datePublished: string;
  /** Last modified date (ISO 8601 format) */
  dateModified?: string;
  /** Author name */
  authorName?: string;
  /** Author type */
  authorType?: "Organization" | "Person";
  /** Publisher name */
  publisherName?: string;
  /** Publisher URL */
  publisherUrl?: string;
  /** Featured image URL */
  image?: string;
}

/** Default values */
const DEFAULTS = {
  authorName: "Crystal Deodorant Protection",
  authorType: "Organization" as const,
  publisherName: "Crystal Deodorant Protection",
  publisherUrl: "https://crystaldeodorantprotection.com",
};

/**
 * Article structured data for SEO.
 * Renders a JSON-LD script tag with Article schema.
 *
 * Server component - no client-side JavaScript required.
 *
 * @example
 * <ArticleSchema
 *   headline="How to Control Litter Box Odor"
 *   description="A comprehensive guide..."
 *   datePublished="2024-01-15"
 *   dateModified="2024-06-20"
 * />
 */
export default function ArticleSchema({
  headline,
  description,
  datePublished,
  dateModified,
  authorName = DEFAULTS.authorName,
  authorType = DEFAULTS.authorType,
  publisherName = DEFAULTS.publisherName,
  publisherUrl = DEFAULTS.publisherUrl,
  image,
}: ArticleSchemaProps) {
  const schema: ArticleSchemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished,
    author: {
      "@type": authorType,
      name: authorName,
    },
  };

  if (dateModified) {
    schema.dateModified = dateModified;
  }

  if (publisherName) {
    schema.publisher = {
      "@type": "Organization",
      name: publisherName,
      url: publisherUrl,
    };
  }

  if (image) {
    schema.image = image;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
