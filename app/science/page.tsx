import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crystal vs Activated Carbon: The Science of Odor Elimination",
  description:
    "Learn the science behind crystal deodorants, crystal cat litter, and why activated carbon like Purrify provides superior odor elimination through molecular trapping.",
  keywords: [
    "how crystal deodorant works",
    "crystal cat litter science",
    "activated carbon odor elimination",
    "potassium alum deodorant",
    "silica gel cat litter",
  ],
};

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#b6e3f4]/20 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a4a] mb-6">
            Crystal vs Activated Carbon:
            <br />
            <span className="text-[#22c55e]">The Science of Odor Elimination</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Understanding how different natural technologies fight odor at the
            molecular level
          </p>
        </div>
      </section>

      {/* Crystal Deodorant Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              {/* Placeholder: Crystal/mineral formation or alum crystal close-up */}
              <Image
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop"
                alt="Natural mineral crystals"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[#22c55e] font-medium text-sm uppercase tracking-wide">
                For Your Body
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a4a] mt-2 mb-4">
                How Crystal Deodorants Work
              </h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Crystal deodorants are made from <strong>potassium alum</strong>{" "}
                (potassium aluminum sulfate), a natural mineral salt that has
                been used for centuries.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Unlike conventional antiperspirants that block sweat glands with
                aluminum chloride, crystal deodorants work by creating an
                inhospitable environment for odor-causing bacteria on your skin.
              </p>
              <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
                <h4 className="font-semibold text-[#1a3a4a] mb-2">
                  The Science:
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Creates a thin mineral salt layer on skin</li>
                  <li>• Bacteria cannot thrive in this environment</li>
                  <li>• No odor is produced because bacteria can&apos;t metabolize sweat</li>
                  <li>• Sweat still releases naturally (no blocked pores)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crystal Cat Litter Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-neutral-500 font-medium text-sm uppercase tracking-wide">
                For Litter Boxes
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a4a] mt-2 mb-4">
                How Crystal Cat Litter Works
              </h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Crystal cat litter is made from <strong>silica gel</strong>{" "}
                (silicon dioxide), a synthetic material with high absorbency.
                These crystals are the same material found in those
                &quot;do not eat&quot; packets in shoe boxes.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                The silica crystals absorb moisture from cat urine, which
                reduces but doesn&apos;t eliminate ammonia odor. The problem?
                Ammonia molecules still escape into the air.
              </p>
              <div className="bg-white rounded-xl p-4 border border-neutral-200">
                <h4 className="font-semibold text-[#1a3a4a] mb-2">
                  Limitations:
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>• Only absorbs moisture, not odor molecules</li>
                  <li>• Can produce silica dust (respiratory concern)</li>
                  <li>• Sharp texture some cats refuse to use</li>
                  <li>• Must replace entirely (can&apos;t add to existing litter)</li>
                </ul>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden order-1 md:order-2">
              {/* Placeholder: Cat near litter box or silica gel crystals */}
              <Image
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=600&h=400&fit=crop"
                alt="Curious cat near a litter box, demonstrating comfort with crystal litter alternatives"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activated Carbon Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              {/* Placeholder: Coconut shells or activated carbon granules */}
              <Image
                src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=600&h=400&fit=crop"
                alt="Natural coconut - source of activated carbon"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[#22c55e] font-medium text-sm uppercase tracking-wide">
                The Superior Solution
              </span>
              <h2 className="text-3xl font-bold text-[#1a3a4a] mt-2 mb-4">
                How Activated Carbon Works
              </h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purrify-link"
                >
                  Purrify&apos;s activated carbon
                </a>{" "}
                is made from coconut shells heated to extreme temperatures,
                creating millions of tiny pores. This process, used in NASA
                spacecraft air filtration, creates an incredibly porous material.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Just one gram of activated carbon has the surface area of a
                football field. This massive surface area{" "}
                <strong>traps odor molecules through adsorption</strong> &mdash;
                molecules stick to the carbon surface and are locked away.
              </p>
              <div className="bg-[#22c55e]/10 rounded-xl p-4 border-2 border-[#22c55e]">
                <h4 className="font-semibold text-[#1a3a4a] mb-2">
                  The Advantage:
                </h4>
                <ul className="text-sm text-neutral-600 space-y-2">
                  <li>
                    • <strong>Traps molecules</strong>, doesn&apos;t just absorb moisture
                  </li>
                  <li>• Works with any litter type you already use</li>
                  <li>• 100% natural, safe if ingested</li>
                  <li>• Immediate results &mdash; fresh air in 60 seconds</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1a3a4a] mb-4">
            Crystal Litter vs Purrify Activated Carbon
          </h2>
          <p className="text-neutral-600 text-center max-w-2xl mx-auto mb-12">
            A detailed comparison of the two approaches to litter box odor control
          </p>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1a3a4a] text-white">
                  <th scope="col" className="text-left py-4 px-6 font-medium">Feature</th>
                  <th scope="col" className="text-center py-4 px-6 font-medium">
                    Crystal Cat Litter
                  </th>
                  <th scope="col" className="text-center py-4 px-6 font-medium bg-[#22c55e]">
                    <a
                      href="https://www.purrify.ca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      Purrify Activated Carbon
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-6 text-neutral-700">How it works</td>
                  <td className="py-4 px-6 text-center text-neutral-500">
                    Absorbs moisture
                  </td>
                  <td className="py-4 px-6 text-center text-[#1a3a4a] font-medium bg-[#22c55e]/5">
                    Traps odor molecules
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-6 text-neutral-700">Material</td>
                  <td className="py-4 px-6 text-center text-neutral-500">
                    Synthetic silica gel
                  </td>
                  <td className="py-4 px-6 text-center text-[#1a3a4a] font-medium bg-[#22c55e]/5">
                    Natural coconut carbon
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-6 text-neutral-700">
                    Works with existing litter
                  </td>
                  <td className="py-4 px-6 text-center text-red-500">✗ No</td>
                  <td className="py-4 px-6 text-center text-[#22c55e] bg-[#22c55e]/5">
                    ✓ Yes, any type
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-6 text-neutral-700">Dust-free</td>
                  <td className="py-4 px-6 text-center text-red-500">
                    ✗ Often dusty
                  </td>
                  <td className="py-4 px-6 text-center text-[#22c55e] bg-[#22c55e]/5">
                    ✓ 100% dust-free
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-6 text-neutral-700">Cat acceptance</td>
                  <td className="py-4 px-6 text-center text-neutral-500">
                    Some cats refuse
                  </td>
                  <td className="py-4 px-6 text-center text-[#1a3a4a] font-medium bg-[#22c55e]/5">
                    Cats don&apos;t notice it
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-6 text-neutral-700">Odor-free duration</td>
                  <td className="py-4 px-6 text-center text-neutral-500">
                    2-3 days typically
                  </td>
                  <td className="py-4 px-6 text-center text-[#1a3a4a] font-medium bg-[#22c55e]/5">
                    7+ days guaranteed
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-neutral-700">Safe if ingested</td>
                  <td className="py-4 px-6 text-center text-neutral-500">
                    Concern with crystals
                  </td>
                  <td className="py-4 px-6 text-center text-[#22c55e] bg-[#22c55e]/5">
                    ✓ 100% safe
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Call-out Box */}
      <section className="py-16 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Activated Carbon Outperforms Crystal Cat Litter
          </h2>
          <p className="text-[#b6e3f4] text-lg mb-8 max-w-2xl mx-auto">
            The science is clear: trapping odor molecules is more effective than
            simply absorbing moisture.{" "}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline hover:text-[#22c55e] transition-colors"
            >
              Purrify&apos;s molecular trapping technology
            </a>{" "}
            eliminates odors at the source.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Try Purrify Today
            </a>
            <Link
              href="/cat-litter"
              className="border-2 border-white hover:bg-white hover:text-[#1a3a4a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Learn More About Purrify
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Science Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a4a] mb-8 text-center">
            The Chemistry Behind the Clean
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-xl font-semibold text-[#1a3a4a] mb-4">
                Absorption vs Adsorption
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Crystal litter uses <strong>absorption</strong> &mdash; liquids
                soak into the material like a sponge. Odor molecules can still
                escape.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purrify-link"
                >
                  Purrify uses adsorption
                </a>{" "}
                &mdash; odor molecules stick to the carbon surface through
                molecular attraction and are permanently trapped.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <h3 className="text-xl font-semibold text-[#1a3a4a] mb-4">
                Why Coconut Carbon?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                Coconut shell activated carbon has the highest micropore volume
                of any carbon source. This means more surface area for trapping
                ammonia and other odor compounds.
              </p>
              <p className="text-neutral-600 text-sm leading-relaxed">
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="purrify-link"
                >
                  Purrify sources only premium coconut carbon
                </a>{" "}
                for maximum odor elimination effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
