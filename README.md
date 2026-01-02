# Crystal Deodorant Protection

A Next.js 16+ content marketing website focused on cat litter odor control solutions, promoting activated carbon additives. The site targets Canadian cat owners through SEO-optimized comparison articles, city-specific landing pages, and educational blog content.

**Domain**: crystaldeodorantprotection.com
**Primary Product**: Purrify activated carbon cat litter additive (purrify.ca)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Font**: Geist (Sans & Mono)
- **Analytics**: Vercel Analytics
- **Testing**: Jest + React Testing Library

## Project Structure

```
crystal/
├── app/                    # Next.js App Router pages
│   ├── blog/              # Blog posts
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── city/[city]/       # City-specific landing pages
│   ├── compare/[slug]/    # Litter comparison pages
│   ├── guides/            # Guide pages
│   ├── lib/               # Static data sources
│   │   ├── blog-posts.ts  # Blog post content
│   │   ├── cities.ts      # Canadian city data
│   │   └── comparisons.ts # Litter type comparisons
│   └── ...                # Other pages
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   └── schemas/           # SEO structured data
├── public/                # Static assets
└── __tests__/             # Jest test files
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run Jest tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |

## Content Management

All content is statically defined in TypeScript files under `app/lib/`:

### Adding Blog Posts

Edit `app/lib/blog-posts.ts`:

```typescript
{
  slug: 'your-post-slug',
  title: 'Your Post Title',
  metaDescription: 'SEO description (150-160 chars)',
  targetKeyword: 'target keyword',
  publishedDate: '2024-01-01',
  updatedDate: '2024-01-01',
  readingTime: '5 min read',
  excerpt: 'Brief excerpt',
  content: '<p>HTML content...</p>',
  faqs: [{ question: 'Q?', answer: 'A.' }]
}
```

### Adding City Pages

Edit `app/lib/cities.ts`:

```typescript
{
  slug: 'city-name',
  name: 'City Name',
  province: 'Province',
  provinceAbbr: 'XX',
  population: '1,000,000',
  apartmentPercentage: '50%',
  avgRent: '$1,500',
  localFacts: ['Fact 1', 'Fact 2'],
  nearbyAreas: ['Area 1', 'Area 2']
}
```

### Adding Comparison Articles

Edit `app/lib/comparisons.ts`:

```typescript
{
  slug: 'litter1-vs-litter2',
  title: 'Litter 1 vs Litter 2',
  metaDescription: 'SEO description',
  targetKeyword: 'litter 1 vs litter 2',
  intro: 'Introduction text',
  litter1: { /* LitterType object */ },
  litter2: { /* LitterType object */ },
  verdict: 'Conclusion text',
  purrifyPitch: 'Product pitch'
}
```

## SEO Features

- Structured data schemas (Organization, Product, Breadcrumb, WebSite)
- Static generation with `generateStaticParams()`
- Meta descriptions and Open Graph tags
- City-specific landing pages for local SEO
- Comparison articles targeting search intent

## Deployment

The site is optimized for deployment on Vercel:

```bash
npm run build
```

The build generates static pages for all routes at build time for optimal performance.

## Testing

Run the test suite:

```bash
npm test
```

Tests are located in `__tests__/` and use Jest with React Testing Library.

## License

All rights reserved.
