"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/science", label: "The Science" },
    { href: "/cat-litter", label: "Technical Analysis" },
    { href: "/crystal-litter-guide", label: "Crystal Litter Guide" },
  ];

  return (
    <header className="bg-white border-b border-neutral-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-500 hover:text-[#1a3a4a] text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-md"
            >
              Partner Portal
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
                  className="text-neutral-500 hover:text-[#1a3a4a] text-xs font-bold uppercase tracking-widest px-2 py-3 border-b border-neutral-50"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="bg-[#1a3a4a] text-white px-4 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center mt-4 shadow-lg"
              >
                Partner Portal
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
