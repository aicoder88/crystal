import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getComparisonBySlug, getAllComparisonSlugs, type LitterType } from "@/app/lib/comparisons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: comparison.title,
    description: comparison.metaDescription,
    keywords: [comparison.targetKeyword, "cat litter comparison", "best cat litter", "cat litter Canada"],
  };
}

function RatingBadge({ rating, type }: { rating: string; type: "good" | "neutral" | "bad" }) {
  const colors = {
    good: "bg-green-100 text-green-800",
    neutral: "bg-yellow-100 text-yellow-800",
    bad: "bg-red-100 text-red-800"
  };
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[type]}`}>
      {rating}
    </span>
  );
}

function getRatingType(rating: string): "good" | "neutral" | "bad" {
  const goodRatings = ["Excellent", "Good", "Low", "None", "High", "Very Eco-Friendly", "Eco-Friendly"];
  const badRatings = ["Poor", "Not Eco-Friendly"];
  if (goodRatings.includes(rating)) return "good";
  if (badRatings.includes(rating)) return "bad";
  return "neutral";
}

function LitterCard({ litter, isWinner = false }: { litter: LitterType; isWinner?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 ${isWinner ? "bg-green-50 border-2 border-green-500" : "bg-neutral-50 border border-neutral-200"}`}>
      {isWinner && (
        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
          BETTER CHOICE
        </span>
      )}
      <h3 className="text-xl font-bold text-[#1a3a4a] mb-2">{litter.name}</h3>
      <p className="text-sm text-neutral-500 mb-4">{litter.material}</p>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">Odor Control</span>
          <RatingBadge rating={litter.odorControl} type={getRatingType(litter.odorControl)} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">Dust Level</span>
          <RatingBadge rating={litter.dustLevel} type={litter.dustLevel === "None" || litter.dustLevel === "Low" ? "good" : litter.dustLevel === "High" ? "bad" : "neutral"} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">Tracking</span>
          <RatingBadge rating={litter.tracking} type={litter.tracking === "Low" || litter.tracking === "None" ? "good" : litter.tracking === "High" ? "bad" : "neutral"} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">Eco-Friendly</span>
          <RatingBadge rating={litter.eco} type={getRatingType(litter.eco)} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">Cat Acceptance</span>
          <RatingBadge rating={litter.catAcceptance} type={getRatingType(litter.catAcceptance)} />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-neutral-600">Monthly Cost</span>
          <span className="text-sm font-medium text-[#1a3a4a]">{litter.costPerMonth}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-semibold text-green-700 mb-2">Pros</h4>
        <ul className="text-sm text-neutral-600 space-y-1">
          {litter.pros.map((pro, i) => (
            <li key={i} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-red-700 mb-2">Cons</h4>
        <ul className="text-sm text-neutral-600 space-y-1">
          {litter.cons.map((con, i) => (
            <li key={i} className="flex items-start">
              <span className="text-red-500 mr-2">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#b6e3f4]/20 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/crystal-litter-guide" className="text-[#22c55e] text-sm font-medium hover:underline mb-4 inline-block">
            ← Back to Crystal Litter Guide
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a] mb-4">
            {comparison.title}
          </h1>
          <p className="text-lg text-neutral-600">
            {comparison.intro}
          </p>
        </div>
      </section>

      {/* Comparison Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-8 text-center">
            Side-by-Side Comparison
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <LitterCard litter={comparison.litter1} />
            <LitterCard litter={comparison.litter2} isWinner={comparison.litter2.name.includes("Activated Carbon")} />
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-4">Our Verdict</h2>
          <p className="text-neutral-600 leading-relaxed mb-6">
            {comparison.verdict}
          </p>

          {/* Technical Enhancement Panel */}
          <div className="bg-neutral-50 border-2 border-[#1a3a4a]/10 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#1a3a4a] mb-4">
              Scientific Recommendation: <span className="text-[#22c55e]">Porous Media Integration</span>
            </h3>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              {comparison.recommendedEnhancement}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md"
              >
                Access Recommended Solution
              </a>
              <Link
                href="/science"
                className="border-2 border-[#1a3a4a]/20 hover:border-[#1a3a4a] text-[#1a3a4a] px-8 py-3 rounded-full font-semibold transition-all"
              >
                Review Technical Data
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                Which cat litter is best for odor control?
              </h3>
              <p className="text-neutral-600 text-sm">
                Efficiency is maximized by utilizing a porous media additive alongside a standard clumping base. This provides two stages of protection: physical waste encapsulation and molecular adsorption of volatile gases.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                Can I switch my cat from {comparison.litter1.name.toLowerCase()} to {comparison.litter2.name.toLowerCase()}?
              </h3>
              <p className="text-neutral-600 text-sm">
                Gradual transition over 7-10 days is recommended to prevent feline aversion. Many users opt to keep their previous substrate and simply introduce an activated carbon additive to manage odor more effectively without behavioral disruption.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                What&apos;s the most cost-effective cat litter option?
              </h3>
              <p className="text-neutral-600 text-sm">
                While clay has the lowest purchase price, the longevity of premium configurations (base litter + carbon enhancement) often yields a lower total cost of ownership by extending the functional lifecycle of the substrate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Comparisons */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
            More Comparisons
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/compare/crystal-vs-clay" className="bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-sm text-neutral-600">Crystal vs Clay</span>
            </Link>
            <Link href="/compare/crystal-vs-clumping" className="bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-sm text-neutral-600">Crystal vs Clumping</span>
            </Link>
            <Link href="/compare/best-odor-control-litter" className="bg-white p-4 rounded-xl hover:shadow-md transition-shadow">
              <span className="text-sm text-neutral-600">Best for Odor Control</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Meta-Analysis CTA */}
      <section className="py-20 bg-[#1a3a4a] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Optimizing Residential Air Quality
          </h2>
          <p className="text-[#b6e3f4] mb-10 text-lg font-light">
            Data-driven solutions for chemical-free odor mitigation. Explore our technical partners for high-performance implementations available across Canada.
          </p>
          <a
            href="https://www.purrify.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#22c55e] hover:bg-[#1db053] text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-[#22c55e]/20"
          >
            Access Recommended Carbon Media
          </a>
        </div>
      </section>
    </>
  );
}
