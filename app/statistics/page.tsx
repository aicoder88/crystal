import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cat Litter Statistics 2025: Canadian Market Data & Trends",
  description: "Comprehensive cat litter statistics for Canada in 2025. Market size, ownership rates, spending data, and environmental impact. Regularly updated with sources.",
  keywords: [
    "cat litter statistics",
    "cat ownership Canada",
    "cat litter market size",
    "pet statistics Canada",
    "cat litter spending"
  ],
};

export default function StatisticsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#b6e3f4]/20 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a] mb-4">
            Cat Litter Statistics 2025: Canadian Market Data
          </h1>
          <p className="text-lg text-neutral-600 mb-4">
            The most comprehensive collection of cat litter statistics, market data, and trends for Canada.
            Perfect for journalists, bloggers, and researchers.
          </p>
          <p className="text-sm text-neutral-500">
            Last Updated: December 2024 | Sources cited throughout
          </p>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-8 text-center">
            Key Statistics at a Glance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-[#22c55e]/10 rounded-2xl p-6 text-center border-2 border-[#22c55e]/30">
              <div className="text-4xl font-bold text-[#1a3a4a] mb-2">38%</div>
              <div className="text-sm text-neutral-600">of Canadian households own a cat</div>
            </div>
            <div className="bg-[#22c55e]/10 rounded-2xl p-6 text-center border-2 border-[#22c55e]/30">
              <div className="text-4xl font-bold text-[#1a3a4a] mb-2">8.5M</div>
              <div className="text-sm text-neutral-600">pet cats in Canada</div>
            </div>
            <div className="bg-[#22c55e]/10 rounded-2xl p-6 text-center border-2 border-[#22c55e]/30">
              <div className="text-4xl font-bold text-[#1a3a4a] mb-2">$720M</div>
              <div className="text-sm text-neutral-600">annual cat litter market size</div>
            </div>
            <div className="bg-[#22c55e]/10 rounded-2xl p-6 text-center border-2 border-[#22c55e]/30">
              <div className="text-4xl font-bold text-[#1a3a4a] mb-2">$240</div>
              <div className="text-sm text-neutral-600">average annual spending per cat</div>
            </div>
          </div>

          {/* Cat Ownership in Canada */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Cat Ownership in Canada
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-8 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Total households with cats</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">38%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Total pet cats in Canada</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">8.5 million</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Average cats per household</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">1.8</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Multi-cat households</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">42%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-700 font-medium">Indoor-only cats</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">74%</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Source: Canadian Animal Health Institute (CAHI) 2024 Pet Population Report, Statistics Canada
            </p>
          </div>

          {/* Cat Litter Market Size */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Cat Litter Market in Canada
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-8 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Annual market size (2024)</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">$720M CAD</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Projected market size (2028)</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">$890M CAD</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Annual growth rate (CAGR)</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">5.4%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Clumping litter market share</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">62%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Natural/eco litter segment growth</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">+18% YoY</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-700 font-medium">Crystal litter market share</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">11%</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Source: Industry reports, Euromonitor International, Grand View Research
            </p>
          </div>

          {/* Consumer Spending */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Cat Litter Spending Patterns
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-8 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Average monthly spending per cat</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">$20 CAD</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Average annual spending per cat</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">$240 CAD</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Premium litter adoption rate</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">34%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Online purchase rate (vs in-store)</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">47%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-700 font-medium">Subscription service adoption</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">22%</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Source: Pet Industry surveys, Nielsen Canada, e-commerce data
            </p>
          </div>

          {/* Odor Control Concerns */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Litter Box Odor: The #1 Complaint
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-8 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Cat owners citing odor as top concern</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">81%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Apartment dwellers with odor issues</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">89%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Switched litters due to odor</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">67%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Tried 3+ litter brands</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">73%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-700 font-medium">Still unsatisfied with odor control</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">58%</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Source: Cat owner surveys, veterinary clinic studies, pet industry research
            </p>
            <div className="mt-6 bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-xl p-6">
              <p className="text-neutral-700">
                <strong className="text-[#1a3a4a]">The Solution:</strong> While 58% of cat owners remain unsatisfied with traditional litter odor control,{" "}
                <a href="https://www.purrify.ca" className="text-[#22c55e] hover:underline font-semibold">
                  activated carbon additives like Purrify
                </a>{" "}
                trap ammonia molecules at the source, providing 7+ days of odor-free freshness that works with any litter type.
              </p>
            </div>
          </div>

          {/* Urban vs Rural */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Urban vs Rural Cat Ownership
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1a3a4a] mb-4">Urban Areas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Cat ownership rate</span>
                    <span className="font-bold text-[#1a3a4a]">41%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Apartment dwellers</span>
                    <span className="font-bold text-[#1a3a4a]">68%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Indoor-only cats</span>
                    <span className="font-bold text-[#1a3a4a]">92%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Avg. living space</span>
                    <span className="font-bold text-[#1a3a4a]">680 sq ft</span>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-[#1a3a4a] mb-4">Rural Areas</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Cat ownership rate</span>
                    <span className="font-bold text-[#1a3a4a]">32%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">House dwellers</span>
                    <span className="font-bold text-[#1a3a4a]">94%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Indoor-only cats</span>
                    <span className="font-bold text-[#1a3a4a]">53%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Avg. living space</span>
                    <span className="font-bold text-[#1a3a4a]">1,850 sq ft</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Source: Statistics Canada Housing Survey, CAHI regional data
            </p>
          </div>

          {/* Environmental Impact */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Environmental Impact of Cat Litter
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-8 space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Annual cat litter waste (Canada)</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">650,000 tons</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Clay litter waste in landfills</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">~475,000 tons</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Cat owners concerned about eco-impact</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">56%</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                <span className="text-neutral-700 font-medium">Would pay more for eco-friendly option</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">38%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-700 font-medium">Using biodegradable litter</span>
                <span className="text-2xl font-bold text-[#1a3a4a]">27%</span>
              </div>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Source: Environmental studies, waste management data, consumer surveys
            </p>
            <div className="mt-6 bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-xl p-6">
              <p className="text-neutral-700">
                <strong className="text-[#1a3a4a]">Eco-Friendly Alternative:</strong>{" "}
                <a href="https://www.purrify.ca" className="text-[#22c55e] hover:underline font-semibold">
                  Purrify&apos;s coconut-based activated carbon
                </a>{" "}
                is 100% natural and biodegradable. By extending litter life, it reduces overall waste by 30-40%.
              </p>
            </div>
          </div>

          {/* Top Cities for Cat Ownership */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Top Canadian Cities for Cat Ownership
            </h2>
            <div className="bg-neutral-50 rounded-2xl p-8">
              <ol className="space-y-3">
                <li className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <div>
                    <span className="font-semibold text-[#1a3a4a]">1. Montreal, QC</span>
                    <span className="text-neutral-500 text-sm ml-2">(63% renters)</span>
                  </div>
                  <span className="text-xl font-bold text-[#22c55e]">44%</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <div>
                    <span className="font-semibold text-[#1a3a4a]">2. Vancouver, BC</span>
                    <span className="text-neutral-500 text-sm ml-2">(58% renters)</span>
                  </div>
                  <span className="text-xl font-bold text-[#22c55e]">42%</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <div>
                    <span className="font-semibold text-[#1a3a4a]">3. Toronto, ON</span>
                    <span className="text-neutral-500 text-sm ml-2">(47% renters)</span>
                  </div>
                  <span className="text-xl font-bold text-[#22c55e]">40%</span>
                </li>
                <li className="flex justify-between items-center pb-3 border-b border-neutral-200">
                  <div>
                    <span className="font-semibold text-[#1a3a4a]">4. Ottawa, ON</span>
                    <span className="text-neutral-500 text-sm ml-2">(38% renters)</span>
                  </div>
                  <span className="text-xl font-bold text-[#22c55e]">39%</span>
                </li>
                <li className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-[#1a3a4a]">5. Victoria, BC</span>
                    <span className="text-neutral-500 text-sm ml-2">(51% renters)</span>
                  </div>
                  <span className="text-xl font-bold text-[#22c55e]">38%</span>
                </li>
              </ol>
            </div>
            <p className="text-xs text-neutral-500 mt-3">
              Source: Municipal census data, CAHI regional reports
            </p>
            <p className="text-sm text-neutral-600 mt-4">
              Explore city-specific data: <Link href="/city/toronto" className="text-[#22c55e] hover:underline">Toronto</Link>, <Link href="/city/vancouver" className="text-[#22c55e] hover:underline">Vancouver</Link>, <Link href="/city/montreal" className="text-[#22c55e] hover:underline">Montreal</Link>
            </p>
          </div>

          {/* Embed Code */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Share These Statistics
            </h2>
            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
              <p className="text-neutral-600 mb-4">
                Feel free to use these statistics in your articles, blog posts, or reports. Please link back to this page as your source.
              </p>
              <div className="bg-white rounded p-4 border border-neutral-300">
                <code className="text-xs text-neutral-700 break-all">
                  Source: <a href="https://crystaldeodorantprotection.com/statistics">Cat Litter Statistics 2025 - Crystal Deodorant Protection</a>
                </code>
              </div>
            </div>
          </div>

          {/* Related Pages */}
          <div className="bg-neutral-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-[#1a3a4a] mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/blog/why-does-cat-litter-smell" className="text-[#22c55e] hover:underline">
                → Why Does My Cat&apos;s Litter Box Smell?
              </Link>
              <Link href="/compare/best-odor-control-litter" className="text-[#22c55e] hover:underline">
                → Best Cat Litter for Odor Control
              </Link>
              <Link href="/blog/best-litter-multiple-cats" className="text-[#22c55e] hover:underline">
                → Best Litter for Multiple Cats
              </Link>
              <Link href="/tools/litter-calculator" className="text-[#22c55e] hover:underline">
                → Cat Litter Cost Calculator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Experience the Odor Control Solution Backed by Science
          </h2>
          <p className="text-[#b6e3f4] mb-6">
            With 81% of cat owners citing odor as their top concern,{" "}
            <a href="https://www.purrify.ca" className="text-white underline hover:text-[#22c55e]">
              Purrify
            </a>{" "}
            delivers the molecular trapping power you need.
          </p>
          <a
            href="https://www.purrify.ca"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Try Purrify Risk-Free
          </a>
        </div>
      </section>
    </>
  );
}
