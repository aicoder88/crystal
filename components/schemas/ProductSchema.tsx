export default function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Purrify Activated Carbon Cat Litter Additive",
    "description": "100% natural coconut-based activated carbon that eliminates litter box odor for 7+ days. Works with any cat litter type.",
    "brand": {
      "@type": "Brand",
      "name": "Purrify"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "4.76",
      "highPrice": "29.99",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.purrify.ca"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "138",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
