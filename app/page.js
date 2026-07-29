import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { categories, getLatestPosts } from "@/data/posts";
import { siteDescription, siteName, siteTitle } from "@/data/site";

export const metadata = {
  // `title` is intentionally omitted so the layout's `title.default` (siteTitle)
  // is used verbatim, rather than being run through the "%s | TechNest Academy"
  // template and producing a doubled brand name.
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
};

export default function HomePage() {
  const latestPosts = getLatestPosts(6);

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-brand">TechNest Academy</p>
          <h1 className="hero-title">Learn technology with clear, friendly guides</h1>
          <p className="hero-text">
            Practical articles on web development, JavaScript, React, and modern
            digital skills — written for curious beginners.
          </p>
          <div className="hero-actions">
            <Link href="/blog" className="btn btn-primary">
              Read the Blog
            </Link>
            <Link href="/about" className="btn btn-secondary">
              About Us
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-heading">Explore the site</h2>
          <p className="section-intro">
            Jump to the main pages of TechNest Academy.
          </p>
          <div className="home-nav-links">
            <Link href="/blog" className="home-nav-card">
              <span className="home-nav-label">Blog</span>
              <span className="home-nav-text">
                Browse all articles and tutorials.
              </span>
            </Link>
            <Link href="/about" className="home-nav-card">
              <span className="home-nav-label">About</span>
              <span className="home-nav-text">
                Learn who we are and how we teach.
              </span>
            </Link>
            <Link href="/contact" className="home-nav-card">
              <span className="home-nav-label">Contact</span>
              <span className="home-nav-text">
                Send a message or ask a question.
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container about-preview">
          <div>
            <h2 className="section-heading">Built for learners who want clarity</h2>
            <p className="section-intro">
              TechNest Academy publishes practical guides on web development,
              JavaScript, React, and Next.js. We focus on simple explanations,
              useful examples, and a calm learning pace.
            </p>
            <div className="hero-actions">
              <Link href="/about" className="btn btn-primary">
                Learn More
              </Link>
              <Link href="/blog" className="btn btn-secondary">
                View Blog
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="about-preview-panel" aria-hidden="true" />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-heading">Latest articles</h2>
          <p className="section-intro">
            Fresh reads across development, design foundations, freelancing, and
            learning strategies.
          </p>
          <div className="posts-grid">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="home-section-cta">
            <Link href="/blog" className="btn btn-primary">
              View all blog posts
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 className="section-heading">Browse by category</h2>
          <p className="section-intro">
            Jump into the topics that match what you want to practice next.
          </p>
          <div className="categories-grid">
            {categories.map((category) => (
              <Link key={category} href="/blog" className="category-item">
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
