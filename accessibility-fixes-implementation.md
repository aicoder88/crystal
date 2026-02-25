# Accessibility Fixes - Implementation Guide

This document provides ready-to-use code for implementing the critical accessibility fixes identified in the audit.

## Quick Start: Critical Fixes

### 1. Update globals.css - Add Focus Styles and Utilities

Add this to `/app/globals.css`:

```css
/* Screen reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* Show when focused (for skip links) */
.sr-only:focus {
  position: fixed;
  width: auto;
  height: auto;
  padding: 1rem 1.5rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
  background-color: var(--accent-green);
  color: white;
  z-index: 9999;
  top: 1rem;
  left: 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Focus visible styles for keyboard navigation */
*:focus-visible {
  outline: 3px solid var(--accent-green);
  outline-offset: 2px;
}

/* Focus styles for links */
a:focus-visible {
  outline: 3px solid var(--accent-green);
  outline-offset: 2px;
  text-decoration: underline;
  border-radius: 2px;
}

/* Focus styles for buttons */
button:focus-visible {
  outline: 3px solid var(--accent-green);
  outline-offset: 2px;
  box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
}

/* Ensure focus is never completely hidden */
*:focus {
  outline: 2px solid transparent;
}

/* Remove default focus styles only when :focus-visible is supported */
*:focus:not(:focus-visible) {
  outline: none;
}
```

---

### 2. Update Header Component

Replace `/components/Header.tsx` with this accessible version:

```tsx
"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/science", label: "The Science" },
    { href: "/cat-litter", label: "Technical Analysis" },
    { href: "/crystal-litter-guide", label: "Crystal Litter Guide" },
  ];

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white border-b border-neutral-200">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only"
      >
        Skip to main content
      </a>

      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3"
            aria-label="Crystal Deodorant Protection homepage"
          >
            <div
              className="w-10 h-10 bg-[#1a3a4a] rounded-xl flex items-center justify-center shadow-inner"
              aria-hidden="true"
            >
              <span className="text-[#22c55e] font-black text-lg">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-[#1a3a4a] leading-tight tracking-tight uppercase text-xs sm:text-sm">
                Crystal Deodorant
              </span>
              <span className="text-[10px] text-neutral-500 font-bold uppercase tracking-widest leading-none">
                Protection Research
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-[#1a3a4a] focus:text-[#1a3a4a] text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              Partner Portal
              <span className="sr-only"> (opens in new window)</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 focus:bg-neutral-100"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="w-6 h-6 text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden py-4 border-t border-neutral-200"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-500 hover:text-[#1a3a4a] focus:text-[#1a3a4a] text-xs font-bold uppercase tracking-widest px-2 py-3 border-b border-neutral-50"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a3a4a] text-white px-4 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center mt-4 shadow-lg"
              >
                Partner Portal
                <span className="sr-only"> (opens in new window)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
```

---

### 3. Update Footer Component

Replace `/components/Footer.tsx`:

```tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a4a] text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Crystal Protection</h2>
            <p className="text-neutral-200 text-sm leading-relaxed">
              Exploring natural odor control solutions from crystal technology
              to activated carbon. Discover the science behind fresh living.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-semibold text-lg mb-4">Learn More</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/science"
                  className="text-neutral-200 hover:text-[#b6e3f4] focus:text-[#b6e3f4] text-sm transition-colors"
                >
                  The Science
                </Link>
              </li>
              <li>
                <Link
                  href="/cat-litter"
                  className="text-neutral-200 hover:text-[#b6e3f4] focus:text-[#b6e3f4] text-sm transition-colors"
                >
                  For Your Home
                </Link>
              </li>
              <li>
                <Link
                  href="/crystal-litter-guide"
                  className="text-neutral-200 hover:text-[#b6e3f4] focus:text-[#b6e3f4] text-sm transition-colors"
                >
                  Crystal Litter Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-200 hover:text-[#b6e3f4] focus:text-[#b6e3f4] text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-neutral-200 hover:text-[#b6e3f4] focus:text-[#b6e3f4] text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </nav>

          {/* Partnerships */}
          <div>
            <h2 className="font-semibold text-lg mb-4 text-[#b6e3f4]">
              Technical Partners
            </h2>
            <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
              We collaborate with material science organizations to document the performance of
              high-surface-area porous media.
            </p>
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-[#22c55e] hover:text-white focus:text-white transition-colors font-medium"
            >
              <span>Visit Purrify Canada</span>
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              <span className="sr-only">(opens in new window)</span>
            </a>
            <div className="mt-6 pt-6 border-t border-white/5">
              <p className="text-neutral-500 text-[10px] uppercase tracking-widest font-bold">
                Verification Standard
              </p>
              <p className="text-neutral-400 text-xs mt-1">
                2024 Molecular Integrity Compliance
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-600 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Crystal Deodorant Protection. All
            rights reserved.
          </p>
          <p className="text-neutral-400 text-sm mt-2 sm:mt-0">
            Proudly partnered with{" "}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b6e3f4] hover:text-white focus:text-white transition-colors"
            >
              Purrify
              <span className="sr-only"> (opens in new window)</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

### 4. Update Root Layout

Update `/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crystaldeodorantprotection.com"),
  title: {
    default: "Crystal Technology: Natural Odor Control | Crystal Deodorant Protection",
    template: "%s | Crystal Deodorant Protection",
  },
  description:
    "Discover natural odor control solutions from crystal deodorants to activated carbon technology. Learn how mineral-based and carbon solutions eliminate odors naturally.",
  keywords: [
    "crystal deodorant",
    "crystal cat litter",
    "natural odor control",
    "activated carbon",
    "potassium alum",
    "silica gel litter",
    "natural cat litter additive",
  ],
  authors: [{ name: "Crystal Deodorant Protection" }],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://crystaldeodorantprotection.com",
    siteName: "Crystal Deodorant Protection",
    title: "Crystal Technology: Natural Odor Control for Body & Home",
    description:
      "From crystal deodorants to activated carbon cat litter solutions. Explore the science of natural odor elimination.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crystal Deodorant Protection - Natural Odor Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crystal Technology: Natural Odor Control",
    description:
      "Discover natural odor control from crystal deodorants to activated carbon solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow" role="main" id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
```

---

### 5. Create Accessible Icon Component

Create `/components/Icon.tsx` for reusable accessible icons:

```tsx
interface IconProps {
  children: React.ReactNode;
  label: string;
  isDecorative?: boolean;
}

export function Icon({ children, label, isDecorative = false }: IconProps) {
  if (isDecorative) {
    return <span aria-hidden="true">{children}</span>;
  }

  return (
    <span role="img" aria-label={label}>
      {children}
    </span>
  );
}

// Usage example:
// <Icon label="Checkmark indicating benefit">✓</Icon>
// <Icon isDecorative>→</Icon>
```

---

### 6. Fix Comparison Table (Example for Science Page)

Update table in `/app/science/page.tsx` (lines 196-282):

```tsx
<div className="bg-white rounded-2xl shadow-lg overflow-hidden">
  <table className="w-full" role="table">
    <caption className="sr-only">
      Detailed comparison between Crystal Cat Litter and Purrify Activated Carbon across seven key features
    </caption>
    <thead>
      <tr className="bg-[#1a3a4a] text-white">
        <th scope="col" className="text-left py-4 px-6 font-medium">
          Feature
        </th>
        <th scope="col" className="text-center py-4 px-6 font-medium">
          Crystal Cat Litter
        </th>
        <th scope="col" className="text-center py-4 px-6 font-medium bg-[#22c55e]">
          <a
            href="https://www.purrify.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline focus:underline"
          >
            Purrify Activated Carbon
            <span className="sr-only"> (opens in new window)</span>
          </a>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="border-b border-neutral-100">
        <th scope="row" className="py-4 px-6 text-neutral-700 text-left font-normal">
          How it works
        </th>
        <td className="py-4 px-6 text-center text-neutral-500">
          Absorbs moisture
        </td>
        <td className="py-4 px-6 text-center text-[#1a3a4a] font-medium bg-[#22c55e]/5">
          Traps odor molecules
        </td>
      </tr>
      <tr className="border-b border-neutral-100">
        <th scope="row" className="py-4 px-6 text-neutral-700 text-left font-normal">
          Material
        </th>
        <td className="py-4 px-6 text-center text-neutral-500">
          Synthetic silica gel
        </td>
        <td className="py-4 px-6 text-center text-[#1a3a4a] font-medium bg-[#22c55e]/5">
          Natural coconut carbon
        </td>
      </tr>
      <tr className="border-b border-neutral-100">
        <th scope="row" className="py-4 px-6 text-neutral-700 text-left font-normal">
          Works with existing litter
        </th>
        <td className="py-4 px-6 text-center">
          <span className="text-red-500" aria-label="No">✗</span>
          <span className="sr-only">No</span>
        </td>
        <td className="py-4 px-6 text-center bg-[#22c55e]/5">
          <span className="text-[#22c55e]" aria-label="Yes">✓</span>
          <span className="sr-only">Yes, any type</span>
        </td>
      </tr>
      {/* Continue pattern for remaining rows... */}
    </tbody>
  </table>
</div>
```

---

### 7. Fix List Items with Icons

Update list items throughout the site (example from `/app/page.tsx`):

```tsx
<ul className="text-sm text-neutral-600 space-y-2">
  <li className="flex items-start">
    <span className="text-[#22c55e] mr-2" aria-hidden="true">✓</span>
    <span><span className="sr-only">Benefit: </span>Doesn't block sweat</span>
  </li>
  <li className="flex items-start">
    <span className="text-[#22c55e] mr-2" aria-hidden="true">✓</span>
    <span><span className="sr-only">Benefit: </span>No aluminum chloride</span>
  </li>
  <li className="flex items-start">
    <span className="text-[#22c55e] mr-2" aria-hidden="true">✓</span>
    <span><span className="sr-only">Benefit: </span>Lasts up to 1 year</span>
  </li>
</ul>
```

For negative indicators:

```tsx
<li className="flex items-start">
  <span className="text-neutral-400 mr-2" aria-hidden="true">•</span>
  <span><span className="sr-only">Limitation: </span>Absorbs moisture</span>
</li>
```

---

### 8. Fix External Links

Add proper attributes to all external links:

```tsx
<a
  href="https://www.purrify.ca"
  target="_blank"
  rel="noopener noreferrer"
  className="purrify-link"
>
  Purrify activated carbon
  <span className="sr-only"> (opens in new window)</span>
</a>
```

---

### 9. Fix Image Alt Text

Update all decorative background images:

```tsx
<Image
  src="/hero-background.png"
  alt=""
  fill
  className="object-cover opacity-40 mix-blend-overlay"
  priority
  role="presentation"
/>
```

Update informative images with descriptive alt text:

```tsx
<Image
  src="/images/crystal_deodorant.png"
  alt="Natural crystal deodorant stone made from potassium alum, a transparent mineral used for body odor control"
  fill
  className="object-cover"
/>

<Image
  src="https://images.unsplash.com/photo-1760533536490-08a2e3470c9e?w=800&h=600&fit=crop"
  alt="White silica gel crystals used in crystal cat litter for absorbing moisture from litter boxes"
  fill
  className="object-cover"
/>

<Image
  src="https://images.unsplash.com/photo-1534259434801-e3d2427ae102?w=800&h=600&fit=crop"
  alt="Microscopic view of activated carbon's highly porous structure showing the molecular adsorption sites that trap odor compounds"
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500"
/>
```

---

### 10. Fix Rating Badges

Update `/app/compare/[slug]/page.tsx`:

```tsx
function RatingBadge({ rating, type }: { rating: string; type: "good" | "neutral" | "bad" }) {
  const colors = {
    good: "bg-green-100 text-green-900",
    neutral: "bg-yellow-100 text-yellow-900",
    bad: "bg-red-100 text-red-900"
  };

  const ariaLabels = {
    good: "Positive rating",
    neutral: "Neutral rating",
    bad: "Negative rating"
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${colors[type]}`}
      role="status"
      aria-label={`${ariaLabels[type]}: ${rating}`}
    >
      {rating}
    </span>
  );
}
```

---

## Testing After Implementation

### 1. Keyboard Navigation Test

```bash
# Test flow:
1. Tab through entire page
2. Verify all interactive elements are reachable
3. Verify focus indicators are visible
4. Test skip link (Tab once, press Enter)
5. Test mobile menu (Tab to button, press Enter, Tab through menu, press Escape)
6. Verify no keyboard traps
```

### 2. Screen Reader Test (macOS with VoiceOver)

```bash
# Enable VoiceOver
CMD + F5

# Navigate by headings
VO + CMD + H

# Navigate by landmarks
VO + CMD + U (then use arrow keys)

# Test all links and buttons
# Verify all images have appropriate descriptions
```

### 3. Automated Testing

```bash
# Install tools
npm install -D @axe-core/cli
npm install -D pa11y

# Run tests
npx axe http://localhost:3000
npx pa11y http://localhost:3000
```

### 4. Color Contrast Check

Visit each page and use browser DevTools Lighthouse audit or WebAIM Contrast Checker.

---

## Quick Validation Checklist

After implementing fixes:

- [ ] Skip link visible and functional when focused
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible on all elements
- [ ] Mobile menu announces open/closed state
- [ ] All images have appropriate alt text (descriptive or empty)
- [ ] All icons have screen reader text or aria-hidden
- [ ] Tables have proper headers with scope
- [ ] All external links note they open in new window
- [ ] Color contrast meets 4.5:1 ratio
- [ ] Heading hierarchy is logical (h1 → h2 → h3)
- [ ] ARIA labels present on navigation landmarks
- [ ] Footer navigation has proper landmark
- [ ] Logo link has descriptive label

---

## Files Modified Summary

1. `/app/globals.css` - Added focus styles and .sr-only utility
2. `/components/Header.tsx` - Added ARIA attributes, skip link, keyboard support
3. `/components/Footer.tsx` - Added navigation landmarks and improved contrast
4. `/app/layout.tsx` - Added main landmark with tabIndex
5. `/app/science/page.tsx` - Fixed table headers and alt text
6. `/app/page.tsx` - Fixed icons, lists, and image alt text
7. `/app/compare/[slug]/page.tsx` - Enhanced rating badges
8. `/components/Icon.tsx` - New reusable accessible icon component

---

**Next Steps:**
1. Implement these fixes in order
2. Test with keyboard navigation
3. Test with screen readers
4. Run automated accessibility tests
5. Create accessibility statement page
6. Document accessibility features for users
