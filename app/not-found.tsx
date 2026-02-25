import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-6xl font-black text-[#1a3a4a]">404</span>
        </div>
        <h1 className="text-2xl font-bold text-[#1a3a4a] mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-600 mb-8">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been
          moved or no longer exists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/blog"
            className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Browse Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
