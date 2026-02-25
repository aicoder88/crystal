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

      {/* Related Resources */}
      <section className="py-12 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1a3a4a] mb-6 text-center">
            More Resources
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <Link href="/compare/best-odor-control-litter" className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Cat Litter Comparisons</h3>
              <p className="text-sm text-neutral-600 mb-3">Compare all major litter types for odor control, cost, and performance</p>
              <span className="text-[#22c55e] text-sm font-medium">Browse comparisons →</span>
            </Link>

            <Link href="/guides/ultimate-cat-litter-guide" className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Ultimate Cat Litter Guide</h3>
              <p className="text-sm text-neutral-600 mb-3">Everything you need to know about choosing the right litter</p>
              <span className="text-[#22c55e] text-sm font-medium">Read guide →</span>
            </Link>

            <Link href="/crystal-litter-guide" className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">Crystal Litter Guide</h3>
              <p className="text-sm text-neutral-600 mb-3">In-depth look at silica crystal cat litter pros and cons</p>
              <span className="text-[#22c55e] text-sm font-medium">Learn more →</span>
            </Link>

            <Link href="/science" className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-[#1a3a4a] mb-2">The Science Behind Odor Control</h3>
              <p className="text-sm text-neutral-600 mb-3">How activated carbon eliminates odor at the molecular level</p>
              <span className="text-[#22c55e] text-sm font-medium">Explore science →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
