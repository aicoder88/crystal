import DOMPurify from "isomorphic-dompurify";

/**
 * Sanitize HTML content to prevent XSS attacks.
 * Uses DOMPurify with a configured allowlist of tags and attributes.
 */
export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      "h1", "h2", "h3", "h4", "h5", "h6",
      "p", "br", "hr",
      "ul", "ol", "li",
      "strong", "em", "b", "i", "u", "s",
      "a", "span",
      "blockquote", "pre", "code",
      "table", "thead", "tbody", "tr", "th", "td",
      "img", "figure", "figcaption",
      "div", "section", "article",
    ],
    ALLOWED_ATTR: [
      "href", "target", "rel",
      "src", "alt", "width", "height",
      "class", "id",
      "title",
    ],
    // Force all links to have noopener noreferrer
    ADD_ATTR: ["target"],
    ALLOW_DATA_ATTR: false,
  });
}

/**
 * Sanitize HTML and add security attributes to links.
 * This ensures all external links have rel="noopener noreferrer".
 */
export function sanitizeHtmlWithSecureLinks(html: string): string {
  const sanitized = sanitizeHtml(html);

  // Add rel="noopener noreferrer" to all links with target="_blank"
  return sanitized.replace(
    /<a\s+([^>]*?)target="_blank"([^>]*?)>/gi,
    (match, before, after) => {
      // Check if rel already exists
      const hasRel = /rel=/.test(before + after);
      if (hasRel) {
        // Update existing rel to include noopener noreferrer
        return match.replace(
          /rel="([^"]*)"/,
          (relMatch, relValue) => {
            const rels = new Set(relValue.split(/\s+/).filter(Boolean));
            rels.add("noopener");
            rels.add("noreferrer");
            return `rel="${Array.from(rels).join(" ")}"`;
          }
        );
      }
      // Add rel attribute
      return `<a ${before}target="_blank" rel="noopener noreferrer"${after}>`;
    }
  );
}
