"use client";

import Link from "next/link";
import { useState, useCallback, memo } from "react";

/** Navigation link configuration */
interface NavLink {
  href: string;
  label: string;
}

/** Static navigation links - defined outside component to prevent recreation */
const NAV_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/science", label: "The Science" },
  { href: "/cat-litter", label: "Technical Analysis" },
  { href: "/crystal-litter-guide", label: "Crystal Litter Guide" },
];

const PARTNER_URL = "https://www.purrify.ca";

/** Menu icon for mobile hamburger button */
const MenuIcon = memo(function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className="w-6 h-6 text-neutral-600"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      {isOpen ? (
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
  );
});

/** Logo component */
const Logo = memo(function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-[#1a3a4a] rounded-xl flex items-center justify-center shadow-inner">
        <span className="text-[#22c55e] font-black text-lg">C</span>
      </div>
      <div className="flex flex-col">
        <span className="font-black text-[#1a3a4a] leading-tight tracking-tight uppercase text-xs sm:text-sm">
          Crystal Deodorant
        </span>
        <span className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest leading-none">
          Protection Research
        </span>
      </div>
    </Link>
  );
});

/** Desktop navigation component */
const DesktopNav = memo(function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-neutral-500 hover:text-[#1a3a4a] text-xs font-bold uppercase tracking-widest transition-colors"
        >
          {link.label}
        </Link>
      ))}
      <a
        href={PARTNER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
      >
        Partner Portal
      </a>
    </div>
  );
});

/** Mobile navigation component */
interface MobileNavProps {
  isOpen: boolean;
  onLinkClick: () => void;
}

const MobileNav = memo(function MobileNav({ isOpen, onLinkClick }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden py-4 border-t border-neutral-200">
      <div className="flex flex-col space-y-3">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className="text-neutral-500 hover:text-[#1a3a4a] text-xs font-bold uppercase tracking-widest px-2 py-3 border-b border-neutral-50"
          >
            {link.label}
          </Link>
        ))}
        <a
          href={PARTNER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1a3a4a] text-white px-4 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center mt-4 shadow-lg"
        >
          Partner Portal
        </a>
      </div>
    </div>
  );
});

/**
 * Site header with responsive navigation.
 * Uses "use client" for mobile menu state management.
 *
 * Optimizations:
 * - Memoized child components to prevent unnecessary re-renders
 * - useCallback for event handlers
 * - Static data defined outside component
 */
/** Skip link component for keyboard navigation accessibility */
const SkipLink = memo(function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#1a3a4a] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#22c55e]"
    >
      Skip to main content
    </a>
  );
});

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <header className="bg-white border-b border-neutral-200">
      <SkipLink />
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between items-center h-20">
          <Logo />
          <DesktopNav />

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <MenuIcon isOpen={mobileMenuOpen} />
          </button>
        </div>

        <MobileNav isOpen={mobileMenuOpen} onLinkClick={closeMenu} />
      </nav>
    </header>
  );
}
