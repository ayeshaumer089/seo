import BlogCard from "@/components/BlogCard";
import { posts } from "@/data/posts";
import { absoluteUrl, blogOgImage, siteName } from "@/data/site";

const description =
  "Every TechNest Academy article in one place — beginner guides to web development, JavaScript, React, Next.js, CSS, HTML and freelancing.";

export const metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: absoluteUrl("/blog"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/blog"),
    siteName,
    title: `Blog | ${siteName}`,
    description,
    locale: "en_US",
    images: [blogOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${siteName}`,
    description,
    images: [blogOgImage.url],
  },
};

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
            Browse all {posts.length} TechNest Academy articles — practical,
            beginner-friendly guides to web development, JavaScript, React,
            Next.js, CSS, HTML, and freelancing.
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
