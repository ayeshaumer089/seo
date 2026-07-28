import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container not-found">
      <h1 className="section-heading">Page not found</h1>
      <p className="section-intro" style={{ marginInline: "auto" }}>
        The page you are looking for does not exist in TechNest Academy.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}
