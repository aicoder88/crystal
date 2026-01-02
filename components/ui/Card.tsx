import Link from "next/link";
import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  /** Card style variant */
  variant?: "default" | "featured" | "elevated";
  /** Hover effect */
  hoverable?: boolean;
}

export interface LinkCardProps extends CardProps {
  href: string;
  /** Title for the card link */
  title?: string;
}

const variantStyles: Record<NonNullable<CardProps["variant"]>, string> = {
  default: "bg-neutral-50 border border-neutral-200",
  featured: "bg-gradient-to-b from-[#22c55e]/10 to-white border-2 border-[#22c55e]",
  elevated: "bg-white border border-neutral-200 shadow-lg",
};

/**
 * Basic card component.
 * Server component.
 */
export function Card({
  children,
  className = "",
  variant = "default",
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`
        rounded-xl p-6
        ${variantStyles[variant]}
        ${hoverable ? "hover:shadow-lg transition-shadow" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/**
 * Card that acts as a link.
 * Server component.
 */
export function LinkCard({
  children,
  href,
  title,
  className = "",
  variant = "default",
}: LinkCardProps) {
  return (
    <Link
      href={href}
      title={title}
      className={`
        block rounded-xl p-6
        ${variantStyles[variant]}
        hover:shadow-lg transition-shadow
        ${className}
      `}
    >
      {children}
    </Link>
  );
}

/**
 * Feature card with icon, title, and description.
 */
export interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
  variant?: CardProps["variant"];
}

export function FeatureCard({
  icon,
  title,
  description,
  href,
  linkText = "Learn more",
  variant = "default",
}: FeatureCardProps) {
  const content = (
    <>
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="font-semibold text-[#1a3a4a] mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 mb-3">{description}</p>
      {href && (
        <span className="text-[#22c55e] text-sm font-medium">
          {linkText} &rarr;
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <LinkCard href={href} variant={variant}>
        {content}
      </LinkCard>
    );
  }

  return <Card variant={variant}>{content}</Card>;
}
