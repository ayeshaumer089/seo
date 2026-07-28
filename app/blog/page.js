import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default function BlogPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>
            Browse all TechNest Academy articles. Each post includes headings,
            examples, an image, an author, and a publish date.
          </p>
        </div>
      </section>

      <section className="container blog-page-grid">
        {sortedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}
