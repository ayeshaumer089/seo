import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import Newsletter from "@/components/Newsletter";
import { categories, getLatestPosts } from "@/data/posts";

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
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-preview">
          <div>
            <h2 className="section-heading">Built for learners who want clarity</h2>
            <p className="section-intro">
              TechNest Academy is a fictional technology blog created to make
              coding topics approachable. We focus on simple explanations,
              useful examples, and a calm learning pace.
            </p>
            <Link href="/about" className="btn btn-primary">
              Learn More
            </Link>
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
