import type { WebSiteSchemaData } from "./types";

export interface WebSiteSchemaProps {
  /** Override default site name */
  name?: string;
  /** Override default URL */
  url?: string;
  /** Override default description */
  description?: string;
  /** Enable site search action */
  enableSearch?: boolean;
  /** Search URL template (use {search_term_string} as placeholder) */
  searchTarget?: string;
}

/** Default values */
const DEFAULTS = {
  name: "Crystal Deodorant Protection",
  url: "https://crystaldeodorantprotection.com",
  description:
    "Learn about natural odor control from crystal deodorants to activated carbon cat litter solutions.",
  searchTarget: "https://crystaldeodorantprotection.com/blog?q={search_term_string}",
} as const;

/**
 * WebSite structured data for SEO.
 * Renders a JSON-LD script tag with WebSite schema.
 *
 * Server component - no client-side JavaScript required.
 *
 * @example
 * // Uses all defaults
 * <WebSiteSchema />
 *
 * // Disable search action
 * <WebSiteSchema enableSearch={false} />
 */
export default function WebSiteSchema({
  name = DEFAULTS.name,
  url = DEFAULTS.url,
  description = DEFAULTS.description,
  enableSearch = true,
  searchTarget = DEFAULTS.searchTarget,
}: WebSiteSchemaProps = {}) {
  const schema: WebSiteSchemaData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name,
    url,
    description,
  };

  if (enableSearch) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: searchTarget,
      "query-input": "required name=search_term_string",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
