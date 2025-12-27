import Image from "next/image";
import Link from "next/link";
import OrganizationSchema from "@/components/schemas/OrganizationSchema";
import WebSiteSchema from "@/components/schemas/WebSiteSchema";

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#b6e3f4]/30 to-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a3a4a] mb-6 leading-tight">
            Crystal Technology:
            <br />
            <span className="text-[#22c55e]">Natural Odor Control</span>
            <br />
            for Body & Home
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            From your body to your cat&apos;s litter box &mdash; nature&apos;s
            minerals and activated carbon fight odor at the molecular level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/science"
              className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Learn the Science
            </Link>
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Discover Purrify
            </a>
          </div>
        </div>
      </section>

      {/* Three Column Comparison */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a3a4a] mb-4">
            Three Approaches to Natural Odor Control
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            Understand how different natural technologies tackle unwanted odors
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Crystal Deodorant */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#b6e3f4]/20">
                {/* Placeholder: Close-up of crystal deodorant stone on bathroom counter */}
                <Image
                  src="https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=300&fit=crop"
                  alt="Crystal deodorant stone"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a3a4a] mb-2">
                Crystal Deodorant
              </h3>
              <p className="text-sm text-[#22c55e] font-medium mb-3">
                For Your Body
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Made from potassium alum, a natural mineral salt. Creates an
                invisible layer that prevents odor-causing bacteria from
                thriving on your skin.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  Doesn&apos;t block sweat
                </li>
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  No aluminum chloride
                </li>
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  Lasts up to 1 year
                </li>
              </ul>
            </div>

            {/* Crystal Cat Litter */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#b6e3f4]/20">
                {/* Placeholder: Silica gel crystal cat litter in a litter box */}
                <Image
                  src="https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop"
                  alt="Cat with litter box"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a3a4a] mb-2">
                Crystal Cat Litter
              </h3>
              <p className="text-sm text-[#22c55e] font-medium mb-3">
                For Litter Boxes
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Silica gel crystals absorb moisture and reduce ammonia smell.
                Popular but has limitations including dust and texture some cats
                dislike.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-neutral-400 mr-2">•</span>
                  Absorbs moisture
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-400 mr-2">•</span>
                  Can be dusty
                </li>
                <li className="flex items-start">
                  <span className="text-neutral-400 mr-2">•</span>
                  Moderate odor control
                </li>
              </ul>
            </div>

            {/* Activated Carbon */}
            <div className="bg-gradient-to-b from-[#22c55e]/10 to-[#b6e3f4]/10 rounded-2xl p-6 border-2 border-[#22c55e] relative">
              <div className="absolute -top-3 left-4">
                <span className="bg-[#22c55e] text-white text-xs font-bold px-3 py-1 rounded-full">
                  BEST SOLUTION
                </span>
              </div>
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#1a3a4a]/10 mt-2">
                {/* Placeholder: Activated carbon granules or Purrify product */}
                <Image
                  src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop"
                  alt="Happy cat - activated carbon keeps home fresh"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a3a4a] mb-2">
                Activated Carbon
              </h3>
              <p className="text-sm text-[#22c55e] font-medium mb-3">
                Superior Litter Odor Control
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener"
                  className="purrify-link font-medium"
                >
                  Purrify&apos;s activated carbon
                </a>{" "}
                traps odor molecules at the source. Works with any litter type
                for 7+ days of freshness.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  Traps molecules, not just moisture
                </li>
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  100% natural coconut-based
                </li>
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  Works with ANY litter
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Activated Carbon Wins */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a] mb-6">
                Why Activated Carbon Outperforms Crystal Cat Litter
              </h2>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                While crystal litter absorbs moisture, it doesn&apos;t truly
                eliminate odor molecules. Activated carbon works differently
                &mdash; it{" "}
                <strong>traps ammonia and odor compounds at the molecular level</strong>
                .
              </p>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener"
                  className="purrify-link"
                >
                  Purrify uses coconut-based activated carbon
                </a>{" "}
                with a massive surface area &mdash; just one gram has the
                surface area of a football field. This means more odor-trapping
                power in every sprinkle.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-[#22c55e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a3a4a]">
                      Keep Your Favorite Litter
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Unlike crystal litter which replaces your current litter,{" "}
                      <a
                        href="https://www.purrify.ca"
                        target="_blank"
                        rel="noopener"
                        className="purrify-link"
                      >
                        Purrify works as an additive
                      </a>{" "}
                      to any litter type.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#22c55e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a3a4a]">
                      Immediate Results
                    </h4>
                    <p className="text-sm text-neutral-600">
                      Fresh air in 60 seconds. No waiting for crystals to absorb
                      over time.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#22c55e] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a3a4a]">
                      Cat-Approved
                    </h4>
                    <p className="text-sm text-neutral-600">
                      No sharp crystals or unfamiliar textures. Cats don&apos;t
                      even notice it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-200">
                <h3 className="text-xl font-semibold text-[#1a3a4a] mb-4">
                  Quick Comparison
                </h3>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-left py-3 text-neutral-600 font-medium">
                        Feature
                      </th>
                      <th className="text-center py-3 text-neutral-600 font-medium">
                        Crystal Litter
                      </th>
                      <th className="text-center py-3 text-[#22c55e] font-medium">
                        Purrify
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 text-neutral-600">Odor method</td>
                      <td className="py-3 text-center text-neutral-500">
                        Absorbs moisture
                      </td>
                      <td className="py-3 text-center text-[#1a3a4a] font-medium">
                        Traps molecules
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 text-neutral-600">
                        Works with any litter
                      </td>
                      <td className="py-3 text-center text-red-500">✗</td>
                      <td className="py-3 text-center text-[#22c55e]">✓</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 text-neutral-600">Dust-free</td>
                      <td className="py-3 text-center text-red-500">✗</td>
                      <td className="py-3 text-center text-[#22c55e]">✓</td>
                    </tr>
                    <tr className="border-b border-neutral-100">
                      <td className="py-3 text-neutral-600">100% natural</td>
                      <td className="py-3 text-center text-neutral-500">
                        Synthetic
                      </td>
                      <td className="py-3 text-center text-[#22c55e]">✓</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-neutral-600">Odor-free days</td>
                      <td className="py-3 text-center text-neutral-500">2-3</td>
                      <td className="py-3 text-center text-[#1a3a4a] font-medium">
                        7+
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready for a Fresher Home?
          </h2>
          <p className="text-[#b6e3f4] text-lg mb-8 max-w-2xl mx-auto">
            Join 1,000+ cat parents who said goodbye to litter box smell with{" "}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="text-white underline hover:text-[#22c55e] transition-colors"
            >
              Purrify&apos;s natural activated carbon
            </a>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Try Purrify Risk-Free
            </a>
            <Link
              href="/cat-litter"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1a3a4a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
          <p className="text-[#b6e3f4]/70 text-sm mt-6">
            30-day money-back guarantee • Free shipping on subscriptions • Made
            in Canada
          </p>
        </div>
      </section>

      {/* Popular Comparisons Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a3a4a] mb-4">
            Compare Cat Litter Options
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            Wondering which litter is best for odor control? We&apos;ve compared them all.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/compare/best-odor-control-litter" className="bg-gradient-to-b from-[#22c55e]/10 to-white rounded-xl p-6 border-2 border-[#22c55e] hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Best for Odor Control</h3>
              <p className="text-sm text-neutral-600 mb-3">The #1 solution for eliminating litter box smell</p>
              <span className="text-[#22c55e] text-sm font-medium">Read comparison →</span>
            </Link>

            <Link href="/compare/crystal-vs-clay" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Crystal vs Clay</h3>
              <p className="text-sm text-neutral-600 mb-3">Which handles odor and dust better?</p>
              <span className="text-[#22c55e] text-sm font-medium">Compare now →</span>
            </Link>

            <Link href="/compare/crystal-vs-clumping" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Crystal vs Clumping</h3>
              <p className="text-sm text-neutral-600 mb-3">Ease of cleaning vs longevity</p>
              <span className="text-[#22c55e] text-sm font-medium">See the difference →</span>
            </Link>

            <Link href="/compare/activated-carbon-vs-crystal" className="bg-neutral-50 rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Carbon vs Crystal</h3>
              <p className="text-sm text-neutral-600 mb-3">Molecular trapping vs moisture absorption</p>
              <span className="text-[#22c55e] text-sm font-medium">Learn more →</span>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/cat-litter" className="text-[#22c55e] font-medium hover:underline">
              View all comparisons and guides →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a3a4a] mb-4">
            Cat Litter Odor Control Guides
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            Science-backed solutions to eliminate litter box smell
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/blog/why-does-cat-litter-smell" className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Why Does My Litter Box Smell?</h3>
              <p className="text-sm text-neutral-600 mb-3">Discover the science behind litter box odor and proven solutions that actually work.</p>
              <span className="text-[#22c55e] text-sm font-medium">Read article →</span>
            </Link>

            <Link href="/blog/activated-carbon-cat-litter" className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">What Is Activated Carbon?</h3>
              <p className="text-sm text-neutral-600 mb-3">How activated carbon eliminates odor through molecular adsorption.</p>
              <span className="text-[#22c55e] text-sm font-medium">Learn the science →</span>
            </Link>

            <Link href="/blog/get-rid-litter-box-smell-apartment" className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Apartment Odor Solutions</h3>
              <p className="text-sm text-neutral-600 mb-3">No more embarrassing smells when guests visit your small space.</p>
              <span className="text-[#22c55e] text-sm font-medium">Get tips →</span>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/blog" className="text-[#22c55e] font-medium hover:underline">
              Browse all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* City-Specific Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a3a4a] mb-4">
            Cat Litter Solutions Across Canada
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            Local insights for cat owners in major Canadian cities
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <Link href="/city/toronto" className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-[#1a3a4a] mb-1">Toronto</h3>
              <p className="text-xs text-neutral-600">ON</p>
            </Link>

            <Link href="/city/vancouver" className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-[#1a3a4a] mb-1">Vancouver</h3>
              <p className="text-xs text-neutral-600">BC</p>
            </Link>

            <Link href="/city/montreal" className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-[#1a3a4a] mb-1">Montreal</h3>
              <p className="text-xs text-neutral-600">QC</p>
            </Link>

            <Link href="/city/calgary" className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-[#1a3a4a] mb-1">Calgary</h3>
              <p className="text-xs text-neutral-600">AB</p>
            </Link>

            <Link href="/city/ottawa" className="bg-neutral-50 rounded-lg p-4 border border-neutral-200 hover:shadow-lg transition-shadow text-center">
              <h3 className="font-semibold text-[#1a3a4a] mb-1">Ottawa</h3>
              <p className="text-xs text-neutral-600">ON</p>
            </Link>
          </div>

          <div className="text-center mt-6">
            <p className="text-sm text-neutral-600">
              Also serving: Edmonton, Winnipeg, Quebec City, Hamilton, Victoria, Halifax, and more
            </p>
          </div>
        </div>
      </section>

      {/* Bridge Concept Section */}
      <section className="py-16 sm:py-20 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a4a] mb-8">
            The Natural Evolution of Odor Control
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white rounded-xl p-6 flex-1 max-w-xs border border-neutral-200">
              <p className="text-4xl mb-2">💎</p>
              <h3 className="font-semibold text-[#1a3a4a]">Crystal Deodorant</h3>
              <p className="text-sm text-neutral-600">For your body</p>
            </div>
            <div className="text-3xl text-[#b6e3f4] hidden md:block">→</div>
            <div className="text-3xl text-[#b6e3f4] md:hidden">↓</div>
            <div className="bg-white rounded-xl p-6 flex-1 max-w-xs border border-neutral-200">
              <p className="text-4xl mb-2">🔮</p>
              <h3 className="font-semibold text-[#1a3a4a]">
                <Link href="/crystal-litter-guide" className="hover:text-[#22c55e]">
                  Crystal Litter
                </Link>
              </h3>
              <p className="text-sm text-neutral-600">
                <Link href="/crystal-litter-guide" className="text-[#22c55e] hover:underline">
                  Tried it for your cat?
                </Link>
              </p>
            </div>
            <div className="text-3xl text-[#b6e3f4] hidden md:block">→</div>
            <div className="text-3xl text-[#b6e3f4] md:hidden">↓</div>
            <div className="bg-[#22c55e]/10 rounded-xl p-6 flex-1 max-w-xs border-2 border-[#22c55e]">
              <p className="text-4xl mb-2">🌿</p>
              <h3 className="font-semibold text-[#22c55e]">Activated Carbon</h3>
              <p className="text-sm text-neutral-600">
                The{" "}
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener"
                  className="purrify-link"
                >
                  better solution
                </a>
              </p>
            </div>
          </div>
          <p className="text-neutral-600 mt-8 max-w-2xl mx-auto">
            You know crystal technology for your body. You might know{" "}
            <Link href="/crystal-litter-guide" className="text-[#22c55e] hover:underline">
              crystal litter
            </Link>{" "}
            for your cat. But{" "}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="purrify-link"
            >
              activated carbon is the superior natural solution
            </a>{" "}
            for litter odor.
          </p>
        </div>
      </section>
    </>
  );
}
