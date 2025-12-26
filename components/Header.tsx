"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/science", label: "The Science" },
    { href: "/cat-litter", label: "For Your Home" },
    { href: "/crystal-litter-guide", label: "Crystal Litter Guide" },
  ];

  return (
    <header className="bg-white border-b border-neutral-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#b6e3f4] rounded-full flex items-center justify-center">
              <span className="text-[#1a3a4a] font-bold text-sm">C</span>
            </div>
            <span className="font-semibold text-[#1a3a4a] hidden sm:block">
              Crystal Protection
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-[#1a3a4a] text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Shop Purrify
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
          <div className="md:hidden py-4 border-t border-neutral-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-neutral-600 hover:text-[#1a3a4a] text-sm font-medium px-2 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-4 py-2 rounded-full text-sm font-medium text-center transition-colors"
              >
                Shop Purrify
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
