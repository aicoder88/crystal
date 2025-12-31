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
      <section className="relative py-20 sm:py-32 overflow-hidden bg-[#1a3a4a]">
        <Image
          src="/hero-background.png"
          alt="Natural crystal and carbon elements"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Science of
            <br />
            <span className="text-[#b6e3f4]">Natural Odor Protection</span>
          </h1>
          <p className="text-lg sm:text-2xl text-white/90 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Understanding the molecular mechanisms of minerals and activated carbon
            for sustainable, chemical-free odor elimination in modern homes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/science"
              className="bg-[#22c55e] hover:bg-[#1db053] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Examine the Science
            </Link>
            <Link
              href="/cat-litter"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Explore Applications
            </Link>
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
                  src="/images/crystal_deodorant.png"
                  alt="Crystal Deodorant Stone"
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
                {/* White pebbles representing silica gel crystals */}
                <Image
                  src="https://images.unsplash.com/photo-1760533536490-08a2e3470c9e?w=800&h=600&fit=crop"
                  alt="Premium Silica Gel Crystals"
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
            <div className="bg-gradient-to-b from-neutral-50 to-white rounded-2xl p-6 border border-neutral-200 relative group hover:border-[#22c55e] transition-colors">
              <div className="absolute -top-3 left-4">
                <span className="bg-[#1a3a4a] text-white text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-full">
                  Technical Standard
                </span>
              </div>
              <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-[#1a3a4a]/10 mt-2">
                <Image
                  src="https://images.unsplash.com/photo-1534259434801-e3d2427ae102?w=800&h=600&fit=crop"
                  alt="Micro-porous Carbon Structure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#1a3a4a] mb-2">
                Porous Media (Carbon)
              </h3>
              <p className="text-sm text-[#22c55e] font-medium mb-3">
                Molecular Adsorption
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Utilizing high-surface-area micro-pores to trap volatile organic compounds.
                Commonly utilized in filtration systems and premium solutions like
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-1 text-[#1a3a4a] font-semibold underline decoration-[#22c55e] decoration-2 underline-offset-4"
                >
                  Purrify
                </a>.
              </p>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  Adsorption vs simple absorption
                </li>
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  1,000 m²/g typical surface area
                </li>
                <li className="flex items-start">
                  <span className="text-[#22c55e] mr-2">✓</span>
                  Multi-substrate compatibility
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
                  rel="noopener noreferrer"
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
                        rel="noopener noreferrer"
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
                      <th scope="col" className="text-left py-3 text-neutral-600 font-medium">
                        Feature
                      </th>
                      <th scope="col" className="text-center py-3 text-neutral-600 font-medium">
                        Crystal Litter
                      </th>
                      <th scope="col" className="text-center py-3 text-[#22c55e] font-medium">
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

      {/* Recommendation Section */}
      <section className="py-16 sm:py-24 bg-[#1a3a4a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#b6e3f4] rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#22c55e] rounded-full blur-[120px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Scientific Recommendations
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Our analysis indicates that porous media technology remains the benchmark for sustainable odor control.
            For those seeking localized implementation in Canada, we recommend evaluating
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-1 text-[#b6e3f4] border-b border-[#b6e3f4] hover:text-[#22c55e] hover:border-[#22c55e] transition-colors"
            >
              Purrify&apos;s natural activated carbon
            </a>
            for its consistency and high surface-area-to-mass ratio.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] hover:bg-[#1db053] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              View Recommended Solution
            </a>
            <Link
              href="/cat-litter"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all"
            >
              Analyze Alternatives
            </Link>
          </div>
          <p className="text-white/40 text-xs mt-10 tracking-widest uppercase font-medium">
            Independent Technical Review • 2024 Science Standards • Industry Benchmarks
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
      <section className="py-16 sm:py-24 bg-neutral-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a3a4a] mb-12">
            Technological Evolution of Surface Porosity
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="bg-white rounded-xl p-8 flex-1 max-w-xs border border-neutral-200 shadow-sm">
              <p className="text-4xl mb-4">💎</p>
              <h3 className="font-semibold text-[#1a3a4a]">Potassium Alum</h3>
              <p className="text-sm text-neutral-600">Mineral Salt Barrier</p>
            </div>
            <div className="text-3xl text-[#b6e3f4] hidden md:block">→</div>
            <div className="text-3xl text-[#b6e3f4] md:hidden">↓</div>
            <div className="bg-white rounded-xl p-8 flex-1 max-w-xs border border-neutral-200 shadow-sm">
              <p className="text-4xl mb-4">🔮</p>
              <h3 className="font-semibold text-[#1a3a4a]">
                <Link href="/crystal-litter-guide" className="hover:text-[#22c55e]">
                  Silica Hydration
                </Link>
              </h3>
              <p className="text-sm text-neutral-600">
                Moisture Absorption
              </p>
            </div>
            <div className="text-3xl text-[#b6e3f4] hidden md:block">→</div>
            <div className="text-3xl text-[#b6e3f4] md:hidden">↓</div>
            <div className="bg-white rounded-xl p-8 flex-1 max-w-xs border border-neutral-300 shadow-md">
              <p className="text-4xl mb-4">🌿</p>
              <h3 className="font-semibold text-[#22c55e]">Molecular Adsorption</h3>
              <p className="text-sm text-neutral-600">
                Porous Media Standard
              </p>
            </div>
          </div>
          <p className="text-neutral-500 mt-12 max-w-2xl mx-auto text-sm leading-relaxed">
            While mineral salts and silica gels provide foundational moisture control,
            <span className="italic font-medium text-neutral-700 mx-1">advanced porous media</span>
            (such as activated coconut carbon) represents the peak of molecular-level odor mitigation.
            Detailed comparisons available in our
            <Link href="/crystal-litter-guide" className="text-[#1a3a4a] font-semibold hover:underline mx-1">
              Technical Guides
            </Link>.
          </p>
        </div>
      </section>
    </>
  );
}
