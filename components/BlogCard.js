import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/data/posts";

export default function BlogCard({ post, priority = false }) {
  return (
    <article className="blog-card">
      {/* Image link needs a real alt so the link has an accessible name. */}
      <Link href={`/blog/${post.slug}`} className="blog-card-media">
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={700}
          sizes="(max-width: 768px) 100vw, 33vw"
          loading={priority ? "eager" : "lazy"}
          priority={priority}
        />
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
