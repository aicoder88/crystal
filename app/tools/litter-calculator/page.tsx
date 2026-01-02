"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";

/** Litter type pricing and lifespan data */
interface LitterData {
  costPerMonth: number;
  lifespan: number;
}

/** Calculator results interface */
interface CalculatorResults {
  baseCost: number;
  totalMonthlyCost: number;
  annualCost: number;
  extendedLifespan: number;
  litterSavings: number;
  totalPounds: number;
  purrifyMonthlyOz: number;
  changesPerMonth: string;
}

type LitterType = "clay" | "clumping" | "crystal" | "pine" | "tofu" | "wheat" | "corn" | "walnut";

/** Static pricing data - defined outside component */
const LITTER_PRICES: Record<LitterType, LitterData> = {
  clay: { costPerMonth: 20, lifespan: 2 },
  clumping: { costPerMonth: 28, lifespan: 3 },
  crystal: { costPerMonth: 35, lifespan: 4 },
  pine: { costPerMonth: 25, lifespan: 2.5 },
  tofu: { costPerMonth: 38, lifespan: 3 },
  wheat: { costPerMonth: 30, lifespan: 2.5 },
  corn: { costPerMonth: 30, lifespan: 2.5 },
  walnut: { costPerMonth: 35, lifespan: 3 },
} as const;

const LITTER_OPTIONS: { value: LitterType; label: string }[] = [
  { value: "clay", label: "Clay Litter" },
  { value: "clumping", label: "Clumping Litter" },
  { value: "crystal", label: "Crystal/Silica Litter" },
  { value: "pine", label: "Pine Litter" },
  { value: "tofu", label: "Tofu Litter" },
  { value: "wheat", label: "Wheat Litter" },
  { value: "corn", label: "Corn Litter" },
  { value: "walnut", label: "Walnut Shell Litter" },
];

/** Purrify cost per cat per month */
const PURRIFY_MONTHLY_PER_CAT = 15;
/** Purrify oz per cat per week */
const PURRIFY_OZ_PER_CAT_PER_WEEK = 2;
/** Average pounds of litter per cat per month */
const POUNDS_PER_CAT_PER_MONTH = 25;
/** Litter life extension with Purrify */
const PURRIFY_LIFE_EXTENSION = 1.4;
/** Litter savings percentage with Purrify */
const PURRIFY_LITTER_SAVINGS = 0.3;

/**
 * Calculate litter costs and savings.
 * Pure function for easy testing.
 */
function calculateResults(
  numCats: number,
  litterType: LitterType,
  usePurrify: boolean
): CalculatorResults {
  const { costPerMonth, lifespan } = LITTER_PRICES[litterType];
  const baseCost = costPerMonth * numCats;

  // Purrify calculations
  const purrifyMonthly = numCats * PURRIFY_MONTHLY_PER_CAT;
  const extendedLifespan = usePurrify ? lifespan * PURRIFY_LIFE_EXTENSION : lifespan;
  const litterSavings = usePurrify ? baseCost * PURRIFY_LITTER_SAVINGS : 0;

  const totalMonthlyCost = usePurrify
    ? baseCost - litterSavings + purrifyMonthly
    : baseCost;

  const annualCost = totalMonthlyCost * 12;

  // Litter usage
  const totalPoundsBase = POUNDS_PER_CAT_PER_MONTH * numCats;
  const totalPounds = usePurrify
    ? totalPoundsBase * (1 - PURRIFY_LITTER_SAVINGS)
    : totalPoundsBase;

  // Purrify usage
  const purrifyMonthlyOz = usePurrify
    ? PURRIFY_OZ_PER_CAT_PER_WEEK * 4 * numCats
    : 0;

  const changesPerMonth = (30 / extendedLifespan).toFixed(1);

  return {
    baseCost,
    totalMonthlyCost,
    annualCost,
    extendedLifespan,
    litterSavings,
    totalPounds,
    purrifyMonthlyOz,
    changesPerMonth,
  };
}

export default function LitterCalculatorPage() {
  const [numCats, setNumCats] = useState(1);
  const [litterType, setLitterType] = useState<LitterType>("clumping");
  const [usePurrify, setUsePurrify] = useState(false);

  // Memoize results calculation
  const results = useMemo(
    () => calculateResults(numCats, litterType, usePurrify),
    [numCats, litterType, usePurrify]
  );

  // Event handlers
  const handleNumCatsChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setNumCats(isNaN(value) || value < 1 ? 1 : Math.min(value, 10));
  }, []);

  const handleLitterTypeChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setLitterType(e.target.value as LitterType);
  }, []);

  const handlePurrifyToggle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUsePurrify(e.target.checked);
  }, []);

  const enablePurrify = useCallback(() => {
    setUsePurrify(true);
  }, []);

  // Get base lifespan for extension percentage calculation
  const baseLifespan = LITTER_PRICES[litterType].lifespan;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#b6e3f4]/20 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="text-[#22c55e] text-sm font-medium hover:underline mb-4 inline-block"
          >
            &larr; Back to Blog
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a] mb-4">
            Cat Litter Cost Calculator
          </h1>
          <p className="text-lg text-neutral-600">
            Calculate how much you spend on cat litter per month and year, and
            see how much you could save with{" "}
            <a
              href="https://www.purrify.ca"
              className="text-[#22c55e] hover:underline"
            >
              Purrify activated carbon
            </a>
            .
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
              <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
                Your Information
              </h2>

              {/* Number of Cats */}
              <div className="mb-6">
                <label
                  htmlFor="numCats"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Number of Cats
                </label>
                <input
                  id="numCats"
                  type="number"
                  min="1"
                  max="10"
                  value={numCats}
                  onChange={handleNumCatsChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent text-lg font-semibold text-[#1a3a4a]"
                />
              </div>

              {/* Litter Type */}
              <div className="mb-6">
                <label
                  htmlFor="litterType"
                  className="block text-sm font-medium text-neutral-700 mb-2"
                >
                  Current Litter Type
                </label>
                <select
                  id="litterType"
                  value={litterType}
                  onChange={handleLitterTypeChange}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-[#22c55e] focus:border-transparent text-lg text-[#1a3a4a]"
                >
                  {LITTER_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Purrify Toggle */}
              <div className="mb-6">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={usePurrify}
                    onChange={handlePurrifyToggle}
                    className="w-5 h-5 text-[#22c55e] rounded focus:ring-[#22c55e] border-neutral-300"
                  />
                  <span className="ml-3 text-neutral-700">
                    Add{" "}
                    <a
                      href="https://www.purrify.ca"
                      className="text-[#22c55e] hover:underline font-semibold"
                    >
                      Purrify
                    </a>{" "}
                    activated carbon
                  </span>
                </label>
                <p className="text-xs text-neutral-500 mt-2 ml-8">
                  Extends litter life by 40%, reduces odor for 7+ days
                </p>
              </div>

              <div className="bg-[#22c55e]/10 rounded-lg p-4 border border-[#22c55e]/30">
                <p className="text-sm text-neutral-700">
                  <strong>Tip:</strong> Most cat owners underestimate their
                  litter costs. This calculator uses real market prices updated
                  for 2025.
                </p>
              </div>
            </div>

            {/* Results Section */}
            <div className="bg-gradient-to-br from-[#1a3a4a] to-[#0f2a36] rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Your Costs</h2>

              {/* Monthly Cost */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="text-sm text-[#b6e3f4] mb-1">Monthly Cost</div>
                <div className="text-4xl font-bold">
                  ${results.totalMonthlyCost.toFixed(2)}
                  <span className="text-lg text-[#b6e3f4] font-normal">
                    {" "}
                    CAD/month
                  </span>
                </div>
                {usePurrify && results.litterSavings > 0 && (
                  <div className="text-sm text-[#22c55e] mt-2">
                    Saving ${results.litterSavings.toFixed(2)}/month on litter
                  </div>
                )}
              </div>

              {/* Annual Cost */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="text-sm text-[#b6e3f4] mb-1">Annual Cost</div>
                <div className="text-3xl font-bold">
                  ${results.annualCost.toFixed(2)}
                  <span className="text-base text-[#b6e3f4] font-normal">
                    {" "}
                    CAD/year
                  </span>
                </div>
              </div>

              {/* Litter Usage */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="text-sm text-[#b6e3f4] mb-1">
                  Litter Needed Per Month
                </div>
                <div className="text-2xl font-bold">
                  {results.totalPounds.toFixed(0)} lbs
                </div>
                {usePurrify && (
                  <div className="text-sm text-[#22c55e] mt-1">
                    30% less litter waste with Purrify
                  </div>
                )}
              </div>

              {/* Litter Changes */}
              <div className="mb-6 pb-6 border-b border-white/20">
                <div className="text-sm text-[#b6e3f4] mb-1">
                  Full Litter Changes Per Month
                </div>
                <div className="text-2xl font-bold">
                  {results.changesPerMonth}x
                </div>
                {usePurrify && (
                  <div className="text-sm text-[#22c55e] mt-1">
                    Extended by{" "}
                    {(
                      ((results.extendedLifespan - baseLifespan) / baseLifespan) *
                      100
                    ).toFixed(0)}
                    % with Purrify
                  </div>
                )}
              </div>

              {/* Purrify Amount */}
              {usePurrify && (
                <div className="mb-6">
                  <div className="text-sm text-[#b6e3f4] mb-1">
                    Purrify Needed Per Month
                  </div>
                  <div className="text-2xl font-bold">
                    {results.purrifyMonthlyOz} oz
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    Approx. {(results.purrifyMonthlyOz / 16).toFixed(1)} lbs or{" "}
                    {(results.purrifyMonthlyOz / 35.274).toFixed(0)}g
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="mt-8 pt-6 border-t border-white/20">
                {!usePurrify ? (
                  <button
                    onClick={enablePurrify}
                    className="w-full bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  >
                    See Savings with Purrify
                  </button>
                ) : (
                  <a
                    href="https://www.purrify.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold transition-colors text-center"
                  >
                    Get Purrify Now
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Explanation */}
          <div className="mt-12 bg-neutral-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-4">
              How This Calculator Works
            </h2>
            <div className="space-y-4 text-neutral-600">
              <p>
                <strong className="text-[#1a3a4a]">Base Litter Costs:</strong>{" "}
                We use average Canadian retail prices for each litter type
                (updated December 2024). Prices include typical monthly usage
                for one cat.
              </p>
              <p>
                <strong className="text-[#1a3a4a]">With Purrify:</strong>{" "}
                Activated carbon traps ammonia molecules, allowing you to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Extend time between litter changes by 40%</li>
                <li>Reduce overall litter usage by 30%</li>
                <li>Eliminate odor for 7+ days instead of 2-3 days</li>
                <li>Save money while improving odor control</li>
              </ul>
              <p>
                <strong className="text-[#1a3a4a]">Why Purrify Works:</strong>{" "}
                Unlike litter alone (which only absorbs moisture),{" "}
                <a
                  href="https://www.purrify.ca"
                  className="text-[#22c55e] hover:underline"
                >
                  Purrify&apos;s coconut-based activated carbon
                </a>{" "}
                traps ammonia at the molecular level. Each gram has the surface
                area of a football field.
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="mt-12 bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-2xl p-8">
            <h2 className="text-xl font-bold text-[#1a3a4a] mb-4">
              Share This Calculator
            </h2>
            <p className="text-neutral-600 mb-4">
              Help other cat owners understand their litter costs. Share this
              free calculator tool:
            </p>
            <div className="bg-white rounded-lg p-4 border border-neutral-300">
              <code className="text-sm text-neutral-700 break-all">
                https://crystaldeodorantprotection.com/tools/litter-calculator
              </code>
            </div>
          </div>

          {/* Related Pages */}
          <div className="mt-12 bg-neutral-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-[#1a3a4a] mb-4">
              Related Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/statistics"
                className="text-[#22c55e] hover:underline"
              >
                &rarr; Cat Litter Statistics 2025
              </Link>
              <Link
                href="/blog/why-does-cat-litter-smell"
                className="text-[#22c55e] hover:underline"
              >
                &rarr; Why Does Cat Litter Smell?
              </Link>
              <Link
                href="/compare/best-odor-control-litter"
                className="text-[#22c55e] hover:underline"
              >
                &rarr; Best Litter for Odor Control
              </Link>
              <Link
                href="/blog/best-litter-multiple-cats"
                className="text-[#22c55e] hover:underline"
              >
                &rarr; Best Litter for Multiple Cats
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
