import { ReactNode } from "react";

export interface PurrifyLinkProps {
  children: ReactNode;
  className?: string;
  /** If true, the link opens in a new tab */
  newTab?: boolean;
}

/**
 * Consistent external link to Purrify website.
 * Centralizes the URL and styling for affiliate links.
 * Server component.
 */
export default function PurrifyLink({
  children,
  className = "",
  newTab = true,
}: PurrifyLinkProps) {
  const linkProps = newTab
    ? { target: "_blank", rel: "noopener" }
    : {};

  return (
    <a
      href="https://www.purrify.ca"
      {...linkProps}
      className={`purrify-link ${className}`}
    >
      {children}
    </a>
  );
}
