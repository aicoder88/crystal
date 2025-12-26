export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crystal Deodorant Protection",
    "url": "https://crystaldeodorantprotection.com",
    "logo": "https://crystaldeodorantprotection.com/og-image.png",
    "description": "Educational resource about natural odor control solutions including crystal deodorants, crystal cat litter, and activated carbon technology.",
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
