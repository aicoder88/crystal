import { ReactNode } from "react";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  /** Background variant */
  variant?: "white" | "light" | "dark" | "gradient";
  /** Padding size */
  size?: "sm" | "md" | "lg" | "xl";
  /** ID for anchor links */
  id?: string;
}

const variantStyles: Record<NonNullable<SectionProps["variant"]>, string> = {
  white: "bg-white",
  light: "bg-neutral-50",
  dark: "bg-[#1a3a4a] text-white",
  gradient: "bg-gradient-to-b from-[#b6e3f4]/20 to-white",
};

const sizeStyles: Record<NonNullable<SectionProps["size"]>, string> = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20",
  xl: "py-20 sm:py-24",
};

/**
 * Reusable section wrapper with consistent styling.
 * Server component - no client-side interactivity needed.
 */
export default function Section({
  children,
  className = "",
  variant = "white",
  size = "md",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </section>
  );
}
