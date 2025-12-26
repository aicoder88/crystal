import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete Guide to Crystal Cat Litter (Silica Gel)",
  description:
    "Everything you need to know about crystal cat litter - how it works, pros and cons, and why cat owners are switching to activated carbon alternatives like Purrify.",
  keywords: [
    "crystal cat litter",
    "silica gel cat litter",
    "crystal litter pros cons",
    "best crystal cat litter",
    "crystal litter alternative",
  ],
};

export default function CrystalLitterGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#b6e3f4]/20 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1a3a4a] mb-6">
            Complete Guide to
            <br />
            <span className="text-[#22c55e]">Crystal Cat Litter</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Everything you need to know about silica gel crystal litter &mdash;
            and why many cat owners are discovering better alternatives
          </p>
        </div>
      </section>

      {/* What is Crystal Cat Litter */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1a3a4a] mb-6">
                What is Crystal Cat Litter?
              </h2>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                Crystal cat litter is made from <strong>silica gel</strong>{" "}
                (silicon dioxide), the same material found in those small
                &quot;do not eat&quot; packets included with shoes and electronics. It&apos;s
                designed to absorb moisture and reduce odors in litter boxes.
              </p>
              <p className="text-neutral-600 mb-4 leading-relaxed">
                First introduced in the 1990s, crystal litter became popular as
                an alternative to traditional clay litter, promising better odor
                control and longer-lasting freshness.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                The crystals work by absorbing liquid waste while solid waste
                dries out and can be scooped. Unlike clumping litter, the
                crystals don&apos;t form clumps but instead absorb moisture throughout.
              </p>
            </div>
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              {/* Placeholder: Close-up of silica gel crystals */}
              <Image
                src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=600&h=400&fit=crop"
                alt="Cat looking at camera"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-[#1a3a4a] mb-6 text-center">
            Popular Crystal Cat Litter Brands
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white px-4 py-2 rounded-full text-neutral-600 text-sm border border-neutral-200">
              Fresh Step Crystals
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-neutral-600 text-sm border border-neutral-200">
              PrettyLitter
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-neutral-600 text-sm border border-neutral-200">
              Ultra Pet Crystal Clear
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-neutral-600 text-sm border border-neutral-200">
              Litter Pearls
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-neutral-600 text-sm border border-neutral-200">
              Mimi Litter
            </span>
          </div>
        </div>
      </section>

      {/* Pros Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a4a] mb-8 text-center">
            Pros of Crystal Cat Litter
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Long-Lasting
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                A single bag of crystal litter can last up to one month for a
                single cat, compared to weekly changes with clay litter. The
                crystals continue absorbing until saturated.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Low Tracking
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The larger crystal size means less litter gets stuck in your
                cat&apos;s paws and tracked around your home compared to fine clay
                litter particles.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Lightweight
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Crystal litter is significantly lighter than clay, making it
                easier to carry, pour, and dispose of. A 4-lb bag of crystals
                equals about 14 lbs of clay.
              </p>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Initial Odor Absorption
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Fresh crystals do a decent job absorbing moisture and reducing
                odor initially. Many users notice a significant improvement over
                basic clay litter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cons Section */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1a3a4a] mb-8 text-center">
            Cons of Crystal Cat Litter
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                Dust Concerns
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Despite marketing claims, many crystal litters produce fine
                silica dust, especially when poured or when cats dig. This can
                irritate respiratory systems of both cats and humans.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                Uncomfortable Texture
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                The hard, angular crystals feel unnatural underfoot. Many cats
                refuse to use crystal litter, and some develop aversions to the
                litter box entirely.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                Odor Returns Quickly
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                While crystals absorb moisture, ammonia odor molecules still
                escape into the air. Most users notice smell returning within
                2-3 days, not the promised &quot;month-long freshness.&quot;
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                All-or-Nothing Approach
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                You can&apos;t mix crystal litter with your cat&apos;s preferred litter.
                It&apos;s a complete replacement, which means if your cat doesn&apos;t like
                it, you&apos;ve wasted the entire purchase.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                Synthetic Material
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Silica gel is manufactured synthetically, not a natural
                material. For pet owners seeking natural solutions, this is a
                significant drawback.
              </p>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                Higher Cost
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Crystal litter typically costs more per pound than clay litter.
                While it lasts longer, the upfront cost can be a barrier for
                many cat owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Better Solution Section */}
      <section className="py-16 bg-[#22c55e]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1a3a4a] mb-4">
              A Better Approach to Litter Box Odor
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              What if you could get better odor control than crystal litter
              while keeping your cat&apos;s preferred litter?
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-[#22c55e]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-[#22c55e] font-medium text-sm uppercase tracking-wide">
                  The Better Solution
                </span>
                <h3 className="text-2xl font-bold text-[#1a3a4a] mt-2 mb-4">
                  <a
                    href="https://www.purrify.ca"
                    target="_blank"
                    rel="noopener"
                    className="hover:text-[#22c55e] transition-colors"
                  >
                    Purrify Activated Carbon
                  </a>
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Instead of replacing your cat&apos;s litter,{" "}
                  <a
                    href="https://www.purrify.ca"
                    target="_blank"
                    rel="noopener"
                    className="purrify-link"
                  >
                    Purrify is a natural additive
                  </a>{" "}
                  that traps odor molecules at the source. Made from 100%
                  coconut-based activated carbon, it works with any litter type.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-neutral-700 text-sm">
                    <span className="text-[#22c55e] mr-2">✓</span>
                    Works with clay, clumping, crystal, or natural litter
                  </li>
                  <li className="flex items-center text-neutral-700 text-sm">
                    <span className="text-[#22c55e] mr-2">✓</span>
                    7+ days without litter box smell
                  </li>
                  <li className="flex items-center text-neutral-700 text-sm">
                    <span className="text-[#22c55e] mr-2">✓</span>
                    100% natural and dust-free
                  </li>
                  <li className="flex items-center text-neutral-700 text-sm">
                    <span className="text-[#22c55e] mr-2">✓</span>
                    Cats don&apos;t notice it &mdash; no texture issues
                  </li>
                </ul>
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener"
                  className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold transition-colors"
                >
                  Try Purrify Today
                </a>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                {/* Placeholder: Happy cat or Purrify product */}
                <Image
                  src="https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=500&h=400&fit=crop"
                  alt="Content cat - Purrify keeps homes fresh"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1a3a4a] mb-12">
            Why Cat Owners Are Switching
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 px-4 font-medium text-neutral-600">
                    Concern
                  </th>
                  <th className="text-center py-4 px-4 font-medium text-neutral-600">
                    Crystal Litter
                  </th>
                  <th className="text-center py-4 px-4 font-medium text-[#22c55e]">
                    <a
                      href="https://www.purrify.ca"
                      target="_blank"
                      rel="noopener"
                      className="hover:underline"
                    >
                      Purrify + Any Litter
                    </a>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-neutral-700">
                    Cat refuses to use it
                  </td>
                  <td className="py-4 px-4 text-center text-neutral-500">
                    Common problem
                  </td>
                  <td className="py-4 px-4 text-center text-[#22c55e]">
                    Not an issue &mdash; cats don&apos;t notice
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-neutral-700">Dust issues</td>
                  <td className="py-4 px-4 text-center text-neutral-500">
                    Often dusty
                  </td>
                  <td className="py-4 px-4 text-center text-[#22c55e]">
                    100% dust-free
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-neutral-700">
                    Odor returns quickly
                  </td>
                  <td className="py-4 px-4 text-center text-neutral-500">
                    2-3 days typical
                  </td>
                  <td className="py-4 px-4 text-center text-[#22c55e]">
                    7+ days guaranteed
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-4 px-4 text-neutral-700">
                    Natural ingredients
                  </td>
                  <td className="py-4 px-4 text-center text-neutral-500">
                    Synthetic silica
                  </td>
                  <td className="py-4 px-4 text-center text-[#22c55e]">
                    100% coconut-based
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-neutral-700">Flexibility</td>
                  <td className="py-4 px-4 text-center text-neutral-500">
                    All-or-nothing
                  </td>
                  <td className="py-4 px-4 text-center text-[#22c55e]">
                    Use with any litter
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#1a3a4a] mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                Is crystal cat litter safe for cats?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Crystal litter is generally considered safe, though some cats
                may experience discomfort from the texture. The dust produced by
                some brands can be a respiratory concern. If your cat ingests
                crystals, consult your vet.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                How long does crystal cat litter last?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Manufacturers claim up to one month for a single cat, but
                real-world usage often sees odor returning within 2-3 weeks.
                Multi-cat households will need to change more frequently.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                Can I mix crystal litter with regular litter?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                No, crystal litter is designed to be used on its own. Mixing
                defeats the purpose of the absorption system. However,{" "}
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener"
                  className="purrify-link"
                >
                  activated carbon additives like Purrify
                </a>{" "}
                are specifically designed to work with any litter type.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-neutral-200">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                Is there a better alternative to crystal litter?
              </h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Many cat owners are switching to{" "}
                <a
                  href="https://www.purrify.ca"
                  target="_blank"
                  rel="noopener"
                  className="purrify-link"
                >
                  activated carbon additives like Purrify
                </a>
                . Instead of replacing your litter entirely, you add Purrify to
                your cat&apos;s preferred litter for superior odor control without
                the drawbacks of crystal litter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Upgrade Your Odor Control
          </h2>
          <p className="text-[#b6e3f4] text-lg mb-8 max-w-2xl mx-auto">
            Skip the crystal litter hassle. Try{" "}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="text-white underline hover:text-[#22c55e] transition-colors"
            >
              Purrify activated carbon
            </a>{" "}
            with your existing litter for better results and happier cats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Shop Purrify
            </a>
            <Link
              href="/science"
              className="border-2 border-white hover:bg-white hover:text-[#1a3a4a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Learn the Science
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
