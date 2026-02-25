import Container from "./ui/Container";
import Section from "./ui/Section";
import SectionHeading from "./ui/SectionHeading";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSectionProps {
  /** Array of FAQ items */
  faqs: FAQItem[];
  /** Optional section title */
  title?: string;
  /** Show structured data schema */
  includeSchema?: boolean;
  /** Background variant */
  variant?: "white" | "light";
}

/**
 * FAQ section with optional JSON-LD schema.
 * Server component - no client-side interactivity.
 *
 * Note: For an accordion version, create a separate client component.
 */
export default function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  includeSchema = true,
  variant = "white",
}: FAQSectionProps) {
  // Generate FAQ schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <Section variant={variant}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <Container size="md">
        <SectionHeading title={title} as="h2" />
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-50 rounded-xl p-6"
            >
              <h3 className="font-semibold text-[#1a3a4a] mb-2">
                {faq.question}
              </h3>
              <p className="text-neutral-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
