import { ReactNode } from "react";

export interface SectionHeadingProps {
  /** Main heading text */
  title: string;
  /** Optional subtitle/description */
  subtitle?: string;
  /** Optional label above title */
  label?: string;
  /** Text alignment */
  align?: "left" | "center";
  /** Heading level for accessibility */
  as?: "h1" | "h2" | "h3";
  /** Additional className for title */
  className?: string;
  /** Color variant for dark backgrounds */
  dark?: boolean;
}

/**
 * Consistent section heading with optional label and subtitle.
 * Server component.
 */
export default function SectionHeading({
  title,
  subtitle,
  label,
  align = "center",
  as: Component = "h2",
  className = "",
  dark = false,
}: SectionHeadingProps) {
  const titleSizes: Record<NonNullable<SectionHeadingProps["as"]>, string> = {
    h1: "text-4xl sm:text-5xl lg:text-6xl",
    h2: "text-3xl sm:text-4xl",
    h3: "text-2xl sm:text-3xl",
  };

  return (
    <div className={`${align === "center" ? "text-center" : ""} mb-8 sm:mb-12`}>
      {label && (
        <span
          className={`
            font-bold text-xs tracking-[0.2em] uppercase mb-4 block
            ${dark ? "text-[#22c55e]" : "text-[#22c55e]"}
          `}
        >
          {label}
        </span>
      )}
      <Component
        className={`
          font-bold leading-tight
          ${titleSizes[Component]}
          ${dark ? "text-white" : "text-[#1a3a4a]"}
          ${className}
        `}
      >
        {title}
      </Component>
      {subtitle && (
        <p
          className={`
            mt-4 max-w-2xl text-lg
            ${align === "center" ? "mx-auto" : ""}
            ${dark ? "text-white/80" : "text-neutral-600"}
          `}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
