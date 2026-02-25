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
