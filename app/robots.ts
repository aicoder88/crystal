import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    host: "https://www.crystaldeodorantprotection.com",
    sitemap: "https://www.crystaldeodorantprotection.com/sitemap.xml",
  };
}
