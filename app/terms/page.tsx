import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Crystal Deodorant Protection. Read our terms and conditions for using this website.",
};

export default function TermsPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1a3a4a] mb-8">
          Terms of Service
        </h1>
        <p className="text-neutral-500 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString("en-CA")}
        </p>

        <div className="prose prose-neutral max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Agreement to Terms
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              By accessing and using Crystal Deodorant Protection
              (crystaldeodorantprotection.com), you agree to be bound by these
              Terms of Service. If you do not agree with any part of these
              terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Use of Website
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              This website is provided for informational and educational
              purposes only. The content on this site is intended to provide
              general information about natural odor control products including
              crystal deodorants, crystal cat litter, and activated carbon
              solutions.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>Use the website only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to any part of the site</li>
              <li>Not use the site in any way that could damage or impair it</li>
              <li>Not reproduce, duplicate, or exploit any part of the site without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Intellectual Property
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The content on this website, including text, graphics, logos, and
              images, is owned by Crystal Deodorant Protection or its licensors
              and is protected by copyright and other intellectual property
              laws.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              You may view and print content for personal, non-commercial use
              only. Any other use requires our prior written permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Third-Party Links
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Our website contains links to third-party websites, including our
              partner site purrify.ca. These links are provided for your
              convenience and information. We do not endorse or assume
              responsibility for the content, privacy policies, or practices of
              any third-party sites.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              When you click on a link to a third-party website, you leave our
              site and are subject to the terms and privacy policies of that
              external site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Disclaimer
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              The information provided on this website is for general
              informational purposes only. While we strive to provide accurate
              and up-to-date information, we make no representations or
              warranties of any kind, express or implied, about the
              completeness, accuracy, reliability, or suitability of the
              information.
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              <strong>Health Disclaimer:</strong> Information about crystal
              deodorants and pet products is provided for educational purposes
              only and should not be considered medical or veterinary advice.
              Always consult with appropriate professionals for health-related
              decisions.
            </p>
            <p className="text-neutral-600 leading-relaxed">
              <strong>Product Disclaimer:</strong> Product information,
              including pricing and availability mentioned on this site, is
              subject to change. Please verify all details on the respective
              product websites before making purchases.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Limitation of Liability
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              In no event shall Crystal Deodorant Protection be liable for any
              direct, indirect, incidental, special, consequential, or punitive
              damages arising out of your use of, or inability to use, this
              website or any content thereon.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Affiliate Disclosure
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              This website may contain affiliate links to products and services.
              We may receive compensation when you click on links and make
              purchases. This does not affect our editorial content or the price
              you pay.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Changes to Terms
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to this page.
              Your continued use of the website after any changes constitutes
              acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Governing Law
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of Canada, without regard to its conflict
              of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us through our partner website at{" "}
              <a
                href="https://www.purrify.ca"
                target="_blank"
                rel="noopener"
                className="text-[#22c55e] hover:underline"
              >
                purrify.ca
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
