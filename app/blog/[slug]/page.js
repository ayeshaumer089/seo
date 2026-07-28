import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getPostBySlug, posts } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container article-page">
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <Link href="/blog" className="back-link">
          ← Back to Blog
        </Link>
        <p className="category-pill">{post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-meta">
          <span>By {post.author}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>
      </section>

      <img
        className="article-hero-image"
        src={post.image}
        alt=""
      />

      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
