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
            Living in {city.name} presents unique challenges for cat owners. Whether you&apos;re in a downtown apartment,
            a suburban home, or anywhere in the {city.province} area, litter box odor can be a constant battle—especially
            during the months when windows stay closed.
          </p>

          <p className="text-neutral-600 mb-6">
            That&apos;s why thousands of {city.name} cat owners have discovered{" "}
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
                  <strong>7+ days odor-free</strong>—essential during {city.province}&apos;s cold months
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
