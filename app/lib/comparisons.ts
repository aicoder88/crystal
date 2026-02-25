export interface LitterType {
  name: string;
  material: string;
  odorControl: "Poor" | "Moderate" | "Good" | "Excellent";
  dustLevel: "High" | "Moderate" | "Low" | "None";
  tracking: "High" | "Moderate" | "Low" | "None";
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
  recommendedEnhancement: string;
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
    verdict: "Crystal litter offers superior dust and tracking performance, while clay remains the benchmark for cost and cat acceptance. Significantly, neither provides a total molecular barrier to ammonia. For comprehensive odor elimination, adding a concentrated porous media (activated carbon) to the base litter is the most effective technical solution.",
    recommendedEnhancement: "To achieve maximum efficacy, we recommend enhancing your preferred base litter with a high-surface-area activated carbon additive. This approach utilizes molecular adsorption to trap odor compounds that traditional litters only partially absorb."
  },
  {
    slug: "crystal-vs-clumping",
    title: "Crystal Cat Litter vs Clumping: Complete Comparison Guide",
    metaDescription: "Crystal cat litter vs clumping litter compared. Learn about odor control, ease of cleaning, cost, and which Canadian cat owners prefer.",
    targetKeyword: "crystal vs clumping cat litter",
    intro: "Crystal cat litter and clumping litter take completely different approaches to managing your cat's waste. Crystal absorbs moisture throughout the entire litter bed, while clumping forms tight balls you scoop out. Each has passionate fans—but which actually performs better for odor control in Canadian homes?",
    litter1: litterTypes.crystal,
    litter2: litterTypes.clumping,
    verdict: "Clumping litter provides practical advantages in daily maintenance and high feline acceptance rates. Crystal litter offers extended duration between substrate replacements but lacks consistent molecular trapping. Integrating activated carbon into clumping litter represents the current technical standard for odor management.",
    recommendedEnhancement: "Researchers suggest that maintaining a clumping substrate for ease of cleaning while adding a carbon-based molecular trap provides a superior environmental profile for indoor spaces."
  },
  {
    slug: "crystal-vs-pine",
    title: "Crystal Cat Litter vs Pine Litter: Pros, Cons & Best Choice",
    metaDescription: "Crystal cat litter vs pine litter compared for odor control, eco-friendliness, and cat acceptance. Find the best option for your home.",
    targetKeyword: "crystal cat litter vs pine",
    intro: "Looking for an alternative to traditional clay litter? Crystal and pine are two popular options with very different approaches. Crystal uses synthetic silica gel, while pine uses natural compressed wood. If you care about the environment but also want good odor control, this comparison will help you decide.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.pine,
    verdict: "Pine litter excels in sustainability and natural volatiles (terpenes) for masking, though its macro-structure may lead to feline aversion. Crystal litter provides lower tracking but higher environmental cost. Augmenting natural substrates with activated carbon (such as coconut-based media) provides the most potent odor control without sacrificing sustainability.",
    recommendedEnhancement: "For sustainable odor control, we recommend combining natural wood-based litters with a high-purity activated carbon additive. This creates a dual-action system of moisture absorption and molecular adsorption."
  },
  {
    slug: "crystal-vs-tofu",
    title: "Crystal Cat Litter vs Tofu Litter: Which Is Best in 2025?",
    metaDescription: "Compare crystal cat litter vs tofu litter for odor control, flushability, eco-friendliness, and cost. Updated guide for Canadian cat owners.",
    targetKeyword: "crystal vs tofu cat litter",
    intro: "Tofu litter has gained massive popularity as an eco-friendly, flushable alternative to traditional options. But how does it compare to crystal litter for odor control? This comparison breaks down everything you need to know about these two innovative litter types.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.tofu,
    verdict: "Tofu-based substrates represent a significant advancement in flushability and safety. Crystal litter maintains a slight advantage in moisture-wicking speed. Combining a tofu substrate with a specialized carbon additive yields a system that is both environmentally responsible and technically superior in odor mitigation.",
    recommendedEnhancement: "To optimize the performance of plant-based substrates like tofu, the addition of a high-surface-area activated carbon is suggested. This addresses the inherent limitations of organic fibers in trapping gaseous ammonia."
  },
  {
    slug: "crystal-vs-paper",
    title: "Crystal Cat Litter vs Paper Litter: Comparison for Sensitive Cats",
    metaDescription: "Crystal vs paper cat litter compared. Best choice for cats with allergies, post-surgery recovery, and sensitive paws.",
    targetKeyword: "crystal vs paper cat litter",
    intro: "If your cat has allergies, respiratory issues, or is recovering from surgery, you need a low-dust litter option. Crystal and paper litter both market themselves as low-dust alternatives—but they perform very differently in real homes.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.paper,
    verdict: "Paper-based substrates are uniquely positioned for high-sensitivity applications where dust elimination is paramount. However, their molecular trapping capacity is statistically lower than other media. Enhancing paper litter with a dust-free carbon additive provides a safe, high-performance solution.",
    recommendedEnhancement: "For cats with respiratory sensitivities, we suggest augmenting paper-based substrates with a specialized, dust-free activated carbon. This maintains the hypoallergenic profile while providing a robust defense against ammonia build-up."
  },
  {
    slug: "crystal-vs-wheat",
    title: "Crystal Cat Litter vs Wheat Litter: Natural vs Synthetic Compared",
    metaDescription: "Crystal silica litter vs natural wheat litter. Compare odor control, clumping, flushability, and which is better for your cat.",
    targetKeyword: "crystal vs wheat cat litter",
    intro: "Wheat litter represents the natural, biodegradable approach to cat litter, while crystal takes the synthetic high-absorption route. Both promise good odor control through different mechanisms. Which actually delivers for Canadian cat owners?",
    litter1: litterTypes.crystal,
    litter2: litterTypes.wheat,
    verdict: "Natural wheat litters utilize organic enzymes for initial odor control, while silica crystals rely on physical absorption. The technical ceiling for natural odor control is significantly elevated when enzyme-based substrates are paired with molecular carbon traps.",
    recommendedEnhancement: "We recommend a dual-action approach for organic substrates: utilizing wheat's natural enzymes alongside a high-density activated carbon additive for maximum molecular neutralization."
  },
  {
    slug: "crystal-vs-corn",
    title: "Crystal Cat Litter vs Corn Litter: Full Comparison",
    metaDescription: "Compare crystal cat litter to corn litter. Learn about odor control, safety, eco-impact, and which works better for multi-cat homes.",
    targetKeyword: "crystal vs corn litter",
    intro: "Corn litter has become a popular natural alternative, offering clumping ability and flushability that crystal can't match. But crystal litter fans love its longevity and low tracking. Here's how these two litter types actually compare for odor control.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.corn,
    verdict: "Corn-based substrates provide excellent clumping and environmental profiles, whereas crystal litter offers longevity. Both reach saturation points where odor mitigation fails. The implementation of an activated carbon additive extends the effective lifecycle of corn litters significantly.",
    recommendedEnhancement: "To maximize the lifecycle of corn-based substrates, the introduction of a molecular carbon trap is advised. This prevents the 'saturation smell' often associated with organic litter types."
  },
  {
    slug: "crystal-vs-walnut",
    title: "Crystal Cat Litter vs Walnut Shell Litter: Odor Control Showdown",
    metaDescription: "Crystal vs walnut shell cat litter compared. Which has better natural odor control? Complete guide for Canadian cat owners.",
    targetKeyword: "crystal vs walnut cat litter",
    intro: "Walnut shell litter is praised for its exceptional natural odor control—some say the best of any plant-based litter. But how does it compare to crystal litter's moisture absorption? This comparison reveals which approach actually works better.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.walnut,
    verdict: "Walnut shell media demonstrates a high natural capacity for volatile capture. Compared to silica's moisture-centric approach, walnut is technically superior for ambient odor management. High-performance households may find that adding an additional carbon stage creates an unprecedented standard of freshness.",
    recommendedEnhancement: "For users of premium walnut-based media, the addition of a secondary activated carbon stage is recommended to reach an elite standard of odor control in challenging environments."
  },
  {
    slug: "silica-vs-clay",
    title: "Silica Gel Cat Litter vs Clay: Complete Guide",
    metaDescription: "Silica gel cat litter compared to traditional clay. Which is better for odor, dust, and your cat? Canadian buyer's guide.",
    targetKeyword: "silica cat litter vs clay",
    intro: "Silica gel litter (also called crystal litter) was introduced as a premium alternative to traditional clay. But is it actually better? This guide compares these two popular litter types across all the factors that matter to Canadian cat owners.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.clay,
    verdict: "The analysis of silica vs. clay reveals that while silica tracks less, clay's accessibility and acceptance are unmatched. Neither provides a durable molecular defense over 48 hours. The most resilient configuration involves an activated carbon additive regardless of the base mineral used.",
    recommendedEnhancement: "Our recommendation for both silica and clay users is to utilize the base material for moisture control and supplement with a high-purity activated carbon for molecular odor neutralization."
  },
  {
    slug: "silica-vs-clumping",
    title: "Silica Cat Litter vs Clumping: Which Should You Choose?",
    metaDescription: "Silica gel litter vs clumping clay compared. Maintenance, cost, odor control, and cat preference analyzed for Canadian homes.",
    targetKeyword: "silica vs clumping litter",
    intro: "The silica vs clumping debate divides cat owners. Silica fans love the long-lasting crystals, while clumping devotees prefer the easy scoop-and-go maintenance. Let's break down which actually performs better for your home and your cat.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.clumping,
    verdict: "Clumping substrates remain the standard for feline behavioral acceptance and maintenance efficiency. Silica gel offers lower tracking. For high-performance odor control, adding a high-density activated carbon to a clumping base provides a more robust molecular barrier than silica alone.",
    recommendedEnhancement: "Our technical analysis suggests that augmenting a reliable clumping litter with a concentrated activated carbon additive provides the optimal balance of cleaning efficiency and molecular odor elimination."
  },
  {
    slug: "activated-carbon-vs-crystal",
    title: "Activated Carbon vs Crystal Cat Litter: The Odor Control Battle",
    metaDescription: "Compare activated carbon cat litter additives to crystal silica litter. Learn which method actually eliminates odor vs just absorbing moisture.",
    targetKeyword: "activated carbon vs crystal litter",
    intro: "Crystal litter and activated carbon take fundamentally different approaches to odor control. Crystal absorbs moisture to reduce smell, while activated carbon traps odor molecules directly. Understanding this difference is key to finally solving your litter box odor problems.",
    litter1: litterTypes.crystal,
    litter2: litterTypes.activatedCarbon,
    verdict: "Activated carbon serves as a technical benchmark for molecular adsorption, while crystal litter functions through moisture absorption. The two technologies operate on different physical principles; for true chemical neutralization of odor compounds, porous carbon media is fundamentally more effective.",
    recommendedEnhancement: "For users currently utilizing crystal or clay substrates, we recommend evaluating an activated carbon additive as a technical upgrade rather than a total substrate replacement."
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
    recommendedEnhancement: "For those prioritizing long-term air quality, we suggest enhancing your clumping litter with a high-surface-area activated carbon additive. This creates a more robust molecular barrier than any single substrate can provide."
  }
];

export function getComparisonBySlug(slug: string): Comparison | undefined {
  return comparisons.find(c => c.slug === slug);
}

export function getAllComparisonSlugs(): string[] {
  return comparisons.map(c => c.slug);
}
