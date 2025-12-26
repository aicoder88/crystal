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
