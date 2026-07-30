import Link from "next/link";

/**
 * Minimal demo shell for private / transactional pages used in robots practice.
 * These routes are not linked in the main nav or sitemap.
 */
export default function PrivateDemoPage({ title, note }) {
  return (
    <section className="container not-found">
      <h1 className="section-heading">{title}</h1>
      <p className="section-intro" style={{ marginInline: "auto" }}>
        {note} This page is intentionally marked <code>noindex</code> so it
        does not appear in Google search results.
      </p>
      <div className="hero-actions">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
