import type { OrganizationSchemaData } from "./types";

export interface OrganizationSchemaProps {
  /** Override default organization name */
  name?: string;
  /** Override default URL */
  url?: string;
  /** Override default logo */
  logo?: string;
  /** Override default description */
  description?: string;
  /** Social media profile URLs */
  sameAs?: string[];
}

/** Default organization values */
const DEFAULTS = {
  name: "Crystal Deodorant Protection",
  url: "https://crystaldeodorantprotection.com",
  logo: "https://crystaldeodorantprotection.com/og-image.png",
  description:
    "Educational resource about natural odor control solutions including crystal deodorants, crystal cat litter, and activated carbon technology.",
} as const;

/**
 * Organization structured data for SEO.
 * Renders a JSON-LD script tag with Organization schema.
 *
 * Server component - no client-side JavaScript required.
 *
 * @example
 * // Uses all defaults
 * <OrganizationSchema />
 *
 * // With custom values
 * <OrganizationSchema
 *   sameAs={["https://twitter.com/example", "https://facebook.com/example"]}
 * />
 */
export default function OrganizationSchema({
  name = DEFAULTS.name,
  url = DEFAULTS.url,
  logo = DEFAULTS.logo,
  description = DEFAULTS.description,
  sameAs = [],
}: OrganizationSchemaProps = {}) {
  const schema: OrganizationSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    description,
    sameAs,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
