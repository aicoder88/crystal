// Schema components barrel export
export { default as ArticleSchema } from "./ArticleSchema";
export type { ArticleSchemaProps } from "./ArticleSchema";

export { default as BreadcrumbSchema } from "./BreadcrumbSchema";
export type { BreadcrumbSchemaProps, BreadcrumbItem } from "./BreadcrumbSchema";

export { default as OrganizationSchema } from "./OrganizationSchema";
export type { OrganizationSchemaProps } from "./OrganizationSchema";

export { default as ProductSchema } from "./ProductSchema";
export type { ProductSchemaProps } from "./ProductSchema";

export { default as WebSiteSchema } from "./WebSiteSchema";
export type { WebSiteSchemaProps } from "./WebSiteSchema";

// Type exports
export type {
  FAQItem,
  FAQPageSchemaData,
  ArticleSchemaData,
  BreadcrumbListSchemaData,
  OrganizationSchemaData,
  ProductSchemaData,
  WebSiteSchemaData,
} from "./types";
