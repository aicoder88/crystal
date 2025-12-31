import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/app/lib/blog-posts";
import { sanitizeHtmlWithSecureLinks } from "@/app/lib/sanitize";

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
            dangerouslySetInnerHTML={{ __html: sanitizeHtmlWithSecureLinks(post.content) }}
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
              rel="noopener noreferrer"
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
