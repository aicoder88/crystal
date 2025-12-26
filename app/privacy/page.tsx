import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Crystal Deodorant Protection. Learn how we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#1a3a4a] mb-8">
          Privacy Policy
        </h1>
        <p className="text-neutral-500 text-sm mb-8">
          Last updated: {new Date().toLocaleDateString("en-CA")}
        </p>

        <div className="prose prose-neutral max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Introduction
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Crystal Deodorant Protection (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your
              privacy and is committed to protecting your personal information.
              This Privacy Policy explains how we collect, use, and safeguard
              your information when you visit our website
              crystaldeodorantprotection.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Information We Collect
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We collect minimal information to provide you with a better
              experience:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>
                <strong>Usage Data:</strong> We use Vercel Analytics to collect
                anonymous usage data such as page views, referral sources, and
                general geographic location. This data is aggregated and cannot
                identify you personally.
              </li>
              <li>
                <strong>Cookies:</strong> We use essential cookies to ensure the
                website functions properly. We do not use tracking cookies for
                advertising purposes.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              How We Use Your Information
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We use the collected information to:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>Improve our website content and user experience</li>
              <li>Understand how visitors interact with our site</li>
              <li>Monitor and analyze usage trends</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Third-Party Links
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Our website contains links to third-party websites, including
              purrify.ca. We are not responsible for the privacy practices of
              these external sites. We encourage you to review their privacy
              policies before providing any personal information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Data Security
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to
              protect the information we collect. Our website is hosted on
              Vercel with SSL encryption to ensure secure data transmission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Your Rights
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-neutral-600 space-y-2">
              <li>The right to access your personal information</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt out of analytics tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Children&apos;s Privacy
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Our website is not intended for children under 13 years of age. We
              do not knowingly collect personal information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Changes to This Policy
            </h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#1a3a4a] mb-4">
              Contact Us
            </h2>
            <p className="text-neutral-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please
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
