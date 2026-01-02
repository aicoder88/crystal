"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <span className="text-6xl" role="img" aria-label="Warning">
            ⚠️
          </span>
        </div>
        <h1 className="text-2xl font-bold text-[#1a3a4a] mb-4">
          Something Went Wrong
        </h1>
        <p className="text-neutral-600 mb-8">
          We encountered an unexpected error. Please try again, or contact us if
          the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="bg-[#1a3a4a] hover:bg-[#0f2a36] text-white px-6 py-3 rounded-full font-semibold transition-colors inline-block"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
