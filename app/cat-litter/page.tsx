import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductSchema from "@/components/schemas/ProductSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Evaluation of Molecular Odor Control in Feline Substrates",
  description:
    "A technical analysis of crystal, clay, and organic feline substrates. Comparing moisture absorption versus molecular adsorption for residential air quality management.",
  keywords: [
    "cat litter technology",
    "feline substrate analysis",
    "molecular odor control",
    "porous media odor trapping",
    "litter performance benchmarking",
  ],
};

export default function CatLitterPage() {
  return (
    <>
      <ProductSchema />
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystaldeodorantprotection.com" },
        { name: "Technical Analysis", url: "https://crystaldeodorantprotection.com/cat-litter" }
      ]} />
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1a3a4a]/5 to-white py-20 sm:py-32 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#22c55e] font-bold text-xs tracking-[0.2em] uppercase mb-4 block">
            Technical Analysis Report
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1a3a4a] mb-8 leading-[1.1]">
            Substrate Performance &
            <br />
            <span className="text-[#22c55e]">Molecular Adsorption</span>
          </h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Comparative analysis of traditional silica gels versus advanced porous media for
            long-term environmental odor mitigation in residential settings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/science"
              className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg"
            >
              Examine Technical Data
            </Link>
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="bg-white border-2 border-[#1a3a4a]/10 hover:border-[#1a3a4a] text-[#1a3a4a] px-10 py-4 rounded-full font-semibold text-lg transition-all"
            >
              View Specifications
            </a>
          </div>
        </div>
      </section>

      {/* Problem with Crystal Litter */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a4a] mb-8 text-center">
            The Problem with Crystal Cat Litter
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Dust Issues
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Silica gel crystals can produce fine dust that irritates both
                cat and human respiratory systems. Many cat owners report dust
                clouds when pouring or when cats dig.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Texture Cats Dislike
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The hard, angular crystals feel unnatural to cats. Many cats
                refuse to use crystal litter entirely, leading to accidents
                outside the box.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Ammonia Still Escapes
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Crystal litter absorbs moisture but ammonia molecules still
                escape into your home. You&apos;ll notice the smell returns within
                2-3 days even with &quot;fresh&quot; crystals.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Expensive to Replace
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                You can&apos;t mix crystal litter with regular litter &mdash; you
                have to replace your entire litter system. This all-or-nothing
                approach is costly and wasteful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmarking Molecular Adsorption */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#22c55e] font-bold text-xs tracking-widest uppercase block mb-4">
                Research Benchmark
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1a3a4a] mb-8 leading-tight">
                Reference Standard:
                <br />
                <span className="text-[#22c55e]">Porous Carbon Media</span>
              </h2>
              <p className="text-neutral-500 mb-8 text-lg leading-relaxed font-light">
                Our analysis identifies coconut-based activated carbon as the current
                technical benchmark for non-chemical odor neutralization. Unlike silica,
                which functions via surface absorption, porous carbon employs molecular
                adsorption to trap ammonia (NH₃) and volatile organic compounds (VOCs).
              </p>
              <ul className="grid sm:grid-cols-2 gap-6 mb-10">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1a3a4a] text-white flex items-center justify-center flex-shrink-0 text-xs mt-1">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3a4a]">High Surface Area</h4>
                    <p className="text-sm text-neutral-500">Typical internal surface area of 1,000+ m²/g.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1a3a4a] text-white flex items-center justify-center flex-shrink-0 text-xs mt-1">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3a4a]">Cross-Substrate</h4>
                    <p className="text-sm text-neutral-500">Functions independently of the base litter material.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1a3a4a] text-white flex items-center justify-center flex-shrink-0 text-xs mt-1">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3a4a]">Passive Mitigation</h4>
                    <p className="text-sm text-neutral-500">Requires no mechanical energy or chemical reagents.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#1a3a4a] text-white flex items-center justify-center flex-shrink-0 text-xs mt-1">
                    04
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a3a4a]">Eco-Compliant</h4>
                    <p className="text-sm text-neutral-500">Derived from sustainable organic precursors.</p>
                  </div>
                </li>
              </ul>
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="inline-block bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
              >
                Access Technical Partner Site
              </a>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=800&h=1000&fit=crop"
                alt="Analytical focus on feline environment"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-[#1a3a4a]/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1a3a4a] mb-12">
            Crystal Litter vs Purrify + Any Litter
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Crystal Litter */}
            <div className="bg-neutral-100 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-neutral-700 mb-6 text-center">
                Crystal Cat Litter
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-neutral-600">
                  <span className="text-red-500 mr-3">✗</span>
                  Replaces your entire litter system
                </li>
                <li className="flex items-center text-neutral-600">
                  <span className="text-red-500 mr-3">✗</span>
                  Synthetic silica gel material
                </li>
                <li className="flex items-center text-neutral-600">
                  <span className="text-red-500 mr-3">✗</span>
                  Can produce dust
                </li>
                <li className="flex items-center text-neutral-600">
                  <span className="text-red-500 mr-3">✗</span>
                  Some cats refuse the texture
                </li>
                <li className="flex items-center text-neutral-600">
                  <span className="text-red-500 mr-3">✗</span>
                  Odor returns in 2-3 days
                </li>
                <li className="flex items-center text-neutral-600">
                  <span className="text-red-500 mr-3">✗</span>
                  Higher ongoing cost
                </li>
              </ul>
            </div>

            {/* Purrify */}
            <div className="bg-[#22c55e]/10 rounded-2xl p-8 border-2 border-[#22c55e]">
              <h3 className="text-xl font-semibold text-[#22c55e] mb-6 text-center">
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener"
                  className="hover:underline"
                >
                  Purrify + Your Favorite Litter
                </a>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-neutral-700">
                  <span className="text-[#22c55e] mr-3">✓</span>
                  Keep your cat&apos;s preferred litter
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="text-[#22c55e] mr-3">✓</span>
                  100% natural coconut carbon
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="text-[#22c55e] mr-3">✓</span>
                  Completely dust-free
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="text-[#22c55e] mr-3">✓</span>
                  Cats don&apos;t notice it
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="text-[#22c55e] mr-3">✓</span>
                  7+ days odor-free guaranteed
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="text-[#22c55e] mr-3">✓</span>
                  Extends litter life, saves money
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Specifications */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-center text-[#1a3a4a] mb-2 uppercase tracking-tighter">
            System Implementation Sizes
          </h2>
          <p className="text-neutral-500 text-center max-w-2xl mx-auto mb-16 font-light">
            Technical specifications for residential implementations of porous carbon media.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Trial Size */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 text-center">
              <div className="text-4xl mb-4">🧪</div>
              <h3 className="text-lg font-semibold text-[#1a3a4a] mb-2">
                Trial Size
              </h3>
              <p className="text-3xl font-bold text-[#22c55e] mb-2">$4.76</p>
              <p className="text-sm text-neutral-500 mb-4">12g</p>
              <p className="text-sm text-neutral-600 mb-6">
                Perfect for trying Purrify for the first time
              </p>
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="block w-full bg-neutral-100 hover:bg-neutral-200 text-[#1a3a4a] py-3 rounded-full font-medium transition-colors"
              >
                Buy Trial
              </a>
            </div>

            {/* Standard Size */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#22c55e] text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#22c55e] text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-4xl mb-4 mt-2">⭐</div>
              <h3 className="text-lg font-semibold text-[#1a3a4a] mb-2">
                Standard Size
              </h3>
              <p className="text-3xl font-bold text-[#22c55e] mb-2">$14.99</p>
              <p className="text-sm text-neutral-500 mb-4">50g</p>
              <p className="text-sm text-neutral-600 mb-6">
                Our best-selling size for single-cat homes
              </p>
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white py-3 rounded-full font-medium transition-colors"
              >
                Buy Standard
              </a>
            </div>

            {/* Family Pack */}
            <div className="bg-white rounded-2xl p-6 border border-neutral-200 text-center">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-lg font-semibold text-[#1a3a4a] mb-2">
                Family Pack
              </h3>
              <p className="text-3xl font-bold text-[#22c55e] mb-2">$29.99</p>
              <p className="text-sm text-neutral-500 mb-4">120g</p>
              <p className="text-sm text-neutral-600 mb-6">
                Best value for multi-cat households
              </p>
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="block w-full bg-neutral-100 hover:bg-neutral-200 text-[#1a3a4a] py-3 rounded-full font-medium transition-colors"
              >
                Buy Family Pack
              </a>
            </div>
          </div>

          <p className="text-center text-neutral-500 text-sm mt-8">
            All prices in CAD • Free shipping on subscriptions • 30-day
            money-back guarantee
          </p>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1a3a4a] mb-12">
            Trusted by Cat Parents Across Canada
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <p className="text-4xl font-bold text-[#22c55e]">1,000+</p>
              <p className="text-sm text-neutral-600">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#22c55e]">4.9/5</p>
              <p className="text-sm text-neutral-600">Customer Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#22c55e]">98%</p>
              <p className="text-sm text-neutral-600">Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[#22c55e]">Since 2019</p>
              <p className="text-sm text-neutral-600">Made in Canada</p>
            </div>
          </div>
          <div className="bg-neutral-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-neutral-700 italic mb-4">
              &quot;My apartment doesn&apos;t stink anymore! I was skeptical about switching
              from crystal litter, but Purrify works even better and I can keep
              using the litter my cat actually likes.&quot;
            </p>
            <p className="text-sm text-neutral-500">
              &mdash; Verified{" "}
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="purrify-link"
              >
                Purrify
              </a>{" "}
              Customer
            </p>
          </div>
        </div>
      </section>

      {/* Related Guides & Comparisons */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1a3a4a] mb-4">
            Learn More About Cat Litter
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            Expert guides to help you choose the best litter for your cat
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Link href="/compare/best-odor-control-litter" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Best for Odor Control</h3>
              <p className="text-sm text-neutral-600 mb-3">We tested all litter types to find what actually works</p>
              <span className="text-[#22c55e] text-sm font-medium">Read comparison →</span>
            </Link>

            <Link href="/compare/crystal-vs-clay" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Crystal vs Clay Litter</h3>
              <p className="text-sm text-neutral-600 mb-3">Complete comparison of odor control, dust, and cost</p>
              <span className="text-[#22c55e] text-sm font-medium">Compare now →</span>
            </Link>

            <Link href="/compare/activated-carbon-vs-crystal" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Carbon vs Crystal</h3>
              <p className="text-sm text-neutral-600 mb-3">Why activated carbon outperforms crystal litter</p>
              <span className="text-[#22c55e] text-sm font-medium">See the difference →</span>
            </Link>

            <Link href="/blog/why-does-cat-litter-smell" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Why Does Litter Smell?</h3>
              <p className="text-sm text-neutral-600 mb-3">The science behind litter box odor and how to fix it</p>
              <span className="text-[#22c55e] text-sm font-medium">Learn more →</span>
            </Link>

            <Link href="/blog/activated-carbon-cat-litter" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">What Is Activated Carbon?</h3>
              <p className="text-sm text-neutral-600 mb-3">How molecular adsorption eliminates odor permanently</p>
              <span className="text-[#22c55e] text-sm font-medium">Read article →</span>
            </Link>

            <Link href="/crystal-litter-guide" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Crystal Litter Guide</h3>
              <p className="text-sm text-neutral-600 mb-3">Everything about silica crystal cat litter</p>
              <span className="text-[#22c55e] text-sm font-medium">View guide →</span>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/blog" className="text-[#22c55e] font-medium hover:underline text-lg">
              Browse all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Summary CTA */}
      <section className="py-24 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Data-Driven Environmental Control
          </h2>
          <p className="text-[#b6e3f4] text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Transitioning from moisture-centric absorption to molecular adsorption represents
            the current evolution in feline habitat management. Explore technical implementations
            validated for Canadian residential standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="bg-[#22c55e] hover:bg-[#1db053] text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl shadow-green-500/10"
            >
              Review Verification Standards
            </a>
            <Link
              href="/science"
              className="bg-transparent border-2 border-white/20 hover:border-white text-white px-10 py-5 rounded-full font-bold text-lg transition-all"
            >
              Examine the Science
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
