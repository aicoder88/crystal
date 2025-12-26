export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Crystal Deodorant Protection",
    "url": "https://crystaldeodorantprotection.com",
    "description": "Learn about natural odor control from crystal deodorants to activated carbon cat litter solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://crystaldeodorantprotection.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
