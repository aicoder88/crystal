import Link from "next/link";
import { ReactNode, AnchorHTMLAttributes } from "react";

export interface ButtonBaseProps {
  children: ReactNode;
  /** Button style variant */
  variant?: "primary" | "secondary" | "outline" | "ghost";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Full width button */
  fullWidth?: boolean;
  className?: string;
}

export interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  /** If true, opens in new tab with security attributes */
  external?: boolean;
}

export interface ButtonProps extends ButtonBaseProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<NonNullable<ButtonBaseProps["variant"]>, string> = {
  primary:
    "bg-[#22c55e] hover:bg-[#16a34a] text-white shadow-lg hover:shadow-xl",
  secondary:
    "bg-[#1a3a4a] hover:bg-[#0f2a36] text-white shadow-md",
  outline:
    "bg-transparent border-2 border-[#1a3a4a] hover:bg-[#1a3a4a] hover:text-white text-[#1a3a4a]",
  ghost:
    "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white",
};

const sizeStyles: Record<NonNullable<ButtonBaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-10 py-4 text-lg",
};

function getButtonClasses(
  variant: ButtonBaseProps["variant"] = "primary",
  size: ButtonBaseProps["size"] = "md",
  fullWidth: boolean = false,
  className: string = ""
): string {
  return `
    inline-flex items-center justify-center
    rounded-full font-semibold
    transition-all duration-200
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();
}

/**
 * Button component for internal/external links.
 * Server component compatible.
 */
export function ButtonLink({
  children,
  href,
  external = false,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: ButtonLinkProps) {
  const classes = getButtonClasses(variant, size, fullWidth, className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

/**
 * Button component for interactive actions.
 * Requires "use client" in parent if onClick is used.
 */
export function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${getButtonClasses(variant, size, fullWidth, className)}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}
