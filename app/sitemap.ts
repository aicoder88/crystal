import type { MetadataRoute } from "next";
import { getAllComparisonSlugs } from "@/app/lib/comparisons";
import { getAllBlogSlugs } from "@/app/lib/blog-posts";
import { getAllCitySlugs } from "@/app/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://crystaldeodorantprotection.com";

  const staticPages = [
    { url: baseUrl, priority: 1, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/science`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/cat-litter`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/crystal-litter-guide`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/statistics`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/tools/litter-calculator`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/guides/ultimate-cat-litter-guide`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const comparisonPages = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityPages = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/city/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map(page => ({ ...page, lastModified: new Date() })),
    ...comparisonPages,
    ...blogPages,
    ...cityPages,
  ];
}
