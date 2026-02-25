# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 16+ (App Router) content marketing website focused on cat litter odor control solutions, specifically promoting activated carbon additives. The site targets Canadian cat owners through SEO-optimized comparison articles, city-specific landing pages, and educational blog content about crystal/silica cat litter vs. alternatives.

**Domain**: crystaldeodorantprotection.com (cat litter focus, not deodorant)
**Primary Product**: Purrify activated carbon cat litter additive (purrify.ca)

## Commands

### Development
```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Testing
There are no test scripts currently configured in this project.

## Architecture & Structure

### Next.js App Router (app/)

This project uses Next.js 16 with the App Router architecture:

- **Dynamic Routes**:
  - `/city/[city]` - City-specific landing pages (e.g., /city/toronto)
  - `/compare/[slug]` - Litter comparison pages (e.g., /compare/crystal-vs-clay)
  - `/blog/[slug]` - Individual blog posts
  - `/guides/[...]` - Guide pages

- **Static Data Sources**: All content is defined in TypeScript files under `app/lib/`:
  - `cities.ts` - Canadian city data (15 cities with demographics, facts)
  - `comparisons.ts` - Litter type comparisons (crystal vs. clay, tofu, pine, etc.)
  - `blog-posts.ts` - Full blog post content including HTML and FAQs

### Content Strategy

The site follows a specific SEO pattern:
1. **Comparison pages** target keywords like "crystal cat litter vs clay"
2. **City pages** target local searches like "cat litter Toronto"
3. **Blog posts** target informational queries like "why does cat litter smell"
4. All content leads to Purrify product (activated carbon additive)

### Structured Data (SEO)

Structured data schemas are in `components/schemas/`:
- `BreadcrumbSchema.tsx` - Navigation breadcrumbs
- `OrganizationSchema.tsx` - Company information
- `ProductSchema.tsx` - Product structured data for Purrify
- `WebSiteSchema.tsx` - Website metadata

These are used for rich snippets in search results.

### Key Data Structures

**City Interface** (`app/lib/cities.ts`):
```typescript
interface City {
  slug: string;
  name: string;
  province: string;
  provinceAbbr: string;
  population: string;
  apartmentPercentage: string;
  avgRent: string;
  localFacts: string[];
  nearbyAreas: string[];
}
```

**Comparison Interface** (`app/lib/comparisons.ts`):
```typescript
interface Comparison {
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  intro: string;
  litter1: LitterType;
  litter2: LitterType;
  verdict: string;
  purrifyPitch: string;
}
```

**BlogPost Interface** (`app/lib/blog-posts.ts`):
```typescript
interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  excerpt: string;
  content: string; // HTML content
  faqs: { question: string; answer: string }[];
}
```

### Static Generation

All routes use Next.js `generateStaticParams()` to pre-generate pages at build time:
- City pages generated from `cities.ts` data
- Comparison pages generated from `comparisons.ts` data
- Blog pages generated from `blog-posts.ts` data

This ensures fast performance and good SEO.

### Styling

- **Tailwind CSS 4** with PostCSS
- **Geist font family** (Sans and Mono variants)
- Global styles in `app/globals.css`
- Responsive design with mobile-first approach

### Analytics

Vercel Analytics integrated via `@vercel/analytics/react` in the root layout.

## Important Technical Details

### TypeScript Configuration
- Path alias: `@/*` maps to project root
- Strict mode enabled
- Target: ES2017
- JSX: react-jsx (React 19 compatible)

### Next.js Configuration
- Remote images allowed from `images.unsplash.com`
- Configured in `next.config.ts`

### SEO & Metadata
- `metadataBase`: https://crystaldeodorantprotection.com
- OpenGraph and Twitter card metadata in root layout
- Each page should define its own metadata using Next.js Metadata API

## Content Patterns

When adding new content to this site:

1. **Comparison Articles**: Add to `app/lib/comparisons.ts` in the `comparisons` array
2. **City Pages**: Add to `app/lib/cities.ts` in the `cities` array
3. **Blog Posts**: Add to `app/lib/blog-posts.ts` in the `blogPosts` array

All content must include:
- Target keyword for SEO
- Meta description (150-160 chars)
- Structured internal linking to Purrify product
- Canadian spelling and context (e.g., "odour" vs "odor" - note: this codebase uses American spelling)

## Development Notes

- No test suite configured yet
- No database - all content is statically defined in TypeScript files
- Focus on SEO optimization and content marketing
- All pages should load quickly (static generation)
- Internal links use Next.js `Link` component for client-side navigation
