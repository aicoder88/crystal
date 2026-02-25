# CRYSTAL Improvements

**Type:** Next.js 16 - Cat Litter Content Site
**Production Ready:** No

## Summary
Cat litter content site. Needs testing and documentation.

## Common Fixes

| Priority | Issue | Fix |
|----------|-------|-----|
| HIGH | No tests | Add Jest + React Testing Library |
| MEDIUM | Missing documentation | Create comprehensive README |

## Specific Tasks

### 1. Add Testing Framework
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

### 2. Create Documentation
- Document project structure
- Add development instructions
- Include deployment guide

## Recommended Tooling

```bash
# Testing
npm install --save-dev jest @testing-library/react @testing-library/jest-dom

# Type safety
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

---

# React Component Improvements (2024-12-31)

## Overview

This section documents the component review and improvements made to the Crystal Protection Research Next.js site.

---

## New Reusable Components Created

### UI Components (`/components/ui/`)

| Component | File | Purpose |
|-----------|------|---------|
| `Section` | `Section.tsx` | Consistent section wrapper with padding/background variants |
| `Container` | `Container.tsx` | Max-width container with responsive padding |
| `Button` | `Button.tsx` | Button and ButtonLink components with variants |
| `Card` | `Card.tsx` | Card, LinkCard, and FeatureCard components |
| `BackLink` | `BackLink.tsx` | Consistent back navigation links |
| `SectionHeading` | `SectionHeading.tsx` | Section titles with optional label/subtitle |
| `StatGrid` | `StatGrid.tsx` | Statistics display grid |

### Feature Components (`/components/`)

| Component | File | Purpose |
|-----------|------|---------|
| `CTASection` | `CTASection.tsx` | Reusable call-to-action sections |
| `FAQSection` | `FAQSection.tsx` | FAQ display with optional JSON-LD schema |
| `PurrifyLink` | `PurrifyLink.tsx` | Centralized external link to Purrify |

### Schema Components (`/components/schemas/`)

| Component | File | Purpose |
|-----------|------|---------|
| `ArticleSchema` | `ArticleSchema.tsx` | NEW: Article structured data |
| `types.ts` | `types.ts` | NEW: Shared TypeScript types for all schemas |
| `index.ts` | `index.ts` | NEW: Barrel export for all schemas |

---

## Improvements Made

### 1. Header Component (`/components/Header.tsx`)

**Before:**
- Single large component with all logic inline
- Missing memoization
- Inline navigation data

**After:**
- Decomposed into memoized sub-components: `Logo`, `DesktopNav`, `MobileNav`, `MenuIcon`
- Static navigation data moved outside component
- Added `useCallback` for event handlers
- Improved accessibility with `aria-expanded` attribute
- Added JSDoc documentation

### 2. Litter Calculator (`/app/tools/litter-calculator/page.tsx`)

**Before:**
- Used `useEffect` with missing dependencies (eslint warning)
- Used `any` type for results
- Logic inline in component

**After:**
- Replaced `useEffect` with `useMemo` for calculations
- Added proper TypeScript interfaces (`CalculatorResults`, `LitterType`)
- Extracted pure `calculateResults` function for testability
- Added `useCallback` for all event handlers
- Moved static data outside component (`LITTER_PRICES`, `LITTER_OPTIONS`)
- Added constants for magic numbers

### 3. Schema Components

**Before:**
- Inline interface definitions
- No shared types
- No documentation

**After:**
- Created shared types file (`types.ts`) with Schema.org compliant interfaces
- Added prop interfaces with JSDoc documentation
- Added defaults with `as const` for type safety
- Added barrel export file for easy imports
- Created new `ArticleSchema` component for blog posts

---

## Component Composition Patterns

### Recommended Usage

```tsx
// Before: Repeated patterns in every page
<section className="py-16 sm:py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center text-[#1a3a4a] mb-4">
      Title
    </h2>
    <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
      Subtitle
    </p>
    {/* content */}
  </div>
</section>

// After: Using new components
<Section variant="white" size="lg">
  <Container size="md">
    <SectionHeading
      title="Title"
      subtitle="Subtitle"
      align="center"
    />
    {/* content */}
  </Container>
</Section>
```

### Button Usage

```tsx
// Internal link
<ButtonLink href="/science" variant="primary" size="lg">
  Learn More
</ButtonLink>

// External link (automatically adds target/rel)
<ButtonLink href="https://purrify.ca" external variant="secondary">
  Visit Partner
</ButtonLink>

// Interactive button (requires "use client" in parent)
<Button onClick={handleClick} variant="outline">
  Calculate
</Button>
```

### Card Usage

```tsx
// Feature card with link
<FeatureCard
  title="Feature Title"
  description="Feature description here"
  href="/page"
  linkText="Learn more"
  variant="featured"
/>

// Basic card
<Card variant="default" hoverable>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

---

## Performance Optimizations

### 1. Memoization

- `Header` sub-components wrapped with `memo()`
- Calculator results computed with `useMemo()`
- Event handlers wrapped with `useCallback()`

### 2. Static Data Extraction

Moved static data outside components to prevent recreation:
- `NAV_LINKS` in Header
- `LITTER_PRICES` and `LITTER_OPTIONS` in calculator
- `DEFAULTS` in schema components

### 3. Server Components

All new UI components are server components by default:
- `Section`, `Container`, `Card`, `SectionHeading`, `StatGrid`
- `CTASection`, `FAQSection`, `PurrifyLink`
- All schema components

Only components with interactivity need `"use client"`:
- `Header` (mobile menu toggle)
- `LitterCalculatorPage` (form state)

---

## TypeScript Improvements

### Proper Type Definitions

```typescript
// Before
const [results, setResults] = useState<any>(null);

// After
interface CalculatorResults {
  baseCost: number;
  totalMonthlyCost: number;
  annualCost: number;
  // ...
}
const results = useMemo(() => calculateResults(...), [...]);
```

### Schema Types

Created comprehensive types for JSON-LD schemas:
- `OrganizationSchemaData`
- `WebSiteSchemaData`
- `ProductSchemaData`
- `BreadcrumbListSchemaData`
- `FAQPageSchemaData`
- `ArticleSchemaData`

---

## Missing Components (Future Work)

Consider creating these additional components:

1. **ComparisonTable** - Reusable comparison table with consistent styling
2. **HeroSection** - Standardized hero layouts with image/gradient backgrounds
3. **CityCard** - Specialized card for city page links
4. **ArticleCard** - Blog post preview cards
5. **RatingBadge** - Color-coded rating badges (currently inline in compare page)
6. **LitterCard** - Litter type comparison cards

---

## File Structure

```
components/
  ui/
    index.ts              # Barrel export
    Section.tsx           # Section wrapper
    Container.tsx         # Container wrapper
    Button.tsx            # Button/ButtonLink
    Card.tsx              # Card/LinkCard/FeatureCard
    BackLink.tsx          # Back navigation
    SectionHeading.tsx    # Section headers
    StatGrid.tsx          # Statistics grid
  schemas/
    index.ts              # Barrel export
    types.ts              # Shared TypeScript types
    ArticleSchema.tsx     # Article structured data
    BreadcrumbSchema.tsx  # Breadcrumb structured data
    OrganizationSchema.tsx # Organization structured data
    ProductSchema.tsx     # Product structured data
    WebSiteSchema.tsx     # Website structured data
  CTASection.tsx          # Call-to-action section
  FAQSection.tsx          # FAQ display with schema
  Header.tsx              # Site header (improved)
  Footer.tsx              # Site footer
  PurrifyLink.tsx         # External Purrify link
```

---

## Migration Guide

To migrate existing pages to use new components:

1. Import from barrel exports:
   ```tsx
   import { Section, Container, SectionHeading } from "@/components/ui";
   import { BreadcrumbSchema, ProductSchema } from "@/components/schemas";
   ```

2. Replace repeated section patterns with `<Section>` + `<Container>`

3. Replace inline CTAs with `<CTASection>`

4. Replace inline FAQs with `<FAQSection>`

5. Use `<PurrifyLink>` for all Purrify external links

---

## Testing

The build passes successfully with all changes:

```bash
npm run build
# Compiled successfully
# Generating static pages (52/52)
```
