import type { ProductSchemaData } from "./types";

export interface ProductSchemaProps {
  /** Product name */
  name?: string;
  /** Product description */
  description?: string;
  /** Brand name */
  brand?: string;
  /** Price range */
  price?: {
    low: string;
    high: string;
    currency?: string;
  };
  /** Product URL */
  url?: string;
  /** Aggregate rating */
  rating?: {
    value: string;
    count: string;
    bestRating?: string;
  };
}

/** Default Purrify product values */
const DEFAULTS = {
  name: "Purrify Activated Carbon Cat Litter Additive",
  description:
    "100% natural coconut-based activated carbon that eliminates litter box odor for 7+ days. Works with any cat litter type.",
  brand: "Purrify",
  price: {
    low: "4.76",
    high: "29.99",
    currency: "CAD",
  },
  url: "https://www.purrify.ca",
  rating: {
    value: "4.9",
    count: "138",
    bestRating: "5",
  },
} as const;

/**
 * Product structured data for SEO and rich snippets.
 * Renders a JSON-LD script tag with Product schema.
 *
 * Server component - no client-side JavaScript required.
 *
 * @example
 * // Uses all defaults for Purrify
 * <ProductSchema />
 *
 * // Custom product
 * <ProductSchema
 *   name="Custom Product"
 *   description="Description here"
 *   brand="Brand Name"
 *   price={{ low: "10.00", high: "50.00" }}
 * />
 */
export default function ProductSchema({
  name = DEFAULTS.name,
  description = DEFAULTS.description,
  brand = DEFAULTS.brand,
  price = DEFAULTS.price,
  url = DEFAULTS.url,
  rating = DEFAULTS.rating,
}: ProductSchemaProps = {}) {
  const schema: ProductSchemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: price.low,
      highPrice: price.high,
      priceCurrency: price.currency || "CAD",
      availability: "https://schema.org/InStock",
      url,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.count,
      bestRating: rating.bestRating || "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
