import type { BreadcrumbItem, BreadcrumbListSchemaData } from "./types";

export interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * Breadcrumb structured data for SEO.
 * Renders a JSON-LD script tag with BreadcrumbList schema.
 *
 * Server component - no client-side JavaScript required.
 *
 * @example
 * <BreadcrumbSchema
 *   items={[
 *     { name: "Home", url: "https://example.com" },
 *     { name: "Blog", url: "https://example.com/blog" },
 *     { name: "Article Title", url: "https://example.com/blog/article" }
 *   ]}
 * />
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema: BreadcrumbListSchemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Re-export type for convenience
export type { BreadcrumbItem };
