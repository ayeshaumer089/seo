import Link from "next/link";
import { formatDate } from "@/data/posts";

export default function BlogCard({ post }) {
  return (
    <article className="blog-card">
      {/* The image is this link's only content, so it needs a real alt to
          give the link an accessible name. */}
      <Link href={`/blog/${post.slug}`} className="blog-card-media">
        <img src={post.image} alt={post.title} loading="lazy" />
      </Link>

      <div className="blog-card-body">
        <p className="blog-card-meta">
          <span className="category-pill">{post.category}</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
        </p>

        <h3 className="blog-card-title">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>

        <p className="blog-card-excerpt">{post.excerpt}</p>

        <p className="blog-card-author">By {post.author}</p>
      </div>
    </article>
  );
}
