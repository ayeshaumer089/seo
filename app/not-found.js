import Link from "next/link";
import { noIndexRobots } from "@/data/site";

export const metadata = {
  title: "Page not found",
  // Keep 404s out of the index so they don't consume crawl budget.
  robots: noIndexRobots,
};

export default function NotFound() {
  return (
    <section className="container not-found">
      <h1 className="section-heading">Page not found</h1>
      <p className="section-intro" style={{ marginInline: "auto" }}>
        The page you are looking for does not exist in TechNest Academy.
      </p>
      <div className="hero-actions">
        <Link href="/" className="btn btn-primary">
          Back to Home
        </Link>
        <Link href="/blog" className="btn btn-secondary">
          Browse all articles
        </Link>
      </div>
    </section>
  );
}
