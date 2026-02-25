import Link from "next/link";

export interface BackLinkProps {
  href: string;
  /** Custom label text */
  label?: string;
}

/**
 * Consistent back navigation link.
 * Server component.
 */
export default function BackLink({ href, label }: BackLinkProps) {
  // Derive label from href if not provided
  const defaultLabel = href === "/blog"
    ? "Back to Blog"
    : href === "/crystal-litter-guide"
    ? "Back to Crystal Litter Guide"
    : href === "/"
    ? "Back to Home"
    : `Back`;

  return (
    <Link
      href={href}
      className="text-[#22c55e] text-sm font-medium hover:underline mb-6 inline-block"
    >
      &larr; {label || defaultLabel}
    </Link>
  );
}
