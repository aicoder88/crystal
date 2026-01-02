import { ReactNode } from "react";
import { ButtonLink } from "./ui/Button";
import Container from "./ui/Container";
import Section from "./ui/Section";

export interface CTASectionProps {
  /** Main heading */
  title: string;
  /** Supporting text */
  description: string;
  /** Primary CTA button */
  primaryAction: {
    label: string;
    href: string;
    external?: boolean;
  };
  /** Optional secondary CTA */
  secondaryAction?: {
    label: string;
    href: string;
    external?: boolean;
  };
  /** Optional footer text */
  footer?: ReactNode;
  /** Background variant */
  variant?: "dark" | "light" | "accent";
}

/**
 * Reusable call-to-action section.
 * Centralizes the CTA pattern used across multiple pages.
 * Server component.
 */
export default function CTASection({
  title,
  description,
  primaryAction,
  secondaryAction,
  footer,
  variant = "dark",
}: CTASectionProps) {
  const bgStyles: Record<NonNullable<CTASectionProps["variant"]>, string> = {
    dark: "bg-[#1a3a4a]",
    light: "bg-neutral-50",
    accent: "bg-[#22c55e]/10 border-2 border-[#22c55e]",
  };

  const textStyles: Record<NonNullable<CTASectionProps["variant"]>, { heading: string; body: string }> = {
    dark: {
      heading: "text-white",
      body: "text-[#b6e3f4]",
    },
    light: {
      heading: "text-[#1a3a4a]",
      body: "text-neutral-600",
    },
    accent: {
      heading: "text-[#1a3a4a]",
      body: "text-neutral-600",
    },
  };

  // Use section variant for proper background
  const sectionVariant = variant === "dark" ? "dark" : "white";

  return (
    <Section variant={sectionVariant} size="xl" className={variant === "accent" ? bgStyles.accent : ""}>
      <Container size="md" center>
        <h2 className={`text-3xl sm:text-4xl font-bold mb-6 ${textStyles[variant].heading}`}>
          {title}
        </h2>
        <p className={`text-lg mb-10 max-w-2xl mx-auto font-light leading-relaxed ${textStyles[variant].body}`}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink
            href={primaryAction.href}
            external={primaryAction.external}
            variant="primary"
            size="lg"
          >
            {primaryAction.label}
          </ButtonLink>
          {secondaryAction && (
            <ButtonLink
              href={secondaryAction.href}
              external={secondaryAction.external}
              variant={variant === "dark" ? "ghost" : "outline"}
              size="lg"
            >
              {secondaryAction.label}
            </ButtonLink>
          )}
        </div>
        {footer && (
          <div className={`mt-8 text-sm ${variant === "dark" ? "text-white/50" : "text-neutral-500"}`}>
            {footer}
          </div>
        )}
      </Container>
    </Section>
  );
}
