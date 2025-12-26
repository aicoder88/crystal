import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a3a4a] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Crystal Protection</h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Exploring natural odor control solutions from crystal technology
              to activated carbon. Discover the science behind fresh living.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/science"
                  className="text-neutral-300 hover:text-[#b6e3f4] text-sm transition-colors"
                >
                  The Science
                </Link>
              </li>
              <li>
                <Link
                  href="/cat-litter"
                  className="text-neutral-300 hover:text-[#b6e3f4] text-sm transition-colors"
                >
                  For Your Home
                </Link>
              </li>
              <li>
                <Link
                  href="/crystal-litter-guide"
                  className="text-neutral-300 hover:text-[#b6e3f4] text-sm transition-colors"
                >
                  Crystal Litter Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-300 hover:text-[#b6e3f4] text-sm transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-neutral-300 hover:text-[#b6e3f4] text-sm transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Purrify */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Recommended Solution
            </h3>
            <p className="text-neutral-300 text-sm mb-4">
              Looking for the best natural litter odor control?
            </p>
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="inline-block bg-[#22c55e] hover:bg-[#16a34a] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Visit Purrify.ca
            </a>
            <p className="text-neutral-400 text-xs mt-4">
              100% natural activated carbon
              <br />
              Made in Canada since 2019
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-600 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            &copy; {new Date().getFullYear()} Crystal Deodorant Protection. All
            rights reserved.
          </p>
          <p className="text-neutral-400 text-sm mt-2 sm:mt-0">
            Proudly partnered with{" "}
            <a
              href="https://www.purrify.ca"
              target="_blank"
              rel="noopener"
              className="text-[#b6e3f4] hover:text-white transition-colors"
            >
              Purrify
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
