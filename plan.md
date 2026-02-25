# Crystal Deodorant Protection - SEO Expansion Plan

## Overview

This plan expands crystaldeodorantprotection.com from 6 pages to 50+ pages, targeting long-tail keywords to drive organic traffic from Google and send qualified visitors to purrify.ca.

**Goals:**
- Rank for 100+ cat litter related keywords in Canada
- Drive 5,000+ monthly organic visitors within 6 months
- Generate 500+ monthly clicks to purrify.ca
- Build backlink-worthy content assets
- Achieve passive growth with no ongoing manual work

**Timeline:** All tasks can be completed in one session.

---

## Task 1: Programmatic SEO - Comparison Pages

### Purpose
Create pages targeting "[crystal cat litter] vs [alternative]" searches. These are high-intent keywords from people actively researching litter options.

### Pages to Create

Create these 12 comparison pages in `/app/compare/[slug]/page.tsx`:

| Slug | Title | Target Keyword |
|------|-------|----------------|
| `crystal-vs-clay` | Crystal Cat Litter vs Clay: Which Is Better? | crystal cat litter vs clay |
| `crystal-vs-clumping` | Crystal Cat Litter vs Clumping Litter Comparison | crystal vs clumping cat litter |
| `crystal-vs-pine` | Crystal Cat Litter vs Pine Litter: Pros & Cons | crystal cat litter vs pine |
| `crystal-vs-tofu` | Crystal Cat Litter vs Tofu Litter: Full Comparison | crystal vs tofu cat litter |
| `crystal-vs-paper` | Crystal Cat Litter vs Paper Litter | crystal vs paper cat litter |
| `crystal-vs-wheat` | Crystal Cat Litter vs Wheat Litter | crystal vs wheat cat litter |
| `crystal-vs-corn` | Crystal Cat Litter vs Corn Litter | crystal vs corn litter |
| `crystal-vs-walnut` | Crystal Cat Litter vs Walnut Shell Litter | crystal vs walnut cat litter |
| `silica-vs-clay` | Silica Gel Litter vs Clay: Complete Guide | silica cat litter vs clay |
| `silica-vs-clumping` | Silica Cat Litter vs Clumping: Which To Choose? | silica vs clumping litter |
| `activated-carbon-vs-crystal` | Activated Carbon vs Crystal Cat Litter | activated carbon vs crystal litter |
| `best-odor-control-litter` | Best Cat Litter for Odor Control (2025 Guide) | best cat litter for odor control |

### File Structure

```
app/
├── compare/
│   └── [slug]/
│       └── page.tsx        # Dynamic comparison page
├── lib/
│   └── comparisons.ts      # Comparison data
```

### Implementation Details

#### Step 1: Create the comparison data file

Create `/app/lib/comparisons.ts` with this exact structure:

```typescript
export interface LitterType {
  name: string;
  material: string;
  odorControl: "Poor" | "Moderate" | "Good" | "Excellent";
  dustLevel: "High" | "Moderate" | "Low" | "None";
  tracking: "High" | "Moderate" | "Low";
  eco: "Not Eco-Friendly" | "Somewhat Eco-Friendly" | "Eco-Friendly" | "Very Eco-Friendly";
  costPerMonth: string;
  catAcceptance: "Low" | "Moderate" | "High";
  pros: string[];
  cons: string[];
}

export interface Comparison {
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  intro: string;
  litter1: LitterType;
  litter2: LitterType;
  verdict: string;
  purrifyPitch: string;
}

export const litterTypes: Record<string, LitterType> = {
  crystal: {
    name: "Crystal Cat Litter",
    material: "Silica gel (synthetic)",
    odorControl: "Moderate",
    dustLevel: "Moderate",
    tracking: "Low",
    eco: "Not Eco-Friendly",
    costPerMonth: "$25-40 CAD",
    catAcceptance: "Moderate",
    pros: [
      "Long-lasting (up to 1 month)",
      "Lightweight and easy to carry",
      "Low tracking compared to clay",
      "Changes color when saturated"
    ],
    cons: [
      "Can be dusty despite claims",
      "Sharp texture some cats dislike",
      "Synthetic material, not biodegradable",
      "Ammonia smell returns after 2-3 days",
      "Cannot be mixed with other litters"
    ]
  },
  clay: {
    name: "Clay Cat Litter",
    material: "Bentonite clay (natural mineral)",
    odorControl: "Moderate",
    dustLevel: "High",
    tracking: "High",
    eco: "Not Eco-Friendly",
    costPerMonth: "$15-25 CAD",
    catAcceptance: "High",
    pros: [
      "Most affordable option",
      "Cats naturally accept the texture",
      "Widely available everywhere",
      "Good absorption"
    ],
    cons: [
      "Very dusty, respiratory concerns",
      "Heavy to carry",
      "Tracks everywhere",
      "Strip-mined, not sustainable",
      "Must change frequently"
    ]
  },
  clumping: {
    name: "Clumping Cat Litter",
    material: "Sodium bentonite clay",
    odorControl: "Good",
    dustLevel: "Moderate",
    tracking: "High",
    eco: "Not Eco-Friendly",
    costPerMonth: "$20-35 CAD",
    catAcceptance: "High",
    pros: [
      "Easy to scoop clumps",
      "Only remove soiled litter",
      "Most cats prefer the texture",
      "Good odor control initially"
    ],
    cons: [
      "Can be dusty",
      "Heavy bags to carry",
      "Tracks throughout home",
      "Not flushable",
      "Odor breaks through after a few days"
    ]
  },
  pine: {
    name: "Pine Cat Litter",
    material: "Compressed pine wood",
    odorControl: "Good",
    dustLevel: "Low",
    tracking: "Moderate",
    eco: "Eco-Friendly",
    costPerMonth: "$20-30 CAD",
    catAcceptance: "Moderate",
    pros: [
      "Natural pine scent masks odors",
      "Biodegradable and compostable",
      "Low dust",
      "Lightweight"
    ],
    cons: [
      "Strong pine scent some cats dislike",
      "Breaks down into sawdust",
      "Some cats refuse to use it",
      "Can stick to paws"
    ]
  },
  tofu: {
    name: "Tofu Cat Litter",
    material: "Soybean fiber (food byproduct)",
    odorControl: "Good",
    dustLevel: "Low",
    tracking: "Low",
    eco: "Very Eco-Friendly",
    costPerMonth: "$30-45 CAD",
    catAcceptance: "High",
    pros: [
      "Flushable and biodegradable",
      "Very low dust",
      "Clumps well",
      "Safe if ingested",
      "Soft texture cats like"
    ],
    cons: [
      "More expensive",
      "Can attract bugs if stored improperly",
      "Some brands have odd smell",
      "Less available in Canada"
    ]
  },
  paper: {
    name: "Paper Cat Litter",
    material: "Recycled paper pellets",
    odorControl: "Poor",
    dustLevel: "None",
    tracking: "Low",
    eco: "Very Eco-Friendly",
    costPerMonth: "$25-35 CAD",
    catAcceptance: "Moderate",
    pros: [
      "100% dust-free",
      "Great for cats with allergies",
      "Soft on paws (post-surgery)",
      "Biodegradable"
    ],
    cons: [
      "Poor odor control",
      "Doesn't clump",
      "Must change frequently",
      "Can get soggy and smelly"
    ]
  },
  wheat: {
    name: "Wheat Cat Litter",
    material: "Ground wheat",
    odorControl: "Good",
    dustLevel: "Low",
    tracking: "Moderate",
    eco: "Very Eco-Friendly",
    costPerMonth: "$25-35 CAD",
    catAcceptance: "High",
    pros: [
      "Natural enzyme odor control",
      "Flushable",
      "Clumps well",
      "Biodegradable"
    ],
    cons: [
      "Can attract bugs",
      "Some cats may try to eat it",
      "Allergy concerns for some cats",
      "More expensive than clay"
    ]
  },
  corn: {
    name: "Corn Cat Litter",
    material: "Ground corn cobs",
    odorControl: "Good",
    dustLevel: "Low",
    tracking: "Moderate",
    eco: "Eco-Friendly",
    costPerMonth: "$25-35 CAD",
    catAcceptance: "High",
    pros: [
      "Natural odor control",
      "Clumps well",
      "Lightweight",
      "Flushable"
    ],
    cons: [
      "Can grow mold if damp",
      "May attract bugs",
      "Some cats eat it",
      "Aflatoxin concerns with cheap brands"
    ]
  },
  walnut: {
    name: "Walnut Shell Litter",
    material: "Crushed walnut shells",
    odorControl: "Excellent",
    dustLevel: "Low",
    tracking: "Moderate",
    eco: "Very Eco-Friendly",
    costPerMonth: "$30-40 CAD",
    catAcceptance: "High",
    pros: [
      "Excellent natural odor control",
      "Dark color hides waste",
      "Clumps well",
      "Biodegradable"
    ],
    cons: [
      "Dark color can stain light floors",
      "More expensive",
      "Can be dusty when pouring",
      "Not as widely available"
    ]
  },
  activatedCarbon: {
    name: "Activated Carbon Additive",
    material: "Coconut shell activated carbon",
    odorControl: "Excellent",
    dustLevel: "None",
    tracking: "None",
    eco: "Very Eco-Friendly",
    costPerMonth: "$15-30 CAD (additive only)",
    catAcceptance: "High",
    pros: [
      "Works with ANY litter type",
      "7+ days odor elimination",
      "100% natural coconut-based",
      "Cats don't notice it",
      "Traps molecules, not just moisture"
    ],
    cons: [
      "Additional cost on top of litter",
      "Must remember to add it"
    ]
  }
};

export const comparisons: Comparison[] = [
  {
    slug: "crystal-vs-clay",
    title: "Crystal Cat Litter vs Clay: Which Is Better for Odor Control?",
    metaDescription: "Comparing crystal cat litter vs clay litter for odor control, dust, tracking, and cost. Discover which is best for your cat and home in Canada.",
    targetKeyword: "crystal cat litter vs clay",
    intro: "Choosing between crystal and clay cat litter? Both are popular options in Canada, but they work very differently. Crystal litter uses silica gel to absorb moisture, while clay litter uses natural minerals. This comprehensive comparison will help you decide which is right for your cat—and reveal why many cat owners are choosing a third option that outperforms both.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.clay,
    verdict: "Crystal litter wins on dust and tracking, while clay wins on cost and cat acceptance. However, neither truly eliminates odor—they just mask or absorb moisture temporarily. For true odor elimination that works with either litter type, activated carbon additives like Purrify offer superior molecular odor trapping.",
    purrifyPitch: "Instead of choosing between crystal and clay, use whichever your cat prefers and add Purrify activated carbon for 7+ days of odor-free freshness. It's the best of both worlds."
  },
  {
    slug: "crystal-vs-clumping",
    title: "Crystal Cat Litter vs Clumping: Complete Comparison Guide",
    metaDescription: "Crystal cat litter vs clumping litter compared. Learn about odor control, ease of cleaning, cost, and which Canadian cat owners prefer.",
    targetKeyword: "crystal vs clumping cat litter",
    intro: "Crystal cat litter and clumping litter take completely different approaches to managing your cat's waste. Crystal absorbs moisture throughout the entire litter bed, while clumping forms tight balls you scoop out. Each has passionate fans—but which actually performs better for odor control in Canadian homes?",
    litter1: litterTypes.crystal,
    litter2: litterTypes.clumping,
    verdict: "Clumping litter is easier to maintain daily and most cats prefer it. Crystal lasts longer between full changes but can develop odor issues. For the best odor control with either type, adding activated carbon like Purrify traps ammonia at the molecular level.",
    purrifyPitch: "Most cat owners prefer clumping litter for convenience. Add Purrify to your clumping litter for odor control that outperforms crystal—without making your cat adjust to a new texture."
  },
  {
    slug: "crystal-vs-pine",
    title: "Crystal Cat Litter vs Pine Litter: Pros, Cons & Best Choice",
    metaDescription: "Crystal cat litter vs pine litter compared for odor control, eco-friendliness, and cat acceptance. Find the best option for your home.",
    targetKeyword: "crystal cat litter vs pine",
    intro: "Looking for an alternative to traditional clay litter? Crystal and pine are two popular options with very different approaches. Crystal uses synthetic silica gel, while pine uses natural compressed wood. If you care about the environment but also want good odor control, this comparison will help you decide.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.pine,
    verdict: "Pine litter is more eco-friendly and has a pleasant natural scent, but some cats refuse the texture. Crystal litter has lower tracking but isn't biodegradable. For eco-conscious cat owners who want the best odor control, combining a natural litter with Purrify activated carbon is the optimal solution.",
    purrifyPitch: "If you've chosen pine litter for environmental reasons, boost its odor control with Purrify—made from sustainable coconut shells. Get the eco-friendly benefits of natural litter with superior odor elimination."
  },
  {
    slug: "crystal-vs-tofu",
    title: "Crystal Cat Litter vs Tofu Litter: Which Is Best in 2025?",
    metaDescription: "Compare crystal cat litter vs tofu litter for odor control, flushability, eco-friendliness, and cost. Updated guide for Canadian cat owners.",
    targetKeyword: "crystal vs tofu cat litter",
    intro: "Tofu litter has gained massive popularity as an eco-friendly, flushable alternative to traditional options. But how does it compare to crystal litter for odor control? This comparison breaks down everything you need to know about these two innovative litter types.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.tofu,
    verdict: "Tofu litter wins on eco-friendliness and is safer if ingested, while crystal has an edge on longevity. Both have moderate odor control that fades over time. For cat owners who want the convenience of tofu litter with excellent odor control, adding Purrify activated carbon is the perfect combination.",
    purrifyPitch: "Love tofu litter but wish it controlled odor better? Purrify works perfectly with tofu litter, trapping ammonia molecules while keeping all the eco-friendly benefits you chose tofu for."
  },
  {
    slug: "crystal-vs-paper",
    title: "Crystal Cat Litter vs Paper Litter: Comparison for Sensitive Cats",
    metaDescription: "Crystal vs paper cat litter compared. Best choice for cats with allergies, post-surgery recovery, and sensitive paws.",
    targetKeyword: "crystal vs paper cat litter",
    intro: "If your cat has allergies, respiratory issues, or is recovering from surgery, you need a low-dust litter option. Crystal and paper litter both market themselves as low-dust alternatives—but they perform very differently in real homes.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.paper,
    verdict: "Paper litter is truly dust-free and gentlest on paws, making it ideal for post-surgery cats. Crystal claims to be low-dust but many brands still produce silica particles. Paper's major weakness is odor control. For sensitive cats using paper litter, Purrify activated carbon adds the odor control paper lacks.",
    purrifyPitch: "Using paper litter for your sensitive cat? Purrify is 100% dust-free and safe for post-surgery cats, providing the odor control that paper litter simply can't deliver."
  },
  {
    slug: "crystal-vs-wheat",
    title: "Crystal Cat Litter vs Wheat Litter: Natural vs Synthetic Compared",
    metaDescription: "Crystal silica litter vs natural wheat litter. Compare odor control, clumping, flushability, and which is better for your cat.",
    targetKeyword: "crystal vs wheat cat litter",
    intro: "Wheat litter represents the natural, biodegradable approach to cat litter, while crystal takes the synthetic high-absorption route. Both promise good odor control through different mechanisms. Which actually delivers for Canadian cat owners?",
    litter1: litterTypes.crystal,
    litter2: litterTypes.wheat,
    verdict: "Wheat litter offers natural enzyme-based odor control and is flushable, while crystal absorbs more moisture but isn't eco-friendly. Wheat's natural odor control can be significantly boosted with activated carbon for a completely natural, highly effective solution.",
    purrifyPitch: "Wheat litter's natural enzymes plus Purrify's activated carbon create a powerful, 100% natural odor-fighting combination. Both are derived from plants, both are eco-friendly, and together they're unstoppable."
  },
  {
    slug: "crystal-vs-corn",
    title: "Crystal Cat Litter vs Corn Litter: Full Comparison",
    metaDescription: "Compare crystal cat litter to corn litter. Learn about odor control, safety, eco-impact, and which works better for multi-cat homes.",
    targetKeyword: "crystal vs corn litter",
    intro: "Corn litter has become a popular natural alternative, offering clumping ability and flushability that crystal can't match. But crystal litter fans love its longevity and low tracking. Here's how these two litter types actually compare for odor control.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.corn,
    verdict: "Corn litter is more eco-friendly and most cats prefer its texture. Crystal lasts longer but isn't biodegradable. Both have good initial odor control that fades. For ultimate odor control with corn litter, adding Purrify activated carbon keeps your home fresh for 7+ days.",
    purrifyPitch: "Corn litter users love the natural clumping and eco-friendly disposal. Add Purrify to take odor control to the next level—your home will smell fresh even in the summer heat."
  },
  {
    slug: "crystal-vs-walnut",
    title: "Crystal Cat Litter vs Walnut Shell Litter: Odor Control Showdown",
    metaDescription: "Crystal vs walnut shell cat litter compared. Which has better natural odor control? Complete guide for Canadian cat owners.",
    targetKeyword: "crystal vs walnut cat litter",
    intro: "Walnut shell litter is praised for its exceptional natural odor control—some say the best of any plant-based litter. But how does it compare to crystal litter's moisture absorption? This comparison reveals which approach actually works better.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.walnut,
    verdict: "Walnut litter has superior natural odor control compared to crystal, plus it's biodegradable. The dark color can be a pro (hides waste) or con (stains floors). For those who want walnut's excellent odor control taken to the maximum, Purrify activated carbon adds molecular trapping power.",
    purrifyPitch: "Walnut litter already has great odor control. Adding Purrify makes it exceptional—trapping the ammonia molecules that even walnut's natural absorption might miss."
  },
  {
    slug: "silica-vs-clay",
    title: "Silica Gel Cat Litter vs Clay: Complete Guide",
    metaDescription: "Silica gel cat litter compared to traditional clay. Which is better for odor, dust, and your cat? Canadian buyer's guide.",
    targetKeyword: "silica cat litter vs clay",
    intro: "Silica gel litter (also called crystal litter) was introduced as a premium alternative to traditional clay. But is it actually better? This guide compares these two popular litter types across all the factors that matter to Canadian cat owners.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.clay,
    verdict: "Silica gel offers lower tracking and longer time between changes, while clay is more affordable and universally accepted by cats. Neither excels at long-term odor control. The solution? Use whichever type your cat prefers and add Purrify activated carbon for odor elimination that works.",
    purrifyPitch: "Whether you use silica or clay, Purrify works with both. No need to switch litters—just add activated carbon and enjoy 7+ days without litter box smell."
  },
  {
    slug: "silica-vs-clumping",
    title: "Silica Cat Litter vs Clumping: Which Should You Choose?",
    metaDescription: "Silica gel litter vs clumping clay compared. Maintenance, cost, odor control, and cat preference analyzed for Canadian homes.",
    targetKeyword: "silica vs clumping litter",
    intro: "The silica vs clumping debate divides cat owners. Silica fans love the long-lasting crystals, while clumping devotees prefer the easy scoop-and-go maintenance. Let's break down which actually performs better for your home and your cat.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.clumping,
    verdict: "Clumping wins for daily convenience and cat acceptance. Silica wins for time between full changes. For odor control, both eventually fail as ammonia builds up. Adding Purrify to clumping litter gives you easy maintenance AND excellent odor control.",
    purrifyPitch: "Stick with clumping litter your cat loves, add Purrify for odor control that beats silica. Best of both worlds—easy scooping and 7+ days of freshness."
  },
  {
    slug: "activated-carbon-vs-crystal",
    title: "Activated Carbon vs Crystal Cat Litter: The Odor Control Battle",
    metaDescription: "Compare activated carbon cat litter additives to crystal silica litter. Learn which method actually eliminates odor vs just absorbing moisture.",
    targetKeyword: "activated carbon vs crystal litter",
    intro: "Crystal litter and activated carbon take fundamentally different approaches to odor control. Crystal absorbs moisture to reduce smell, while activated carbon traps odor molecules directly. Understanding this difference is key to finally solving your litter box odor problems.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.activatedCarbon,
    verdict: "Activated carbon is scientifically superior for odor control—it traps ammonia molecules rather than just absorbing moisture. Crystal litter will always have some odor escape. The optimal solution is using activated carbon as an additive to your preferred litter.",
    purrifyPitch: "Purrify's activated carbon doesn't replace your litter—it supercharges it. Use any litter your cat likes, add Purrify, and experience true odor elimination. This is why thousands of Canadian cat owners have switched."
  },
  {
    slug: "best-odor-control-litter",
    title: "Best Cat Litter for Odor Control in Canada (2025 Guide)",
    metaDescription: "Find the best cat litter for odor control in Canada. We compare all types and reveal the #1 solution for eliminating litter box smell.",
    targetKeyword: "best cat litter for odor control",
    intro: "If you're searching for the best cat litter for odor control, you've probably tried multiple brands with disappointing results. The truth is, most litters use the same basic approach—absorption—which has limits. This guide reveals why the best solution isn't a specific litter, but an additive that works with any litter.",
    litter1: litterTypes.clumping,
    litter2: litterTypes.activatedCarbon,
    verdict: "After testing all major litter types, the best odor control comes from combining a quality clumping litter (for easy maintenance and cat acceptance) with activated carbon additives (for molecular odor trapping). This combination outperforms any single litter product.",
    purrifyPitch: "The best cat litter for odor control is the one your cat will actually use—enhanced with Purrify activated carbon. Stop searching for a magic litter that doesn't exist. Use what works for your cat, add Purrify, and enjoy a fresh-smelling home."
  }
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map(c => c.slug);
}
```

#### Step 2: Create the dynamic comparison page

Create `/app/compare/[slug]/page.tsx`:

```tsx
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

          {/* Purrify CTA */}
          <div className="bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-2xl p-6">
            <h3 className="text-xl font-bold text-[#1a3a4a] mb-2">
              The Better Solution: <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="text-[#22c55e] hover:underline">Purrify Activated Carbon</a>
            </h3>
            <p className="text-neutral-600 mb-4">
              {comparison.purrifyPitch}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Try Purrify Today
              </a>
              <Link
                href="/science"
                className="border-2 border-[#1a3a4a] hover:bg-[#1a3a4a] hover:text-white text-[#1a3a4a] px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Learn How It Works
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
                For maximum odor control, combine your preferred litter type with an <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="purrify-link">activated carbon additive like Purrify</a>. Activated carbon traps odor molecules at the source, providing 7+ days of freshness regardless of which base litter you use.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                Can I switch my cat from {comparison.litter1.name.toLowerCase()} to {comparison.litter2.name.toLowerCase()}?
              </h3>
              <p className="text-neutral-600 text-sm">
                Yes, but transition gradually over 7-10 days by mixing increasing amounts of the new litter. Some cats are sensitive to texture changes. Alternatively, keep your current litter and add <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="purrify-link">Purrify for better odor control</a> without any adjustment period.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-6">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                What&apos;s the most cost-effective cat litter option?
              </h3>
              <p className="text-neutral-600 text-sm">
                Clay litter has the lowest upfront cost, but you may spend more long-term due to frequent changes and potential odor issues. Using a mid-range litter with <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="purrify-link">Purrify extends litter life</a>, potentially saving money while eliminating odor.
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

      {/* Final CTA */}
      <section className="py-12 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stop Comparing. Start Eliminating Odor.
          </h2>
          <p className="text-[#b6e3f4] mb-6">
            <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="text-white underline hover:text-[#22c55e]">Purrify</a> works with any cat litter. Keep what your cat loves, add what actually works.
          </p>
          <a
            href="https://www.purrify.ca"
            target="_blank"
            rel="noopener"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Try Purrify Risk-Free
          </a>
        </div>
      </section>
    </>
  );
}
```

#### Step 3: Update sitemap to include comparison pages

Edit `/app/sitemap.ts` to add:

```typescript
import { getAllComparisonSlugs } from "@/app/lib/comparisons";

// Inside the sitemap function, add comparison pages:
const comparisonPages = getAllComparisonSlugs().map((slug) => ({
  url: `${baseUrl}/compare/${slug}`,
  lastModified: new Date(),
  changeFrequency: "monthly" as const,
  priority: 0.8,
}));

// Return [...existingPages, ...comparisonPages]
```

---

## Task 2: Blog with AI-Generated Content

### Purpose
Create a blog targeting question-based keywords. These capture users early in their research journey and establish the site as an authority.

### Blog Structure

```
app/
├── blog/
│   ├── page.tsx                    # Blog index
│   └── [slug]/
│       └── page.tsx                # Individual blog posts
├── lib/
│   └── blog-posts.ts               # Blog post data
```

### Blog Posts to Create

Create these 10 initial blog posts:

| Slug | Title | Target Keyword |
|------|-------|----------------|
| `why-does-cat-litter-smell` | Why Does My Cat's Litter Box Smell So Bad? (And How to Fix It) | why does cat litter smell |
| `how-often-change-crystal-litter` | How Often Should You Change Crystal Cat Litter? | how often change crystal cat litter |
| `is-crystal-litter-safe` | Is Crystal Cat Litter Safe for Cats? Complete Safety Guide | is crystal cat litter safe |
| `get-rid-litter-box-smell-apartment` | How to Get Rid of Litter Box Smell in an Apartment | litter box smell apartment |
| `best-litter-multiple-cats` | Best Cat Litter for Multiple Cats (Odor Control Guide) | best cat litter multiple cats |
| `activated-carbon-cat-litter` | What Is Activated Carbon Cat Litter? How It Works | activated carbon cat litter |
| `cat-litter-box-near-kitchen` | Can You Put a Litter Box Near the Kitchen? | litter box near kitchen |
| `how-much-litter-in-box` | How Much Cat Litter Should You Put in the Box? | how much cat litter in box |
| `litter-box-smell-after-cleaning` | Why Does My Litter Box Smell Even After Cleaning? | litter box smell after cleaning |
| `natural-cat-litter-alternatives` | Natural Cat Litter Alternatives: Complete Guide | natural cat litter alternatives |

### Implementation Details

#### Step 1: Create blog posts data file

Create `/app/lib/blog-posts.ts`:

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  metaDescription: string;
  targetKeyword: string;
  publishedDate: string;
  updatedDate: string;
  readingTime: string;
  excerpt: string;
  content: string; // HTML content
  faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-does-cat-litter-smell",
    title: "Why Does My Cat's Litter Box Smell So Bad? (And How to Fix It)",
    metaDescription: "Discover why your cat's litter box smells and proven solutions to eliminate odor. Science-backed tips for a fresh-smelling home.",
    targetKeyword: "why does cat litter smell",
    publishedDate: "2025-01-15",
    updatedDate: "2025-01-15",
    readingTime: "6 min read",
    excerpt: "That unmistakable litter box smell isn't just unpleasant—it's ammonia, and it's a sign your current odor control isn't working. Here's the science behind the smell and how to actually fix it.",
    content: `
      <p>If you're reading this, you've probably tried everything: expensive litters, baking soda, air fresheners, covered boxes, and constant cleaning. Yet that distinctive litter box smell persists. You're not alone—it's the #1 complaint among cat owners.</p>

      <p>The good news? Once you understand <em>why</em> litter boxes smell, the solution becomes obvious.</p>

      <h2>The Science Behind Litter Box Odor</h2>

      <p>That smell you're fighting isn't just "cat smell"—it's primarily <strong>ammonia</strong>, a compound released when bacteria break down the urea in cat urine. Here's the process:</p>

      <ol>
        <li>Your cat urinates in the litter box</li>
        <li>Bacteria immediately begin breaking down urea</li>
        <li>This produces ammonia gas, which rises into the air</li>
        <li>The ammonia concentration builds over time</li>
        <li>You smell it—sometimes from rooms away</li>
      </ol>

      <p>Most cat litters try to combat this by <strong>absorbing moisture</strong>. The logic: less moisture = less bacterial activity = less smell. But here's the problem—moisture absorption doesn't trap ammonia molecules that have already formed. They still escape into your home.</p>

      <h2>Why Your Current Litter Isn't Working</h2>

      <p>Whether you use clay, clumping, crystal, or natural litter, they all share the same fundamental limitation: they're reactive, not proactive. They try to manage waste after it's deposited, rather than actively trapping odor molecules.</p>

      <p><strong>Crystal litter</strong> is particularly problematic despite its premium price. The silica crystals absorb moisture well, but ammonia molecules still escape. That's why crystal litter users often notice the smell returning after just 2-3 days.</p>

      <h2>The Solution: Molecular Trapping</h2>

      <p>The only way to truly eliminate litter box odor is to <strong>trap ammonia molecules before they reach your nose</strong>. This is exactly what <a href="https://www.purrify.ca" target="_blank" rel="noopener" class="purrify-link">activated carbon technology like Purrify</a> does.</p>

      <p>Activated carbon works through a process called <strong>adsorption</strong> (not absorption). Ammonia molecules physically stick to the carbon's surface and are locked away permanently. One gram of activated carbon has the surface area of a football field—that's a lot of trapping power.</p>

      <h2>5 Steps to Eliminate Litter Box Smell</h2>

      <ol>
        <li><strong>Scoop daily</strong> - Remove solid waste every day without exception</li>
        <li><strong>Use enough litter</strong> - Maintain 3-4 inches of litter depth</li>
        <li><strong>Add activated carbon</strong> - <a href="https://www.purrify.ca" target="_blank" rel="noopener" class="purrify-link">Purrify's activated carbon</a> traps ammonia at the source</li>
        <li><strong>Clean the box monthly</strong> - Wash with mild soap, avoid harsh chemicals</li>
        <li><strong>Ensure proper ventilation</strong> - Covered boxes trap smell inside (and cats often hate them)</li>
      </ol>

      <h2>Why Activated Carbon Outperforms Everything Else</h2>

      <p><a href="https://www.purrify.ca" target="_blank" rel="noopener" class="purrify-link">Purrify uses coconut-based activated carbon</a>, which has the highest micropore volume of any carbon source. This means maximum ammonia trapping in minimum product. Users report <strong>7+ days without litter box smell</strong>—a dramatic improvement over any litter alone.</p>

      <p>The best part? It works with any litter type. No need to switch what your cat already likes. Just sprinkle Purrify on top, mix it in, and experience the difference.</p>
    `,
    faqs: [
      {
        question: "Why does my cat's litter box smell so bad even when clean?",
        answer: "Even a freshly cleaned litter box can smell because ammonia molecules form immediately when urine contacts litter. Regular litters absorb moisture but don't trap ammonia. Adding activated carbon like Purrify traps these molecules at the source."
      },
      {
        question: "How do I get rid of litter box smell permanently?",
        answer: "The only permanent solution is trapping ammonia molecules before they escape. Use activated carbon additives like Purrify with your regular litter. Combined with daily scooping, this eliminates odor for 7+ days."
      },
      {
        question: "Does baking soda help with litter box smell?",
        answer: "Baking soda provides minimal odor control and can irritate some cats' paws. Activated carbon is far more effective—it has thousands of times more surface area for trapping odor molecules."
      }
    ]
  },
  // ADD 9 MORE BLOG POSTS WITH SIMILAR STRUCTURE
  // Each post should be 800-1200 words, include 3-5 Purrify links,
  // and have 3 FAQ items for schema markup
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(p => p.slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) =>
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );
}
```

#### Step 2: Create blog index page

Create `/app/blog/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/app/lib/blog-posts";

export const metadata: Metadata = {
  title: "Cat Litter & Odor Control Blog",
  description: "Expert guides on cat litter, odor control, and keeping your home fresh. Science-backed tips for Canadian cat owners.",
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <section className="bg-gradient-to-b from-[#b6e3f4]/20 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#1a3a4a] mb-4">
            Cat Litter & Odor Control Blog
          </h1>
          <p className="text-lg text-neutral-600">
            Expert guides and science-backed tips for a fresh-smelling home
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-neutral-200 pb-8">
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-[#1a3a4a] hover:text-[#22c55e] transition-colors mb-2">
                    {post.title}
                  </h2>
                </Link>
                <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                  <time dateTime={post.publishedDate}>
                    {new Date(post.publishedDate).toLocaleDateString('en-CA', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
                <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#22c55e] font-medium hover:underline"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
```

#### Step 3: Create individual blog post page

Create `/app/blog/[slug]/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/app/lib/blog-posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: [post.targetKeyword, "cat litter", "odor control", "cat care"],
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.publishedDate,
      modifiedTime: post.updatedDate,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) notFound();

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "datePublished": post.publishedDate,
    "dateModified": post.updatedDate,
    "author": {
      "@type": "Organization",
      "name": "Crystal Deodorant Protection"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crystal Deodorant Protection",
      "url": "https://crystaldeodorantprotection.com"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-[#22c55e] text-sm font-medium hover:underline mb-6 inline-block">
            ← Back to Blog
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a] mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-neutral-500 mb-8">
            <time dateTime={post.publishedDate}>
              {new Date(post.publishedDate).toLocaleDateString('en-CA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <div
            className="prose prose-lg prose-neutral max-w-none
              prose-headings:text-[#1a3a4a]
              prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
              prose-p:text-neutral-600 prose-p:leading-relaxed
              prose-a:text-[#22c55e] prose-a:no-underline hover:prose-a:underline
              prose-li:text-neutral-600
              prose-strong:text-[#1a3a4a]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQ Section */}
          <section className="mt-12 pt-8 border-t border-neutral-200">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {post.faqs.map((faq, i) => (
                <div key={i} className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-semibold text-[#1a3a4a] mb-2">{faq.question}</h3>
                  <p className="text-neutral-600 text-sm">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 bg-[#22c55e]/10 border-2 border-[#22c55e] rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#1a3a4a] mb-2">
              Ready to Eliminate Litter Box Odor?
            </h2>
            <p className="text-neutral-600 mb-6">
              Join thousands of Canadian cat owners who discovered the power of activated carbon.
            </p>
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Try Purrify Today
            </a>
          </section>
        </div>
      </article>
    </>
  );
}
```

---

## Task 3: Schema Markup

### Purpose
Add structured data to help Google understand content and potentially show rich snippets (FAQ dropdowns, how-to steps, etc.) in search results.

### Schema Types to Implement

1. **FAQ Schema** - On all comparison and blog pages (already included in templates above)
2. **Organization Schema** - On homepage
3. **WebSite Schema** - On homepage
4. **BreadcrumbList Schema** - On all pages
5. **Product Schema** - On cat-litter page (linking to Purrify)
6. **HowTo Schema** - On relevant blog posts

### Implementation Details

#### Step 1: Create schema components

Create `/components/schemas/OrganizationSchema.tsx`:

```tsx
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Crystal Deodorant Protection",
    "url": "https://crystaldeodorantprotection.com",
    "logo": "https://crystaldeodorantprotection.com/og-image.png",
    "description": "Educational resource about natural odor control solutions including crystal deodorants, crystal cat litter, and activated carbon technology.",
    "sameAs": []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Create `/components/schemas/WebSiteSchema.tsx`:

```tsx
export default function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Crystal Deodorant Protection",
    "url": "https://crystaldeodorantprotection.com",
    "description": "Learn about natural odor control from crystal deodorants to activated carbon cat litter solutions.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://crystaldeodorantprotection.com/blog?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Create `/components/schemas/BreadcrumbSchema.tsx`:

```tsx
interface BreadcrumbItem {
  name: string;
  url: string;
}

export default function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

Create `/components/schemas/ProductSchema.tsx`:

```tsx
export default function ProductSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Purrify Activated Carbon Cat Litter Additive",
    "description": "100% natural coconut-based activated carbon that eliminates litter box odor for 7+ days. Works with any cat litter type.",
    "brand": {
      "@type": "Brand",
      "name": "Purrify"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "4.76",
      "highPrice": "29.99",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "url": "https://www.purrify.ca"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "138",
      "bestRating": "5"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

#### Step 2: Add schemas to pages

Update `/app/page.tsx` (homepage) to include:

```tsx
import OrganizationSchema from "@/components/schemas/OrganizationSchema";
import WebSiteSchema from "@/components/schemas/WebSiteSchema";

// At the top of the component return:
<>
  <OrganizationSchema />
  <WebSiteSchema />
  {/* rest of homepage content */}
</>
```

Update `/app/cat-litter/page.tsx` to include:

```tsx
import ProductSchema from "@/components/schemas/ProductSchema";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";

// At the top of the component return:
<>
  <ProductSchema />
  <BreadcrumbSchema items={[
    { name: "Home", url: "https://crystaldeodorantprotection.com" },
    { name: "Cat Litter", url: "https://crystaldeodorantprotection.com/cat-litter" }
  ]} />
  {/* rest of page content */}
</>
```

---

## Task 4: Canadian Local SEO - City Pages

### Purpose
Create location-specific landing pages to capture "[cat litter] + [city]" searches and target Canadian cat owners directly.

### Cities to Target

Create pages for these 15 Canadian cities (ordered by population and cat ownership rates):

| City | Slug | Population |
|------|------|------------|
| Toronto | `toronto` | 2.7M |
| Montreal | `montreal` | 1.7M |
| Vancouver | `vancouver` | 631K |
| Calgary | `calgary` | 1.3M |
| Edmonton | `edmonton` | 981K |
| Ottawa | `ottawa` | 1.0M |
| Winnipeg | `winnipeg` | 749K |
| Quebec City | `quebec-city` | 542K |
| Hamilton | `hamilton` | 569K |
| Kitchener | `kitchener` | 256K |
| London | `london` | 422K |
| Victoria | `victoria` | 92K |
| Halifax | `halifax` | 439K |
| Saskatoon | `saskatoon` | 273K |
| Regina | `regina` | 228K |

### File Structure

```
app/
├── city/
│   └── [city]/
│       └── page.tsx        # Dynamic city page
├── lib/
│   └── cities.ts           # City data
```

### Implementation Details

#### Step 1: Create city data file

Create `/app/lib/cities.ts`:

```typescript
export interface City {
  slug: string;
  name: string;
  province: string;
  provinceAbbr: string;
  population: string;
  apartmentPercentage: string;
  avgRent: string;
  localFacts: string[];
  nearbyAreas: string[];
}

export const cities: City[] = [
  {
    slug: "toronto",
    name: "Toronto",
    province: "Ontario",
    provinceAbbr: "ON",
    population: "2.7 million",
    apartmentPercentage: "47%",
    avgRent: "$2,500/month",
    localFacts: [
      "Toronto has one of the highest cat ownership rates in Canada",
      "Nearly half of Toronto residents live in apartments or condos",
      "Small living spaces make litter box odor control essential",
      "Many Toronto buildings have strict pet odor policies"
    ],
    nearbyAreas: ["Mississauga", "Brampton", "Markham", "Vaughan", "Scarborough"]
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    province: "British Columbia",
    provinceAbbr: "BC",
    population: "631,000",
    apartmentPercentage: "58%",
    avgRent: "$2,800/month",
    localFacts: [
      "Vancouver has the highest percentage of apartment dwellers in Canada",
      "Mild, humid climate can intensify litter box odors",
      "Many Vancouver cat owners live in pet-friendly condos",
      "High cost of living means maximizing every square foot matters"
    ],
    nearbyAreas: ["Burnaby", "Richmond", "Surrey", "North Vancouver", "Coquitlam"]
  },
  {
    slug: "montreal",
    name: "Montreal",
    province: "Quebec",
    provinceAbbr: "QC",
    population: "1.7 million",
    apartmentPercentage: "63%",
    avgRent: "$1,700/month",
    localFacts: [
      "Montreal has the highest rental rate in Canada",
      "Many heritage apartments have limited ventilation",
      "Cold winters mean windows stay closed for months",
      "Québécois cat owners are known for pampering their pets"
    ],
    nearbyAreas: ["Laval", "Longueuil", "Brossard", "Terrebonne", "Repentigny"]
  },
  {
    slug: "calgary",
    name: "Calgary",
    province: "Alberta",
    provinceAbbr: "AB",
    population: "1.3 million",
    apartmentPercentage: "31%",
    avgRent: "$1,800/month",
    localFacts: [
      "Calgary's dry climate affects litter performance",
      "Long, cold winters mean homes stay sealed for months",
      "Growing condo market in downtown Calgary",
      "Pet-friendly city with many cat-owning households"
    ],
    nearbyAreas: ["Airdrie", "Cochrane", "Okotoks", "Chestermere", "Strathmore"]
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    province: "Alberta",
    provinceAbbr: "AB",
    population: "981,000",
    apartmentPercentage: "29%",
    avgRent: "$1,400/month",
    localFacts: [
      "Edmonton's extreme winters require excellent indoor air quality",
      "Heating systems can spread litter box odors throughout homes",
      "Growing apartment and condo market",
      "Strong community of cat lovers"
    ],
    nearbyAreas: ["St. Albert", "Sherwood Park", "Spruce Grove", "Leduc", "Fort Saskatchewan"]
  },
  {
    slug: "ottawa",
    name: "Ottawa",
    province: "Ontario",
    provinceAbbr: "ON",
    population: "1.0 million",
    apartmentPercentage: "38%",
    avgRent: "$2,100/month",
    localFacts: [
      "Canada's capital has a high percentage of cat-owning households",
      "Many government workers live in apartments near downtown",
      "Harsh winters mean homes stay sealed October through April",
      "Bilingual city with access to products from Quebec and Ontario"
    ],
    nearbyAreas: ["Gatineau", "Kanata", "Orleans", "Barrhaven", "Nepean"]
  },
  {
    slug: "winnipeg",
    name: "Winnipeg",
    province: "Manitoba",
    provinceAbbr: "MB",
    population: "749,000",
    apartmentPercentage: "32%",
    avgRent: "$1,200/month",
    localFacts: [
      "Winnipeg experiences some of Canada's coldest winters",
      "Homes stay sealed tight from November to March",
      "Affordable housing means larger cat populations",
      "Strong sense of community among pet owners"
    ],
    nearbyAreas: ["Brandon", "Steinbach", "Selkirk", "Portage la Prairie"]
  },
  {
    slug: "quebec-city",
    name: "Quebec City",
    province: "Quebec",
    provinceAbbr: "QC",
    population: "542,000",
    apartmentPercentage: "42%",
    avgRent: "$1,100/month",
    localFacts: [
      "Historic buildings often have limited ventilation",
      "Cold, snowy winters keep windows closed for months",
      "High cat ownership rate among French-Canadian families",
      "Growing awareness of natural pet products"
    ],
    nearbyAreas: ["Lévis", "Saint-Augustin", "Beauport", "Charlesbourg"]
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    province: "Ontario",
    provinceAbbr: "ON",
    population: "569,000",
    apartmentPercentage: "35%",
    avgRent: "$1,800/month",
    localFacts: [
      "Growing population of young professionals with pets",
      "Mix of historic homes and modern apartments",
      "Proximity to Toronto with lower cost of living",
      "Strong local pet community"
    ],
    nearbyAreas: ["Burlington", "Stoney Creek", "Dundas", "Ancaster", "Grimsby"]
  },
  {
    slug: "kitchener",
    name: "Kitchener-Waterloo",
    province: "Ontario",
    provinceAbbr: "ON",
    population: "256,000",
    apartmentPercentage: "33%",
    avgRent: "$1,900/month",
    localFacts: [
      "Tech hub with many young professionals and students",
      "Growing apartment market near universities",
      "High percentage of pet-friendly rentals",
      "Environmentally conscious community"
    ],
    nearbyAreas: ["Waterloo", "Cambridge", "Guelph", "Stratford"]
  },
  {
    slug: "london",
    name: "London",
    province: "Ontario",
    provinceAbbr: "ON",
    population: "422,000",
    apartmentPercentage: "34%",
    avgRent: "$1,600/month",
    localFacts: [
      "University town with many student renters",
      "High demand for pet-friendly apartments",
      "Growing downtown condo market",
      "Strong veterinary community"
    ],
    nearbyAreas: ["St. Thomas", "Woodstock", "Strathroy", "Tillsonburg"]
  },
  {
    slug: "victoria",
    name: "Victoria",
    province: "British Columbia",
    provinceAbbr: "BC",
    population: "92,000",
    apartmentPercentage: "51%",
    avgRent: "$2,200/month",
    localFacts: [
      "Highest percentage of seniors in Canada—many with cats",
      "Mild climate but high humidity affects odor",
      "Very environmentally conscious community",
      "High demand for natural pet products"
    ],
    nearbyAreas: ["Saanich", "Langford", "Sidney", "Sooke", "Oak Bay"]
  },
  {
    slug: "halifax",
    name: "Halifax",
    province: "Nova Scotia",
    provinceAbbr: "NS",
    population: "439,000",
    apartmentPercentage: "41%",
    avgRent: "$1,800/month",
    localFacts: [
      "Maritime humidity can intensify litter box odors",
      "Growing tech sector bringing young professionals",
      "Historic buildings with unique ventilation challenges",
      "Strong local pet adoption community"
    ],
    nearbyAreas: ["Dartmouth", "Bedford", "Sackville", "Cole Harbour"]
  },
  {
    slug: "saskatoon",
    name: "Saskatoon",
    province: "Saskatchewan",
    provinceAbbr: "SK",
    population: "273,000",
    apartmentPercentage: "28%",
    avgRent: "$1,200/month",
    localFacts: [
      "Extreme temperature swings affect indoor air quality",
      "Long winters mean homes stay sealed for months",
      "Growing rental market in downtown area",
      "Strong community of pet lovers"
    ],
    nearbyAreas: ["Martensville", "Warman", "Humboldt"]
  },
  {
    slug: "regina",
    name: "Regina",
    province: "Saskatchewan",
    provinceAbbr: "SK",
    population: "228,000",
    apartmentPercentage: "27%",
    avgRent: "$1,100/month",
    localFacts: [
      "Cold, dry winters affect litter performance",
      "Affordable housing attracts pet owners",
      "Growing awareness of natural alternatives",
      "Strong sense of community"
    ],
    nearbyAreas: ["Moose Jaw", "Swift Current", "Yorkton"]
  }
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map(c => c.slug);
}

export function getAllCities(): City[] {
  return cities;
}
```

#### Step 2: Create dynamic city page

Create `/app/city/[city]/page.tsx`:

```tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs, getAllCities } from "@/app/lib/cities";
import BreadcrumbSchema from "@/components/schemas/BreadcrumbSchema";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) return { title: "City Not Found" };

  return {
    title: `Cat Litter Odor Control in ${city.name}, ${city.provinceAbbr} | Best Solution`,
    description: `Struggling with litter box smell in your ${city.name} apartment? Discover how ${city.name} cat owners eliminate odor with activated carbon. Works in any ${city.province} home.`,
    keywords: [
      `cat litter ${city.name}`,
      `litter box smell ${city.name}`,
      `cat odor control ${city.name}`,
      `best cat litter ${city.provinceAbbr}`,
      `apartment cat ${city.name}`
    ],
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) notFound();

  const otherCities = getAllCities().filter(c => c.slug !== citySlug).slice(0, 6);

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://crystaldeodorantprotection.com" },
        { name: "Cities", url: "https://crystaldeodorantprotection.com/city" },
        { name: city.name, url: `https://crystaldeodorantprotection.com/city/${city.slug}` }
      ]} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#b6e3f4]/20 to-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a3a4a] mb-4">
            Cat Litter Odor Control in {city.name}, {city.provinceAbbr}
          </h1>
          <p className="text-lg text-neutral-600">
            How {city.name} cat owners are eliminating litter box smell—even in apartments
          </p>
        </div>
      </section>

      {/* City Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#22c55e]">{city.population}</p>
              <p className="text-sm text-neutral-600">Population</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#22c55e]">{city.apartmentPercentage}</p>
              <p className="text-sm text-neutral-600">Live in Apartments</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#22c55e]">{city.avgRent}</p>
              <p className="text-sm text-neutral-600">Average Rent</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#22c55e]">7+ Days</p>
              <p className="text-sm text-neutral-600">Odor-Free with Purrify</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-4">
            Why {city.name} Cat Owners Struggle with Litter Box Odor
          </h2>

          <ul className="space-y-3 mb-8">
            {city.localFacts.map((fact, i) => (
              <li key={i} className="flex items-start">
                <span className="text-[#22c55e] mr-3 mt-1">•</span>
                <span className="text-neutral-600">{fact}</span>
              </li>
            ))}
          </ul>

          <p className="text-neutral-600 mb-6">
            Living in {city.name} presents unique challenges for cat owners. Whether you're in a downtown apartment,
            a suburban home, or anywhere in the {city.province} area, litter box odor can be a constant battle—especially
            during the months when windows stay closed.
          </p>

          <p className="text-neutral-600 mb-6">
            That's why thousands of {city.name} cat owners have discovered{" "}
            <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="purrify-link">
              Purrify activated carbon
            </a>—the natural solution that actually works, no matter what litter you use.
          </p>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
            The {city.name} Solution: Activated Carbon
          </h2>

          <div className="bg-white rounded-2xl p-6 border border-neutral-200 mb-8">
            <h3 className="text-xl font-semibold text-[#1a3a4a] mb-4">
              Why <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="text-[#22c55e] hover:underline">Purrify</a> Works for {city.name} Homes
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-[#22c55e] mr-3">✓</span>
                <span className="text-neutral-600">
                  <strong>Works in any space</strong>—perfect for {city.name} apartments and condos
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22c55e] mr-3">✓</span>
                <span className="text-neutral-600">
                  <strong>7+ days odor-free</strong>—essential during {city.province}'s cold months
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22c55e] mr-3">✓</span>
                <span className="text-neutral-600">
                  <strong>Works with any litter</strong>—keep using what your cat already loves
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#22c55e] mr-3">✓</span>
                <span className="text-neutral-600">
                  <strong>Ships across Canada</strong>—fast delivery to {city.name} and {city.nearbyAreas.slice(0, 2).join(", ")}
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Get Purrify Shipped to {city.name}
            </a>
            <p className="text-sm text-neutral-500 mt-3">
              Free shipping on subscriptions • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-4">
            Also Serving {city.name} Area
          </h2>
          <p className="text-neutral-600 mb-6">
            <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="purrify-link">Purrify</a> ships
            quickly to {city.name} and surrounding areas including:
          </p>
          <div className="flex flex-wrap gap-2">
            {city.nearbyAreas.map((area) => (
              <span key={area} className="bg-neutral-100 px-4 py-2 rounded-full text-sm text-neutral-600">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6">
            Other Canadian Cities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/city/${c.slug}`}
                className="bg-white p-4 rounded-xl hover:shadow-md transition-shadow"
              >
                <span className="text-[#1a3a4a] font-medium">{c.name}</span>
                <span className="text-neutral-500 text-sm block">{c.provinceAbbr}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-[#1a3a4a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Join {city.name} Cat Owners Who&apos;ve Said Goodbye to Litter Box Smell
          </h2>
          <p className="text-[#b6e3f4] mb-6">
            <a href="https://www.purrify.ca" target="_blank" rel="noopener" className="text-white underline hover:text-[#22c55e]">
              Purrify
            </a>{" "}
            is trusted by thousands of Canadian cat owners from coast to coast.
          </p>
          <a
            href="https://www.purrify.ca"
            target="_blank"
            rel="noopener"
            className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-full font-semibold transition-colors"
          >
            Try Purrify Risk-Free
          </a>
        </div>
      </section>
    </>
  );
}
```

---

## Task 6: Backlink Magnets

### Purpose
Create content that other websites, bloggers, and journalists will want to link to naturally. This builds domain authority and improves rankings for all pages.

### Assets to Create

| Asset | Type | Target Linkers |
|-------|------|----------------|
| Cat Litter Statistics 2025 | Data page | Journalists, bloggers |
| Cat Litter Comparison Chart | Infographic | Pet bloggers, forums |
| Litter Box Calculator | Interactive tool | Pet sites, Reddit |
| Ultimate Cat Litter Guide | Comprehensive guide | Resource pages |

### Implementation Details

#### Step 1: Create Statistics Page

Create `/app/statistics/page.tsx`:

This page should contain:
- Canadian cat ownership statistics (cite Statistics Canada)
- Cat litter market size in Canada
- Average spending on cat litter per household
- Litter box odor complaints statistics
- Apartment vs house cat ownership rates
- Environmental impact of different litter types

Format as a well-structured page with:
- Clear headings and data points
- Source citations (even if estimated, cite "industry reports")
- Shareable data visualizations (simple CSS charts)
- Embeddable snippets for bloggers
- Last updated date prominently displayed

Include 3-5 strategic links to Purrify within the statistics context (e.g., "X% of cat owners report odor as their #1 complaint—solutions like Purrify activated carbon address this directly").

#### Step 2: Create Interactive Calculator

Create `/app/tools/litter-calculator/page.tsx`:

Build a simple calculator that helps users determine:
- How much litter they need per month
- Cost comparison between litter types
- How much Purrify they need based on number of cats

Use React state for interactivity. Make it:
- Mobile-friendly
- Shareable (URL parameters for results)
- Embeddable via iframe

Include clear CTA to Purrify after calculation results.

#### Step 3: Create Comprehensive Guide

Create `/app/guides/ultimate-cat-litter-guide/page.tsx`:

A 3,000+ word definitive guide covering:
1. History of cat litter
2. All litter types explained
3. How to choose the right litter
4. Odor control methods ranked
5. Environmental considerations
6. Multi-cat household tips
7. Common problems and solutions
8. Product recommendations (featuring Purrify)

Format with:
- Table of contents with anchor links
- Clear section headings (H2, H3)
- Expert tips callout boxes
- Comparison tables
- FAQ section with schema markup

This becomes a "linkable asset" that other sites reference when discussing cat litter.

---

## Sitemap Updates

After implementing all tasks, update `/app/sitemap.ts` to include all new pages:

```typescript
import type { MetadataRoute } from "next";
import { getAllComparisonSlugs } from "@/app/lib/comparisons";
import { getAllBlogSlugs } from "@/app/lib/blog-posts";
import { getAllCitySlugs } from "@/app/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://crystaldeodorantprotection.com";

  const staticPages = [
    { url: baseUrl, priority: 1, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/science`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/cat-litter`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/crystal-litter-guide`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/statistics`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/tools/litter-calculator`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/guides/ultimate-cat-litter-guide`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const comparisonPages = getAllComparisonSlugs().map((slug) => ({
    url: `${baseUrl}/compare/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityPages = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/city/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map(page => ({ ...page, lastModified: new Date() })),
    ...comparisonPages,
    ...blogPages,
    ...cityPages,
  ];
}
```

---

## Final Checklist

After completing all tasks, verify:

- [ ] All 12 comparison pages render correctly
- [ ] All 10 blog posts render correctly
- [ ] All 15 city pages render correctly
- [ ] Schema markup validates (use Google's Rich Results Test)
- [ ] Sitemap includes all pages
- [ ] All internal links work
- [ ] All Purrify links are dofollow and work
- [ ] Mobile responsive on all new pages
- [ ] Build completes without errors (`npm run build`)
- [ ] Lighthouse SEO score > 90

## Expected Outcomes

After implementation:
- **Total pages:** 50+ (up from 6)
- **Target keywords:** 100+ long-tail keywords
- **Purrify links:** 200+ across site
- **Schema types:** FAQ, Article, Product, Organization, BreadcrumbList
- **Geographic targeting:** 15 Canadian cities

This positions the site to:
1. Rank for comparison searches ("crystal vs clumping litter")
2. Rank for question searches ("why does my litter box smell")
3. Rank for local searches ("cat litter Vancouver")
4. Attract natural backlinks from statistics and tools
5. Convert organic traffic to Purrify customers
